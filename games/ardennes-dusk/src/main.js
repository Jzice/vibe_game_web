import * as THREE from 'three';
import { createRenderer, createShared, createSky, setupLighting, Frame, QUALITY } from './render.js';
import { CFG, terrainH, GroundMarks, makeGroundMaterial, buildGround, buildRiver } from './terrain.js';
import { makeStructureMaterial, makeDebrisMaterial, makeRubbleMaterial, makeSteelMaterial } from './materials.js';
import { World } from './world.js';
import { buildTown } from './town.js';
import { FX } from './fx.js';
import { Tank, Combat, LooseParts } from './tank.js';
import { SHERMAN, TIGER } from './tankModels.js';
import { Nav, EnemyAI } from './ai.js';
import { Props, Forest } from './props.js';
import { Audio } from './audio.js';
import { Hud } from './hud.js';
import { Lobby } from './lobby.js';
import { Radio } from './radio.js';

const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const canvas = document.getElementById('c');
let renderer;
try { renderer = createRenderer(canvas); if (!renderer.capabilities.isWebGL2) throw new Error('no WebGL 2'); }
catch (e) { const l = document.getElementById('load'); if (l) l.textContent = 'This game needs a recent browser with 3D graphics switched on. Try the latest Chrome, Edge, Firefox or Safari on a computer.'; throw e; }
// which graphics card is this? Built-in laptop graphics start one level down, so the first seconds are not a slideshow
const gpuName = (() => { try { const gl = renderer.getContext(), e = gl.getExtension('WEBGL_debug_renderer_info'); return String(e ? gl.getParameter(e.UNMASKED_RENDERER_WEBGL) : ''); } catch (e) { return ''; } })();
const startQ = /swiftshader|llvmpipe|software|basic render/i.test(gpuName) ? 'low' : (/intel|uhd graphics|hd graphics|iris|mali|adreno|powervr|radeon\(tm\) graphics|vega/i.test(gpuName) && !/\barc\b/i.test(gpuName)) ? 'medium' : 'high';
const shared = createShared();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, 1, 0.2, 1800);
camera.layers.enable(1);            // layer 1 is everything that must not show up in the ground's mirror image
const frame = new Frame(renderer, canvas, shared);

let saved = {}; try { saved = JSON.parse(localStorage.getItem('ardennes') || '{}'); } catch (e) { saved = {}; }
const save = () => { try { localStorage.setItem('ardennes', JSON.stringify(saved)); } catch (e) { /* storage may be blocked */ } };
const coarse = matchMedia('(pointer: coarse)').matches;
let qName = QUALITY[saved.q] ? saved.q : (coarse && startQ === 'high' ? 'medium' : startQ);

const game = {
  scene, shared, camera, renderer, time: 0, state: 'menu', tanks: [], player: null, ais: [], battle: null, trauma: 0, gunPoint: new THREE.Vector3(),
  shake(a) { this.trauma = Math.min(1.2, this.trauma + a); },
  onCollapse(x, y, z, mass, n) { this.radio?.collapse(x, z, n); if (n > 25) { this.marks.stamp(2, x, z, Math.random() * 6, 10 + Math.min(14, n * 0.06), 10 + Math.min(14, n * 0.06), 0.8, Math.random() * 30); if (this.player && Math.hypot(this.player.pos.x - x, this.player.pos.z - z) < 30) this.shake(Math.min(0.6, n * 0.004)); } },
  onTankDestroyed(tank, how) {
    if (tank.isPlayer) { this.endT = 3.2; this.result = 'lost'; return; }
    this.kills++; tank.diedAt = this.clock;
    // every kill buys the crew a moment to patch the tank up
    const p = this.player; if (p && p.alive) p.hp = Math.min(100, p.hp + 18);
    setTimeout(() => this.hud.note(how === 'fall' ? 'Tiger lost with the bridge' : `Tiger destroyed · ${this.kills}`, 3.5), 900);
    this.nav.wrecks.push({ x: tank.pos.x, z: tank.pos.z }); this.nav._inflate(); for (const a of this.ais) a.pathT = 0;
  },
};
window.__game = game;
game.audio = new Audio(); game.audio.load();
game.radio = new Radio(game); game.radio.load();
scene.add(createSky(shared));
const lights = setupLighting(renderer, scene, shared); game.lights = lights;
game.marks = new GroundMarks(renderer); shared.uMarks.value = game.marks.rt.texture;
const groundMat = makeGroundMaterial(shared);
{ const g0 = buildGround(groundMat); g0.layers.set(1); scene.add(g0); const rv = buildRiver(shared); rv.layers.set(1); scene.add(rv); }
game.fx = new FX(game);
game.hud = new Hud(game);
const mats = { structure: makeStructureMaterial(shared), debris: makeDebrisMaterial(shared), rubble: makeRubbleMaterial(shared), plain: makeSteelMaterial(shared, { plain: true }) };

// The Tigers never stop coming. These are the roads they come in by; each new one picks a road away from the player.
// The longer you last, the sooner the next arrives, the more are in the town at once, and the better their crews.
const WAVES = [
  { t: 3, x: 0.5, z: -138, yaw: 0, number: 213, skill: 0.8, from: 'the north road' },
  { t: 28, x: 143, z: 66.3, yaw: -Math.PI / 2, number: 214, flank: 0.9, skill: 0.9, from: 'the east road' },
  { t: 55, x: -60, z: -95, yaw: -0.9, number: 221, flank: -0.8, skill: 1.0, from: 'the ford', via: [[-93, -62], [-96, -34], [-96, -14]] },
  { t: 66, x: -144, z: 61.4, yaw: Math.PI / 2, number: 222, flank: -1.3, skill: 1.1, from: 'the west road' },
  { t: 96, x: 64, z: -114, yaw: 0.6, number: 231, flank: 1.2, skill: 1.2, from: 'the east bridge', via: [[88, -70], [86, -48], [86, -16]] },
  { t: 0, x: 0, z: 157, yaw: Math.PI, number: 232, flank: 1.0, skill: 1.2, from: 'the south road' },
];
game.endless = true; game.enemyTotal = Infinity; game.best = saved.best || 0;

// ---------------------------------------------------------------------------------------------
// A battle: the town, the tanks, everything that can be destroyed. Built fresh each time.
// ---------------------------------------------------------------------------------------------
function newBattle() {
  if (game.battle) {
    scene.remove(game.battle);
    game.battle.traverse((o) => { if (o.geometry && !o.geometry.userData.keep) o.geometry.dispose(); });
    game.fx.smoke.n = 0; game.fx.glow.n = 0; game.fx.fires.length = 0;
    const r = renderer; r.setRenderTarget(game.marks.rt); r.setClearColor(0x000000, 0); r.clear(); r.setRenderTarget(null); r.setClearColor(0x000000, 1);
  }
  game.battle = new THREE.Group(); scene.add(game.battle);
  const world = new World(game, mats); game.world = world;
  game.battle.add(world.debris.mesh); { const rm = world.rubble.buildMesh(mats.rubble); rm.layers.set(1); game.battle.add(rm); const gp = world.rubble.buildGroundPatch(groundMat); gp.layers.set(1); game.battle.add(gp); }
  game.town = buildTown(world);
  game.nav = new Nav(world);
  if (!game.forest) { game.forest = new Forest(mats.plain, game.nav); scene.add(game.forest.mesh); game.forestTrees = game.nav.trees; } else { game.nav.trees = game.forestTrees; game.forest.reset(); }
  game.props = new Props(game);
  game.nav.rebuildAll();
  game.combat = new Combat(game); game.loose = new LooseParts(game);
  game.tanks = []; game.ais = []; if (game.lobby) game.lobby.resetRun(); game.kills = 0; game.shots = 0; game.clock = 0; game.wave = 0; game.nextSpawn = 3; game.lastKillT = 0; game._k = 0; game.endT = 0; game.result = null; game.trauma = 0;
  // start tucked in behind the houses on the west side of the square, out of sight of the bridge road
  game.player = new Tank(game, SHERMAN, { team: 0, player: true, x: -13, z: 66, yaw: Math.PI * 0.62 });
  // hooded driving lights: enough to see the street ahead, and they catch the rain
  { const hl = new THREE.SpotLight(new THREE.Color(1.0, 0.86, 0.62), 2200, 95, 0.52, 0.7, 2); hl.position.set(0, 1.35, 2.7); hl.target.position.set(0, 0.2, 24); game.player.root.add(hl, hl.target); game.player.headlight = hl;
    for (const sx of [-0.95, 0.95]) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color(9, 7, 4), fog: false })); m.position.set(sx, 1.52, 2.22); game.player.root.add(m); } }
  game.tanks.push(game.player); game.radio.reset();
  cam.yaw = Math.PI * 0.62; cam.pitch = -0.06; cam.dist = 11;
}
function spawnWave(n) {
  // the first few come by the roads in order; after that, by whichever road is furthest from the player and clear
  const p = game.player.pos; let w = WAVES[n % WAVES.length];
  if (n >= 5) { let best = -1; for (const c of WAVES) { let d = Math.hypot(c.x - p.x, c.z - p.z) * (0.6 + Math.random() * 0.8); for (const t of game.tanks) if (Math.hypot(t.pos.x - c.x, t.pos.z - c.z) < 14) d = 0; if (c === game.lastEntry) d *= 0.5; if (d > best) { best = d; w = c; } } }
  if (Math.hypot(w.x - p.x, w.z - p.z) < 45) w = WAVES.reduce((a, c) => Math.hypot(c.x - p.x, c.z - p.z) > Math.hypot(a.x - p.x, a.z - p.z) ? c : a);
  game.lastEntry = w;
  const t = new Tank(game, TIGER, { team: 1, x: w.x, z: w.z, yaw: w.yaw, number: 201 + ((n * 7) % 130) }); game.tanks.push(t);
  game.ais.push(new EnemyAI(game, t, { skill: Math.min(1.75, 0.8 + n * 0.055), gx: p.x, gz: p.z, via: w.via, flank: n ? (n % 2 ? 1 : -1) * (0.7 + Math.random() * 0.7) : 0 }));
  // burnt-out wrecks are towed off after a while so the streets do not fill up for good
  const dead = game.tanks.filter((x) => !x.isPlayer && !x.alive).sort((a, b) => (a.diedAt || 0) - (b.diedAt || 0));
  while (dead.length > 6) { const x = dead.shift(); game.battle.remove(x.root); if (x.turret.parent === game.battle) game.battle.remove(x.turret); if (x.fires) for (const f of x.fires) f.life = Math.min(f.life, f.t + 1);
    game.tanks.splice(game.tanks.indexOf(x), 1); const ai = game.ais.findIndex((a) => a.tank === x); if (ai >= 0) game.ais.splice(ai, 1);
    const wi = game.nav.wrecks.findIndex((k) => Math.hypot(k.x - x.pos.x, k.z - x.pos.z) < 0.5); if (wi >= 0) { game.nav.wrecks.splice(wi, 1); game.nav.rebuildAll(); } }
  game.hud.note(`Tiger coming in by ${w.from}`, 4); game.radio.arrive(w);
}

// ---------------------------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------------------------
const keys = new Set(); const input = { fire: false, zoom: false, mx: 0, my: 0, stickX: 0, stickY: 0, touchFire: false, touchZoom: false };
const cam = { yaw: Math.PI, pitch: -0.06, dist: 11, fov: 55 };
addEventListener('keydown', (e) => {
  if (e.target && e.target.tagName === 'INPUT') { if (e.code === 'Enter' && game.state === 'menu') { e.target.blur(); start(); } return; }      // typing a call sign is not driving
  if (e.code === 'Tab' || e.code === 'Space') e.preventDefault(); keys.add(e.code);
  if (e.code === 'KeyM') game.audio.setMuted(!game.audio.muted);
  if (e.code === 'KeyP' || e.code === 'Escape') { if (game.state === 'playing') setState('paused'); else if (game.state === 'paused') resume(); }
  if (e.code === 'Enter' && game.state === 'menu') start();
});
addEventListener('keyup', (e) => keys.delete(e.code));
addEventListener('blur', () => keys.clear());
const locked = () => document.pointerLockElement === canvas;
// Capturing the mouse is the normal way to aim. Where the browser refuses it, aim with the free cursor instead:
// moving the mouse turns the view, and resting it at a screen edge keeps turning.
let lockOK = true; const edge = { x: 0.5, y: 0.5 };
function reqLock() {
  if (coarse || !lockOK) return;
  try { const p = canvas.requestPointerLock?.(); if (p && p.catch) p.catch(() => { lockOK = false; }); } catch (e) { lockOK = false; }
  setTimeout(() => { if (!locked() && game.state === 'playing') lockOK = false; }, 700);
}
canvas.addEventListener('mousedown', (e) => {
  if (game.state !== 'playing') return;
  if (!locked() && lockOK && !coarse) { reqLock(); return; }
  if (e.button === 0) input.fire = true; if (e.button === 2) input.zoom = true;
});
addEventListener('mouseup', (e) => { if (e.button === 0) input.fire = false; if (e.button === 2) input.zoom = false; });
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
addEventListener('mousemove', (e) => { if (locked()) { input.mx += e.movementX; input.my += e.movementY; } else if (!lockOK && !coarse && game.state === 'playing') { input.mx += e.movementX * 1.4; input.my += e.movementY * 1.4; edge.x = e.clientX / innerWidth; edge.y = e.clientY / innerHeight; } });
document.addEventListener('pointerlockchange', () => { if (!locked() && game.state === 'playing' && !coarse && !game.noPause && lockOK) setState('paused'); });
// touch: left stick drives, dragging anywhere else aims
if (coarse) {
  document.getElementById('touch').hidden = false;
  document.querySelector('.how').innerHTML = '<li><b>Drive</b> left stick</li><li><b>Aim</b> drag the screen</li><li><b>Fire</b> button</li><li><b>Zoom</b> button</li>';
  const stick = document.getElementById('stick'), knob = stick.firstElementChild; let sid = null;
  const sm = (e) => { const r = stick.getBoundingClientRect(); const x = clamp((e.clientX - r.left) / r.width * 2 - 1, -1, 1), y = clamp((e.clientY - r.top) / r.height * 2 - 1, -1, 1); input.stickX = x; input.stickY = -y; knob.style.transform = `translate(${x * 34}px, ${y * 34}px)`; };
  stick.addEventListener('pointerdown', (e) => { sid = e.pointerId; stick.setPointerCapture(sid); sm(e); });
  stick.addEventListener('pointermove', (e) => { if (e.pointerId === sid) sm(e); });
  const se = () => { sid = null; input.stickX = input.stickY = 0; knob.style.transform = ''; }; stick.addEventListener('pointerup', se); stick.addEventListener('pointercancel', se);
  const hold = (id, key) => { const b = document.getElementById(id); b.addEventListener('pointerdown', (e) => { e.preventDefault(); input[key] = true; }); const up = () => { input[key] = false; }; b.addEventListener('pointerup', up); b.addEventListener('pointercancel', up); b.addEventListener('pointerleave', up); };
  hold('tfire', 'touchFire'); let zoomOn = false; document.getElementById('tzoom').addEventListener('pointerdown', (e) => { e.preventDefault(); zoomOn = !zoomOn; input.touchZoom = zoomOn; });
  const drags = new Map();
  canvas.addEventListener('pointerdown', (e) => drags.set(e.pointerId, [e.clientX, e.clientY]));
  canvas.addEventListener('pointermove', (e) => { const d = drags.get(e.pointerId); if (!d) return; input.mx += (e.clientX - d[0]) * 2.2; input.my += (e.clientY - d[1]) * 2.2; d[0] = e.clientX; d[1] = e.clientY; });
  const de = (e) => drags.delete(e.pointerId); canvas.addEventListener('pointerup', de); canvas.addEventListener('pointercancel', de);
}

// ---------------------------------------------------------------------------------------------
// States
// ---------------------------------------------------------------------------------------------
function setState(s, info) { game.state = s; game.hud.show(s, info); document.documentElement.style.cursor = s === 'playing' ? 'none' : '';      // no mouse arrow over the battle
  if (s !== 'playing' && locked()) document.exitPointerLock?.(); }
function start() { game.audio.start(); newBattle(); setState('playing'); reqLock(); }
function resume() { setState('playing'); reqLock(); }
function finish() {
  const w = game.world; const standing = w.structures.reduce((a, s) => a + s.alive, 0), total = w.structures.reduce((a, s) => a + s.total, 0);
  const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  game.lobby.submit({ kills: game.kills, time: game.clock, shots: game.shots, q: qName });
  const record = game.kills > game.best; if (record) { game.best = game.kills; saved.best = game.best; save(); }
  setState(game.result, [['Tigers destroyed', String(game.kills)], ['Your best', String(game.best) + (record ? '  · new record' : '')], ['Time', mmss(game.clock)], ['Shells fired', String(game.shots)], ['Town still standing', Math.round(standing / total * 100) + '%']]);
}
document.getElementById('start').addEventListener('click', start);
document.getElementById('again').addEventListener('click', start);
document.getElementById('resume').addEventListener('click', resume);
const qBtn = document.getElementById('quality');
function applyQuality(n, keep) { qName = n; if (!keep) { saved.q = n; save(); } qBtn.textContent = 'Quality: ' + n; frame.resize(QUALITY[n], camera, lights.sun); game.fx.setRain(QUALITY[n].rain); }
qBtn.addEventListener('click', () => { const o = ['low', 'medium', 'high']; applyQuality(o[(o.indexOf(qName) + 1) % 3]); });
addEventListener('resize', () => frame.resize(QUALITY[qName], camera, lights.sun));

// ---------------------------------------------------------------------------------------------
// Camera and aiming
// ---------------------------------------------------------------------------------------------
const dir = new THREE.Vector3(), pivot = new THREE.Vector3(), camPos = new THREE.Vector3(), aimPoint = new THREE.Vector3(), eye = new THREE.Vector3(), mpos = new THREE.Vector3(), mdir = new THREE.Vector3(), rayOut = {};
const ctrl = { throttle: 0, steer: 0, aimYaw: Math.PI, aimPitch: 0, fire: false };
function castAim(ox, oy, oz, dx, dy, dz, max, out) {
  let best = max; const r = game.world.raycast(ox, oy, oz, dx, dy, dz, max, 0.5, rayOut); if (r) best = r.t;
  for (const t of game.tanks) { if (t.isPlayer) continue; const h = t.hitTest(ox, oy, oz, ox + dx * max, oy + dy * max, oz + dz * max); if (h && h.t * max < best) best = h.t * max; }
  return out.set(ox + dx * best, oy + dy * best, oz + dz * best);
}
function updateCamera(dt) {
  const p = game.player; const zoom = input.zoom || input.touchZoom || keys.has('ShiftLeft') || keys.has('ShiftRight');
  const sens = 0.0021 * Math.min(1, cam.fov / 55);
  if (!lockOK && !coarse) { if (edge.x < 0.05) input.mx -= 520 * dt; else if (edge.x > 0.95) input.mx += 520 * dt; }
  cam.yaw = wrap(cam.yaw - input.mx * sens); cam.pitch = clamp(cam.pitch - input.my * sens, -0.42, 0.5); input.mx = input.my = 0;
  const wide = camera.aspect < 1 ? 82 : (camera.aspect < 1.4 ? 64 : 55);      // a tall phone screen needs a wider lens to see the street
  cam.fov += ((zoom ? wide * 0.38 : wide) - cam.fov) * Math.min(1, dt * 9);
  dir.set(Math.sin(cam.yaw) * Math.cos(cam.pitch), Math.sin(cam.pitch), Math.cos(cam.yaw) * Math.cos(cam.pitch));
  pivot.set(p.pos.x, p.pos.y + 3.2, p.pos.z);
  // pull the camera in when a wall is behind it
  let want = zoom ? 0.01 : 10.5; const r = zoom ? null : game.world.raycast(pivot.x, pivot.y + 0.8, pivot.z, -dir.x, -dir.y * 0.3, -dir.z, want + 0.6, 0.3, rayOut); if (r) want = Math.max(4.2, r.t - 0.6);
  cam.dist += (want - cam.dist) * Math.min(1, dt * (want < cam.dist ? 14 : 4));
  if (zoom) camPos.copy(p.turretWorld(eye)).addScaledVector(dir, 1.9).add(new THREE.Vector3(0, 0.75, 0));
  else camPos.copy(pivot).addScaledVector(dir, -cam.dist).add(new THREE.Vector3(0, 0.8 + Math.max(0, -cam.pitch) * 2 + Math.max(0, 10.5 - cam.dist) * 0.42, 0));
  const gh = game.world.groundH(camPos.x, camPos.z) + 0.5; if (camPos.y < gh) camPos.y = gh;
  game.trauma = Math.max(0, game.trauma - dt * 1.6); const sh = game.trauma * game.trauma * 0.35, t = game.time * 40;
  camera.position.set(camPos.x + Math.sin(t * 1.3) * sh, camPos.y + Math.sin(t * 1.7 + 1) * sh, camPos.z + Math.sin(t * 1.1 + 2) * sh);
  camera.lookAt(camPos.x + dir.x * 50, camPos.y + dir.y * 50, camPos.z + dir.z * 50); camera.rotateZ(Math.sin(t) * sh * 0.02);
  if (Math.abs(camera.fov - cam.fov) > 0.01) { camera.fov = cam.fov; camera.updateProjectionMatrix(); }
  camera.updateMatrixWorld();
  // what the sight is on, and the turret angle that would hit it
  const skip = zoom ? 1 : cam.dist + 3.5;
  castAim(camPos.x + dir.x * skip, camPos.y + dir.y * skip, camPos.z + dir.z * skip, dir.x, dir.y, dir.z, 450, aimPoint);
  p.turretWorld(eye); const ex = aimPoint.x - eye.x, ey = aimPoint.y - eye.y, ez = aimPoint.z - eye.z, hd = Math.hypot(ex, ez), tof = hd / p.spec.shellSpeed;
  ctrl.aimYaw = Math.atan2(ex, ez); ctrl.aimPitch = Math.atan2(ey + 0.5 * 9.81 * tof * tof, Math.max(hd, 0.5));
  // where the barrel points right now
  p.muzzle(mpos, mdir); castAim(mpos.x, mpos.y, mpos.z, mdir.x, mdir.y, mdir.z, 300, game.gunPoint);
}
function attractCamera(dt, focus) {
  const a = game.time * 0.04 + 0.6, r = focus ? 26 : 78, h = focus ? 11 : 30; const fx = focus ? focus.x : 0, fz = focus ? focus.z : 36;
  camera.position.set(fx + Math.sin(a) * r, h, fz + Math.cos(a) * r); camera.lookAt(fx, focus ? 2 : 5, fz);
  if (camera.fov !== 50) { camera.fov = 50; camera.updateProjectionMatrix(); } camera.updateMatrixWorld();
}

// ---------------------------------------------------------------------------------------------
// Frame
// ---------------------------------------------------------------------------------------------
// stoves are lit in some of the houses: thin smoke from each chimney that is still standing
let chimAcc = 0;
function chimneys(dt) {
  chimAcc += dt * 7; if (chimAcc < 1) return; chimAcc -= 1;
  for (const s of game.world.structures) { const c = s.chimney; if (!c || !c.lit || !s.P[c.piece].alive || Math.random() > 0.5) continue;
    game.fx.smoke.emit({ x: c.pos.x, y: c.pos.y, z: c.pos.z, vx: 0.5 + (Math.random() - 0.5) * 0.3, vy: 0.9 + Math.random() * 0.5, vz: 0.2 + (Math.random() - 0.5) * 0.3, life: 5 + Math.random() * 4, s0: 0.25, s1: 2.2 + Math.random() * 1.4, r: 0.36, g: 0.37, b: 0.40, a: 0.16, drag: 0.15, grav: -0.12, kind: 0 }); }
}
// the rest of the battle, out beyond the hills: gun flashes on the cloud base, the thump arriving seconds later
let farT = 4; const farQ = [];
function distantGuns(dt) {
  farT -= dt;
  if (farT <= 0) { farT = 1.2 + Math.random() * Math.random() * 11; const a = (Math.random() - 0.5) * 3.0, k = 0.25 + Math.random() * 0.55, n = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) farQ.push({ t: i * (0.07 + Math.random() * 0.16), a: a + (Math.random() - 0.5) * 0.12, k: k * (0.6 + Math.random() * 0.6) });
    if (k > 0.45) game.audio.play('explosion_ground', null, { own: true, gain: 0.07 + k * 0.14, rate: 0.42 + Math.random() * 0.18, delay: 1.4 + Math.random() * 2.6, wet: 0.9 }); }
  for (let i = farQ.length - 1; i >= 0; i--) { const q = farQ[i]; q.t -= dt; if (q.t > 0) continue; farQ.splice(i, 1);
    const c = camera.position; game.fx.glow.emit({ x: c.x + Math.sin(q.a) * 175, y: 2 + Math.random() * 9, z: c.z - Math.cos(q.a) * 175, life: 0.16 + Math.random() * 0.16, s0: 26 + Math.random() * 22, s1: 50, r: 1.5 * q.k, g: 0.8 * q.k, b: 0.36 * q.k, a: 1, kind: 1 }); }
}
function step(dt) {
  game.time += dt; shared.uTime.value = game.time;
  const st = game.state, W = game.world;
  if (st === 'playing' || st === 'won' || st === 'lost' || st === 'ending') {
    const p = game.player; const live = st === 'playing';
    if (live) {
      game.clock += dt;
      // enemies arrive one after another, sooner if the last one is already dead
      if (!game.spawnOff) { const n = game.wave, aliveN = game.ais.reduce((a, x) => a + (x.tank.alive ? 1 : 0), 0);
        const maxAlive = Math.min(5, 1 + Math.floor(n / 3)), gap = Math.max(10, 30 - n * 1.5);
        if ((game.clock >= game.nextSpawn && aliveN < maxAlive) || (n > 0 && aliveN === 0 && game.clock > game.lastKillT + 4)) { spawnWave(game.wave++); game.nextSpawn = game.clock + gap; } }
      updateCamera(dt); lights.follow(p.pos.x, p.pos.z);
      ctrl.throttle = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0) + input.stickY;
      ctrl.steer = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0) + input.stickX;
      const wantFire = input.fire || input.touchFire || keys.has('Space');
      ctrl.fire = wantFire && p.alive;
      p.update(dt, ctrl);
    } else { p.update(dt, { throttle: 0, steer: 0 }); attractCamera(dt, p.alive ? null : p.pos); }
    for (const ai of game.ais) { const c = live || st !== 'paused' ? ai.update(dt) : ai.ctrl; ai.tank.update(dt, c); }
    for (const t of game.tanks) if (t.alive && Math.abs(t.speed) > 0.4) { const f = t.forward, sg = Math.sign(t.speed); if (game.forest.disturb(t.pos.x + f.x * t.spec.halfL * sg, t.pos.z + f.z * t.spec.halfL * sg, t.spec.halfW, f.x * sg, f.z * sg, game.fx)) t.speed *= 0.8; }
    game.combat.update(dt); game.loose.update(dt);
    W.update(dt); game.props.update(dt, game.time); game.forest.update(dt, game.fx); game.nav.update(4); chimneys(dt);
    if (game.endT > 0 && live) { game.endT -= dt; if (game.endT <= 0) finish(); }
    if (live && game.kills > (game._k || 0)) { game._k = game.kills; game.lastKillT = game.clock; }
    game.hud.update(dt);
    let near = 0; for (const a of game.ais) if (a.tank.alive) near = Math.max(near, 0.10 / (1 + a.tank.pos.distanceTo(p.pos) / 40) * (0.4 + Math.abs(a.tank.throttle)));
    let fireG = 0; for (const f of game.fx.fires) fireG = Math.max(fireG, 0.9 * f.size / (1 + f.pos.distanceTo(camera.position) / 14));
    game.radio.update(dt); game.audio.listen(camera); game.audio.frame(dt, { throttle: live ? p.throttle : 0, speed: p.speed, alive: p.alive, rumble: W.rumble, rumblePos: W.rumblePos, enemyNear: near, fire: Math.min(0.8, fireG), turret: live ? Math.min(1, Math.abs(p.turretYaw - (game._ty || 0)) / dt / 0.5) : 0 }); game._ty = p.turretYaw;
    // the player's lights and the latest flash also light the rain
    { const lp = shared.uLampPos.value, lc = shared.uLampCol.value; if (p.alive && p.headlight) { p.local(0, 1.3, 9, lp[6]); lc[6].set(1.0, 0.86, 0.62).multiplyScalar(26); } else lc[6].set(0, 0, 0);
      const fl = game.fx.lastFlash; if (fl && fl.t < fl.dur) { lp[7].copy(fl.pos); lc[7].set(fl.c[0], fl.c[1], fl.c[2]).multiplyScalar(fl.i * 0.06 * Math.pow(1 - fl.t / fl.dur, 2)); } else lc[7].set(0, 0, 0); if (p.headlight) p.headlight.intensity = p.alive ? 2200 : 0; }
  } else if (st === 'menu') {
    attractCamera(dt, null); if (W) { W.update(dt); game.props.update(dt, game.time); chimneys(dt); }
    game.audio.frame(dt, { throttle: 0, speed: 0, alive: false, rumble: 0, enemyNear: 0 });
  }
  if (game.debug && game.debug.free) { const f = game.debug.free; camera.position.set(f[0], f[1], f[2]); camera.lookAt(f[3], f[4], f[5]); camera.fov = f[6] || 50; camera.updateProjectionMatrix(); camera.updateMatrixWorld(); }
  if (st !== 'paused') { distantGuns(dt); game.fx.update(dt, game.time); lights.update(dt, game.audio, camera.position); if (st === 'menu') lights.follow(0, 40); }
  if (W) W.flush(); game.marks.flush();
}
let last = performance.now(), fpsAcc = 0, fpsN = 0, slowT = 0; game.fps = 0;
function loop(now) {
  const dt = Math.min(1 / 30, Math.max(0.001, (now - last) / 1000)); last = now;
  if (game.state !== 'paused' && !(game.debug && game.debug.freeze)) step(dt);
  frame.render(scene, camera, game.time);
  fpsAcc += dt; fpsN++; if (fpsAcc > 0.5) { game.fps = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0; if (game.state === 'playing' && !(game.debug && game.debug.freeze)) game.lobby.sample(game.fps, game.clock, qName);
    // if this machine cannot keep up, step the quality down on its own (once every few seconds, never back up)
    if (game.state === 'playing' && !game.noPause) { slowT = game.fps < 26 ? slowT + 0.5 : Math.max(0, slowT - 0.5); if (slowT >= 3 && qName !== 'low') { slowT = -4; applyQuality(qName === 'high' ? 'medium' : 'low', true); game.hud.note('Graphics lowered to keep it smooth', 3); } } }
  requestAnimationFrame(loop);
}

game.lobby = new Lobby(game);
newBattle(); game._k = 0;
applyQuality(qName);
setState('menu');
document.getElementById('load')?.remove();
requestAnimationFrame(loop);

// hooks for checking the game from outside (screenshots, timing, scripted play)
game.debug = {
  start() { game.noPause = true; game.audio.start = () => {}; game.audio.load = () => {}; newBattle(); setState('playing'); },
  step(n = 1, dt = 1 / 60) { for (let i = 0; i < n; i++) step(dt); frame.render(scene, camera, game.time); },
  input, cam, keys, ctrl, setState, WAVES,
  stats: () => ({ state: game.state, fps: +game.fps.toFixed(1), pieces: game.world.structures.reduce((a, s) => a + s.alive, 0), debrisActive: game.world.debris.activeCount, debrisHi: game.world.debris.hi, clusters: game.world.debris.clusters.length, calls: renderer.info.render.calls, tris: renderer.info.render.triangles, tanks: game.tanks.map((t) => ({ n: t.name, hp: Math.round(t.hp), x: +t.pos.x.toFixed(1), z: +t.pos.z.toFixed(1), alive: t.alive })) }),
  bench(n = 40) { const gl = renderer.getContext(), px = new Uint8Array(4); this.step(3); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); const t0 = performance.now(); this.step(n); gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); const ms = (performance.now() - t0) / n; return { ms: +ms.toFixed(2), fps: +(1000 / ms).toFixed(1), size: [canvas.width, canvas.height], calls: renderer.info.render.calls, tris: renderer.info.render.triangles }; },
};
