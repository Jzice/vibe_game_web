import * as THREE from 'three';
import { CFG, terrainH, fordAt } from './terrain.js';

const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

const RING = [[0, 0], ...Array.from({ length: 8 }, (_, k) => [Math.cos(k * Math.PI / 4) * 1.95, Math.sin(k * Math.PI / 4) * 1.95])];
// A coarse map of where a tank can drive, rebuilt as buildings fall and the bridge breaks.
export class Nav {
  constructor(world) {
    this.world = world; this.cell = 2; const B = CFG.BOUNDS;
    this.x0 = B.x0; this.z0 = B.z0; this.nx = Math.ceil((B.x1 - B.x0) / this.cell); this.nz = Math.ceil((B.z1 - B.z0) / this.cell);
    this.raw = new Uint8Array(this.nx * this.nz); this.block = new Uint8Array(this.nx * this.nz); this.row = 0; this.ready = false;
    this.g = new Float32Array(this.nx * this.nz); this.from = new Int32Array(this.nx * this.nz); this.mark = new Int32Array(this.nx * this.nz); this.stamp = 0;
    this.trees = []; this.wrecks = [];
  }
  cellOf(x, z) { return [clamp(Math.floor((x - this.x0) / this.cell), 0, this.nx - 1), clamp(Math.floor((z - this.z0) / this.cell), 0, this.nz - 1)]; }
  center(i, k, out) { out.x = this.x0 + (i + 0.5) * this.cell; out.z = this.z0 + (k + 0.5) * this.cell; return out; }
  _scanRow(k) {
    const W = this.world, c = this.cell;
    for (let i = 0; i < this.nx; i++) {
      const x = this.x0 + (i + 0.5) * c, z = this.z0 + (k + 0.5) * c; let b = 0;
      const h = W.driveH(x, z, 3); if (h < -1.3 && fordAt(x) < 0.6) b = 1;
      if (!b && W.rubble.heightAt(x, z) > 1.7) b = 1;
      // a cell is open if a tank's width fits there: test the middle and a ring at half a hull's width
      if (!b) for (const [ox, oz] of RING) {
        for (const hy of [0.7, 1.5]) { const r = W.solidAt(x + ox, h + hy, z + oz); if (r && r.s.kind !== 'wall' && r.s.kind !== 'prop' && !r.s.deck) { b = 1; break; } } if (b) break; }
      this.raw[k * this.nx + i] = b;
    }
  }
  // spread the work over frames; call every frame
  update(rows = 6) {
    for (let n = 0; n < rows; n++) { this._scanRow(this.row); this.row++; if (this.row >= this.nz) { this.row = 0; this._inflate(); this.ready = true; } }
  }
  rebuildAll() { for (let k = 0; k < this.nz; k++) this._scanRow(k); this._inflate(); this.ready = true; this.row = 0; }
  _inflate() {
    const { nx, nz, raw, block } = this;
    for (let k = 0; k < nz; k++) for (let i = 0; i < nx; i++) { let b = raw[k * nx + i];
      block[k * nx + i] = b; }
    for (const t of this.trees) { const [i, k] = this.cellOf(t.x, t.z); block[k * nx + i] = 1; }
    // burnt-out tanks stay where they died and have to be driven around
    for (const w of (this.wrecks || [])) { const [i, k] = this.cellOf(w.x, w.z); for (let dk = -2; dk <= 2; dk++) for (let di = -2; di <= 2; di++) { const ii = i + di, kk = k + dk; if (ii >= 0 && kk >= 0 && ii < nx && kk < nz && Math.hypot(di, dk) < 2.6) block[kk * nx + ii] = 1; } }
  }
  free(i, k) { return i >= 0 && k >= 0 && i < this.nx && k < this.nz && !this.block[k * this.nx + i]; }
  // A* over the grid. Returns an array of {x, z} or null.
  path(sx, sz, tx, tz) {
    const { nx, nz } = this; let [si, sk] = this.cellOf(sx, sz), [ti, tk] = this.cellOf(tx, tz);
    const nearestFree = (i, k) => { if (this.free(i, k)) return [i, k]; for (let r = 1; r < 8; r++) for (let dk = -r; dk <= r; dk++) for (let di = -r; di <= r; di++) if (Math.max(Math.abs(di), Math.abs(dk)) === r && this.free(i + di, k + dk)) return [i + di, k + dk]; return null; };
    const s = nearestFree(si, sk), t = nearestFree(ti, tk); if (!s || !t) return null; [si, sk] = s; [ti, tk] = t;
    const st = ++this.stamp, g = this.g, from = this.from, mark = this.mark; const open = [];
    const hfn = (i, k) => { const dx = Math.abs(i - ti), dz = Math.abs(k - tk); return Math.max(dx, dz) + 0.414 * Math.min(dx, dz); };
    const push = (f, id) => { open.push(f, id); let c = open.length / 2 - 1; while (c > 0) { const p = (c - 1) >> 1; if (open[p * 2] <= open[c * 2]) break; const a = open[p * 2], b = open[p * 2 + 1]; open[p * 2] = open[c * 2]; open[p * 2 + 1] = open[c * 2 + 1]; open[c * 2] = a; open[c * 2 + 1] = b; c = p; } };
    const pop = () => { const id = open[1]; const lf = open[open.length - 2], li = open[open.length - 1]; open.length -= 2; const m = open.length / 2; if (m > 0) { open[0] = lf; open[1] = li; let c = 0; for (;;) { const l = c * 2 + 1, r = l + 1; let sm = c; if (l < m && open[l * 2] < open[sm * 2]) sm = l; if (r < m && open[r * 2] < open[sm * 2]) sm = r; if (sm === c) break; const a = open[sm * 2], b = open[sm * 2 + 1]; open[sm * 2] = open[c * 2]; open[sm * 2 + 1] = open[c * 2 + 1]; open[c * 2] = a; open[c * 2 + 1] = b; c = sm; } } return id; };
    const sid = sk * nx + si, tid = tk * nx + ti; g[sid] = 0; from[sid] = -1; mark[sid] = st; push(hfn(si, sk), sid);
    let found = false, guard = 0;
    while (open.length && guard++ < 20000) {
      const id = pop(); if (id === tid) { found = true; break; }
      const i = id % nx, k = (id / nx) | 0;
      for (let dk = -1; dk <= 1; dk++) for (let di = -1; di <= 1; di++) {
        if (!di && !dk) continue; const ii = i + di, kk = k + dk; if (!this.free(ii, kk)) continue;
        if (di && dk && (!this.free(i + di, k) || !this.free(i, k + dk))) continue;
        const nid = kk * nx + ii, ng = g[id] + (di && dk ? 1.414 : 1);
        if (mark[nid] === st && ng >= g[nid]) continue;
        mark[nid] = st; g[nid] = ng; from[nid] = id; push(ng + hfn(ii, kk), nid);
      }
    }
    if (!found) return null;
    const cells = []; for (let id = tid; id >= 0; id = from[id]) cells.push(id); cells.reverse();
    // drop waypoints that a straight run can skip
    const out = []; let a = 0; const P = (id) => ({ x: this.x0 + ((id % nx) + 0.5) * this.cell, z: this.z0 + (((id / nx) | 0) + 0.5) * this.cell });
    while (a < cells.length - 1) { let b = Math.min(cells.length - 1, a + 12); while (b > a + 1 && !this.straight(cells[a], cells[b])) b--; out.push(P(cells[b])); a = b; }
    return out;
  }
  straight(ida, idb) {
    const nx = this.nx; const ai = ida % nx, ak = (ida / nx) | 0, bi = idb % nx, bk = (idb / nx) | 0; const n = Math.max(Math.abs(bi - ai), Math.abs(bk - ak)) * 2;
    for (let s = 1; s < n; s++) { const t = s / n; if (!this.free(Math.round(ai + (bi - ai) * t), Math.round(ak + (bk - ak) * t))) return false; }
    return true;
  }
}

// One enemy tank commander: find the player, close in, keep the thick front armour towards them, shoot.
export class EnemyAI {
  constructor(game, tank, o = {}) {
    this.game = game; this.tank = tank; this.path = null; this.pathT = 0; this.seeT = 0; this.sawT = 99; this.lastSeen = new THREE.Vector3(o.gx || 0, 0, o.gz || 30);
    this.aimOff = new THREE.Vector3(); this.stuckT = 0; this.stuckPos = tank.pos.clone(); this.backT = 0; this.thinkT = Math.random() * 0.3; this.canSee = false; this.blindT = 0;
    this.ctrl = { throttle: 0, steer: 0, aimYaw: tank.yaw, aimPitch: 0, fire: false }; this.skill = o.skill || 1; this.holdT = 0;
    this.via = (o.via || []).map(([x, z]) => ({ x, z }));
    this.flank = o.flank || 0; this.fg = null; this.cover = null;      // which side it likes to come round by; where it hides to reload          // places to pass through first: its own way over the river
    this.newAim();
  }
  newAim() { const s = 2.5 / this.skill; this.aimOff.set((Math.random() + Math.random() - 1) * s, (Math.random() + Math.random() - 1) * s * 0.5, (Math.random() + Math.random() - 1) * s); }
  // somewhere close by that the target cannot see: a corner to pull back behind while the gun is reloaded
  findCover() {
    const t = this.tank, g = this.game, W = g.world, pl = g.player, nav = g.nav; let best = null, bd = 1e9;
    const back = t.yaw + Math.PI;
    for (const r of [7, 11]) for (let k = 0; k < 10; k++) {
      const a = k / 10 * 6.283 + r, x = t.pos.x + Math.sin(a) * r, z = t.pos.z + Math.cos(a) * r;
      const [i, kk] = nav.cellOf(x, z); if (!nav.free(i, kk) || !nav.straight(kk * nav.nx + i, nav.cellOf(t.pos.x, t.pos.z)[1] * nav.nx + nav.cellOf(t.pos.x, t.pos.z)[0])) continue;
      const y = W.driveH(x, z, 3) + 2.2; let seen = false;
      for (const o of [0, 1.6, -1.6]) if (W.clearLine(x + Math.cos(a) * o, y, z - Math.sin(a) * o, pl.pos.x, pl.pos.y + 1.7, pl.pos.z)) { seen = true; break; }
      if (seen) continue;
      const d = r + Math.abs(wrap(a - back)) * 3;                       // nearest first, and rather behind than in front
      if (d < bd) { bd = d; best = { x, z }; }
    }
    return best;
  }
  update(dt) {
    const t = this.tank, g = this.game, W = g.world, pl = g.player, c = this.ctrl; c.fire = false;
    if (!t.alive) return c;
    const eye = t.turretWorld(new THREE.Vector3());
    const targetAlive = pl && pl.alive;
    const dx = pl.pos.x - t.pos.x, dz = pl.pos.z - t.pos.z, dist = Math.hypot(dx, dz);
    this.thinkT -= dt;
    if (this.thinkT <= 0) {
      this.thinkT = 0.22;
      this.canSee = targetAlive && dist < 130 && W.clearLine(eye.x, eye.y, eye.z, pl.pos.x, pl.pos.y + 1.7, pl.pos.z);
      // never shoot through a friend
      this.friendInWay = false;
      if (this.canSee) for (const o of g.tanks) { if (o === t || o.isPlayer) continue; if (o.hitTest(eye.x, eye.y, eye.z, pl.pos.x, pl.pos.y + 1.5, pl.pos.z)) { this.friendInWay = true; break; } }
      if (this.canSee) { this.lastSeen.copy(pl.pos); this.sawT = 0; }
    }
    this.sawT += dt; this.seeT = this.canSee ? this.seeT + dt : 0; this.blindT = this.canSee ? 0 : this.blindT + dt;
    // ---- where to drive ----
    let goalX = this.lastSeen.x, goalZ = this.lastSeen.z; let wantMove = true, speed = 1;
    // halted with the target in view but unable to bring the gun to bear (too steep an angle): keep moving
    this.noAimT = (this.canSee && (t.aimError || 0) > 0.06) ? (this.noAimT || 0) + dt : 0;
    if (t.wasHit) { t.wasHit = 0; this.backT = 2.2; this.backSteer = Math.random() < 0.5 ? -0.6 : 0.6; this.shiftT = 0; }
    this.shiftT = (this.shiftT || 0) - dt;
    if (this.canSee) {
      // halt to shoot only while the gun is coming on and the round is nearly ready; otherwise keep closing or shifting
      const ready = t.reload < 2.2;
      if (dist < 70 && !this.friendInWay && this.noAimT < 5 && ready && this.shiftT <= 0) wantMove = false; else speed = this.friendInWay ? 0.8 : (dist < 40 ? 0.45 : 0.75);
      if (this.shiftT > 0 || dist < 32) { const side = this.shiftSide || 1; goalX = pl.pos.x + (-dz / dist) * 26 * side; goalZ = pl.pos.z + (dx / dist) * 26 * side; }
    }
    if (this.friendInWay) { goalX = pl.pos.x + (t.pos.x > pl.pos.x ? 14 : -14); goalZ = pl.pos.z; }
    // out of sight and still some way off: come round by its own side instead of straight down the same street as the others
    if (!this.canSee && this.flank && dist > 48) {
      if (!this.fg || Math.hypot(this.fg.sx - this.lastSeen.x, this.fg.sz - this.lastSeen.z) > 18) { const a = Math.atan2(t.pos.x - this.lastSeen.x, t.pos.z - this.lastSeen.z) + this.flank; this.fg = { sx: this.lastSeen.x, sz: this.lastSeen.z, x: clamp(this.lastSeen.x + Math.sin(a) * 34, -138, 138), z: clamp(this.lastSeen.z + Math.cos(a) * 34, -8, 150), done: false }; }
      if (Math.hypot(this.fg.x - t.pos.x, this.fg.z - t.pos.z) < 10) this.fg.done = true;
      if (!this.fg.done) { goalX = this.fg.x; goalZ = this.fg.z; }
    }
    if (this.via.length) { const v = this.via[0]; if (Math.hypot(v.x - t.pos.x, v.z - t.pos.z) < 9) { this.via.shift(); this.pathT = 0; } else if (!this.canSee || dist > 60) { goalX = v.x; goalZ = v.z; wantMove = true; speed = 1; } }
    // just fired: pull back out of sight while the loader works, then come out again
    let cover = null;
    if (this.cover) { if (t.reload < 2.6 || !targetAlive || this.backT > 0) { this.cover = null; this.pathT = 0; } else { cover = this.cover; goalX = cover.x; goalZ = cover.z; wantMove = Math.hypot(cover.x - t.pos.x, cover.z - t.pos.z) > 2.6; speed = 1; } }
    if (!targetAlive) wantMove = false;
    // arrived where the target was last seen and found nothing: follow the sound of its engine
    if (!this.canSee && targetAlive && this.blindT > 3 && Math.hypot(this.lastSeen.x - t.pos.x, this.lastSeen.z - t.pos.z) < 9) { this.lastSeen.copy(pl.pos); this.pathT = 0; goalX = pl.pos.x; goalZ = pl.pos.z; }
    this.pathT -= dt;
    if (wantMove && (this.pathT <= 0 || !this.path)) { this.pathT = 2.2 + Math.random(); this.path = g.nav.ready ? g.nav.path(t.pos.x, t.pos.z, goalX, goalZ) : null; this.noPath = g.nav.ready && !this.path; }
    let thr = 0, steer = 0;
    if (this.backT > 0) { this.backT -= dt; thr = -1; steer = this.backSteer; }
    else if (wantMove && this.path && this.path.length) {
      let wp = this.path[0]; if (Math.hypot(wp.x - t.pos.x, wp.z - t.pos.z) < 3.2) { this.path.shift(); wp = this.path[0]; }
      if (wp) { const want = Math.atan2(wp.x - t.pos.x, wp.z - t.pos.z), d = wrap(want - t.yaw);
        // into cover it backs up, keeping the thick front plate towards the enemy
        if (cover && Math.abs(d) > 1.7) { const dr = wrap(want - t.yaw - Math.PI); steer = clamp(dr * 2.2, -1, 1); thr = Math.abs(dr) < 0.8 ? -1 : -0.3; }
        else { steer = clamp(-d * 2.2, -1, 1); thr = Math.abs(d) < 0.5 ? speed : (Math.abs(d) < 1.2 ? 0.25 : 0); } }
    } else if (!wantMove && targetAlive) {
      // halted: turn the hull to face the threat so shots meet the front plate
      const d = wrap(Math.atan2(dx, dz) - t.yaw); if (Math.abs(d) > 0.2) steer = clamp(-d * 1.5, -1, 1);
    } else if (wantMove && this.noPath) {
      // cut off (the bridge is down): work along the bank until there is a line of sight
      const bankZ = t.pos.z < CFG.RIVER_Z ? CFG.RIVER_Z - 15 : pl.pos.z; const tz = bankZ, tx = clamp(pl.pos.x + Math.sin(g.time * 0.05 + t.pos.x) * 25, -130, 130);
      const want = Math.atan2(tx - t.pos.x, tz - t.pos.z), d = wrap(want - t.yaw); if (Math.hypot(tx - t.pos.x, tz - t.pos.z) > 6) { steer = clamp(-d * 2.2, -1, 1); thr = Math.abs(d) < 0.5 ? 0.6 : 0.2; }
    }
    // stuck against something: back off and try again
    if (thr > 0.2) { this.stuckT += dt; if (this.stuckT > 2.6) { if (t.pos.distanceTo(this.stuckPos) < 1.0) { this.backT = 1.6; this.backSteer = Math.random() < 0.5 ? -1 : 1; this.pathT = 0; } this.stuckT = 0; this.stuckPos.copy(t.pos); } } else { this.stuckT = 0; this.stuckPos.copy(t.pos); }
    c.throttle = thr; c.steer = steer;
    // ---- gun ----
    let ax, ay, az;
    if (this.canSee || this.sawT < 4) {
      const lead = dist / t.spec.shellSpeed; ax = pl.pos.x + pl.vel.x * lead + this.aimOff.x * (dist / 60 + 0.4); ay = pl.pos.y + 1.35 + this.aimOff.y; az = pl.pos.z + pl.vel.z * lead + this.aimOff.z * (dist / 60 + 0.4);
    } else { ax = this.lastSeen.x; ay = this.lastSeen.y + 1.5; az = this.lastSeen.z; }
    const ex = ax - eye.x, ey = ay - eye.y, ez = az - eye.z, hd = Math.hypot(ex, ez), tof = hd / t.spec.shellSpeed;
    c.aimYaw = Math.atan2(ex, ez); c.aimPitch = Math.atan2(ey + 0.5 * 9.81 * tof * tof, hd);
    const settled = (t.aimError || 9) < 0.02 + (Math.abs(t.speed) > 1 ? 0.02 : 0);
    if (this.canSee && !this.friendInWay && this.seeT > 1.25 / this.skill && settled && t.reload <= 0) { c.fire = true; this.newAim(); this.cover = g.nav.ready && Math.random() < 0.8 ? this.findCover() : null; this.shiftT = this.cover ? 0 : 2.5 + Math.random() * 2.5; this.shiftSide = Math.random() < 0.5 ? -1 : 1; this.pathT = 0; }
    // nothing to shoot at for a long while, but the target is close behind cover: blast the cover
    if (!this.canSee && targetAlive && this.blindT > 3.5 && this.sawT < 30 && Math.hypot(this.lastSeen.x - t.pos.x, this.lastSeen.z - t.pos.z) < 90 && settled && t.reload <= 0) { c.fire = true; this.blindT = 0; this.lastSeen.x += (Math.random() - 0.5) * 6; this.lastSeen.z += (Math.random() - 0.5) * 6; }
    return c;
  }
}
