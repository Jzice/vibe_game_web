// Sound. Recorded effects (made with ElevenLabs, in ./sfx) are used when they have loaded;
// every one of them has a synthesised stand-in built from oscillators and noise, so the game is never silent.
const SFX = ['cannon_player', 'cannon_tiger', 'explosion_building', 'explosion_ground', 'tank_explode', 'cookoff', 'ricochet', 'hit_armor', 'collapse', 'rubble_small', 'glass', 'reload', 'parts_clang', 'engine_loop', 'tiger_engine_loop', 'tracks_loop', 'fire_loop', 'wind_loop', 'rain_loop', 'thunder', 'shell_flyby', 'turret_loop', 'wall_ram', 'tree_fall', 'track_break', 'timber_crack'];
export class Audio {
  constructor() { this.ctx = null; this.muted = false; this.lp = { x: 0, y: 0, z: 0 }; this.lr = { x: 1, z: 0 }; this.rumbleLevel = 0; this.buf = {}; this.loops = {}; this.lastCollapse = -99; }
  // fetch and decode the recorded effects; safe to call before or after start()
  async load(base = './sfx/') {
    if (this.loading) return; this.loading = true;
    await Promise.all(SFX.map(async (n) => { try { const r = await fetch(base + n + '.mp3'); if (!r.ok) return; this.raw = this.raw || {}; this.raw[n] = await r.arrayBuffer(); } catch (e) { /* stand-in will be used */ } }));
    this._decode();
  }
  async _decode() {
    if (!this.ctx || !this.raw) return;
    for (const n of Object.keys(this.raw)) { const ab = this.raw[n]; delete this.raw[n]; try { this.buf[n] = await this.ctx.decodeAudioData(ab); } catch (e) { /* skip */ } }
    this._startLoops();
  }
  _startLoops() {
    const c = this.ctx; if (!c) return;
    for (const n of ['engine_loop', 'tracks_loop', 'tiger_engine_loop', 'fire_loop', 'wind_loop', 'rain_loop', 'turret_loop']) {
      if (this.loops[n] || !this.buf[n]) continue;
      const src = c.createBufferSource(); src.buffer = this.buf[n]; src.loop = true; src.loopStart = 0.06; src.loopEnd = Math.max(0.5, this.buf[n].duration - 0.09); const g = c.createGain(); g.gain.value = 0; src.connect(g); g.connect(this.master); src.start(0, Math.random() * 2); this.loops[n] = { src, g };
    }
    // recorded loops replace the synthetic engine, track and wind beds
    if (this.loops.engine_loop) this.eng.g.disconnect(); if (this.loops.tracks_loop) this.eng.tg.disconnect(); if (this.loops.wind_loop) this.wg.disconnect(); if (this.loops.tiger_engine_loop) this.fg.disconnect();
  }
  // one-shot recorded effect placed in the world. Returns false if it is not available (caller falls back).
  play(name, pos, o = {}) {
    if (!this.ctx || !this.buf[name]) return false;
    const sp = o.own ? { d: 0, gain: 1, pan: 0, delay: 0 } : this._at(pos); if (sp.gain * (o.gain || 1) < 0.01) return true;
    const src = this.ctx.createBufferSource(); src.buffer = this.buf[name]; src.playbackRate.value = o.rate || 1;
    const out = this._out(sp, o.wet === undefined ? 0.35 : o.wet); const g = this.ctx.createGain(); g.gain.value = o.gain || 1; src.connect(g); g.connect(out); src.start(this.ctx.currentTime + sp.delay + (o.delay || 0));
    return true;
  }
  start() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const c = this.ctx = new AC();
    this.master = c.createGain(); this.master.gain.value = 0.9;
    const comp = c.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 5; comp.attack.value = 0.003; comp.release.value = 0.25;
    this.master.connect(comp); comp.connect(c.destination);
    // noise sources
    const mk = (secs, brown) => { const b = c.createBuffer(1, c.sampleRate * secs, c.sampleRate), d = b.getChannelData(0); let last = 0; for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w; } return b; };
    this.white = mk(2, false); this.brown = mk(4, true);
    // open-air echo: a short burst of decaying noise used as a reverb
    const ir = c.createBuffer(2, c.sampleRate * 2.2, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < d.length; i++) { const t = i / c.sampleRate; d[i] = (Math.random() * 2 - 1) * Math.pow(1 - t / 2.2, 3.2) * (t < 0.02 ? t / 0.02 : 1) * (1 + 0.8 * Math.exp(-Math.pow((t - 0.31) * 30, 2)) + 0.5 * Math.exp(-Math.pow((t - 0.62) * 25, 2))); } }
    this.verb = c.createConvolver(); this.verb.buffer = ir; const vg = c.createGain(); vg.gain.value = 0.32; this.verb.connect(vg); vg.connect(this.master);
    // engine: two saws through a low filter, chopped slightly to give it a firing rhythm
    this.eng = {}; const e = this.eng;
    e.o1 = c.createOscillator(); e.o1.type = 'sawtooth'; e.o2 = c.createOscillator(); e.o2.type = 'sawtooth'; e.o3 = c.createOscillator(); e.o3.type = 'square';
    e.f = c.createBiquadFilter(); e.f.type = 'lowpass'; e.f.frequency.value = 180; e.f.Q.value = 2;
    e.g = c.createGain(); e.g.gain.value = 0; e.lfo = c.createOscillator(); e.lfo.frequency.value = 9; e.lg = c.createGain(); e.lg.gain.value = 0.25; e.am = c.createGain(); e.am.gain.value = 0.75;
    e.o1.connect(e.f); e.o2.connect(e.f); e.o3.connect(e.f); e.f.connect(e.am); e.lfo.connect(e.lg); e.lg.connect(e.am.gain); e.am.connect(e.g); e.g.connect(this.master);
    for (const o of [e.o1, e.o2, e.o3, e.lfo]) o.start();
    // track clatter and squeal
    e.tn = this._loop(this.white); e.tf = c.createBiquadFilter(); e.tf.type = 'bandpass'; e.tf.frequency.value = 2600; e.tf.Q.value = 1.2; e.tg = c.createGain(); e.tg.gain.value = 0;
    e.tl = c.createOscillator(); e.tl.type = 'square'; e.tl.frequency.value = 12; e.tlg = c.createGain(); e.tlg.gain.value = 0; e.tl.connect(e.tlg); e.tlg.connect(e.tg.gain); e.tl.start();
    e.tn.connect(e.tf); e.tf.connect(e.tg); e.tg.connect(this.master);
    // falling masonry, distant engines, wind
    this.rum = this._loop(this.brown); this.rf = c.createBiquadFilter(); this.rf.type = 'lowpass'; this.rf.frequency.value = 220; this.rg = c.createGain(); this.rg.gain.value = 0; this.rum.connect(this.rf); this.rf.connect(this.rg); this.rg.connect(this.master); this.rg.connect(this.verb);
    this.far = c.createOscillator(); this.far.type = 'sawtooth'; this.far.frequency.value = 31; this.ff = c.createBiquadFilter(); this.ff.type = 'lowpass'; this.ff.frequency.value = 110; this.fg = c.createGain(); this.fg.gain.value = 0; this.far.connect(this.ff); this.ff.connect(this.fg); this.fg.connect(this.master); this.far.start();
    this.wind = this._loop(this.white); this.wf = c.createBiquadFilter(); this.wf.type = 'bandpass'; this.wf.frequency.value = 420; this.wf.Q.value = 0.5; this.wg = c.createGain(); this.wg.gain.value = 0.02; this.wind.connect(this.wf); this.wf.connect(this.wg); this.wg.connect(this.master);
    const wl = c.createOscillator(); wl.frequency.value = 0.11; const wlg = c.createGain(); wlg.gain.value = 0.012; wl.connect(wlg); wlg.connect(this.wg.gain); wl.start();
    const wl2 = c.createOscillator(); wl2.frequency.value = 0.07; const wl2g = c.createGain(); wl2g.gain.value = 160; wl2.connect(wl2g); wl2g.connect(this.wf.frequency); wl2.start();
    this._decode();
  }
  _loop(buf) { const s = this.ctx.createBufferSource(); s.buffer = buf; s.loop = true; s.start(); return s; }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.9; }
  listen(camera) { this.lp = camera.position; const e = camera.matrixWorld.elements; this.lr = { x: e[0], z: e[2] }; }
  _at(pos) { const dx = pos.x - this.lp.x, dy = (pos.y || 0) - this.lp.y, dz = pos.z - this.lp.z, d = Math.hypot(dx, dy, dz); return { d, gain: 1 / (1 + Math.pow(d / 26, 1.5)), pan: d > 0.5 ? Math.max(-0.85, Math.min(0.85, (dx * this.lr.x + dz * this.lr.z) / d)) : 0, delay: Math.min(0.9, d / 340) }; }
  _out(sp, wet = 0.5) { const c = this.ctx, g = c.createGain(); g.gain.value = sp.gain; const p = c.createStereoPanner ? c.createStereoPanner() : null; if (p) { p.pan.value = sp.pan; g.connect(p); p.connect(this.master); const w = c.createGain(); w.gain.value = wet; p.connect(w); w.connect(this.verb); } else { g.connect(this.master); } return g; }
  _noise(dest, t, dur, f0, f1, gain, type = 'lowpass', q = 0.7, brown = false) {
    const c = this.ctx, s = c.createBufferSource(); s.buffer = brown ? this.brown : this.white; s.loop = true; s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const f = c.createBiquadFilter(); f.type = type; f.Q.value = q; f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(dest); s.start(t, Math.random() * 1.5); s.stop(t + dur + 0.05);
  }
  _tone(dest, t, dur, f0, f1, gain, type = 'sine') {
    const c = this.ctx, o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
  }
  cannon(pos, own, big) {
    if (!this.ctx) return;
    if (this.play(big ? 'cannon_tiger' : 'cannon_player', pos, { own, gain: own ? 1.0 : 1.5, rate: 0.95 + Math.random() * 0.1, wet: 0.5 })) { if (own) this.play('reload', pos, { own: true, gain: 0.55, delay: 1.3, wet: 0.1 }); return; } const sp = own ? { d: 0, gain: 1, pan: 0, delay: 0 } : this._at(pos), t = this.ctx.currentTime + sp.delay, out = this._out(sp, 0.6), k = big ? 0.8 : 1;
    this._tone(out, t, 0.5, 120 * k, 30, 1.0); this._noise(out, t, 0.75, 7000, 260, 0.9); this._noise(out, t, 0.06, 9000, 4000, 0.7, 'highpass');
    this._noise(out, t + 0.03, 1.9, 600, 90, 0.4, 'lowpass', 0.7, true);
    if (own) { this._tone(out, t + 0.5, 0.25, 900, 500, 0.05, 'triangle'); this._noise(out, t + 0.9, 0.18, 2500, 1200, 0.07, 'bandpass', 3); }   // breech and the empty case
  }
  explosion(pos, size) {
    if (!this.ctx) return;
    if (this.play(size > 1.6 ? 'tank_explode' : 'explosion_building', pos, { gain: Math.min(1.4, size), rate: 0.9 + Math.random() * 0.2 })) return; const sp = this._at(pos), t = this.ctx.currentTime + sp.delay, out = this._out(sp, 0.7);
    this._tone(out, t, 0.7 * size, 80, 24, 1.0 * Math.min(1.3, size)); this._noise(out, t, 1.2 * size, 2400, 110, 0.9); this._noise(out, t + 0.05, 2.2, 500, 70, 0.5, 'lowpass', 0.7, true);
    for (let i = 0; i < 5; i++) this._noise(out, t + 0.15 + Math.random() * 0.9, 0.05 + Math.random() * 0.08, 3000 + Math.random() * 3000, 800, 0.12, 'bandpass', 2);      // debris clatter
  }
  hit(pos, ricochet, gain = 1) {
    if (!this.ctx) return;
    if (this.play(ricochet ? 'ricochet' : 'hit_armor', pos, { gain: 1.2 * gain, rate: 0.9 + Math.random() * 0.25 })) return; const sp = this._at(pos), t = this.ctx.currentTime + sp.delay, out = this._out(sp, 0.5);
    if (ricochet) { for (const f of [1870, 2740, 3310, 4150]) this._tone(out, t, 0.5 + Math.random() * 0.3, f, f * 0.93, 0.16); this._tone(out, t + 0.02, 0.7, 3200, 900, 0.10, 'sawtooth'); this._noise(out, t, 0.08, 6000, 2000, 0.5, 'bandpass', 1.5); }
    else { this._tone(out, t, 0.35, 190, 60, 0.9); this._noise(out, t, 0.35, 3000, 300, 0.8); for (const f of [520, 790, 1240]) this._tone(out, t, 0.4, f, f * 0.97, 0.12, 'triangle'); }
  }
  glass(x, y, z) { if (!this.ctx) return; if (this.play('glass', { x, y, z }, { gain: 0.5, rate: 0.9 + Math.random() * 0.4 })) return; const sp = this._at({ x, y, z }); if (sp.gain < 0.05) return; const t = this.ctx.currentTime + sp.delay, out = this._out(sp, 0.3); for (let i = 0; i < 7; i++) this._tone(out, t + Math.random() * 0.35, 0.06 + Math.random() * 0.1, 2500 + Math.random() * 5000, 2000 + Math.random() * 3000, 0.06, 'triangle'); this._noise(out, t, 0.25, 9000, 5000, 0.12, 'highpass'); }
  thud(pos, size) { if (!this.ctx) return; const sp = this._at(pos), t = this.ctx.currentTime + sp.delay, out = this._out(sp, 0.4); this._tone(out, t, 0.3, 90, 35, 0.7 * size); this._noise(out, t, 0.3, 900, 120, 0.5 * size); this._tone(out, t, 0.5, 420, 400, 0.08 * size, 'triangle'); }
  // every frame: engine note and track noise for the player, a low drone for enemy engines, the roar of collapsing walls
  frame(dt, o) {
    if (!this.ctx) return; const t = this.ctx.currentTime, e = this.eng, rpm = Math.min(1, Math.abs(o.throttle) * 0.75 + Math.abs(o.speed) / 9 * 0.45);
    const f = 34 + 44 * rpm; e.o1.frequency.setTargetAtTime(f, t, 0.12); e.o2.frequency.setTargetAtTime(f * 1.505, t, 0.12); e.o3.frequency.setTargetAtTime(f * 0.5, t, 0.12); e.lfo.frequency.setTargetAtTime(f / 4, t, 0.1);
    e.f.frequency.setTargetAtTime(150 + 260 * rpm, t, 0.15); e.g.gain.setTargetAtTime(o.alive ? 0.10 + 0.13 * rpm : 0, t, 0.2);
    const sp = Math.min(1, Math.abs(o.speed) / 8); e.tg.gain.setTargetAtTime(0.012 * sp, t, 0.1); e.tlg.gain.setTargetAtTime(0.02 * sp, t, 0.1); e.tl.frequency.setTargetAtTime(6 + 20 * sp, t, 0.1);
    this.rumbleLevel += (o.rumble - this.rumbleLevel) * Math.min(1, dt * (o.rumble > this.rumbleLevel ? 14 : 2.5)); this.rg.gain.setTargetAtTime(Math.min(0.9, this.rumbleLevel * 0.55), t, 0.05);
    this.fg.gain.setTargetAtTime(o.enemyNear, t, 0.3); this.far.frequency.setTargetAtTime(29 + o.enemyNear * 60, t, 0.3);
    const L = this.loops;
    if (L.engine_loop) { L.engine_loop.g.gain.setTargetAtTime(o.alive ? 0.16 + 0.22 * rpm : 0, t, 0.2); L.engine_loop.src.playbackRate.setTargetAtTime(0.78 + 0.5 * rpm, t, 0.15); }
    if (L.tracks_loop) { L.tracks_loop.g.gain.setTargetAtTime(o.alive ? 0.30 * sp : 0, t, 0.12); L.tracks_loop.src.playbackRate.setTargetAtTime(0.7 + 0.6 * sp, t, 0.12); }
    if (L.tiger_engine_loop) L.tiger_engine_loop.g.gain.setTargetAtTime(Math.min(0.6, o.enemyNear * 5), t, 0.4);
    if (L.fire_loop) L.fire_loop.g.gain.setTargetAtTime(o.fire || 0, t, 0.5);
    if (L.wind_loop) L.wind_loop.g.gain.setTargetAtTime(0.10, t, 1);
    if (L.rain_loop) L.rain_loop.g.gain.setTargetAtTime(0.42, t, 1);
    if (L.turret_loop) L.turret_loop.g.gain.setTargetAtTime(o.alive ? 0.22 * (o.turret || 0) : 0, t, 0.06);
    // a wall or a whole house coming down
    if (o.rumble > 1.1 && t - this.lastCollapse > 4.5 && o.rumblePos) { this.lastCollapse = t; this.play('collapse', o.rumblePos, { gain: 1.2, rate: 0.9 + Math.random() * 0.2 }); this.play('timber_crack', o.rumblePos, { gain: 0.9, rate: 0.8 + Math.random() * 0.3 }); }
    else if (o.rumble > 0.35 && t - (this.lastSmall || -9) > 1.6 && o.rumblePos) { this.lastSmall = t; this.play('rubble_small', o.rumblePos, { gain: 0.8, rate: 0.85 + Math.random() * 0.3 }); }
  }
}
