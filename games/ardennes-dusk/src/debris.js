import * as THREE from 'three';
import { MATP, MAT } from './structure.js';

const FREE = 0, ACTIVE = 1, SLEEP = 2, MEMBER = 3;
const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _m = new THREE.Matrix4(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _v = new THREE.Vector3(), _w = new THREE.Vector3();

// Every loose piece of masonry, timber and slate. Pieces fall, bounce, come to rest and build up rubble.
// Groups that let go together fall as one body and crumble where they touch something.
export class Debris {
  constructor(world, material, cap = 7000) {
    this.world = world; this.cap = cap; this.hi = 0; this.activeCount = 0;
    const f = (n) => new Float32Array(cap * n);
    this.p = f(3); this.v = f(3); this.q = f(4); this.w = f(3); this.half = f(3); this.mass = f(1); this.sleepT = f(1); this.age = f(1);
    this.state = new Uint8Array(cap); this.rest = new Int32Array(cap).fill(-1); this.col = f(3); this.onGround = new Uint8Array(cap);
    this.freeList = []; for (let i = cap - 1; i >= 0; i--) this.freeList.push(i);
    this.recycle = 0; this.clusters = [];
    // a block with its corners knocked about, so loose pieces read as broken masonry rather than neat boxes
    // Each face is cut into four, then corners are knocked off, edges bitten into and faces left uneven, so a
    // piece has the broken outline of real rubble. Chipped-off corners show the raw inside of the wall.
    const geo = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2).toNonIndexed(); geo.deleteAttribute('uv'); geo.deleteAttribute('normal');
    { const pa = geo.attributes.position; const off = {}; let seed = 11; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      for (let i = 0; i < pa.count; i++) {
        const c = [pa.getX(i), pa.getY(i), pa.getZ(i)].map((v) => Math.round(v * 2) / 2), k = c.join(',');
        if (!off[k]) { const onFace = c.filter((v) => v !== 0).length, deep = onFace === 3 ? (rnd() < 0.45 ? 0.46 : 0.20) : (onFace === 2 ? (rnd() < 0.3 ? 0.26 : 0.10) : 0.07);
          off[k] = c.map((v) => v !== 0 ? -v * 2 * rnd() * deep + (onFace === 1 ? (rnd() - 0.35) * 0.10 * Math.sign(v) : 0) : (rnd() - 0.5) * 0.22); }
        pa.setXYZ(i, c[0] + off[k][0], c[1] + off[k][1], c[2] + off[k][2]);
      }
      geo.computeVertexNormals(); }
    this.aRest = new THREE.InstancedBufferAttribute(f(3), 3); this.aDInfo = new THREE.InstancedBufferAttribute(f(4), 4);
    this.aDTint = new THREE.InstancedBufferAttribute(f(3), 3); this.aDHalf = new THREE.InstancedBufferAttribute(f(3), 3);
    geo.setAttribute('aRest', this.aRest); geo.setAttribute('aDInfo', this.aDInfo); geo.setAttribute('aDTint', this.aDTint); geo.setAttribute('aDHalf', this.aDHalf);
    this.mesh = new THREE.InstancedMesh(geo, material, cap);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.mesh.count = 0; this.mesh.frustumCulled = false;
    this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    this._attrDirty = false;
  }

  _alloc() {
    if (this.freeList.length) return this.freeList.pop();
    // pool is full: reuse the piece that has been lying still the longest
    for (let k = 0; k < this.cap; k++) { const i = (this.recycle + k) % this.cap; if (this.state[i] === SLEEP) { this.recycle = (i + 1) % this.cap; return i; } }
    for (let k = 0; k < this.cap; k++) { const i = (this.recycle + k) % this.cap; if (this.state[i] === ACTIVE) { this.recycle = (i + 1) % this.cap; this.activeCount--; return i; } }
    return -1;
  }
  // d: { x,y,z, hx,hy,hz, yaw, vx,vy,vz, wx,wy,wz, rest:[x,y,z], mat, out (signed axis+1, 0 none), inside, tint, extra }
  spawn(d, state = ACTIVE) {
    const i = this._alloc(); if (i < 0) return -1;
    const i3 = i * 3, i4 = i * 4;
    this.p[i3] = d.x; this.p[i3 + 1] = d.y; this.p[i3 + 2] = d.z;
    this.v[i3] = d.vx || 0; this.v[i3 + 1] = d.vy || 0; this.v[i3 + 2] = d.vz || 0;
    this.w[i3] = d.wx || 0; this.w[i3 + 1] = d.wy || 0; this.w[i3 + 2] = d.wz || 0;
    if (d.q) { this.q[i4] = d.q[0]; this.q[i4 + 1] = d.q[1]; this.q[i4 + 2] = d.q[2]; this.q[i4 + 3] = d.q[3]; } else { const hy = (d.yaw || 0) / 2; this.q[i4] = 0; this.q[i4 + 1] = Math.sin(hy); this.q[i4 + 2] = 0; this.q[i4 + 3] = Math.cos(hy); }
    this.half[i3] = d.hx; this.half[i3 + 1] = d.hy; this.half[i3 + 2] = d.hz;
    this.mass[i] = d.hx * d.hy * d.hz * 8 * MATP[d.mat].dens; this.sleepT[i] = 0; this.age[i] = 0; this.rest[i] = -1; this.onGround[i] = 0;
    const c = MATP[d.mat].col; this.col[i3] = c[0] * d.tint[0]; this.col[i3 + 1] = c[1] * d.tint[1]; this.col[i3 + 2] = c[2] * d.tint[2];
    if (d.mat === MAT.STUCCO || d.mat === MAT.BRICK || d.mat === MAT.SLATE || d.mat === MAT.TIMBER || d.mat === MAT.STONE) { this.col[i3] = c[0]; this.col[i3 + 1] = c[1]; this.col[i3 + 2] = c[2]; }
    this.aRest.array[i3] = d.rest[0]; this.aRest.array[i3 + 1] = d.rest[1]; this.aRest.array[i3 + 2] = d.rest[2];
    this.aDInfo.array[i4] = d.mat; this.aDInfo.array[i4 + 1] = d.out || 0; this.aDInfo.array[i4 + 2] = d.inside === undefined ? d.mat : d.inside; this.aDInfo.array[i4 + 3] = d.extra || 0;
    this.aDTint.array[i3] = d.tint[0]; this.aDTint.array[i3 + 1] = d.tint[1]; this.aDTint.array[i3 + 2] = d.tint[2];
    this.aDHalf.array[i3] = d.hx; this.aDHalf.array[i3 + 1] = d.hy; this.aDHalf.array[i3 + 2] = d.hz;
    this._attrDirty = true;
    if (this.state[i] === FREE || true) { this.state[i] = state; if (state === ACTIVE) this.activeCount++; }
    if (i >= this.hi) this.hi = i + 1;
    return i;
  }
  // break one loose piece into two or three smaller ones that keep its texture and motion
  split(i, kick = 1.5, depth = 0) {
    const i3 = i * 3, i4 = i * 4, h = [this.half[i3], this.half[i3 + 1], this.half[i3 + 2]];
    let ax = h[0] >= h[1] && h[0] >= h[2] ? 0 : (h[1] >= h[2] ? 1 : 2); const matI = Math.round(this.aDInfo.array[i4]);
    // timber does not break into blocks: it splits along the grain into planks and long splinters
    if (matI === MAT.TIMBER) { const o = [0, 1, 2].sort((a, b) => h[b] - h[a]); ax = o[1]; if (h[ax] < 0.06) return; } else if (h[ax] < 0.15) return;
    const cut = 0.36 + Math.random() * 0.28; const q = [this.q[i4], this.q[i4 + 1], this.q[i4 + 2], this.q[i4 + 3]];
    const qq = _q.set(q[0], q[1], q[2], q[3]); const info = [this.aDInfo.array[i4], this.aDInfo.array[i4 + 1], this.aDInfo.array[i4 + 2], this.aDInfo.array[i4 + 3]];
    const tint = [this.aDTint.array[i3], this.aDTint.array[i3 + 1], this.aDTint.array[i3 + 2]], rest = [this.aRest.array[i3], this.aRest.array[i3 + 1], this.aRest.array[i3 + 2]];
    const base = { x: this.p[i3], y: this.p[i3 + 1], z: this.p[i3 + 2], vx: this.v[i3], vy: this.v[i3 + 1], vz: this.v[i3 + 2], wx: this.w[i3], wy: this.w[i3 + 1], wz: this.w[i3 + 2] };
    const age = this.age[i]; this.free(i);
    for (let part = 0; part < 2; part++) {
      const len = part === 0 ? h[ax] * 2 * cut : h[ax] * 2 * (1 - cut), c = part === 0 ? -h[ax] + len / 2 : h[ax] - len / 2;
      const hh = [h[0] * 0.92, h[1] * 0.92, h[2] * 0.92]; hh[ax] = len / 2 * 0.92; const lo = [0, 0, 0]; lo[ax] = c;
      _p.set(lo[0], lo[1], lo[2]).applyQuaternion(qq); const r2 = rest.slice(); r2[ax] += c;
      const k = this.spawn({ x: base.x + _p.x, y: base.y + _p.y, z: base.z + _p.z, hx: hh[0], hy: hh[1], hz: hh[2], q, vx: base.vx + (Math.random() - 0.5) * kick, vy: base.vy + Math.random() * kick * 0.5, vz: base.vz + (Math.random() - 0.5) * kick,
        wx: base.wx + (Math.random() - 0.5) * 5, wy: base.wy + (Math.random() - 0.5) * 4, wz: base.wz + (Math.random() - 0.5) * 5, rest: r2, mat: info[0], out: info[1], inside: info[2], tint, extra: info[3] });
      if (k >= 0) { this.age[k] = age; if (depth < 2 && hh[ax] > 0.27 && Math.random() < 0.62) this.split(k, kick, depth + 1); }
    }
    // and a few chips fly off the break
    // and small stuff flies off the break: single bricks, splinters, shards of slate, lumps of stone and plaster
    if (depth === 0 && this.activeCount < 1000) for (let n = 0, N = matI === MAT.BRICK ? 4 : 3; n < N; n++) { const s = 0.04 + Math.random() * 0.07, R = Math.random;
      const dm = matI === MAT.BRICK ? [0.105, 0.034, 0.05] : matI === MAT.TIMBER ? [0.16 + R() * 0.3, 0.012 + R() * 0.02, 0.025 + R() * 0.04] : matI === MAT.SLATE ? [0.07 + R() * 0.06, 0.008, 0.05 + R() * 0.05] : [s, s * (0.5 + R() * 0.6), s * (0.6 + R() * 0.8)];
      const cq = [R() - 0.5, R() - 0.5, R() - 0.5, R() - 0.5], cl = Math.hypot(...cq) || 1;
      this.spawn({ x: base.x + (R() - 0.5) * h[0], y: base.y + 0.05, z: base.z + (R() - 0.5) * h[2], hx: dm[0], hy: dm[1], hz: dm[2], q: cq.map((v) => v / cl), vx: base.vx + (Math.random() - 0.5) * kick * 2.4, vy: Math.abs(base.vy) * 0.3 + 1 + Math.random() * kick * 1.6, vz: base.vz + (Math.random() - 0.5) * kick * 2.4,
        wx: (Math.random() - 0.5) * 20, wy: (Math.random() - 0.5) * 20, wz: (Math.random() - 0.5) * 20, rest: [rest[0] + n * 0.3, rest[1], rest[2]], mat: info[0], out: 0, inside: info[2], tint, extra: 0 }); }
  }
  free(i) { if (this.state[i] === ACTIVE) this.activeCount--; this.state[i] = FREE; this.freeList.push(i); _m.makeScale(0, 0, 0); this.mesh.setMatrixAt(i, _m); }

  // a group of pieces that falls as one body
  spawnCluster(members, hinge, impulse) {
    let M = 0, cx = 0, cy = 0, cz = 0;
    for (const i of members) { const m = this.mass[i]; M += m; cx += this.p[i * 3] * m; cy += this.p[i * 3 + 1] * m; cz += this.p[i * 3 + 2] * m; }
    cx /= M; cy /= M; cz /= M;
    const off = new Float32Array(members.length * 3), q0 = new Float32Array(members.length * 4);
    members.forEach((i, k) => { off[k * 3] = this.p[i * 3] - cx; off[k * 3 + 1] = this.p[i * 3 + 1] - cy; off[k * 3 + 2] = this.p[i * 3 + 2] - cz; for (let a = 0; a < 4; a++) q0[k * 4 + a] = this.q[i * 4 + a]; this.state[i] = MEMBER; });
    const cl = { members: members.slice(), off, q0, n: members.length, n0: members.length, com: new THREE.Vector3(cx, cy, cz), vel: new THREE.Vector3(), quat: new THREE.Quaternion(), ang: new THREE.Vector3(), age: 0 };
    if (impulse) cl.vel.copy(impulse);
    // tip over the edge it was standing on: the top moves away from what is still holding
    if (hinge) {
      const dx = cx - hinge.x, dz = cz - hinge.z, dl = Math.hypot(dx, dz);
      if (dl > 0.25) { const rate = Math.min(1.5, 0.55 + 0.35 * dl) * (cy > hinge.y - 0.5 ? 1 : 0.4); cl.ang.set(dz / dl * rate, 0, -dx / dl * rate); cl.vel.x += dx / dl * 0.6; cl.vel.z += dz / dl * 0.6; }
    }
    cl.ang.x += (Math.random() - 0.5) * 0.25; cl.ang.z += (Math.random() - 0.5) * 0.25; cl.ang.y += (Math.random() - 0.5) * 0.15;
    this.clusters.push(cl); return cl;
  }

  wakeResting(structId, removedSet) {
    for (let i = 0; i < this.hi; i++) if (this.state[i] === SLEEP && this.rest[i] >= 0 && (this.rest[i] >> 16) === structId && removedSet.has(this.rest[i] & 0xffff)) { this.state[i] = ACTIVE; this.activeCount++; this.rest[i] = -1; this.sleepT[i] = 0; }
  }
  // push and wake pieces near a blast
  blast(x, y, z, radius, power) {
    const r2 = radius * radius;
    for (let i = 0; i < this.hi; i++) {
      const st = this.state[i]; if (st !== ACTIVE && st !== SLEEP) continue;
      const dx = this.p[i * 3] - x, dy = this.p[i * 3 + 1] - y + 0.4, dz = this.p[i * 3 + 2] - z, d2 = dx * dx + dy * dy + dz * dz; if (d2 > r2) continue;
      const d = Math.sqrt(d2) + 0.2, k = power * (1 - d / (radius + 0.2)) / (d * Math.max(0.3, Math.sqrt(this.mass[i]) * 1.6));
      if (k < 0.6 && st === SLEEP) continue;
      this.v[i * 3] += dx * k; this.v[i * 3 + 1] += dy * k + k * 0.6; this.v[i * 3 + 2] += dz * k;
      this.w[i * 3] += (Math.random() - 0.5) * k * 2; this.w[i * 3 + 2] += (Math.random() - 0.5) * k * 2;
      if (st === SLEEP) { this.state[i] = ACTIVE; this.activeCount++; this.rest[i] = -1; this.sleepT[i] = 0; }
    }
  }
  // something heavy drives through: shove pieces aside
  shove(x, z, radius, vx, vz, topY) {
    const r2 = radius * radius;
    for (let i = 0; i < this.hi; i++) {
      const st = this.state[i]; if (st !== ACTIVE && st !== SLEEP) continue;
      const dx = this.p[i * 3] - x, dz = this.p[i * 3 + 2] - z; if (dx * dx + dz * dz > r2 || this.p[i * 3 + 1] > topY) continue;
      const sp = Math.hypot(vx, vz); if (sp < 0.3) continue;
      if (st === SLEEP) { this.state[i] = ACTIVE; this.activeCount++; this.rest[i] = -1; this.sleepT[i] = 0; }
      this.v[i * 3] = vx * 0.7 + dx * 0.8; this.v[i * 3 + 2] = vz * 0.7 + dz * 0.8; this.v[i * 3 + 1] = Math.max(this.v[i * 3 + 1], 0.6);
      this.w[i * 3] += (Math.random() - 0.5) * 3; this.w[i * 3 + 2] += (Math.random() - 0.5) * 3;
    }
  }

  update(dt) {
    const W = this.world, p = this.p, v = this.v, q = this.q, w = this.w, half = this.half;
    // ---- groups falling together ----
    for (let c = this.clusters.length - 1; c >= 0; c--) {
      const cl = this.clusters[c]; cl.age += dt;
      cl.vel.y -= 9.81 * dt; cl.com.addScaledVector(cl.vel, dt);
      const al = cl.ang.length(); if (al > 1e-4) { _q.setFromAxisAngle(_v.copy(cl.ang).multiplyScalar(1 / al), al * dt); cl.quat.premultiply(_q).normalize(); }
      let hits = 0;
      for (let k = 0; k < cl.members.length; k++) {
        const i = cl.members[k]; if (i < 0) continue;
        _p.set(cl.off[k * 3], cl.off[k * 3 + 1], cl.off[k * 3 + 2]).applyQuaternion(cl.quat);
        const rx = _p.x, ry = _p.y, rz = _p.z; const x = cl.com.x + rx, y = cl.com.y + ry, z = cl.com.z + rz;
        p[i * 3] = x; p[i * 3 + 1] = y; p[i * 3 + 2] = z;
        _q2.set(cl.q0[k * 4], cl.q0[k * 4 + 1], cl.q0[k * 4 + 2], cl.q0[k * 4 + 3]).premultiply(cl.quat);
        q[i * 4] = _q2.x; q[i * 4 + 1] = _q2.y; q[i * 4 + 2] = _q2.z; q[i * 4 + 3] = _q2.w;
        const ext = Math.min(half[i * 3], half[i * 3 + 1], half[i * 3 + 2]) + 0.1;
        let hit = y - ext < W.groundH(x, z), hs = null, hp = -1;
        if (!hit && cl.age > 0.12) { const r = W.solidAt(x, y, z); if (r) { hit = true; hs = r.s; hp = r.i; } }
        if (!hit) continue;
        // this piece has touched down: it leaves the group and takes some of its momentum with it
        hits++; cl.members[k] = -1; cl.n--;
        const pvx = cl.vel.x + cl.ang.y * rz - cl.ang.z * ry, pvy = cl.vel.y + cl.ang.z * rx - cl.ang.x * rz, pvz = cl.vel.z + cl.ang.x * ry - cl.ang.y * rx;
        const sp = Math.hypot(pvx, pvy, pvz);
        if (hs) W.impact(hs, hp, sp * 0.016 * Math.sqrt(cl.n0), x, y, z);
        this.state[i] = ACTIVE; this.activeCount++; this.sleepT[i] = 0;
        v[i * 3] = pvx * 0.55 + (Math.random() - 0.5) * 1.2; v[i * 3 + 1] = pvy * 0.35; v[i * 3 + 2] = pvz * 0.55 + (Math.random() - 0.5) * 1.2;
        w[i * 3] = cl.ang.x + (Math.random() - 0.5) * 3; w[i * 3 + 1] = (Math.random() - 0.5) * 2; w[i * 3 + 2] = cl.ang.z + (Math.random() - 0.5) * 3;
        if (sp > 3.5 && this.mass[i] > 0.12 && this.activeCount < 1500) { W.puff(x, y, z, i); this.split(i, 1.6); }
      }
      if (hits) {
        const f = Math.max(0.0, 1 - 1.4 * hits / (cl.n + hits));
        cl.vel.multiplyScalar(0.55 + 0.45 * f); cl.ang.multiplyScalar(0.7 + 0.3 * f);
        W.onRubbleHit(cl.com.x, cl.com.y, cl.com.z, hits, cl.vel.length());
      }
      if (cl.n <= 1 || cl.age > 9) {
        for (let k = 0; k < cl.members.length; k++) { const i = cl.members[k]; if (i < 0) continue; this.state[i] = ACTIVE; this.activeCount++; v[i * 3] = cl.vel.x; v[i * 3 + 1] = cl.vel.y; v[i * 3 + 2] = cl.vel.z; w[i * 3] = cl.ang.x; w[i * 3 + 1] = cl.ang.y; w[i * 3 + 2] = cl.ang.z; }
        this.clusters.splice(c, 1);
      }
    }
    // ---- single pieces ----
    const fr = Math.max(0, 1 - 7 * dt), ad = Math.max(0, 1 - 4.5 * dt);
    for (let i = 0; i < this.hi; i++) {
      if (this.state[i] !== ACTIVE) continue;
      const i3 = i * 3, i4 = i * 4; this.age[i] += dt;
      v[i3 + 1] -= 9.81 * dt;
      const ox = p[i3], oy = p[i3 + 1], oz = p[i3 + 2];
      p[i3] += v[i3] * dt; p[i3 + 1] += v[i3 + 1] * dt; p[i3 + 2] += v[i3 + 2] * dt;
      // spin
      const wx = w[i3], wy = w[i3 + 1], wz = w[i3 + 2];
      let qx = q[i4], qy = q[i4 + 1], qz = q[i4 + 2], qw = q[i4 + 3];
      const hx = 0.5 * dt;
      const nx = qx + hx * (wx * qw + wy * qz - wz * qy), ny = qy + hx * (wy * qw + wz * qx - wx * qz), nz = qz + hx * (wz * qw + wx * qy - wy * qx), nw = qw - hx * (wx * qx + wy * qy + wz * qz);
      const il = 1 / Math.hypot(nx, ny, nz, nw); qx = nx * il; qy = ny * il; qz = nz * il; qw = nw * il;
      // how far the box reaches downward in its current orientation
      const r0 = 2 * (qx * qy + qw * qz), r1 = 1 - 2 * (qx * qx + qz * qz), r2 = 2 * (qy * qz - qw * qx);
      const ext = Math.abs(r0) * half[i3] + Math.abs(r1) * half[i3 + 1] + Math.abs(r2) * half[i3 + 2];
      let grounded = false, onStruct = -1;
      const H = W.groundH(p[i3], p[i3 + 2]);
      if (p[i3 + 1] - ext < H) {
        p[i3 + 1] = H + ext; grounded = true;
        if (v[i3 + 1] < 0) { const hitV = -v[i3 + 1]; v[i3 + 1] = hitV > 1.6 ? hitV * 0.2 : 0; if (hitV > 5 && !this.onGround[i]) { W.onDebrisLand(p[i3], H, p[i3 + 2], hitV, this.mass[i], i); if (hitV > 5.2 && this.mass[i] > 0.12 && this.activeCount < 1500) { this.onGround[i] = 1; this.split(i, 1.2); continue; } } }
        v[i3] *= fr; v[i3 + 2] *= fr;
        this.onGround[i] = 1;
      } else if (this.age[i] > 0.1) {
        const r = W.solidAt(p[i3], p[i3 + 1] - Math.min(ext, 0.3), p[i3 + 2]);
        if (r) {
          // landed on, or ran into, something still standing
          const sp = Math.hypot(v[i3], v[i3 + 1], v[i3 + 2]);
          if (sp > 7 && this.mass[i] > 0.25) W.impact(r.s, r.i, sp * 0.012 * Math.sqrt(this.mass[i]), p[i3], p[i3 + 1], p[i3 + 2]);
          p[i3] = ox; p[i3 + 1] = oy; p[i3 + 2] = oz;
          if (v[i3 + 1] < -0.5 && Math.abs(v[i3 + 1]) > Math.hypot(v[i3], v[i3 + 2])) { v[i3 + 1] *= -0.15; v[i3] = v[i3] * 0.6 + (Math.random() - 0.5) * 1.5; v[i3 + 2] = v[i3 + 2] * 0.6 + (Math.random() - 0.5) * 1.5; grounded = true; onStruct = (r.s.id << 16) | r.i; }
          else { v[i3] *= -0.25; v[i3 + 2] *= -0.25; v[i3 + 1] *= 0.5; }
        }
      }
      let ax = wx, ay = wy, az = wz;
      if (grounded) {
        ax *= ad; ay *= ad; az *= ad;
        // settle onto the nearest flat face
        const a0 = Math.abs(r0), a1 = Math.abs(r1), a2 = Math.abs(r2);
        let ux, uy, uz;                                   // world direction of the local axis closest to vertical
        if (a0 >= a1 && a0 >= a2) { const s = Math.sign(r0); ux = (1 - 2 * (qy * qy + qz * qz)) * s; uy = r0 * s; uz = 2 * (qx * qz - qw * qy) * s; }
        else if (a1 >= a2) { const s = Math.sign(r1); ux = 2 * (qx * qy - qw * qz) * s; uy = r1 * s; uz = 2 * (qy * qz + qw * qx) * s; }
        else { const s = Math.sign(r2); ux = 2 * (qx * qz + qw * qy) * s; uy = r2 * s; uz = (1 - 2 * (qx * qx + qy * qy)) * s; }
        // on bare ground a piece rocks over onto a flat face; on a heap it stays however it came to rest, corners up
        const k = (onStruct >= 0 || W.rubble.heightAt(p[i3], p[i3 + 2]) < 0.14) ? 14 * dt : 0; ax -= uz * k; az += ux * k;
        const sp2 = v[i3] * v[i3] + v[i3 + 1] * v[i3 + 1] + v[i3 + 2] * v[i3 + 2], wl2 = ax * ax + ay * ay + az * az;
        if (sp2 < 0.25 && wl2 < 1.2) this.sleepT[i] += dt; else this.sleepT[i] = 0;
        if (this.sleepT[i] > 0.3 || this.age[i] > 14) {
          this.state[i] = SLEEP; this.activeCount--; v[i3] = v[i3 + 1] = v[i3 + 2] = 0; ax = ay = az = 0; this.rest[i] = onStruct;
          if (onStruct < 0) { const vol = half[i3] * half[i3 + 1] * half[i3 + 2] * 8; W.rubble.add(p[i3], p[i3 + 2], vol * 0.9, Math.max(half[i3], half[i3 + 2]) * 1.5 + 0.35, [this.col[i3], this.col[i3 + 1], this.col[i3 + 2]]); }
        }
      } else this.onGround[i] = 0;
      w[i3] = ax; w[i3 + 1] = ay; w[i3 + 2] = az;
      q[i4] = qx; q[i4 + 1] = qy; q[i4 + 2] = qz; q[i4 + 3] = qw;
      if (p[i3 + 1] < -30) this.free(i);
    }
  }

  // write transforms for everything that moved
  flush() {
    const p = this.p, q = this.q, half = this.half, arr = this.mesh.instanceMatrix.array;
    for (let i = 0; i < this.hi; i++) {
      const st = this.state[i]; if (st !== ACTIVE && st !== MEMBER && !(st === SLEEP && this.sleepT[i] >= 0)) continue;
      const i3 = i * 3, i4 = i * 4, o = i * 16;
      const x = q[i4], y = q[i4 + 1], z = q[i4 + 2], w = q[i4 + 3], sx = half[i3] * 2, sy = half[i3 + 1] * 2, sz = half[i3 + 2] * 2;
      const xx = x * x, yy = y * y, zz = z * z, xy = x * y, xz = x * z, yz = y * z, wx = w * x, wy = w * y, wz = w * z;
      arr[o] = (1 - 2 * (yy + zz)) * sx; arr[o + 1] = 2 * (xy + wz) * sx; arr[o + 2] = 2 * (xz - wy) * sx; arr[o + 3] = 0;
      arr[o + 4] = 2 * (xy - wz) * sy; arr[o + 5] = (1 - 2 * (xx + zz)) * sy; arr[o + 6] = 2 * (yz + wx) * sy; arr[o + 7] = 0;
      arr[o + 8] = 2 * (xz + wy) * sz; arr[o + 9] = 2 * (yz - wx) * sz; arr[o + 10] = (1 - 2 * (xx + yy)) * sz; arr[o + 11] = 0;
      arr[o + 12] = p[i3]; arr[o + 13] = p[i3 + 1]; arr[o + 14] = p[i3 + 2]; arr[o + 15] = 1;
      if (st === SLEEP) this.sleepT[i] = -1;                 // written once after coming to rest
    }
    this.mesh.count = this.hi; this.mesh.instanceMatrix.needsUpdate = true;
    if (this._attrDirty) { this.aRest.needsUpdate = true; this.aDInfo.needsUpdate = true; this.aDTint.needsUpdate = true; this.aDHalf.needsUpdate = true; this._attrDirty = false; }
  }
}
export const DSTATE = { FREE, ACTIVE, SLEEP, MEMBER };
