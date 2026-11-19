// Views: the checklist, the trophy detail panel, the progress bar and
// the sources list. Every filter the competition asks for lives here:
// kind (story, missable, collectibles, activities, online), grade,
// search, and the spoiler setting, which hides the names and
// descriptions of story trophies until they are earned.
import { renderRoadmap } from './roadmap.js';

export const KIND_LABELS = {
  story: 'Story',
  missable: 'Missable',
  collectibles: 'Collectibles',
  activities: 'Activities',
  online: 'Online',
  platinum: 'Platinum',
};

const GRADE_ORDER = { platinum: 0, gold: 1, silver: 2, bronze: 3 };

export function trophyMatchesKind(trophy, kind) {
  if (kind === 'all') return true;
  if (kind === 'missable') return trophy.missable;
  if (kind === 'online') return trophy.kind === 'online';
  return trophy.kind === kind;
}

export function filterTrophies(trophies, filters, tracker) {
  const q = filters.search.trim().toLowerCase();
  let out = trophies.filter((t) => {
    if (!trophyMatchesKind(t, filters.kind)) return false;
    if (filters.grade !== 'all' && t.grade !== filters.grade) return false;
    if (filters.hideEarned && tracker.isEarned(t.name)) return false;
    if (q) {
      const hay = `${t.name} ${t.description} ${t.guide}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  if (filters.sort === 'grade') {
    out = [...out].sort((a, b) => (GRADE_ORDER[a.grade] - GRADE_ORDER[b.grade]) || (a.id - b.id));
  } else if (filters.sort === 'name') {
    out = [...out].sort((a, b) => a.name.localeCompare(b.name));
  }
  return out;
}

function gradeBadge(trophy) {
  const span = document.createElement('span');
  span.className = `badge ${trophy.grade}`;
  span.textContent = trophy.grade;
  return span;
}

function sourceLine(trophy, sourceNames) {
  const p = document.createElement('p');
  p.className = 'src';
  const names = trophy.sources.map((key) => sourceNames[key] ?? key);
  p.textContent = `Sources: ${names.join('; ')}.`;
  return p;
}

export function renderProgress(trophies, tracker) {
  const earned = trophies.filter((t) => tracker.isEarned(t.name)).length;
  const total = trophies.length;
  document.getElementById('progressFill').style.width = `${total ? Math.round((earned / total) * 100) : 0}%`;
  document.getElementById('progressText').textContent = `${earned} of ${total} earned — ${total - earned} to the platinum`;
  const byGrade = {};
  for (const t of trophies) {
    const key = t.grade;
    byGrade[key] = byGrade[key] ?? { earned: 0, total: 0 };
    byGrade[key].total += 1;
    if (tracker.isEarned(t.name)) byGrade[key].earned += 1;
  }
  document.getElementById('gradeCounts').textContent = ['platinum', 'gold', 'silver', 'bronze']
    .map((g) => `${byGrade[g].earned}/${byGrade[g].total} ${g}`)
    .join(' · ');
}

export function renderTrophyList(listEl, trophies, filters, tracker, sourceNames, openTrophy) {
  const shown = filterTrophies(trophies, filters, tracker);
  listEl.replaceChildren();
  for (const t of shown) {
    const earned = tracker.isEarned(t.name);
    const spoilerHidden = tracker.state.spoilers && t.kind === 'story' && !earned;
    const card = document.createElement('article');
    card.className = 'card' + (earned ? ' earnedCard' : '');
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = earned;
    box.setAttribute('aria-label', `Mark ${t.name} earned`);
    box.addEventListener('change', () => tracker.toggleEarned(t.name));
    card.append(box);
    const head = document.createElement('div');
    head.className = 'cardHead';
    const name = document.createElement('h3');
    if (spoilerHidden) {
      name.className = 'spoilerName';
      name.textContent = 'Hidden story trophy — earn it to reveal';
    } else {
      name.textContent = t.name;
    }
    head.append(name, gradeBadge(t));
    const kindTag = document.createElement('span');
    kindTag.className = 'tag';
    kindTag.textContent = KIND_LABELS[t.kind] ?? t.kind;
    head.append(kindTag);
    if (t.missable) {
      const miss = document.createElement('span');
      miss.className = 'tag missableTag';
      miss.textContent = 'Missable';
      head.append(miss);
    }
    if (t.hidden) {
      const hid = document.createElement('span');
      hid.className = 'tag hiddenTag';
      hid.textContent = 'Hidden on PS';
      head.append(hid);
    }
    card.append(head);
    const official = document.createElement('p');
    official.className = 'official';
    official.textContent = spoilerHidden
      ? 'Official description hidden until earned.'
      : `“${t.description}” — official description`;
    card.append(official);
    if (!spoilerHidden) {
      const guide = document.createElement('p');
      guide.className = 'guide';
      guide.textContent = t.guide;
      card.append(guide);
      card.append(sourceLine(t, sourceNames));
    }
    if (t.count != null && !spoilerHidden) {
      const counter = document.createElement('div');
      counter.className = 'counter';
      const minus = document.createElement('button');
      minus.type = 'button';
      minus.textContent = '−';
      minus.setAttribute('aria-label', `One fewer ${t.countLabel}`);
      minus.addEventListener('click', () => tracker.bumpCount(t.name, -1, t.count));
      const plus = document.createElement('button');
      plus.type = 'button';
      plus.textContent = '+';
      plus.setAttribute('aria-label', `One more ${t.countLabel}`);
      plus.addEventListener('click', () => tracker.bumpCount(t.name, 1, t.count));
      const label = document.createElement('span');
      label.textContent = `${tracker.getCount(t.name).toLocaleString()} / ${t.count.toLocaleString()} ${t.countLabel ?? ''}`;
      counter.append(minus, label, plus);
      card.append(counter);
    }
    const actions = document.createElement('div');
    actions.className = 'cardActions';
    const open = document.createElement('button');
    open.type = 'button';
    open.textContent = spoilerHidden ? 'Why is this hidden?' : 'Full guide';
    open.addEventListener('click', () => openTrophy(t.id));
    actions.append(open);
    card.append(actions);
    listEl.append(card);
  }
  if (shown.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = filters.kind === 'online'
      ? 'No online trophies: all 55 are single-player and offline.'
      : 'No trophies match these filters.';
    listEl.append(empty);
  }
  const countEl = document.getElementById('resultCount');
  if (countEl) countEl.textContent = `Showing ${shown.length} of ${trophies.length} trophies.`;
}

export function renderTrophyDetail(detailEl, trophy, tracker, sourceNames, trophies) {
  detailEl.hidden = false;
  detailEl.replaceChildren();
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'closeBtn';
  close.textContent = 'Close';
  close.addEventListener('click', () => { detailEl.hidden = true; detailEl.replaceChildren(); });
  detailEl.append(close);
  const spoilerHidden = tracker.state.spoilers && trophy.kind === 'story' && !tracker.isEarned(trophy.name);
  const h = document.createElement('h2');
  h.textContent = spoilerHidden ? 'Hidden story trophy' : trophy.name;
  detailEl.append(h);
  const meta = document.createElement('p');
  meta.className = 'src';
  meta.textContent = `${trophy.grade} · ${KIND_LABELS[trophy.kind] ?? trophy.kind}${trophy.hidden ? ' · hidden on PlayStation until earned' : ''}${trophy.missable ? ' · MISSABLE' : ''}`;
  detailEl.append(meta);
  const sections = [
    ['Official description', spoilerHidden ? 'Hidden until earned — turn spoilers off, or earn it, to read it.' : `“${trophy.description}”`],
    ['What to do', spoilerHidden ? 'This is a story trophy: play the story and it unlocks. Its name and description stay hidden here until you earn it.' : trophy.guide],
    ['Where and how', spoilerHidden ? 'See the roadmap’s Stage 1 for the story order.' : guideWhere(trophy)],
    ['When it can be missed', trophy.missable
      ? 'Yes — this is the one missable trophy. Do the Chapter 1 balcony meditation before leaving Chapter 1 (see the warning at the top of the page).'
      : 'It cannot be missed: free roam continues after the story, and there are no difficulty or online trophies.'],
  ];
  for (const [title, body] of sections) {
    const sh = document.createElement('h3');
    sh.textContent = title;
    const p = document.createElement('p');
    p.textContent = body;
    detailEl.append(sh, p);
  }
  if (trophy.count != null && !spoilerHidden) {
    const p = document.createElement('p');
    p.textContent = `Your count: ${tracker.getCount(trophy.name).toLocaleString()} / ${trophy.count.toLocaleString()} ${trophy.countLabel ?? ''}.`;
    detailEl.append(p);
  }
  detailEl.append(sourceLine(trophy, sourceNames));
  detailEl.scrollIntoView({ block: 'nearest' });
}

function guideWhere(trophy) {
  if (trophy.kind === 'story') return 'In the story: follow the mission or chapter the official description names; story trophies unlock as the campaign rolls on.';
  if (trophy.kind === 'collectibles') return 'Across Leonida, in the open world: use the WAiNK app and the in-game Progress menu to track what is left.';
  if (trophy.kind === 'platinum') return 'Everywhere: it is the sum of the other 54 trophies.';
  return 'In Leonida’s open world and activities: the guide above says what to do; the in-game Progress menu tracks the counts.';
}

export function renderSources(listEl, sourceNames, sourceLinks) {
  listEl.replaceChildren();
  for (const [key, name] of Object.entries(sourceNames)) {
    const li = document.createElement('li');
    const link = sourceLinks[key];
    if (link) {
      const a = document.createElement('a');
      a.href = link;
      a.textContent = name;
      a.rel = 'noopener';
      li.append(a);
    } else {
      li.textContent = name;
    }
    listEl.append(li);
  }
}

export function renderAll(refs, trophies, filters, tracker) {
  renderProgress(trophies, tracker);
  renderRoadmap(refs.roadmapEl, trophies, tracker, refs.openTrophy);
  renderTrophyList(refs.listEl, trophies, filters, tracker, refs.sourceNames, refs.openTrophy);
}
