import * as THREE from 'three';
import { NOISE, SKY, HAZE_FRAG } from './glsl.js';
import { SEGMENTS, SQUARE, BRIDGES, FORD, HILL, SIDEWALK } from './roads.js';

// ---------------------------------------------------------------------------------------------
// Layout (metres). x runs east, z runs south, the river flows along x.
// ---------------------------------------------------------------------------------------------
export const CFG = {
  RIVER_Z: -34, RIVER_HALF: 8.2, WATER_Y: -3.3, BED_Y: -4.9,
  BOUNDS: { x0: -148, x1: 148, z0: -150, z1: 162 },
  BRIDGE: { z0: -47.5, z1: -20.5, width: 6.0 },
  MARKS: { x0: -160, z0: -160, size: 330 },         // area covered by the track / scorch map
  RUBBLE: { x0: -146, z0: -72, nx: 488, nz: 394, cell: 0.6 },
  FOG_DENSITY: 0.0062,
};

const f = (n) => Number(n).toFixed(3);
const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function h2(ix, iz) { let n = Math.imul(ix, 374761393) ^ Math.imul(iz, 668265263); n = Math.imul(n ^ (n >>> 13), 1274126177); return ((n ^ (n >>> 16)) >>> 0) / 4294967296; }
function vn(x, z) { const ix = Math.floor(x), iz = Math.floor(z), fx = x - ix, fz = z - iz; const ux = fx * fx * (3 - 2 * fx), uz = fz * fz * (3 - 2 * fz);
  return (h2(ix, iz) * (1 - ux) + h2(ix + 1, iz) * ux) * (1 - uz) + (h2(ix, iz + 1) * (1 - ux) + h2(ix + 1, iz + 1) * ux) * uz; }
function fbmJS(x, z) { let a = 0.5, s = 0; for (let i = 0; i < 4; i++) { s += a * vn(x, z); x = x * 2.03 + 11.7; z = z * 2.03 + 5.3; a *= 0.5; } return s; }

// how much of a ford there is at this x: 1 in the middle of the crossing, 0 away from it
export function fordAt(x) { return 1 - ss(FORD.half * 0.55, FORD.half, Math.abs(x - FORD.x)); }
// Bare ground height, before craters or rubble.
export function terrainH(x, z) {
  const d = Math.abs(z - CFG.RIVER_Z); const fd = fordAt(x);
  // normal banks drop steeply to the bed; at the ford they are cut down into long ramps and the bed is shallow
  const bank = ss(CFG.RIVER_HALF - fd * 2.5, CFG.RIVER_HALF + 4.5 + fd * 9, d);
  let h = (CFG.BED_Y + fd * 1.15) * (1 - bank);
  const tx = 1 - ss(138, 158, Math.abs(x)), tz = ss(-24, -18, z) * (1 - ss(150, 172, z));
  const town = tx * tz;
  const hill = ss(-62, -160, z); const und = (fbmJS(x * 0.022, z * 0.022) - 0.5) * 6.0 + hill * hill * 13.0 + ss(150, 200, Math.abs(x)) * 4.0 + ss(160, 210, z) * 5.0;
  let road = 0; if (z < -44) for (const s of SEGMENTS) { if (!s[5]) continue; const dx = s[2] - s[0], dz = s[3] - s[1], l2 = dx * dx + dz * dz; let t = ((x - s[0]) * dx + (z - s[1]) * dz) / l2; t = Math.max(0, Math.min(1, t)); const e = Math.hypot(x - s[0] - dx * t, z - s[1] - dz * t); road = Math.max(road, 1 - ss(3.5, 11, e)); }
  const nearRiver = ss(13, 34, d);
  h += bank * (1 - town) * nearRiver * (und * (1 - road * 0.75) + road * hill * hill * 3.0);
  // the hill in the town's south-east corner: flat on top, with a lumpy shoulder
  { const dh = Math.hypot(x - HILL.x, z - HILL.z); if (dh < HILL.r) { const k = ss(HILL.r, HILL.r * 0.22, dh); h += HILL.h * k + (fbmJS(x * 0.09, z * 0.09) - 0.5) * 1.6 * k * (1 - k) * 4; } }
  return h;
}

// ---------------------------------------------------------------------------------------------
// Rubble: a height layer that grows where debris comes to rest. Tanks drive over it.
// ---------------------------------------------------------------------------------------------
export class RubbleField {
  constructor() {
    const R = CFG.RUBBLE; this.R = R;
    this.h = new Float32Array(R.nx * R.nz);
    this.col = new Float32Array(R.nx * R.nz * 3);
    this.dig = new Float32Array(R.nx * R.nz);          // how far the ground itself has been blown out (negative) or heaped up
    this.dirty = null; this.dirtyG = null;
  }
  idx(x, z) { const R = this.R; const i = Math.floor((x - R.x0) / R.cell), k = Math.floor((z - R.z0) / R.cell); return (i < 0 || k < 0 || i >= R.nx || k >= R.nz) ? -1 : k * R.nx + i; }
  heightAt(x, z) {
    const R = this.R; const fx = (x - R.x0) / R.cell - 0.5, fz = (z - R.z0) / R.cell - 0.5;
    const i = Math.floor(fx), k = Math.floor(fz); if (i < 0 || k < 0 || i >= R.nx - 1 || k >= R.nz - 1) return 0;
    const u = fx - i, v = fz - k, o = k * R.nx + i, h = this.h;
    return (h[o] * (1 - u) + h[o + 1] * u) * (1 - v) + (h[o + R.nx] * (1 - u) + h[o + R.nx + 1] * u) * v;
  }
  digAt(x, z) {
    const R = this.R; const fx = (x - R.x0) / R.cell - 0.5, fz = (z - R.z0) / R.cell - 0.5;
    const i = Math.floor(fx), k = Math.floor(fz); if (i < 0 || k < 0 || i >= R.nx - 1 || k >= R.nz - 1) return 0;
    const u = fx - i, v = fz - k, o = k * R.nx + i, h = this.dig;
    return (h[o] * (1 - u) + h[o + 1] * u) * (1 - v) + (h[o + R.nx] * (1 - u) + h[o + R.nx + 1] * u) * v;
  }
  // a shell crater: a bowl with a low thrown-up rim. Loose rubble lying there is scattered.
  crater(x, z, r, depth) {
    const R = this.R; const n = Math.ceil(r * 1.6 / R.cell); const ci = Math.floor((x - R.x0) / R.cell), ck = Math.floor((z - R.z0) / R.cell);
    for (let dk = -n; dk <= n; dk++) for (let di = -n; di <= n; di++) {
      const i = ci + di, k = ck + dk; if (i < 2 || k < 2 || i >= R.nx - 2 || k >= R.nz - 2) continue;
      const o = k * R.nx + i; const cx = R.x0 + (i + 0.5) * R.cell - x, cz = R.z0 + (k + 0.5) * R.cell - z; const t = Math.hypot(cx, cz) / r; if (t > 1.6) continue;
      const jag = 0.75 + 0.5 * h2(o, 31);
      let dh; if (t < 1) dh = -depth * Math.pow(1 - t * t, 1.4) * jag + depth * 0.22 * t * t; else dh = depth * 0.22 * Math.pow(1 - (t - 1) / 0.6, 2) * jag;
      this.dig[o] = Math.max(-1.7, Math.min(0.45, this.dig[o] + dh));
      if (t < 1) this.h[o] *= t * t;
    }
    const m = (d) => { d.i0 = Math.min(d.i0, ci - n - 1); d.i1 = Math.max(d.i1, ci + n + 1); d.k0 = Math.min(d.k0, ck - n - 1); d.k1 = Math.max(d.k1, ck + n + 1); };
    m(this.dirtyG || (this.dirtyG = { i0: 1e9, i1: -1, k0: 1e9, k1: -1 })); m(this.dirty || (this.dirty = { i0: 1e9, i1: -1, k0: 1e9, k1: -1 }));
  }
  // the fine ground mesh that craters are cut into
  buildGroundPatch(material) {
    const R = this.R; const geo = new THREE.BufferGeometry(); const pos = new Float32Array(R.nx * R.nz * 3), nor = new Float32Array(R.nx * R.nz * 3);
    this.baseT = new Float32Array(R.nx * R.nz);
    for (let k = 0; k < R.nz; k++) for (let i = 0; i < R.nx; i++) { const o = k * R.nx + i, x = R.x0 + (i + 0.5) * R.cell, z = R.z0 + (k + 0.5) * R.cell; const y = terrainH(x, z); this.baseT[o] = y; pos[o * 3] = x; pos[o * 3 + 1] = y; pos[o * 3 + 2] = z; }
    for (let k = 0; k < R.nz; k++) for (let i = 0; i < R.nx; i++) { const o = k * R.nx + i; const a = this.baseT[k * R.nx + Math.max(0, i - 1)], b = this.baseT[k * R.nx + Math.min(R.nx - 1, i + 1)], c = this.baseT[Math.max(0, k - 1) * R.nx + i], d = this.baseT[Math.min(R.nz - 1, k + 1) * R.nx + i]; const gx = (b - a) / (2 * R.cell), gz = (d - c) / (2 * R.cell), il = 1 / Math.hypot(gx, 1, gz); nor[o * 3] = -gx * il; nor[o * 3 + 1] = il; nor[o * 3 + 2] = -gz * il; }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3)); geo.setAttribute('aDig', new THREE.BufferAttribute(new Float32Array(R.nx * R.nz), 1));
    geo.setIndex(this.mesh.geometry.index); geo.boundingSphere = this.mesh.geometry.boundingSphere;
    this.ground = new THREE.Mesh(geo, material); this.ground.receiveShadow = true; this.ground.frustumCulled = false; return this.ground;
  }
  updateGround() {
    const d = this.dirtyG; if (!d || !this.ground) return; this.dirtyG = null;
    const R = this.R, pos = this.ground.geometry.attributes.position, nor = this.ground.geometry.attributes.normal, dg = this.ground.geometry.attributes.aDig, g = this.dig, b = this.baseT;
    const i0 = Math.max(1, d.i0), i1 = Math.min(R.nx - 2, d.i1), k0 = Math.max(1, d.k0), k1 = Math.min(R.nz - 2, d.k1);
    for (let k = k0; k <= k1; k++) for (let i = i0; i <= i1; i++) { const o = k * R.nx + i; pos.array[o * 3 + 1] = b[o] + g[o]; this.base[o] = b[o] + g[o] - 0.05; dg.array[o] = g[o];
      const gx = (b[o + 1] + g[o + 1] - b[o - 1] - g[o - 1]) / (2 * R.cell), gz = (b[o + R.nx] + g[o + R.nx] - b[o - R.nx] - g[o - R.nx]) / (2 * R.cell), il = 1 / Math.hypot(gx, 1, gz); nor.array[o * 3] = -gx * il; nor.array[o * 3 + 1] = il; nor.array[o * 3 + 2] = -gz * il; }
    // send the graphics card only the rows that changed, not the whole town
    { const st = k0 * R.nx, n = (k1 - k0 + 1) * R.nx; pos.addUpdateRange(st * 3, n * 3); nor.addUpdateRange(st * 3, n * 3); dg.addUpdateRange(st, n); }
    pos.needsUpdate = true; nor.needsUpdate = true; dg.needsUpdate = true;
  }
  // spread a volume of debris (m^3) around a point
  add(x, z, volume, radius, color) {
    const R = this.R; const r = Math.max(radius, R.cell); const n = Math.ceil(r / R.cell);
    const ci = Math.floor((x - R.x0) / R.cell), ck = Math.floor((z - R.z0) / R.cell);
    let wsum = 0; const cells = [];
    for (let dk = -n; dk <= n; dk++) for (let di = -n; di <= n; di++) {
      const i = ci + di, k = ck + dk; if (i < 1 || k < 1 || i >= R.nx - 1 || k >= R.nz - 1) continue;
      const dd = Math.hypot(di, dk) * R.cell / r; if (dd > 1) continue;
      const w = 1 - dd * dd; wsum += w; cells.push(k * R.nx + i, w);
    }
    if (!wsum) return;
    const perW = volume / (wsum * R.cell * R.cell);
    for (let c = 0; c < cells.length; c += 2) {
      const o = cells[c], add = perW * cells[c + 1] * (0.55 + 0.9 * h2(o, 77)), old = this.h[o], t = add / (old + add + 1e-6);
      this.h[o] = Math.min(old + add, 3.2);
      if (color) { this.col[o * 3] += (color[0] - this.col[o * 3]) * t; this.col[o * 3 + 1] += (color[1] - this.col[o * 3 + 1]) * t; this.col[o * 3 + 2] += (color[2] - this.col[o * 3 + 2]) * t; }
    }
    const d = this.dirty || (this.dirty = { i0: 1e9, i1: -1, k0: 1e9, k1: -1 });
    d.i0 = Math.min(d.i0, ci - n - 1); d.i1 = Math.max(d.i1, ci + n + 1); d.k0 = Math.min(d.k0, ck - n - 1); d.k1 = Math.max(d.k1, ck + n + 1);
  }
  // a tank rolling over a pile packs it down a little
  compact(x, z, radius, amount) {
    const R = this.R; const n = Math.ceil(radius / R.cell); const ci = Math.floor((x - R.x0) / R.cell), ck = Math.floor((z - R.z0) / R.cell);
    let changed = false;
    for (let dk = -n; dk <= n; dk++) for (let di = -n; di <= n; di++) {
      const i = ci + di, k = ck + dk; if (i < 1 || k < 1 || i >= R.nx - 1 || k >= R.nz - 1) continue;
      const o = k * R.nx + i; if (this.h[o] > 0.5) { this.h[o] -= (this.h[o] - 0.5) * amount; changed = true; }
    }
    if (changed) { const d = this.dirty || (this.dirty = { i0: 1e9, i1: -1, k0: 1e9, k1: -1 }); d.i0 = Math.min(d.i0, ci - n); d.i1 = Math.max(d.i1, ci + n); d.k0 = Math.min(d.k0, ck - n); d.k1 = Math.max(d.k1, ck + n); }
  }
  buildMesh(material) {
    const R = this.R; const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(R.nx * R.nz * 3), col = new Float32Array(R.nx * R.nz * 4), nor = new Float32Array(R.nx * R.nz * 3);
    for (let k = 0; k < R.nz; k++) for (let i = 0; i < R.nx; i++) {
      const o = k * R.nx + i, x = R.x0 + (i + 0.5) * R.cell, z = R.z0 + (k + 0.5) * R.cell;
      pos[o * 3] = x; pos[o * 3 + 1] = terrainH(x, z) - 0.05; pos[o * 3 + 2] = z; nor[o * 3 + 1] = 1;
    }
    const idx = new Uint32Array((R.nx - 1) * (R.nz - 1) * 6); let q = 0;
    for (let k = 0; k < R.nz - 1; k++) for (let i = 0; i < R.nx - 1; i++) { const a = k * R.nx + i, b = a + 1, c = a + R.nx, d = c + 1; idx[q++] = a; idx[q++] = c; idx[q++] = b; idx[q++] = b; idx[q++] = c; idx[q++] = d; }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('aRub', new THREE.BufferAttribute(col, 4));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(R.x0 + R.nx * R.cell / 2, 0, R.z0 + R.nz * R.cell / 2), 120);
    this.mesh = new THREE.Mesh(geo, material); this.mesh.receiveShadow = true; this.mesh.castShadow = true; this.mesh.frustumCulled = false;
    this.base = new Float32Array(R.nx * R.nz); for (let o = 0; o < this.base.length; o++) this.base[o] = pos[o * 3 + 1];
    return this.mesh;
  }
  updateMesh() {
    this.updateGround();
    const d = this.dirty; if (!d || !this.mesh) return; this.dirty = null;
    const R = this.R, pos = this.mesh.geometry.attributes.position, nor = this.mesh.geometry.attributes.normal, rub = this.mesh.geometry.attributes.aRub, h = this.h, col = this.col;
    let i0 = Math.max(1, d.i0), i1 = Math.min(R.nx - 2, d.i1), k0 = Math.max(1, d.k0), k1 = Math.min(R.nz - 2, d.k1);
    // loose rubble cannot stand steeper than about 35 degrees: let piles slump outwards
    const maxStep = 0.34; let moved = false, mi0 = 1e9, mi1 = -1, mk0 = 1e9, mk1 = -1;
    for (let pass = 0; pass < 3; pass++) {
      for (let k = k0; k <= k1; k++) for (let i = i0; i <= i1; i++) { const o = k * R.nx + i; if (h[o] < 0.05) continue;
        for (const n of [o - 1, o + 1, o - R.nx, o + R.nx]) { const df = h[o] - h[n]; if (df > maxStep + 0.03) { const mv = (df - maxStep) * 0.24; if (i < mi0) mi0 = i; if (i > mi1) mi1 = i; if (k < mk0) mk0 = k; if (k > mk1) mk1 = k; h[o] -= mv; const t = mv / (h[n] + mv + 1e-6); h[n] += mv; col[n * 3] += (col[o * 3] - col[n * 3]) * t; col[n * 3 + 1] += (col[o * 3 + 1] - col[n * 3 + 1]) * t; col[n * 3 + 2] += (col[o * 3 + 2] - col[n * 3 + 2]) * t; moved = true; } } }
      i0 = Math.max(1, i0 - 1); i1 = Math.min(R.nx - 2, i1 + 1); k0 = Math.max(1, k0 - 1); k1 = Math.min(R.nz - 2, k1 + 1);
    }
    // keep settling next frame, but only where something actually moved (otherwise the area would grow to the whole town and never stop)
    if (moved) { const nd = { i0: mi0 - 2, i1: mi1 + 2, k0: mk0 - 2, k1: mk1 + 2 }, od = this.dirty; this.dirty = od ? { i0: Math.min(od.i0, nd.i0), i1: Math.max(od.i1, nd.i1), k0: Math.min(od.k0, nd.k0), k1: Math.max(od.k1, nd.k1) } : nd; }
    for (let k = k0; k <= k1; k++) for (let i = i0; i <= i1; i++) {
      const o = k * R.nx + i;
      pos.array[o * 3 + 1] = this.base[o] + h[o];
      const gx = (h[o + 1] - h[o - 1]) / (2 * R.cell), gz = (h[o + R.nx] - h[o - R.nx]) / (2 * R.cell), il = 1 / Math.hypot(gx, 1, gz);
      nor.array[o * 3] = -gx * il; nor.array[o * 3 + 1] = il; nor.array[o * 3 + 2] = -gz * il;
      rub.array[o * 4] = this.col[o * 3]; rub.array[o * 4 + 1] = this.col[o * 3 + 1]; rub.array[o * 4 + 2] = this.col[o * 3 + 2]; rub.array[o * 4 + 3] = Math.min(1, h[o] / 0.16);
    }
    { const st = k0 * R.nx, n = (k1 - k0 + 1) * R.nx; pos.addUpdateRange(st * 3, n * 3); nor.addUpdateRange(st * 3, n * 3); rub.addUpdateRange(st * 4, n * 4); }
    pos.needsUpdate = true; nor.needsUpdate = true; rub.needsUpdate = true;
  }
}

// ---------------------------------------------------------------------------------------------
// Track marks, scorch and dust: drawn into a top-down map that the ground shader reads
// ---------------------------------------------------------------------------------------------
export class GroundMarks {
  constructor(renderer, size = 2048, cap = 512) {
    this.renderer = renderer; this.cap = cap; this.n = 0;
    this.rt = new THREE.WebGLRenderTarget(size, size, { depthBuffer: false, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter, generateMipmaps: true });
    this.rt.texture.anisotropy = 8;
    const M = CFG.MARKS;
    this.cam = new THREE.OrthographicCamera(M.x0, M.x0 + M.size, -M.z0, -(M.z0 + M.size), 0, 10);
    this.cam.position.set(0, 5, 0); this.cam.up.set(0, 0, -1); this.cam.lookAt(0, 0, 0); this.cam.updateMatrixWorld();
    const geo = new THREE.InstancedBufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, 0, -0.5, 0.5, 0, -0.5, 0.5, 0, 0.5, -0.5, 0, 0.5], 3));
    geo.setIndex([0, 2, 1, 0, 3, 2]);
    this.aA = new THREE.InstancedBufferAttribute(new Float32Array(cap * 4), 4); this.aB = new THREE.InstancedBufferAttribute(new Float32Array(cap * 4), 4);
    this.aA.setUsage(THREE.DynamicDrawUsage); this.aB.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aA', this.aA); geo.setAttribute('aB', this.aB);
    const mat = new THREE.ShaderMaterial({
      vertexShader: /* glsl */`attribute vec4 aA; attribute vec4 aB; varying vec2 vQ; varying vec4 vB; varying float vType;
        void main(){ float c = cos(aA.z), s = sin(aA.z); vec2 l = position.xz * aB.xy; vec2 w = aA.xy + vec2(l.x*c + l.y*s, -l.x*s + l.y*c);
          vQ = position.xz + 0.5; vB = aB; vType = aA.w; gl_Position = projectionMatrix * viewMatrix * vec4(w.x, 0.0, w.y, 1.0); }`,
      fragmentShader: /* glsl */`varying vec2 vQ; varying vec4 vB; varying float vType;
        ${NOISE}
        void main(){
          vec3 o = vec3(0.0); float earth = 0.0;
          if (vType < 0.5) {            // one stretch of tank track: pressed bars with gaps
            float edge = smoothstep(0.0, 0.10, vQ.x) * smoothstep(1.0, 0.90, vQ.x);
            float bars = 0.55 + 0.45*smoothstep(0.25, 0.45, abs(fract(vQ.y*vB.w) - 0.5));
            o.r = edge * bars * vB.z;
          } else if (vType < 1.5) {     // scorch from an explosion or fire
            float r = length(vQ - 0.5)*2.0; float n = fbm(vQ*9.0 + vB.w);
            o.g = smoothstep(1.0, 0.15, r + (n - 0.5)*0.7) * vB.z; o.r = o.g*0.8;
          } else if (vType < 2.5) {     // settled dust and grit
            float r = length(vQ - 0.5)*2.0; float n = fbm(vQ*7.0 + vB.w);
            o.b = smoothstep(1.0, 0.1, r + (n - 0.5)*0.9) * vB.z;
          } else {                      // earth thrown out of a crater, in rays
            vec2 q = vQ - 0.5; float r = length(q)*2.0; float ang = atan(q.y, q.x); float rays = 0.55 + 0.45*vnoise(vec2(ang*5.0 + vB.w, 1.0));
            earth = smoothstep(1.0, 0.25, r/rays + (fbm(vQ*8.0 + vB.w) - 0.5)*0.5) * vB.z;
          }
          gl_FragColor = vec4(o, earth);
        }`,
      side: THREE.DoubleSide, depthTest: false, depthWrite: false, blending: THREE.CustomBlending, blendEquation: THREE.MaxEquation, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
    });
    this.mesh = new THREE.Mesh(geo, mat); this.mesh.frustumCulled = false;
    this.scene = new THREE.Scene(); this.scene.add(this.mesh);
    const prev = renderer.getClearColor(new THREE.Color()).clone(), pa = renderer.getClearAlpha();
    renderer.setRenderTarget(this.rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.setRenderTarget(null); renderer.setClearColor(prev, pa);
  }
  // type 0 track (len along heading), 1 scorch, 2 dust, 3 thrown earth
  stamp(type, x, z, angle, sx, sz, strength, extra = 0) {
    if (this.n >= this.cap) return; const o = this.n++ * 4;
    this.aA.array[o] = x; this.aA.array[o + 1] = z; this.aA.array[o + 2] = angle; this.aA.array[o + 3] = type;
    this.aB.array[o] = sx; this.aB.array[o + 1] = sz; this.aB.array[o + 2] = strength; this.aB.array[o + 3] = extra;
  }
  flush() {
    if (!this.n) return;
    this.mesh.geometry.instanceCount = this.n; this.aA.needsUpdate = true; this.aB.needsUpdate = true;
    const r = this.renderer, auto = r.autoClear; r.autoClear = false;
    r.setRenderTarget(this.rt); r.render(this.scene, this.cam); r.setRenderTarget(null); r.autoClear = auto; this.n = 0;
  }
}

// ---------------------------------------------------------------------------------------------
// Ground on a wet night: cobbled streets running with water, mud, sodden grass, puddles in every
// rut and crater, and the lamps, fires and gun flashes mirrored in all of it.
// ---------------------------------------------------------------------------------------------
const NSEG = SEGMENTS.length;
export const ROAD_GLSL = /* glsl */`
uniform vec4 uRoad[${NSEG}]; uniform vec2 uRoadW[${NSEG}];
float sdBox(vec2 p, vec2 c, vec2 b){ vec2 d = abs(p - c) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
// x: distance to the edge of the nearest cobbled street (negative on it), y: the same for dirt tracks.
// gRoadDir: which way that street runs, so paving can be laid along it.
vec2 gRoadDir = vec2(1.0, 0.0);
vec2 roadDist(vec2 p){
  float dc = sdBox(p, vec2(${f(SQUARE.x)}, ${f(SQUARE.z)}), vec2(${f(SQUARE.hx)}, ${f(SQUARE.hz)})), dd = 1e5; gRoadDir = vec2(1.0, 0.0);
  for (int i = 0; i < ${NSEG}; i++){
    vec2 a = uRoad[i].xy, b = uRoad[i].zw; vec2 ab = b - a; float t = clamp(dot(p - a, ab)/dot(ab, ab), 0.0, 1.0);
    float e = length(p - a - ab*t) - uRoadW[i].x;
    if (uRoadW[i].y > 0.5) dd = min(dd, e); else if (e < dc) { dc = e; gRoadDir = normalize(ab); }
  }
  return vec2(dc, dd);
}
`;
export function roadUniforms() {
  return { uRoad: { value: SEGMENTS.map((s) => new THREE.Vector4(s[0], s[1], s[2], s[3])) }, uRoadW: { value: SEGMENTS.map((s) => new THREE.Vector2(s[4], s[5])) } };
}

export function makeGroundMaterial(shared) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, metalness: 0, envMapIntensity: 0.3 });
  const M = CFG.MARKS; const ru = roadUniforms();
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uFlash = shared.uFlash;
    sh.uniforms.uMarks = shared.uMarks; sh.uniforms.uTime = shared.uTime; sh.uniforms.uRefl = shared.uRefl; sh.uniforms.uReflMat = shared.uReflMat;
    sh.uniforms.uRoad = ru.uRoad; sh.uniforms.uRoadW = ru.uRoadW;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aDig; varying vec3 vWPos; varying float vDig;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz; vDig = aDig;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', /* glsl */`#include <common>
uniform sampler2D uMarks; uniform float uTime; uniform sampler2D uRefl; uniform mat4 uReflMat; varying vec3 vWPos; varying float vDig;
${NOISE}
${SKY}
${ROAD_GLSL}
// rings where raindrops land in standing water
vec2 rippleN(vec2 p, float t){
  vec2 acc = vec2(0.0);
  for (int k = 0; k < 2; k++){
    float fk = float(k); vec2 q = p*(1.7 + fk*1.2) + fk*17.3; vec2 c = floor(q); vec2 fr = fract(q) - 0.5;
    vec2 h = hash22(c + fk*7.1); float tt = t*(1.1 + 0.5*h.x) + h.y*8.0; float ph = fract(tt);
    vec2 o = (hash22(c + 3.3 + floor(tt)) - 0.5)*0.3; vec2 d = fr - o; float r = length(d); float rad = ph*0.40;
    float ring = sin((r - rad)*60.0) * smoothstep(0.06, 0.0, abs(r - rad)) * (1.0 - ph)*(1.0 - ph);
    acc += (d/max(r, 1e-4))*ring;
  }
  return acc;
}`)
      .replace('#include <metalnessmap_fragment>', /* glsl */`
float metalnessFactor = metalness;
vec2 gp = vWPos.xz;
float gDist = length(vViewPosition);
float gFade = exp(-gDist*0.03);
float pix = max(fwidth(gp.x), fwidth(gp.y));
vec2 muv = (gp - vec2(${f(M.x0)}, ${f(M.z0)})) / ${f(M.size)}; muv.y = 1.0 - muv.y;
vec4 marks4 = texture2D(uMarks, muv); vec3 marks = marks4.rgb; float earthM = marks4.a;
vec2 rd = roadDist(gp);
float edgeN = (vnoise(gp*0.7) - 0.5)*1.2;
float carriage = 1.0 - smoothstep(-0.04, 0.04, rd.x);                                  // the roadway, kerb to kerb
float walk = (1.0 - carriage) * (1.0 - smoothstep(-0.06, 0.06, rd.x + edgeN*0.06 - ${f(SIDEWALK)}));   // the pavement beside it
float paved = max(carriage, walk);
float dirt = smoothstep(0.9, -0.5, rd.y + edgeN) * (1.0 - paved);
float verge = smoothstep(5.0, 0.0, min(rd.x, rd.y)) * (1.0 - paved) * (1.0 - dirt);      // trodden ground beside the streets

// ---- cobbles: small granite setts laid in offset rows, crowned so water runs to the gutters ----
vec2 cu = gp / vec2(0.17, 0.115); cu.x += 0.5*mod(floor(cu.y), 2.0);
vec2 cid = floor(cu); vec2 cf = fract(cu) - 0.5; float cr = hash12(cid);
float cobFade = 1.0 - smoothstep(0.12, 0.42, max(fwidth(gp.x)/0.17, fwidth(gp.y)/0.115));
float sett = 1.0 - smoothstep(0.30, 0.50, max(abs(cf.x), abs(cf.y)) + (cr - 0.5)*0.08);
float dome = sett * (1.0 - dot(cf, cf)*1.6) * cobFade; sett = mix(0.72, sett, cobFade); cr = mix(0.5, cr, cobFade);
vec3 cob = mix(vec3(0.028, 0.027, 0.026), vec3(0.150, 0.145, 0.140)*(0.6 + 0.8*cr), sett) * (0.75 + 0.5*vnoise(gp*0.6));
// ---- pavement: a granite kerb, then flagstones laid in rows along the street ----
float su = dot(gp, gRoadDir), sv = rd.x; float kerb = 1.0 - smoothstep(0.20, 0.24, sv);
float frow = floor((sv - 0.22)/0.64); vec2 fq = kerb > 0.5 ? vec2(su/1.15, 0.5) : vec2(su/0.92 + 0.5*mod(frow, 2.0) + frow*0.37, (sv - 0.22)/0.64);
vec2 fid = floor(fq) + vec2(0.0, kerb*9.0), ffr = fract(fq) - 0.5; float frnd = hash12(fid);
float fFade = 1.0 - smoothstep(0.15, 0.5, pix/0.3);
float fjoint = mix(0.9, smoothstep(0.5, 0.47, abs(ffr.x)) * (kerb > 0.5 ? 1.0 : smoothstep(0.5, 0.465, abs(ffr.y))), fFade);
vec3 flag = mix(vec3(0.030, 0.029, 0.028), mix(vec3(0.118, 0.114, 0.106), vec3(0.172, 0.166, 0.154), frnd)*(0.8 + 0.4*vnoise(gp*3.0))*(1.0 + 0.18*kerb), fjoint);
vec3 pav = mix(flag, cob, carriage);

// ---- mud on the tracks, grass and weeds everywhere else ----
float fine = fbm(gp*2.2), big = fbm(gp*0.11 + 4.0);
vec3 mud = vec3(0.070, 0.052, 0.036)*(0.55 + 0.9*fbm(gp*1.3));
float blade = vnoise(gp*vec2(26.0, 31.0)) * (1.0 - smoothstep(0.02, 0.09, pix));
vec3 grass = mix(vec3(0.020, 0.030, 0.012), vec3(0.050, 0.064, 0.022), fine) * (0.7 + 0.6*big) * (0.8 + 0.5*blade);
grass = mix(grass, mud, smoothstep(0.55, 0.75, big + fine*0.3)*0.6);
vec3 alb = mix(mix(grass, mud, max(dirt, verge*0.75)), pav, paved);

// ---- what tanks and shells have done to it ----
float press = marks.r, scorch = marks.g;
alb = mix(alb, mix(mud*0.8, alb*0.6, paved), press*0.75);                 // churned ruts
{ float clod = vnoise(gp*7.0), clod2 = vnoise(gp*19.0 + 3.0);
  vec3 earthC = mix(vec3(0.040, 0.029, 0.019), vec3(0.100, 0.074, 0.050), clod)*(0.7 + 0.5*clod2);
  earthC = mix(earthC, vec3(0.15, 0.14, 0.13), step(0.80, clod2)*paved);
  alb = mix(alb, earthC, smoothstep(0.1, 0.5, earthM)); }
alb = mix(alb, vec3(0.008, 0.008, 0.007), scorch*0.9);
alb = mix(alb, vec3(0.20, 0.14, 0.11)*(0.7 + 0.5*fine), marks.b*0.6);    // brick and plaster dust, wet

// ---- water: lies in every low spot, rut and crater ----
float low = fbm(gp*0.05 + vec2(3.1, 7.7))*0.72 + fbm(gp*0.23 + 11.0)*0.24;
float level = 0.435 + dirt*0.05 + press*0.10*(1.0 - paved*0.5);
float gWater = smoothstep(level + 0.004, level - 0.014, low + (vnoise(gp*30.0) - 0.5)*0.012*gFade - dome*0.012);
gWater *= 1.0 - smoothstep(0.25, 1.0, abs(vWPos.y - vDig));
gWater *= 1.0 - walk*0.8;                                                // the pavement stands a kerb's height clear of the water                 // water does not stand on a slope
gWater = max(gWater, smoothstep(-0.16, -0.34, vDig));                      // craters fill up
gWater *= 1.0 - smoothstep(0.25, 0.6, scorch)*0.5;
float soak = smoothstep(level + 0.12, level + 0.01, low);
alb *= mix(0.62, 0.40, soak);                                            // everything is wet; darker where soaked
alb = mix(alb, alb*0.5 + vec3(0.003, 0.004, 0.005), gWater);
diffuseColor.rgb = alb;
float rough = mix(mix(0.66, 0.44, paved), 0.22, soak*mix(0.55, 1.0, paved));
rough = mix(rough, 0.55, smoothstep(0.1, 0.5, earthM)*(1.0 - gWater));
rough += (vnoise(gp*38.0) - 0.5)*0.12*gFade;
rough = mix(rough, 0.03, gWater);
roughnessFactor = clamp(rough, 0.03, 1.0);

// ---- surface shape ----
float hf = 1.0 - smoothstep(0.2, 0.6, pix*14.0);
float gH = dome*0.014*carriage + walk*(0.11 + fjoint*0.006) + (vnoise(gp*14.0) - 0.5)*0.014*hf*(1.0 - paved) + (vnoise(gp*7.0)*0.07 + vnoise(gp*19.0 + 3.0)*0.03)*smoothstep(0.1, 0.5, earthM) + blade*0.02*(1.0 - paved)*(1.0 - dirt) - press*0.03;
gH *= 1.0 - gWater;
vec2 rip = (rippleN(gp, uTime)*0.11*smoothstep(70.0, 18.0, gDist) + (vec2(vnoise(gp*5.0 + uTime*vec2(0.9, 0.35)), vnoise(gp*5.0 + 7.0 - uTime*vec2(0.25, 0.8))) - 0.5)*0.02) * gWater;
`)
      .replace('#include <normal_fragment_maps>', /* glsl */`normal = bumpNormal(normal, -vViewPosition, gH, 1.0*gFade + 0.2);
normal = normalize(normal + mat3(viewMatrix)*vec3(-rip.x, 0.0, -rip.y));`)
      .replace('#include <opaque_fragment>', /* glsl */`
{
  // mirror image of the town in the wet ground, blurred and smeared by how rough the surface is
  vec4 rc = uReflMat * vec4(vWPos.x, 0.0, vWPos.z, 1.0); vec2 ruv = rc.xy/rc.w;
  vec3 nW = normalize(inverse(mat3(viewMatrix))*normal); vec3 nV = mat3(viewMatrix)*(nW - vec3(0.0, 1.0, 0.0));
  ruv += nV.xy*vec2(0.8, 1.5);
  float lod = clamp(roughnessFactor*9.0 - 0.3, 0.0, 6.5); float stretch = 0.010 + roughnessFactor*0.30;
  vec3 refl = vec3(0.0);
  for (int i = 0; i < 5; i++){ float t = (float(i) + 0.5)/5.0 - 0.5; refl += textureLod(uRefl, clamp(ruv + vec2(0.0, t*stretch), vec2(0.002), vec2(0.998)), lod).rgb; }
  refl *= 0.2;
  float flat1 = 1.0 - smoothstep(0.35, 1.4, abs(vWPos.y - gWater*0.0));     // the mirror is only true on level ground
  float ndv = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
  float fres = 0.02 + 0.98*pow(1.0 - ndv, 5.0);
  float gloss = mix(pow(1.0 - roughnessFactor, 2.4), 1.0, gWater);
  outgoingLight = mix(outgoingLight, refl, clamp(fres*gloss, 0.0, 1.0)*mix(0.35, 1.0, flat1));
}
#include <opaque_fragment>`)
      .replace('#include <fog_fragment>', HAZE_FRAG);
  };
  mat.customProgramCacheKey = () => 'ground';
  return mat;
}

export function buildGround(material) {
  const B = CFG.BOUNDS; const x0 = B.x0 - 150, x1 = B.x1 + 150, z0 = B.z0 - 130, z1 = B.z1 + 110;
  const nx = 340, nz = 360;
  const geo = new THREE.PlaneGeometry(x1 - x0, z1 - z0, nx, nz).rotateX(-Math.PI / 2).translate((x0 + x1) / 2, 0, (z0 + z1) / 2);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setY(i, terrainH(p.getX(i), p.getZ(i)));
  geo.computeVertexNormals();
  // inside the battle area a finer mesh (which craters are cut into) takes over, so this one drops out of the way
  { const R = CFG.RUBBLE, ax = R.x0, bx = R.x0 + R.nx * R.cell, az = R.z0, bz = R.z0 + R.nz * R.cell; for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i); const inset = Math.min(x - ax, bx - x, z - az, bz - z); if (inset > 2.4) p.setY(i, p.getY(i) - 6); else if (inset > 0.4) p.setY(i, p.getY(i) - 0.10); } }
  const mesh = new THREE.Mesh(geo, material); mesh.receiveShadow = true;
  return mesh;
}

// ---------------------------------------------------------------------------------------------
// The river at night: black water that picks up the sky, the lamps on the quay and anything burning
// ---------------------------------------------------------------------------------------------
export function buildRiver(shared) {
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uFlash: shared.uFlash, uFogDensity: { value: CFG.FOG_DENSITY }, uRefl: shared.uRefl, uReflMat: shared.uReflMat },
    vertexShader: /* glsl */`varying vec3 vW; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */`
      uniform float uTime; uniform float uFogDensity; uniform sampler2D uRefl; uniform mat4 uReflMat; varying vec3 vW;
      ${NOISE}
      ${SKY}
      float waveH(vec2 p, float t){ return fbm(p*0.5 + vec2(t*0.5, 0.0))*0.6 + vnoise(p*2.2 + vec2(t*0.9, t*0.2))*0.25 + vnoise(p*7.0 + vec2(t*1.4, -t*0.3))*0.08 + vnoise(p*23.0 + t*2.5)*0.04; }
      void main(){
        vec2 p = vW.xz; vec3 toC = cameraPosition - vW; float dist = length(toC); vec3 V = toC/dist;
        float e = 0.06 + dist*0.003; float h0 = waveH(p, uTime);
        vec2 gr = vec2(waveH(p + vec2(e, 0.0), uTime) - h0, waveH(p + vec2(0.0, e), uTime) - h0)/e;
        vec3 n = normalize(vec3(-gr.x*0.14, 1.0, -gr.y*0.14));
        vec3 R = reflect(-V, n); R.y = abs(R.y);
        float fres = 0.02 + 0.98*pow(1.0 - max(dot(n, V), 0.0), 5.0);
        vec4 rc = uReflMat * vec4(vW.x, 0.0, vW.z, 1.0); vec2 ruv = rc.xy/rc.w; vec3 nV = mat3(viewMatrix)*(n - vec3(0.0, 1.0, 0.0)); ruv += nV.xy*vec2(0.9, 2.4);
        vec3 refl = textureLod(uRefl, clamp(ruv, vec2(0.002), vec2(0.998)), 1.8).rgb;
        vec3 col = mix(vec3(0.002, 0.004, 0.007), refl + skyColor(R, uTime)*0.25, fres);
        col = mix(col, hazeColor(-V), 1.0 - exp(-uFogDensity*uFogDensity*dist*dist));
        gl_FragColor = vec4(col, 1.0);
      }`,
    fog: false,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(900, 2 * (CFG.RIVER_HALF + 14)).rotateX(-Math.PI / 2), mat);
  mesh.position.set(0, CFG.WATER_Y, CFG.RIVER_Z);
  return mesh;
}
