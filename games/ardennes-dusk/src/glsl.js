// Shared shader building blocks. Every surface in the game is computed from these: no image files.

export const NOISE = /* glsl */`
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float hash13(vec3 p3){ p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1.0,0.0)), u.x), mix(hash12(i+vec2(0.0,1.0)), hash12(i+vec2(1.0,1.0)), u.x), u.y);
}
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p); vec3 u = f*f*(3.0-2.0*f);
  return mix(
    mix(mix(hash13(i), hash13(i+vec3(1,0,0)), u.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), u.x), u.y),
    mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), u.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), u.x), u.y), u.z);
}
float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a*vnoise(p); p = mat2(1.6,1.2,-1.2,1.6)*p; a *= 0.5; } return s; }
float fbm3(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a*vnoise3(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
// bump a view-space normal from a height value (metres) using screen derivatives
vec3 bumpNormal(vec3 N, vec3 P, float h, float k){
  vec3 dpdx = dFdx(P), dpdy = dFdy(P); float dhdx = dFdx(h), dhdy = dFdy(h);
  vec3 r1 = cross(dpdy, N), r2 = cross(N, dpdx); float det = dot(dpdx, r1);
  vec3 g = sign(det) * (dhdx*r1 + dhdy*r2);
  return normalize(abs(det)*N - k*g);
}
`;

// A wet night: low cloud lit faintly from behind by the moon, and now and then by lightning.
export const SKY = /* glsl */`
uniform float uFlash;
const vec3 HAZE_COL = vec3(0.016, 0.021, 0.034);
const vec2 MOON_DIR = vec2(-0.906, -0.423);
vec3 hazeColor(vec3 d){
  vec2 az = normalize(d.xz + vec2(1e-5));
  float g = pow(max(dot(az, MOON_DIR), 0.0), 3.0);
  return HAZE_COL*(1.0 + 0.9*g) + vec3(0.10, 0.12, 0.16)*uFlash;
}
vec3 skyColor(vec3 d, float t){
  float h = max(d.y, 0.0);
  vec3 col = mix(vec3(0.020, 0.026, 0.042), vec3(0.006, 0.008, 0.015), pow(h, 0.5));
  vec3 moon = normalize(vec3(MOON_DIR.x, 0.62, MOON_DIR.y));
  float md = max(dot(normalize(d), moon), 0.0);
  vec2 uv = d.xz/(h + 0.18);
  float c1 = fbm(uv*0.40 + vec2(t*0.006, 0.0));
  float c2 = fbm(uv*1.40 - vec2(0.0, t*0.008) + c1*1.5);
  float cl = smoothstep(0.30, 0.72, c1*0.62 + c2*0.46);
  col *= mix(1.9, 0.55, cl);
  // the moon never shows: only its glow through thinner cloud
  col += vec3(0.20, 0.24, 0.32)*pow(md, 14.0)*(1.15 - cl) + vec3(0.05, 0.06, 0.085)*pow(md, 3.0);
  col += vec3(0.30, 0.34, 0.42)*uFlash*(0.5 + 0.8*c2);
  col = mix(hazeColor(d), col, smoothstep(-0.02, 0.13, d.y));
  return col;
}
`;

export const HAZE_FRAG = /* glsl */`#ifdef USE_FOG
  { float ff = 1.0 - exp(-fogDensity*fogDensity*vFogDepth*vFogDepth);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, hazeColor(normalize(vWPos - cameraPosition)), ff); }
#endif`;
