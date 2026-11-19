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

export const ROADMAP = [
  {
    title: 'Stage 1 — The story first, and save like it matters',
    text: 'Chapters 1 to 4, the named missions and the finale — roughly 60–80 hours. There is no mission replay and no new game plus, and the game gives 15 manual save slots, so keep a save at the start of every chapter and one more before the final mission. The one thing in this stage that cannot wait is the Chapter 1 balcony meditation: do it the morning after Down to Earth, before the chapter ends.',
    trophyIds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28],
  },
  {
    title: 'Stage 2 — One-off feats, grabbed as they come up',
    text: 'Things that happen once, out in the world, with your partner or alone: partner robberies and wanted levels, Combat Focus, the airport departure, a Rhino, a jewelry store, Ocean Beach, the showroom, the bowling alley, the Strength grind, the Criminal Profile, the Scooter Bros app — and the four trophies whose methods launch-day guides have not fully confirmed yet. Do them when the moment appears instead of hunting them down afterwards.',
    trophyIds: [33, 34, 36, 37, 38, 39, 44, 45, 46, 47, 48, 49, 50, 51, 55],
  },
  {
    title: 'Stage 3 — Side stories: strangers and fixers',
    text: 'Play the mission strands for Andy, Kenton, Billy, Randy and Tyrone to their final missions, hunt the unique animal for Bret, and finish eight Strangers & Freaks strands across the state. The fixer strands count toward the eight, so the two goals overlap.',
    trophyIds: [22, 23, 24, 26, 27, 29, 25],
  },
  {
    title: 'Stage 4 — Activities: races, ranges and challenges',
    text: 'The grind in the middle of the run: 250 stunts (300 for 100%), all nine activity types tried, 42 Shooting Range gold medals, a Top Fun drone race won at all 14 locations, 20 different races won, beating Cal at fishing, one arcade game finished and 50 challenges done (70 for 100%).',
    trophyIds: [15, 16, 17, 18, 19, 20, 21, 32],
  },
  {
    title: 'Stage 5 — Collectibles, money and the map',
    text: 'The long tail: the remaining 17 meditation spots, 3 collectible card sets (15 for 100%), WAiNK at 100 locations, 100 vehicles discovered (200 for 100%), 5 bank vaults robbed (all 8 for 100%), an armored truck, one illegal operation from each of the 9 gangs, $250,000 of marked bills laundered, $100,000 spent in shops, all 8 garages bought and all 52 areas of Leonida explored.',
    trophyIds: [28, 30, 31, 35, 40, 41, 42, 43, 52, 53, 54],
  },
  {
    title: 'Stage 6 — The finish: 100% and the platinum',
    text: 'Open Progress, then Stats, then 100% Completion and work down the checklist — most entries only need a portion of their totals. When A Long Road lands, Vice Got a Price! follows at once, and the platinum is yours.',
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
    listEl.append(li);
  }
}
