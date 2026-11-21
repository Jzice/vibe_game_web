import * as THREE from 'three';
import { NOISE, SKY } from './glsl.js';
import { CFG } from './terrain.js';
import { Post } from './post.js';

export const QUALITY = {
  low: { scale: 0.55, msaa: 0, shadow: 1536, bloom: 5, mirror: 0.35, mirrorEvery: 2, rain: 5000 },
  medium: { scale: 0.75, msaa: 2, shadow: 2048, bloom: 6, mirror: 0.45, mirrorEvery: 1, rain: 9000 },
  high: { scale: 1.0, msaa: 4, shadow: 4096, bloom: 6, mirror: 0.55, mirrorEvery: 1, rain: 14000 },
};
export const MAX_LAMPS = 8;

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'high-performance' });
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.info.autoReset = false;
  return renderer;
}

export function createShared() {
  return {
    uTime: { value: 0 }, uSnow: { value: 0 }, uWet: { value: 1 }, uFlash: { value: 0 }, uMarks: { value: null },
    uRefl: { value: null }, uReflMat: { value: new THREE.Matrix4() },
    uSunDir: { value: new THREE.Vector3(-0.72, 0.56, -0.40).normalize() },
    uSunCol: { value: new THREE.Vector3(0.10, 0.13, 0.19) },
    uAmb: { value: new THREE.Vector3(0.030, 0.040, 0.062) },
    uFirePos: { value: [0, 1, 2, 3].map(() => new THREE.Vector3(0, -999, 0)) },
    uFireCol: { value: [0, 1, 2, 3].map(() => new THREE.Vector3()) },
    // lamps, headlights and flashes that light the rain
    uLampPos: { value: Array.from({ length: MAX_LAMPS }, () => new THREE.Vector3(0, -999, 0)) },
    uLampCol: { value: Array.from({ length: MAX_LAMPS }, () => new THREE.Vector3()) },
  };
}

export function createSky(shared) {
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: shared.uTime, uFlash: shared.uFlash },
    vertexShader: /* glsl */`varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0); gl_Position = p.xyww; }`,
    fragmentShader: /* glsl */`uniform float uTime; varying vec3 vDir;
      ${NOISE}
      ${SKY}
      void main(){ gl_FragColor = vec4(skyColor(normalize(vDir), uTime), 1.0); }`,
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(10, 32, 16), mat); mesh.frustumCulled = false; mesh.renderOrder = -10;
  return mesh;
}

// Moonlight through cloud (with shadows that follow the player), a little sky fill, and lightning.
export function setupLighting(renderer, scene, shared) {
  scene.fog = new THREE.FogExp2(new THREE.Color(0.016, 0.021, 0.034), CFG.FOG_DENSITY);
  const pm = new THREE.PMREMGenerator(renderer); const env = new THREE.Scene(); env.add(createSky(shared));
  scene.environment = pm.fromScene(env, 0, 0.1, 100).texture; scene.environmentIntensity = 1.6; pm.dispose();
  const sun = new THREE.DirectionalLight(new THREE.Color(0.55, 0.68, 1.0), 0.42);
  sun.castShadow = true; const c = sun.shadow.camera; c.left = -70; c.right = 70; c.top = 70; c.bottom = -70; c.near = 20; c.far = 320;
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.09; sun.shadow.mapSize.set(4096, 4096);
  scene.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(new THREE.Color(0.10, 0.14, 0.24), new THREE.Color(0.03, 0.035, 0.04), 1.0);
  scene.add(hemi);
  const L = { sun, hemi, base: 0.42, storm: { next: 9 + Math.random() * 14, t: 9, seq: [] } };
  // keep the shadowed area centred on whatever the camera is following
  L.follow = (x, z) => { const texel = 140 / sun.shadow.mapSize.x * 4; const sx = Math.round(x / texel) * texel, sz = Math.round(z / texel) * texel; sun.target.position.set(sx, 0, sz); sun.position.copy(shared.uSunDir.value).multiplyScalar(170).add(sun.target.position); sun.target.updateMatrixWorld(); };
  // lightning: two or three quick flickers, then thunder after a delay
  L.update = (dt, audio, camPos) => {
    const s = L.storm; s.next -= dt; s.t += dt;
    if (s.next <= 0) { s.next = 14 + Math.random() * 26; s.t = 0; s.seq = [0, 0.09 + Math.random() * 0.08, 0.3 + Math.random() * 0.25].slice(0, 2 + (Math.random() < 0.5 ? 1 : 0)); s.power = 0.5 + Math.random() * 0.5; s.thunder = 1.2 + Math.random() * 3.5; }
    let f = 0; for (const a of s.seq) { const d = s.t - a; if (d >= 0) f = Math.max(f, Math.exp(-d * 16) * (s.power || 1)); }
    shared.uFlash.value = f; sun.intensity = L.base + f * 3.2; hemi.intensity = 1.0 + f * 5;
    if (s.thunder !== undefined && s.t >= s.thunder) { s.thunder = undefined; if (audio && camPos) audio.play('thunder', { x: camPos.x, y: camPos.y + 40, z: camPos.z - 60 }, { gain: 0.5 + 0.5 * (s.power || 1), rate: 0.85 + Math.random() * 0.3, own: true, wet: 0.5 }); }
  };
  return L;
}

const texBias = new THREE.Matrix4().set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
export class Frame {
  constructor(renderer, canvas, shared) {
    this.renderer = renderer; this.canvas = canvas; this.shared = shared; this.post = new Post(renderer); this.rt = null; this.mirrorRT = null; this.q = QUALITY.high; this.n = 0;
    this.mirrorCam = new THREE.PerspectiveCamera(); this.mirrorCam.layers.set(0);
    this.clipOn = [new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.02)]; this.clipOff = [];
    this._rot = new THREE.Matrix4(); this._look = new THREE.Vector3();
  }
  resize(q, camera, sun) {
    this.q = q; const w = window.innerWidth, h = window.innerHeight;
    const pr = Math.min(window.devicePixelRatio || 1, 1.5) * q.scale;
    const pw = Math.max(2, Math.round(w * pr)), ph = Math.max(2, Math.round(h * pr));
    this.renderer.setPixelRatio(1); this.renderer.setSize(pw, ph, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    if (this.rt) this.rt.dispose(); if (this.mirrorRT) this.mirrorRT.dispose();
    this.rt = new THREE.WebGLRenderTarget(pw, ph, { type: THREE.HalfFloatType, samples: q.msaa, depthBuffer: true });
    this.mirrorRT = new THREE.WebGLRenderTarget(Math.max(2, Math.round(pw * q.mirror)), Math.max(2, Math.round(ph * q.mirror)), { type: THREE.HalfFloatType, depthBuffer: true, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter, magFilter: THREE.LinearFilter });
    this.shared.uRefl.value = this.mirrorRT.texture;
    this.post.setSize(pw, ph, q.bloom);
    if (sun && sun.shadow.mapSize.x !== q.shadow) { sun.shadow.mapSize.set(q.shadow, q.shadow); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
  }
  // the scene as seen in a mirror lying on the ground (y = 0): what the wet streets reflect
  renderMirror(scene, camera) {
    const mc = this.mirrorCam, r = this.renderer;
    this._rot.extractRotation(camera.matrixWorld); this._look.set(0, 0, -1).applyMatrix4(this._rot).add(camera.position);
    mc.position.set(camera.position.x, -camera.position.y, camera.position.z);
    mc.up.set(0, 1, 0).applyMatrix4(this._rot); mc.up.y *= -1; mc.lookAt(this._look.x, -this._look.y, this._look.z);
    // same lens as the main camera, but it only needs to see as far as a reflection can be made out
    mc.fov = camera.fov; mc.aspect = camera.aspect; mc.near = camera.near; mc.far = 150; mc.updateProjectionMatrix(); mc.updateMatrixWorld();
    this.shared.uReflMat.value.copy(texBias).multiply(mc.projectionMatrix).multiply(mc.matrixWorldInverse);
    const auto = r.shadowMap.autoUpdate; r.shadowMap.autoUpdate = false;          // shadows are drawn once, in the main pass
    r.clippingPlanes = this.clipOn; r.setRenderTarget(this.mirrorRT); r.render(scene, mc); r.clippingPlanes = this.clipOff; r.shadowMap.autoUpdate = auto;
  }
  render(scene, camera, time) {
    this.renderer.info.reset();
    if ((this.n++ % (this.q.mirrorEvery || 1)) === 0) this.renderMirror(scene, camera);
    this.renderer.setRenderTarget(this.rt); this.renderer.render(scene, camera);
    this.post.render(this.rt, time);
  }
}
