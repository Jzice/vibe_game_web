// The street plan. Each road is a bent line with a half-width; houses, lamps, paving and the map are all laid out from it.
// x runs east, z runs south. The river flows along z = -34; the town is south of it.
export const SQUARE = { x: 0, z: 60, hx: 22, hz: 14 };
export const BRIDGES = [{ x: 0, name: 'bridge' }, { x: 86, name: 'east bridge' }];
export const FORD = { x: -96, half: 8 };
export const SIDEWALK = 1.5;      // width of the pavement on each side of every cobbled street, and round the square
// a bare hill on the south-east edge of the town, climbed by a track that doubles back on itself
export const HILL = { x: 112, z: 124, r: 36, h: 9 };

const R = (name, w, pts, dirt = false) => ({ name, w, pts, dirt });
export const ROADS = [
  R('pont', 4.8, [[0, -21], [0, 8], [3.5, 28], [0, 46]]),                                   // bridge up to the square
  R('quay', 4.2, [[-132, -16.5], [-96, -15.8], [-58, -16.8], [0, -16.6], [48, -15.8], [86, -16.8], [132, -16.2]]),
  R('west', 4.0, [[-58, -16.8], [-63, 4], [-53, 26], [-59, 50], [-44, 70], [-22, 68]]),
  R('east', 4.2, [[86, -21], [85, 0], [72, 22], [79, 44], [61, 62], [22, 62]]),
  R('cross', 4.0, [[-53, 26], [-30, 21], [0, 19], [30, 15.5], [72, 22]]),
  R('south', 4.0, [[0, 74], [-6, 94], [4, 118], [0, 160]]),
  R('highw', 4.0, [[-150, 62], [-104, 57], [-59, 50]]),
  R('highe', 4.0, [[61, 62], [98, 70], [150, 66]]),
  R('lanesw', 3.5, [[-44, 70], [-33, 98], [-6, 94]]),
  R('lanene', 3.5, [[30, 15.5], [39, -1], [36, -16]]),
  R('lanenw', 3.5, [[-30, 21], [-35, 2], [-28, -16.6]]),
  R('lanese', 3.5, [[61, 62], [53, 85], [31, 101], [4, 118]]),
  // west quarter: a lane that zigzags up from the ford, tied back to the west street, with an outer road round it
  R('zigw', 3.6, [[-96, -15.8], [-84, 0], [-106, 12], [-86, 25], [-108, 38], [-104, 57]]),
  R('tanw', 3.6, [[-63, 4], [-84, 0]]),
  R('tanw2', 3.6, [[-53, 26], [-86, 25]]),
  R('ringw', 3.6, [[-132, -16.5], [-130, 12], [-126, 38], [-104, 57]]),
  R('linkw', 3.6, [[-106, 12], [-130, 12]]),
  // east quarter: the same on the other side
  R('zige', 3.6, [[118, -16.4], [104, -2], [124, 10], [102, 24], [122, 38], [116, 56], [98, 70]]),
  R('tane', 3.6, [[85, 0], [104, -2]]),
  R('tane2', 3.6, [[72, 22], [102, 24]]),
  R('tane3', 3.6, [[79, 44], [122, 38]]),
  // south-west quarter
  R('ringsw', 3.5, [[-104, 57], [-98, 82], [-74, 100], [-33, 98]]),
  R('zigsw', 3.6, [[-59, 50], [-72, 64], [-56, 78], [-74, 100]]),
  R('souw', 3.6, [[-74, 100], [-58, 122], [-30, 127], [4, 118]]),
  // south-east quarter
  R('ringse', 3.5, [[98, 70], [86, 92], [62, 108], [31, 101]]),
  R('zigse', 3.6, [[53, 85], [70, 79], [86, 92]]),
  R('soue', 3.6, [[62, 108], [40, 129], [4, 118]]),
  // the hill track: three legs and two hairpins to the top
  R('hill', 3.0, [[86, 92], [106, 96], [130, 106], [136, 120], [122, 128], [100, 128], [96, 118], [112, 122]], true),
  R('fordS', 3.6, [[-96, -15.8], [-96, -22]], true),
  // far bank
  R('north', 3.6, [[0, -47], [0, -90], [-3, -150]], true),
  R('northe', 3.4, [[86, -47], [90, -78], [62, -116], [0, -112]], true),
  R('fordN', 3.4, [[-96, -46], [-92, -70], [-56, -98], [0, -112]], true),
];

// flat list of segments: [ax, az, bx, bz, halfWidth, dirt]
export const SEGMENTS = [];
for (const r of ROADS) for (let i = 0; i < r.pts.length - 1; i++) SEGMENTS.push([r.pts[i][0], r.pts[i][1], r.pts[i + 1][0], r.pts[i + 1][1], r.w, r.dirt ? 1 : 0]);

export function segDist(x, z, s) {
  const dx = s[2] - s[0], dz = s[3] - s[1], l2 = dx * dx + dz * dz; let t = l2 > 0 ? ((x - s[0]) * dx + (z - s[1]) * dz) / l2 : 0; t = Math.max(0, Math.min(1, t));
  return Math.hypot(x - s[0] - dx * t, z - s[1] - dz * t);
}
// distance from the edge of the nearest road (negative = on the road), ignoring far-bank tracks if townOnly
export function roadEdgeDist(x, z) {
  let d = 1e9; for (const s of SEGMENTS) { const e = segDist(x, z, s) - s[4]; if (e < d) d = e; }
  const q = Math.max(Math.abs(x - SQUARE.x) - SQUARE.hx, Math.abs(z - SQUARE.z) - SQUARE.hz); if (q < d) d = q;
  return d;
}
// walk along a road: returns points every `step` metres with the direction of travel
export function walk(road, step) {
  const out = []; let carry = 0;
  for (let i = 0; i < road.pts.length - 1; i++) {
    const [ax, az] = road.pts[i], [bx, bz] = road.pts[i + 1]; const len = Math.hypot(bx - ax, bz - az), tx = (bx - ax) / len, tz = (bz - az) / len;
    for (let d = carry; d < len; d += step) out.push({ x: ax + tx * d, z: az + tz * d, tx, tz });
    carry = (carry + Math.ceil((len - carry) / step) * step) - len;
  }
  return out;
}
