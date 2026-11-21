import * as THREE from 'three';
import { NOISE, SKY } from './glsl.js';
import { CFG } from './terrain.js';

const R = Math.random;

// One pool of camera-facing particles. blend: 'alpha' for dust and smoke, 'add' for fire and sparks.
class Pool {
  constructor(cap, blend, shared) {
    this.cap = cap; this.n = 0; this.head = 0;
    const f = (k) => new Float32Array(cap * k);
    this.p = f(3); this.v = f(3); this.life = f(1); this.max = f(1); this.s0 = f(1); this.s1 = f(1); this.col = f(4); this.misc = f(4);   // misc: drag, gravity, kind, seed
    const geo = new THREE.InstancedBufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3)); geo.setIndex([0, 1, 2, 0, 2, 3]);
    this.aP = new THREE.InstancedBufferAttribute(f(4), 4); this.aC = new THREE.InstancedBufferAttribute(f(4), 4); this.aV = new THREE.InstancedBufferAttribute(f(4), 4);
    for (const a of [this.aP, this.aC, this.aV]) a.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aP', this.aP); geo.setAttribute('aC', this.aC); geo.setAttribute('aV', this.aV); geo.instanceCount = 0;
    const add = blend === 'add';
    const mat = new THREE.ShaderMaterial({
      uniforms: { uSunDir: shared.uSunDir, uSunCol: shared.uSunCol, uAmb: shared.uAmb, uFire: shared.uFirePos, uFireCol: shared.uFireCol, uFogDensity: { value: CFG.FOG_DENSITY } },
      vertexShader: /* glsl */`
        attribute vec4 aP; attribute vec4 aC; attribute vec4 aV;      // aP: xyz + size, aC: rgb + alpha, aV: velocity + kind/seed packed
        uniform vec3 uSunCol; uniform vec3 uAmb; uniform vec3 uFire[4]; uniform vec3 uFireCol[4]; uniform float uFogDensity;
        varying vec2 vQ; varying vec4 vC; varying float vKind; varying float vSeed; varying vec3 vDir;
        void main(){
          float kind = floor(aV.w); vKind = kind; vSeed = fract(aV.w)*37.0;
          vec4 mv = viewMatrix * vec4(aP.xyz, 1.0);
          vec2 q = position.xy;
          if (kind > 1.5 && kind < 2.5) {           // sparks stretch along their motion
            vec3 vv = mat3(viewMatrix) * aV.xyz; vec2 d = normalize(vv.xy + vec2(1e-4)); float len = 1.0 + length(vv)*0.035/aP.w;
            q = d*q.y*len + vec2(-d.y, d.x)*q.x;
          } else if (kind > 2.5) {                  // flames stand upright, taller than wide, each leaning its own way
            q = vec2(q.x + (q.y + 1.0)*(fract(vSeed*0.37) - 0.5)*0.5, q.y*1.75 + 1.2);
          } else { float a = vSeed + aC.a*0.0; float c = cos(a), s = sin(a); q = vec2(q.x*c - q.y*s, q.x*s + q.y*c); }
          mv.xy += q * aP.w;
          vQ = position.xy; vC = aC;
          ${add ? '' : `vec3 lit = uAmb + uSunCol*0.55;
          for (int i = 0; i < 4; i++){ vec3 L = uFire[i] - aP.xyz; lit += uFireCol[i] * (0.55 / (1.0 + dot(L, L)*0.10)); }   // smoke glows only just above its fire
          vC.rgb *= lit;`}
          float dist = length(mv.xyz); vC.a *= exp(-uFogDensity*uFogDensity*dist*dist*0.6) * smoothstep(0.3, 1.5, dist);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`varying vec2 vQ; varying vec4 vC; varying float vKind; varying float vSeed; varying vec3 vDir;
        ${NOISE}
        void main(){
          float r = length(vQ); if (r > 1.0 && vKind < 2.5) discard;
          float a; vec3 tint = vec3(1.0);
          if (vKind < 1.5) {                         // soft cloud with a broken, billowing edge
            float n = fbm(vQ*1.6 + vSeed), n2 = fbm(vQ*3.7 - vSeed*1.7);
            a = smoothstep(1.0, 0.15, r + (n - 0.5)*0.85 + (n2 - 0.5)*0.3) * (0.55 + 0.45*n);
            ${add ? '' : 'tint = vec3(0.5 + 1.0*n*n2*2.0);'}
          } else if (vKind < 2.5) { a = smoothstep(1.0, 0.0, abs(vQ.x)) * smoothstep(1.0, 0.2, abs(vQ.y)); }
          else {                                     // a tongue of flame: wide and white-hot at the foot, torn to a red tip
            float y = vQ.y*0.5 + 0.5; float n = fbm(vec2(vQ.x*2.3 + vSeed*3.0, vQ.y*1.5 - vSeed*5.0)), n2 = vnoise(vec2(vQ.x*6.0 - vSeed, vQ.y*4.0 + vSeed*2.0));
            float w = mix(0.92, 0.10, y*y);
            float e = abs(vQ.x + (n - 0.5)*0.9*y) / w;
            a = smoothstep(1.0, 0.2, e) * smoothstep(0.0, 0.14, y) * smoothstep(1.0, 0.45, y + (n - 0.5)*0.7) * (0.65 + 0.7*n2);
            float heat = clamp(a*(1.15 - y)*1.3, 0.0, 1.0);
            tint = mix(vec3(1.0, 0.13, 0.015), vec3(1.0, 0.50, 0.11), smoothstep(0.1, 0.6, heat)) + vec3(0.55, 0.48, 0.30)*smoothstep(0.65, 1.0, heat);
          }
          ${add ? 'gl_FragColor = vec4(vC.rgb * tint * a * vC.a, 1.0);' : 'gl_FragColor = vec4(vC.rgb * tint * a * vC.a, a * vC.a);'}
        }`,
      transparent: true, depthWrite: false, fog: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: add ? THREE.OneFactor : THREE.OneMinusSrcAlphaFactor,
    });
    this.mesh = new THREE.Mesh(geo, mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = add ? 31 : 30;
  }
  // o: x,y,z, vx,vy,vz, life, s0, s1, r,g,b, a, drag, grav, kind
  emit(o) {
    let i;
    if (this.n < this.cap) i = this.n++; else { i = this.head; this.head = (this.head + 1) % this.cap; }
    const i3 = i * 3, i4 = i * 4;
    this.p[i3] = o.x; this.p[i3 + 1] = o.y; this.p[i3 + 2] = o.z; this.v[i3] = o.vx || 0; this.v[i3 + 1] = o.vy || 0; this.v[i3 + 2] = o.vz || 0;
    this.life[i] = 0; this.max[i] = o.life; this.s0[i] = o.s0; this.s1[i] = o.s1 === undefined ? o.s0 : o.s1;
    this.col[i4] = o.r; this.col[i4 + 1] = o.g; this.col[i4 + 2] = o.b; this.col[i4 + 3] = o.a === undefined ? 1 : o.a;
    this.misc[i4] = o.drag || 0; this.misc[i4 + 1] = o.grav || 0; this.misc[i4 + 2] = o.kind || 0; this.misc[i4 + 3] = R() * 0.99;
  }
  update(dt, world) {
    const p = this.p, v = this.v; let w = 0; const aP = this.aP.array, aC = this.aC.array, aV = this.aV.array;
    for (let i = 0; i < this.n; i++) {
      const t = (this.life[i] += dt) / this.max[i]; if (t >= 1) continue;
      const i3 = i * 3, i4 = i * 4; const dr = Math.max(0, 1 - this.misc[i4] * dt);
      v[i3] *= dr; v[i3 + 1] = v[i3 + 1] * dr - this.misc[i4 + 1] * dt; v[i3 + 2] *= dr;
      p[i3] += v[i3] * dt; p[i3 + 1] += v[i3 + 1] * dt; p[i3 + 2] += v[i3 + 2] * dt;
      const kind = this.misc[i4 + 2];
      if (kind === 2 && world) { const h = world.groundH(p[i3], p[i3 + 2]); if (p[i3 + 1] < h + 0.03) { p[i3 + 1] = h + 0.03; v[i3 + 1] *= -0.3; v[i3] *= 0.6; v[i3 + 2] *= 0.6; } }
      const o = w * 4; w++;
      aP[o] = p[i3]; aP[o + 1] = p[i3 + 1]; aP[o + 2] = p[i3 + 2]; aP[o + 3] = this.s0[i] + (this.s1[i] - this.s0[i]) * (1 - (1 - t) * (1 - t));
      const fade = kind === 1 ? (1 - t) * (1 - t) : Math.min(1, t * 8) * (1 - t) * (kind === 0 ? (1 - t * 0.5) : 1);
      aC[o] = this.col[i4]; aC[o + 1] = this.col[i4 + 1]; aC[o + 2] = this.col[i4 + 2]; aC[o + 3] = this.col[i4 + 3] * fade;
      aV[o] = v[i3]; aV[o + 1] = v[i3 + 1]; aV[o + 2] = v[i3 + 2]; aV[o + 3] = kind + this.misc[i4 + 3];
    }
    // drop dead particles off the end so the list does not grow for ever
    while (this.n > 0 && this.life[this.n - 1] >= this.max[this.n - 1]) this.n--;
    if (this.head >= this.n) this.head = 0;
    this.mesh.geometry.instanceCount = w; this.aP.needsUpdate = true; this.aC.needsUpdate = true; this.aV.needsUpdate = true;
  }
}

// Smoke, dust, fire, sparks, flashes and the lights they throw.
export class FX {
  constructor(game) {
    this.game = game; const sh = game.shared;
    this.smoke = new Pool(4500, 'alpha', sh); this.glow = new Pool(3000, 'add', sh);
    game.scene.add(this.smoke.mesh, this.glow.mesh);
    this.lights = []; for (let i = 0; i < 3; i++) { const l = new THREE.PointLight(0xffffff, 0, 60, 1.6); l.visible = true; game.scene.add(l); this.lights.push({ l, t: 0, dur: 0, peak: 0 }); }
    this.fires = [];                                   // long-burning fires: { pos, size, life, t, light }
    this.fireLights = []; for (let i = 0; i < 4; i++) { const l = new THREE.PointLight(0xff6418, 0, 70, 2); game.scene.add(l); this.fireLights.push(l); }
    this.setRain(9000);
  }
  setRain(count) { if (this.rain) { this.game.scene.remove(this.rain); this.rain.geometry.dispose(); this.rain.material.dispose(); } this.rain = buildRain(this.game.shared, count); this.game.scene.add(this.rain); }
  flash(x, y, z, color, intensity, dur) {
    let best = this.lights[0]; for (const s of this.lights) if (s.t >= s.dur) { best = s; break; } else if (s.dur - s.t < best.dur - best.t) best = s;
    best.l.position.set(x, y, z); best.l.color.setRGB(color[0], color[1], color[2]); best.t = 0; best.dur = dur; best.peak = intensity;
    this.lastFlash = { pos: new THREE.Vector3(x, y, z), c: color, i: intensity, t: 0, dur };
  }
  dust(x, y, z, size, col) {
    const c = col || [0.4, 0.37, 0.33], k = 0.55;
    for (let i = 0; i < 2; i++) this.smoke.emit({ x: x + (R() - 0.5) * size, y: y + (R() - 0.3) * size * 0.6, z: z + (R() - 0.5) * size, vx: (R() - 0.5) * 1.6, vy: 0.3 + R() * 0.9, vz: (R() - 0.5) * 1.6,
      life: 3.0 + R() * 3.5, s0: size * 0.5, s1: size * (2.2 + R() * 1.6), r: 0.20 + c[0] * k, g: 0.19 + c[1] * k, b: 0.18 + c[2] * k, a: 0.30 + R() * 0.12, drag: 1.3, grav: -0.05, kind: 0 });
  }
  glass(x, y, z, dx, dy, dz) {
    for (let i = 0; i < 9; i++) this.glow.emit({ x, y, z, vx: dx * 3 + (R() - 0.5) * 4, vy: dy * 2 + R() * 2.5, vz: dz * 3 + (R() - 0.5) * 4, life: 0.9 + R() * 0.6, s0: 0.035, s1: 0.02, r: 0.5, g: 0.6, b: 0.7, a: 0.9, grav: 9.8, drag: 0.4, kind: 2 });
    this.game.audio.glass(x, y, z);
  }
  sparks(x, y, z, n, dx, dy, dz, speed = 14) {
    for (let i = 0; i < n; i++) this.glow.emit({ x, y, z, vx: dx * speed * R() + (R() - 0.5) * speed * 0.8, vy: dy * speed * R() + (R() - 0.2) * speed * 0.7, vz: dz * speed * R() + (R() - 0.5) * speed * 0.8,
      life: 0.35 + R() * 0.9, s0: 0.05, s1: 0.015, r: 6.0, g: 3.2, b: 1.0, a: 1, grav: 9.8, drag: 0.6, kind: 2 });
  }
  // a shell going off. scale 1 = tank shell against masonry or ground
  explosion(x, y, z, scale, opts = {}) {
    const g = this.glow, s = this.smoke;
    for (let i = 0; i < 9; i++) g.emit({ x: x + (R() - 0.5) * scale, y: y + (R() - 0.3) * scale, z: z + (R() - 0.5) * scale, vx: (R() - 0.5) * 7 * scale, vy: R() * 6 * scale, vz: (R() - 0.5) * 7 * scale,
      life: 0.22 + R() * 0.3, s0: 0.5 * scale, s1: (1.6 + R()) * scale, r: 5.0, g: 2.3, b: 0.6, a: 1, drag: 4, kind: 1 });
    g.emit({ x, y, z, life: 0.09, s0: 2.6 * scale, s1: 4.6 * scale, r: 9, g: 6.5, b: 3.2, a: 1, kind: 1 });
    this.sparks(x, y, z, Math.round(22 * scale), 0, 1, 0, 16 * scale);
    const dark = opts.dark === undefined ? 0.5 : opts.dark;
    for (let i = 0; i < 12; i++) { const a = R() * 6.28, sp = (1.5 + R() * 4) * scale, c = 0.10 + R() * 0.22 * (1 - dark) + 0.05;
      s.emit({ x: x + Math.cos(a) * 0.5, y: y + R() * scale, z: z + Math.sin(a) * 0.5, vx: Math.cos(a) * sp, vy: 1.5 + R() * 4.5 * scale, vz: Math.sin(a) * sp, life: 2.8 + R() * 3.5, s0: 0.8 * scale, s1: (3.2 + R() * 2.5) * scale, r: c, g: c * 0.97, b: c * 0.94, a: 0.55, drag: 1.5, grav: -0.25, kind: 0 }); }
    if (opts.ground) for (let i = 0; i < 10; i++) { const a = R() * 6.28, sp = 2 + R() * 5;      // snow and dirt thrown up
      s.emit({ x, y: y + 0.2, z, vx: Math.cos(a) * sp, vy: 3 + R() * 7, vz: Math.sin(a) * sp, life: 1.2 + R() * 1.2, s0: 0.35, s1: 1.3 + R(), r: 0.16, g: 0.13, b: 0.10, a: 0.6, drag: 1.2, grav: 7, kind: 0 }); }
    this.flash(x, y + 0.6, z, [1.0, 0.62, 0.28], 900 * scale, 0.35);
  }
  muzzle(x, y, z, dx, dy, dz, big = 1) {
    const g = this.glow, s = this.smoke;
    for (let i = 0; i < 6; i++) { const t = i / 6; g.emit({ x: x + dx * t * 2.2, y: y + dy * t * 2.2, z: z + dz * t * 2.2, vx: dx * 18, vy: dy * 18, vz: dz * 18, life: 0.07 + R() * 0.06, s0: (1.0 - t * 0.6) * big, s1: (1.5 - t) * big, r: 9, g: 5.5, b: 2.2, a: 1, drag: 12, kind: 1 }); }
    for (let i = 0; i < 9; i++) s.emit({ x: x + dx * R() * 2, y: y + dy * R() * 2, z: z + dz * R() * 2, vx: dx * (4 + R() * 9) + (R() - 0.5) * 3, vy: dy * 6 + R() * 1.5, vz: dz * (4 + R() * 9) + (R() - 0.5) * 3,
      life: 1.6 + R() * 2.2, s0: 0.5, s1: 2.4 + R() * 1.8, r: 0.5, g: 0.5, b: 0.52, a: 0.32, drag: 2.6, grav: -0.3, kind: 0 });
    // the blast lifts snow off the ground under the barrel
    const gy = this.game.world.groundH(x + dx * 2, z + dz * 2);
    if (y - gy < 4) for (let i = 0; i < 12; i++) { const a = R() * 6.28, sp = 2 + R() * 5; s.emit({ x: x + dx * 2 + Math.cos(a), y: gy + 0.15, z: z + dz * 2 + Math.sin(a), vx: Math.cos(a) * sp + dx * 3, vy: 0.6 + R() * 1.6, vz: Math.sin(a) * sp + dz * 3, life: 1.3 + R() * 1.5, s0: 0.5, s1: 2.2 + R() * 1.5, r: 0.5, g: 0.55, b: 0.62, a: 0.22, drag: 2.2, grav: 0.4, kind: 0 }); }
    this.flash(x + dx, y + 0.3, z + dz, [1.0, 0.7, 0.4], 1400 * big, 0.12);
  }
  exhaust(x, y, z, vx, vy, vz, a) { this.smoke.emit({ x, y, z, vx, vy, vz, life: 1.0 + R() * 0.9, s0: 0.14, s1: 0.7 + R() * 0.5, r: 0.16, g: 0.16, b: 0.17, a, drag: 1.6, grav: -0.9, kind: 0 }); }
  spray(x, y, z, vx, vy, vz, snowy) { const c = snowy ? [0.45, 0.50, 0.58] : [0.20, 0.17, 0.13]; this.smoke.emit({ x, y, z, vx, vy, vz, life: 0.5 + R() * 0.5, s0: 0.12, s1: 0.55 + R() * 0.4, r: c[0], g: c[1], b: c[2], a: 0.34, drag: 1.2, grav: 6, kind: 0 }); }
  addFire(pos, size, life) { const f = { pos: pos.clone(), size, life, t: 0, acc: 0, seed: R() * 10 }; this.fires.push(f); return f; }

  update(dt, time) {
    const sh = this.game.shared;
    if (this.lastFlash) this.lastFlash.t += dt;
    for (const s of this.lights) { s.t += dt; const k = s.t < s.dur ? Math.pow(1 - s.t / s.dur, 2) : 0; s.l.intensity = s.peak * k; }
    // fires: flames, embers, a rising column of smoke and a flickering light
    this.fires = this.fires.filter((f) => (f.t += dt) < f.life);
    const cam = this.game.camera.position; this.fires.sort((a, b) => a.pos.distanceToSquared(cam) - b.pos.distanceToSquared(cam));
    for (let i = 0; i < 4; i++) {
      const f = this.fires[i], L = this.fireLights[i];
      if (!f) { L.intensity = 0; sh.uFireCol.value[i].set(0, 0, 0); continue; }
      const k = Math.min(1, f.t * 2) * Math.min(1, (f.life - f.t) / 6);
      const fl = 0.75 + 0.25 * Math.sin(time * 17 + f.seed) * Math.sin(time * 7.3 + f.seed * 2) + 0.12 * Math.sin(time * 31 + f.seed);
      L.position.set(f.pos.x, f.pos.y + 1.2 * f.size + 0.6, f.pos.z); L.intensity = 64 * f.size * k * fl;
      sh.uFirePos.value[i].copy(L.position); sh.uFireCol.value[i].set(1.0, 0.42, 0.13).multiplyScalar(1.5 * f.size * k * fl);
    }
    for (const f of this.fires) {
      const k = Math.min(1, f.t * 2) * Math.min(1, (f.life - f.t) / 6); f.acc += dt * 30 * k * f.size;
      while (f.acc > 1) {
        f.acc -= 1; const s = f.size;
        // tongues of flame licking up from the seat of the fire, the tallest in the middle
        { const ox = (R() - 0.5) * 1.5 * s, oz = (R() - 0.5) * 1.5 * s, mid = 1 - Math.min(1, Math.hypot(ox, oz) / (0.8 * s)), sz = (0.30 + 0.38 * mid + R() * 0.16) * s;
          this.glow.emit({ x: f.pos.x + ox, y: f.pos.y - 0.1 + R() * 0.25, z: f.pos.z + oz, vx: (R() - 0.5) * 0.5 + 0.25, vy: (0.5 + R() * 1.1 + mid * 0.8) * s, vz: (R() - 0.5) * 0.5, life: 0.28 + R() * 0.42, s0: sz, s1: sz * (0.75 + R() * 0.5), r: 1.9, g: 1.9, b: 1.9, a: 1, drag: 0.4, grav: -1.2, kind: 3 }); }
        // the bed of the fire glows through them
        if (R() < 0.25) this.glow.emit({ x: f.pos.x + (R() - 0.5) * s, y: f.pos.y + 0.25 * s, z: f.pos.z + (R() - 0.5) * s, vy: 0.5, life: 0.35 + R() * 0.3, s0: 0.9 * s, s1: 0.6 * s, r: 1.5, g: 0.42, b: 0.07, a: 0.55, kind: 1 });
        if (R() < 0.42) this.smoke.emit({ x: f.pos.x + (R() - 0.5) * s, y: f.pos.y + 1.6 * s, z: f.pos.z + (R() - 0.5) * s, vx: 0.6 + (R() - 0.5) * 0.8, vy: 2.2 + R() * 1.6, vz: 0.25 + (R() - 0.5) * 0.8, life: 6 + R() * 6, s0: 0.6 * s, s1: (3.4 + R() * 2.6) * s, r: 0.05, g: 0.048, b: 0.046, a: 0.55, drag: 0.22, grav: -0.35, kind: 0 });
        if (R() < 0.10) this.glow.emit({ x: f.pos.x + (R() - 0.5) * s, y: f.pos.y + 0.8, z: f.pos.z + (R() - 0.5) * s, vx: (R() - 0.5) * 2.5 + 0.8, vy: 2.5 + R() * 4, vz: (R() - 0.5) * 2.5, life: 1.2 + R() * 1.8, s0: 0.035, s1: 0.012, r: 6, g: 2.4, b: 0.5, a: 1, grav: 1.0, drag: 0.3, kind: 2 });
      }
    }
    this.smoke.update(dt, null); this.glow.update(dt, this.game.world);
  }
}

// Rain: thousands of streaks wrapped around the camera. Each is lit by the lamps, fires and gun flashes near it,
// brightest when it falls between you and a light.
export function buildRain(shared, count) {
  const geo = new THREE.InstancedBufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute([-1, 0, 0, 1, 0, 0, 1, 1, 0, -1, 1, 0], 3)); geo.setIndex([0, 1, 2, 0, 2, 3]);
  const seed = new Float32Array(count * 4); for (let i = 0; i < seed.length; i++) seed[i] = R();
  geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seed, 4)); geo.instanceCount = count;
  const NL = shared.uLampPos.value.length;
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uAmb: shared.uAmb, uFlash: shared.uFlash, uFire: shared.uFirePos, uFireCol: shared.uFireCol, uLampPos: shared.uLampPos, uLampCol: shared.uLampCol, uBox: { value: new THREE.Vector3(44, 30, 44) } },
    vertexShader: /* glsl */`uniform float uTime; uniform vec3 uBox; uniform vec3 uAmb; uniform float uFlash; uniform vec3 uFire[4]; uniform vec3 uFireCol[4]; uniform vec3 uLampPos[${NL}]; uniform vec3 uLampCol[${NL}];
      attribute vec4 aSeed; varying vec2 vQ; varying vec3 vC;
      void main(){
        vec3 vel = vec3(2.2, -10.5, 1.0) * (0.85 + 0.3*aSeed.w);
        vec3 p = aSeed.xyz*uBox + vel*uTime;
        p = cameraPosition + mod(p - cameraPosition + uBox*0.5, uBox) - uBox*0.5;
        vec3 dir = normalize(vel); float len = 0.42*(0.7 + 0.6*aSeed.w);
        vec3 toCam = cameraPosition - p; float dist = length(toCam); vec3 side = normalize(cross(dir, toCam));
        float w = max(0.0032, dist*0.0010);
        vec3 wp = p + dir*(position.y*len) + side*(position.x*w);
        vec3 vdir = -toCam/max(dist, 1e-3);
        vec3 lit = uAmb*0.55 + vec3(0.5, 0.56, 0.7)*uFlash;
        for (int i = 0; i < 4; i++){ vec3 d = uFire[i] - p; float d2 = dot(d, d); vec3 ld = d*inversesqrt(d2); lit += uFireCol[i]*(0.25 + 2.4*pow(max(dot(ld, vdir), 0.0), 5.0))*2.2/(d2 + 8.0); }
        for (int i = 0; i < ${NL}; i++){ vec3 d = uLampPos[i] - p; float d2 = dot(d, d); vec3 ld = d*inversesqrt(d2); lit += uLampCol[i]*(0.22 + 2.6*pow(max(dot(ld, vdir), 0.0), 5.0))/(d2 + 6.0); }
        float fade = smoothstep(0.5, 2.0, dist) * smoothstep(uBox.x*0.5, uBox.x*0.36, dist);
        vC = lit * fade * (0.0032/w) * (0.35 + 0.6*aSeed.x);
        vQ = position.xy; gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
      }`,
    fragmentShader: /* glsl */`varying vec2 vQ; varying vec3 vC; void main(){ float a = (1.0 - abs(vQ.x))*smoothstep(0.0, 0.2, vQ.y)*smoothstep(1.0, 0.55, vQ.y); gl_FragColor = vec4(vC*a, 1.0); }`,
    transparent: true, depthWrite: false, fog: false, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneFactor,
  });
  const m = new THREE.Mesh(geo, mat); m.frustumCulled = false; m.renderOrder = 32; m.layers.set(1); return m;
}
