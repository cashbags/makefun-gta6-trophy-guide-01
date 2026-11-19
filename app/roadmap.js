// The roadmap to the platinum, built from the official descriptions:
// which story chapters and missions, which collectibles and counts.
// Six stages, in the order to earn them in. Each stage names the
// trophies it covers by id; the list is rendered from trophies.json,
// so a stage never names a trophy the data does not hold.
export const ROADMAP_STAGES = [
  {
    title: 'Stage 1 — Play the story, and save like it matters',
    text: 'Chapters 1 to 4, the named missions and the finale (about 60–80 hours). There is no mission replay and no new game plus, and the game gives 15 manual save slots — keep a save at the start of every chapter and one before the final mission. Do the Chapter 1 balcony meditation now: it is the one missable trophy.',
    trophyIds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 28],
  },
  {
    title: 'Stage 2 — While you play: the one-off feats',
    text: 'Things that happen once, in the world, with your partner or alone: partner robberies and wanted levels, Combat Focus, the airport, a Rhino, a jewelry store, Ocean Beach, the showroom, the bowling alley and the Scooter Bros app. Do them as they come up rather than hunting them later.',
    trophyIds: [33, 34, 36, 37, 38, 39, 44, 45, 46, 47, 48, 49, 50, 51, 55],
  },
  {
    title: 'Stage 3 — Side stories: strangers and fixers',
    text: 'Finish the mission strands for Andy, Kenton, Billy, Randy and Tyrone, hunt the unique animal for Bret, and complete eight Strangers & Freaks strands across Leonida.',
    trophyIds: [22, 23, 24, 26, 27, 29, 25],
  },
  {
    title: 'Stage 4 — Activities: races, ranges and challenges',
    text: 'The grind that fills the middle of the run: 250 stunts, all nine activity types tried, 42 Shooting Range gold medals, a Top Fun drone race won at all 14 locations, 20 different races won, beating Cal at fishing, one arcade game finished and 50 challenges done.',
    trophyIds: [15, 16, 17, 18, 19, 20, 21, 32],
  },
  {
    title: 'Stage 5 — Collectibles, money and the map',
    text: 'The long tail: 18 meditation spots, 3 collectible card sets, WAiNK at 100 locations, 100 vehicles discovered, 5 bank vaults robbed, an armored truck, one illegal operation from each of the 9 gangs, $250,000 of marked bills laundered, $100,000 spent in shops, all 8 garages bought and all 52 areas of Leonida explored.',
    trophyIds: [28, 30, 31, 35, 40, 41, 42, 43, 52, 53, 54],
  },
  {
    title: 'Stage 6 — Finish: 100% and the platinum',
    text: 'Open Progress, then Stats, then 100% Completion and work the checklist — you only need selected portions of most activities. When A Long Road lands, Vice Got a Price! follows at once.',
    trophyIds: [14, 1],
  },
];

export function renderRoadmap(listEl, trophies, tracker, openTrophy) {
  const byId = new Map(trophies.map((t) => [t.id, t]));
  listEl.replaceChildren();
  for (const stage of ROADMAP_STAGES) {
    const li = document.createElement('li');
    const h = document.createElement('h3');
    h.textContent = stage.title;
    const p = document.createElement('p');
    p.textContent = stage.text;
    const chips = document.createElement('ul');
    chips.className = 'chips';
    for (const id of stage.trophyIds) {
      const t = byId.get(id);
      if (!t) continue;
      const chipLi = document.createElement('li');
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = t.name;
      if (tracker.isEarned(t.name)) b.classList.add('earned');
      b.addEventListener('click', () => openTrophy(t.id));
      chipLi.append(b);
      chips.append(chipLi);
    }
    li.append(h, p, chips);
    listEl.append(li);
  }
}
