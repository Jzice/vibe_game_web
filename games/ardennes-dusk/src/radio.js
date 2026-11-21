// Radio chatter: the crew on the intercom and the company on the net, following the fight as it happens.
//
// RadioSet is the sound of the set itself: a low hiss that is always there, faint traffic from other nets,
// the odd stray key click, the rush as someone keys the net and the squelch when he lets go, signal that
// fades and breaks up now and then. Voices are played into it, never against silence.
//
// Radio decides what is said. Calls are put together from recorded parts at the moment they are spoken, from
// the real state of the game: the clock direction from our hull, the range, the part of town, what the Tiger
// is doing, how many are left. One transmission at a time; urgent ones go first and may cut off small talk;
// each kind has a cooldown; a call that has gone stale is dropped. In a fight the talk is close to constant,
// in the lulls it thins out to the odd exchange.
import { CLIPS, TAKES, VOICES, placeOf, arrivalPlace } from './radio_lines.js';

const IDS = [...Object.keys(CLIPS), ...Object.keys(TAKES)];
const FAM = {}; for (const id of IDS) { const f = id.replace(/_\d+$/, ''); (FAM[f] = FAM[f] || []).push(id); }
const whoOf = (id) => (CLIPS[id] ? CLIPS[id].who : TAKES[id][0].who);
const textOf = (id) => (CLIPS[id] ? CLIPS[id].text : TAKES[id].map((l) => l.text).join(' ')).replace(/\[[^\]]*\]\s*/g, '');
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const R = Math.random;

// ---------------------------------------------------------------------------------------------
// The set
// ---------------------------------------------------------------------------------------------
export class RadioSet {
  constructor(ctx, dest) {
    const c = this.ctx = ctx;
    this.out = c.createGain(); this.out.gain.value = 0.9; this.out.connect(dest);
    const nb = c.createBuffer(1, c.sampleRate * 3, c.sampleRate), d = nb.getChannelData(0); let b0 = 0, b1 = 0;
    for (let i = 0; i < d.length; i++) { const w = R() * 2 - 1; b0 = 0.97 * b0 + w * 0.3; b1 = 0.6 * b1 + w * 0.5; d[i] = (b0 * 0.5 + b1 + w * 0.3) * 0.6; }
    this.noise = nb;
    const loop = (f, q, g) => { const s = c.createBufferSource(); s.buffer = nb; s.loop = true; const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = q; const gg = c.createGain(); gg.gain.value = g; s.connect(bp); bp.connect(gg); gg.connect(this.out); s.start(0, R() * 2); return gg; };
    this.hiss = loop(1500, 0.5, 0.010);          // the set is on: always a little hiss
    this.carrier = loop(1900, 0.7, 0);            // louder rush while someone holds the net
    this.icHiss = loop(1500, 0.6, 0);             // the interphone amplifier opens when a man presses his switch: hiss...
    { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 118; const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 620; bp.Q.value = 2.5;
      this.icHum = c.createGain(); this.icHum.gain.value = 0; o.connect(bp); bp.connect(this.icHum); this.icHum.connect(this.out); o.start(); }      // ...and a faint dynamotor whine
    this.icVoice = c.createGain(); this.icVoice.connect(this.out);           // intercom
    this.netVoice = c.createGain(); this.netVoice.connect(this.out);         // company net
    // faint traffic from other nets: muffled, quiet, never quite readable
    this.farBus = c.createGain(); this.farBus.gain.value = 0.10; const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1300; const hp = c.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 500;
    this.farBus.connect(lp); lp.connect(hp); hp.connect(this.out);
    this.level = 1;
  }
  _burst(t, dur, f, q, g, dest = this.out) {
    const c = this.ctx, s = c.createBufferSource(); s.buffer = this.noise; const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = q;
    const gg = c.createGain(); gg.gain.setValueAtTime(0.0001, t); gg.gain.exponentialRampToValueAtTime(g, t + 0.006); gg.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(bp); bp.connect(gg); gg.connect(dest); s.start(t, R() * 2); s.stop(t + dur + 0.02);
  }
  _click(t, g = 0.25, f = 1300) { const c = this.ctx, o = c.createOscillator(); o.frequency.value = f; const gg = c.createGain(); gg.gain.setValueAtTime(g, t); gg.gain.exponentialRampToValueAtTime(0.0001, t + 0.025); o.connect(gg); gg.connect(this.out); o.start(t); o.stop(t + 0.04); this._burst(t, 0.02, 3000, 1, g * 0.5); }
  // how alive the set sounds: quieter in the lulls
  setLevel(x) { if (x === this.level) return; const t = this.ctx.currentTime; this.level = x; this.hiss.gain.setTargetAtTime(0.006 + 0.006 * x, t, 1.5); }
  // a transmission. parts: [{ buf, gap }]. Returns its length in seconds, key-up to squelch tail.
  transmit(parts, net, when, o = {}) {
    const c = this.ctx; let t = when;
    if (net) { this._burst(t, 0.10, 2000, 0.8, 0.22); this.carrier.gain.setTargetAtTime(0.030, t, 0.01); t += 0.11; }
    else { this._click(t, 0.14, 1100); this._burst(t, 0.05, 1700, 0.8, 0.10); this.icHiss.gain.setTargetAtTime(0.022, t, 0.01); this.icHum.gain.setTargetAtTime(0.010, t, 0.02); t += 0.05; }
    const v0 = t, srcs = this.srcs = this.srcs || { true: [], false: [] }; srcs[net] = [];
    for (const p of parts) { t += p.gap || 0; if (!p.buf) { t += p.est || 0.6; continue; } const s = c.createBufferSource(); s.buffer = p.buf; s.connect(net ? this.netVoice : this.icVoice); s.start(t); srcs[net].push(s); t += p.buf.duration; }
    // signal fading and breaking up on the net now and then
    if (net && o.fade) { const g = this.netVoice.gain, a = v0 + (t - v0) * (0.2 + R() * 0.4); g.setValueAtTime(1, a); g.linearRampToValueAtTime(0.45, a + 0.25); g.linearRampToValueAtTime(1, a + 0.7); }
    if (net && o.breakup) { const g = this.netVoice.gain, a = v0 + (t - v0) * (0.25 + R() * 0.5), w = 0.07 + R() * 0.1; g.setValueAtTime(1, a); g.linearRampToValueAtTime(0.08, a + 0.015); g.setValueAtTime(0.08, a + w); g.linearRampToValueAtTime(1, a + w + 0.02); this._burst(a, w + 0.03, 2400, 0.6, 0.18); }
    if (net) { this.carrier.gain.setTargetAtTime(0, t + 0.01, 0.015); this._burst(t + 0.01, 0.20, 2600, 0.7, 0.30); t += 0.2; }      // squelch tail
    else { this.icHiss.gain.setTargetAtTime(0, t + 0.02, 0.02); this.icHum.gain.setTargetAtTime(0, t + 0.02, 0.02); this._burst(t + 0.01, 0.08, 1500, 0.7, 0.12); this._click(t + 0.02, 0.10, 900); t += 0.09; }      // the switch let go
    return t - when;
  }
  // something faint from another net, or a stray click
  far(buf, when, rate = 0.94 + R() * 0.1, gain = 0.5 + R() * 0.5) {
    const c = this.ctx, s = c.createBufferSource(); s.buffer = buf; s.playbackRate.value = rate; const g = c.createGain(); g.gain.value = gain;
    s.connect(g); g.connect(this.farBus); this._burst(when, 0.08, 1800, 0.8, 0.05); s.start(when + 0.08); const end = when + 0.08 + buf.duration / rate; this._burst(end, 0.14, 2400, 0.7, 0.06); return end + 0.14 - when;
  }
  // the crew talking over the net in the same headset: the net drops under them
  duck(t0, t1) { const g = this.netVoice.gain; g.setTargetAtTime(0.5, t0, 0.03); g.setTargetAtTime(1, t1, 0.08); }
  // stop a transmission short: fade the channel, stop every part of it still playing or still to come, then open the channel again
  cut(net, t) { if (!net) { this.icHiss.gain.setTargetAtTime(0, t, 0.02); this.icHum.gain.setTargetAtTime(0, t, 0.02); } const v = (net ? this.netVoice : this.icVoice).gain; v.cancelScheduledValues(t); v.setTargetAtTime(0, t, 0.015); for (const s of (this.srcs && this.srcs[net]) || []) { try { s.stop(t + 0.06); } catch (e) { /* already stopped */ } } v.setTargetAtTime(1, t + 0.09, 0.01); if (net) this.carrier.gain.setTargetAtTime(0, t, 0.02); }
  stray(when) { this._burst(when, 0.05 + R() * 0.1, 2000, 0.8, 0.08 + R() * 0.06); }
}

// ---------------------------------------------------------------------------------------------
// What gets said, and when
// ---------------------------------------------------------------------------------------------
// [priority, seconds it stays worth saying, cooldown]. Priority 3 and up may cut off talk of 1 or less.
const RULES = {
  lost: [6, 3, 0], won: [5, 9, 0], fire: [4, 0.9, 0], engine: [4, 4, 8], trackoff: [4, 4, 8], jam: [4, 4, 8], laying: [3, 2.5, 20],
  hit: [3, 2, 4], glance: [3, 2, 4], kill: [3.5, 7, 0], flank: [3, 4, 20], sight: [3, 5, 0], near: [3, 1.5, 7], house: [3, 2, 12], collapse: [3, 2, 20], wall: [3, 1.5, 15],
  arrive: [2, 9, 0], warn: [2, 3, 25], sense: [3.2, 2.5, 0], pen: [3.2, 2.5, 1], held: [3.2, 2.5, 1], ric: [3.2, 2.5, 1], track: [3.2, 2.5, 1],
  ident: [2, 2.5, 0], loaded: [2.6, 1.2, 0], cover: [2, 2.5, 6], lostsight: [1, 3, 10], moving: [1, 1.2, 8], low: [2, 5, 45], fireout: [2, 6, 0], trackfix: [2, 6, 0],
  race: [3, 1.2, 4], report: [2, 15, 0], ack: [2, 6, 0], search: [1, 2, 7], reply: [2, 3, 0], swing: [2, 3, 0], start: [1, 8, 0], order: [1, 1.2, 4], urge: [1, 1.5, 9], correct: [1, 1, 5], steady: [1, 1.5, 6], cantsee: [1, 2, 15], idle: [0, 8, 0], net_idle: [0, 8, 0],
};

const NET = new Set(['start', 'arrive', 'ack', 'report', 'won', 'warn', 'net_idle']);

export class Radio {
  constructor(game) { this.game = game; this.raw = {}; this.buf = {}; this.bags = {}; this.log = []; this.set = null; this.reset(); }
  async load(base = './sfx/radio/') {
    await Promise.all(IDS.map(async (id) => { try { const r = await fetch(base + id + '.mp3'); if (r.ok) this.raw[id] = await r.arrayBuffer(); } catch (e) { /* that part stays silent */ } }));
  }
  async _decode(ctx) {
    if (this.decoding) return; this.decoding = true;
    for (const id of Object.keys(this.raw)) { const ab = this.raw[id]; delete this.raw[id]; try { this.buf[id] = await ctx.decodeAudioData(ab); } catch (e) { /* skip */ } }
    this.decoding = false;
  }
  reset() {
    if (this.curIc) this._cut(false); if (this.curNet) this._cut(true);
    this.q = []; this.curIc = this.curNet = null; this.icUntil = this.netUntil = this.busyUntil = 0; this.lastEnd = this.lastIcEnd = -9; this.cool = {}; this.mem = new Map(); this.prev = null; this.saidStart = false;
    this.scanT = 0; this.lastTalk = this.now(); this.contactT = -99; this.lastShotT = -99; this.idleNext = 14 + R() * 8; this.farNext = 4 + R() * 6; this.strayNext = 7; this.farUntil = 0;
    this.log.length = 0; this.idleTurn = 0; this.shotSensed = true; this.saidFire = this.saidTrack = false;
  }
  now() { return this.game.time; }
  // ---- parts ----
  _pick(fam) {
    this.used = this.used || {};
    if (CLIPS[fam] || TAKES[fam]) { this.used[fam] = this.now(); return fam; } const ids = FAM[fam]; if (!ids) return null;
    let bag = this.bags[fam]; if (!bag || !bag.length) { bag = this.bags[fam] = ids.slice().sort(() => R() - 0.5); if (bag.length > 1 && bag[bag.length - 1] === this.lastPick) bag.unshift(bag.pop()); }
    // skip a variant said in the last half minute when another is free
    const t = this.now(); this.used = this.used || {};
    for (let k = 0; k < bag.length - 1 && t - (this.used[bag[bag.length - 1]] ?? -99) < 30; k++) bag.unshift(bag.pop());
    const id = bag.pop(); this.used[id] = t; return (this.lastPick = id);
  }
  // a run is one transmission: parts said one after another, all on the intercom or all on the net
  _run(fams, info, gap = 0.1) { const ids = fams.map((f) => this._pick(f)).filter(Boolean); if (!ids.length) return null; return { ids, net: VOICES[whoOf(ids[0])].net, info, gap }; }
  // ---- the queue ----
  say(ev, build, o = {}) {
    const [prio, ttl, cool] = RULES[ev] || [1, 3, 0], t = this.now();
    if (!o.force && cool && this.cool[ev] > t) return false;
    if (o.chance !== undefined && R() > o.chance) return false;
    if (cool) this.cool[ev] = t + cool;
    if (!o.keep) this.q = this.q.filter((x) => x.ev !== ev);
    this.q.push({ ev, build, prio: o.prio ?? prio, at: t + (o.delay || 0), until: t + (o.delay || 0) + ttl, follow: !!o.follow });
    if (this.q.length > 6) { this.q.sort((a, b) => b.prio - a.prio || a.at - b.at); this.q.length = 6; }
    return true;
  }
  // a reply or the next step of an exchange: due when the transmission that asks for it has finished
  _then(ev, build, prio, delay = 0) { this.say(ev, build, { follow: true, force: true, prio: Math.max(prio, 2) + 0.5, delay: delay + (this.thenAfter || 0), keep: true }); }
  drop(...evs) { this.q = this.q.filter((x) => !evs.includes(x.ev)); }

  _play(item) {
    const run = item.build(); if (!run || !run.ids) return;
    const g = this.game, a = g.audio, t = this.now();
    const parts = run.ids.map((id, i) => ({ id, buf: this.buf[id], gap: i ? run.gap * (0.7 + R() * 0.6) : 0, est: 0.25 + textOf(id).length * 0.055 }));
    const fade = run.net && R() < 0.25, breakup = run.net && R() < 0.2;
    let len;
    if (this.set && a.ctx) len = this.set.transmit(parts, run.net, a.ctx.currentTime + 0.01, { fade, breakup });
    else len = parts.reduce((s, p) => s + p.gap + (p.buf ? p.buf.duration : p.est), 0) + (run.net ? 0.31 : 0.14);      // no sound: keep time as if it played
    const over = !run.net && !!this.curNet;
    if (over && this.set && a.ctx) this.set.duck(a.ctx.currentTime, a.ctx.currentTime + (this.netUntil - t) + 0.05);
    if (run.net) { this.netUntil = t + len; this.curNet = { ev: item.ev, prio: item.prio }; } else { this.icUntil = t + len; this.curIc = { ev: item.ev, prio: item.prio }; }
    this.busyUntil = Math.max(this.icUntil, this.netUntil); this.lastTalk = t;
    const e = { t: +(g.clock || 0).toFixed(1), at: +t.toFixed(2), len: +len.toFixed(2), ev: item.ev, net: run.net, ids: run.ids, gaps: parts.map((p) => +p.gap.toFixed(3)), fade, breakup, over, text: run.ids.map(textOf).join(' '), ...(run.info || {}) };
    this.log.push(e); if (this.log.length > 400) this.log.shift(); if (g.radioDebug) console.info('[radio]', e.t + 's', e.ev, e.text);
    if (run.then) { this.thenAfter = this.thenLen = len; run.then(item.prio); this.thenAfter = 0; }
  }
  _cut(net = false) {
    const e = [...this.log].reverse().find((x) => !x.far && !!x.net === net); if (e) e.cut = true;
    if (this.set) this.set.cut(net, this.set.ctx.currentTime);
    const t = this.now() + 0.12; if (net) { this.netUntil = t; this.curNet = null; } else { this.icUntil = this.lastIcEnd = t; this.curIc = null; }
    this.busyUntil = Math.max(this.icUntil, this.netUntil); this.lastEnd = Math.max(this.lastEnd, t);
  }

  // ---- hooks from the game ----
  arrive(w) {
    const pl = arrivalPlace(w.from, w.x, w.z), first = this.game.wave <= 1;
    this.say('arrive', () => ({ ...this._run(['six_call_us', first ? 'six_tiger' : 'six_another', `six_at_${pl}`, 'six_over'], { place: pl }, 0.06), then: (p) => this._then('ack', () => this._run(['cmdnet_roger'], null), p, 0.25) }), { keep: true });
  }
  // a shell struck a tank. kind: 'track', 'ricochet', 'held', 'pen'; info.plate: which plate it met
  strike(shooter, target, kind, info = {}) {
    const t = this.now(); this.contactT = t;
    const pk = { front: 'front', 'lower front': 'low', side: 'side', rear: 'rear', turret: 'turret' }[info.plate] || null;
    if (shooter && shooter.isPlayer && !target.isPlayer) {
      this.shotSensed = true; this.drop('sense'); this.lastHit = { e: target, pk, t, kind };
      if (kind === 'track') { this.trackShot = t; this.say('track', () => this._run(['cmd_track'], { plate: info.plate })); return; }
      if (t - (this.trackShot || -9) < 0.05) return;
      // what the commander saw: which plate, what it did, and what to do about it
      let fam;
      if (kind === 'pen') { if (!target.alive) return; fam = pk ? `res_${target.jam > 0.5 ? 'stuck' : 'burn'}_${pk}` : 'cmd_pen'; }
      else if (kind === 'held') fam = target.hp < 50 && target.alive ? 'res_hurt' : pk ? `res_held_${pk}` : 'cmd_held';
      else fam = pk ? `res_ric_${pk}` : 'cmd_ric';
      this.say(kind === 'pen' ? 'pen' : kind === 'held' ? 'held' : 'ric', () => this._run([fam], { plate: info.plate, result: kind }));
    } else if (target.isPlayer && target.alive) {
      if (kind === 'ricochet') this.say('glance', () => this._run(['take_glance'], { plate: info.plate }));
      else if (kind === 'held') { const k = pk === 'low' ? 'front' : pk; this.say('hit', () => this._run([k && R() < 0.75 ? `us_held_${k}` : 'take_hit'], { plate: info.plate })); }
    }
  }
  // a shell burst on a house or the ground
  landed(s, x, y, z, ground) {
    const g = this.game, p = g.player; if (!p) return; const t = this.now();
    if (s.owner === p) {
      if (this.shotSensed) return; this.shotSensed = true;
      // the commander watches the round: short, over, or off to one side of what we were shooting at
      const tg = this._target(); if (!tg) return; const fx = s.from.x, fz = s.from.z;
      const bt = Math.atan2(tg.pos.x - fx, tg.pos.z - fz), dt = Math.hypot(tg.pos.x - fx, tg.pos.z - fz), bl = Math.atan2(x - fx, z - fz), dl = Math.hypot(x - fx, z - fz);
      const side = wrap(bl - bt) * dt, along = dl - dt;
      const k = !ground && along < -6 ? 'house' : Math.abs(side) > 3.5 ? (side > 0 ? 'left' : 'right') : along < 0 ? 'short' : 'over';
      this.say('sense', () => this._run([`cmd_sense_${k}`], { sense: k, missBy: [Math.round(along), Math.round(side)] }));
    } else if (s.owner && !s.owner.isPlayer && p.alive) {
      const d = Math.hypot(x - p.pos.x, z - p.pos.z); if (d > 13) return; this.contactT = t;
      if (!ground && d < 12) this.say('house', () => this._run(['take_house'], null)); else this.say('near', () => this._run(['cmd_near'], null));
    }
  }
  collapse(x, z, n) { const p = this.game.player; if (p && p.alive && n > 25 && Math.hypot(x - p.pos.x, z - p.pos.z) < 40) this.say('collapse', () => this._run(['take_collapse'], null)); }
  wall() { this.say('wall', () => this._run(['take_wall'], null), { chance: 0.6 }); }

  // the Tiger we are fighting: the one in sight nearest the line of the gun
  _target() {
    const p = this.game.player, gy = p.yaw + p.turretYaw; let best = null, bd = 9;
    for (const [e, m] of this.mem) { if (!e.alive || !m.vis) continue; const d = Math.abs(wrap(Math.atan2(e.pos.x - p.pos.x, e.pos.z - p.pos.z) - gy)); if (d < bd) { bd = d; best = e; } }
    return best;
  }
  _rel(e) { const p = this.game.player; return wrap(Math.atan2(e.pos.x - p.pos.x, e.pos.z - p.pos.z) - p.yaw); }        // from the hull, positive = left
  _sighting(e, another) {
    // built when it is said, so direction, range and place are where the Tiger is at that moment
    return () => {
      if (!e.alive) return null; const p = this.game.player, rel = this._rel(e), d = e.pos.distanceTo(p.pos), yd = d * 1.094;
      let h = Math.round(-rel / (Math.PI / 6)) % 12; if (h <= 0) h += 12;
      const rng = yd < 75 ? 'cmd_range_close' : `cmd_range_${Math.min(5, Math.max(1, Math.round(yd / 100)))}`, pl = placeOf(e.pos.x, e.pos.z);
      const tr = wrap(Math.atan2(e.pos.x - p.pos.x, e.pos.z - p.pos.z) - p.yaw - p.turretYaw);
      // the alert: what, which way from the hull, where; then the fire order to the gunner
      const fams = [another ? 'cmd_another' : 'cmd_tiger', `cmd_clock_${h}`];
      if (pl !== placeOf(p.pos.x, p.pos.z) && yd >= 75) fams.push(`cmd_at_${pl}`);      // no point naming the place we are in, or one he is close enough to touch
      else fams.push(rng);
      const m = this.mem.get(e); if (m) m.ident = false;
      const order = () => { if (!e.alive) return null; const tr2 = wrap(Math.atan2(e.pos.x - p.pos.x, e.pos.z - p.pos.z) - p.yaw - p.turretYaw); const f2 = ['cmd_order']; if (Math.abs(tr2) >= 0.1) f2.push(tr2 > 0 ? 'cmd_trav_left' : 'cmd_trav_right'); return this._run(f2, null, 0.06); };
      return { ...this._run(fams, { clock: h, yards: Math.round(yd), place: pl, tiger: [Math.round(e.pos.x), Math.round(e.pos.z)], us: [Math.round(p.pos.x), Math.round(p.pos.z)], hullYaw: +p.yaw.toFixed(2) }, 0.06),
        then: (pr) => this._then('order', order, pr, 0.08) };
    };
  }

  // ---- every frame ----
  update(dt) {
    const g = this.game, p = g.player, t = this.now(); if (!p) return;
    const a = g.audio; if (a.ctx) { if (!this.set) this.set = new RadioSet(a.ctx, a.master); if (Object.keys(this.raw).length) this._decode(a.ctx); }
    const live = g.state === 'playing';
    // ---- our own tank ----
    const s = { shots: g.shots, ready: p.reload <= 0, track: p.trackOut[0] > 0 || p.trackOut[1] > 0, fire: p.engineFire > 0, jam: p.jam, low: p.hp < 35, alive: p.alive, kills: g.kills };
    const o = this.prev || s; this.prev = s;
    if (live && !this.saidStart && g.clock > 1.0) { this.saidStart = true; this.say('start', () => ({ ...this._run(['six_start'], null), then: (pr) => this._then('ack', () => this._run(['cmdnet_roger'], null), pr, 0.3) })); }
    if (!s.alive && o.alive) { this.q.length = 0; if (this.curIc) this._cut(false); if (this.curNet) this._cut(true); this.say('lost', () => ({ ...this._run(['take_lost'], null), then: (pr) => this._then('report', () => this._run(['four_lost'], { place: placeOf(p.pos.x, p.pos.z) }), pr, 1.2) })); }
    if (s.alive) {
      if (s.shots > o.shots) { this.lastShotT = t; this.contactT = t; this.shotSensed = false; this.drop('order', 'urge', 'steady', 'correct', 'ident'); this.raceSaid = false; const at = this._target(); if (at || R() < 0.15) this.say('fire', () => this._run(['gun_otw'], null)); }
      if (s.ready && !o.ready && live && t - this.contactT < 8) this.say('loaded', () => this._run(['load_up'], null), { chance: this._target() ? 0.9 : 0.4 });
      if (s.track && !o.track) this.say('trackoff', () => { this.saidTrack = true; return this._run(['take_trackoff'], null); }); if (!s.track && o.track && this.saidTrack) { this.saidTrack = false; this.say('trackfix', () => this._run(['take_trackfix'], null)); }
      if (s.fire && !o.fire) this.say('engine', () => { this.saidFire = true; return this._run(['take_engine'], null); }); if (!s.fire && o.fire && this.saidFire) { this.saidFire = false; this.say('fireout', () => this._run(['take_fireout'], null)); }
      if (s.jam > o.jam + 0.5) this.say('jam', () => ({ ...this._run(['take_jam'], null), then: (pr) => { const tg = this._target(); if (tg) this._then('swing', () => { const r = this._rel(tg); return { ...this._run([r > 0 ? 'cmd_swing_left' : 'cmd_swing_right'], null), then: (q) => this._then('reply', () => this._run(['drv_ok_2'], null), q, 0.1) }; }, pr, 0.15); } }));
      if (s.low && !o.low && !s.fire) this.say('low', () => this._run(['take_low'], null), { delay: 2.5 });
    }
    // ---- the Tigers ----
    this.scanT -= dt;
    if (this.scanT <= 0) {
      this.scanT = 0.25;
      for (const e of g.tanks) {
        if (e.isPlayer) continue; let m = this.mem.get(e); if (!m) { m = { seen: false, last: -99, vis: false, alive: true, warnT: -99, coverSaid: false, lostSaid: true, bear: null }; this.mem.set(e, m); }
        if (m.alive && !e.alive) { m.alive = false; m.vis = false; this._killed(e); continue; }
        if (!e.alive) continue;
        const d = e.pos.distanceTo(p.pos), vis = p.alive && d < 300 && g.world.clearLine(p.pos.x, p.pos.y + 2.4, p.pos.z, e.pos.x, e.pos.y + 1.6, e.pos.z);
        const rel = this._rel(e), bear = Math.atan2(e.pos.x - p.pos.x, e.pos.z - p.pos.z), ai = g.ais.find((x) => x.tank === e);
        if (vis) {
          this.contactT = t;
          if (!m.seen || t - m.last > 20) { const another = [...this.mem.values()].some((x) => x !== m && x.vis); this.say('sight', this._sighting(e, another), { keep: true }); }
          if (!m.seen) m.first = t; m.seen = true; m.last = t; m.coverSaid = false; m.lostSaid = false;
          m.rate = m.bear === null ? 0 : wrap(bear - m.bear) / 0.25; m.bear = bear;
          // its gun is coming round onto us and it is loaded
          if (ai && t - m.first > 4 && p.reload <= 0 && p.speed > -0.5 && e.reload < 0.8 && d < 220 && Math.abs(wrap(e.yaw + e.turretYaw - Math.atan2(p.pos.x - e.pos.x, p.pos.z - e.pos.z))) < 0.12) this.say('laying', () => ({ ...this._run(['cmd_laying'], null), then: (pr) => this._then('reply', () => this._run(['drv_ok_1'], null), pr, 0.05) }));
        } else if (m.seen && p.alive) {
          m.bear = null;
          // ducked back out of sight to reload, or simply gone
          if (!m.coverSaid && t - m.last > 0.8 && t - m.last < 4 && ai && ai.cover) { m.coverSaid = true; this.say('cover', () => this._run(['cmd_cover'], null)); }
          if (!m.lostSaid && t - m.last > 6) { m.lostSaid = true; if (!m.coverSaid) this.say('lostsight', () => this._run(['cmd_lost'], null)); }
        }
        m.vis = vis;
        // the next tank over sees one working round behind or beside us when we cannot
        if (!vis && p.alive && live && d < 110 && Math.abs(rel) > 1.2 && t - m.warnT > 35) {
          m.warnT = t; const side = Math.abs(rel) > 2.3 ? 'behind' : rel > 0 ? 'left' : 'right';
          this.say('warn', () => { if (!e.alive) return null; const pl = placeOf(e.pos.x, e.pos.z);
            return { ...this._run(['four_call_us', `four_rel_${side}`, `four_at_${pl}`, 'four_over'], { side, place: pl, tiger: [Math.round(e.pos.x), Math.round(e.pos.z)], us: [Math.round(p.pos.x), Math.round(p.pos.z)] }, 0.06),
              then: (pr) => this._then('ack', () => ({ ...this._run(['cmdnet_thanks'], null), then: (q) => this._then('flank', () => this._run([`cmd_flank_${side}`], null), q, 0.2) }), pr, 0.25) }; });
        }
      }
    }
    // ---- the gun: identified ----
    const tg = p.alive ? this._target() : null, contact = t - this.contactT < 8;
    if (tg) {
      const m = this.mem.get(tg), on = Math.hypot(g.gunPoint.x - tg.pos.x, g.gunPoint.z - tg.pos.z) < 4.5;
      if (on && !m.ident && !this.q.some((x) => x.ev === 'ident' || x.ev === 'sight') && !(this.curIc && this.curIc.ev === 'sight')) this.say('ident', () => { if (!tg.alive) return null; m.ident = true; return this._run(['gun_ident'], null); });
      m.onT = on ? (m.onT || 0) + dt : 0;
    }
    // ---- fill the gaps in a fight with what is true right now; leave the lulls quiet ----
    // the reload race: once a shot, with a Tiger in view, how our loader stands against his
    if (tg && live && !this.raceSaid && p.reload > 1.4 && t - this.lastShotT > 0.5) {
      const onUs = Math.abs(wrap(tg.yaw + tg.turretYaw - Math.atan2(p.pos.x - tg.pos.x, p.pos.z - tg.pos.z))) < 0.25;
      const fam = tg.reload <= 0.3 && onUs ? 'race_lose' : tg.reload > p.reload + 0.8 ? 'race_win' : onUs ? 'cmd_howlong' : null;
      if (fam) { this.raceSaid = true; this.say('race', () => { if (!tg.alive || p.reload <= 0.6) return null;
        return { ...this._run([fam], { ourReload: +p.reload.toFixed(1), hisReload: +tg.reload.toFixed(1) }), then: (pr) => this._then('reply', () => { const left = p.reload; return left > 0.4 ? this._run([`load_secs_${left > 2.4 ? 3 : left > 1.4 ? 2 : 1}`], { gunUpIn: +left.toFixed(1) }) : null; }, pr, 0.05) }; }); }
    }
    const quiet = t - Math.max(this.busyUntil, this.lastTalk);
    if (live && p.alive && contact && !this.q.length && quiet > 1.3) {
      // nothing said twice inside twenty seconds: a filler whose words were just used stays unsaid
      const fresh = (fams) => fams.some((f) => (FAM[f] || [f]).some((id) => !(t - ((this.used || {})[id] ?? -99) < 20)));
      const m = tg && this.mem.get(tg), tr = tg ? wrap(Math.atan2(tg.pos.x - p.pos.x, tg.pos.z - p.pos.z) - p.yaw - p.turretYaw) : 0;
      if (tg && p.reload <= 0 && m.onT > 0.7 && t - this.lastShotT > 1) this.say('order', () => { const yd = tg.pos.distanceTo(p.pos) * 1.094; return this._run([yd < 75 ? 'cmd_range_close' : `cmd_range_${Math.min(5, Math.max(1, Math.round(yd / 100)))}`, 'cmd_fire'], { yards: Math.round(yd) }, 0.05); });
      else if (tg && p.reload > 1.0 && t - this.lastShotT > 1.0) this.say('urge', () => this._run([R() < 0.5 ? 'cmd_urge' : 'load_loading'], null));
      else if (tg && Math.abs(tr) > 0.06 && Math.abs(tr) < 1.2 && fresh([tr > 0 ? 'cmd_more_left' : 'cmd_more_right'])) this.say('correct', () => this._run([tr > 0 ? 'cmd_more_left' : 'cmd_more_right'], null));
      else if (tg && Math.abs(m.rate || 0) > 0.05 && fresh([m.rate > 0 ? 'cmd_moving_left' : 'cmd_moving_right'])) this.say('moving', () => this._run([m.rate > 0 ? 'cmd_moving_left' : 'cmd_moving_right'], null));
      else if (tg && fresh(['cmd_steady', 'gun_fill'])) this.say('steady', () => this._run([R() < 0.6 ? 'cmd_steady' : 'gun_fill'], null));
      else if (!this.say('cantsee', () => this._run([R() < 0.5 ? 'gun_cantsee' : 'cmd_cantsee'], null))) this.say('search', () => this._run([R() < 0.5 ? 'gun_fill_2' : 'cmd_lost_2'], null));
    }
    // ---- the lulls: the odd word on the intercom or the net ----
    if (live && p.alive && !contact && quiet > this.idleNext && !this.q.length) { this.idleNext = 16 + R() * 18; this._idle(); }
    // ---- the set: hiss, distant traffic, stray clicks ----
    if (this.set) {
      this.set.setLevel(contact ? 1 : 0.6);
      this.farNext -= dt; this.strayNext -= dt;
      if (this.farNext <= 0) { this.farNext = (contact ? 14 : 7) + R() * 12; if (t > this.busyUntil + 0.3 && !this.q.length) { const ids = FAM.able_far.concat(FAM.six_idle, FAM.four_idle).filter((id) => this.buf[id]); if (ids.length) { const id = ids[Math.floor(R() * ids.length)], rate = 0.94 + R() * 0.1, gain = 0.5 + R() * 0.5, len = this.set.far(this.buf[id], a.ctx.currentTime + 0.02, rate, gain); this.farUntil = t + len; this.log.push({ t: +(g.clock || 0).toFixed(1), at: +t.toFixed(2), len: +len.toFixed(2), ev: 'far', far: true, ids: [id], rate, gain, text: '(faint, another net) ' + textOf(id) }); } } }
      if (this.strayNext <= 0) { this.strayNext = 6 + R() * 14; if (t > this.busyUntil && t > this.farUntil) { this.set.stray(a.ctx.currentTime + 0.01); this.log.push({ t: +(g.clock || 0).toFixed(1), at: +t.toFixed(2), len: 0.1, ev: 'stray', far: true, ids: [], text: '(stray key click)' }); } }
    }
    // ---- the queue ----
    this.q = this.q.filter((x) => x.until > t);
    if (this.curIc && t >= this.icUntil) { this.lastIcEnd = this.icUntil; this.lastEnd = Math.max(this.lastEnd, this.icUntil); this.curIc = null; }
    if (this.curNet && t >= this.netUntil) { this.lastEnd = Math.max(this.lastEnd, this.netUntil); this.curNet = null; }
    const ready = this.q.filter((x) => x.at <= t); if (!ready.length) return;
    ready.sort((a2, b) => b.prio - a2.prio || a2.at - b.at); const next = ready[0], net = NET.has(next.ev);
    const gap = next.follow ? 0.12 : contact ? (next.prio >= 2 ? 0.12 : 0.3) : (next.prio >= 2 ? 0.3 : 1.5);
    if (net) {
      // the net waits for the crew and for any other traffic
      if (this.curIc || this.curNet || t < this.lastEnd + gap) return;
    } else {
      // urgent crew talk cuts off small talk; firing and damage cut off a call in progress, but never the result of a shot or a kill
      if (this.curIc) { if ((next.prio >= 3 && this.curIc.prio <= 1) || (next.prio >= 4 && this.curIc.prio < 3.2 && this.curIc.ev !== 'loaded')) this._cut(false); else return; }
      if (this.curNet && next.prio < 4) return;            // crew talk waits for the net, except firing and damage, which go over it
      if (t < (this.curNet ? this.lastIcEnd : this.lastEnd) + gap) return;
    }
    if (this.farUntil > t && next.prio < 3) return;          // let a faint far call finish unless this is urgent
    this.q.splice(this.q.indexOf(next), 1); this._play(next);
  }
  _killed(e) {
    const g = this.game, pl = placeOf(e.pos.x, e.pos.z), left = g.endless ? 1 : g.enemyTotal - g.kills;
    this.drop('pen', 'held', 'ric', 'track', 'sense', 'order', 'urge', 'steady', 'correct', 'moving', 'sight', 'ident', 'cover', 'lostsight');
    const h = this.lastHit, pk = h && h.e === e && this.now() - h.t < 1.5 ? h.pk : null;
    if (pk) this.say('kill', () => ({ ...this._run([`res_kill_${pk}`], { plate: pk }), then: (pr) => { if (R() < 0.75) this._then('reply', () => this._run(['crew_kill'], null), pr, 0.1); } }));
    else this.say('kill', () => this._run(['take_kill'], null));
    if (left > 0) this.say('report', () => ({ ...this._run(['cmdnet_call', 'cmdnet_kill', `cmdnet_at_${pl}`, 'cmdnet_over'], { place: pl, tiger: [Math.round(e.pos.x), Math.round(e.pos.z)], left }, 0.05),
      then: (pr) => this._then('report', () => this._run(g.endless ? ['six_good', 'six_out'] : ['six_good', `six_left_${Math.min(4, left)}`, 'six_out'], { left }, 0.08), pr, 0.3) }), { delay: 1.0, keep: true });
    else this.say('won', () => ({ ...this._run(['six_won'], null), then: (pr) => this._then('report', () => this._run(['four_burn'], null), pr, 0.4) }), { delay: 1.2, prio: 3 });     // after the crew's own call, not over it
  }
  _idle() {
    const k = this.idleTurn++ % 3;
    if (k === 1) { this.say('idle', () => this._run(['take_idle'], null)); return; }
    const ex = [[['four_idle_1'], ['six_idle_1']], [['six_idle_2'], ['four_idle_2']], [['six_idle_3']], [['able_idle_1'], ['six_idle_4']]][Math.floor(R() * 4)];
    const chain = (i) => () => ({ ...this._run(ex[i], null), then: ex[i + 1] ? (pr) => this._then('net_idle', chain(i + 1), pr, 0.35) : null });
    this.say('net_idle', chain(0));
  }
}
