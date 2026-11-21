import * as THREE from 'three';
import { Structure, MAT, MATP } from './structure.js';
import { Debris } from './debris.js';
import { RubbleField, terrainH, CFG } from './terrain.js';
import { roadEdgeDist } from './roads.js';

const _l = new THREE.Vector3(), _w = new THREE.Vector3(), _h = new THREE.Vector3();
const hit = { s: null, i: -1 };

// Owns everything that can break, and answers "what is at this point?" for shells, tanks and debris.
export class World {
  constructor(game, mats) {
    this.game = game; this.mats = mats; this.structures = []; this.decks = []; this.cells = new Map(); this.cs = 14;
    this.rubble = new RubbleField();
    this.debris = new Debris(this, mats.debris);
    this.dustBudget = 0; this.rumble = 0; this.stats = { broken: 0 };
  }
  newStructure(o) { return new Structure(this, o); }
  addStructure(s) {
    s.id = this.structures.length; this.structures.push(s);
    this.game.battle.add(s.finalize(this.mats.structure)); if (s.deck) this.decks.push(s);
    // index it by map square so point queries only look at what is nearby
    { const cs = this.cs; for (let i = Math.floor((s.wmin.x - 0.3) / cs); i <= Math.floor((s.wmax.x + 0.3) / cs); i++) for (let k = Math.floor((s.wmin.z - 0.3) / cs); k <= Math.floor((s.wmax.z + 0.3) / cs); k++) { const key = i * 4096 + k; let l = this.cells.get(key); if (!l) this.cells.set(key, l = []); l.push(s); } }
    // a freshly built structure must stand on its own: report anything that would fall straight away
    { const res = s.solve(); if (res && (res.fall.length || res.crush.length)) { const n = res.fall.reduce((a, g) => a + g.length, 0); const p = res.fall.length ? s.P[res.fall[0][0]] : s.P[res.crush[0]]; console.warn(`[build ${Math.round(performance.now())}] ${s.name}: ${n} loose, ${res.crush.length} overloaded, e.g. at`, p.min, p.max); } s.dirty = false; }
    return s;
  }

  // ---- queries ----
  groundH(x, z) { return terrainH(x, z) + this.rubble.digAt(x, z) + this.rubble.heightAt(x, z); }
  // surface a tank drives on: ground, packed rubble, or the bridge deck while it is still there
  driveH(x, z, fromY = 3) {
    let h = terrainH(x, z) + this.rubble.digAt(x, z) + this.rubble.heightAt(x, z) * 0.8;
    for (const s of this.decks) { const t = s.topAt(x, z, Math.min(fromY, s.wmax.y) + 0.4); if (t > h) h = t; }
    return h;
  }
  solidAt(x, y, z) {
    const S = this.cells.get(Math.floor(x / this.cs) * 4096 + Math.floor(z / this.cs)); if (!S) return null;
    for (let k = 0; k < S.length; k++) { const s = S[k]; if (!s.alive) continue; const i = s.pieceAtWorld(x, y, z); if (i >= 0) { hit.s = s; hit.i = i; return hit; } }
    return null;
  }
  // march along a ray; returns the first thing hit or null. out: { t, x, y, z, s, i, ground }
  raycast(ox, oy, oz, dx, dy, dz, maxT, step, out) {
    for (let t = 0; t <= maxT; t += step) {
      const x = ox + dx * t, y = oy + dy * t, z = oz + dz * t;
      const r = this.solidAt(x, y, z);
      if (r) { out.t = t; out.x = x; out.y = y; out.z = z; out.s = r.s; out.i = r.i; out.ground = false; return out; }
      if (y < this.groundH(x, z)) { out.t = t; out.x = x; out.y = y; out.z = z; out.s = null; out.i = -1; out.ground = true; return out; }
    }
    return null;
  }
  // is there a clear line between two points (buildings and ground only)
  clearLine(ax, ay, az, bx, by, bz) {
    const dx = bx - ax, dy = by - ay, dz = bz - az, d = Math.hypot(dx, dy, dz); const n = Math.ceil(d / 0.6);
    for (let k = 1; k < n; k++) { const t = k / n, x = ax + dx * t, y = ay + dy * t, z = az + dz * t; if (this.solidAt(x, y, z) || y < terrainH(x, z) + this.rubble.digAt(x, z) + this.rubble.heightAt(x, z) - 0.2) return false; }
    return true;
  }

  // ---- breaking things ----
  pieceDesc(s, i, shrink = 1) {
    const p = s.P[i]; s.toWorld(p.cx, p.cy, p.cz, _w);
    return {
      x: _w.x, y: _w.y, z: _w.z, hx: (p.max[0] - p.min[0]) / 2 * shrink, hy: (p.max[1] - p.min[1]) / 2 * shrink, hz: (p.max[2] - p.min[2]) / 2 * shrink,
      yaw: s.yaw, rest: [p.cx, p.cy, p.cz], mat: p.mat, out: p.out === 'all' ? 9 : (p.out ? (p.out[0] + 1) * p.out[1] : 0), inside: p.inside, tint: p.tint, extra: 0,
      vx: 0, vy: 0, vz: 0, wx: 0, wy: 0, wz: 0,
    };
  }
  // turn one standing piece into loose debris. origin: where the force came from. shatter: break it into fragments.
  breakPiece(s, i, ox, oy, oz, power, shatter) {
    const p = s.P[i]; if (!p.alive) return;
    const d = this.pieceDesc(s, i); const D = this.debris, fx = this.game.fx;
    s.remove(i); this.stats.broken++;
    let dx = d.x - ox, dy = d.y - oy + 0.25, dz = d.z - oz; const dl = Math.hypot(dx, dy, dz) + 1e-3; dx /= dl; dy /= dl; dz /= dl;
    const sp = power * (1.6 + Math.random() * 2.0) / Math.max(0.45, Math.sqrt(p.mass * 2.5));
    if (p.mat === MAT.GLASS) { fx.glass(d.x, d.y, d.z, dx, dy, dz); return; }
    const busy = D.activeCount > 1500;
    if (!shatter || busy) {
      d.vx = dx * sp * 0.6; d.vy = dy * sp * 0.6 + 0.5; d.vz = dz * sp * 0.6; d.wx = (Math.random() - 0.5) * 5; d.wy = (Math.random() - 0.5) * 4; d.wz = (Math.random() - 0.5) * 5;
      if (busy && Math.random() < 0.35) { fx.dust(d.x, d.y, d.z, 1.2, MATP[p.mat].col); return; }
      D.spawn(d);
    } else {
      // split along its two longest sides into uneven fragments
      const dims = [d.hx, d.hy, d.hz], order = [0, 1, 2].sort((a, b) => dims[b] - dims[a]); const n = [1, 1, 1];
      n[order[0]] = dims[order[0]] > 0.3 ? 2 : 1; n[order[1]] = dims[order[1]] > 0.3 ? 2 : 1;
      const cut = [0.5 + (Math.random() - 0.5) * 0.3, 0.5 + (Math.random() - 0.5) * 0.3, 0.5];
      for (let a = 0; a < n[0]; a++) for (let b = 0; b < n[1]; b++) for (let c = 0; c < n[2]; c++) {
        if (Math.random() < 0.12) continue;                   // some of it is simply pulverised
        const f = { ...d }; const idx = [a, b, c]; const lo = [0, 0, 0], hi = [0, 0, 0];
        for (let k = 0; k < 3; k++) { const full = dims[k] * 2; if (n[k] === 1) { lo[k] = -dims[k]; hi[k] = dims[k]; } else if (idx[k] === 0) { lo[k] = -dims[k]; hi[k] = -dims[k] + full * cut[k]; } else { lo[k] = -dims[k] + full * cut[k]; hi[k] = dims[k]; } }
        f.hx = (hi[0] - lo[0]) / 2 * (0.62 + Math.random() * 0.34); f.hy = (hi[1] - lo[1]) / 2 * (0.62 + Math.random() * 0.34); f.hz = (hi[2] - lo[2]) / 2 * (0.62 + Math.random() * 0.34);
        const lx = (lo[0] + hi[0]) / 2, ly = (lo[1] + hi[1]) / 2, lz = (lo[2] + hi[2]) / 2;
        f.rest = [d.rest[0] + lx, d.rest[1] + ly, d.rest[2] + lz];
        s.dirToWorld(lx, ly, lz, _h); f.x = d.x + _h.x; f.y = d.y + _h.y; f.z = d.z + _h.z;
        const j = 0.6 + Math.random() * 0.8;
        f.vx = dx * sp * j + (Math.random() - 0.5) * 2.2; f.vy = dy * sp * j + Math.random() * 2.0; f.vz = dz * sp * j + (Math.random() - 0.5) * 2.2;
        f.wx = (Math.random() - 0.5) * 12; f.wy = (Math.random() - 0.5) * 9; f.wz = (Math.random() - 0.5) * 12;
        const k = D.spawn(f); if (k >= 0 && Math.random() < 0.55 && D.activeCount < 1300) D.split(k, 2.2);
      }
    }
    if (this.dustBudget > 0) { this.dustBudget--; fx.dust(d.x, d.y, d.z, 0.9 + power * 0.25, MATP[p.mat].col); }
  }
  // something hit a standing piece hard
  impact(s, i, dmg, x, y, z) { if (s.hurt(i, dmg)) this.breakPiece(s, i, x, y + 0.5, z, 0.6, true); }
  // a falling piece broke on landing: it gets smaller and throws off dust
  shatterDebris(i, speed) {
    const D = this.debris, h = D.half, i3 = i * 3; const k = 0.62 + Math.random() * 0.2;
    h[i3] *= k; h[i3 + 1] *= k; h[i3 + 2] *= k; D.aDHalf.array[i3] = h[i3]; D.aDHalf.array[i3 + 1] = h[i3 + 1]; D.aDHalf.array[i3 + 2] = h[i3 + 2]; D._attrDirty = true;
    D.mass[i] *= k * k * k;
    if (this.dustBudget > 0) { this.dustBudget--; this.game.fx.dust(D.p[i3], D.p[i3 + 1], D.p[i3 + 2], 1.0, [D.col[i3], D.col[i3 + 1], D.col[i3 + 2]]); }
  }
  puff(x, y, z, i) { if (this.dustBudget > 0) { this.dustBudget--; const D = this.debris; this.game.fx.dust(x, y, z, 1.0, [D.col[i * 3], D.col[i * 3 + 1], D.col[i * 3 + 2]]); } }
  onRubbleHit(x, y, z, hits, speed) {
    this.rumble = Math.min(3, this.rumble + hits * 0.02 * Math.min(speed, 12)); this.rumblePos = { x, y, z };
    if (this.dustBudget > 0) { this.dustBudget -= 1; this.game.fx.dust(x + (Math.random() - 0.5) * 2, this.groundH(x, z) + 0.6, z + (Math.random() - 0.5) * 2, 1.6 + Math.min(hits, 12) * 0.14, [0.4, 0.36, 0.32]); }
  }
  onDebrisLand(x, y, z, speed, mass, i) {
    this.rumble = Math.min(3, this.rumble + 0.012 * speed * Math.min(1, mass));
    if (this.dustBudget > 0 && mass > 0.2 && Math.random() < 0.5) { this.dustBudget--; this.game.fx.dust(x, y + 0.3, z, 0.9, [0.42, 0.40, 0.38]); }
    if (Math.random() < 0.3) this.game.marks.stamp(2, x, z, Math.random() * 6.28, 1.2 + mass, 1.2 + mass, 0.5, Math.random() * 20);
  }
  // an explosion: breaks and loosens pieces, throws debris
  explode(x, y, z, radius, power) {
    this.dustBudget = Math.max(this.dustBudget, 26);
    for (const s of this.structures) {
      if (!s.alive) continue;
      if (Math.hypot(x - s.center.x, z - s.center.z) > radius + s.radius + 1) continue;
      s.toLocal(x, y, z, _l); const broken = [];
      s.inRadius(_l.x, _l.y, _l.z, radius, (idx, f) => { if (s.hurt(idx, power * Math.pow(f, 1.25))) broken.push(idx, f); });
      for (let k = 0; k < broken.length; k += 2) this.breakPiece(s, broken[k], x, y, z, power, broken[k + 1] > 0.28);
    }
    this.debris.blast(x, y, z, radius * 1.8, power * 4.5);
  }
  // a shell bursting on the ground: dig a crater, throw earth and stones
  crater(x, z, r, depth) {
    const D = this.debris, y = this.groundH(x, z); this.rubble.crater(x, z, r, depth);
    const paved = roadEdgeDist(x, z) < 0;
    const n = D.activeCount > 1200 ? 4 : 13;
    for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, sp = 3 + Math.random() * 7, s = 0.07 + Math.random() * 0.14; const stone = paved && Math.random() < 0.6;
      D.spawn({ x: x + Math.cos(a) * r * 0.4, y: y + 0.2, z: z + Math.sin(a) * r * 0.4, hx: s, hy: s * (0.6 + Math.random() * 0.5), hz: s * (0.7 + Math.random() * 0.6), yaw: a, vx: Math.cos(a) * sp, vy: 5 + Math.random() * 8, vz: Math.sin(a) * sp, wx: (Math.random() - 0.5) * 14, wy: (Math.random() - 0.5) * 10, wz: (Math.random() - 0.5) * 14,
        rest: [x + i, y, z], mat: stone ? MAT.STONE : MAT.EARTH, out: stone ? 9 : 0, tint: [1, 1, 1], extra: 0 }); }
    this.game.marks.stamp(3, x, z, Math.random() * 6.283, r * 5.5, r * 5.5, 1.0, Math.random() * 30);
    this.game.marks.stamp(1, x, z, Math.random() * 6.283, r * 2.3, r * 2.3, 0.9, Math.random() * 30);
  }
  dropGroup(s, group) {
    const D = this.debris;
    if (group.length === 1) { const d = this.pieceDesc(s, group[0]); s.remove(group[0]); d.vx = (Math.random() - 0.5) * 0.8; d.vz = (Math.random() - 0.5) * 0.8; d.wx = (Math.random() - 0.5) * 2; d.wz = (Math.random() - 0.5) * 2; if (s.P[group[0]].mat !== MAT.GLASS) D.spawn(d); else this.game.fx.glass(d.x, d.y, d.z, 0, -1, 0); return; }
    const hasHinge = s.hinge(group, _h); const hinge = hasHinge ? _h.clone() : null;
    const members = []; let mass = 0;
    for (const i of group) { const p = s.P[i]; const d = this.pieceDesc(s, i); s.remove(i); if (p.mat === MAT.GLASS) { this.game.fx.glass(d.x, d.y, d.z, 0, -1, 0); continue; } const k = D.spawn(d, 3); if (k >= 0) { members.push(k); mass += p.mass; } }
    if (members.length > 1) { const cl = D.spawnCluster(members, hinge, null); this.game.onCollapse(cl.com.x, cl.com.y, cl.com.z, mass, members.length);
      if (members.length > 18) { const gy = this.groundH(cl.com.x, cl.com.z), n = Math.min(16, 4 + members.length / 12), fx = this.game.fx; for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, sp = 2 + Math.random() * 5; fx.smoke.emit({ x: cl.com.x + Math.cos(a) * 2, y: gy + 0.6 + Math.random() * 1.5, z: cl.com.z + Math.sin(a) * 2, vx: Math.cos(a) * sp, vy: 0.6 + Math.random() * 1.6, vz: Math.sin(a) * sp, life: 6 + Math.random() * 6, s0: 1.6, s1: 6 + Math.random() * 5, r: 0.22, g: 0.20, b: 0.18, a: 0.42, drag: 0.9, grav: -0.06, kind: 0 }); } }
    }
    else if (members.length === 1) { D.state[members[0]] = 1; D.activeCount++; }
  }

  update(dt) {
    this.dustBudget = Math.min(40, this.dustBudget + dt * 30);
    this.rumble = Math.max(0, this.rumble - dt * 1.6);
    for (const s of this.structures) {
      if (!s.dirty) continue;
      s.timer -= dt; if (s.timer > 0) continue;
      const res = s.solve();
      if (res) {
        for (const g of res.fall) this.dropGroup(s, g);
        for (const i of res.crush) { const p = s.P[i]; s.toWorld(p.cx, p.cy, p.cz, _w); this.breakPiece(s, i, _w.x + (Math.random() - 0.5), _w.y + 1.0, _w.z + (Math.random() - 0.5), 0.5, true); }
        if (res.crush.length) { this.rumble = Math.min(3, this.rumble + 0.15 * res.crush.length); this.rumblePos = { x: s.center.x, y: 2, z: s.center.z }; }
        s.dirty = true; s.timer = 0.07 + Math.random() * 0.05;
      }
      if (s.removed.length) { this.debris.wakeResting(s.id, new Set(s.removed)); s.removed.length = 0; }
    }
    this.debris.update(dt);
  }
  flush() {
    for (const s of this.structures) s.flush();
    this.debris.flush(); this.rubble.updateMesh();
  }
}
