// Rendering for the guide: the checklist, the trophy detail panel, the
// progress bar and the sources list. The filters the competition asks
// for all live here — kind (story, missable, collectibles, activities,
// online), grade, search — and the spoiler setting, which hides the
// names and descriptions of story trophies until they are earned.
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

function matchesSearch(trophy, query) {
  if (!query) return true;
  const haystack = `${trophy.name} ${trophy.description} ${trophy.guide}`.toLowerCase();
  return haystack.includes(query);
}

export function filterTrophies(trophies, filters, tracker) {
  const query = filters.search.trim().toLowerCase();
  const kept = [];
  for (const trophy of trophies) {
    if (!trophyMatchesKind(trophy, filters.kind)) continue;
    if (filters.grade !== 'all' && trophy.grade !== filters.grade) continue;
    if (filters.hideEarned && tracker.isEarned(trophy.name)) continue;
    if (!matchesSearch(trophy, query)) continue;
    kept.push(trophy);
  }
  if (filters.sort === 'grade') {
    kept.sort((a, b) => (GRADE_ORDER[a.grade] - GRADE_ORDER[b.grade]) || (a.id - b.id));
  } else if (filters.sort === 'name') {
    kept.sort((a, b) => a.name.localeCompare(b.name));
  }
  return kept;
}

function makeGradeBadge(trophy) {
  const span = document.createElement('span');
  span.className = `badge ${trophy.grade}`;
  span.textContent = trophy.grade;
  return span;
}

function makeSourceLine(trophy, sourceNames) {
  const p = document.createElement('p');
  p.className = 'src';
  const names = trophy.sources.map((key) => sourceNames[key] ?? key);
  p.textContent = `Sources: ${names.join('; ')}.`;
  return p;
}

function makeTag(text, extraClass) {
  const tag = document.createElement('span');
  tag.className = 'tag' + (extraClass ? ` ${extraClass}` : '');
  tag.textContent = text;
  return tag;
}

export function renderProgress(trophies, tracker) {
  const earned = trophies.filter((t) => tracker.isEarned(t.name)).length;
  const total = trophies.length;
  const pct = total ? Math.round((earned / total) * 100) : 0;
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('progressText').textContent = `${earned} of ${total} earned · ${total - earned} left for the platinum`;
  const perGrade = {};
  for (const trophy of trophies) {
    perGrade[trophy.grade] = perGrade[trophy.grade] ?? { earned: 0, total: 0 };
    perGrade[trophy.grade].total += 1;
    if (tracker.isEarned(trophy.name)) perGrade[trophy.grade].earned += 1;
  }
  document.getElementById('gradeCounts').textContent = ['platinum', 'gold', 'silver', 'bronze']
    .map((g) => `${perGrade[g].earned}/${perGrade[g].total} ${g}`)
    .join(' · ');
}

function makeCounter(trophy, tracker) {
  const counter = document.createElement('div');
  counter.className = 'counter';
  const minus = document.createElement('button');
  minus.type = 'button';
  minus.textContent = '−';
  minus.setAttribute('aria-label', `One fewer ${trophy.countLabel}`);
  minus.addEventListener('click', () => tracker.bumpCount(trophy.name, -1, trophy.count));
  const plus = document.createElement('button');
  plus.type = 'button';
  plus.textContent = '+';
  plus.setAttribute('aria-label', `One more ${trophy.countLabel}`);
  plus.addEventListener('click', () => tracker.bumpCount(trophy.name, 1, trophy.count));
  const label = document.createElement('span');
  label.textContent = `${tracker.getCount(trophy.name).toLocaleString()} / ${trophy.count.toLocaleString()} ${trophy.countLabel ?? ''}`;
  counter.append(minus, label, plus);
  return counter;
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
      name.textContent = 'Story trophy hidden — earn it to reveal it';
    } else {
      name.textContent = t.name;
    }
    head.append(name, makeGradeBadge(t));
    head.append(makeTag(KIND_LABELS[t.kind] ?? t.kind));
    if (t.missable) head.append(makeTag('Missable', 'missableTag'));
    if (t.hidden) head.append(makeTag('Hidden on PS', 'hiddenTag'));
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
      card.append(makeSourceLine(t, sourceNames));
      if (t.count != null) card.append(makeCounter(t, tracker));
    }
    const actions = document.createElement('div');
    actions.className = 'cardActions';
    const open = document.createElement('button');
    open.type = 'button';
    open.textContent = spoilerHidden ? 'Why hidden?' : 'Read the full guide';
    open.addEventListener('click', () => openTrophy(t.id));
    actions.append(open);
    card.append(actions);
    listEl.append(card);
  }
  if (shown.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'empty';
    empty.textContent = filters.kind === 'online'
      ? 'There are no online trophies — all 55 are single-player and offline.'
      : 'Nothing matches these filters.';
    listEl.append(empty);
  }
  const countEl = document.getElementById('resultCount');
  if (countEl) countEl.textContent = `Showing ${shown.length} of ${trophies.length} trophies.`;
}

function detailSection(title, body) {
  const heading = document.createElement('h3');
  heading.textContent = title;
  const p = document.createElement('p');
  p.textContent = body;
  return [heading, p];
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
  const missableNote = trophy.missable
    ? 'Yes — this is the one missable trophy. Do the Chapter 1 balcony meditation before leaving Chapter 1 (see the warning at the top of the page).'
    : 'It cannot be missed: free roam continues after the story, and there are no difficulty or online trophies.';
  const sections = [
    ['Official description', spoilerHidden ? 'Hidden until earned — turn spoilers off, or earn it, to read it.' : `“${trophy.description}”`],
    ['What to do', spoilerHidden ? 'This is a story trophy: play the story and it unlocks. Its name and description stay hidden here until you earn it.' : trophy.guide],
    ['Where and how', spoilerHidden ? 'See the roadmap’s Stage 1 for the story order.' : guideWhere(trophy)],
    ['When it can be missed', missableNote],
  ];
  for (const [title, body] of sections) detailEl.append(...detailSection(title, body));
  if (trophy.count != null && !spoilerHidden) {
    const p = document.createElement('p');
    p.textContent = `Your count: ${tracker.getCount(trophy.name).toLocaleString()} / ${trophy.count.toLocaleString()} ${trophy.countLabel ?? ''}.`;
    detailEl.append(p);
  }
  detailEl.append(makeSourceLine(trophy, sourceNames));
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
