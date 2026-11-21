import * as THREE from 'three';
import { Builder, V } from './builder.js';

// Tank shapes, built to the real vehicles' main dimensions. Local axes: +z forward, +y up, +x left.
// Vertex colour is the paint; aPrm = (wear, roughness, metalness, glow).
const PR = { paint: [0.5, 0.58, 0, 0], worn: [0.8, 0.62, 0, 0], steel: [0.6, 0.42, 0.85, 0], bare: [0.0, 0.5, 0.2, 0], rubber: [0.0, 0.9, 0, 0], mark: [0.28, 0.6, 0, 0], glass: [0.0, 0.1, 0, 0] };
const C = {
  od: [0.082, 0.092, 0.046], odDark: [0.05, 0.056, 0.03], dg: [0.40, 0.335, 0.185], steel: [0.16, 0.16, 0.165], track: [0.085, 0.078, 0.07], rubber: [0.018, 0.018, 0.02],
  white: [0.62, 0.62, 0.60], black: [0.015, 0.015, 0.017], wood: [0.22, 0.15, 0.08], canvas: [0.19, 0.18, 0.12], glass: [0.02, 0.03, 0.035],
};
const M4 = () => new THREE.Matrix4();
const D2R = Math.PI / 180;

// ---- track run: a closed loop in the side view, sampled so links can be placed along it ----
function trackPath(spec) {
  const pts = []; const arc = (cz, cy, r, a0, a1) => { const n = Math.max(2, Math.ceil(Math.abs(a1 - a0) / 14)); for (let i = 0; i <= n; i++) { const a = (a0 + (a1 - a0) * i / n) * D2R; pts.push([cz + Math.cos(a) * r, cy + Math.sin(a) * r]); } };
  const t = spec.track;
  pts.push([t.z0, t.thick / 2], [t.z1, t.thick / 2]);
  arc(t.sprocket[0], t.sprocket[1], t.sprocket[2] + t.thick / 2, -52, 90);
  for (const p of t.top) pts.push(p);
  arc(t.idler[0], t.idler[1], t.idler[2] + t.thick / 2, 90, 232);
  const seg = [0]; for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; seg.push(seg[i] + Math.hypot(b[0] - a[0], b[1] - a[1])); }
  const L = seg[pts.length];
  const at = (s, out) => { s = ((s % L) + L) % L; let lo = 0, hi = pts.length; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (seg[m] <= s) lo = m; else hi = m; }
    const a = pts[lo], b = pts[(lo + 1) % pts.length], f = (s - seg[lo]) / (seg[lo + 1] - seg[lo] || 1); out.z = a[0] + (b[0] - a[0]) * f; out.y = a[1] + (b[1] - a[1]) * f; out.a = Math.atan2(b[1] - a[1], b[0] - a[0]); return out; };
  return { L, at, n: Math.round(L / t.pitch) };
}

function linkGeometry(spec) {
  const b = new Builder(), t = spec.track, w = t.width;
  b.set(C.track, PR.steel).box(0, 0, 0, w, t.thick * 0.55, t.pitch * 0.90);
  b.box(0, -t.thick * 0.42, 0, w * 0.96, t.thick * 0.36, t.pitch * 0.30);                 // grouser bar that bites the ground
  for (const s of [-1, 1]) b.box(s * w * 0.16, t.thick * 0.62, 0, 0.05, t.thick * 0.9, t.pitch * 0.5);   // guide horns
  for (const s of [-1, 1]) b.set(C.steel, PR.steel).box(s * w * 0.49, 0, 0, 0.03, t.thick * 0.5, t.pitch * 0.5);
  return b.build();
}

function wheelGeometry(spec, kind) {
  // axis along x, radius 1, width 1 (scaled per wheel)
  const b = new Builder(); const paint = spec.paint;
  if (kind === 'road') {
    if (spec.rubberTyres) { b.set(C.rubber, PR.rubber).cyl([-0.5, 0, 0], [0.5, 0, 0], 1.0, 20); b.set(paint, PR.worn).cyl([-0.52, 0, 0], [0.52, 0, 0], 0.74, 16); }
    else { b.set(paint, PR.worn).cyl([-0.5, 0, 0], [0.5, 0, 0], 1.0, 22); b.set(C.steel, PR.steel).cyl([-0.34, 0, 0], [0.34, 0, 0], 1.03, 22); b.set(paint, PR.worn).cyl([-0.56, 0, 0], [0.56, 0, 0], 0.62, 16); }
    b.set(paint, PR.worn).cyl([-0.62, 0, 0], [0.62, 0, 0], 0.26, 10);
    for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; b.set(C.steel, PR.steel).box(0.57, Math.sin(a) * 0.46, Math.cos(a) * 0.46, 0.1, 0.09, 0.09); b.box(-0.57, Math.sin(a) * 0.46, Math.cos(a) * 0.46, 0.1, 0.09, 0.09); }
  } else {
    // sprocket / idler: a spoked rim
    b.set(paint, PR.worn).cyl([-0.5, 0, 0], [0.5, 0, 0], 0.80, 18); b.cyl([-0.6, 0, 0], [0.6, 0, 0], 0.30, 10);
    for (const s of [-0.38, 0.38]) b.set(C.steel, PR.steel).cyl([s - 0.07, 0, 0], [s + 0.07, 0, 0], 1.0, 22);
    if (kind === 'sprocket') for (let i = 0; i < 14; i++) { const a = i / 14 * 6.283; for (const s of [-0.38, 0.38]) b.box(s, Math.sin(a) * 1.02, Math.cos(a) * 1.02, 0.12, 0.14, 0.14); }
  }
  return b.build();
}

function star(b, x, y, z, r, sign) {
  // five-pointed star lying on a hull side (a plane of constant x)
  const pts = []; for (let i = 0; i < 10; i++) { const a = Math.PI / 2 + i * Math.PI / 5, rr = i % 2 === 0 ? r : r * 0.39; pts.push(V(x, y + Math.sin(a) * rr, z + Math.cos(a) * rr)); }
  const c = V(x, y, z), inside = V(x - sign, y, z);
  for (let i = 0; i < 10; i++) b.triO(c.clone(), pts[i], pts[(i + 1) % 10], inside);
}
function seg7(b, digit, ox, oy, h, w, st) {
  // stencil-style numeral built from bars, in the local frame pushed by the caller (x right, y up)
  const S = { 0: 'abcdef', 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc', 5: 'afgcd', 6: 'afgedc', 7: 'abc', 8: 'abcdefg', 9: 'abfgcd' }[digit];
  const bar = { a: [0, h / 2, w, st], g: [0, 0, w, st], d: [0, -h / 2, w, st], f: [-w / 2, h / 4, st, h / 2], b: [w / 2, h / 4, st, h / 2], e: [-w / 2, -h / 4, st, h / 2], c: [w / 2, -h / 4, st, h / 2] };
  for (const k of S) { const [x, y, sx, sy] = bar[k]; b.box(ox + x, oy + y, 0, sx + (sx < sy ? 0 : st * 0.3), sy + (sy < sx ? 0 : st * 0.3), 0.012); }
}
// frame lying on a flat panel: u along it, v up it, n out of it
function panelFrame(p0, p1, p2, outward) {
  const o = V(...p0), u = V(...p1).sub(o).normalize(), v0 = V(...p2).sub(o); const n = new THREE.Vector3().crossVectors(u, v0).normalize(); if (n.dot(V(...outward)) < 0) n.negate();
  const v = new THREE.Vector3().crossVectors(n, u).normalize(); return (cx, cy) => M4().makeBasis(u, v, n).setPosition(o.clone().addScaledVector(u, cx).addScaledVector(v, cy).addScaledVector(n, 0.012));
}

// ---------------------------------------------------------------------------------------------
// Tiger II (Koenigstiger): 7.38 m hull, 3.76 m wide, 3.09 m high, 8.8 cm L/71 gun
// ---------------------------------------------------------------------------------------------
export const TIGER = {
  name: 'tiger', paint: C.dg, camo: true, rubberTyres: false,
  halfL: 3.70, halfW: 1.88, hullTop: 1.86, height: 3.05, turretPos: [0, 1.86, 0.35], gunPivot: [0, 0.44, 1.30], barrel: 6.0, muzzleR: 0.16, turretBox: { hx: 1.05, hy: 0.45, z0: -1.9, z1: 1.5 },
  track: { x: 1.47, width: 0.80, thick: 0.10, pitch: 0.156, z0: -2.26, z1: 2.19, sprocket: [3.04, 0.93, 0.43], idler: [-3.06, 0.80, 0.40], top: [[2.19, 0.95], [-2.26, 0.95]] },
  wheels: [...Array.from({ length: 9 }, (_, i) => ({ z: -2.26 + i * 0.556, y: 0.50, r: 0.40, w: 0.30, dx: i % 2 === 0 ? 0.15 : -0.15, kind: 'road' })), { z: 3.04, y: 0.93, r: 0.43, w: 0.5, dx: 0, kind: 'sprocket' }, { z: -3.06, y: 0.80, r: 0.40, w: 0.5, dx: 0, kind: 'idler' }],
  mass: 68, maxSpeed: 6.2, reverse: 2.6, accel: 1.7, turn: 0.52, traverse: 0.34, elev: [-0.12, 0.26], reload: 7.5, hp: 100, exhaust: [[0.42, 2.1, -3.72], [-0.42, 2.1, -3.72]],
};
function tigerHull() {
  const b = new Builder(); const p = TIGER.paint;
  b.set(p, PR.paint);
  b.prism([[-3.52, 0.50], [3.00, 0.48], [3.62, 1.02], [3.25, 1.25], [-3.62, 1.25]], -0.94, 0.94);                 // lower tub and nose
  b.prism([[-3.62, 1.25], [3.25, 1.25], [2.25, 1.86], [-3.45, 1.86]], -1.80, 1.80);                              // upper hull, glacis sloped at 50 degrees
  for (const s of [-1, 1]) {
    b.set(p, PR.paint).box(s * 1.84, 1.235, -0.15, 0.10, 0.03, 7.05);                                              // track guard lip
    b.set(C.steel, PR.steel); for (const z of [3.5, -3.6]) b.box(s * 0.62, 0.78, z, 0.12, 0.22, 0.2);             // tow shackles
  }
  // front: machine-gun ball, driver's visor, headlight
  b.push(M4().makeTranslation(-0.72, 1.50, 2.86));
  b.set(p, PR.paint).geo(new THREE.SphereGeometry(0.21, 14, 10)); b.set(C.steel, PR.steel).cyl([0, 0, 0.1], [0, 0.05, 0.62], 0.028, 8); b.pop();
  b.set(C.black, PR.glass).box(0.72, 1.93, 1.75, 0.34, 0.09, 0.14); b.set(p, PR.paint).box(0.72, 1.9, 1.62, 0.5, 0.1, 0.32);
  b.set(C.black, PR.paint).cyl([0, 1.62, 2.72], [0, 1.80, 2.72], 0.02, 6); b.cyl([0, 1.84, 2.66], [0, 1.84, 2.84], 0.085, 12);
  // engine deck: grilles, fan covers, hatch
  for (const s of [-1, 1]) { b.set(C.black, PR.steel).box(s * 1.16, 1.875, -2.42, 1.05, 0.03, 1.5); for (let k = 0; k < 9; k++) b.set(p, PR.paint).box(s * 1.16, 1.895, -3.08 + k * 0.165, 1.05, 0.02, 0.05);
    b.set(p, PR.paint).cyl([s * 1.16, 1.86, -1.25], [s * 1.16, 1.93, -1.25], 0.36, 16); }
  b.set(p, PR.paint).box(0, 1.89, -2.5, 1.2, 0.06, 1.7); b.box(0, 1.93, -2.5, 0.5, 0.05, 0.5);
  // rear plate: twin exhausts with their armoured cowls, jack
  for (const s of [-1, 1]) b.set(C.steel, PR.worn).cyl([s * 0.42, 1.30, -3.72], [s * 0.42, 2.06, -3.72], 0.085, 10);
  b.set(C.steel, PR.steel).box(0, 0.98, -3.68, 0.9, 0.16, 0.14);
  // radio aerial
  b.set(C.black, PR.steel).cyl([1.5, 1.86, -2.9], [1.5, 3.9, -2.95], 0.012, 5);
  // national cross on each side: black bars with white edging
  for (const s of [-1, 1]) { const x = s * 1.812; b.set(C.white, PR.mark).box(x, 1.56, 0.5, 0.012, 0.36, 0.15); b.box(x, 1.56, 0.5, 0.012, 0.15, 0.36); b.set(C.black, PR.mark).box(x + s * 0.004, 1.56, 0.5, 0.012, 0.30, 0.09); b.box(x + s * 0.004, 1.56, 0.5, 0.012, 0.09, 0.30); }
  return b.build();
}
function tigerTurret(number) {
  const b = new Builder(); const p = TIGER.paint; b.set(p, PR.paint);
  // six-sided plan, sides leaning in 21 degrees: the Henschel production turret
  const base = [[0.60, 1.52], [1.06, 0.25], [0.92, -1.86], [-0.92, -1.86], [-1.06, 0.25], [-0.60, 1.52]];
  const top = base.map(([x, z]) => [x * 0.80, z * 0.975]);
  b.loft([base.map(([x, z]) => [x, 0, z]), top.map(([x, z]) => [x, 0.84, z])], { capTop: true, capBottom: true });
  // mantlet: the conical "pig's head" casting around the gun
  const ring = (r, z, y) => Array.from({ length: 16 }, (_, i) => [Math.cos(i / 16 * 6.283) * r, y + Math.sin(i / 16 * 6.283) * r, z]);
  b.loft([ring(0.50, 1.44, 0.44), ring(0.44, 1.70, 0.44), ring(0.27, 2.10, 0.44), ring(0.21, 2.34, 0.44)], { smooth: true, capTop: true });
  // commander's cupola with vision blocks, loader's hatch, ventilator, rear hatch
  b.set(p, PR.paint).cyl([0.42, 0.84, -0.35], [0.42, 1.06, -0.35], 0.44, 18); b.cyl([0.42, 1.06, -0.35], [0.42, 1.10, -0.35], 0.34, 16);
  for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283; b.set(C.black, PR.glass).box(0.42 + Math.cos(a) * 0.42, 1.0, -0.35 + Math.sin(a) * 0.42, 0.12, 0.05, 0.12, -a); }
  b.set(p, PR.paint).box(-0.42, 0.87, -0.2, 0.62, 0.05, 0.62); b.cyl([0, 0.84, 0.75], [0, 0.90, 0.75], 0.17, 12); b.box(0, 0.36, -1.87, 0.62, 0.52, 0.05);
  b.set(C.steel, PR.steel).cyl([-0.55, 0.88, 0.9], [-0.55, 0.96, 1.02], 0.05, 8);
  // spare track links hung along both sides
  for (const s of [-1, 1]) for (let k = 0; k < 5; k++) { const z = -1.5 + k * 0.42, x = s * (0.94 + (z > 0.25 ? -(z - 0.25) * 0.36 : (z + 1.86) * 0.066)); b.set(C.track, PR.steel).box(x * 0.93 + s * 0.05, 0.50, z, 0.07, 0.36, 0.36, s * (z > 0.25 ? 0.35 : -0.066)); }
  // turret number on each side
  for (const s of [-1, 1]) {
    const f = panelFrame(s > 0 ? [0.92, 0, -1.86] : [-1.06, 0, 0.25], s > 0 ? [1.06, 0, 0.25] : [-0.92, 0, -1.86], s > 0 ? [0.92 * 0.8, 0.84, -1.86 * 0.975] : [-1.06 * 0.8, 0.84, 0.25 * 0.975], [s, 0, 0]);
    b.push(f(0.52, 0.45)); b.set(C.white, PR.mark); String(number).split('').forEach((d, i) => seg7(b, d, i * 0.34, 0, 0.40, 0.20, 0.055)); b.pop();
  }
  return b.build();
}
function tigerGun() {
  const b = new Builder();
  b.set(TIGER.paint, PR.paint).cyl([0, 0, 0.9], [0, 0, 2.9], 0.125, 14, 0.105); b.cyl([0, 0, 2.9], [0, 0, 5.55], 0.105, 14, 0.085);
  b.set(C.steel, PR.worn).cyl([0, 0, 5.55], [0, 0, 5.72], 0.15, 14); b.cyl([0, 0, 5.72], [0, 0, 5.84], 0.10, 12); b.cyl([0, 0, 5.84], [0, 0, 6.0], 0.15, 14);
  b.set(C.black, PR.glass).cyl([0, 0, 5.99], [0, 0, 6.005], 0.055, 10);
  return b.build();
}

// ---------------------------------------------------------------------------------------------
// M4A3E8 Sherman: 5.89 m hull, 3.0 m wide, 2.97 m high, 76 mm gun, wide-track HVSS suspension
// ---------------------------------------------------------------------------------------------
export const SHERMAN = {
  name: 'sherman', paint: C.od, camo: false, rubberTyres: true,
  halfL: 2.95, halfW: 1.50, hullTop: 1.74, height: 2.95, turretPos: [0, 1.74, 0.30], gunPivot: [0, 0.40, 0.98], barrel: 3.9, muzzleR: 0.11, turretBox: { hx: 0.95, hy: 0.42, z0: -1.55, z1: 1.1 },
  track: { x: 1.20, width: 0.58, thick: 0.085, pitch: 0.152, z0: -1.78, z1: 1.78, sprocket: [2.46, 0.74, 0.33], idler: [-2.50, 0.60, 0.30], top: [[1.3, 1.07], [-1.3, 1.07]] },
  wheels: [...[-1.78, -1.18, -0.30, 0.30, 1.18, 1.78].map((z) => ({ z, y: 0.345, r: 0.26, w: 0.5, dx: 0, kind: 'road' })), ...[-1.25, 0, 1.25].map((z) => ({ z, y: 0.95, r: 0.085, w: 0.5, dx: 0, kind: 'road' })),
    { z: 2.46, y: 0.74, r: 0.33, w: 0.42, dx: 0, kind: 'sprocket' }, { z: -2.50, y: 0.60, r: 0.30, w: 0.42, dx: 0, kind: 'idler' }],
  mass: 33, maxSpeed: 8.6, reverse: 3.4, accel: 3.2, turn: 0.95, traverse: 0.85, elev: [-0.16, 0.36], reload: 3.4, hp: 100, exhaust: [[0.3, 1.2, -3.0], [-0.3, 1.2, -3.0]],
};
function shermanHull() {
  const b = new Builder(); const p = SHERMAN.paint; b.set(p, PR.paint);
  b.prism([[-2.72, 0.46], [2.20, 0.44], [2.52, 0.58], [2.70, 0.95], [-2.86, 0.95]], -0.86, 0.86);                 // lower hull
  b.prism([[-2.90, 0.95], [2.70, 0.95], [1.55, 1.74], [-2.55, 1.74], [-2.93, 1.34]], -1.31, 1.31);                // upper hull, 47 degree glacis
  // rounded cast transmission cover across the nose, with its bolted flange
  b.push(M4().makeTranslation(0, 0.70, 2.34)); b.geo(new THREE.CylinderGeometry(0.40, 0.40, 1.74, 18, 1, false, 0, Math.PI), M4().makeRotationZ(Math.PI / 2).multiply(M4().makeRotationY(Math.PI / 2))); b.pop();
  b.set(p, PR.worn).box(0, 0.98, 2.60, 1.78, 0.05, 0.10);
  for (let i = 0; i < 9; i++) b.set(C.steel, PR.steel).box(-0.8 + i * 0.2, 1.01, 2.60, 0.04, 0.03, 0.04);
  for (const s of [-1, 1]) {
    b.set(p, PR.paint).box(s * 1.42, 0.975, 0, 0.30, 0.03, 3.6);                                                   // fenders over the tracks (the ends are loose parts)
    b.set(C.steel, PR.steel).box(s * 0.50, 0.66, 2.74, 0.10, 0.18, 0.12);                                          // towing eyes
    b.set(C.black, PR.paint).cyl([s * 0.95, 1.36, 2.12], [s * 0.95, 1.50, 2.12], 0.02, 6); b.cyl([s * 0.95, 1.52, 2.07], [s * 0.95, 1.52, 2.21], 0.065, 10);   // headlights
    b.set(p, PR.paint).box(s * 0.62, 1.78, 1.02, 0.52, 0.06, 0.44); b.set(C.black, PR.glass).box(s * 0.62, 1.84, 1.2, 0.2, 0.06, 0.07);                         // crew hatches, periscopes
  }
  // bow machine gun, engine deck grille, rear plate details
  b.push(M4().makeTranslation(-0.62, 1.38, 2.08)); b.set(p, PR.paint).geo(new THREE.SphereGeometry(0.16, 12, 8)); b.set(C.steel, PR.steel).cyl([0, 0, 0.08], [0, 0.04, 0.55], 0.022, 8); b.pop();
  b.set(C.black, PR.steel).box(0, 1.755, -1.2, 1.5, 0.02, 0.8); for (let k = 0; k < 6; k++) b.set(p, PR.paint).box(0, 1.775, -1.5 + k * 0.13, 1.5, 0.02, 0.04);
  for (const s of [-1, 1]) b.set(C.steel, PR.worn).cyl([s * 0.3, 1.12, -2.93], [s * 0.3, 1.12, -3.05], 0.07, 10);
  b.set(C.black, PR.steel).cyl([-1.1, 1.74, -2.3], [-1.1, 3.6, -2.34], 0.012, 5);
  // rear plate, which the player looks at all game: engine doors, air deflector, lights, tow hook, tool rack
  b.set(p, PR.paint); for (const s of [-1, 1]) { b.box(s * 0.42, 1.18, -2.945, 0.78, 0.5, 0.03); b.set(C.steel, PR.steel).box(s * 0.42, 1.18, -2.965, 0.05, 0.12, 0.02); b.set(p, PR.paint); for (const y of [0.98, 1.38]) b.box(s * 0.78, y, -2.96, 0.06, 0.06, 0.03); }
  for (let k = 0; k < 5; k++) b.set(p, PR.worn).box(0, 0.50 + k * 0.085, -2.80 - k * 0.02, 1.7, 0.02, 0.12);
  b.set(C.steel, PR.steel).box(0, 0.62, -2.98, 0.16, 0.14, 0.2); b.cyl([0, 0.62, -3.0], [0, 0.62, -3.14], 0.05, 8);
  for (const s of [-1, 1]) { b.set([0.5, 0.03, 0.02], [0.1, 0.4, 0, 0.6]).box(s * 1.18, 1.42, -2.95, 0.07, 0.07, 0.03); b.set(p, PR.paint).box(s * 1.18, 1.42, -2.93, 0.12, 0.12, 0.03); }
  b.set(C.wood, PR.worn).box(0, 1.60, -2.965, 1.3, 0.05, 0.04); b.set(C.steel, PR.steel).box(-0.3, 1.52, -2.975, 0.5, 0.12, 0.03); b.cyl([0.2, 1.50, -2.98], [0.75, 1.50, -2.98], 0.025, 6);
  // (the kit on the engine deck is made of separate pieces that can be shot off: see looseParts)
  for (let k = 0; k < 14; k++) { const a0 = k / 14 * Math.PI, a1 = (k + 1) / 14 * Math.PI; b.set(C.steel, PR.steel).cyl([Math.cos(a0) * 0.9, 1.765, -2.1 - Math.sin(a0) * 0.45], [Math.cos(a1) * 0.9, 1.765, -2.1 - Math.sin(a1) * 0.45], 0.02, 5); }
  // white stars on the hull sides and glacis registration bar
  b.set(C.white, PR.mark); for (const s of [-1, 1]) star(b, s * 1.322, 1.34, 0.1, 0.27, s);
  return b.build();
}
function shermanTurret() {
  const b = new Builder(); const p = SHERMAN.paint; b.set(p, PR.paint);
  // cast turret: rounded front, long bustle at the back for the radio
  const outline = (sc, y, zs) => Array.from({ length: 20 }, (_, i) => { const a = i / 20 * 6.283, cx = Math.cos(a), sz = Math.sin(a); const z = sz > 0 ? sz * 1.02 : sz * 1.55; const x = cx * (0.96 - (sz < 0 ? 0.12 * sz * sz : 0)); return [x * sc, y, z * (sc * 0.4 + 0.6) + zs]; });
  b.loft([outline(0.90, 0, 0), outline(1.0, 0.14, 0), outline(0.985, 0.52, 0), outline(0.90, 0.72, -0.02), outline(0.72, 0.80, -0.04)], { smooth: true, capTop: true, capBottom: true });
  // gun shield and the rotor it turns on
  b.set(p, PR.paint).box(0, 0.40, 1.06, 1.04, 0.56, 0.16); b.geo(new THREE.CylinderGeometry(0.2, 0.2, 0.62, 12), M4().makeTranslation(0, 0.40, 1.18).multiply(M4().makeRotationZ(Math.PI / 2)));
  b.cyl([0, 0.40, 1.1], [0, 0.40, 1.52], 0.15, 12, 0.11);
  b.set(C.steel, PR.steel).cyl([0.3, 0.44, 1.14], [0.3, 0.44, 1.5], 0.022, 6);
  // commander's cupola, loader's hatch, ventilator, lifting rings
  b.set(p, PR.paint).cyl([-0.38, 0.78, -0.25], [-0.38, 0.97, -0.25], 0.36, 16); b.cyl([-0.38, 0.97, -0.25], [-0.38, 1.0, -0.25], 0.27, 14);
  for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; b.set(C.black, PR.glass).box(-0.38 + Math.cos(a) * 0.34, 0.92, -0.25 + Math.sin(a) * 0.34, 0.12, 0.05, 0.1, -a); }
  b.set(p, PR.paint).box(0.38, 0.81, -0.2, 0.5, 0.04, 0.56); b.cyl([0, 0.80, -1.15], [0, 0.85, -1.15], 0.15, 10);
  // heavy machine gun on its pintle
  b.set(C.steel, PR.steel).cyl([0.05, 0.80, -0.75], [0.05, 1.18, -0.75], 0.03, 6); b.set(C.black, PR.steel).box(0.05, 1.22, -0.72, 0.09, 0.11, 0.5); b.cyl([0.05, 1.22, -0.5], [0.05, 1.24, 0.5], 0.02, 6); b.box(0.18, 1.2, -0.75, 0.16, 0.14, 0.2);
  // stowage bin and a rolled tarpaulin on the back of the turret
  b.set(p, PR.paint).box(0, 0.36, -1.62, 1.1, 0.34, 0.26); b.set(C.steel, PR.steel).box(0, 0.50, -1.76, 0.12, 0.05, 0.02);
  b.set(C.canvas, PR.worn).cyl([-0.55, 0.64, -1.62], [0.55, 0.64, -1.62], 0.10, 8);
  for (const s of [-1, 1]) b.set(C.steel, PR.steel).box(s * 0.5, 0.78, 0.55, 0.05, 0.07, 0.12);
  // spare track on the turret side, star
  for (let k = 0; k < 4; k++) b.set(C.track, PR.steel).box(0.98, 0.36, -0.55 + k * 0.17, 0.05, 0.34, 0.15);
  b.set(C.white, PR.mark); star(b, -0.985, 0.36, -0.1, 0.19, -1);
  return b.build();
}
function shermanGun() {
  const b = new Builder();
  b.set(SHERMAN.paint, PR.paint).cyl([0, 0, 0.5], [0, 0, 1.9], 0.078, 12, 0.066); b.cyl([0, 0, 1.9], [0, 0, 3.55], 0.066, 12, 0.056);
  b.set(C.steel, PR.worn).cyl([0, 0, 3.55], [0, 0, 3.66], 0.105, 12); b.cyl([0, 0, 3.66], [0, 0, 3.76], 0.07, 10); b.cyl([0, 0, 3.76], [0, 0, 3.9], 0.105, 12);
  b.set(C.black, PR.glass).cyl([0, 0, 3.895], [0, 0, 3.905], 0.04, 8);
  return b.build();
}

// extras fixed to the hull: suspension units that do not turn
function shermanBogies(b) {
  const p = SHERMAN.paint;
  for (const s of [-1, 1]) for (const z of [-1.48, 0, 1.48]) {
    b.set(p, PR.worn).box(s * 1.2, 0.56, z, 0.26, 0.30, 0.5); b.cyl([s * 1.2, 0.62, z - 0.5], [s * 1.2, 0.62, z + 0.5], 0.09, 10);
    b.box(s * 1.2, 0.40, z - 0.3, 0.2, 0.12, 0.5); b.box(s * 1.2, 0.40, z + 0.3, 0.2, 0.12, 0.5);
    b.set(p, PR.worn).box(s * 1.2, 0.88, z, 0.22, 0.14, 0.24);
  }
}

// ---------------------------------------------------------------------------------------------
// Things bolted or strapped to the outside, each its own small mesh so a hit can send it flying.
// pos is where it sits on the hull; on: 'hull' or 'turret'.
// ---------------------------------------------------------------------------------------------
function part(build, pos, on = 'hull') { const b = new Builder(); build(b); const g = b.build(); g.userData.keep = true; return { geo: g, pos, on }; }
function looseParts(spec) {
  const out = []; const p = spec.paint;
  if (spec.name === 'tiger') {
    for (const s of [-1, 1]) {
      for (let k = 0; k < 6; k++) { if ((s > 0 && k === 4) || (s < 0 && k === 1)) continue; out.push(part((b) => b.set(p, PR.worn).box(0, 0, 0, 0.022, 0.40, 1.04), [s * 1.885, 1.03, -2.9 + k * 1.08])); }   // side skirts
      out.push(part((b) => { b.set(C.wood, PR.paint).cyl([0, 0, -0.9], [0, 0, 0.9], 0.03, 6); b.set(C.steel, PR.steel).box(0, 0, 1.0, 0.05, 0.14, 0.22); }, [s * 1.82, 1.60, 0]));           // shovel
      out.push(part((b) => b.set(C.steel, PR.steel).cyl([0, 0, -1.1], [0, 0, 1.1], 0.022, 6), [s * 1.82, 1.42, -1.5]));                                                                     // tow cable
      out.push(part((b) => b.set(p, PR.paint).box(0, 0, 0, 0.36, 0.36, 0.2), [s * 0.42, 1.32, -3.70]));                                                                                    // exhaust cowl
      out.push(part((b) => b.set(p, PR.worn).box(0, 0, 0, 0.74, 0.03, 0.6), [s * 1.5, 1.27, 3.45]));                                                                                       // front mudguard
    }
    out.push(part((b) => { b.set(C.steel, PR.steel).box(0, 0, 0, 0.5, 0.2, 0.3); b.set(C.wood, PR.worn).box(0, -0.14, 0, 0.6, 0.08, 0.36); }, [0.9, 1.97, -3.2]));                          // jack and block
    out.push(part((b) => b.set(C.black, PR.paint).cyl([0, 0, -0.09], [0, 0, 0.09], 0.085, 12), [0, 1.84, 2.75]));                                                                         // headlight
    for (const s of [-1, 1]) for (let k = 0; k < 3; k++) out.push(part((b) => b.set(C.track, PR.steel).box(0, 0, 0, 0.07, 0.36, 0.36), [s * 1.02, 0.50, -1.3 + k * 0.42], 'turret'));
    out.push(part((b) => b.set(p, PR.paint).cyl([0, -0.02, 0], [0, 0.02, 0], 0.33, 14), [0.42, 1.12, -0.35], 'turret'));                                                                   // cupola hatch
  } else {
    for (const s of [-1, 1]) {
      out.push(part((b) => { b.set(p, PR.paint).box(0, 0, 0, 0.30, 0.03, 1.05); b.box(0, -0.075, 0.51, 0.30, 0.16, 0.03); }, [s * 1.42, 0.975, 2.33]));     // front fender
      out.push(part((b) => { b.set(p, PR.paint).box(0, 0, 0, 0.30, 0.03, 1.05); b.box(0, -0.075, -0.51, 0.30, 0.16, 0.03); }, [s * 1.42, 0.975, -2.33]));   // rear fender
      out.push(part((b) => { b.set(C.wood, PR.paint).cyl([0, 0, -0.65], [0, 0, 0.65], 0.028, 6); b.set(C.steel, PR.steel).box(0, 0, 0.75, 0.04, 0.16, 0.24); }, [s * 1.33, 1.5, -1.25]));
    }
    out.push(part((b) => b.set(C.canvas, PR.worn).cyl([-1.05, 0, 0], [1.05, 0, 0], 0.17, 10), [0, 1.92, -2.45]));                                           // tarpaulin
    for (const x of [-0.5, -0.18, 0.14]) out.push(part((b) => b.set(C.odDark, PR.worn).box(0, 0, 0, 0.28, 0.46, 0.16), [x, 1.98, -1.95]));                  // fuel cans
    out.push(part((b) => b.set(C.wood, PR.worn).box(0, 0, 0, 0.5, 0.2, 0.34), [0.75, 1.84, -1.9]));
    out.push(part((b) => b.set([0.14, 0.15, 0.10], PR.worn).cyl([-0.4, 0, 0], [0.4, 0, 0], 0.13, 9), [-0.6, 1.90, -1.55]));                                 // bedrolls
    out.push(part((b) => b.set([0.21, 0.19, 0.13], PR.worn).cyl([-0.38, 0, 0], [0.38, 0, 0], 0.11, 9), [0.52, 1.88, -1.5]));
    out.push(part((b) => b.set(C.odDark, PR.worn).box(0, 0, 0, 0.5, 0.2, 0.28), [-0.85, 1.86, -0.95]));                                                     // ammunition box
    out.push(part((b) => { b.set(C.rubber, PR.rubber).cyl([0, -0.07, 0], [0, 0.07, 0], 0.27, 16); b.set(p, PR.worn).cyl([0, -0.08, 0], [0, 0.09, 0], 0.19, 12); }, [1.0, 1.83, -0.75]));   // spare wheel
    out.push(part((b) => { b.set(p, PR.paint).box(0, 0, 0, 1.1, 0.34, 0.26); b.set(C.canvas, PR.worn).cyl([-0.55, 0.28, 0], [0.55, 0.28, 0], 0.10, 8); }, [0, 0.36, -1.62], 'turret'));      // turret bin
    out.push(part((b) => b.set(p, PR.paint).cyl([0, -0.02, 0], [0, 0.02, 0], 0.26, 14), [-0.38, 1.02, -0.25], 'turret'));
  }
  // generic debris thrown out when the tank blows up: plates, a hatch, a wheel
  const scrap = [
    part((b) => b.set(p, PR.worn).box(0, 0, 0, 0.9, 0.04, 0.6), [0, 0, 0]), part((b) => b.set(p, PR.worn).box(0, 0, 0, 0.5, 0.03, 0.8), [0, 0, 0]),
    part((b) => b.set(C.steel, PR.steel).box(0, 0, 0, 0.35, 0.05, 0.35), [0, 0, 0]), part((b) => b.set(p, PR.worn).cyl([0, -0.03, 0], [0, 0.03, 0], 0.3, 12), [0, 0, 0]),
    part((b) => b.set(C.steel, PR.steel).cyl([-0.4, 0, 0], [0.4, 0, 0], 0.04, 6), [0, 0, 0]),
  ];
  return { fitted: out, scrap };
}

// armour in millimetres and how far each plate leans back from vertical (degrees)
TIGER.armor = { hull: { front: [150, 50], frontLow: [100, 50], side: [80, 25], sideLow: [80, 0], rear: [80, 30], top: [40, 0] }, turret: { front: [180, 10], side: [80, 21], rear: [80, 21], top: [44, 0] }, lowY: 1.02, sideLowY: 1.25 };
TIGER.pen = 200; TIGER.label = 'Tiger'; TIGER.shellSpeed = 185;
SHERMAN.armor = { hull: { front: [63, 47], frontLow: [80, 30], side: [38, 0], sideLow: [38, 0], rear: [38, 10], top: [19, 0] }, turret: { front: [89, 5], side: [63, 5], rear: [63, 0], top: [25, 0] }, lowY: 0.95, sideLowY: 0.95 };
SHERMAN.pen = 250;   // a special high-velocity round: a square hit goes through even the Tiger's front, an angled one still skids off
 SHERMAN.label = 'Sherman'; SHERMAN.shellSpeed = 170;

const cache = {};
export function tankParts(spec, number = 213) {
  const key = spec.name; if (cache[key]) return cache[key];
  let hull, turret, gun;
  if (spec.name === 'tiger') { hull = tigerHull(); turret = tigerTurret(number); gun = tigerGun(); }
  else { const hb = new Builder(); shermanBogies(hb); const extra = hb.build(); hull = mergeGeo(shermanHull(), extra); turret = shermanTurret(); gun = shermanGun(); }
  const parts = { hull, turret, gun, link: linkGeometry(spec), path: trackPath(spec), wheelGeo: { road: wheelGeometry(spec, 'road'), sprocket: wheelGeometry(spec, 'sprocket'), idler: wheelGeometry(spec, 'idler') }, loose: looseParts(spec) };
  for (const g of [hull, turret, gun, parts.link, parts.wheelGeo.road, parts.wheelGeo.sprocket, parts.wheelGeo.idler]) g.userData.keep = true;
  cache[key] = parts; return parts;
}
function mergeGeo(a, b) {
  const g = new THREE.BufferGeometry();
  for (const name of ['position', 'normal', 'aCol', 'aPrm', 'uv']) { const A = a.attributes[name], B = b.attributes[name]; const arr = new Float32Array(A.array.length + B.array.length); arr.set(A.array, 0); arr.set(B.array, A.array.length); g.setAttribute(name, new THREE.BufferAttribute(arr, A.itemSize)); }
  g.computeBoundingSphere(); g.computeBoundingBox(); return g;
}
