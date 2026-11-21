import * as THREE from 'three';

// What things are made of. dens: tonnes per cubic metre. tough: how much blast a piece takes before it breaks.
// lat: cost of being held from the side (lower = spans further). sup: can it carry other pieces.
// over: how many times its normal load a piece can take before it is crushed.
export const MAT = { BRICK: 0, STONE: 1, STUCCO: 2, TIMBER: 3, SLATE: 4, GLASS: 5, PLASTER: 6, METAL: 7, EARTH: 8 };
// Masonry is tied together (iron cramps, timber lacing, good mortar): a shell still blows its hole, but the wall
// round the hole hangs on to its neighbours rather than dropping, and what is left carries the load without crushing.
export const MATP = [
  { dens: 1.8, tough: 1.0, lat: 0.55, sup: 1, over: 5.5, col: [0.30, 0.15, 0.11] },
  { dens: 2.4, tough: 1.35, lat: 0.55, sup: 1, over: 6.0, col: [0.30, 0.29, 0.27] },
  { dens: 1.8, tough: 1.0, lat: 0.55, sup: 1, over: 5.5, col: [0.36, 0.27, 0.21] },
  { dens: 0.6, tough: 0.7, lat: 0.45, sup: 1, over: 6.0, col: [0.17, 0.12, 0.08] },
  { dens: 0.7, tough: 0.45, lat: 0.6, sup: 1, over: 6.0, col: [0.13, 0.14, 0.16] },
  { dens: 0.3, tough: 0.06, lat: 1.0, sup: 0, over: 9.0, col: [0.22, 0.26, 0.30] },
  { dens: 1.2, tough: 0.6, lat: 0.7, sup: 1, over: 4.0, col: [0.40, 0.38, 0.33] },
  { dens: 2.0, tough: 1.2, lat: 0.6, sup: 1, over: 4.0, col: [0.10, 0.10, 0.10] },
  { dens: 1.5, tough: 0.5, lat: 1.0, sup: 1, over: 2.0, col: [0.09, 0.07, 0.05] },
];

const FACES = [                       // [axis, sign, corner indices counter-clockwise from outside]
  [0, -1, 0, 3, 7, 4], [0, 1, 1, 5, 6, 2], [1, -1, 0, 1, 2, 3], [1, 1, 4, 7, 6, 5], [2, -1, 0, 4, 5, 1], [2, 1, 3, 2, 6, 7],
];
const INF = 1e9;
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _n = new THREE.Vector3();

// A building, wall or bridge made of separate pieces that hold each other up.
export class Structure {
  constructor(world, o) {
    this.world = world; this.name = o.name || 'structure'; this.kind = o.kind || 'house';
    this.pos = new THREE.Vector3(o.x || 0, o.y || 0, o.z || 0); this.yaw = o.yaw || 0;
    this.c = Math.cos(this.yaw); this.s = Math.sin(this.yaw);
    this.limit = o.limit || 3.0; this.cell = o.cell || 0.5; this.deck = !!o.deck;
    this.P = []; this._v = { pos: [], nor: [], tex: [], info: [], tint: [], idx: [] };
    this.dirty = false; this.timer = 0; this.removed = []; this.alive = 0; this.total = 0;
  }
  toLocal(wx, wy, wz, out) { const dx = wx - this.pos.x, dz = wz - this.pos.z; out.x = dx * this.c - dz * this.s; out.y = wy - this.pos.y; out.z = dx * this.s + dz * this.c; return out; }
  toWorld(lx, ly, lz, out) { out.x = this.pos.x + lx * this.c + lz * this.s; out.y = this.pos.y + ly; out.z = this.pos.z - lx * this.s + lz * this.c; return out; }
  dirToWorld(lx, ly, lz, out) { out.x = lx * this.c + lz * this.s; out.y = ly; out.z = -lx * this.s + lz * this.c; return out; }

  _box(c, mat, tint, out, inside, extra) {
    const v = this._v; const base = v.pos.length / 3;
    for (const [ax, sg, i0, i1, i2, i3] of FACES) {
      const q = [c[i0], c[i1], c[i2], c[i3]];
      _a.set(q[1][0] - q[0][0], q[1][1] - q[0][1], q[1][2] - q[0][2]); _b.set(q[2][0] - q[0][0], q[2][1] - q[0][1], q[2][2] - q[0][2]);
      _n.crossVectors(_a, _b).normalize();
      let kind = 2, fm = mat;
      if (out === 'all') kind = 0; else if (out && out[0] === ax) { if (out[1] === sg) kind = 0; else { kind = 1; if (inside !== undefined) fm = inside; } }
      const s = v.pos.length / 3;
      for (const p of q) { v.pos.push(p[0], p[1], p[2]); v.nor.push(_n.x, _n.y, _n.z); v.tex.push(p[0], p[1], p[2]); v.info.push(fm, kind, 0, extra); v.tint.push(tint[0], tint[1], tint[2]); }
      v.idx.push(s, s + 1, s + 2, s, s + 2, s + 3);
    }
    return base;
  }
  static corners(mn, mx) { return [[mn[0], mn[1], mn[2]], [mx[0], mn[1], mn[2]], [mx[0], mn[1], mx[2]], [mn[0], mn[1], mx[2]], [mn[0], mx[1], mn[2]], [mx[0], mx[1], mn[2]], [mx[0], mx[1], mx[2]], [mn[0], mx[1], mx[2]]]; }

  // o: { min, max, corners?, mat, tint, out?: [axis, sign], inside?, anchor?, snow?, lit?, decor?: [{min,max,corners?,mat,tint,out?}], plane?, lat?, tough?, light? }
  addPiece(o) {
    const mat = o.mat, tint = o.tint || [1, 1, 1];
    const extra = mat === MAT.GLASS ? (o.lit || 0) : (o.snow === undefined ? 1 : o.snow);
    const vStart = this._v.pos.length / 3;
    if (!o.hidden) this._box(o.corners || Structure.corners(o.min, o.max), mat, tint, o.out, o.inside, extra);
    if (o.decor) for (const d of o.decor) this._box(d.corners || Structure.corners(d.min, d.max), d.mat, d.tint || tint, d.out || 'all', d.inside, d.mat === MAT.GLASS ? (d.lit || 0) : (d.snow === undefined ? 1 : d.snow));
    const vol = (o.max[0] - o.min[0]) * (o.max[1] - o.min[1]) * (o.max[2] - o.min[2]) * (o.fill || 1);
    const mp = MATP[mat];
    this.P.push({
      min: o.min, max: o.max, cx: (o.min[0] + o.max[0]) / 2, cy: (o.min[1] + o.max[1]) / 2, cz: (o.min[2] + o.max[2]) / 2,
      mat, tint, out: o.out || null, inside: o.inside === undefined ? mat : o.inside, mass: Math.max(0.002, vol * mp.dens * (o.light ? 0.3 : 1)),
      tough: mp.tough * (o.tough || 1), lat: o.lat || mp.lat, sup: o.sup === undefined ? mp.sup : o.sup, over: mp.over,
      anchor: o.anchor === undefined ? o.min[1] <= 0.02 : o.anchor, health: 1, alive: true, vStart, vCount: this._v.pos.length / 3 - vStart,
      plane: o.plane || null, nb: [], nt: [], nw: [], cap: 0, tag: o.tag || 0, lit: o.lit || 0,
    });
    return this.P.length - 1;
  }

  finalize(material) {
    const v = this._v, P = this.P, n = P.length; this.total = this.alive = n;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(v.pos), 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(v.nor), 3));
    geo.setAttribute('aTex', new THREE.BufferAttribute(new Float32Array(v.tex), 3));
    geo.setAttribute('aInfo', new THREE.BufferAttribute(new Float32Array(v.info), 4));
    geo.setAttribute('aTint', new THREE.BufferAttribute(new Float32Array(v.tint), 3));
    geo.setIndex(v.idx);
    geo.computeBoundingBox(); geo.computeBoundingSphere();
    this._v = null; this.geo = geo;
    this.mesh = new THREE.Mesh(geo, material); this.mesh.position.copy(this.pos); this.mesh.rotation.y = this.yaw;
    this.mesh.castShadow = true; this.mesh.receiveShadow = true; this.mesh.updateMatrixWorld();

    // bounds and collision grid
    const mn = [INF, INF, INF], mx = [-INF, -INF, -INF];
    for (const p of P) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], p.min[k]); mx[k] = Math.max(mx[k], p.max[k]); }
    const c = this.cell; this.gmin = mn.map((a) => Math.floor(a / c) * c - c);
    this.gn = [0, 1, 2].map((k) => Math.ceil((mx[k] - this.gmin[k]) / c) + 2);
    this.grid = new Int32Array(this.gn[0] * this.gn[1] * this.gn[2]).fill(-1);
    this.lmin = mn; this.lmax = mx;
    for (let i = 0; i < n; i++) this._fill(i, i);
    // world-space box for quick rejection
    const w = new THREE.Vector3(); this.wmin = new THREE.Vector3(INF, INF, INF); this.wmax = new THREE.Vector3(-INF, -INF, -INF);
    for (const x of [mn[0], mx[0]]) for (const z of [mn[2], mx[2]]) { this.toWorld(x, 0, z, w); this.wmin.x = Math.min(this.wmin.x, w.x); this.wmax.x = Math.max(this.wmax.x, w.x); this.wmin.z = Math.min(this.wmin.z, w.z); this.wmax.z = Math.max(this.wmax.z, w.z); }
    this.wmin.y = this.pos.y + mn[1]; this.wmax.y = this.pos.y + mx[1];
    this.center = new THREE.Vector3((this.wmin.x + this.wmax.x) / 2, 0, (this.wmin.z + this.wmax.z) / 2);
    this.radius = Math.hypot(this.wmax.x - this.wmin.x, this.wmax.z - this.wmin.z) / 2;

    // who touches whom
    const H = new Map(), hc = 1.6; const key = (a, b, d) => (a + 512) + (b + 512) * 1024 + (d + 512) * 1048576;
    for (let i = 0; i < n; i++) { const p = P[i]; const k = key(Math.floor(p.cx / hc), Math.floor(p.cy / hc), Math.floor(p.cz / hc)); let l = H.get(k); if (!l) H.set(k, l = []); l.push(i); }
    const eps = 0.04;
    for (let i = 0; i < n; i++) {
      const p = P[i]; const bi = Math.floor(p.cx / hc), bj = Math.floor(p.cy / hc), bk = Math.floor(p.cz / hc);
      for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) for (let dk = -1; dk <= 1; dk++) {
        const l = H.get(key(bi + di, bj + dj, bk + dk)); if (!l) continue;
        for (const j of l) {
          if (j <= i) continue; const q = P[j];
          const ox = Math.min(p.max[0], q.max[0]) - Math.max(p.min[0], q.min[0]);
          const oy = Math.min(p.max[1], q.max[1]) - Math.max(p.min[1], q.min[1]);
          const oz = Math.min(p.max[2], q.max[2]) - Math.max(p.min[2], q.min[2]);
          if (ox < -eps || oy < -eps || oz < -eps) continue;
          const pos = (ox > 0.06 ? 1 : 0) + (oy > 0.06 ? 1 : 0) + (oz > 0.06 ? 1 : 0);
          if (pos < 2) continue;                                   // only edge or corner contact
          let type;                                                // 0: q is below p, 1: q is above p, 2: side by side
          if (pos === 3) type = Math.abs(p.cy - q.cy) > Math.max(Math.abs(p.cx - q.cx), Math.abs(p.cz - q.cz)) * 0.8 ? (q.cy < p.cy ? 0 : 1) : 2;
          else if (oy <= 0.06) type = q.cy < p.cy ? 0 : 1; else type = 2;
          const area = type === 2 ? 1 : Math.max(0.02, ox * oz);
          p.nb.push(j); p.nt.push(type); p.nw.push(area);
          q.nb.push(i); q.nt.push(type === 2 ? 2 : 1 - type); q.nw.push(area);
        }
      }
    }
    // each piece can carry a multiple of what it carries in the intact building
    this._dist = new Float32Array(n); this._load = new Float32Array(n); this._order = []; this._mark = new Int32Array(n).fill(-1); this._stamp = 0;
    this.support(); this.loads();
    for (let i = 0; i < n; i++) P[i].cap = Math.max(P[i].over * this._load[i], P[i].mass * 9);
    return this.mesh;
  }

  _fill(i, val) {
    const p = this.P[i], c = this.cell, g = this.gmin, gn = this.gn, e = 0.02;
    const i0 = Math.max(0, Math.floor((p.min[0] - g[0] + e) / c)), i1 = Math.min(gn[0] - 1, Math.max(i0, Math.ceil((p.max[0] - g[0] - e) / c) - 1));
    const j0 = Math.max(0, Math.floor((p.min[1] - g[1] + e) / c)), j1 = Math.min(gn[1] - 1, Math.max(j0, Math.ceil((p.max[1] - g[1] - e) / c) - 1));
    const k0 = Math.max(0, Math.floor((p.min[2] - g[2] + e) / c)), k1 = Math.min(gn[2] - 1, Math.max(k0, Math.ceil((p.max[2] - g[2] - e) / c) - 1));
    for (let k = k0; k <= k1; k++) for (let j = j0; j <= j1; j++) for (let ii = i0; ii <= i1; ii++) {
      const o = (k * gn[1] + j) * gn[0] + ii;
      if (val >= 0) { if (this.grid[o] < 0 || !p.plane) this.grid[o] = val; } else if (this.grid[o] === i) this.grid[o] = -1;
    }
  }

  // which piece occupies this point (structure-local metres), or -1
  pieceAtLocal(x, y, z) {
    const c = this.cell, g = this.gmin, gn = this.gn;
    const i = Math.floor((x - g[0]) / c), j = Math.floor((y - g[1]) / c), k = Math.floor((z - g[2]) / c);
    if (i < 0 || j < 0 || k < 0 || i >= gn[0] || j >= gn[1] || k >= gn[2]) return -1;
    const idx = this.grid[(k * gn[1] + j) * gn[0] + i]; if (idx < 0) return -1;
    const p = this.P[idx], t = 0.07;
    if (x < p.min[0] - t || x > p.max[0] + t || y < p.min[1] - t || y > p.max[1] + t || z < p.min[2] - t || z > p.max[2] + t) return -1;
    if (p.plane && Math.abs(p.plane[0] * x + p.plane[1] * y + p.plane[2] * z - p.plane[3]) > p.plane[4] + 0.12) return -1;
    return idx;
  }
  pieceAtWorld(wx, wy, wz) {
    if (wx < this.wmin.x - 0.2 || wx > this.wmax.x + 0.2 || wz < this.wmin.z - 0.2 || wz > this.wmax.z + 0.2 || wy < this.wmin.y - 0.2 || wy > this.wmax.y + 0.2) return -1;
    const dx = wx - this.pos.x, dz = wz - this.pos.z;
    return this.pieceAtLocal(dx * this.c - dz * this.s, wy - this.pos.y, dx * this.s + dz * this.c);
  }
  // top of the highest piece in the column under a world point (used for driving over the bridge)
  topAt(wx, wz, from) {
    if (wx < this.wmin.x || wx > this.wmax.x || wz < this.wmin.z || wz > this.wmax.z) return -INF;
    const dx = wx - this.pos.x, dz = wz - this.pos.z, lx = dx * this.c - dz * this.s, lz = dx * this.s + dz * this.c;
    for (let y = from - this.pos.y; y > this.lmin[1] - 0.3; y -= this.cell * 0.5) { const i = this.pieceAtLocal(lx, y, lz); if (i >= 0 && this.P[i].sup) return this.pos.y + this.P[i].max[1]; }
    return -INF;
  }

  // ---- taking damage ----
  remove(i) {
    const p = this.P[i]; if (!p.alive) return; p.alive = false; this.alive--; this._fill(i, -1);
    const pa = this.geo.attributes.position.array, s = p.vStart * 3, e = (p.vStart + p.vCount) * 3;
    for (let o = s; o < e; o += 3) { pa[o] = pa[s]; pa[o + 1] = pa[s + 1]; pa[o + 2] = pa[s + 2]; }
    this._posDirty = true; this.dirty = true; this.removed.push(i);
  }
  // returns true when the piece breaks
  hurt(i, amount) {
    const p = this.P[i]; if (!p.alive) return false;
    p.health -= amount / p.tough;
    if (p.health <= 0) return true;
    const ia = this.geo.attributes.aInfo.array, d = 1 - p.health;
    for (let o = p.vStart * 4, e = (p.vStart + p.vCount) * 4; o < e; o += 4) ia[o + 2] = d;
    this._infoDirty = true; this.dirty = true; return false;
  }
  // collect pieces within a blast; calls back with (index, strength 0..1, distance)
  inRadius(lx, ly, lz, r, cb) {
    const c = this.cell, g = this.gmin, gn = this.gn; const st = ++this._stamp;
    const i0 = Math.max(0, Math.floor((lx - r - g[0]) / c)), i1 = Math.min(gn[0] - 1, Math.floor((lx + r - g[0]) / c));
    const j0 = Math.max(0, Math.floor((ly - r - g[1]) / c)), j1 = Math.min(gn[1] - 1, Math.floor((ly + r - g[1]) / c));
    const k0 = Math.max(0, Math.floor((lz - r - g[2]) / c)), k1 = Math.min(gn[2] - 1, Math.floor((lz + r - g[2]) / c));
    for (let k = k0; k <= k1; k++) for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const idx = this.grid[(k * gn[1] + j) * gn[0] + i]; if (idx < 0 || this._mark[idx] === st) continue; this._mark[idx] = st;
      const p = this.P[idx];
      const dx = Math.max(p.min[0] - lx, 0, lx - p.max[0]), dy = Math.max(p.min[1] - ly, 0, ly - p.max[1]), dz = Math.max(p.min[2] - lz, 0, lz - p.max[2]);
      const d = Math.hypot(dx, dy, dz); if (d < r) cb(idx, 1 - d / r, d);
    }
  }
  flush() {
    if (this._posDirty) { this.geo.attributes.position.needsUpdate = true; this._posDirty = false; }
    if (this._infoDirty) { this.geo.attributes.aInfo.needsUpdate = true; this._infoDirty = false; }
  }

  // ---- does it still stand? ----
  // Distance of every piece from solid support: 0 when it sits on the ground or on a supported piece,
  // growing with every piece it has to be held through sideways. Too far and it falls.
  support() {
    const P = this.P, n = P.length, dist = this._dist, lim = this.limit + 1e-3; dist.fill(INF);
    const heap = []; const push = (d, i) => { heap.push(d, i); let c = heap.length / 2 - 1; while (c > 0) { const p = (c - 1) >> 1; if (heap[p * 2] <= heap[c * 2]) break; const t0 = heap[p * 2], t1 = heap[p * 2 + 1]; heap[p * 2] = heap[c * 2]; heap[p * 2 + 1] = heap[c * 2 + 1]; heap[c * 2] = t0; heap[c * 2 + 1] = t1; c = p; } };
    const pop = () => { const d = heap[0], i = heap[1]; const ld = heap[heap.length - 2], li = heap[heap.length - 1]; heap.length -= 2; const m = heap.length / 2; if (m > 0) { heap[0] = ld; heap[1] = li; let c = 0; for (;;) { let l = c * 2 + 1, r = l + 1, s = c; if (l < m && heap[l * 2] < heap[s * 2]) s = l; if (r < m && heap[r * 2] < heap[s * 2]) s = r; if (s === c) break; const t0 = heap[s * 2], t1 = heap[s * 2 + 1]; heap[s * 2] = heap[c * 2]; heap[s * 2 + 1] = heap[c * 2 + 1]; heap[c * 2] = t0; heap[c * 2 + 1] = t1; c = s; } } return [d, i]; };
    for (let i = 0; i < n; i++) if (P[i].alive && P[i].anchor) { dist[i] = 0; push(0, i); }
    while (heap.length) {
      const [d, q] = pop(); if (d > dist[q] + 1e-4) continue; /* dist is stored at lower precision than d */ const pq = P[q]; if (!pq.sup) continue;
      for (let e = 0; e < pq.nb.length; e++) {
        const j = pq.nb[e], pj = P[j]; if (!pj.alive) continue;
        const t = pq.nt[e];                                    // 1: j is above q, 2: beside, 0: j hangs below q
        const nd = d + (t === 1 ? 0 : t === 2 ? pj.lat : 1.5);
        if (nd < dist[j] && nd <= lim) { dist[j] = nd; push(nd, j); }
      }
    }
    return dist;
  }
  // Pass every piece's weight down to whatever is holding it.
  loads() {
    const P = this.P, n = P.length, dist = this._dist, load = this._load, ord = this._order; ord.length = 0;
    for (let i = 0; i < n; i++) { if (P[i].alive && dist[i] < INF) { ord.push(i); load[i] = P[i].mass; } else load[i] = 0; }
    ord.sort((a, b) => (P[b].cy - P[a].cy) || (dist[b] - dist[a]));
    for (const i of ord) {
      const p = P[i], L = load[i]; let w = 0;
      for (let e = 0; e < p.nb.length; e++) { const j = p.nb[e]; if (p.nt[e] === 0 && P[j].alive && P[j].sup && dist[j] < INF) w += p.nw[e]; }
      if (w > 0) { for (let e = 0; e < p.nb.length; e++) { const j = p.nb[e]; if (p.nt[e] === 0 && P[j].alive && P[j].sup && dist[j] < INF) load[j] += L * p.nw[e] / w; } continue; }
      let c = 0; for (let e = 0; e < p.nb.length; e++) { const j = p.nb[e]; if (p.nt[e] === 2 && P[j].alive && P[j].sup && dist[j] < dist[i] - 1e-4) c++; }
      if (c > 0) for (let e = 0; e < p.nb.length; e++) { const j = p.nb[e]; if (p.nt[e] === 2 && P[j].alive && P[j].sup && dist[j] < dist[i] - 1e-4) load[j] += L / c; }
    }
    return load;
  }
  // One round of the check. Returns { fall: [[indices...], ...], crush: [indices] }.
  solve() {
    const P = this.P, n = P.length; this.dirty = false;
    const dist = this.support(); const loose = [];
    for (let i = 0; i < n; i++) if (P[i].alive && dist[i] >= INF) loose.push(i);
    if (loose.length) {
      const st = ++this._stamp, mark = this._mark, groups = [];
      for (const i of loose) mark[i] = st;
      for (const s0 of loose) {
        if (mark[s0] !== st) continue; const comp = [s0]; mark[s0] = -st;
        for (let h = 0; h < comp.length; h++) { const p = P[comp[h]]; for (const j of p.nb) if (mark[j] === st) { mark[j] = -st; comp.push(j); } }
        groups.push(comp);
      }
      return { fall: groups, crush: [] };
    }
    const load = this.loads(); const over = [];
    for (let i = 0; i < n; i++) { const p = P[i]; if (p.alive && load[i] > p.cap * (0.35 + 0.65 * p.health)) over.push([load[i] / p.cap, i]); }
    if (!over.length) return null;
    over.sort((a, b) => b[0] - a[0]);
    const k = Math.max(1, Math.ceil(over.length * 0.2));
    return { fall: [], crush: over.slice(0, k).map((o) => o[1]) };
  }
  // centre of the supported pieces next to a group that is letting go (the point it hinges on)
  hinge(group, out) {
    const P = this.P; let x = 0, y = 0, z = 0, c = 0; const st = ++this._stamp; for (const i of group) this._mark[i] = st;
    for (const i of group) { const p = P[i]; for (const j of p.nb) if (P[j].alive && this._mark[j] !== st) { x += P[j].cx; y += P[j].cy; z += P[j].cz; c++; } }
    if (!c) return false; this.toWorld(x / c, y / c, z / c, out); return true;
  }
}
