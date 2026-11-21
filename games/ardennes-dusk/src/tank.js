import * as THREE from 'three';
import { tankParts } from './tankModels.js';
import { makeSteelMaterial } from './materials.js';
import { CFG, terrainH } from './terrain.js';

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _v = new THREE.Vector3(), _d = new THREE.Vector3(), _at = { z: 0, y: 0, a: 0 };
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const XAXIS = new THREE.Vector3(1, 0, 0), ZERO = new THREE.Vector3(0, 0, 0);
const R = Math.random;

// ---------------------------------------------------------------------------------------------
// Bits of tank lying about or flying through the air: plates, wheels, track links, stowage.
// ---------------------------------------------------------------------------------------------
export class LooseParts {
  constructor(game) { this.game = game; this.list = []; }
  // mesh must already be in world space under game.battle
  add(mesh, v, w, o = {}) {
    this.list.push({ mesh, v, w, rest: false, r: o.r || 0.15, smoke: o.smoke || 0, fire: o.fire || 0, t: 0, loud: o.loud });
    if (this.list.length > 150) { const old = this.list.shift(); this.game.battle.remove(old.mesh); }
  }
  update(dt) {
    const W = this.game.world, fx = this.game.fx;
    for (const p of this.list) {
      if (p.rest) { if (p.fire > 0) { p.fire -= dt; if (R() < dt * 6) fx.glow.emit({ x: p.mesh.position.x + (R() - 0.5) * 0.2, y: p.mesh.position.y, z: p.mesh.position.z + (R() - 0.5) * 0.2, vx: (R() - 0.5) * 0.3, vy: 0.5 + R() * 0.5, vz: (R() - 0.5) * 0.3, life: 0.3 + R() * 0.3, s0: 0.16 + R() * 0.1, s1: 0.2, r: 3, g: 3, b: 3, a: 1, drag: 0.5, grav: -1.0, kind: 3 }); } continue; }
      p.t += dt; p.v.y -= 9.81 * dt; const m = p.mesh; m.position.addScaledVector(p.v, dt);
      const al = p.w.length(); if (al > 1e-3) { _q.setFromAxisAngle(_v.copy(p.w).multiplyScalar(1 / al), al * dt); m.quaternion.premultiply(_q); }
      if (p.smoke > 0 && R() < dt * 30) { p.smoke -= dt; fx.smoke.emit({ x: m.position.x, y: m.position.y, z: m.position.z, vx: 0, vy: 0.4, vz: 0, life: 0.8 + R() * 0.8, s0: 0.12, s1: 0.6, r: 0.08, g: 0.08, b: 0.08, a: 0.35, drag: 1, grav: -0.4, kind: 0 }); }
      const h = W.driveH(m.position.x, m.position.z, m.position.y + 0.5) + p.r;
      if (m.position.y < h) {
        m.position.y = h;
        if (p.v.y < -2.2) { if (p.loud && p.v.y < -4) { this.game.audio.play('parts_clang', m.position, { gain: 0.5, rate: 0.8 + R() * 0.5 }); p.loud = false; } p.v.y *= -0.32; p.v.x *= 0.6; p.v.z *= 0.6; p.w.multiplyScalar(0.5); fx.dust(m.position.x, h, m.position.z, 0.5, [0.7, 0.72, 0.78]); }
        else { p.v.y = 0; p.v.x *= Math.max(0, 1 - 6 * dt); p.v.z *= Math.max(0, 1 - 6 * dt); p.w.multiplyScalar(Math.max(0, 1 - 8 * dt)); if (p.v.lengthSq() < 0.05 && p.w.lengthSq() < 0.3) p.rest = true; }
      }
      if (m.position.y < -12) p.rest = true;
    }
  }
}

export class Tank {
  constructor(game, spec, o) {
    this.game = game; this.spec = spec; this.team = o.team; this.isPlayer = !!o.player; this.name = o.name || spec.name;
    this.pos = new THREE.Vector3(o.x, game.world.driveH(o.x, o.z), o.z); this.yaw = o.yaw || 0; this.pitch = 0; this.roll = 0; this.speed = 0;
    this.turretYaw = 0; this.gunPitch = 0; this.reload = 1.0; this.hp = spec.hp; this.alive = true; this.trackOut = [0, 0];
    this.recoil = 0; this.rock = 0; this.rockV = 0; this.dist = [0, 0]; this.stampAcc = [0, 0]; this.vy = 0; this.falling = false; this.exAcc = 0; this.sprayAcc = 0; this.smokeAcc = 0;
    this.burn = { value: 0 }; this.heat = { value: 0 }; this.throttle = 0; this.hitFlash = 0; this.vel = new THREE.Vector3(); this.radius = Math.hypot(spec.halfL, spec.halfW) * 0.72; this.dead = 0;
    this.trackGone = [false, false]; this.wheelGone = new Set(); this.engineFire = 0; this.jam = 0; this.cook = null; this.sinceHit = 99;
    const parts = tankParts(spec, o.number); this.parts = parts;
    const mat = makeSteelMaterial(game.shared, { camo: spec.camo, burn: this.burn, heat: this.heat, key: spec.name }); this.mat = mat;
    this.root = new THREE.Group(); this.root.rotation.order = 'YXZ';
    const sh = (m) => { m.castShadow = true; m.receiveShadow = true; return m; }; this._sh = sh;
    this.hull = sh(new THREE.Mesh(parts.hull, mat)); this.root.add(this.hull);
    this.turret = new THREE.Group(); this.turret.position.set(...spec.turretPos); this.root.add(this.turret);
    this.turret.add(sh(new THREE.Mesh(parts.turret, mat)));
    this.gun = new THREE.Group(); this.gun.position.set(...spec.gunPivot); this.turret.add(this.gun); this.gun.add(sh(new THREE.Mesh(parts.gun, mat)));
    this.fitted = parts.loose.fitted.map((p) => { const m = sh(new THREE.Mesh(p.geo, mat)); m.position.set(...p.pos); (p.on === 'turret' ? this.turret : this.root).add(m); return { mesh: m, on: p.on }; });
    this.wheelMeshes = {};
    for (const kind of ['road', 'sprocket', 'idler']) {
      const list = spec.wheels.filter((w) => w.kind === kind); if (!list.length) continue;
      const im = sh(new THREE.InstancedMesh(parts.wheelGeo[kind], mat, list.length * 2)); im.frustumCulled = false; this.root.add(im); this.wheelMeshes[kind] = { im, list };
    }
    this.links = sh(new THREE.InstancedMesh(parts.link, mat, parts.path.n * 2)); this.links.frustumCulled = false; this.root.add(this.links);
    game.battle.add(this.root);
    this.updateRunningGear(); this.place();
  }

  get forward() { return _d.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)); }
  place() {
    const r = this.root; r.position.copy(this.pos); r.rotation.set(-(this.pitch + this.rock), this.yaw, this.roll);
    this.turret.rotation.y = this.turretYaw; this.gun.rotation.x = -this.gunPitch; this.gun.position.z = this.spec.gunPivot[2] - this.recoil;
    r.updateMatrixWorld(true);
  }
  updateRunningGear() {
    const sp = this.spec, t = sp.track, path = this.parts.path;
    for (const kind in this.wheelMeshes) {
      const { im, list } = this.wheelMeshes[kind]; let k = 0;
      for (let side = 0; side < 2; side++) { const s = side === 0 ? 1 : -1; list.forEach((w, wi) => {
        _q.setFromAxisAngle(XAXIS, this.dist[side] / w.r); _p.set(s * (t.x + w.dx), w.y, w.z);
        if (this.wheelGone.has(kind + side + '_' + wi)) _s.set(0, 0, 0); else _s.set(w.w, w.r, w.r);
        _m.compose(_p, _q, _s); im.setMatrixAt(k++, _m);
      }); }
      im.instanceMatrix.needsUpdate = true;
    }
    let k = 0;
    for (let side = 0; side < 2; side++) { const s = side === 0 ? 1 : -1; const off = -this.dist[side], gone = this.trackGone[side];
      for (let i = 0; i < path.n; i++) { path.at(i * (path.L / path.n) + off, _at); _q.setFromAxisAngle(XAXIS, -_at.a); _p.set(s * t.x, _at.y, _at.z);
        if (gone && (_at.y > 0.2 || (i * 7) % 5 === 0)) _s.set(0, 0, 0); else _s.set(1, 1, 1);
        _m.compose(_p, _q, _s); this.links.setMatrixAt(k++, _m); } }
    this.links.instanceMatrix.needsUpdate = true;
  }
  muzzle(outPos, outDir) {
    this.gun.updateMatrixWorld(true);
    outPos.set(0, 0, this.spec.barrel + 0.15).applyMatrix4(this.gun.matrixWorld);
    outDir.set(0, 0, 1).transformDirection(this.gun.matrixWorld); return outPos;
  }
  turretWorld(out) { return out.set(...this.spec.turretPos).add(_v.set(0, this.spec.gunPivot[1], 0)).applyMatrix4(this.root.matrixWorld); }
  local(x, y, z, out) { return out.set(x, y, z).applyMatrix4(this.root.matrixWorld); }

  // ---- parts coming off ----
  // knock up to n fitted parts loose, nearest to a world point first
  shed(wx, wy, wz, n, power, opts = {}) {
    const g = this.game; const cand = [];
    for (const f of this.fitted) { if (!f.mesh.parent) continue; f.mesh.getWorldPosition(_p); const d = _p.distanceTo(_v.set(wx, wy, wz)); if (d < (opts.radius || 2.8)) cand.push([d, f]); }
    cand.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < Math.min(n, cand.length); i++) {
      const m = cand[i][1].mesh; m.updateMatrixWorld(true); const wp = new THREE.Vector3(), wq = new THREE.Quaternion(), ws = new THREE.Vector3(); m.matrixWorld.decompose(wp, wq, ws);
      m.parent.remove(m); g.battle.add(m); m.position.copy(wp); m.quaternion.copy(wq);
      const out = wp.clone().sub(this.pos).setY(0).normalize();
      g.loose.add(m, new THREE.Vector3(out.x * (2 + R() * 4) * power + (R() - 0.5) * 2, (3 + R() * 5) * power, out.z * (2 + R() * 4) * power + (R() - 0.5) * 2), new THREE.Vector3((R() - 0.5) * 10, (R() - 0.5) * 8, (R() - 0.5) * 10), { r: 0.12, smoke: opts.smoke ? 1.5 : 0, loud: i === 0 });
    }
    return Math.min(n, cand.length);
  }
  // throw out fresh scrap: plates, a hatch, wheels, track links
  scrap(n, power, burning) {
    const g = this.game, sp = this.spec, S = this.parts.loose.scrap;
    for (let i = 0; i < n; i++) {
      const m = this._sh(new THREE.Mesh(S[i % S.length].geo, this.mat)); this.local((R() - 0.5) * sp.halfW * 1.6, sp.hullTop * (0.5 + R() * 0.6), (R() - 0.5) * sp.halfL * 1.6, m.position); m.quaternion.set(R(), R(), R(), R()).normalize(); g.battle.add(m);
      const a = R() * 6.283, sp2 = (3 + R() * 9) * power;
      g.loose.add(m, new THREE.Vector3(Math.cos(a) * sp2, (5 + R() * 10) * power, Math.sin(a) * sp2), new THREE.Vector3((R() - 0.5) * 14, (R() - 0.5) * 10, (R() - 0.5) * 14), { r: 0.08, smoke: burning ? 1 + R() * 2 : 0, fire: burning && R() < 0.4 ? 6 + R() * 10 : 0, loud: i < 2 });
    }
  }
  throwWheels(n) {
    const g = this.game, W = this.wheelMeshes.road; if (!W) return;
    for (let i = 0; i < n; i++) {
      const side = R() < 0.5 ? 0 : 1, wi = Math.floor(R() * W.list.length), key = 'road' + side + '_' + wi; if (this.wheelGone.has(key)) continue; this.wheelGone.add(key);
      const w = W.list[wi], s = side === 0 ? 1 : -1; const m = this._sh(new THREE.Mesh(this.parts.wheelGeo.road, this.mat)); m.scale.set(w.w, w.r, w.r);
      this.local(s * (this.spec.track.x + 0.3), w.y, w.z, m.position); m.quaternion.copy(this.root.quaternion); g.battle.add(m);
      const out = _v.set(s, 0, 0).applyQuaternion(this.root.quaternion);
      g.loose.add(m, new THREE.Vector3(out.x * (3 + R() * 5), 3 + R() * 5, out.z * (3 + R() * 5)), new THREE.Vector3((R() - 0.5) * 6, (R() - 0.5) * 6, (R() - 0.5) * 6), { r: w.r * 0.9, loud: true });
    }
  }
  // a track is shot through: the run comes apart and links scatter beside the tank
  breakTrack(side, secs) {
    const g = this.game, sp = this.spec; this.trackOut[side] = Math.max(this.trackOut[side], secs);
    if (this.trackGone[side]) return; this.trackGone[side] = true; const s = side === 0 ? 1 : -1;
    for (let i = 0; i < 12; i++) {
      const m = this._sh(new THREE.Mesh(this.parts.link, this.mat)); this.local(s * (sp.track.x + 0.2 + R() * 0.5), 0.5 + R() * 0.6, (R() - 0.5) * sp.halfL * 2, m.position); m.quaternion.copy(this.root.quaternion); g.battle.add(m);
      const out = _v.set(s, 0, 0).applyQuaternion(this.root.quaternion);
      g.loose.add(m, new THREE.Vector3(out.x * (1 + R() * 4), 1.5 + R() * 4, out.z * (1 + R() * 4)), new THREE.Vector3((R() - 0.5) * 8, (R() - 0.5) * 8, (R() - 0.5) * 8), { r: 0.06, loud: i === 0 });
    }
    this.updateRunningGear();
  }
  repairTrack(side) { this.trackGone[side] = false; this.updateRunningGear(); }

  // ctrl: { throttle -1..1, steer -1..1 (positive = right), aimYaw (world), aimPitch, fire }
  update(dt, ctrl) {
    const sp = this.spec, W = this.game.world, fx = this.game.fx;
    this.hitFlash = Math.max(0, this.hitFlash - dt);
    if (!this.alive) { this.wreck(dt); this.place(); return; }
    for (let s = 0; s < 2; s++) { if (this.trackOut[s] > 0) { this.trackOut[s] = Math.max(0, this.trackOut[s] - dt); if (this.trackOut[s] === 0 && this.isPlayer) { this.repairTrack(s); this.game.hud.note('Track repaired'); } } }
    this.reload = Math.max(0, this.reload - dt);
    // the crew patch things up when left alone for a while (player only, and never back to full)
    this.sinceHit += dt; if (this.isPlayer && this.sinceHit > 9 && this.hp < 65) this.hp = Math.min(65, this.hp + dt * 2.2);
    if (this.engineFire > 0) { this.engineFire -= this.isPlayer ? dt : 0; if (this.engineFire <= 0 && this.isPlayer) { this.game.hud.note('Fire out'); if (this.fireFx) this.fireFx.life = this.fireFx.t + 1; this.fireFx = null; } }
    if (this.jam > 0 && this.isPlayer) { this.jam = Math.max(0, this.jam - dt / 14); }
    let thr = clamp(ctrl.throttle || 0, -1, 1), st = clamp(ctrl.steer || 0, -1, 1);
    const lostL = this.trackOut[0] > 0, lostR = this.trackOut[1] > 0;
    if (lostL || lostR) { thr = 0; st = (lostL && lostR) ? 0 : (lostL ? -0.35 : 0.35) * (Math.abs(ctrl.throttle || 0) + Math.abs(ctrl.steer || 0) > 0.1 ? 1 : 0); }
    this.throttle = thr;
    const top = sp.maxSpeed * (this.engineFire > 0 ? 0.45 : 1);
    const target = thr >= 0 ? thr * top : thr * sp.reverse;
    const braking = Math.sign(target) !== Math.sign(this.speed) || Math.abs(target) < Math.abs(this.speed);
    const dv = clamp(target - this.speed, -sp.accel * dt * (braking ? 2.4 : 1), sp.accel * dt * (braking ? 2.4 : 1));
    this.rockV += -dv * 0.035; this.speed += dv;
    const rate = st * sp.turn * (1 - 0.4 * Math.min(1, Math.abs(this.speed) / sp.maxSpeed)) * (this.speed < -0.3 ? -1 : 1);
    const yaw0 = this.yaw; this.yaw = wrap(this.yaw - rate * dt);
    // ---- move, pushing through or stopping at whatever is in the way ----
    const fw = this.forward, fxw = fw.x, fzw = fw.z, lx = fzw, lz = -fxw;
    let nx = this.pos.x + fxw * this.speed * dt, nz = this.pos.z + fzw * this.speed * dt;
    let blocked = false, broke = false;
    if (Math.abs(this.speed) > 0.05 || Math.abs(rate) > 0.02) {
      const hl = sp.halfL * 0.96, hw = sp.halfW * 0.96, dir = this.speed >= 0 ? 1 : -1;
      const ram = (Math.abs(this.speed) + 1.2) * dt * sp.mass * 0.05;
      for (let a = -1; a <= 1; a += 0.5) for (const edge of [0, 1]) {
        let ox, oz; if (edge === 0) { ox = a * hw; oz = dir * hl; } else { ox = (a > 0 ? 1 : -1) * hw; oz = a === 0 ? dir * hl * 0.5 : a * hl; }
        const wx = nx + lx * ox + fxw * oz, wz = nz + lz * ox + fzw * oz;
        for (const hy of [0.55, 1.35]) {
          const r = W.solidAt(wx, this.pos.y + hy, wz); if (!r) continue;
          const s = r.s, i = r.i; W.impact(s, i, ram * (edge === 0 ? 1 : 0.4) * (s.kind === 'prop' ? 4 : 1), wx, this.pos.y + hy, wz);
          if (s.P[i].alive && s.kind !== 'prop') blocked = true; else { broke = true; if (s.kind !== 'prop' && (this.ramSnd || 0) < this.game.time - 1.2) { this.ramSnd = this.game.time; if (this.isPlayer) this.game.radio?.wall(); this.game.audio.play('wall_ram', this.pos, { gain: 0.9, rate: 0.9 + R() * 0.2 }); } }
        }
      }
      if (blocked) { nx = this.pos.x; nz = this.pos.z; this.speed *= Math.max(0, 1 - 7 * dt); this.yaw = wrap(yaw0 - rate * dt * 0.25); }
      else if (broke) this.speed *= Math.max(0, 1 - 2.5 * dt);
    }
    for (const o of this.game.tanks) { if (o === this) continue; const dx = nx - o.pos.x, dz = nz - o.pos.z, d = Math.hypot(dx, dz), min = this.radius + o.radius;
      if (d < min && d > 0.01) { const push = (min - d); nx += dx / d * push; nz += dz / d * push; this.speed *= Math.max(0, 1 - 5 * dt); } }
    const B = CFG.BOUNDS; nx = clamp(nx, B.x0, B.x1); nz = clamp(nz, B.z0, B.z1);
    // ---- height: follow the ground, craters, rubble, or the bridge deck ----
    const hAt = (x, z) => W.driveH(x, z, this.pos.y + 1.2);
    const L = sp.halfL * 0.72, Wd = sp.halfW * 0.8;
    let hf = hAt(nx + fxw * L, nz + fzw * L), hr = hAt(nx - fxw * L, nz - fzw * L), hl2 = hAt(nx + lx * Wd, nz + lz * Wd), hrt = hAt(nx - lx * Wd, nz - lz * Wd);
    const hAvg = Math.max((hf + hr) / 2, (hl2 + hrt) / 2 - 0.1);
    if (!this.falling && hAvg < this.pos.y - 1.25) {
      let onBridge = false; for (const dk of W.decks) if (this.pos.x > dk.wmin.x - 1.5 && this.pos.x < dk.wmax.x + 1.5 && this.pos.z > dk.wmin.z - 2 && this.pos.z < dk.wmax.z + 2) onBridge = true;
      if (onBridge && hAt(this.pos.x, this.pos.z) < this.pos.y - 1.25) { this.falling = true; this.vy = 0; }
      else { nx = this.pos.x; nz = this.pos.z; this.speed *= Math.max(0, 1 - 8 * dt); hf = hAt(nx + fxw * L, nz + fzw * L); hr = hAt(nx - fxw * L, nz - fzw * L); hl2 = hAt(nx + lx * Wd, nz + lz * Wd); hrt = hAt(nx - lx * Wd, nz - lz * Wd); }
    }
    this.vel.set((nx - this.pos.x) / dt, 0, (nz - this.pos.z) / dt);
    const moved = Math.hypot(nx - this.pos.x, nz - this.pos.z) * Math.sign(this.speed || 1);
    this.pos.x = nx; this.pos.z = nz;
    if (this.falling) {
      this.vy -= 9.81 * dt; this.pos.y += this.vy * dt; this.pitch += dt * 0.5; this.roll += dt * 0.2;
      const g = Math.max(terrainH(nx, nz), CFG.WATER_Y - 1.1);
      if (this.pos.y <= g) { this.pos.y = g; this.falling = false; fx.explosion(nx, CFG.WATER_Y + 0.3, nz, 1.2, { ground: true, dark: 0.1 }); this.destroy('fall'); }
    } else {
      const ht = Math.max((hf + hr) / 2, (hl2 + hrt) / 2 - 0.1);
      this.pos.y += (ht - this.pos.y) * Math.min(1, 10 * dt);
      const pt = Math.atan2(hf - hr, 2 * L), rt = Math.atan2(hl2 - hrt, 2 * Wd);
      this.pitch += (pt - this.pitch) * Math.min(1, 7 * dt); this.roll += (rt - this.roll) * Math.min(1, 7 * dt);
    }
    this.rockV += (-this.rock * 38 - this.rockV * 7) * dt; this.rock += this.rockV * dt;
    // ---- tracks ----
    const dw = wrap(this.yaw - yaw0) * sp.track.x;
    this.dist[0] += moved + dw; this.dist[1] += moved - dw;
    this.updateRunningGear();
    const Mk = this.game.marks;
    for (let side = 0; side < 2; side++) {
      const d = side === 0 ? moved + dw : moved - dw; this.stampAcc[side] += Math.abs(d);
      if (this.stampAcc[side] > 0.42) { const s = side === 0 ? 1 : -1; Mk.stamp(0, nx + lx * sp.track.x * s, nz + lz * sp.track.x * s, this.yaw, sp.track.width, this.stampAcc[side] + 0.06, 0.95, Math.max(2, Math.round(this.stampAcc[side] / 0.16))); this.stampAcc[side] = 0; }
    }
    const sp2 = Math.abs(this.speed);
    if (sp2 > 0.5) {
      W.rubble.compact(nx, nz, 1.8, Math.min(0.6, sp2 * dt * 0.6));
      W.debris.shove(nx + fxw * sp.halfL * Math.sign(this.speed), nz + fzw * sp.halfL * Math.sign(this.speed), sp.halfW + 0.2, fxw * this.speed, fzw * this.speed, this.pos.y + 1.6);
      this.sprayAcc += dt * sp2 * 2.2;
      while (this.sprayAcc > 1) { this.sprayAcc -= 1; const s = R() < 0.5 ? 1 : -1, back = -Math.sign(this.speed); fx.spray(nx + lx * sp.track.x * s + fxw * sp.halfL * 0.9 * back, this.pos.y + 0.25, nz + lz * sp.track.x * s + fzw * sp.halfL * 0.9 * back, fxw * back * (1 + R() * 2) + (R() - 0.5), 1.2 + R() * 1.8, fzw * back * (1 + R() * 2) + (R() - 0.5), terrainH(nx, nz) > -0.5); }
    }
    this.exAcc += dt * (3 + 14 * Math.abs(thr) + sp2);
    while (this.exAcc > 1) { this.exAcc -= 1; for (const e of sp.exhaust) { this.local(e[0], e[1], e[2], _p); fx.exhaust(_p.x, _p.y, _p.z, -fxw * 1.5 + (R() - 0.5), 1.4 + Math.abs(thr) * 2, -fzw * 1.5 + (R() - 0.5), 0.10 + 0.22 * Math.abs(thr)); } }
    // what gives a Tiger away in the dark: its one hooded blackout lamp, and exhaust stacks glowing dull red when it works hard
    if (!this.isPlayer) {
      this.local(0, sp.hullTop - 0.12, sp.halfL - 1.1, _p); fx.glow.emit({ x: _p.x, y: _p.y, z: _p.z, life: 0.09, s0: 0.2, s1: 0.2, r: 1.5, g: 1.9, b: 1.5, a: 1, kind: 1 });
      const hot = 0.35 + 0.65 * Math.abs(thr) + 0.2 * R();
      for (const e of sp.exhaust) { this.local(e[0], e[1] + 0.05, e[2], _p); fx.glow.emit({ x: _p.x, y: _p.y, z: _p.z, vy: 0.6, life: 0.1, s0: 0.17 * hot + 0.06, s1: 0.1, r: 3.2 * hot, g: 0.8 * hot, b: 0.12, a: 1, kind: 1 }); }
    }
    // ---- damage showing: smoke from the engine deck, then flames ----
    if (this.hp < 70) {
      this.smokeAcc += dt * (4 + (70 - this.hp) * 0.25);
      while (this.smokeAcc > 1) { this.smokeAcc -= 1; this.local((R() - 0.5) * 1.2, sp.hullTop + 0.1, -sp.halfL * 0.6 + (R() - 0.5), _p); const c = this.hp < 40 ? 0.05 : 0.22;
        fx.smoke.emit({ x: _p.x, y: _p.y, z: _p.z, vx: (R() - 0.5) * 0.6, vy: 1.6 + R() * 1.2, vz: (R() - 0.5) * 0.6, life: 3 + R() * 3, s0: 0.4, s1: 2.6 + R() * 1.6, r: c, g: c, b: c * 1.05, a: 0.42, drag: 0.3, grav: -0.3, kind: 0 }); }
    }
    if (this.engineFire > 0) { if (!this.fireFx) this.fireFx = fx.addFire(new THREE.Vector3(), 0.7, 9999); this.local(0, sp.hullTop + 0.05, -sp.halfL * 0.62, this.fireFx.pos); }
    // ---- turret and gun follow the aim ----
    if (ctrl.aimYaw !== undefined) {
      const rel = wrap(ctrl.aimYaw - this.yaw), dy = wrap(rel - this.turretYaw), maxT = sp.traverse * dt * (1 - 0.85 * this.jam);
      this.turretYaw = wrap(this.turretYaw + clamp(dy, -maxT, maxT));
      const tp = clamp(ctrl.aimPitch || 0, sp.elev[0], sp.elev[1]); this.gunPitch += clamp(tp - this.gunPitch, -0.35 * dt, 0.35 * dt);
      this.aimError = Math.abs(dy) + Math.abs(tp - this.gunPitch);
    }
    this.recoil = Math.max(0, this.recoil - dt * 1.3);
    this.place();
    if (ctrl.fire && this.reload <= 0) this.fire();
  }
  fire() {
    const pos = new THREE.Vector3(), dir = new THREE.Vector3(); this.muzzle(pos, dir);
    this.reload = this.spec.reload; this.recoil = 0.42; if (this.isPlayer) this.game.shots++;
    this.rockV += 0.55 * Math.cos(this.turretYaw) * (this.spec.name === 'tiger' ? 0.6 : 1);
    this.game.combat.fire(this, pos, dir);
    this.game.fx.muzzle(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, this.spec.name === 'tiger' ? 1.3 : 1);
    this.game.marks.stamp(2, pos.x + dir.x * 2.5, pos.z + dir.z * 2.5, R() * 6, 6, 6, 0.35, R() * 30);
    this.game.audio.cannon(pos, this.isPlayer, this.spec.name === 'tiger');
    if (this.isPlayer) this.game.shake(0.5);
  }
  // segment test in the tank's own frame. Returns { t, zone, face, side, ly } or null. face: 0 front, 1 rear, 2 side, 3 top
  hitTest(ax, ay, az, bx, by, bz) {
    const sp = this.spec; let best = null;
    const test = (yaw, ox, oy, oz, x0, x1, y0, y1, z0, z1, zone) => {
      const c = Math.cos(yaw), s = Math.sin(yaw);
      const la = [(ax - ox) * c - (az - oz) * s, ay - oy, (ax - ox) * s + (az - oz) * c], lb = [(bx - ox) * c - (bz - oz) * s, by - oy, (bx - ox) * s + (bz - oz) * c];
      const mn = [x0, y0, z0], mx = [x1, y1, z1]; let t0 = 0, t1 = 1, axis = -1, sign = 0;
      for (let k = 0; k < 3; k++) { const d = lb[k] - la[k];
        if (Math.abs(d) < 1e-9) { if (la[k] < mn[k] || la[k] > mx[k]) return; continue; }
        let ta = (mn[k] - la[k]) / d, tb = (mx[k] - la[k]) / d, sg = -1; if (ta > tb) { const tmp = ta; ta = tb; tb = tmp; sg = 1; }
        if (ta > t0) { t0 = ta; axis = k; sign = sg; } if (tb < t1) t1 = tb; if (t0 > t1) return; }
      if (axis < 0) return;
      if (!best || t0 < best.t) { const ly = la[1] + (lb[1] - la[1]) * t0; best = { t: t0, zone, face: axis === 1 ? 3 : axis === 0 ? 2 : (sign > 0 ? 0 : 1), side: (la[0] + (lb[0] - la[0]) * t0) > 0 ? 0 : 1, ly, yaw }; }
    };
    test(this.yaw, this.pos.x, this.pos.y, this.pos.z, -sp.halfW, sp.halfW, 0.25, sp.hullTop, -sp.halfL, sp.halfL, 'hull');
    const tb = sp.turretBox; const tx = this.pos.x + Math.sin(this.yaw) * sp.turretPos[2], tz = this.pos.z + Math.cos(this.yaw) * sp.turretPos[2];
    if (!this.flying) test(this.yaw + this.turretYaw, tx, this.pos.y + sp.hullTop, tz, -tb.hx, tb.hx, 0, tb.hy * 2, tb.z0, tb.z1, 'turret');
    return best;
  }
  chip(amount) { if (!this.alive) return; this.hp = Math.max(1, this.hp - amount); this.hitFlash = 0.35; this.sinceHit = 0; if (this.isPlayer) this.game.shake(0.6); }
  // a shell got inside but did not finish the tank: something important is wrecked
  cripple(what) {
    this.hp = Math.max(8, Math.min(this.hp - 50, 42)); this.hitFlash = 0.8; this.sinceHit = 0; if (this.isPlayer) this.game.shake(1.1);
    if (what === 'engine') { this.engineFire = 22; if (this.isPlayer) this.game.hud.note('Engine on fire', 3); }
    else if (what === 'turret') { this.jam = 1; if (this.isPlayer) this.game.hud.note('Turret jammed', 3); }
  }
  damage(amount, info = {}) { if (!this.alive) return; this.hp -= amount; this.hitFlash = 0.6; this.sinceHit = 0; if (this.hp <= 0) this.destroy('shot', info); }
  destroy(how, info) {
    if (!this.alive) return; this.alive = false; this.hp = 0; this.speed = 0;
    const g = this.game, fx = g.fx, p = this.pos, sp = this.spec;
    if (this.fireFx) { this.fireFx.life = this.fireFx.t + 0.5; this.fireFx = null; }
    if (how !== 'fall') {
      fx.explosion(p.x, p.y + 1.6, p.z, 2.1, { dark: 0.9 }); fx.sparks(p.x, p.y + 2, p.z, 60, 0, 1, 0, 22);
      g.marks.stamp(1, p.x, p.z, R() * 6, 12, 12, 1.0, R() * 30); g.world.rubble.crater(p.x, p.z, 3.4, 0.3);
      g.world.explode(p.x, p.y + 1.2, p.z, 3.2, 1.3);
      // everything bolted on goes, plus plates, hatches, wheels and a track
      this.shed(p.x, p.y + 1.5, p.z, 99, 1.6, { radius: 9, smoke: true }); this.scrap(16, 1, true); this.throwWheels(3 + Math.floor(R() * 3));
      this.breakTrack(R() < 0.5 ? 0 : 1, 9999); if (R() < 0.45) this.breakTrack(0, 9999), this.breakTrack(1, 9999);
      // the ammunition goes up and throws the turret off
      if (R() < 0.75) { const t = this.turret; t.updateMatrixWorld(true); const wp = new THREE.Vector3(), wq = new THREE.Quaternion(), ws = new THREE.Vector3(); t.matrixWorld.decompose(wp, wq, ws);
        this.root.remove(t); g.battle.add(t); t.position.copy(wp); t.quaternion.copy(wq);
        const ta = R() * 6.283, th = 2.4 + R() * 2.4; this.flying = { v: new THREE.Vector3(Math.cos(ta) * th, 8.5 + R() * 4, Math.sin(ta) * th), w: new THREE.Vector3((R() - 0.5) * 3, (R() - 0.5) * 2, (R() - 0.5) * 3), rest: false }; }
      else { this.turretYaw += (R() - 0.5) * 0.7; this.gunPitch = -0.1; }
      // two seats of fire: the fighting compartment and the engine
      this.fires = [fx.addFire(this.local(0, sp.hullTop + 0.1, sp.turretPos[2], new THREE.Vector3()), 1.5, 170), fx.addFire(this.local(0, sp.hullTop, -sp.halfL * 0.6, new THREE.Vector3()), 1.1, 140)];
      this.cook = { t: 0, next: 0.5 + R() * 0.8, until: 8 + R() * 8 }; this.heat.value = 1;
      g.audio.play('tank_explode', p, { gain: 1.3 }) || g.audio.explosion(p, 2.2);
      if (g.player && p.distanceTo(g.player.pos) < 60) g.shake(0.8);
    }
    g.onTankDestroyed(this, how);
  }
  // a burning wreck: paint chars, plates glow, ammunition cooks off, the thrown turret comes down
  wreck(dt) {
    const g = this.game, fx = g.fx, sp = this.spec, p = this.pos; this.dead += dt;
    this.burn.value = Math.min(1, this.burn.value + dt * 0.25); this.heat.value = Math.max(0.06, this.heat.value - dt / 50);
    const c = this.cook;
    if (c && c.t < c.until) {
      c.t += dt; c.next -= dt;
      if (c.next <= 0) {
        c.next = 0.25 + R() * R() * 2.4; const big = R() < 0.22; this.local((R() - 0.5) * 0.8, sp.hullTop + 0.3, sp.turretPos[2] + (R() - 0.5), _p);
        // a jet of flame and sparks out of the turret ring or a hatch
        fx.sparks(_p.x, _p.y, _p.z, big ? 46 : 22, (R() - 0.5) * 0.6, 1.4, (R() - 0.5) * 0.6, big ? 26 : 17);
        for (let i = 0; i < (big ? 9 : 5); i++) fx.glow.emit({ x: _p.x, y: _p.y + i * 0.35, z: _p.z, vx: (R() - 0.5) * 1.5, vy: 9 + R() * 8, vz: (R() - 0.5) * 1.5, life: 0.25 + R() * 0.3, s0: 0.5, s1: 1.1 + R(), r: 6, g: 2.6, b: 0.6, a: 1, drag: 3, kind: 1 });
        fx.flash(_p.x, _p.y + 1, _p.z, [1.0, 0.6, 0.25], big ? 900 : 420, 0.3);
        if (big) { fx.explosion(_p.x, _p.y, _p.z, 0.8, { dark: 0.9 }); this.scrap(3, 0.8, true); }
        g.audio.play(big ? 'explosion_ground' : 'cookoff', p, { gain: big ? 0.9 : 0.6, rate: 0.85 + R() * 0.4 });
        if (g.player && p.distanceTo(g.player.pos) < 30) g.shake(big ? 0.35 : 0.12);
      }
    }
    // embers and a heavy column of smoke for as long as it burns
    if (this.dead < 170 && this.fires && R() < dt * 13) { this.local((R() - 0.5) * 1.5, sp.hullTop + 0.6, (R() - 0.5) * 3, _p); fx.smoke.emit({ x: _p.x, y: _p.y + 1.5, z: _p.z, vx: 0.9 + (R() - 0.5), vy: 3 + R() * 2, vz: 0.4 + (R() - 0.5), life: 8 + R() * 7, s0: 1.0, s1: 4.5 + R() * 3.5, r: 0.035, g: 0.033, b: 0.032, a: 0.6, drag: 0.18, grav: -0.3, kind: 0 }); }
    const f = this.flying; if (!f || f.rest) return; const t = this.turret;
    f.v.y -= 9.81 * dt; t.position.addScaledVector(f.v, dt);
    const al = f.w.length(); if (al > 1e-3) { _q.setFromAxisAngle(_v.copy(f.w).multiplyScalar(1 / al), al * dt); t.quaternion.premultiply(_q); }
    if (R() < dt * 20) fx.smoke.emit({ x: t.position.x, y: t.position.y, z: t.position.z, vx: 0, vy: 0.5, vz: 0, life: 1.5 + R(), s0: 0.5, s1: 2.2, r: 0.05, g: 0.05, b: 0.05, a: 0.5, drag: 0.6, grav: -0.3, kind: 0 });
    const h = g.world.driveH(t.position.x, t.position.z, t.position.y + 1) + 0.3;
    const overHull = Math.hypot(t.position.x - p.x, t.position.z - p.z) < 2.7 ? p.y + sp.hullTop - 0.3 : -99;
    const floor = Math.max(h, overHull);
    const land = floor + (f.lift || 0);
    if (t.position.y < land && f.v.y < 0) {
      t.position.y = land;
      if (f.v.y < -3) { f.v.y *= -0.25; f.v.x *= 0.5; f.v.z *= 0.5; f.w.multiplyScalar(0.4); fx.dust(t.position.x, floor, t.position.z, 2.4, [0.5, 0.5, 0.55]); g.audio.play('parts_clang', t.position, { gain: 1.0, rate: 0.55 }) || g.audio.thud(t.position, 1.5); g.marks.stamp(1, t.position.x, t.position.z, R() * 6, 4, 4, 0.6, R() * 30); }
      else { f.v.set(0, 0, 0); f.restT = (f.restT || 0) + dt; }
      // once it has struck the ground it rolls over onto its roof or its ring and lies there, never half sunk in the street
      if (!f.qT) { const up = _v.set(0, 1, 0).applyQuaternion(t.quaternion), fw2 = _d.set(0, 0, 1).applyQuaternion(t.quaternion); const inv = up.y < 0;
        f.qT = new THREE.Quaternion().setFromAxisAngle(_s.set(0, 1, 0), Math.atan2(fw2.x, fw2.z)); if (inv) f.qT.multiply(_q.setFromAxisAngle(_s.set(0, 0, 1), Math.PI)); f.lift = inv ? sp.turretBox.hy * 2 - 0.1 : -0.28; }
    }
    if (f.qT) { t.quaternion.slerp(f.qT, Math.min(1, dt * 6)); f.w.multiplyScalar(Math.max(0, 1 - 6 * dt)); if (f.restT > 0.8) { f.rest = true; t.quaternion.copy(f.qT); } }
    t.updateMatrixWorld(true);
  }
}

// ---------------------------------------------------------------------------------------------
// Shells in flight and what they do when they arrive
// ---------------------------------------------------------------------------------------------
export class Combat {
  constructor(game) {
    this.game = game; this.shells = []; this.ray = {};
    // the shell itself: a short white-hot bolt you can follow from the muzzle to the target
    this.geo = new THREE.CylinderGeometry(0.035, 0.075, 1.5, 8).rotateX(Math.PI / 2); this.geo.userData.keep = true;
    this.matP = new THREE.MeshBasicMaterial({ color: new THREE.Color(14, 7.5, 2.2), fog: false }); this.matE = new THREE.MeshBasicMaterial({ color: new THREE.Color(14, 11, 3.0), fog: false });
  }
  fire(owner, pos, dir) {
    const tiger = owner.spec.name === 'tiger';
    const mesh = new THREE.Mesh(this.geo, tiger ? this.matE : this.matP); mesh.position.copy(pos); mesh.lookAt(pos.clone().add(dir)); this.game.battle.add(mesh);
    this.shells.push({ owner, p: pos.clone(), v: dir.clone().multiplyScalar(owner.spec.shellSpeed), life: 4.0, tiger, pen: owner.spec.pen, from: pos.clone(), mesh, heard: owner.isPlayer });
  }
  drop(k) { const s = this.shells[k]; if (s.mesh) this.game.battle.remove(s.mesh); this.shells.splice(k, 1); }
  update(dt) {
    const g = this.game, W = g.world, fx = g.fx;
    for (let k = this.shells.length - 1; k >= 0; k--) {
      const s = this.shells[k]; s.life -= dt; s.v.y -= 9.81 * dt;
      const sp = s.v.length(), len = sp * dt, dx = s.v.x / sp, dy = s.v.y / sp, dz = s.v.z / sp;
      const ax = s.p.x, ay = s.p.y, az = s.p.z, bx = ax + s.v.x * dt, by = ay + s.v.y * dt, bz = az + s.v.z * dt;
      let bestT = Infinity, hitTank = null, hitInfo = null;
      for (const t of g.tanks) { if (t === s.owner && !s.spent) continue; if (Math.hypot(t.pos.x - ax, t.pos.z - az) > len + 9) continue; const h = t.hitTest(ax, ay, az, bx, by, bz); if (h && h.t * len < bestT) { bestT = h.t * len; hitTank = t; hitInfo = h; } }
      // trees stop shells too
      const tu = g.forest.hitSegment(ax, ay, az, bx, by, bz);
      if (tu >= 0 && tu * len < bestT && !W.raycast(ax, ay, az, dx, dy, dz, tu * len, 0.2, this.ray)) { const tx = ax + dx * tu * len, ty = ay + dy * tu * len, tz = az + dz * tu * len; g.forest.disturb(tx, tz, 0.6, dx, dz, fx); fx.explosion(tx, ty, tz, 0.7, { dark: 0.3 }); fx.sparks(tx, ty, tz, 12, dx, 0.5, dz, 8); g.audio.play('tree_fall', { x: tx, y: ty, z: tz }, { gain: 1 }) || g.audio.explosion({ x: tx, y: ty, z: tz }, 0.8); this.drop(k); continue; }
      const r = W.raycast(ax, ay, az, dx, dy, dz, Math.min(len, bestT), 0.2, this.ray);
      if (r) { this.land(s, r.x, r.y, r.z, r.ground, dx, dy, dz); this.drop(k); continue; }
      if (hitTank) { const keep = this.strike(s, hitTank, hitInfo, ax + dx * bestT, ay + dy * bestT, az + dz * bestT, dx, dy, dz); if (!keep) this.drop(k); else if (s.mesh) s.mesh.scale.setScalar(0.6); continue; }
      s.p.set(bx, by, bz);
      if (s.mesh) { s.mesh.position.set(bx, by, bz); s.mesh.lookAt(bx + dx, by + dy, bz + dz); }
      // a glowing head, a tracer line that hangs in the air for a moment, and a thread of smoke
      const col = s.tiger ? [9, 7, 2] : [9, 4.4, 1.1], k2 = s.spent ? 0.5 : 1;
      fx.glow.emit({ x: bx, y: by, z: bz, life: 0.07, s0: 1.0 * k2, s1: 0.7, r: col[0] * 1.6, g: col[1] * 1.6, b: col[2] * 1.6, a: 1, kind: 1 });
      // the trail stays where the shell has been and fades, so the whole path can be read even from straight behind
      for (let q = 0; q < 4; q++) { const t = q / 4; fx.glow.emit({ x: ax + (bx - ax) * t, y: ay + (by - ay) * t, z: az + (bz - az) * t, life: 0.55 + R() * 0.2, s0: 0.16 * k2, s1: 0.04, r: col[0] * 0.55, g: col[1] * 0.55, b: col[2] * 0.55, a: 1, kind: 1 }); }
      if (R() < 0.6) fx.smoke.emit({ x: bx, y: by, z: bz, vx: 0, vy: 0.2, vz: 0, life: 0.9 + R() * 0.6, s0: 0.1, s1: 0.5, r: 0.4, g: 0.4, b: 0.42, a: 0.16, drag: 1, grav: -0.2, kind: 0 });
      // an incoming round that passes close makes itself heard
      if (!s.heard && g.player && Math.hypot(bx - g.camera.position.x, by - g.camera.position.y, bz - g.camera.position.z) < 16) { s.heard = true; g.audio.play('shell_flyby', { x: bx, y: by, z: bz }, { gain: 1.1, rate: 0.9 + R() * 0.3 }); }
      if (s.life <= 0 || by < -20) this.drop(k);
    }
  }
  // hit a building or the ground
  land(s, x, y, z, ground, dx, dy, dz) {
    const g = this.game; const k = s.spent ? 0.45 : 1; g.radio?.landed(s, x, y, z, ground);
    if (ground) {
      g.world.explode(x, y + 0.4, z, 1.9 * k, 1.5 * k); g.fx.explosion(x, y + 0.3, z, 0.85 * k, { ground: true, dark: 0.3 });
      g.world.crater(x, z, (1.5 + R() * 0.5) * k, (0.5 + R() * 0.25) * k);
    } else {
      const bx = x + dx * 0.35, by = y + dy * 0.35, bz = z + dz * 0.35;
      g.world.explode(bx, by, bz, (s.tiger ? 2.7 : 2.4) * k, (s.tiger ? 3.0 : 2.6) * k);        // every shell blows a proper hole through the wall g.fx.explosion(x - dx * 0.4, y, z - dz * 0.4, 1.0 * k, { dark: 0.45 });
      g.marks.stamp(2, x, z, R() * 6, 9 * k, 9 * k, 0.7, R() * 30);
      if (!s.spent && R() < 0.3 && g.fx.fires.length < 8) g.fx.addFire(new THREE.Vector3(x + dx * 0.8, Math.max(y - 0.8, g.world.groundH(x, z) + 0.2), z + dz * 0.8), 0.55 + R() * 0.4, 25 + R() * 35);
    }
    g.forest.disturb(x, z, 2.4 * k, 0, 0, g.fx);
    for (const t of g.tanks) if (t.alive && t !== s.owner && Math.hypot(t.pos.x - x, t.pos.y + 1 - y, t.pos.z - z) < 3.0) { t.chip(3); t.shed(x, y, z, 1, 0.7); }
    g.audio.play(ground ? 'explosion_ground' : 'explosion_building', { x, y, z }, { gain: 1.0 * k, rate: 0.9 + R() * 0.2 }) || g.audio.explosion({ x, y, z }, 1.0);
    if (g.player && Math.hypot(g.player.pos.x - x, g.player.pos.z - z) < 14) g.shake(0.35);
  }
  // hit a tank. What happens depends on the plate, its thickness and the angle the shell meets it at.
  strike(s, tank, h, x, y, z, dx, dy, dz) {
    const g = this.game, fx = g.fx, pos = { x, y, z };
    if (!tank.alive || s.spent) { fx.sparks(x, y, z, 14, -dx, 0.5, -dz, 10); g.audio.hit(pos, true, 0.5); return false; }
    const sp = tank.spec, A = sp.armor, tb = h.zone === 'turret', tab = tb ? A.turret : A.hull;
    // shell direction and plate normal in the hit box's own frame (x left, y up, z forward)
    const c = Math.cos(h.yaw), sn = Math.sin(h.yaw); const lx = dx * c - dz * sn, ly = dy, lz = dx * sn + dz * c;
    let plate, nx = 0, ny = 0, nz = 0, name; const lean = (hx, hz, deg, down) => { const a = deg * Math.PI / 180; nx = hx * Math.cos(a); nz = hz * Math.cos(a); ny = (down ? -1 : 1) * Math.sin(a); };
    const sideSign = h.side === 0 ? 1 : -1; let track = false;
    if (h.face === 3) { plate = tab.top; ny = 1; name = 'top'; }
    else if (h.face === 0) { const low = !tb && h.ly < A.lowY; plate = low ? tab.frontLow : tab.front; lean(0, 1, plate[1], low); name = low ? 'lower front' : 'front'; }
    else if (h.face === 1) { plate = tab.rear; lean(0, -1, plate[1]); name = 'rear'; }
    else { const low = !tb && h.ly < A.sideLowY; plate = low ? tab.sideLow : tab.side; lean(sideSign, 0, plate[1]); name = 'side'; track = !tb && h.ly < 0.98; }
    const cosT = -(lx * nx + ly * ny + lz * nz), deg = Math.acos(clamp(cosT, -1, 1)) * 180 / Math.PI;
    const range = Math.hypot(x - s.from.x, z - s.from.z); const pen = s.pen * (0.92 + R() * 0.16) * (1 - Math.min(range, 600) / 2400) * (track ? 0.85 : 1);
    const tell = (msg, secs) => { if (s.owner.isPlayer) g.hud.note(msg, secs || 2.4); };
    // tracks and wheels are not armour: a hit there always wrecks the track
    if (track && deg < 78) { tank.breakTrack(h.side, tank.isPlayer ? 12 : 9999); tank.throwWheels(1); g.audio.play('track_break', pos, { gain: 1.1 }); if (tank.isPlayer) g.hud.note('Track shot away: repairing', 3); g.radio?.strike(s.owner, tank, 'track', { plate: name }); }
    // glancing blow: the shell skids off and flies on
    if (cosT <= 0.03 || deg > 70 || (deg > 58 && R() < (deg - 58) / 12)) {
      fx.sparks(x, y, z, 30, -dx * 0.4 + nx, 0.8, -dz * 0.4 + nz, 17); fx.flash(x, y, z, [1, 0.8, 0.5], 320, 0.12); g.audio.hit(pos, true);
      const d = -cosT * 2; let rx = lx + d * nx * -1, ry = ly + d * ny * -1, rz = lz + d * nz * -1;           // reflect about the plate
      rx = lx + 2 * cosT * nx; ry = ly + 2 * cosT * ny; rz = lz + 2 * cosT * nz;
      const wx = rx * c + rz * sn, wz = -rx * sn + rz * c; const v = s.v.length() * 0.45;
      s.p.set(x + wx * 0.3, y + ry * 0.3 + 0.05, z + wz * 0.3); s.v.set(wx * v + (R() - 0.5) * 8, Math.abs(ry) * v + 4 + R() * 8, wz * v + (R() - 0.5) * 8); s.spent = true; s.life = 2.5;
      tank.chip(tank.isPlayer ? 1 : 7); tell(track ? 'Track hit · shell glanced off the hull' : `Ricochet off the ${name} · ${Math.round(deg)}° angle`);
      if (tank.isPlayer) g.hud.note('Glancing hit', 1.6); g.radio?.strike(s.owner, tank, 'ricochet', { plate: tb ? 'turret' : name });
      return true;                                                         // the shell lives on as a spent round
    }
    const eff = plate[0] / Math.max(cosT, 0.05);
    if (pen < eff) {
      // armour holds: the shell shatters on the plate
      fx.sparks(x, y, z, 34, -dx, 0.7, -dz, 14); fx.explosion(x, y, z, 0.45, { dark: 0.2 }); g.audio.hit(pos, true, 0.9);
      tank.shed(x, y, z, 1 + (R() < 0.5 ? 1 : 0), 0.8); tank.wasHit = 1;
      // even a hit that does not get through shakes the tank apart: three or four of them finish it
      if (tank.isPlayer) tank.chip(2 + R() * 3); else tank.damage(24 + R() * 12, { from: s.owner });
      tell(!tank.alive ? `Knocked out · ${name} plate gave way` : track ? 'Track shot away · hull not penetrated' : `Armour held (${name}, too steep an angle) · Tiger damaged`, 3);
      if (tank.isPlayer) g.hud.note('Hit · armour held', 1.8); g.radio?.strike(s.owner, tank, 'held', { plate: tb ? 'turret' : name });
      return false;
    }
    // through the armour
    fx.explosion(x, y, z, 0.8, { dark: 0.7 }); fx.sparks(x, y, z, 36, -dx, 0.6, -dz, 16); g.audio.hit(pos, false);
    tank.shed(x, y, z, 3 + Math.floor(R() * 3), 1.1, { smoke: true }); tank.scrap(3, 0.6, false);
    let pKill = tb ? 0.62 : (h.face === 1 ? 0.85 : h.face === 2 ? 0.75 : 0.6); if (tank.isPlayer) pKill = tank.hp > 45 ? 0 : 1; else pKill = Math.min(0.97, pKill + 0.22);       // the player's tank survives its first penetration, crippled; the next one finishes it if (tank.hp <= 45) pKill = 1;
    if (R() < pKill) { tell(`Penetrated the ${name}`); tank.destroy('shot', { from: s.owner }); }
    else { const what = tb ? 'turret' : ((h.face === 1 || (h.face === 2 && R() < 0.6)) ? 'engine' : (R() < 0.5 ? 'turret' : 'engine')); tank.cripple(what); tell(`Penetrated the ${name} · ${what === 'engine' ? 'engine burning' : 'turret jammed'}`, 3); }
    g.radio?.strike(s.owner, tank, 'pen', { plate: tb ? 'turret' : name });
    return false;
  }
}
