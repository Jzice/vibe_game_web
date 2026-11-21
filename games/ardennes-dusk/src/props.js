import * as THREE from 'three';
import { Builder } from './builder.js';
import { MAT } from './structure.js';
import { terrainH, CFG } from './terrain.js';
import { ROADS, SQUARE, SIDEWALK, roadEdgeDist, walk } from './roads.js';

const M4 = () => new THREE.Matrix4();
function mulberry(a) { return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _ax = new THREE.Vector3(), _e = new THREE.Euler();

// ---------------------------------------------------------------------------------------------
// Spruce forest. Every tree can be shot or driven down.
// ---------------------------------------------------------------------------------------------
export class Forest {
  constructor(material, nav) {
    const b = new Builder();
    b.set([0.085, 0.060, 0.040], [0.3, 0.9, 0, 0]).cyl([0, 0, 0], [0, 2.2, 0], 0.16, 6, 0.10);
    const tiers = [[1.0, 2.05, 1.9], [2.2, 1.75, 1.9], [3.4, 1.42, 1.8], [4.6, 1.08, 1.7], [5.7, 0.74, 1.6], [6.7, 0.42, 1.5]];
    for (const [y, r, h] of tiers) { b.set([0.020, 0.040, 0.026], [1.0, 0.9, 0, 0]); b.geo(new THREE.ConeGeometry(r, h, 9, 1, true), M4().makeTranslation(0, y + h / 2, 0)); }
    const geo = b.build(); geo.userData.keep = true; const rand = mulberry(4242); const list = []; const B = CFG.BOUNDS;
    for (let i = 0; i < 6000 && list.length < 900; i++) {
      const x = -320 + rand() * 640, z = -290 + rand() * 600;
      const inTown = Math.abs(x) < 142 && z > -22 && z < 156, river = Math.abs(z - CFG.RIVER_Z) < 20;
      if (inTown || river || roadEdgeDist(x, z) < 7) continue;
      const dense = z < -80 || Math.abs(x) > 160 || z > 172; if (!dense && rand() < 0.75) continue;
      list.push({ x, z, y: terrainH(x, z) - 0.15, s: 0.75 + rand() * 0.75, sy: 0.9 + rand() * 0.35, r: rand() * 6.28, tx: (rand() - 0.5) * 0.06, tz: (rand() - 0.5) * 0.06, state: 0, ang: 0, v: 0, ax: 1, az: 0 });
    }
    this.list = list; this.mesh = new THREE.InstancedMesh(geo, material, list.length);
    this.mesh.castShadow = true; this.mesh.receiveShadow = true; this.mesh.frustumCulled = false;
    list.forEach((t, i) => this._write(i));
    this.inPlay = list.map((t, i) => i).filter((i) => { const t = list[i]; return t.x > B.x0 - 5 && t.x < B.x1 + 5 && t.z > B.z0 - 5 && t.z < B.z1 + 5; });
    if (nav) nav.trees = this.inPlay.map((i) => list[i]);
  }
  _write(i) {
    const t = this.list[i]; _q.setFromEuler(_e.set(t.tx, t.r, t.tz));
    if (t.ang > 0) { _ax.set(t.ax, 0, t.az); _q2.setFromAxisAngle(_ax, t.ang); _q.premultiply(_q2); }
    _m.compose(_p.set(t.x, t.y, t.z), _q, _s.set(t.s, t.s * t.sy, t.s)); this.mesh.setMatrixAt(i, _m); this.mesh.instanceMatrix.needsUpdate = true;
  }
  reset() { this.list.forEach((t, i) => { if (t.state) { t.state = 0; t.ang = 0; t.v = 0; this._write(i); } }); }
  // knock down trees near a point; (dx, dz) is the way they are pushed
  disturb(x, z, r, dx, dz, fx) {
    let n = 0;
    for (const i of this.inPlay) { const t = this.list[i]; if (t.state) continue; const ex = t.x - x, ez = t.z - z; if (ex * ex + ez * ez > (r + 0.3) * (r + 0.3)) continue;
      let px = dx, pz = dz; if (!px && !pz) { const l = Math.hypot(ex, ez) || 1; px = ex / l; pz = ez / l; }
      t.state = 1; t.v = 0.5; t.ax = pz; t.az = -px; const l = Math.hypot(t.ax, t.az) || 1; t.ax /= l; t.az /= l; n++;
      if (fx) fx.dust(t.x, t.y + 1.5, t.z, 1.6, [0.8, 0.84, 0.9]); }
    return n;
  }
  // does a shot between two points hit a trunk? returns the fraction along it, or -1
  hitSegment(ax, ay, az, bx, by, bz) {
    let best = -1; const dx = bx - ax, dz = bz - az, len2 = dx * dx + dz * dz; if (len2 < 1e-6) return -1;
    for (const i of this.inPlay) { const t = this.list[i]; if (t.state) continue;
      const u = ((t.x - ax) * dx + (t.z - az) * dz) / len2; if (u < 0 || u > 1) continue;
      const px = ax + dx * u - t.x, pz = az + dz * u - t.z; if (px * px + pz * pz > 0.35 * 0.35 * t.s * t.s) continue;
      const y = ay + (by - ay) * u; if (y < t.y || y > t.y + 6.5 * t.s) continue;
      if (best < 0 || u < best) best = u; }
    return best;
  }
  update(dt, fx) {
    for (const i of this.inPlay) { const t = this.list[i]; if (t.state !== 1) continue;
      t.v += 3.2 * dt * (0.25 + Math.sin(Math.min(t.ang, 1.5))); t.ang += t.v * dt;
      if (t.ang >= 1.5) { t.ang = 1.5; t.state = 2; if (fx) fx.dust(t.x - t.az * 3 * t.s, t.y + 0.4, t.z + t.ax * 3 * t.s, 2.4, [0.8, 0.84, 0.9]); }
      this._write(i); }
  }
}

// ---------------------------------------------------------------------------------------------
// Street furniture, built from the same breakable pieces as the houses: lamps, a well, crates,
// barrels, a cart, sandbags. All of it can be shot apart or driven through.
// ---------------------------------------------------------------------------------------------
function obox(cx, cy, cz, sx, sy, sz, yaw = 0) {
  const c = Math.cos(yaw), s = Math.sin(yaw), hx = sx / 2, hy = sy / 2, hz = sz / 2; const pts = [];
  for (const [lx, ly, lz] of [[-hx, -hy, -hz], [hx, -hy, -hz], [hx, -hy, hz], [-hx, -hy, hz], [-hx, hy, -hz], [hx, hy, -hz], [hx, hy, hz], [-hx, hy, hz]]) pts.push([cx + lx * c + lz * s, cy + ly, cz - lx * s + lz * c]);
  const mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9]; for (const p of pts) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], p[k]); mx[k] = Math.max(mx[k], p[k]); }
  return { min: mn, max: mx, corners: pts, fill: (sx * sy * sz) / Math.max(1e-6, (mx[0] - mn[0]) * (mx[1] - mn[1]) * (mx[2] - mn[2])) };
}
const TIMB = [1, 1, 1], IRON = [0.8, 0.85, 0.9];

export class Props {
  constructor(game) {
    this.game = game; this.lamps = []; const W = game.world; this.group = new THREE.Group(); game.battle.add(this.group);
    const start = (name, x, z, yaw = 0) => W.newStructure({ name, kind: 'prop', x, y: terrainH(x, z), z, yaw });
    const add = (S, o, mat, tint, extra = {}) => S.addPiece({ ...o, mat, tint, out: 'all', anchor: o.min[1] <= 0.02, ...extra });
    // gas lamps: a cast-iron post in sections with a glazed lantern on top
    // lamps stand at the kerb along every street, alternating sides, and round the square
    const spots = []; const rnd = mulberry(77);
    // each stands on the pavement just behind the kerb, never in a roadway, and not where another street crosses
    const inSq = (x, z) => Math.abs(x - SQUARE.x) < SQUARE.hx + 0.2 && Math.abs(z - SQUARE.z) < SQUARE.hz + 0.2;
    for (const road of ROADS) { if (road.dirt) continue; const st = walk(road, 1); for (let i = 13; i < st.length - 6; i += 26) { const side = (Math.floor(i / 26) % 2) ? 1 : -1;
      for (let k = 0; k < 9; k++) { const p = st[Math.min(st.length - 1, i + k)], x = p.x - p.tz * side * (road.w + 0.42), z = p.z + p.tx * side * (road.w + 0.42); if (roadEdgeDist(x, z) > 0.3 && !inSq(x, z) && !spots.some(([sx2, sz2]) => Math.hypot(sx2 - x, sz2 - z) < 12)) { spots.push([x, z]); break; } } } }
    for (const [dx, dz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) spots.push([SQUARE.x + dx * (SQUARE.hx + 0.45), SQUARE.z + dz * (SQUARE.hz + 0.45)]);
    for (const [x, z] of spots) {
      if (W.solidAt(x, 1, z) || W.solidAt(x, 3, z)) continue;
      const S = start('lamp', x, z);
      add(S, obox(0, 0.25, 0, 0.24, 0.5, 0.24), MAT.METAL, IRON);
      for (let k = 0; k < 5; k++) add(S, obox(0, 0.5 + 0.3 + k * 0.6, 0, 0.10, 0.6, 0.10), MAT.METAL, IRON, { anchor: false });
      add(S, obox(0, 3.54, 0, 0.32, 0.07, 0.32), MAT.METAL, IRON, { anchor: false });
      const lantern = S.addPiece({ ...obox(0, 3.83, 0, 0.26, 0.5, 0.26), mat: MAT.GLASS, tint: [1, 1, 1], out: 'all', anchor: false, sup: 1, tough: 4, lit: 1.6,
        decor: [[-0.13, -0.13], [0.13, -0.13], [0.13, 0.13], [-0.13, 0.13]].map(([dx, dz]) => ({ ...obox(dx, 3.83, dz, 0.025, 0.5, 0.025), mat: MAT.METAL, tint: IRON })) });
      add(S, obox(0, 4.13, 0, 0.38, 0.09, 0.38), MAT.METAL, IRON, { anchor: false }); add(S, obox(0, 4.26, 0, 0.16, 0.18, 0.16), MAT.METAL, IRON, { anchor: false });
      W.addStructure(S);
      this.lamps.push({ S, lantern, x, z });
    }
    // the well in the square: a ring of stones, two posts, a beam and a little slate roof
    { const S = start('well', SQUARE.x - 7, SQUARE.z + 1);
      for (let row = 0; row < 2; row++) for (let i = 0; i < 10; i++) { const a = (i + row * 0.5) / 10 * 6.283; add(S, obox(Math.cos(a) * 1.15, 0.225 + row * 0.45, Math.sin(a) * 1.15, 0.80, 0.45, 0.36, -a + Math.PI / 2), MAT.STONE, [0.95, 0.93, 0.9], { anchor: row === 0 }); }
      for (const sx of [-1, 1]) for (let k = 0; k < 3; k++) add(S, obox(sx * 1.0, 0.9 + 0.3 + k * 0.6, 0, 0.15, 0.6, 0.15), MAT.TIMBER, TIMB, { anchor: false });
      for (let k = 0; k < 3; k++) add(S, obox(-0.75 + k * 0.75, 2.78, 0, 0.75, 0.15, 0.15), MAT.TIMBER, TIMB, { anchor: false });
      for (const side of [-1, 1]) for (let k = 0; k < 3; k++) {       // two sloping sides of the roof, in boards
        const x0 = -1.35 + k * 0.9, x1 = x0 + 0.9, zi = 0, zo = side * 0.9, yi = 3.34, yo = 2.84, th = 0.07;
        const za = Math.min(zi, zo), zb = Math.max(zi, zo), ya = side > 0 ? yi : yo, yb = side > 0 ? yo : yi;
        const corners = [[x0, ya, za], [x1, ya, za], [x1, yb, zb], [x0, yb, zb], [x0, ya + th, za], [x1, ya + th, za], [x1, yb + th, zb], [x0, yb + th, zb]];
        S.addPiece({ min: [x0, 2.84, za], max: [x1, 3.42, zb], corners, mat: MAT.SLATE, tint: [1, 1, 1], out: [1, 1], inside: MAT.SLATE, anchor: false, fill: 0.15 }); }
      W.addStructure(S); }
    // crates, barrels, sandbags and a farm cart
    const crates = (x, z, yaw, list) => { const S = start('crates', x, z, yaw); for (const [cx, cy, cz, sz, r] of list) add(S, obox(cx, cy + sz / 2, cz, sz, sz, sz, r || 0), MAT.TIMBER, [1.25, 1.1, 0.9]); W.addStructure(S); };
    const sx = SQUARE.x, sz = SQUARE.z;
    crates(sx + 15, sz - 11.5, 0.2, [[0, 0, 0, 0.8, 0], [0.9, 0, 0.1, 0.7, 0.3], [0.4, 0.8, 0.05, 0.62, 0.15]]);
    crates(sx - 17, sz + 10.5, 0.0, [[0, 0, 0, 0.9, 0.1], [1.0, 0, 0.0, 0.8, 0], [2.0, 0, 0.1, 0.8, 0.2], [0.5, 0.9, 0, 0.7, 0.4]]);
    crates(30, -12.6, 1.5, [[0, 0, 0, 0.8, 0], [0, 0.8, 0, 0.7, 0.2]]); crates(-70, -12.8, 0.4, [[0, 0, 0, 0.8, 0], [0.9, 0, 0, 0.8, 0.2], [0.4, 0.8, 0, 0.7, 0]]);
    const barrels = (x, z, list) => { const S = start('barrels', x, z); for (const [cx, cz] of list) for (let k = 0; k < 2; k++) add(S, obox(cx, 0.24 + k * 0.48, cz, 0.56, 0.48, 0.56, cx * 3), MAT.TIMBER, [0.95, 0.85, 0.75], { decor: [{ ...obox(cx, 0.24 + k * 0.48, cz, 0.6, 0.05, 0.6, cx * 3), mat: MAT.METAL, tint: IRON }] }); W.addStructure(S); };
    barrels(sx - 18, sz - 11, [[0, 0], [0.7, 0.1], [0.3, 0.65]]); barrels(sx + 18.5, sz + 9, [[0, 0], [0.7, 0]]); barrels(-36, -12.8, [[0, 0], [0.75, 0.05], [1.5, 0]]); barrels(96, -12.8, [[0, 0], [0.75, 0.05]]);
    const bags = (x, z, yaw, n) => { const S = start('sandbags', x, z, yaw); for (let row = 0; row < 4; row++) for (let j = 0; j < n - (row % 2); j++) add(S, obox((j - (n - 1) / 2) * 0.62 + (row % 2) * 0.31, 0.11 + row * 0.2, 0, 0.6, 0.2, 0.36), MAT.PLASTER, [0.62, 0.58, 0.46]); W.addStructure(S); };
    bags(-4.0, -19.8, 0, 4); bags(4.2, 43.5, 0.3, 5); bags(sx - 9, sz - 6, 1.2, 5); bags(82.4, -19.8, 0, 4);
    { const S = start('cart', SQUARE.x + 12, SQUARE.z + 4, 1.1);
      for (const sx of [-1, 1]) for (let k = 0; k < 2; k++) add(S, obox(sx * 0.92, 0.3 + k * 0.6, 0, 0.1, 0.6, 1.2), MAT.TIMBER, [0.7, 0.6, 0.5]);
      for (let k = 0; k < 3; k++) add(S, obox(0, 0.95, -0.87 + k * 0.87, 1.74, 0.1, 0.87), MAT.TIMBER, TIMB, { anchor: true });
      for (const sx of [-1, 1]) for (let k = 0; k < 3; k++) add(S, obox(sx * 0.75, 1.25, -0.87 + k * 0.87, 0.06, 0.5, 0.87), MAT.TIMBER, TIMB, { anchor: false });
      add(S, obox(0, 1.25, -1.3, 1.5, 0.5, 0.06), MAT.TIMBER, TIMB, { anchor: true });
      for (const sx of [-1, 1]) for (let k = 0; k < 2; k++) add(S, obox(sx * 0.3, 0.86 - k * 0.36, 1.8 + k * 0.95, 0.07, 0.07 + k * 0.72, 1.0), MAT.TIMBER, TIMB, { anchor: k === 1 });
      W.addStructure(S); }
  }
  // only the nearest few lamps cast real light (a handful of lights are moved to them each frame); the rest just glow
  update(dt, time) {
    if (!this.pool) { this.pool = []; for (let i = 0; i < 5; i++) { const l = new THREE.PointLight(new THREE.Color(1.0, 0.58, 0.24), 0, 40, 2); this.group.add(l); this.pool.push(l); } }
    const cam = this.game.camera.position, sh = this.game.shared; let n = 0;
    this.lamps.sort((a, b) => ((a.x - cam.x) ** 2 + (a.z - cam.z) ** 2) - ((b.x - cam.x) ** 2 + (b.z - cam.z) ** 2));
    for (const l of this.lamps) { if (n >= 6) break; if (!l.S.P[l.lantern].alive) continue; const fl = 0.93 + 0.07 * Math.sin(time * 11 + l.x), y = l.S.pos.y + 3.8;
      if (n < this.pool.length) { this.pool[n].position.set(l.x, y, l.z); this.pool[n].intensity = 100 * fl; }
      sh.uLampPos.value[n].set(l.x, y, l.z); sh.uLampCol.value[n].set(1.0, 0.6, 0.27).multiplyScalar(9 * fl); n++; }
    for (let i = n; i < this.pool.length; i++) this.pool[i].intensity = 0;
    for (let i = n; i < 6; i++) sh.uLampCol.value[i].set(0, 0, 0);
  }
}
