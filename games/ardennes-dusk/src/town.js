import { MAT } from './structure.js';
import { CFG } from './terrain.js';
import { ROADS, SEGMENTS, SQUARE, BRIDGES, FORD, segDist, walk, HILL, SIDEWALK } from './roads.js';

const CW = 1.0, CH = 0.75;
const SLOT = [[[0, 3], [4, 7]], [[1, 2], [5, 6]]];          // SLOT[xbit][ybit][zbit] -> corner index
function mulberry(a) { return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function hsh(a, b, c) { let n = Math.imul(a + 17, 374761393) ^ Math.imul(b + 31, 668265263) ^ Math.imul(c + 7, 2147483647); n = Math.imul(n ^ (n >>> 13), 1274126177); return ((n ^ (n >>> 16)) >>> 0) / 4294967296; }
const mm = (a, b) => ({ min: [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.min(a[2], b[2])], max: [Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.max(a[2], b[2])] });

// ---------------------------------------------------------------------------------------------
// A wall laid out as a grid of blocks. u runs along the wall, d through its thickness (0 = outside face).
// Block corners are nudged so that holes blown in the wall have ragged edges instead of a neat grid.
// ---------------------------------------------------------------------------------------------
function wallGrid(S, w) {
  const { n, R, u0, len, t, P, bits, out } = w; const ch = w.ch || CH; const jit = w.jit === undefined ? 1 : w.jit;
  const cellOpen = new Map(); const key = (a, r) => a * 1000 + r;
  (w.open || []).forEach((o, k) => { for (let a = o.a0; a <= o.a1; a++) for (let r = o.r0; r <= o.r1; r++) cellOpen.set(key(a, r), k); });
  const isOpen = (a, r) => a >= 0 && a < n && r >= 0 && r < R && cellOpen.has(key(a, r));
  const node = (a, r) => {
    let ju = 0, jv = 0;
    if (a > 0 && a < n && r > 0 && r < R && !isOpen(a - 1, r - 1) && !isOpen(a, r - 1) && !isOpen(a - 1, r) && !isOpen(a, r)) { ju = (hsh(a, r, w.id * 7 + 1) - 0.5) * 0.42 * len * jit; jv = (hsh(a, r, w.id * 7 + 2) - 0.5) * 0.36 * ch * jit; }
    return [u0 + a * len + ju, (w.y0 || 0) + r * ch + jv];
  };
  const pb = (ua, ub, ya, yb, da, db) => mm(P(ua, ya, da), P(ub, yb, db));
  for (let a = 0; a < n; a++) for (let r = 0; r < R; r++) {
    if (isOpen(a, r)) continue;
    const ua = u0 + a * len, ub = ua + len, ya = (w.y0 || 0) + r * ch, yb = ya + ch;
    let clipA = INF, clipB = INF;
    if (w.clip) { clipA = w.clip(ua); clipB = w.clip(ub); if (Math.max(clipA, clipB) < ya + 0.14) continue; }
    const c = new Array(8);
    for (let ubit = 0; ubit < 2; ubit++) for (let ybit = 0; ybit < 2; ybit++) {
      let [u, y] = node(a + ubit, r + ybit);
      if (w.clip && ybit === 1) { const cl = w.clip(u); if (y > cl) y = Math.max(cl, ya + 0.03); }
      for (let dbit = 0; dbit < 2; dbit++) { const [xb, zb] = bits(ubit, dbit); c[SLOT[xb][ybit][zb]] = P(u, y, dbit ? t : 0); }
    }
    const nom = pb(ua, ub, ya, Math.min(yb, Math.max(clipA, clipB)), 0, t);
    const lintel = isOpen(a, r - 1) && !isOpen(a, r);
    const mat = lintel && w.lintel !== undefined ? w.lintel : w.matAt(a, r);
    const decor = w.decorAt ? w.decorAt(a, r, pb, ua, ub, ya, yb) : null;
    S.addPiece({ min: nom.min, max: nom.max, corners: c, mat, tint: lintel && w.lintel !== undefined ? [0.36, 0.35, 0.33] : (w.tintAt ? w.tintAt(a, r) : w.tint), out: (w.corner && (a === 0 || a === n - 1)) ? 'all' : out, inside: w.inside === undefined ? MAT.PLASTER : w.inside, anchor: r === 0 && !!w.ground, decor, snow: w.snow === undefined ? 1 : w.snow });
  }
  // windows and doors fill the openings as their own weak pieces
  for (const o of (w.open || [])) {
    const ua = u0 + o.a0 * len, ub = u0 + (o.a1 + 1) * len, ya = (w.y0 || 0) + o.r0 * ch, yb = (w.y0 || 0) + (o.r1 + 1) * ch;
    if (o.type === 'void') continue;
    const nom = pb(ua, ub, ya, yb, 0, t); const decor = []; const frame = o.frame || [0.42, 0.40, 0.36];
    if (o.type === 'window' || o.type === 'tall') {
      const fw = 0.07;
      decor.push({ ...pb(ua, ub, ya, yb, 0.15, 0.17), mat: MAT.GLASS, lit: o.lit || 0 });
      decor.push({ ...pb(ua, ua + fw, ya, yb, 0.10, 0.22), mat: MAT.TIMBER, tint: frame }, { ...pb(ub - fw, ub, ya, yb, 0.10, 0.22), mat: MAT.TIMBER, tint: frame });
      decor.push({ ...pb(ua, ub, ya, ya + fw, 0.10, 0.22), mat: MAT.TIMBER, tint: frame }, { ...pb(ua, ub, yb - fw, yb, 0.10, 0.22), mat: MAT.TIMBER, tint: frame });
      const um = (ua + ub) / 2;
      decor.push({ ...pb(um - 0.022, um + 0.022, ya, yb, 0.12, 0.20), mat: MAT.TIMBER, tint: frame });
      const bars = o.type === 'tall' ? [0.25, 0.5, 0.75] : [0.62];
      for (const f of bars) { const ym = ya + (yb - ya) * f; decor.push({ ...pb(ua, ub, ym - 0.022, ym + 0.022, 0.12, 0.20), mat: MAT.TIMBER, tint: frame }); }
      decor.push({ ...pb(ua - 0.08, ub + 0.08, ya - 0.09, ya, -0.10, 0.26), mat: MAT.STONE, tint: [0.36, 0.35, 0.33] });
      if (o.shutter) {
        decor.push({ ...pb(ua - 0.50, ua - 0.03, ya, yb, -0.065, -0.012), mat: MAT.TIMBER, tint: o.shutter });
        decor.push({ ...pb(ub + 0.03, ub + 0.50, ya, yb, -0.065, -0.012), mat: MAT.TIMBER, tint: o.shutter });
      }
    } else if (o.type === 'door') {
      const col = o.color || [0.5, 0.7, 0.45];
      decor.push({ ...pb(ua + 0.06, ub - 0.06, ya, yb - 0.06, 0.16, 0.23), mat: MAT.TIMBER, tint: col });
      decor.push({ ...pb(ua, ua + 0.07, ya, yb, 0.08, 0.26), mat: MAT.TIMBER, tint: frame }, { ...pb(ub - 0.07, ub, ya, yb, 0.08, 0.26), mat: MAT.TIMBER, tint: frame }, { ...pb(ua, ub, yb - 0.07, yb, 0.08, 0.26), mat: MAT.TIMBER, tint: frame });
      decor.push({ ...pb(ua - 0.12, ub + 0.12, ya, ya + 0.15, -0.42, 0.0), mat: MAT.STONE, tint: [0.34, 0.33, 0.31] });
      decor.push({ ...pb(ub - 0.24, ub - 0.18, ya + 1.0, ya + 1.12, 0.12, 0.16), mat: MAT.METAL, tint: [2.5, 2.2, 1.4] });
    }
    S.addPiece({ min: nom.min, max: nom.max, hidden: true, mat: o.type === 'door' ? MAT.TIMBER : MAT.GLASS, tint: [1, 1, 1], sup: 0, tough: o.type === 'door' ? 0.5 : 1, decor, lit: o.lit || 0, light: true });
  }
}
const INF = 1e9;

// timber floor: boards on top, plaster ceiling below
function floor(S, x0, x1, z0, z1, y, nx, nz, opts = {}) {
  const lx = (x1 - x0) / nx, lz = (z1 - z0) / nz;
  for (let i = 0; i < nx; i++) for (let k = 0; k < nz; k++) {
    if (opts.skip && opts.skip(i, k)) continue;
    S.addPiece({ min: [x0 + i * lx, y - 0.22, z0 + k * lz], max: [x0 + (i + 1) * lx, y, z0 + (k + 1) * lz], mat: MAT.TIMBER, tint: opts.tint || [1, 1, 1], out: [1, 1], inside: MAT.PLASTER, snow: 0, anchor: false });
  }
}

// pitched roof with the ridge along x. Slates on battens; snow lies on it.
function gableRoof(S, o) {
  const { x0, x1, z0, z1, H, pitch, nx } = o; const ov = o.ov === undefined ? 0.35 : o.ov, th = 0.16;
  const cp = Math.cos(pitch), sp = Math.sin(pitch), half = (z1 - z0) / 2, L = (half + ov) / cp, ns = Math.max(2, Math.round(L / 1.0)), ls = L / ns;
  const lx = (x1 - x0) / nx; const gx = o.gov === undefined ? 0.28 : o.gov;
  for (const side of [0, 1]) {
    const pt = (x, s, top) => { const zz = side === 0 ? z0 + s * cp : z1 - s * cp; const nz = side === 0 ? -sp : sp; return [x, H + 0.02 + s * sp + (top ? th * cp : 0), zz + (top ? th * nz : 0)]; };
    const nodeJ = (i, j) => (i > 0 && i < nx && j > 0 && j < ns) ? [(hsh(i, j, o.id * 13 + side) - 0.5) * 0.36, (hsh(i, j, o.id * 13 + side + 5) - 0.5) * 0.34] : [0, 0];
    for (let i = 0; i < nx; i++) for (let j = 0; j < ns; j++) {
      const xa = x0 + i * lx - (i === 0 ? gx : 0), xb = x0 + (i + 1) * lx + (i === nx - 1 ? gx : 0), sa = -ov + j * ls, sb = sa + ls;
      const c = new Array(8); const all = [];
      for (let xbit = 0; xbit < 2; xbit++) for (let sbit = 0; sbit < 2; sbit++) {
        const [jx, js] = nodeJ(i + xbit, j + sbit);
        for (let top = 0; top < 2; top++) { const p = pt((xbit ? xb : xa) + jx, (sbit ? sb : sa) + js, top); c[SLOT[xbit][top][side === 0 ? sbit : 1 - sbit]] = p; all.push(pt(xbit ? xb : xa, sbit ? sb : sa, top)); }
      }
      const mn = [INF, INF, INF], mx = [-INF, -INF, -INF]; for (const p of all) for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], p[k]); mx[k] = Math.max(mx[k], p[k]); }
      const nrm = [0, cp, side === 0 ? -sp : sp]; const mid = pt((xa + xb) / 2, (sa + sb) / 2, 0); const d0 = nrm[1] * (mid[1] + th * cp / 2) + nrm[2] * (mid[2] + th * nrm[2] / 2);
      const vol = (xb - xa) * ls * th, box = (mx[0] - mn[0]) * (mx[1] - mn[1]) * (mx[2] - mn[2]);
      const decor = [];
      if (j === ns - 1 && side === 0) { const ry = H + 0.02 + half * Math.tan(pitch); decor.push({ min: [xa, ry + th * cp - 0.05, (z0 + z1) / 2 - 0.17], max: [xb, ry + th * cp + 0.14, (z0 + z1) / 2 + 0.17], mat: MAT.SLATE, tint: [0.7, 0.7, 0.7] }); }
      if (j === 0) { const e = pt(0, -ov, 0); decor.push({ min: [xa, e[1] - 0.10, e[2] + (side === 0 ? -0.10 : 0.0)], max: [xb, e[1] + 0.02, e[2] + (side === 0 ? 0.0 : 0.10)], mat: MAT.METAL, tint: [1.2, 1.2, 1.3] }); }
      S.addPiece({ min: mn, max: mx, corners: c, mat: MAT.SLATE, tint: o.tint || [1, 1, 1], out: [1, 1], inside: MAT.SLATE, anchor: false, plane: [nrm[0], nrm[1], nrm[2], d0, th / 2], fill: vol / box, decor });
    }
  }
  return { ridgeY: H + 0.02 + half * Math.tan(pitch) };
}

// ---------------------------------------------------------------------------------------------
// Town house: masonry walls, timber floors, a partition wall, slate roof, chimney
// ---------------------------------------------------------------------------------------------
export function buildHouse(world, o) {
  const S = world.newStructure({ name: o.name, kind: 'house', x: o.x, z: o.z, yaw: o.yaw });
  const W = o.W, D = o.D, st = o.storeys, R = st * 4, Wm = W * CW, Dm = D * CW, H = R * CH, T = 0.5;
  const rand = mulberry(o.seed); const pitch = (o.pitch || 47) * Math.PI / 180, tanP = Math.tan(pitch);
  const plinth = o.mat !== MAT.STONE; const litP = o.lit === undefined ? 0.1 : o.lit;
  const matAt = (a, r) => (plinth && r === 0 ? MAT.STONE : o.mat);
  const tintAt = (a, r) => (plinth && r === 0 ? [0.30, 0.295, 0.28] : o.tint);
  const roofUnder = (z) => H + 0.0 + Math.min(z, Dm - z) * tanP;
  const doorA = o.doorA === undefined ? (Math.floor(W / 2) | 1) : o.doorA;
  const win = (a, s, extra = {}) => ({ a0: a, a1: a, r0: s * 4 + 1, r1: s * 4 + 2, type: 'window', lit: rand() < litP ? 0.5 + rand() * 0.5 : 0, shutter: o.shutter, frame: o.frame, ...extra });
  const frontOpen = [{ a0: doorA, a1: doorA, r0: 0, r1: 2, type: 'door', color: o.door, frame: o.frame }], backOpen = [];
  for (let s = 0; s < st; s++) for (let a = 1; a < W - 1; a += 2) { if (!(s === 0 && a === doorA)) frontOpen.push(win(a, s)); if (rand() < 0.7) backOpen.push(win(a, s, { shutter: null })); }
  const nS = D - 1, lenS = (Dm - 2 * T) / nS; const sideOpen = [[], []];
  for (let k = 0; k < 2; k++) for (let s = 0; s < st; s++) for (const a of [1, nS - 2]) if (a > 0 && a < nS - 1 && rand() < (o.sideWin === undefined ? 0.6 : o.sideWin)) sideOpen[k].push(win(a, s, { shutter: null }));
  const downpipe = (a, r, pb, ua, ub, ya, yb) => (a === 0 ? [{ ...pb(ua + 0.20, ua + 0.29, ya, yb, -0.11, -0.02), mat: MAT.METAL, tint: [1.2, 1.2, 1.3] }] : null);
  const base = { R, t: T, matAt, tintAt, tint: o.tint, ground: true, corner: true };
  wallGrid(S, { ...base, id: 1, n: W, u0: 0, len: CW, P: (u, y, d) => [u, y, d], bits: (ub, db) => [ub, db], out: [2, -1], open: frontOpen, decorAt: downpipe });
  wallGrid(S, { ...base, id: 2, n: W, u0: 0, len: CW, P: (u, y, d) => [u, y, Dm - d], bits: (ub, db) => [ub, 1 - db], out: [2, 1], open: backOpen });
  const gR = R + Math.ceil((Dm / 2 * tanP) / CH);
  wallGrid(S, { ...base, id: 3, n: nS, R: gR, u0: T, len: lenS, P: (u, y, d) => [d, y, u], bits: (ub, db) => [db, ub], out: [0, -1], open: sideOpen[0], clip: roofUnder });
  wallGrid(S, { ...base, id: 4, n: nS, R: gR, u0: T, len: lenS, P: (u, y, d) => [Wm - d, y, u], bits: (ub, db) => [1 - db, ub], out: [0, 1], open: sideOpen[1], clip: roofUnder });

  // floors and a partition wall on every storey
  const nfx = W - 1, nfz = D - 1, flx = (Wm - 2 * T) / nfx, flz = (Dm - 2 * T) / nfz;
  for (let s = 1; s <= st; s++) floor(S, T, Wm - T, T, Dm - T, s * 3.0, nfx, nfz);
  const pk = Math.max(2, Math.round(nfx * (0.4 + rand() * 0.25))), xp = T + pk * flx, gapK = Math.floor(nfz / 2);
  const wallTint = [0.50 + rand() * 0.1, 0.46 + rand() * 0.06, 0.38 + rand() * 0.08];
  for (let s = 0; s < st; s++) for (let k = 0; k < nfz; k++) for (let r = 0; r < 4; r++) {
    if (k === gapK && r < 3) continue;
    const hh = (3.0 - 0.22) / 4, y0 = s * 3.0 + r * hh;
    S.addPiece({ min: [xp - 0.12, y0, T + k * flz], max: [xp + 0.12, y0 + hh, T + (k + 1) * flz], mat: MAT.PLASTER, tint: wallTint, out: [0, 1], inside: MAT.PLASTER, snow: 0, anchor: s === 0 && r === 0 });
  }
  for (let s = 0; s < st; s++) {
    const y = s * 3.0, wood = [0.9 + rand() * 0.4, 0.8 + rand() * 0.3, 0.7 + rand() * 0.3], cloth = [[0.5, 0.18, 0.15], [0.2, 0.3, 0.45], [0.45, 0.42, 0.3], [0.25, 0.4, 0.25]][Math.floor(rand() * 4)];
    const put = (x0, z0, sx, sy, sz, mat, tint, yy = 0) => { if (x0 < T + 0.1 || x0 + sx > Wm - T - 0.1 || z0 < T + 0.1 || z0 + sz > Dm - T - 0.1 || (x0 < xp + 0.2 && x0 + sx > xp - 0.2)) return; S.addPiece({ min: [x0, y + yy, z0], max: [x0 + sx, y + yy + sy, z0 + sz], mat, tint, out: 'all', anchor: s === 0 && yy === 0, snow: 0, tough: 0.5, light: true }); };
    const side = rand() < 0.5;
    // a table with two chairs, a wardrobe against the back wall, a bed or a stove, a shelf
    const tx = side ? T + 1.2 : xp + 1.0, tz = T + 1.6 + rand() * 1.5;
    put(tx, tz, 1.4, 0.72, 0.8, MAT.TIMBER, wood); put(tx - 0.55, tz + 0.2, 0.42, 0.85, 0.42, MAT.TIMBER, wood); put(tx + 1.5, tz + 0.2, 0.42, 0.85, 0.42, MAT.TIMBER, wood);
    put(side ? xp + 0.5 : T + 0.3, Dm - T - 0.7, 1.3, 1.9, 0.55, MAT.TIMBER, [wood[0] * 0.7, wood[1] * 0.7, wood[2] * 0.7]);
    if (s > 0) { const bx = side ? xp + 2.2 : T + 2.0; put(bx, Dm - T - 2.1, 1.0, 0.45, 1.9, MAT.TIMBER, wood); put(bx, Dm - T - 2.1, 1.0, 0.18, 1.9, MAT.PLASTER, cloth, 0.45); }
    else { put(side ? xp + 2.4 : T + 2.2, Dm - T - 0.75, 0.7, 0.9, 0.6, MAT.METAL, [0.9, 0.9, 1.0]); put(Wm - T - 1.6, T + 0.3, 1.2, 1.5, 0.35, MAT.TIMBER, wood); }
    put(Wm - T - 0.5, Dm / 2 - 0.6, 0.35, 1.1, 1.2, MAT.TIMBER, wood);
  }
  const roof = gableRoof(S, { id: o.seed, x0: 0, x1: Wm, z0: 0, z1: Dm, H, pitch, nx: W, tint: o.roof });
  // chimney up through the roof beside a gable wall
  const cz = Dm / 2 + (rand() < 0.5 ? -1.4 : 1.2), cx = rand() < 0.5 ? T : Wm - T - 0.7;
  for (let y = H; y < roof.ridgeY + 0.9; y += 0.75) S.addPiece({ min: [cx, y, cz - 0.35], max: [cx + 0.7, y + 0.75, cz + 0.35], mat: MAT.BRICK, tint: [0.8, 0.8, 0.8], out: 'all', anchor: false });
  let capIdx; { const y = H + Math.ceil((roof.ridgeY + 0.9 - H) / 0.75) * 0.75; capIdx = S.addPiece({ min: [cx - 0.08, y, cz - 0.43], max: [cx + 0.78, y + 0.12, cz + 0.43], mat: MAT.STONE, tint: [0.34, 0.33, 0.31], out: 'all', anchor: false }); }
  world.addStructure(S); S.info = { W: Wm, D: Dm, H: roof.ridgeY };
  { const p = S.P[capIdx]; S.chimney = { piece: capIdx, lit: rand() < 0.6, pos: S.toWorld(p.cx, p.max[1] + 0.2, p.cz, { x: 0, y: 0, z: 0 }) }; }
  return S;
}

// ---------------------------------------------------------------------------------------------
// Church: stone nave with a tall tower and spire at one end
// ---------------------------------------------------------------------------------------------
export function buildChurch(world, o) {
  const S = world.newStructure({ name: 'church', kind: 'church', x: o.x, z: o.z, yaw: o.yaw || 0 });
  const T = 0.75, L = 16, Wd = 9, R = 10, H = R * CH, tint = [1.0, 0.98, 0.94], pitch = 54 * Math.PI / 180, tanP = Math.tan(pitch);
  const mat = () => MAT.STONE; const base = { t: T, matAt: mat, tint, ground: true, inside: MAT.PLASTER, lintel: MAT.STONE, corner: true };
  const tall = (a) => ({ a0: a, a1: a, r0: 3, r1: 7, type: 'tall', lit: a === 7 ? 0.5 : 0, frame: [0.12, 0.12, 0.13] });
  const sideOpen = [2, 5, 8, 11, 13].map(tall);
  const roofUnder = (z) => H + Math.min(z, Wd - z) * tanP;
  wallGrid(S, { ...base, id: 11, n: L, R, u0: 0, len: 1, P: (u, y, d) => [u, y, d], bits: (ub, db) => [ub, db], out: [2, -1], open: sideOpen });
  wallGrid(S, { ...base, id: 12, n: L, R, u0: 0, len: 1, P: (u, y, d) => [u, y, Wd - d], bits: (ub, db) => [ub, 1 - db], out: [2, 1], open: [2, 5, 8, 11, 13].map(tall) });
  const nS = 8, lenS = (Wd - 2 * T) / nS, gR = R + Math.ceil(Wd / 2 * tanP / CH);
  wallGrid(S, { ...base, id: 13, n: nS, R: gR, u0: T, len: lenS, P: (u, y, d) => [L - d, y, u], bits: (ub, db) => [1 - db, ub], out: [0, 1], clip: roofUnder, open: [{ a0: 3, a1: 4, r0: 4, r1: 8, type: 'tall', frame: [0.12, 0.12, 0.13] }] });
  wallGrid(S, { ...base, id: 14, n: nS, R: gR, u0: T, len: lenS, P: (u, y, d) => [d, y, u], bits: (ub, db) => [db, ub], out: [0, -1], clip: roofUnder, open: [{ a0: 3, a1: 4, r0: 0, r1: 3, type: 'void' }] });
  gableRoof(S, { id: 77, x0: 0, x1: L, z0: 0, z1: Wd, H, pitch, nx: L, tint: [0.9, 0.95, 1.0], gov: 0.1 });
  // tower: 5 m square, in front of the west gable
  const TW = 5, tx0 = -TW, tz0 = (Wd - TW) / 2, TR = 24, TH = TR * CH;
  const tb = { ...base, R: TR, jit: 0.8 };
  const belfry = (a) => ({ a0: a, a1: a, r0: 19, r1: 21, type: 'void' });
  wallGrid(S, { ...tb, id: 21, n: TW, u0: tx0, len: 1, P: (u, y, d) => [u, y, tz0 + d], bits: (ub, db) => [ub, db], out: [2, -1], open: [belfry(2), { a0: 2, a1: 2, r0: 9, r1: 11, type: 'tall', frame: [0.12, 0.12, 0.13] }] });
  wallGrid(S, { ...tb, id: 22, n: TW, u0: tx0, len: 1, P: (u, y, d) => [u, y, tz0 + TW - d], bits: (ub, db) => [ub, 1 - db], out: [2, 1], open: [belfry(2), { a0: 2, a1: 2, r0: 9, r1: 11, type: 'tall', frame: [0.12, 0.12, 0.13] }] });
  const tn = 4, tl = (TW - 2 * T) / tn;
  wallGrid(S, { ...tb, id: 23, n: tn, u0: tz0 + T, len: tl, P: (u, y, d) => [tx0 + d, y, u], bits: (ub, db) => [db, ub], out: [0, -1], open: [{ a0: 1, a1: 2, r0: 19, r1: 21, type: 'void' }, { a0: 1, a1: 2, r0: 0, r1: 3, type: 'door', color: [0.75, 0.5, 0.3], frame: [0.2, 0.2, 0.2] }] });
  wallGrid(S, { ...tb, id: 24, n: tn, u0: tz0 + T, len: tl, P: (u, y, d) => [tx0 + TW - d, y, u], bits: (ub, db) => [1 - db, ub], out: [0, 1], open: [{ a0: 1, a1: 2, r0: 19, r1: 21, type: 'void' }, { a0: 1, a1: 2, r0: 0, r1: 3, type: 'void' }] });
  for (const y of [6.0, 12.0, TH - 0.02]) floor(S, tx0 + T, tx0 + TW - T, tz0 + T, tz0 + TW - T, y, 3, 3);
  // spire: four leaning faces closing to a point
  const sh = 9.5, lv = 7, cxm = tx0 + TW / 2, czm = tz0 + TW / 2, th = 0.2;
  const hw = (k) => (TW / 2 + 0.25) * (1 - k / lv) + 0.06;
  for (let k = 0; k < lv; k++) {
    const y0 = TH + k * sh / lv, y1 = TH + (k + 1) * sh / lv, a0 = hw(k), a1 = hw(k + 1);
    for (let f = 0; f < 4; f++) for (let hseg = 0; hseg < 2; hseg++) {
      // each face is split left/right so a hit can take out half of it
      const r = (lx, lz) => { const c = [1, 0, -1, 0][f], s = [0, 1, 0, -1][f]; return [cxm + lx * c - lz * s, czm + lx * s + lz * c]; };
      const l0 = hseg === 0 ? -a0 : 0, l1 = hseg === 0 ? 0 : a0, m0 = hseg === 0 ? -a1 : 0, m1 = hseg === 0 ? 0 : a1;
      const pts = [];
      const add = (lx, lz, y) => { const [x, z] = r(lx, lz); pts.push([x, y, z]); };
      add(l0, -a0, y0); add(l1, -a0, y0); add(l1, -a0 + th, y0); add(l0, -a0 + th, y0);
      add(m0, -a1, y1); add(m1, -a1, y1); add(m1, -a1 + th, y1); add(m0, -a1 + th, y1);
      const mn = [INF, INF, INF], mx = [-INF, -INF, -INF]; for (const p of pts) for (let q = 0; q < 3; q++) { mn[q] = Math.min(mn[q], p[q]); mx[q] = Math.max(mx[q], p[q]); }
      // corner order depends on which way the face looks
      const c = new Array(8); const cx = (mn[0] + mx[0]) / 2, cz = (mn[2] + mx[2]) / 2;
      const order = f === 0 ? [0, 1, 2, 3, 4, 5, 6, 7] : f === 1 ? [3, 0, 1, 2, 7, 4, 5, 6] : f === 2 ? [2, 3, 0, 1, 6, 7, 4, 5] : [1, 2, 3, 0, 5, 6, 7, 4];
      for (let q = 0; q < 8; q++) c[q] = pts[order[q]];
      const outAxis = f % 2 === 0 ? [2, f === 0 ? -1 : 1] : [0, f === 1 ? 1 : -1];
      S.addPiece({ min: mn, max: mx, corners: c, mat: MAT.SLATE, tint: [0.85, 0.9, 1.0], out: outAxis, inside: MAT.SLATE, anchor: false, fill: 0.25, lat: 0.5 });
    }
  }
  S.addPiece({ min: [cxm - 0.06, TH + sh - 0.3, czm - 0.06], max: [cxm + 0.06, TH + sh + 1.5, czm + 0.06], mat: MAT.METAL, tint: [1.5, 1.4, 1.0], out: 'all', anchor: false, decor: [{ min: [cxm - 0.45, TH + sh + 0.85, czm - 0.05], max: [cxm + 0.45, TH + sh + 0.97, czm + 0.05], mat: MAT.METAL, tint: [1.5, 1.4, 1.0] }] });
  world.addStructure(S); S.info = { W: L + TW, D: Wd, H: TH + sh };
  return S;
}

// ---------------------------------------------------------------------------------------------
// Stone bridge: two arches over the river. The road surface is the top of its pieces.
// ---------------------------------------------------------------------------------------------
export function buildBridge(world, bx = 0, name = 'bridge') {
  const B = { ...CFG.BRIDGE, x: bx }; const Lm = B.z1 - B.z0, nz = Math.round(Lm), lz = Lm / nz, nxc = 4, lx = B.width / nxc, rows = 8, bottom = -6.0;
  const S = world.newStructure({ name, kind: 'bridge', x: B.x - B.width / 2, z: B.z0, yaw: 0, limit: 3.0, deck: true });
  const zones = [[3.4, 12.6], [14.9, 24.1]];                       // the two arch openings along the bridge
  const intrados = (z) => { for (const [a, b] of zones) if (z > a && z < b) { const c = (a + b) / 2, h = (b - a) / 2; return -4.0 + 2.75 * Math.sqrt(Math.max(0, 1 - ((z - c) / h) ** 2)); } return bottom; };
  for (let k = 0; k < nz; k++) for (let r = 0; r < rows; r++) {
    const z0 = k * lz, z1 = z0 + lz, y1 = -r * CH, y0 = y1 - CH;
    const b0 = Math.max(y0, intrados(z0 + 1e-3)), b1 = Math.max(y0, intrados(z1 - 1e-3));
    if (Math.min(b0, b1) > y1 - 0.1) continue;
    const bz0 = Math.min(b0, y1 - 0.05), bz1 = Math.min(b1, y1 - 0.05);
    const inPier = intrados((z0 + z1) / 2) <= bottom + 1e-6;
    for (let i = 0; i < nxc; i++) {
      const x0 = i * lx, x1 = x0 + lx;
      const jz = (kk, rr) => (kk > 0 && kk < nz && rr > 0 && inPier) ? (hsh(kk, rr, 91 + i) - 0.5) * 0.3 : 0;
      const c = [[x0, bz0, z0 + jz(k, r + 1)], [x1, bz0, z0 + jz(k, r + 1)], [x1, bz1, z1 + jz(k + 1, r + 1)], [x0, bz1, z1 + jz(k + 1, r + 1)], [x0, y1, z0 + jz(k, r)], [x1, y1, z0 + jz(k, r)], [x1, y1, z1 + jz(k + 1, r)], [x0, y1, z1 + jz(k + 1, r)]];
      const bank = z0 < 2.0 || z1 > Lm - 2.0;
      S.addPiece({ min: [x0, Math.min(bz0, bz1), z0], max: [x1, y1, z1], corners: c, mat: MAT.STONE, tint: [0.92, 0.9, 0.86], out: 'all', anchor: bank || (inPier && r === rows - 1), lat: 0.5, tough: 1.5, fill: 0.85 });
    }
    // parapet stones along both edges
    if (r === 0) for (const side of [0, 1]) {
      const x0 = side === 0 ? -0.22 : B.width - 0.18;
      S.addPiece({ min: [x0, 0, z0], max: [x0 + 0.4, 0.85, z1], mat: MAT.STONE, tint: [0.92, 0.9, 0.86], out: 'all', anchor: false, sup: 0, tough: 0.8,
        decor: [{ min: [x0 - 0.05, 0.85, z0], max: [x0 + 0.45, 0.97, z1], mat: MAT.STONE, tint: [0.8, 0.79, 0.76] }] });
    }
  }
  world.addStructure(S); return S;
}

// free-standing stone wall, low enough to drive through
export function buildWall(world, x0, z0, x1, z1, h = 1.2) {
  const len = Math.hypot(x1 - x0, z1 - z0), n = Math.max(1, Math.round(len)), yaw = Math.atan2(-(z1 - z0), x1 - x0);
  const S = world.newStructure({ name: 'wall', kind: 'wall', x: x0, z: z0, yaw });
  wallGrid(S, { id: 31 + Math.floor(x0 * 3 + z0), n, R: 2, u0: 0, len: len / n, ch: h / 2, t: 0.45, P: (u, y, d) => [u, y, d], bits: (ub, db) => [ub, db], out: 'all', matAt: () => MAT.STONE, tint: [0.95, 0.93, 0.9], ground: true, inside: MAT.STONE,
    decorAt: (a, r, pb, ua, ub, ya, yb) => (r === 1 ? [{ ...pb(ua, ub, yb, yb + 0.1, -0.05, 0.5), mat: MAT.STONE, tint: [0.8, 0.79, 0.76] }] : null) });
  world.addStructure(S); return S;
}

// ---------------------------------------------------------------------------------------------
// The whole town, grown along the street plan: houses line both sides of every street wherever they
// fit, facing the road, so bends in the streets become bends in the rows of houses.
// ---------------------------------------------------------------------------------------------
export function buildTown(world) {
  const rand = mulberry(1944);
  const stucco = [[0.52, 0.47, 0.37], [0.50, 0.37, 0.20], [0.50, 0.36, 0.32], [0.40, 0.42, 0.44], [0.56, 0.55, 0.51], [0.37, 0.42, 0.34], [0.46, 0.41, 0.31], [0.34, 0.39, 0.44], [0.48, 0.44, 0.40]];
  const trims = [[0.35, 0.8, 0.45], [0.4, 0.6, 1.1], [1.3, 0.35, 0.25], [0.9, 0.7, 0.5], [0.25, 0.5, 0.3], [1.2, 1.2, 1.1], null, null];
  const houses = [], foot = [];           // foot: placed footprints as { cx, cz, r, corners }
  const sqClear = (x, z, m) => Math.abs(x - SQUARE.x) < SQUARE.hx + m && Math.abs(z - SQUARE.z) < SQUARE.hz + m;
  // nothing is built on a street or on its pavement
  const roadClear = (x, z) => { for (const s of SEGMENTS) if (segDist(x, z, s) < s[4] + (s[5] ? 0.7 : SIDEWALK + 0.1)) return false; return true; };
  const tryHouse = (px, pz, tx, tz, side, W, D, opts = {}) => {
    // n points from the road into the plot; the front wall sits just back from the kerb
    const nx = -tz * side, nz = tx * side; const c = nz, sn = nx, yaw = Math.atan2(nx, nz);
    const setback = opts.setback === undefined ? 0.5 : opts.setback;
    const fx = px + nx * (opts.half + setback), fz = pz + nz * (opts.half + setback);
    const ox = fx - (W / 2) * c, oz = fz + (W / 2) * sn;           // origin corner: local x runs along the front
    const P = (lx, lz) => [ox + lx * c + lz * sn, oz - lx * sn + lz * c];
    // reject plots that touch a street, the square, the river, the edge of the map, or another house
    for (let lx = -0.1; lx <= W + 0.1; lx += 1.0) for (let lz = 0.3; lz <= D + 0.1; lz += 1.0) {
      const [x, z] = P(lx, lz);
      if (!roadClear(x, z) || sqClear(x, z, SIDEWALK + 0.1) || z < -11.5 || Math.abs(x) > 140 || z > 152) return false;
      if (Math.hypot(x - HILL.x, z - HILL.z) < HILL.r + 1.5) return false;
      for (const b of BRIDGES) if (Math.abs(x - b.x) < 6 && z < -8) return false;
      if (Math.abs(x - FORD.x) < 12 && z < -6) return false;
      for (const h of foot) { if (Math.hypot(x - h.cx, z - h.cz) > h.r + 1) continue; const dx = x - h.ox, dz = z - h.oz, lx2 = dx * h.c - dz * h.s, lz2 = dx * h.s + dz * h.c; if (lx2 > -0.2 && lx2 < h.W + 0.2 && lz2 > -0.2 && lz2 < h.D + 0.2) return false; }
    }
    const [cx, cz] = P(W / 2, D / 2); foot.push({ cx, cz, r: Math.hypot(W, D) / 2 + 1, ox, oz, c, s: sn, W, D });
    const roll = rand(); const mat = roll < 0.50 ? MAT.STUCCO : roll < 0.78 ? MAT.BRICK : MAT.STONE;
    const tint = mat === MAT.STUCCO ? stucco[Math.floor(rand() * stucco.length)] : mat === MAT.BRICK ? [0.9 + rand() * 0.2, 0.9 + rand() * 0.1, 0.88 + rand() * 0.14] : [0.95 + rand() * 0.08, 0.95, 0.9 + rand() * 0.06];
    const trim = trims[Math.floor(rand() * trims.length)], door = trims[Math.floor(rand() * 5)];
    houses.push(buildHouse(world, { name: 'house' + houses.length, x: ox, z: oz, yaw, W, D, storeys: rand() < 0.36 ? 3 : 2, mat, tint, shutter: mat === MAT.BRICK && rand() < 0.5 ? null : trim, door, seed: 200 + houses.length * 7, lit: 0.22, frame: mat === MAT.BRICK ? [0.5, 0.49, 0.45] : undefined, pitch: 43 + rand() * 9 }));
    return true;
  };
  const church = buildChurch(world, { x: 12.5, z: 76.5 }); foot.push({ cx: 18, cz: 81, r: 17, ox: 6.5, oz: 75.5, c: 1, s: 0, W: 23, D: 11 });
  // Houses stand in rows: along each straight stretch of street, on both sides, front walls on one line at the back of
  // the pavement, side by side, with a gap wide enough for a tank every few houses.
  for (const road of ROADS) {
    if (road.dirt && road.name !== 'north') continue;
    const setback = road.dirt ? 0.5 : SIDEWALK + 0.15;
    for (let si = 0; si < road.pts.length - 1; si++) {
      const [ax, az] = road.pts[si], [bx, bz] = road.pts[si + 1]; const len = Math.hypot(bx - ax, bz - az), tx = (bx - ax) / len, tz = (bz - az) / len;
      for (const side of [-1, 1]) {
        const D = rand() < 0.5 ? 7 : 8; let d = 1.5 + rand() * 2, run = 0, runMax = 3 + Math.floor(rand() * 3);
        while (d < len - 5) {
          const W = Math.min(8 + Math.floor(rand() * 5), Math.floor(len - 1 - d)); if (W < 7) break;
          const px = ax + tx * (d + W / 2), pz = az + tz * (d + W / 2);
          if (road.name === 'north' && (pz > -52 || pz < -78)) { d += 4; continue; }            // just a farm or two beyond the bridge
          if (tryHouse(px, pz, tx, tz, side, W, D, { half: road.w, setback })) { d += W + 0.05; if (++run >= runMax) { d += 4.8; run = 0; runMax = 3 + Math.floor(rand() * 3); } }
          else { d += 1.5; run = 0; }
        }
      }
    }
  }
  // round the square: north and west sides get a terrace each; the church stands on the south-east
  const bridges = BRIDGES.map((b) => buildBridge(world, b.x, b.name));
  const walls = [];
  // river wall along the quay, broken for the bridges and the ford
  const gaps = [...BRIDGES.map((b) => [b.x - 3.6, b.x + 3.6]), [FORD.x - 9, FORD.x + 9]].sort((a, b) => a[0] - b[0]); let x = -140;
  for (const [g0, g1] of gaps) { if (g0 - x > 3) walls.push(buildWall(world, x, -21.0, g0, -21.0, 1.1)); x = g1; }
  walls.push(buildWall(world, x, -21.0, 140, -21.0, 1.1));
  walls.push(buildWall(world, 7.0, 87.6, 29.0, 87.6, 1.4), buildWall(world, 29.0, 87.6, 29.0, 76.0, 1.4));            // churchyard
  return { houses, church, bridge: bridges[0], bridges, walls };
}
