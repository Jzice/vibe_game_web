// Everything the crew and the company say, and the place names they use.
// Read by the game (src/radio.js) and by the recording script (make_radio.mjs).
//
// Procedure follows US armored practice of 1944. The commander's fire order runs "Gunner, tank, shot,
// traverse right... steady", the gunner answers "Identified!" when he has it in his sight and "On the way!"
// as he fires, the loader shouts "Up!" when the gun is loaded, and the commander senses each round:
// "Target!", "Short! Add fifty", "Over! Drop fifty". Targets are called by clock direction from the hull
// and range in yards. On the company net, call signs use the phonetic alphabet of the time: our tank is
// Baker Three, the company commander Baker Six, the tank next to us Baker Four, and Able Two is in the next
// company. "Over" when an answer is wanted, "Out" when not. One man keys the set at a time.
//
// Two kinds of recording:
//  - CLIPS: short parts read by one voice (a call sign, a clock direction, a place, a range). The game joins
//    them into whole calls at the moment they are said, so the direction, range and place are always true.
//  - TAKES: whole crew exchanges recorded in one go with several voices (ElevenLabs text to dialogue),
//    so the men react to each other: a hit, a fire, the quiet between fights.
// Text in square brackets is a delivery direction for the voice model and is not spoken.

export const VOICES = {
  cmd: { name: 'Commander (intercom)', voice: 'GLSWsaquVBsIPLPPRi2s', net: false },     // "George, war-torn sergeant"
  cmdnet: { name: 'Commander on the net', voice: 'GLSWsaquVBsIPLPPRi2s', net: true },
  gun: { name: 'Gunner', voice: 'SOYHLrjzK2X1ezoPC6cr', net: false },                   // Harry
  load: { name: 'Loader', voice: 'xTPraQg3m0c9zmDQoAax', net: false },                  // Rayne
  drv: { name: 'Driver', voice: 'AocjYzHzWRalprWmBG9m', net: false },                   // Greg
  six: { name: 'Baker Six, company commander', voice: 'TxWZERZ5Hc6h9dGxVmXa', net: true }, // Jerry B.
  four: { name: 'Baker Four, the next tank', voice: 'nPczCjzI2devNBz1zQrb', net: true },  // Brian
  able: { name: 'Able Two, next company', voice: 'iPYqcpY8j8Ap4jUf28I3', net: true },     // Michael
};

// ---- places: what the men call each part of the town (see map.svg) ----
export const PLACES = {
  square: ['by the square', 'the square'], bridge: ['on the bridge', 'the bridge'], ebridge: ['on the east bridge', 'the east bridge'],
  ford: ['at the ford', 'the ford'], quay: ['on the quay', 'the quay'], westq: ['in the west quarter', 'the west quarter'],
  eastq: ['in the east quarter', 'the east quarter'], sw: ['in the south-west', 'the south-west'], se: ['in the south-east', 'the south-east'],
  hill: ['on the hill', 'the hill'], river: ['across the river', 'across the river'], nsq: ['north of the square', 'north of the square'],
  ssq: ['south of the square', 'south of the square'], wsq: ['west of the square', 'west of the square'], esq: ['east of the square', 'east of the square'],
  nroad: ['on the north road', 'the north road'], eroad: ['on the east road', 'the east road'], wroad: ['on the west road', 'the west road'],
};
// x runs east, z runs south; the river is at z = -34, the square at (0, 60)
export function placeOf(x, z) {
  if (Math.hypot(x - 112, z - 124) < 40) return 'hill';
  if (z < -40) return x > 130 ? 'eroad' : x < -130 ? 'wroad' : z < -70 && Math.abs(x) < 20 ? 'nroad' : 'river';
  if (z < -8) return Math.abs(x) < 12 ? 'bridge' : Math.abs(x - 86) < 12 ? 'ebridge' : Math.abs(x + 96) < 14 ? 'ford' : 'quay';
  if (x > 140) return 'eroad'; if (x < -140) return 'wroad';
  if (Math.abs(x) <= 26 && z >= 42 && z <= 78) return 'square';
  if (x < -72 && z < 58) return 'westq'; if (x > 90 && z < 62) return 'eastq';
  if (z > 76) return x < -10 ? 'sw' : x > 10 ? 'se' : 'ssq';
  if (z < 42 && Math.abs(x) < 40) return 'nsq';
  return x < 0 ? 'wsq' : 'esq';
}
// where a Tiger is coming in from, by the road named in the wave list
export function arrivalPlace(from = '', x = 0, z = 0) {
  const f = from.toLowerCase();
  if (f.includes('east bridge')) return 'ebridge'; if (f.includes('bridge')) return 'bridge'; if (f.includes('ford')) return 'ford';
  if (f.includes('north')) return 'nroad'; if (f.includes('west')) return 'wroad'; if (f.includes('east')) return 'eroad';
  return placeOf(x, z);
}

const SH = '[shouting over the engine]', TENSE = '[tense, low]', RADIO = '[clipped, flat, on the radio]', URG = '[urgent, on the radio]';
const CLOCK = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
const cap = (s) => s[0].toUpperCase() + s.slice(1);

// id -> { who, text }
export const CLIPS = {};
const add = (id, who, text) => { CLIPS[id] = { who, text }; };
// commander on the intercom
['Tiger!', 'Tank! Tiger!', 'There he is! Tiger!'].forEach((t, i) => add(`cmd_tiger_${i + 1}`, 'cmd', `${SH} ${t}`));
add('cmd_another_1', 'cmd', `${SH} Another one!`); add('cmd_another_2', 'cmd', `${SH} Two of them!`);
CLOCK.forEach((c, i) => add(`cmd_clock_${i + 1}`, 'cmd', `${SH} ${c} o'clock!`));
for (const [k, [at]] of Object.entries(PLACES)) add(`cmd_at_${k}`, 'cmd', `${SH} ${cap(at)}!`);
add('cmd_range_close', 'cmd', `${SH} Close range!`); add('cmd_range_1', 'cmd', `${SH} A hundred yards!`);
['Two', 'Three', 'Four', 'Five'].forEach((n, i) => add(`cmd_range_${i + 2}`, 'cmd', `${SH} ${n} hundred!`));
add('cmd_order_1', 'cmd', `${SH} Gunner! Tank! Shot!`); add('cmd_order_2', 'cmd', `${SH} Gunner, tank, shot!`);
add('cmd_trav_right', 'cmd', `${SH} Traverse right!`); add('cmd_trav_left', 'cmd', `${SH} Traverse left!`); add('cmd_trav_front', 'cmd', `${SH} Dead ahead!`);
add('cmd_steady_1', 'cmd', `${TENSE} Steady... steady...`); add('cmd_steady_2', 'cmd', `${TENSE} Easy... take your time.`); add('cmd_steady_3', 'cmd', `${TENSE} Keep on him.`);
add('cmd_more_right', 'cmd', `${SH} Right! More right!`); add('cmd_more_left', 'cmd', `${SH} Left! Come left!`);
add('cmd_fire_1', 'cmd', `${SH} Fire!`); add('cmd_fire_2', 'cmd', `${SH} Fire! Fire!`); add('cmd_fire_3', 'cmd', `[angry, shouting] Fire, damn it!`);
add('cmd_sense_short', 'cmd', `${SH} Short! Add fifty!`); add('cmd_sense_over', 'cmd', `${SH} Over! Drop fifty!`);
add('cmd_sense_left', 'cmd', `${SH} Miss, left! Come right!`); add('cmd_sense_right', 'cmd', `${SH} Miss, right! Come left!`);
add('cmd_sense_house', 'cmd', `${SH} You hit the house! Wait till he's clear!`);
add('cmd_pen_1', 'cmd', `[excited, shouting] Hit! He's hurt!`); add('cmd_pen_2', 'cmd', `[excited, shouting] Went in! Again!`); add('cmd_pen_3', 'cmd', `[shouting] Target! He's smoking! Again!`);
add('cmd_held_1', 'cmd', `[frustrated, shouting] Hit, no good! Again!`); add('cmd_held_2', 'cmd', `[shouting] Didn't go in! Hit him again!`);
add('cmd_ric_1', 'cmd', `[frustrated, shouting] Bounced off! Get his side!`); add('cmd_ric_2', 'cmd', `[shouting] Glanced off! Hit him square!`);
add('cmd_track_1', 'cmd', `[excited, shouting] His track's off! He's stuck!`); add('cmd_track_2', 'cmd', `[shouting] Track! He can't move! Finish him!`);
add('cmd_cover_1', 'cmd', `${SH} He's backing off to reload!`); add('cmd_cover_2', 'cmd', `${SH} He's pulling back behind the house! Wait for him!`);
add('cmd_lost_1', 'cmd', `${TENSE} Lost him.`); add('cmd_lost_2', 'cmd', `${TENSE} Where'd he go?`);
add('cmd_flank_left', 'cmd', `${SH} He's coming round on our left!`); add('cmd_flank_right', 'cmd', `${SH} He's coming round on our right!`); add('cmd_flank_behind', 'cmd', `[alarmed, shouting] He's behind us!`);
add('cmd_laying_1', 'cmd', `[alarmed, shouting] He's laying on us! Driver, back up!`); add('cmd_laying_2', 'cmd', `[alarmed, shouting] He's traversing on us! Back up! Back up!`);
add('cmd_moving_left', 'cmd', `${SH} He's moving left!`); add('cmd_moving_right', 'cmd', `${SH} He's moving right!`);
add('cmd_urge_1', 'cmd', `[impatient, shouting] Come on, come on, load!`); add('cmd_urge_2', 'cmd', `[shouting] Load! Load!`);
add('cmd_swing_left', 'cmd', `${SH} Driver! Swing her left!`); add('cmd_swing_right', 'cmd', `${SH} Driver! Swing her right!`);
add('cmd_near_1', 'cmd', `[shaken] Close one!`); add('cmd_near_2', 'cmd', `${SH} He's ranging on us! Keep moving!`);
add('cmd_cantsee', 'cmd', `${TENSE} Can you see him?`);
// gunner, loader, driver
add('gun_ident_1', 'gun', `${SH} Identified!`); add('gun_ident_2', 'gun', `${SH} I see him!`); add('gun_ident_3', 'gun', `[strained] On him!`);
add('gun_otw_1', 'gun', `${SH} On the way!`); add('gun_otw_2', 'gun', `[shouting] On the way!`); add('gun_otw_3', 'gun', `[strained, shouting] On the way!`);
add('gun_cantsee', 'gun', `${TENSE} Can't see him. Rain's too thick.`); add('gun_fill_1', 'gun', `${TENSE} I'm on him.`); add('gun_fill_2', 'gun', `${TENSE} Come on... show yourself.`);
add('load_up_1', 'load', `[shouting, out of breath] Up!`); add('load_up_2', 'load', `[shouting] Up!`); add('load_up_3', 'load', `[grunting, shouting] Up! A-P!`); add('load_up_4', 'load', `[shouting] Loaded!`);
add('load_loading', 'load', `[grunting] Loading!`);
add('drv_ok_1', 'drv', `${SH} Backing up!`); add('drv_ok_2', 'drv', `${SH} Swinging!`); add('drv_ok_3', 'drv', `${SH} Hang on!`);
// our commander on the company net
add('cmdnet_call', 'cmdnet', `${RADIO} Six, Three.`); add('cmdnet_kill', 'cmdnet', `${RADIO} Tiger knocked out,`);
for (const [k, [at]] of Object.entries(PLACES)) add(`cmdnet_at_${k}`, 'cmdnet', `${RADIO} ${at}.`);
add('cmdnet_over', 'cmdnet', `${RADIO} Over.`);
add('cmdnet_roger_1', 'cmdnet', `${RADIO} Roger. Out.`); add('cmdnet_roger_2', 'cmdnet', `${RADIO} Wilco. Out.`); add('cmdnet_roger_3', 'cmdnet', `${RADIO} Three, roger. Out.`); add('cmdnet_thanks', 'cmdnet', `${RADIO} Roger, Four. Thanks.`);
// Baker Six
add('six_call_us', 'six', `${RADIO} Baker Three, Six.`); add('six_call_all', 'six', `${RADIO} All Baker stations, Six.`);
add('six_tiger', 'six', `${URG} One Tiger,`); add('six_another', 'six', `${URG} Another Tiger,`);
for (const [k, [at]] of Object.entries(PLACES)) add(`six_at_${k}`, 'six', `${RADIO} ${at}.`);
CLIPS.six_at_ford.text = `${RADIO} crossing at the ford.`;          // read alone, his "ford" came out as "fort"
add('six_over', 'six', `${RADIO} Over.`); add('six_out', 'six', `${RADIO} Six, out.`);
add('six_good_1', 'six', `${RADIO} Roger, Three. Good work.`); add('six_good_2', 'six', `${RADIO} Roger, Three. Nice shooting.`);
['One', 'Two', 'Three', 'Four'].forEach((n, i) => add(`six_left_${i + 1}`, 'six', `${RADIO} ${n} left out there.`));
add('six_start_1', 'six', `${RADIO} Baker Three, Six. Hold the square. Tigers coming in from the north. Over.`);
add('six_won_1', 'six', `[relieved, on the radio] All Baker, Six. That's the last of them. The town is ours. Out.`);
add('six_won_2', 'six', `[relieved, on the radio] Baker Three, Six. Town is clear. Damn fine work. Out.`);
// Baker Four
add('four_call_us', 'four', `${URG} Three, Four.`); add('four_call_six', 'four', `${RADIO} Six, Four.`);
add('four_rel_behind', 'four', `${URG} One coming up behind you,`); add('four_rel_left', 'four', `${URG} Tiger on your left,`);
add('four_rel_right', 'four', `${URG} Tiger on your right,`); add('four_rel_ahead', 'four', `${URG} Tiger ahead of you,`);
for (const [k, [at]] of Object.entries(PLACES)) add(`four_at_${k}`, 'four', `${URG} ${at}.`);
add('four_over', 'four', `${RADIO} Over.`); add('four_out', 'four', `${RADIO} Four, out.`);
add('four_burn_1', 'four', `[excited, on the radio] Saw that one burn. Nice shooting, Three.`);
add('four_lost_1', 'four', `[shaken, on the radio] Six, Four. Baker Three is hit. They're getting out. Over.`);
add('four_lost_2', 'four', `[shaken, on the radio] Six, Four. Three's burning. I see two men out. Over.`);
// net traffic in quiet moments, and distant traffic heard faintly under the bed
add('four_idle_1', 'four', `${RADIO} Six, Four. Nothing moving on my side. Over.`);
add('six_idle_1', 'six', `${RADIO} Roger, Four. Keep watching. Out.`);
add('six_idle_2', 'six', `${RADIO} Four, Six. Radio check. Over.`);
add('four_idle_2', 'four', `${RADIO} Six, Four. Five by five. Over.`);
add('six_idle_3', 'six', `${RADIO} All Baker stations, Six. Stay off the main street. Out.`);
add('able_idle_1', 'able', `${RADIO} Baker Six, Able Two. Say again your last. Over.`);
add('six_idle_4', 'six', `${RADIO} Able Two, Six. I say again, hold at the crossroads. Out.`);
add('able_far_1', 'able', `${RADIO} Able Six, Able Two. Moving up. Over.`);
add('able_far_2', 'able', `${RADIO} Charlie One, Able Two. Smoke on the ridge. Over.`);
add('able_far_3', 'able', `${RADIO} Roger. Wait. Out.`);

// ---- the result of our shot, from what Combat.strike found: which plate, and what it did ----
// The Sherman's special round goes through the Tiger's front only when it meets it square; angle beats it.
// Sides and rear go through easily; the turret front never does. The advice follows from that.
const PLATE = { front: 'front plate', low: 'lower plate', side: 'side', rear: 'rear', turret: 'turret' };
const RES = {
  ric: { front: ['Bounced off his front plate! Too much angle!', 'Glanced off the front! Catch him square!'], low: ['Glanced off his lower plate! Too much angle!', 'Bounced off low! Wait till he turns square!'],
    side: ['Bounced off his side! He\'s angled! Hit him square!', 'Glanced off the side! Too much angle!'], rear: ['Glanced off his rear! Hit him square!', 'Bounced off the back! Again, square on!'], turret: ['Bounced off the turret! Hit the hull!', 'Off the turret! Aim lower!'] },
  held: { front: ['Front plate held! Hit him low!', 'Didn\'t go through the front! Get on his flank!'], low: ['Lower plate held! Square him up!', 'Lower plate didn\'t go! Get his side!'],
    side: ['Side held! Too much angle! Square on!', 'Didn\'t go in the side! Hit him square!'], rear: ['Rear held! Hit him square!', 'Didn\'t go in! Square on!'], turret: ['Turret\'s too thick! Go for the hull!', 'Mantlet held! Hit the hull, hit him low!'] },
  burn: { front: ['Through the front! His engine\'s burning! Same again!'], low: ['Through the lower plate! He\'s burning! Same again!'], side: ['Right through the side! He\'s on fire! Again!'], rear: ['Through the rear! Engine\'s burning! Again, same place!'], turret: ['Through the turret! He\'s smoking! Again!'] },
  stuck: { front: ['Through the front! His turret\'s stuck! Finish him!'], low: ['Went in low! His turret\'s jammed! Finish him!'], side: ['Through the side! His gun\'s stuck! Finish him!'], rear: ['Through the rear! His turret\'s stuck! Again!'], turret: ['Through the turret! He can\'t traverse! Finish him!'] },
  kill: { front: ['Through the front! He\'s burning! Cease fire!', 'Square through the front! He\'s finished! Cease fire!'], low: ['Through the lower plate! He\'s burning! Cease fire!', 'Low and through! He\'s finished! Cease fire!'],
    side: ['Right through the side! He\'s burning! Cease fire!', 'Through the side! He\'s on fire! Cease fire!'], rear: ['Through the rear! He\'s burning! Cease fire!', 'Up his back end! He\'s done! Cease fire!'], turret: ['Through the turret! He\'s finished! Cease fire!', 'Right through the turret! Cease fire!'] },
};
for (const [res, plates] of Object.entries(RES)) for (const [pl, lines] of Object.entries(plates)) lines.forEach((t, i) => add(`res_${res}_${pl}_${i + 1}`, 'cmd', `${res === 'ric' || res === 'held' ? '[frustrated, shouting over the engine]' : '[excited, shouting over the engine]'} ${t}`));
add('res_hurt_1', 'cmd', '[shouting] Didn\'t go in, but he\'s shaking apart! Keep hitting him!'); add('res_hurt_2', 'cmd', '[shouting] Held, but he\'s hurt bad! Again!');
add('cmd_track_3', 'cmd', '[excited, shouting] His track\'s off! Get round his side while he\'s stuck!');
// the crew after a kill: short, one man
add('crew_kill_1', 'gun', '[excited] Got him!'); add('crew_kill_2', 'load', '[excited] Hot damn!'); add('crew_kill_3', 'gun', '[breathing hard] He\'s done.'); add('crew_kill_4', 'drv', '[excited] Yeah! Burn, you bastard!');
// a shell hits us: where, and it held
add('us_held_front_1', 'cmd', '[shouting] Hit on the front! It held!'); add('us_held_front_2', 'drv', '[shaken, shouting] He hit the front! We\'re okay!');
add('us_held_side_1', 'cmd', '[shouting] Hit on the side! It held! Turn the front to him!'); add('us_held_side_2', 'load', '[shaken] Side hit! It didn\'t come in!');
add('us_held_rear_1', 'drv', '[panicked, shouting] Hit in the back! Engine\'s still running!'); add('us_held_rear_2', 'cmd', '[shouting] He hit our rear! Turn around, turn around!');
add('us_held_turret_1', 'gun', '[shaken, shouting] Off the turret! Jesus!'); add('us_held_turret_2', 'cmd', '[shouting] Turret took one! It held!');
// the reload race: how long till our gun is up, against his
add('race_win_1', 'cmd', '[urgent, shouting] He\'s still loading! We\'ll beat him!'); add('race_win_2', 'cmd', '[urgent] He just fired, he\'s reloading! Get on him!');
add('race_lose_1', 'cmd', '[alarmed, shouting] He\'s loaded! Get us out of his sight!'); add('race_lose_2', 'cmd', '[alarmed, shouting] He is laid on us and loaded! Back up!');
add('load_secs_3', 'load', '[grunting, shouting] Three seconds!'); add('load_secs_2', 'load', '[grunting, shouting] Two seconds!'); add('load_secs_1', 'load', '[straining] Almost!');
add('cmd_howlong_1', 'cmd', '[shouting] How long?'); add('cmd_howlong_2', 'cmd', '[shouting] Loader!');

// whole crew exchanges, recorded as one multi-voice take each. id -> lines
const T = (who, text) => ({ who, text });
export const TAKES = {
  take_engine_1: [T('drv', '[panicked, shouting] Fire! Engine\'s on fire!'), T('cmd', '[shouting] Pull the extinguisher! Pull it!'), T('drv', '[shouting] Pulling it!')],
  take_engine_2: [T('load', '[shouting] Smoke! I smell smoke!'), T('drv', '[panicked] Engine\'s burning, Sarge!'), T('cmd', '[shouting] Hit the extinguisher! Keep her running!')],
  take_fireout_1: [T('drv', '[relieved, breathing hard] Fire\'s out!'), T('cmd', '[tense] Good. Keep her moving.')],
  take_fireout_2: [T('drv', '[breathing hard] Extinguisher got it.'), T('cmd', '[tense] Okay. Okay. Back to work.')],
  take_trackoff_1: [T('drv', '[shouting] Track\'s gone! I can\'t steer!'), T('cmd', '[shouting] Sit tight! We fight from here! Gunner, stay on him!'), T('gun', '[shouting] On him!')],
  take_trackoff_2: [T('drv', '[shouting] We threw a track!'), T('cmd', '[shouting] Then we\'re a pillbox. Keep firing!')],
  take_trackfix_1: [T('drv', '[shouting] Track\'s back on!'), T('cmd', '[shouting] Driver, move out!')],
  take_trackfix_2: [T('drv', 'Track\'s fixed, Sarge. We can move.'), T('cmd', '[tense] About time. Let\'s go.')],
  take_jam_1: [T('gun', '[shouting] Turret\'s jammed! I can\'t traverse!'), T('cmd', '[shouting] Crank it by hand!'), T('gun', '[strained, grunting] It won\'t move!')],
  take_jam_2: [T('gun', '[shouting] Traverse is out! She won\'t turn!'), T('cmd', '[shouting] Driver! You\'re the gun now, point the hull!'), T('drv', '[shouting] Wilco!')],
  take_hit_1: [T('drv', '[shouting] We\'re hit!'), T('cmd', '[shouting] Didn\'t come through! Everybody okay?'), T('load', '[shaken] Okay! Okay!')],
  take_hit_2: [T('load', '[shaken, shouting] Jesus!'), T('cmd', '[shouting] Armor held! Keep going!')],
  take_hit_3: [T('cmd', '[shouting] Hit! Report!'), T('drv', '[shouting] Driver okay!'), T('gun', '[shouting] Gunner okay!')],
  take_glance_1: [T('gun', '[shouting] That one bounced!'), T('cmd', '[shouting] Keep at it!')],
  take_glance_2: [T('load', '[shaken] Glanced off us!'), T('cmd', '[shouting] Lucky. Keep moving!')],
  take_low_1: [T('drv', '[worried] She can\'t take much more, Sarge!'), T('cmd', '[tense] I know. Keep moving.')],
  take_low_2: [T('load', '[worried] Sarge, we\'re leaking oil!'), T('cmd', '[tense] Then make every round count.')],
  take_kill_1: [T('cmd', '[shouting] Target! Cease fire! He\'s burning!'), T('gun', '[excited] Got him!'), T('load', '[excited] Hot damn!')],
  take_kill_2: [T('cmd', '[excited, shouting] He\'s on fire! Cease fire!'), T('gun', '[breathing hard] He\'s done.')],
  take_kill_3: [T('gun', '[excited, shouting] He\'s burning! We got him!'), T('cmd', '[breathing hard] Cease fire. Cease fire. Nice shooting.')],
  take_lost_1: [T('cmd', '[screaming] We\'re hit! Bail out! Bail out!'), T('load', '[panicked] Hatch! Get the hatch!')],
  take_lost_2: [T('cmd', '[screaming] Get out! Everybody out!'), T('drv', '[panicked] I\'m out! I\'m out!')],
  take_house_1: [T('drv', '[shouting] He\'s shooting through the house!'), T('cmd', '[shouting] He knows we\'re here. Back up!')],
  take_house_2: [T('load', '[shaken] That came through the wall!'), T('cmd', '[shouting] Driver, back up, now!')],
  take_collapse_1: [T('drv', '[shouting] House is coming down!'), T('cmd', '[shouting] Watch it! Watch it!')],
  take_collapse_2: [T('cmd', '[shouting] Wall\'s going!'), T('drv', '[shouting] I see it!')],
  take_wall_1: [T('drv', '[shouting] Hang on!'), T('load', '[grunting] Jesus, driver!')],
  take_wall_2: [T('cmd', '[shouting] Easy, driver!'), T('drv', '[shouting] Sorry, Sarge! Through the wall!')],
  take_idle_1: [T('load', '[quiet, tired] How many A-P left?'), T('gun', '[quiet] Enough. Keep \'em coming.')],
  take_idle_2: [T('drv', '[quiet] Can\'t see a thing in this rain.'), T('cmd', '[quiet] Keep your eyes open. They\'re out there.')],
  take_idle_3: [T('load', '[quiet] Anybody got a smoke?'), T('cmd', '[quiet, firm] Not now.')],
  take_idle_4: [T('gun', '[quiet, nervous] Quiet.'), T('cmd', '[quiet] Stay on it.')],
  take_idle_5: [T('cmd', '[quiet] Driver, ease forward. Slow.'), T('drv', '[quiet] Easing forward.')],
};
