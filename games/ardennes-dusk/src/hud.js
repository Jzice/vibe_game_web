import * as THREE from 'three';
import { CFG } from './terrain.js';
import * as PLAN from './roads.js';

const $ = (id) => document.getElementById(id);
const { ROADS, SQUARE, BRIDGES, FORD, HILL } = PLAN;      // FORD and HILL are drawn only if the street plan has them
const _v = new THREE.Vector3();
// The map. The town is painted once, north up, into a hidden canvas at PPM pixels a metre; a house is repainted only when
// pieces of it fall. Each frame the round map copies the patch around the player, turned so that the way you look is up.
const HOUSE_H = Array.from({ length: 16 }, (_, i) => 0.9 + i * 0.7);      // heights at which a house is probed, so floors and roofs fill in its outline
const PPM = 3, TAU = Math.PI * 2;
const BONE = '233,228,214', AMBER = '231,165,60', RED = '221,75,48', DARK = '8,11,15';
// an arrowhead pointing up, turned by rot
function head(c, x, y, rot, s) {
  const cs = Math.cos(rot) * s, sn = Math.sin(rot) * s; c.beginPath();
  [[0, -1.3], [0.9, 0.9], [0, 0.4], [-0.9, 0.9]].forEach(([px, py], i) => { const X = x + px * cs - py * sn, Y = y + px * sn + py * cs; if (i) c.lineTo(X, Y); else c.moveTo(X, Y); }); c.closePath();
}
function ring(c, x, y, r, w, style) { c.beginPath(); c.arc(x, y, Math.max(0.1, r), 0, TAU); c.lineWidth = w; c.strokeStyle = style; c.stroke(); }

// Everything drawn over the battlefield: sight, hull and gun state, kills, the map, and the menus.
export class Hud {
  constructor(game) {
    this.game = game; this.noteT = 0; this.scanT = 0; this.bigT = 0; this.bigOpen = false; this.camYaw = 0; this.hfov = 0.5; this.seen = new Map();
    this.el = { hud: $('hud'), ring: $('ring'), gunmark: $('gunmark'), note: $('note'), hull: $('hull'), hullv: $('hullv'), gun: $('gun'), trackrow: $('trackrow'), track: $('track'), pips: [...$('pips').children], map: $('map'), big: $('bigmap'), keys: $('keys'), menu: $('menu'), end: $('end'), pause: $('pause') };
    this.marks = [0, 1, 2, 3, 4, 5].map(() => { const d = document.createElement('div'); d.className = 'emark'; d.hidden = true; this.el.hud.appendChild(d); return d; });
    this.flash = document.createElement('div'); this.flash.id = 'hitflash'; this.el.hud.appendChild(this.flash);
    this.ctx = this.el.map.getContext('2d'); this.bctx = this.el.big.getContext('2d'); this.mapPx = 0;
    this.ground = document.createElement('canvas'); this.town = document.createElement('canvas');
    // the whole town: hold Tab, or tap the map on a phone
    addEventListener('keydown', (e) => { if (e.code === 'Tab') this.setBig(true); });
    addEventListener('keyup', (e) => { if (e.code === 'Tab') this.setBig(false); });
    addEventListener('blur', () => this.setBig(false));
    addEventListener('resize', () => { this.mapPx = 0; if (this.bigOpen) this._fitBig(); });
    this.el.map.addEventListener('pointerdown', (e) => { e.preventDefault(); this.setBig(!this.bigOpen); });
    this.el.big.addEventListener('pointerdown', (e) => { e.preventDefault(); this.setBig(false); });
  }
  setBig(on) { if (on === this.bigOpen) return; this.bigOpen = on; this.el.big.classList.toggle('on', on); this.el.hud.classList.toggle('planning', on); if (on) { this._fitBig(); this.bigT = 0; } }
  note(text, secs = 2.2) { this.el.note.textContent = text; this.el.note.classList.add('on'); this.noteT = secs; }
  show(state, info) {
    const e = this.el; e.hud.hidden = state === 'menu' || state === 'won' || state === 'lost'; e.menu.hidden = state !== 'menu'; e.end.hidden = !(state === 'won' || state === 'lost'); e.pause.hidden = state !== 'paused';
    if (state === 'playing') setTimeout(() => e.keys.classList.add('gone'), 9000);
    if (state === 'won' || state === 'lost') {
      $('endkicker').textContent = this.game.kills > 0 && this.game.kills >= (this.game.best || 0) ? 'Your best run yet' : 'Your Sherman is burning';
      $('endtitle').textContent = state === 'won' ? 'Mission accomplished' : 'Tank lost';
      const dl = $('endstats'); dl.textContent = '';
      for (const [k, v] of info) { const dt = document.createElement('dt'); dt.textContent = k; const dd = document.createElement('dd'); dd.textContent = v; dl.append(dt, dd); }
    }
  }
  // ---- the town, painted once ----
  _buildTown() {
    const W = this.game.world; this._world = W; this.seen.clear();
    let x0 = 1e9, z0 = 1e9, x1 = -1e9, z1 = -1e9; const grow = (x, z, r = 0) => { x0 = Math.min(x0, x - r); z0 = Math.min(z0, z - r); x1 = Math.max(x1, x + r); z1 = Math.max(z1, z + r); };
    for (const r of ROADS) for (const [x, z] of r.pts) grow(x, z, r.w);
    for (const st of W.structures) if (st.kind !== 'prop') { grow(st.wmin.x, st.wmin.z); grow(st.wmax.x, st.wmax.z); }
    if (HILL) grow(HILL.x, HILL.z, HILL.r);
    x0 -= 10; z0 -= 10; x1 += 10; z1 += 10; const tb = this.tb = { x0, z0, w: x1 - x0, h: z1 - z0 };
    for (const cv of [this.ground, this.town]) { cv.width = Math.ceil(tb.w * PPM); cv.height = Math.ceil(tb.h * PPM); }
    const c = this.ground.getContext('2d'), X = (x) => (x - x0) * PPM, Z = (z) => (z - z0) * PPM, GW = this.ground.width, GH = this.ground.height;
    c.fillStyle = 'rgba(150,170,195,0.07)'; c.fillRect(0, 0, GW, GH);
    // the hill, as contour lines
    if (HILL) for (const k of [1, 0.74, 0.5, 0.26]) ring(c, X(HILL.x), Z(HILL.z), HILL.r * k * PPM, 1.5, `rgba(${BONE},${0.10 + (1 - k) * 0.12})`);
    // the river, its banks, and the ford as a pale dashed crossing
    const rh = (CFG.RIVER_HALF + 1.5) * PPM, rz = Z(CFG.RIVER_Z);
    c.fillStyle = 'rgb(38,70,108)'; c.fillRect(0, rz - rh, GW, rh * 2);
    c.fillStyle = 'rgba(140,180,220,0.45)'; c.fillRect(0, rz - rh, GW, 1.5); c.fillRect(0, rz + rh - 1.5, GW, 1.5);
    if (FORD) { c.fillStyle = 'rgba(150,175,190,0.35)'; c.fillRect(X(FORD.x - FORD.half), rz - rh, FORD.half * 2 * PPM, rh * 2); c.strokeStyle = `rgba(${BONE},0.6)`; c.lineWidth = 2; c.setLineDash([4, 5]); for (const sx of [-1, 1]) { c.beginPath(); c.moveTo(X(FORD.x + sx * FORD.half), rz - rh); c.lineTo(X(FORD.x + sx * FORD.half), rz + rh); c.stroke(); } c.setLineDash([]); }
    // streets: dirt tracks faint, paved streets clear, the square clearest
    c.lineCap = 'round'; c.lineJoin = 'round';
    for (const dirt of [true, false]) for (const r of ROADS) { if (!!r.dirt !== dirt) continue; c.strokeStyle = dirt ? 'rgb(52,54,54)' : 'rgb(92,91,86)'; c.lineWidth = r.w * 2 * PPM; c.beginPath(); r.pts.forEach(([x, z], i) => { if (i) c.lineTo(X(x), Z(z)); else c.moveTo(X(x), Z(z)); }); c.stroke(); }
    c.fillStyle = 'rgb(104,102,96)'; c.fillRect(X(SQUARE.x - SQUARE.hx), Z(SQUARE.z - SQUARE.hz), SQUARE.hx * 2 * PPM, SQUARE.hz * 2 * PPM);
    c.strokeStyle = `rgba(${BONE},0.5)`; c.lineWidth = 1.5; c.strokeRect(X(SQUARE.x - SQUARE.hx), Z(SQUARE.z - SQUARE.hz), SQUARE.hx * 2 * PPM, SQUARE.hz * 2 * PPM);
    // houses, walls and bridge decks, sampled from the real structures
    const t = this.town.getContext('2d'); t.clearRect(0, 0, GW, GH); t.drawImage(this.ground, 0, 0);
    for (const st of W.structures) { if (st.kind === 'prop') continue; this._sample(st, true); this._paint(t, st); }
  }
  // which cells of a structure still have something standing in them, and how tall
  _sample(st, first) {
    if (first) {
      const wall = st.kind === 'wall', step = wall ? 0.5 : 1, hs = st.deck ? [-0.3] : wall ? [0.5] : HOUSE_H, xy = [], n0 = [];
      for (let x = st.wmin.x + step / 2; x < st.wmax.x; x += step) for (let z = st.wmin.z + step / 2; z < st.wmax.z; z += step) { let n = 0; for (const h of hs) if (st.pieceAtWorld(x, st.pos.y + h, z) >= 0) n++; if (n) { xy.push(x, z); n0.push(n); } }
      st._map = { step, hs, wall, xy, n0, n: n0.slice(), alive: st.alive }; return;
    }
    const m = st._map; m.alive = st.alive;
    for (let i = 0; i < m.n.length; i++) { if (!m.n[i]) continue; let n = 0; for (const h of m.hs) if (st.pieceAtWorld(m.xy[i * 2], st.pos.y + h, m.xy[i * 2 + 1]) >= 0) n++; m.n[i] = n; }
  }
  _paint(c, st) {
    const m = st._map, { x0, z0 } = this.tb, s = m.step * PPM;
    for (let i = 0; i < m.n.length; i++) {
      const x = m.xy[i * 2], z = m.xy[i * 2 + 1], n = m.n[i];
      if (n) c.fillStyle = st.deck ? 'rgb(150,147,138)' : m.wall ? `rgba(${BONE},0.5)` : `rgb(${150 + Math.min(n, 5) * 12},${139 + Math.min(n, 5) * 11},${115 + Math.min(n, 5) * 10})`;
      else { if (st.deck || m.wall || (Math.round(x) + Math.round(z)) & 1) continue; c.fillStyle = 'rgba(176,140,100,0.5)'; }       // knocked down: a scatter of rubble
      c.fillRect((x - x0) * PPM - s / 2, (z - z0) * PPM - s / 2, s + 0.5, s + 0.5);
    }
  }
  // look for structures that have lost pieces since they were last painted; repaint just their patch
  _scan() {
    const W = this.game.world, c = this.town.getContext('2d'), { x0, z0 } = this.tb; let done = 0;
    for (const st of W.structures) {
      const m = st._map; if (!m || m.alive === st.alive) continue; this._sample(st, false);
      const rx = Math.floor((st.wmin.x - x0) * PPM) - 2, ry = Math.floor((st.wmin.z - z0) * PPM) - 2, rw = Math.ceil((st.wmax.x - st.wmin.x) * PPM) + 4, rh = Math.ceil((st.wmax.z - st.wmin.z) * PPM) + 4;
      c.save(); c.beginPath(); c.rect(rx, ry, rw, rh); c.clip(); c.clearRect(rx, ry, rw, rh); c.drawImage(this.ground, 0, 0);
      for (const o of W.structures) if (o._map && o.wmin.x < st.wmax.x + 1 && o.wmax.x > st.wmin.x - 1 && o.wmin.z < st.wmax.z + 1 && o.wmax.z > st.wmin.z - 1) this._paint(c, o);
      c.restore(); if (++done >= 5) break;       // the rest wait for the next look
    }
  }

  // ---- what moves ----
  // note when a Tiger first appears and when it fires, so its marker can flash
  _events(dt) {
    for (const a of this.game.ais) { const t = a.tank; let m = this.seen.get(t); if (!m) this.seen.set(t, m = { newT: 5, fireT: 0, pr: t.reload });
      if (t.reload > m.pr + 0.5) m.fireT = 0.9; m.pr = t.reload; m.newT = Math.max(0, m.newT - dt); m.fireT = Math.max(0, m.fireT - dt); }
  }
  // enemy markers. proj turns a world point into canvas pixels; a is the turn of the map; rim, if given, is the circle to pin far markers to.
  _enemies(c, proj, a, u, rim) {
    const g = this.game, p = g.player;
    for (const ai of g.ais) {
      const t = ai.tank, m = this.seen.get(t) || { newT: 0, fireT: 0 }; let [x, y] = proj(t.pos.x, t.pos.z), out = false, ang = 0;
      if (rim) { const dx = x - rim.cx, dy = y - rim.cy; if (Math.hypot(dx, dy) > rim.R - 10 * u) { out = true; ang = Math.atan2(dy, dx); x = rim.cx + Math.cos(ang) * (rim.R - 14 * u); y = rim.cy + Math.sin(ang) * (rim.R - 14 * u); } }
      if (!t.alive) {      // a burning wreck: a dim cross with a flickering glow
        if (out) continue; const f = 0.55 + 0.25 * Math.sin(g.time * 11 + t.pos.x) + 0.2 * Math.sin(g.time * 23 + t.pos.z);
        c.fillStyle = `rgba(${AMBER},${(0.2 + 0.3 * f).toFixed(2)})`; c.beginPath(); c.arc(x, y, 8.5 * u, 0, TAU); c.fill(); c.fillStyle = `rgba(${AMBER},${(0.5 + 0.4 * f).toFixed(2)})`; c.beginPath(); c.arc(x, y, 2.2 * u, 0, TAU); c.fill();
        c.strokeStyle = `rgba(${BONE},0.75)`; c.lineWidth = 1.6 * u; c.beginPath(); c.moveTo(x - 4.5 * u, y - 4.5 * u); c.lineTo(x + 4.5 * u, y + 4.5 * u); c.moveTo(x + 4.5 * u, y - 4.5 * u); c.lineTo(x - 4.5 * u, y + 4.5 * u); c.stroke(); continue;
      }
      if (m.newT > 0) { const f = (5 - m.newT) % 1; ring(c, x, y, (5 + f * 17) * u, 2 * u, `rgba(${RED},${(1 - f).toFixed(2)})`); }
      if (m.fireT > 0) { const f = 1 - m.fireT / 0.9; ring(c, x, y, (4 + f * 22) * u, 2.4 * u, `rgba(255,236,190,${(1 - f).toFixed(2)})`); }
      // in plain view: solid. Out of sight: hollow.
      const seen = ai.canSee, hot = m.fireT > 0.55;
      head(c, x, y, out ? ang + Math.PI / 2 : Math.PI + a - t.yaw, (out ? 6 : 7) * u);
      c.lineJoin = 'round'; c.lineWidth = 3.4 * u; c.strokeStyle = 'rgba(0,0,0,0.8)'; c.stroke();
      c.fillStyle = hot ? '#fff1cf' : seen ? `rgb(${RED})` : `rgb(${DARK})`; c.fill();
      if (!seen && !hot) { c.lineWidth = 1.5 * u; c.strokeStyle = `rgb(${RED})`; c.stroke(); }
      if (out) {      // how far away it is, just inside the arrow
        const d = Math.round(Math.hypot(t.pos.x - p.pos.x, t.pos.z - p.pos.z)), tx = rim.cx + Math.cos(ang) * (rim.R - 33 * u), ty = rim.cy + Math.sin(ang) * (rim.R - 30 * u);
        c.font = `500 ${10 * u}px "IBM Plex Mono", ui-monospace, monospace`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineWidth = 3 * u; c.strokeStyle = 'rgba(0,0,0,0.85)'; c.strokeText(d, tx, ty); c.fillStyle = `rgb(${BONE})`; c.fillText(d, tx, ty);
      }
    }
  }
  // the player: a cone for where the camera looks, the hull, and the gun
  _player(c, x, y, a, u, reach) {
    const p = this.game.player; if (!p) return; const dirOf = (yaw) => Math.PI / 2 - yaw + a;
    if (p.alive) {
      const f = dirOf(this.camYaw), h = this.hfov, gr = c.createRadialGradient(x, y, 0, x, y, reach); gr.addColorStop(0, `rgba(${BONE},0.34)`); gr.addColorStop(1, `rgba(${BONE},0.02)`);
      c.beginPath(); c.moveTo(x, y); c.arc(x, y, reach, f - h, f + h); c.closePath(); c.fillStyle = gr; c.fill();
      c.strokeStyle = `rgba(${BONE},0.30)`; c.lineWidth = u; c.beginPath(); for (const s of [-1, 1]) { c.moveTo(x, y); c.lineTo(x + Math.cos(f + s * h) * reach, y + Math.sin(f + s * h) * reach); } c.stroke();
    }
    c.save(); c.translate(x, y); c.rotate(dirOf(p.yaw) + Math.PI / 2); c.beginPath(); c.moveTo(-5 * u, -4 * u); c.lineTo(0, -9 * u); c.lineTo(5 * u, -4 * u); c.lineTo(5 * u, 7.5 * u); c.lineTo(-5 * u, 7.5 * u); c.closePath();
    c.lineJoin = 'round'; c.lineWidth = 3 * u; c.strokeStyle = 'rgba(0,0,0,0.85)'; c.stroke(); c.fillStyle = p.alive ? `rgb(${BONE})` : '#777'; c.fill(); c.restore();
    const gdir = dirOf(p.yaw + p.turretYaw), gx = x + Math.cos(gdir) * 16 * u, gy = y + Math.sin(gdir) * 16 * u; c.lineCap = 'round';
    c.beginPath(); c.moveTo(x, y); c.lineTo(gx, gy); c.lineWidth = 5 * u; c.strokeStyle = 'rgba(0,0,0,0.85)'; c.stroke(); c.lineWidth = 2.4 * u; c.strokeStyle = p.alive ? `rgb(${AMBER})` : '#999'; c.stroke();
    c.beginPath(); c.arc(x, y, 3.4 * u, 0, TAU); c.fillStyle = p.alive ? `rgb(${AMBER})` : '#999'; c.fill(); c.lineWidth = 1.2 * u; c.strokeStyle = 'rgba(0,0,0,0.85)'; c.stroke();
  }
  // the round map: you in the middle, the way you are looking at the top (75 metres to the rim, 58 on a phone's smaller map)
  _drawMini() {
    const cv = this.el.map, c = this.ctx, p = this.game.player;
    if (!this.mapPx) { const css = cv.clientWidth; if (!css) return; this.u = Math.min(2, devicePixelRatio || 1); this.mapPx = cv.width = cv.height = Math.round(css * this.u); }
    const S = this.mapPx, u = this.u * Math.max(0.8, Math.min(1, S / this.u / 200)), cx = S / 2, cy = S / 2, R = S / 2 - 9 * u, RANGE = S / this.u < 150 ? 58 : 75, k = R / RANGE, a = this.camYaw + Math.PI, ca = Math.cos(a), sa = Math.sin(a), { x0, z0 } = this.tb;
    c.clearRect(0, 0, S, S);
    c.save(); c.beginPath(); c.arc(cx, cy, R, 0, TAU); c.fillStyle = `rgba(${DARK},0.82)`; c.fill(); c.clip();
    // the patch of town around the player
    c.save(); c.translate(cx, cy); c.rotate(a); c.scale(k / PPM, k / PPM); c.translate(-(p.pos.x - x0) * PPM, -(p.pos.z - z0) * PPM);
    { const r = RANGE * PPM + 4, px = (p.pos.x - x0) * PPM, pz = (p.pos.z - z0) * PPM, sx = Math.max(0, Math.floor(px - r)), sy = Math.max(0, Math.floor(pz - r)), ex = Math.min(this.town.width, Math.ceil(px + r)), ey = Math.min(this.town.height, Math.ceil(pz + r));
      if (ex > sx && ey > sy) c.drawImage(this.town, sx, sy, ex - sx, ey - sy, sx, sy, ex - sx, ey - sy); }
    c.restore();
    ring(c, cx, cy, R / 2, u, `rgba(${BONE},0.13)`);
    const proj = (x, z) => { const dx = x - p.pos.x, dz = z - p.pos.z; return [cx + (dx * ca - dz * sa) * k, cy + (dx * sa + dz * ca) * k]; };
    this._player(c, cx, cy, a, u, R * 0.8);
    this._enemies(c, proj, a, u, { cx, cy, R });
    // darken towards the rim so the edge reads as an edge
    { const gr = c.createRadialGradient(cx, cy, R * 0.72, cx, cy, R); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(1, 'rgba(0,0,0,0.42)'); c.fillStyle = gr; c.fillRect(0, 0, S, S); }
    c.restore();
    ring(c, cx, cy, R, 1.5 * u, `rgba(${BONE},0.55)`);
    // north rides on the rim
    { const nx = cx + sa * R, ny = cy - ca * R; c.beginPath(); c.arc(nx, ny, 8 * u, 0, TAU); c.fillStyle = `rgb(${DARK})`; c.fill(); c.lineWidth = 1.2 * u; c.strokeStyle = `rgba(${AMBER},0.9)`; c.stroke();
      c.font = `700 ${11 * u}px "Barlow Condensed", sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = `rgb(${AMBER})`; c.fillText('N', nx, ny + 0.5 * u); }
  }
  // the whole town, north up, for planning a route
  _fitBig() {
    if (!this.tb) return; const cv = this.el.big, u = this.bu = Math.min(2, devicePixelRatio || 1), asp = this.tb.w / this.tb.h;
    const h = Math.min(innerHeight * 0.88, 760, innerWidth * 0.94 / asp), w = h * asp; cv.style.width = w.toFixed(0) + 'px'; cv.style.height = h.toFixed(0) + 'px'; cv.width = Math.round(w * u); cv.height = Math.round(h * u);
  }
  _drawBig() {
    const cv = this.el.big, c = this.bctx, u = this.bu, g = this.game, p = g.player, { x0, z0, w, h } = this.tb, k = cv.width / (w * 1), X = (x) => (x - x0) * k, Z = (z) => (z - z0) * k;
    c.clearRect(0, 0, cv.width, cv.height); c.drawImage(this.town, 0, 0, cv.width, cv.height);
    // a few names, only here
    c.font = `600 ${12 * u}px "Barlow Condensed", sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle'; if ('letterSpacing' in c) c.letterSpacing = (1.6 * u) + 'px';
    const name = (t, x, y) => { c.lineWidth = 3 * u; c.strokeStyle = 'rgba(0,0,0,0.8)'; c.strokeText(t.toUpperCase(), x, y); c.fillStyle = `rgba(${BONE},0.9)`; c.fillText(t.toUpperCase(), x, y); };
    name('Square', X(SQUARE.x), Z(SQUARE.z - SQUARE.hz) - 9 * u); for (const b of BRIDGES) name(b.name, X(b.x), Z(CFG.RIVER_Z) - 20 * u); if (FORD) name('Ford', X(FORD.x), Z(CFG.RIVER_Z) - 20 * u); if (HILL) name('Hill', X(HILL.x), Z(HILL.z));
    if ('letterSpacing' in c) c.letterSpacing = '0px';
    // north, and a 100 metre bar
    { const nx = cv.width - 22 * u, ny = 26 * u; head(c, nx, ny - 2 * u, 0, 7 * u); c.fillStyle = `rgb(${AMBER})`; c.fill(); c.font = `700 ${13 * u}px "Barlow Condensed", sans-serif`; c.fillText('N', nx, ny + 16 * u);
      const bx = 16 * u, by = cv.height - 16 * u; c.strokeStyle = `rgba(${BONE},0.8)`; c.lineWidth = 1.5 * u; c.beginPath(); c.moveTo(bx, by - 4 * u); c.lineTo(bx, by); c.lineTo(bx + 100 * k, by); c.lineTo(bx + 100 * k, by - 4 * u); c.stroke();
      c.font = `500 ${10 * u}px "IBM Plex Mono", ui-monospace, monospace`; c.textAlign = 'left'; c.fillStyle = `rgba(${BONE},0.8)`; c.fillText('100 m', bx + 100 * k + 7 * u, by - 2 * u); }
    const [px, py] = [X(p.pos.x), Z(p.pos.z)]; { const f = (g.time * 0.8) % 1; ring(c, px, py, (8 + f * 22) * u, 2 * u, `rgba(${AMBER},${(0.9 * (1 - f)).toFixed(2)})`); }
    this._player(c, px, py, 0, u, 40 * k); this._enemies(c, (x, z) => [X(x), Z(z)], 0, u, null);
  }
  update(dt) {
    const g = this.game, e = this.el, p = g.player; if (!p) return;
    if (this.noteT > 0) { this.noteT -= dt; if (this.noteT <= 0) e.note.classList.remove('on'); }
    const hp = Math.max(0, p.hp); e.hull.style.width = hp + '%'; e.hull.classList.toggle('low', hp < 35); e.hullv.textContent = Math.round(hp);
    e.hud.classList.toggle('hurt', p.hitFlash > 0);
    const r = p.reload / p.spec.reload; e.ring.style.strokeDashoffset = (213.6 * r).toFixed(1); e.ring.classList.toggle('ready', r <= 0);
    e.gun.textContent = r <= 0 ? 'Loaded' : 'Loading ' + p.reload.toFixed(1) + ' s'; e.gun.classList.toggle('warn', r > 0);
    const tr = Math.max(p.trackOut[0], p.trackOut[1]); e.trackrow.hidden = tr <= 0; if (tr > 0) e.track.textContent = 'Repairing ' + tr.toFixed(0) + ' s';
    // the score: Tigers knocked out this run, and the best run so far
    const dead = g.kills || 0, best = Math.max(g.best || 0, dead);
    if (e.killN !== dead || e.bestN !== best) { e.killN = dead; e.bestN = best; const box = document.getElementById('pips'); box.textContent = '';
      const n = document.createElement('b'); n.textContent = String(dead); box.appendChild(n); const bs = document.createElement('span'); bs.textContent = 'best ' + best; box.appendChild(bs);
      if (dead > 0) { n.classList.remove('bump'); void n.offsetWidth; n.classList.add('bump'); } }
    // the small ring shows where the barrel is actually pointing; the cross is where you are asking it to point
    if (g.gunPoint) { _v.copy(g.gunPoint).project(g.camera); const on = _v.z < 1 && _v.z > -1; e.gunmark.style.opacity = on ? 1 : 0; e.gunmark.style.transform = `translate(${((_v.x * 0.5 + 0.5) * innerWidth).toFixed(1)}px, ${((-_v.y * 0.5 + 0.5) * innerHeight).toFixed(1)}px)`; }
    // a small marker over each Tiger you have a clear view of
    let mi = 0;
    for (const a of g.ais) { const t = a.tank; if (!t.alive || mi >= this.marks.length) continue; const el = this.marks[mi];
      _v.set(t.pos.x, t.pos.y + 3.9, t.pos.z); const dist = _v.distanceTo(g.camera.position); _v.project(g.camera);
      const vis = _v.z < 1 && Math.abs(_v.x) < 1 && Math.abs(_v.y) < 1 && a.canSee;
      el.hidden = !vis; if (vis) { el.style.transform = `translate(${((_v.x * 0.5 + 0.5) * innerWidth).toFixed(1)}px, ${((-_v.y * 0.5 + 0.5) * innerHeight).toFixed(1)}px)`; el.textContent = Math.round(dist) + ' m'; mi++; } }
    for (; mi < this.marks.length; mi++) this.marks[mi].hidden = true;
    this.flash.style.opacity = Math.min(0.75, p.hitFlash * 1.6).toFixed(2);
    // the map: the town is repainted only where something fell; the round map is one turned copy plus the markers
    if (g.world !== this._world) this._buildTown();
    this.scanT -= dt; if (this.scanT <= 0) { this.scanT = 0.3; this._scan(); }
    g.camera.getWorldDirection(_v); this.camYaw = Math.atan2(_v.x, _v.z); this.hfov = Math.atan(Math.tan(g.camera.fov * Math.PI / 360) * g.camera.aspect);
    this._events(dt); this._drawMini();
    if (this.bigOpen) { this.bigT -= dt; if (this.bigT <= 0) { this.bigT = 0.05; this._drawBig(); } }
  }
}
