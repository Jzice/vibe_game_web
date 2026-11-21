import * as THREE from 'three';

// Camera-style finishing: glare around bright lights, film-style tone curve, colour grade, vignette, grain.
const VERT = /* glsl */`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

export class Post {
  constructor(renderer) {
    this.renderer = renderer; this.levels = 6; this.down = []; this.up = [];
    this.scene = new THREE.Scene(); this.cam = new THREE.Camera();
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 2, 0, 0, 2], 2));
    this.tri = new THREE.Mesh(geo, null); this.tri.frustumCulled = false; this.scene.add(this.tri);
    const mk = (uniforms, fragmentShader) => new THREE.ShaderMaterial({ uniforms, vertexShader: VERT, fragmentShader, depthTest: false, depthWrite: false });

    this.mDown = mk({ tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uFirst: { value: 0 } }, /* glsl */`
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uFirst; varying vec2 vUv;
      vec3 tap(vec2 o){ vec3 c = texture2D(tSrc, vUv + o*uTexel).rgb; return uFirst > 0.5 ? min(c, vec3(90.0)) : c; }
      void main(){
        vec3 c = tap(vec2(0.0))*4.0 + tap(vec2(-1.0,-1.0)) + tap(vec2(1.0,-1.0)) + tap(vec2(-1.0,1.0)) + tap(vec2(1.0,1.0));
        gl_FragColor = vec4(c/8.0, 1.0);
      }`);
    this.mUp = mk({ tSrc: { value: null }, tAdd: { value: null }, uTexel: { value: new THREE.Vector2() }, uW: { value: 1 } }, /* glsl */`
      uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel; uniform float uW; varying vec2 vUv;
      void main(){
        vec2 t = uTexel;
        vec3 c = texture2D(tSrc, vUv + vec2(-t.x*2.0, 0.0)).rgb + texture2D(tSrc, vUv + vec2(t.x*2.0, 0.0)).rgb
               + texture2D(tSrc, vUv + vec2(0.0, -t.y*2.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, t.y*2.0)).rgb
               + 2.0*(texture2D(tSrc, vUv + vec2(-t.x, t.y)).rgb + texture2D(tSrc, vUv + vec2(t.x, t.y)).rgb
               + texture2D(tSrc, vUv + vec2(-t.x, -t.y)).rgb + texture2D(tSrc, vUv + vec2(t.x, -t.y)).rgb);
        gl_FragColor = vec4(c/12.0 + texture2D(tAdd, vUv).rgb * uW, 1.0);
      }`);
    this.mFinal = mk({
      tScene: { value: null }, tBloom: { value: null }, uExposure: { value: 1.3 }, uBloom: { value: 0.07 },
      uTime: { value: 0 }, uBloomNorm: { value: 1 },
    }, /* glsl */`
      uniform sampler2D tScene; uniform sampler2D tBloom; uniform float uExposure; uniform float uBloom; uniform float uTime; uniform float uBloomNorm;
      varying vec2 vUv;
      float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      // ---- AgX tone curve (the fit used by Filament, Blender and three.js) ----
      vec3 agxContrast(vec3 x){ vec3 x2 = x*x; vec3 x4 = x2*x2;
        return 15.5*x4*x2 - 40.14*x4*x + 31.96*x4 - 6.868*x2*x + 0.4298*x2 + 0.1191*x - 0.00232; }
      vec3 agx(vec3 color){
        const mat3 toRec2020 = mat3(vec3(0.6274, 0.0691, 0.0164), vec3(0.3293, 0.9195, 0.0880), vec3(0.0433, 0.0113, 0.8956));
        const mat3 fromRec2020 = mat3(vec3(1.6605, -0.1246, -0.0182), vec3(-0.5876, 1.1329, -0.1006), vec3(-0.0728, -0.0083, 1.1187));
        const mat3 inset = mat3(vec3(0.856627153315983, 0.137318972929847, 0.11189821299995), vec3(0.0951212405381588, 0.761241990602591, 0.0767994186031903), vec3(0.0482516061458583, 0.101439036467562, 0.811302368396859));
        const mat3 outset = mat3(vec3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826), vec3(-0.11060664309660323, 1.157823702216272, -0.11060664309660294), vec3(-0.016493938717834573, -0.016493938717834257, 1.2519364065950405));
        color = inset * (toRec2020 * color);
        color = max(color, 1e-10);
        color = clamp((log2(color) + 12.47393) / 16.5, 0.0, 1.0);
        color = agxContrast(color);
        color = outset * color;
        color = pow(max(vec3(0.0), color), vec3(2.2));
        return clamp(fromRec2020 * color, 0.0, 1.0);
      }
      void main(){
        vec2 d = vUv - 0.5;
        // slight colour fringing towards the corners, as a real lens has
        vec2 ca = d * dot(d, d) * 0.012;
        vec3 c = vec3(texture2D(tScene, vUv + ca).r, texture2D(tScene, vUv).g, texture2D(tScene, vUv - ca).b);
        vec3 bloom = texture2D(tBloom, vUv).rgb * uBloomNorm;
        c = mix(c, bloom, uBloom);
        c *= uExposure * (1.0 - 0.42*pow(length(d)*1.28, 2.6));
        c = agx(c);
        // ---- grade (display-linear) ----
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, 1.14);
        c = c*c*(3.0 - 2.0*c)*0.35 + c*0.65;
        c += vec3(-0.004, 0.001, 0.008) * (1.0 - l);
        c = max(c, 0.0);
        vec3 s = mix(c*12.92, 1.055*pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c));
        s += (hash12(gl_FragCoord.xy + fract(uTime)*311.0) - 0.5) * 0.022;
        gl_FragColor = vec4(s, 1.0);
      }`);
  }
  setSize(w, h, levels) {
    this.levels = levels;
    for (const rt of [...this.down, ...this.up]) if (rt) rt.dispose();
    this.down = []; this.up = [];
    let cw = w, ch = h;
    for (let i = 0; i < levels; i++) {
      cw = Math.max(2, Math.floor(cw / 2)); ch = Math.max(2, Math.floor(ch / 2));
      const opt = { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
      this.down.push(new THREE.WebGLRenderTarget(cw, ch, opt));
      this.up.push(i < levels - 1 ? new THREE.WebGLRenderTarget(cw, ch, opt) : null);
    }
  }
  _pass(mat, target) { this.tri.material = mat; this.renderer.setRenderTarget(target); this.renderer.render(this.scene, this.cam); }
  render(sceneRT, time) {
    const N = this.levels;
    const weights = [0.6, 0.8, 1.0, 1.3, 1.7, 2.2, 2.6];
    let src = sceneRT;
    for (let i = 0; i < N; i++) {
      this.mDown.uniforms.tSrc.value = src.texture;
      this.mDown.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
      this.mDown.uniforms.uFirst.value = i === 0 ? 1 : 0;
      this._pass(this.mDown, this.down[i]); src = this.down[i];
    }
    let acc = this.down[N - 1], norm = weights[N - 1];
    for (let i = N - 2; i >= 0; i--) {
      this.mUp.uniforms.tSrc.value = acc.texture;
      this.mUp.uniforms.tAdd.value = this.down[i].texture;
      this.mUp.uniforms.uTexel.value.set(1 / acc.width, 1 / acc.height);
      this.mUp.uniforms.uW.value = weights[i] / weights[N - 1];
      this._pass(this.mUp, this.up[i]); acc = this.up[i]; norm += weights[i];
    }
    this.mFinal.uniforms.tScene.value = sceneRT.texture;
    this.mFinal.uniforms.tBloom.value = acc.texture;
    this.mFinal.uniforms.uBloomNorm.value = weights[N - 1] / norm;
    this.mFinal.uniforms.uTime.value = time;
    this._pass(this.mFinal, null);
  }
}
