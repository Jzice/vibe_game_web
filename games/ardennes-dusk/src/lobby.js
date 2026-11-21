// The lobby: a call sign, the shared scoreboard, and a report of how smoothly each run played.
// Everything here is optional. Where there is no scoreboard service (a local copy, the preview page) it stays hidden.
const API = './api/scores';
const $ = (id) => document.getElementById(id);
const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
const ADJ = ['Lucky', 'Muddy', 'Rusty', 'Steady', 'Quiet', 'Iron', 'Grey', 'Rainy', 'Bold', 'Sly', 'Stubborn', 'Dusty', 'Midnight', 'Winter', 'Thunder', 'Copper', 'Ragged', 'Patient', 'Swift', 'Smoky', 'Frosty', 'Gallant', 'Weary', 'Restless', 'Flint'];
const NOUN = ['Fox', 'Badger', 'Sparrow', 'Otter', 'Mule', 'Heron', 'Wolf', 'Hound', 'Raven', 'Stag', 'Bear', 'Hare', 'Falcon', 'Lynx', 'Marten', 'Owl', 'Kestrel', 'Bison', 'Terrier', 'Gunner', 'Driver', 'Loader', 'Ranger', 'Lancer', 'Sapper'];
const makeName = () => `${ADJ[Math.floor(Math.random() * ADJ.length)]} ${NOUN[Math.floor(Math.random() * NOUN.length)]} ${10 + Math.floor(Math.random() * 90)}`;
const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* blocked */ } } };

export class Lobby {
  constructor(game) {
    this.game = game; this.on = false; this.tab = 'top'; this.data = null; this.resetRun();
    this.input = $('callsign'); this.name = store.get('ardennes-name') || ''; this.nameOk = true;
    // nobody has to type a name: there is always a made-up one ready, kept for next time
    this.anon = store.get('ardennes-anon'); if (!this.anon || !/^[A-Z][a-z]+ [A-Z][a-z]+ \d\d$/.test(this.anon)) { this.anon = makeName(); store.set('ardennes-anon', this.anon); }
    if (this.input) { this.input.value = this.name; this.input.placeholder = this.anon;
      this.input.addEventListener('input', () => { this.name = this.input.value.replace(/\s+/g, ' ').trim().slice(0, 16); store.set('ardennes-name', this.name); this.nameOk = true; this.hint(); this.render(); clearTimeout(this.checkT); this.checkT = setTimeout(() => this.check(), 450); }); }
    this.hint();
    for (const b of document.querySelectorAll('#lobby [data-tab]')) b.addEventListener('click', () => { this.tab = b.dataset.tab; this.render(); });
    this.load();
  }
  async call(body) {
    const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 6000);
    try { const r = await fetch(API, body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: ctl.signal } : { signal: ctl.signal });
      const j = await r.json(); return r.ok ? j : { error: j.error || 'not available' }; }
    catch (e) { return null; } finally { clearTimeout(timer); }
  }
  // the line under the box: who you will be on the board
  hint(blocked) { const h = $('namehint'); if (!h) return; h.classList.toggle('warn', !!blocked);
    h.textContent = blocked ? `That name can't go on the board. You'll play as ${this.anon}.` : this.name.length >= 2 ? '' : `Leave it blank and you'll play as ${this.anon}.`; }
  async check() { const n = this.name; if (!this.on || n.length < 2) return; const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 5000);
    try { const r = await fetch(API + '?check=' + encodeURIComponent(n), { signal: ctl.signal }); const j = await r.json(); if (n !== this.name) return; this.nameOk = !!j.ok; this.hint(!j.ok && j.why === 'blocked'); } catch (e) { /* the run is checked again when it is sent */ } finally { clearTimeout(timer); } }
  async load() { const d = await this.call(); if (d && d.top) { this.on = true; this.data = d; $('lobby').hidden = false; this.render(); this.check(); } }
  render(as) {
    if (as) this.shown = as; const d = this.data; if (!d) return; const list = this.tab === 'today' ? d.today : d.top, me = (this.shown || (this.name.length >= 2 && this.nameOk ? this.name : this.anon)).toLowerCase(), box = $('board'); box.textContent = '';
    for (const b of document.querySelectorAll('#lobby [data-tab]')) b.classList.toggle('on', b.dataset.tab === this.tab);
    list.slice(0, 10).forEach((r, i) => { const li = document.createElement('li'); if (r.name.toLowerCase() === me) li.className = 'me';
      for (const [c, t] of [['n', String(i + 1)], ['who', r.name], ['k', String(r.kills)], ['t', mmss(r.time)]]) { const s = document.createElement('span'); s.className = c; s.textContent = t; li.appendChild(s); } box.appendChild(li); });
    if (!list.length) { const li = document.createElement('li'); li.className = 'none'; li.textContent = this.tab === 'today' ? 'Nobody yet today. Be the first.' : 'No runs yet. Be the first.'; box.appendChild(li); }
    $('boardnote').textContent = d.crews ? `${d.crews} crew${d.crews === 1 ? '' : 's'} on the board · ${d.runs} run${d.runs === 1 ? '' : 's'}` : '';
  }
  // ---- how smoothly this run played ----
  resetRun() { this.fpsSum = 0; this.fpsN = 0; this.fpsLow = 1e9; this.q0 = null; }
  sample(fps, clock, q) { if (this.q0 === null) this.q0 = q; if (clock < 4 || !(fps > 0)) return; this.fpsSum += fps; this.fpsN++; if (fps < this.fpsLow) this.fpsLow = fps; }
  gpu() { try { const gl = this.game.renderer.getContext(), ext = gl.getExtension('WEBGL_debug_renderer_info'); return String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)); } catch (e) { return ''; } }
  // send a finished run; fills in the line on the end screen
  async submit(run) {
    const out = $('endrank'); if (out) out.textContent = '';
    if (!this.on) return;
    const name = this.name.length >= 2 && this.nameOk ? this.name : this.anon;
    const c = this.game.renderer.domElement;
    const perf = { avg: this.fpsN ? this.fpsSum / this.fpsN : 0, low: this.fpsN ? this.fpsLow : 0, q: run.q, q0: this.q0 || run.q, w: c.width, h: c.height, dpr: window.devicePixelRatio || 1, gpu: this.gpu(), touch: matchMedia('(pointer: coarse)').matches };
    if (out) out.textContent = 'Sending your run to the scoreboard…';
    const d = await this.call({ name, fallback: this.anon, kills: run.kills, time: run.time, shots: run.shots, perf });
    if (!out) return;
    if (!d) { out.textContent = 'Could not reach the scoreboard. Your run was not saved.'; return; }
    if (d.error) { out.textContent = d.error; return; }
    this.data = d; const shown = d.name || name; if (d.renamed) { this.nameOk = false; this.hint(true); } this.render(shown);
    out.textContent = (d.renamed ? `That name can't go on the board, so you're on it as ${shown}. ` : '') + (run.kills === 0 ? `Knock out a Tiger to get on the board, ${shown}.` : d.rank ? `${shown}: number ${d.rank} of ${d.crews} on the board${d.best > run.kills ? ` (your best is ${d.best})` : ''}.` : '');
  }
}
