// The road to the platinum, in six stages, built from the official
// descriptions: which story chapters and missions come first, which
// one-off feats to grab while playing, which side strands, which
// activities, which collectibles and money goals, and the 100%
// completion finish. The stages name trophies by id; the renderer
// skips any id the data does not hold, so a stage can never point at
// a trophy that is not in the list.
//
// Stage sizes: 13 + 15 + 7 + 8 + 11 + 2 = 56 slots, with Positive
// Mental Attitude appearing in both Stage 1 (do the balcony step
// now) and Stage 5 (finish the other 17 spots) — 55 trophies in all.
//
// Each stage carries three things: a title, a text that says what
// the stage is for and how long it takes, and notes — short, practical
// lines about pacing, saves and overlaps, written for this guide.
// The notes are the difference between a list of stages and a plan:
// they say when to start a count, what to hold back, and which
// trophies overlap so one session can move two goals at once.

export const ROADMAP = [
  {
    title: 'Stage 1 — The story first, and save like it matters',
    text: 'Chapters 1 to 4, the named missions and the finale — roughly ' +
      '60–80 hours. There is no mission replay and no new game plus, ' +
      'and the game gives 15 manual save slots, so keep a save at the ' +
      'start of every chapter and one more before the final mission. ' +
      'The one thing in this stage that cannot wait is the Chapter 1 ' +
      'balcony meditation: do it the morning after Down to Earth, ' +
      'before the chapter ends.',
    notes: [
      'Chapter 1 is the only chapter with a missable step in it, so slow down there and nowhere else.',
      'Chapter 2 is where both protagonists become playable and the open world opens up — start sampling activities then.',
      'Chapter 3 is the chapter to start the long counts in passing: WAiNK scans, vehicle discoveries and stunts.',
      'Chapter 4 holds the optional vault mission, so hold the last bank vaults until it has run.',
    ],
    trophyIds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28],
  },
  {
    title: 'Stage 2 — One-off feats, grabbed as they come up',
    text: 'Things that happen once, out in the world, with your partner ' +
      'or alone: partner robberies and wanted levels, Combat Focus, the ' +
      'airport departure, a Rhino, a jewelry store, Ocean Beach, the ' +
      'showroom, the bowling alley, the Strength grind, the Criminal ' +
      'Profile, the Scooter Bros app — and the four trophies whose ' +
      'methods launch-day guides have not fully confirmed yet. Do them ' +
      'when the moment appears instead of hunting them down afterwards.',
    notes: [
      'Partner feats need your partner alongside, so take them when a mission or free-roam session already has you together.',
      'Combat Focus wants a grouped fight: wait for a gang shootout or a mission firefight rather than forcing one.',
      'The airport, the showroom and the bowling alley are all single visits — plan each one before you go, then move on.',
      'The two unconfirmed trophies live in this stage: do not grind them, and do not let them hold up the rest of the run.',
    ],
    trophyIds: [33, 34, 36, 37, 38, 39, 44, 45, 46, 47, 48, 49, 50, 51, 55],
  },
  {
    title: 'Stage 3 — Side stories: strangers and fixers',
    text: 'Play the mission strands for Andy, Kenton, Billy, Randy and ' +
      'Tyrone to their final missions, hunt the unique animal for Bret, ' +
      'and finish eight Strangers & Freaks strands across the state. ' +
      'The fixer strands count toward the eight, so the two goals ' +
      'overlap — five fixer strands finished is five of the eight done.',
    notes: [
      'Strands unlock as you explore, so this stage runs alongside the story rather than after it.',
      'Randy’s strand matters twice: it teaches the Key Cloner, which the showroom trophy also needs.',
      'Bret’s hunting targets feed the 100% completion list, so the hunting strand pays twice.',
      'Finish each strand you start — a half-finished strand counts for nothing toward the eight.',
    ],
    trophyIds: [22, 23, 24, 26, 27, 29, 25],
  },
  {
    title: 'Stage 4 — Activities: races, ranges and challenges',
    text: 'The grind in the middle of the run: 250 stunts (300 for 100%), ' +
      'all nine activity types tried, 42 Shooting Range gold medals, a ' +
      'Top Fun drone race won at all 14 locations, 20 different races ' +
      'won, beating Cal at fishing, one arcade game finished and 50 ' +
      'challenges done (70 for 100%). Start this stage once the weapon ' +
      'roster is fuller, and take it one activity at a time.',
    notes: [
      'The nine-activity sampler is the cheapest trophy in this stage — clear it first, in an hour or two.',
      'Range golds are the slowest item here: practise one range at a time and come back with better weapons.',
      'Drone races and their time trials share courses, so run both at each location in a single visit.',
      'Races count only when they are new wins, so rotate the list instead of replaying a favourite.',
    ],
    trophyIds: [15, 16, 17, 18, 19, 20, 21, 32],
  },
  {
    title: 'Stage 5 — Collectibles, money and the map',
    text: 'The long tail: the remaining 17 meditation spots, 3 collectible ' +
      'card sets (15 for 100%), WAiNK at 100 locations, 100 vehicles ' +
      'discovered (200 for 100%), 5 bank vaults robbed (all 8 for 100%), ' +
      'an armored truck, one illegal operation from each of the 9 gangs, ' +
      '$250,000 of marked bills laundered, $100,000 spent in shops, all ' +
      '8 garages bought and all 52 areas of Leonida explored. Most of ' +
      'these counts have been growing since Chapter 3 — this stage is ' +
      'the sweep that finishes them.',
    notes: [
      'If the WAiNK and vehicle counts were habits from the start, this stage is a short sweep; if not, it is a long one.',
      'Card sets reward focus: finish the sets nearest to complete first instead of scattering across all 18.',
      'Launder as you earn and spend as you go, so the money goals finish themselves while you sweep the map.',
      'The map only fills where you travel, so drive the back roads and small towns rather than fast-travelling.',
    ],
    trophyIds: [28, 30, 31, 35, 40, 41, 42, 43, 52, 53, 54],
  },
  {
    title: 'Stage 6 — The finish: 100% and the platinum',
    text: 'Open Progress, then Stats, then 100% Completion and work down ' +
      'the checklist — most entries only need a portion of their totals. ' +
      'When A Long Road lands, Vice Got a Price! follows at once, and ' +
      'the platinum is yours. This stage is short if the earlier stages ' +
      'were done properly, and long if the counts were left behind.',
    notes: [
      'Work the checklist from the cheapest entries first, so the list visibly shrinks in every session.',
      'The last stragglers are usually range golds and the final few challenges — budget real time for them.',
      'Check the list, not your memory: the game tracks the totals, and guessing wastes sessions.',
    ],
    trophyIds: [14, 1],
  },
];

export function renderRoadmap(listEl, trophies, tracker, openTrophy) {
  const byId = new Map(trophies.map((t) => [t.id, t]));
  listEl.replaceChildren();
  for (const stage of ROADMAP) {
    const li = document.createElement('li');
    const heading = document.createElement('h3');
    heading.textContent = stage.title;
    const body = document.createElement('p');
    body.textContent = stage.text;
    // Per-stage progress: how many of this stage's trophies are earned.
    const done = tracker.stageProgress(trophies, stage.trophyIds);
    const progressLine = document.createElement('p');
    progressLine.className = 'stageProgress';
    progressLine.textContent = `${done.earned} of ${done.total} trophies in this stage earned`;
    const chips = document.createElement('ul');
    chips.className = 'chips';
    for (const id of stage.trophyIds) {
      const trophy = byId.get(id);
      if (!trophy) continue;
      const chipItem = document.createElement('li');
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.textContent = trophy.name;
      if (tracker.earned(trophy.name)) chip.classList.add('earned');
      chip.addEventListener('click', () => openTrophy(trophy.id));
      chipItem.append(chip);
      chips.append(chipItem);
    }
    li.append(heading, body, progressLine, chips);
    if (Array.isArray(stage.notes) && stage.notes.length > 0) {
      const notesList = document.createElement('ul');
      notesList.className = 'stageNotes';
      for (const note of stage.notes) {
        const noteItem = document.createElement('li');
        noteItem.textContent = note;
        notesList.append(noteItem);
      }
      li.append(notesList);
    }
    listEl.append(li);
  }
}
