import * as THREE from 'three';
import { NOISE, SKY, HAZE_FRAG } from './glsl.js';

// ---------------------------------------------------------------------------------------------
// Building surfaces, all computed: brick, stone, render, timber, slate, glass, plaster, broken cores
// ---------------------------------------------------------------------------------------------
const SURFACE = /* glsl */`
vec3 brickCol(vec2 uv, vec3 tint, out float h){
  float bh = 0.085, bl = 0.25;
  float row = floor(uv.y/bh);
  float xo = uv.x/bl + 0.5*mod(row, 2.0);
  vec2 id = vec2(floor(xo), row); vec2 fr = vec2(fract(xo), fract(uv.y/bh));
  vec2 de = min(fr, 1.0 - fr) * vec2(bl, bh);
  float m = smoothstep(0.004, 0.012, min(de.x, de.y));
  float r = hash12(id), r2 = hash12(id + 17.3);
  vec3 b = vec3(0.30, 0.115, 0.075) * (0.62 + 0.75*r);
  b = mix(b, vec3(0.15, 0.080, 0.065), step(0.82, r2));
  b = mix(b, vec3(0.36, 0.20, 0.12), step(r2, 0.12));
  b *= 0.85 + 0.3*vnoise(uv*40.0);
  vec3 mort = vec3(0.33, 0.31, 0.28) * (0.8 + 0.3*vnoise(uv*25.0));
  h = m * (0.006 + 0.003*r);
  return mix(mort, b*tint, m);
}
vec3 stoneCol(vec2 uv, vec3 tint, out float h){
  // rough-dressed stones of uneven size: a jittered grid measured with a square distance
  vec2 p = uv / vec2(0.37, 0.25); vec2 n = floor(p), f = fract(p);
  float d1 = 9.0, d2 = 9.0; vec2 id = vec2(0.0);
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++){
    vec2 g = vec2(float(i), float(j)); vec2 o = hash22(n + g)*0.7 + 0.15; vec2 r = g + o - f;
    float d = max(abs(r.x), abs(r.y));
    if (d < d1){ d2 = d1; d1 = d; id = n + g; } else if (d < d2) d2 = d;
  }
  float edge = d2 - d1;
  float m = smoothstep(0.03, 0.11, edge + (vnoise(uv*11.0) - 0.5)*0.05);
  float r = hash12(id);
  vec3 s = mix(vec3(0.20, 0.195, 0.185), vec3(0.37, 0.34, 0.29), r) * (0.68 + 0.64*fbm(uv*3.5 + r*9.0));
  s = mix(s, vec3(0.31, 0.24, 0.165), step(0.78, hash12(id + 4.4))*0.7);
  s = mix(s, vec3(0.165, 0.175, 0.195), step(hash12(id + 8.8), 0.15)*0.7);
  h = m*(0.016 + 0.014*r) + fbm(uv*14.0)*0.005;
  return mix(vec3(0.25, 0.24, 0.22), s*tint, m);
}
vec3 stuccoCol(vec2 uv, vec3 tint, float dmg, out float h){
  float n = fbm(uv*0.9 + 3.0), n2 = fbm(uv*5.0);
  float low = smoothstep(1.7, 0.0, uv.y);
  float reveal = smoothstep(0.60, 0.66, n*0.75 + n2*0.2 + dmg*0.5 + low*0.14);
  float hb; vec3 b = brickCol(uv, vec3(1.0), hb);
  vec3 s = tint * (0.80 + 0.28*n) * (0.92 + 0.12*n2);
  float streak = vnoise(vec2(uv.x*7.0, uv.y*0.5));
  s *= 1.0 - 0.32*smoothstep(0.5, 0.9, streak)*n;
  s *= 1.0 - 0.38*low*n2;
  float crack = smoothstep(0.012, 0.0, abs(vnoise(uv*1.6 + 20.0) - 0.5)) * smoothstep(0.42, 0.7, fbm(uv*0.5 + 8.0));
  s *= 1.0 - 0.5*crack;
  h = mix(0.018 + n2*0.003, hb, reveal);
  return mix(s, b*0.9, reveal);
}
vec3 timberCol(vec2 uv, vec3 tint, out float h){
  float pw = 0.16; float id = floor(uv.y/pw); float fr = fract(uv.y/pw);
  float gap = smoothstep(0.0, 0.05, min(fr, 1.0 - fr));
  float g = vnoise(vec2(uv.x*2.0 + id*7.0, uv.y*60.0));
  vec3 c = vec3(0.20, 0.135, 0.085) * (0.6 + 0.5*hash12(vec2(id, 1.0))) * (0.7 + 0.5*g) * tint;
  h = gap*0.004 + g*0.0015;
  return c * (0.35 + 0.65*gap);
}
vec3 slateCol(vec2 uv, vec3 tint, out float h){
  float rh = 0.19; float row = floor(uv.y/rh); float xo = uv.x/0.24 + 0.5*mod(row, 2.0);
  vec2 id = vec2(floor(xo), row); vec2 fr = vec2(fract(xo), fract(uv.y/rh));
  float r = hash12(id);
  vec3 c = mix(vec3(0.070, 0.080, 0.095), vec3(0.135, 0.145, 0.165), r) * tint;
  c = mix(c, vec3(0.13, 0.105, 0.09), step(0.92, hash12(id + 2.0))*0.7);
  c *= mix(0.5, 1.0, smoothstep(1.0, 0.84, fr.y)) * (0.7 + 0.3*smoothstep(0.0, 0.03, min(fr.x, 1.0 - fr.x)));
  h = (1.0 - fr.y)*0.012;
  return c;
}
// mat, kind (0 outside, 1 inside, 2 broken), tp: position on the building in metres, ln: face normal on the building
vec3 surface(float matF, float kind, vec3 tp, vec3 ln, vec3 tint, float dmg, float extra, out float rough, out float h, out vec3 emis){
  int m = int(matF + 0.5); vec3 an = abs(ln);
  vec2 uv = an.y > 0.72 ? tp.xz : (an.x > an.z ? tp.zy : tp.xy);
  vec3 c; h = 0.0; rough = 0.85; emis = vec3(0.0);
  if (m == 8) { float n = vnoise3(tp*30.0); c = mix(vec3(0.045, 0.033, 0.022), vec3(0.12, 0.09, 0.06), n); h = n*0.02; rough = 0.95; }
  else if (kind > 1.5) {
    if (m == 3) { c = vec3(0.34, 0.235, 0.135) * (0.5 + 0.6*vnoise(vec2(uv.x*3.0, uv.y*90.0))); h = vnoise(uv*vec2(4.0, 120.0))*0.006; }
    else if (m == 4) { float lay = vnoise(vec2(uv.x*2.0, uv.y*70.0)); c = mix(vec3(0.085, 0.095, 0.115), vec3(0.26, 0.19, 0.11), step(0.72, vnoise(uv*6.0))) * (0.6 + 0.6*lay); h = lay*0.004; }
    else if (m == 5) { c = vec3(0.10, 0.13, 0.15); rough = 0.2; }
    else {
      float n = vnoise3(tp*24.0), n2 = fbm3(tp*7.0);
      vec3 core = m == 1 ? vec3(0.30, 0.29, 0.27) : mix(vec3(0.34, 0.125, 0.08), vec3(0.40, 0.37, 0.33), smoothstep(0.38, 0.62, n2));
      c = core * (0.55 + 0.7*n); h = n*0.03 + n2*0.02; rough = 0.95;
    }
  } else if (kind > 0.5 && (m == 6)) {
    vec3 base = mix(vec3(0.40, 0.39, 0.36), tint, 0.22);
    float stripe = 0.975 + 0.025*step(0.5, fract(uv.x*5.0));
    float dado = step(fract(uv.y/3.0)*3.0, 0.95);
    c = base * (0.80 + 0.26*fbm(uv*2.0)) * stripe * mix(1.0, 0.86, dado);
    h = fbm(uv*9.0)*0.002; rough = 0.9;
  } else if (m == 0) { c = brickCol(uv, tint, h); rough = 0.88; }
  else if (m == 1) { c = stoneCol(uv, tint, h); rough = 0.86; }
  else if (m == 2) { c = stuccoCol(uv, tint, dmg, h); rough = 0.9; }
  else if (m == 3) { c = timberCol(an.y > 0.72 ? uv : uv.yx, tint, h); rough = 0.78; }
  else if (m == 4) { c = kind > 0.5 ? timberCol(uv, vec3(0.9), h) : slateCol(uv, tint, h); rough = kind > 0.5 ? 0.8 : 0.6; }
  else if (m == 5) {
    c = vec3(0.016, 0.022, 0.030); rough = 0.07;
    float cur = 0.45 + 0.55*vnoise(vec2(uv.x*9.0, uv.y*0.6));
    emis = vec3(1.0, 0.56, 0.22) * extra * cur * 2.6;
  }
  else if (m == 6) { c = mix(vec3(0.40, 0.39, 0.36), tint, 0.22) * (0.80 + 0.26*fbm(uv*2.0)); rough = 0.9; }
  else { c = vec3(0.045, 0.045, 0.05) * tint; rough = 0.5; }
  // soot and cracking where it has been hit
  if (dmg > 0.0 && m != 5) {
    float cr = smoothstep(0.03, 0.0, abs(vnoise(uv*2.6 + 3.0) - 0.5)) + smoothstep(0.025, 0.0, abs(vnoise(uv*6.0 + 9.0) - 0.5))*0.6;
    c *= 1.0 - clamp(cr, 0.0, 1.0)*min(1.0, dmg*1.6)*0.85;
    c *= mix(1.0, 0.45, dmg*(0.4 + 0.6*fbm(uv*1.5)));
    h -= clamp(cr, 0.0, 1.0)*dmg*0.012;
  }
  return c;
}
`;

const VERT_STRUCT = /* glsl */`#include <common>
#ifdef IS_DEBRIS
attribute vec3 aRest; attribute vec4 aDInfo; attribute vec3 aDTint; attribute vec3 aDHalf;
#else
attribute vec3 aTex; attribute vec4 aInfo; attribute vec3 aTint;
#endif
varying vec3 vTex; varying vec4 vInfo; varying vec3 vTint; varying vec3 vWPos; varying vec3 vWNrm; varying vec3 vLN;`;
const VERT_STRUCT_BODY = /* glsl */`#include <begin_vertex>
#ifdef IS_DEBRIS
  vTex = aRest + position * 2.0 * aDHalf; vTint = aDTint; vLN = normal;
  float kind = 2.0;
  if (aDInfo.y > 8.5) kind = 0.0; else if (aDInfo.y != 0.0) { float oa = abs(aDInfo.y) - 1.0; float comp = oa < 0.5 ? normal.x : (oa < 1.5 ? normal.y : normal.z); if (abs(comp) > 0.5) kind = comp*sign(aDInfo.y) > 0.0 ? 0.0 : 1.0; }
  vInfo = vec4(kind > 0.5 && kind < 1.5 ? aDInfo.z : aDInfo.x, kind, 0.0, aDInfo.w);
  mat4 wm = modelMatrix * instanceMatrix;
#else
  vTex = aTex; vInfo = aInfo; vTint = aTint; vLN = normal;
  mat4 wm = modelMatrix;
#endif
vWPos = (wm * vec4(position, 1.0)).xyz;
vWNrm = normalize(mat3(wm) * normal);`;

function structureLike(shared, debris) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, metalness: 0 });
  if (debris) mat.defines = { IS_DEBRIS: 1 };
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uFlash = shared.uFlash;
    sh.uniforms.uSnow = shared.uSnow; sh.uniforms.uWet = shared.uWet;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', VERT_STRUCT).replace('#include <begin_vertex>', VERT_STRUCT_BODY);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', /* glsl */`#include <common>
uniform float uSnow; uniform float uWet;
varying vec3 vTex; varying vec4 vInfo; varying vec3 vTint; varying vec3 vWPos; varying vec3 vWNrm; varying vec3 vLN;
${NOISE}
${SKY}
${SURFACE}`)
      .replace('#include <metalnessmap_fragment>', /* glsl */`
float metalnessFactor = metalness;
float sRough, sH; vec3 sEmis;
bool isGlass = vInfo.x > 4.5 && vInfo.x < 5.5;
vec3 sAlb = surface(vInfo.x, vInfo.y, vTex, normalize(vLN), vTint, vInfo.z, vInfo.w, sRough, sH, sEmis);
{
  // snow settles on anything that faces the sky
  float sn = isGlass ? 0.0 : vInfo.w;
  float up = vWNrm.y + (fbm(vWPos.xz*2.6) - 0.5)*0.55;
  float snowAmt = smoothstep(0.42, 0.70, up) * sn * uSnow * (vInfo.y > 0.5 && vInfo.y < 1.5 ? 0.0 : 1.0);
  sAlb = mix(sAlb, vec3(0.80, 0.84, 0.90) * (0.9 + 0.1*vnoise(vWPos.xz*9.0)), snowAmt);
  sRough = mix(sRough, 0.86, snowAmt); sH = mix(sH, 0.03 + vnoise(vWPos.xz*7.0)*0.02, snowAmt);
}
#ifdef IS_DEBRIS
// loose pieces are coated in the dust of whatever they broke off
sAlb = mix(sAlb, vec3(0.36, 0.34, 0.31), isGlass ? 0.0 : 0.22 + 0.30*fbm3(vTex*3.0));
#endif
// rain: everything is darker and shinier, most of all what faces the sky
{ float wetAmt = isGlass ? 0.0 : uWet*(0.55 + 0.45*max(vWNrm.y, 0.0)) * (vInfo.y > 0.5 && vInfo.y < 1.5 ? 0.25 : 1.0);
  float run = vnoise(vec2((vWPos.x + vWPos.z)*9.0, vWPos.y*0.6));
  sAlb *= mix(1.0, 0.62, wetAmt); sRough = mix(sRough, sRough*0.42 + 0.04, wetAmt*(0.6 + 0.4*run)); }
diffuseColor.rgb = sAlb; roughnessFactor = sRough; totalEmissiveRadiance += sEmis;`)
      .replace('#include <normal_fragment_maps>', 'normal = bumpNormal(normal, -vViewPosition, sH, 1.0);')
      .replace('#include <fog_fragment>', HAZE_FRAG);
  };
  mat.customProgramCacheKey = () => (debris ? 'debris' : 'structure');
  return mat;
}
export const makeStructureMaterial = (shared) => structureLike(shared, false);
export const makeDebrisMaterial = (shared) => structureLike(shared, true);

// ---------------------------------------------------------------------------------------------
// Rubble mounds: broken brick, mortar and splinters, coloured by what fell there
// ---------------------------------------------------------------------------------------------
export function makeRubbleMaterial(shared) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, metalness: 0 });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uFlash = shared.uFlash;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec4 aRub; varying vec4 vRub; varying vec3 vWPos;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvRub = aRub; vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\nvarying vec4 vRub; varying vec3 vWPos;\n${NOISE}\n${SKY}`)
      .replace('#include <metalnessmap_fragment>', /* glsl */`
float metalnessFactor = metalness;
vec3 rp = vWPos;
// ragged edge: the pile thins out into scattered chips
if (vRub.a + (vnoise(rp.xz*5.0) - 0.5)*0.9 < 0.5) discard;
// broken pieces of every size: jittered cells at three scales, each its own shard of brick, mortar or stone
float rH = 0.0; vec3 ralb = vec3(0.0); float wsum = 0.0;
for (int L = 0; L < 3; L++){
  float sc = L == 0 ? 4.2 : (L == 1 ? 8.5 : 18.0); float wgt = L == 0 ? 0.42 : (L == 1 ? 0.34 : 0.24);
  vec2 pp = rp.xz*sc + float(L)*17.0 + vec2(rp.y*0.7*sc, 0.0); vec2 nn = floor(pp), ff = fract(pp);
  float d1 = 9.0, d2 = 9.0; vec2 id = vec2(0.0);
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++){ vec2 gg = vec2(float(i), float(j)); vec2 oo = hash22(nn + gg + float(L)*5.0); vec2 r = gg + oo - ff; float dd = max(abs(r.x)*0.9 + abs(r.y)*0.4, abs(r.y)); if (dd < d1){ d2 = d1; d1 = dd; id = nn + gg; } else if (dd < d2) d2 = dd; }
  float edge = smoothstep(0.0, 0.16, d2 - d1); float hr = hash12(id + float(L)*3.0), hr2 = hash12(id + 9.0);
  vec3 c = vRub.rgb * (0.55 + 0.8*hr);
  c = mix(c, vec3(0.38, 0.36, 0.33) * (0.7 + 0.5*hr2), step(0.62, hr2));           // mortar and plaster
  c = mix(c, vec3(0.17, 0.115, 0.07), step(hr2, 0.07));                              // splintered timber
  ralb += c * (0.22 + 0.78*edge) * wgt; rH += edge * (0.3 + hr) * wgt * (0.5 / sc); wsum += wgt;
}
ralb /= wsum;
float dust = fbm(rp.xz*1.3);
ralb = mix(ralb, vec3(0.36, 0.33, 0.30), 0.18 + dust*0.3);
diffuseColor.rgb = ralb; roughnessFactor = 0.95;`)
      .replace('#include <normal_fragment_maps>', 'normal = bumpNormal(normal, -vViewPosition, rH, 1.0);')
      .replace('#include <fog_fragment>', HAZE_FRAG);
  };
  mat.customProgramCacheKey = () => 'rubble';
  return mat;
}

// ---------------------------------------------------------------------------------------------
// Painted steel and other built props: tanks, lamps, fences. Vertex colour + (wear, roughness, metal, glow).
// ---------------------------------------------------------------------------------------------
export function makeSteelMaterial(shared, opts = {}) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0 });
  mat.defines = {}; if (opts.camo) mat.defines.CAMO = 1; if (opts.plain) mat.defines.PLAIN = 1;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uFlash = shared.uFlash;
    sh.uniforms.uSnow = shared.uSnow; sh.uniforms.uBurn = opts.burn || { value: 0 }; sh.uniforms.uHeat = opts.heat || { value: 0 };
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', /* glsl */`#include <common>
attribute vec3 aCol; attribute vec4 aPrm;
varying vec3 vCol; varying vec4 vPrm; varying vec3 vWPos; varying vec3 vWNrm; varying vec3 vLPos;`)
      .replace('#include <begin_vertex>', /* glsl */`#include <begin_vertex>
vCol = aCol; vPrm = aPrm; vLPos = position;
#ifdef USE_INSTANCING
mat4 wm = modelMatrix * instanceMatrix;
#else
mat4 wm = modelMatrix;
#endif
vWPos = (wm * vec4(position, 1.0)).xyz; vWNrm = normalize(mat3(wm) * normal);`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', /* glsl */`#include <common>
uniform float uSnow; uniform float uBurn; uniform float uHeat;
varying vec3 vCol; varying vec4 vPrm; varying vec3 vWPos; varying vec3 vWNrm; varying vec3 vLPos;
${NOISE}
${SKY}`)
      .replace('#include <metalnessmap_fragment>', /* glsl */`
float metalnessFactor = metalness;
float tH = 0.0;
{
  vec3 lp = vLPos;                                   // paint and wear stay fixed to the object as it moves
  float wearAmt = vPrm.x;
  float n1 = fbm3(lp*1.7), n2 = fbm3(lp*7.0 + 3.0), n3 = vnoise3(lp*46.0);
  vec3 base = vCol;
#ifdef CAMO
  // three-colour factory camouflage sprayed in soft patches, only on the main paint (wear >= 0.3)
  if (wearAmt > 0.29 && vPrm.z < 0.5) {
    float cA = fbm3(lp*0.55 + 11.0), cB = fbm3(lp*0.62 + 37.0);
    base = mix(base, vec3(0.075, 0.105, 0.055), smoothstep(0.50, 0.56, cA));
    base = mix(base, vec3(0.115, 0.058, 0.036), smoothstep(0.55, 0.60, cB));
  }
#endif
  base *= 0.80 + 0.40*n1;
#ifdef PLAIN
  wearAmt = 0.0;
#endif
  float chips = smoothstep(0.80 - 0.25*wearAmt, 0.92 - 0.2*wearAmt, n2*0.75 + n3*0.35);
  float vert = 1.0 - abs(vWNrm.y);
  float streak = vnoise(vec2((lp.x + lp.z)*13.0, lp.y*1.2));
  float rust = clamp(chips + smoothstep(0.62, 0.9, vnoise(vec2((lp.x + lp.z)*5.0, 2.0)))*streak*vert*wearAmt*0.7, 0.0, 1.0) * step(0.01, wearAmt);
  vec3 rustC = mix(vec3(0.085, 0.032, 0.014), vec3(0.26, 0.105, 0.036), n3);
  base = mix(base, rustC, rust);
  // dried mud and slush thrown up low on the hull
  float mud = smoothstep(1.25, 0.25, lp.y) * smoothstep(0.35, 0.75, n1 + n2*0.5) * step(0.25, wearAmt);
  base = mix(base, vec3(0.11, 0.092, 0.07) * (0.7 + 0.5*n3), mud*0.85);
  // burnt out
  { // paint burnt off: soot, grey ash where it burnt hottest, and bare plate already rusting in the rain
    float ash = smoothstep(0.48, 0.74, fbm3(lp*2.6 + 9.0));
    vec3 burnt = mix(vec3(0.016, 0.014, 0.013), vec3(0.095, 0.090, 0.086), ash*0.75) * (0.6 + 0.8*n2);
    burnt = mix(burnt, vec3(0.16, 0.060, 0.022)*(0.6 + 0.8*n3), smoothstep(0.50, 0.72, n1)*(1.0 - ash)*0.8);
    base = mix(base, burnt, uBurn * step(0.01, wearAmt)); }
#ifdef PLAIN
  float snowAmt = smoothstep(0.25, 0.75, vWNrm.y + (n1 - 0.5)*0.7) * uSnow * vPrm.x;
#else
  float snowAmt = smoothstep(0.55, 0.85, vWNrm.y + (n1 - 0.5)*0.6) * uSnow * (1.0 - uBurn) * step(0.25, wearAmt) * 0.75;
#endif
  base = mix(base, vec3(0.80, 0.84, 0.90), snowAmt);
  diffuseColor.rgb = base;
  float wetS = (1.0 - uBurn) * (0.5 + 0.5*max(vWNrm.y, 0.0));
  diffuseColor.rgb *= mix(1.0, 0.72, wetS*(1.0 - vPrm.z));
  roughnessFactor = clamp(mix(mix(vPrm.y, 0.92, max(rust, mud)), 0.86, snowAmt)*mix(1.0, 0.45, wetS) + uBurn*0.3, 0.05, 1.0);
  metalnessFactor = vPrm.z * (1.0 - rust) * (1.0 - snowAmt);
  totalEmissiveRadiance += vCol * vPrm.w * (1.0 - uBurn);
  // plates heated from inside glow dull red in patches
  if (uHeat > 0.0) { float hot = smoothstep(0.52, 0.80, n1*0.6 + n2*0.5) * smoothstep(0.9, 1.9, lp.y); totalEmissiveRadiance += vec3(1.0, 0.13, 0.012) * hot * uHeat * 1.1 * step(0.01, wearAmt); }
  tH = n3*0.0016 - chips*0.002 + mud*n2*0.012 + snowAmt*0.02;
}`)
      .replace('#include <normal_fragment_maps>', 'normal = bumpNormal(normal, -vViewPosition, tH, 1.0);')
      .replace('#include <fog_fragment>', HAZE_FRAG);
  };
  mat.customProgramCacheKey = () => 'steel' + (opts.camo ? 'c' : '') + (opts.plain ? 'p' : '') + (opts.key || '');
  return mat;
}
