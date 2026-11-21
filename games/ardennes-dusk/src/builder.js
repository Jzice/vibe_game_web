import * as THREE from 'three';

// Collects triangles for one merged mesh. Every vertex carries a base colour (aCol) and
// surface parameters (aPrm = wear, roughness, metalness, glow) that the shaders read.
export class Builder {
  constructor() {
    this.p = []; this.n = []; this.c = []; this.m = []; this.uv = [];
    this.col = [1, 1, 1]; this.prm = [0.5, 0.55, 0, 0];
    this.mat = new THREE.Matrix4(); this.stack = [];
    this._nm = new THREE.Matrix3();
  }
  set(col, prm) { if (col) this.col = col; if (prm) this.prm = prm; return this; }
  push(m) { this.stack.push(this.mat.clone()); this.mat.multiply(m); return this; }
  pop() { this.mat = this.stack.pop(); return this; }

  _v(v, n, u, w) {
    this.p.push(v.x, v.y, v.z); this.n.push(n.x, n.y, n.z);
    this.c.push(this.col[0], this.col[1], this.col[2]);
    this.m.push(this.prm[0], this.prm[1], this.prm[2], this.prm[3]);
    this.uv.push(u, w);
  }
  // flat-shaded triangle, counter-clockwise seen from outside
  tri(a, b, c, ua, ub, uc) {
    const A = a.clone().applyMatrix4(this.mat), B = b.clone().applyMatrix4(this.mat), C = c.clone().applyMatrix4(this.mat);
    const n = new THREE.Vector3().subVectors(B, A).cross(new THREE.Vector3().subVectors(C, A)).normalize();
    this._v(A, n, ua ? ua[0] : -1, ua ? ua[1] : -1);
    this._v(B, n, ub ? ub[0] : -1, ub ? ub[1] : -1);
    this._v(C, n, uc ? uc[0] : -1, uc ? uc[1] : -1);
  }
  quad(a, b, c, d, uvs) {
    if (uvs) { this.tri(a, b, c, uvs[0], uvs[1], uvs[2]); this.tri(a, c, d, uvs[0], uvs[2], uvs[3]); }
    else { this.tri(a, b, c); this.tri(a, c, d); }
  }
  // any three.js geometry, keeping its own (smooth) normals
  geo(g, matrix) {
    const src = g.index ? g.toNonIndexed() : g;
    const full = this.mat.clone(); if (matrix) full.multiply(matrix);
    this._nm.getNormalMatrix(full);
    const pos = src.attributes.position, nor = src.attributes.normal;
    const v = new THREE.Vector3(), n = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(full);
      n.fromBufferAttribute(nor, i).applyMatrix3(this._nm).normalize();
      this._v(v, n, -1, -1);
    }
    if (src !== g) src.dispose();
    g.dispose();
    return this;
  }
  box(cx, cy, cz, sx, sy, sz, ry = 0) {
    const m = new THREE.Matrix4().makeTranslation(cx, cy, cz);
    if (ry) m.multiply(new THREE.Matrix4().makeRotationY(ry));
    return this.geo(new THREE.BoxGeometry(sx, sy, sz), m);
  }
  // box-section member running from a to b
  beam(a, b, w, h) {
    const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
    const z = new THREE.Vector3().subVectors(B, A); const len = z.length(); z.normalize();
    let up = new THREE.Vector3(0, 1, 0); if (Math.abs(z.y) > 0.99) up = new THREE.Vector3(1, 0, 0);
    const x = new THREE.Vector3().crossVectors(up, z).normalize();
    const y = new THREE.Vector3().crossVectors(z, x);
    const m = new THREE.Matrix4().makeBasis(x, y, z).setPosition(A.clone().add(B).multiplyScalar(0.5));
    return this.geo(new THREE.BoxGeometry(w, h, len), m);
  }
  // round member from a to b (r at a, r2 at b)
  cyl(a, b, r, seg = 10, r2 = r, open = false) {
    const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
    const d = new THREE.Vector3().subVectors(B, A); const len = d.length(); d.normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d);
    const m = new THREE.Matrix4().compose(A.clone().add(B).multiplyScalar(0.5), q, new THREE.Vector3(1, 1, 1));
    return this.geo(new THREE.CylinderGeometry(r2, r, len, seg, 1, open), m);
  }
  // triangle / quad whose winding is fixed up so it faces away from a point inside the solid
  triO(a, b, c, inside) {
    const n = new THREE.Vector3().subVectors(b, a).cross(new THREE.Vector3().subVectors(c, a));
    if (n.dot(new THREE.Vector3().subVectors(a, inside)) < 0) this.tri(a, c, b); else this.tri(a, b, c);
  }
  quadO(a, b, c, d, inside) { this.triO(a, b, c, inside); this.triO(a, c, d, inside); }
  // extrude a side profile [[z, y], ...] across x from x0 to x1 (the profile must be convex or nearly so)
  prism(prof, x0, x1) {
    let cz = 0, cy = 0; for (const p of prof) { cz += p[0]; cy += p[1]; } cz /= prof.length; cy /= prof.length;
    const inside = new THREE.Vector3((x0 + x1) / 2, cy, cz), n = prof.length;
    for (let i = 0; i < n; i++) { const p = prof[i], q = prof[(i + 1) % n]; this.quadO(new THREE.Vector3(x0, p[1], p[0]), new THREE.Vector3(x1, p[1], p[0]), new THREE.Vector3(x1, q[1], q[0]), new THREE.Vector3(x0, q[1], q[0]), inside); }
    for (const x of [x0, x1]) for (let i = 1; i < n - 1; i++) this.triO(new THREE.Vector3(x, prof[0][1], prof[0][0]), new THREE.Vector3(x, prof[i][1], prof[i][0]), new THREE.Vector3(x, prof[i + 1][1], prof[i + 1][0]), inside);
    return this;
  }
  // skin between rings of points (each ring an array of [x, y, z], same length); smooth = soft shading for cast shapes
  loft(rings, { capTop = true, capBottom = false, smooth = false } = {}) {
    const n = rings[0].length; const c = new THREE.Vector3(); let cnt = 0;
    for (const r of rings) for (const p of r) { c.x += p[0]; c.y += p[1]; c.z += p[2]; cnt++; } c.multiplyScalar(1 / cnt);
    const P3 = (p) => new THREE.Vector3(p[0], p[1], p[2]);
    if (!smooth) {
      for (let k = 0; k < rings.length - 1; k++) for (let i = 0; i < n; i++) { const j = (i + 1) % n; this.quadO(P3(rings[k][i]), P3(rings[k][j]), P3(rings[k + 1][j]), P3(rings[k + 1][i]), c); }
    } else {
      const g = new THREE.BufferGeometry(); const pos = [], idx = [];
      for (const r of rings) for (const p of r) pos.push(p[0], p[1], p[2]);
      const a0 = P3(rings[0][0]), b0 = P3(rings[0][1]), c0 = P3(rings[1][1]);
      const flip = new THREE.Vector3().subVectors(b0, a0).cross(new THREE.Vector3().subVectors(c0, a0)).dot(new THREE.Vector3().subVectors(a0, c)) < 0;
      for (let k = 0; k < rings.length - 1; k++) for (let i = 0; i < n; i++) { const j = (i + 1) % n, A = k * n + i, B = k * n + j, C = (k + 1) * n + j, D = (k + 1) * n + i; if (flip) idx.push(A, C, B, A, D, C); else idx.push(A, B, C, A, C, D); }
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); this.geo(g);
    }
    const cap = (r) => { const m = new THREE.Vector3(); for (const p of r) { m.x += p[0]; m.y += p[1]; m.z += p[2]; } m.multiplyScalar(1 / n); for (let i = 0; i < n; i++) this.triO(m.clone(), P3(r[i]), P3(r[(i + 1) % n]), c); };
    if (capTop) cap(rings[rings.length - 1]); if (capBottom) cap(rings[0]);
    return this;
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('aCol', new THREE.Float32BufferAttribute(this.c, 3));
    g.setAttribute('aPrm', new THREE.Float32BufferAttribute(this.m, 4));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}

export const V = (x, y, z) => new THREE.Vector3(x, y, z);
