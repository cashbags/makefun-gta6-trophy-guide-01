// Rendering for Leonida Legend: the checklist, the trophy detail
// panel, the progress bar, the per-stage roadmap lines and the
// sources list. The filters the competition asks for all live here —
// kind (story, missable, collectibles, activities, online), grade,
// search — and the spoiler setting, which hides the names and
// descriptions of story trophies until they are earned. The detail
// panel draws on app/guides.js for the full strategy behind each
// trophy: what to do, where it happens, when to do it, and how solid
// the method is.
import { renderRoadmap } from './roadmap.js';
import { strategyFor, statusCounts } from './guides.js';

export const KIND_LABELS = {
  story: 'Story',
  missable: 'Missable',
  collectibles: 'Collectibles',
  activities: 'Activities',
  online: 'Online',
  platinum: 'Platinum',
};

const STATUS_LABELS = {
  confirmed: 'Method confirmed',
  reported: 'Reported — one guide so far',
  unconfirmed: 'Method unconfirmed',
};

const GRADE_ORDER = { platinum: 0, gold: 1, silver: 2, bronze: 3 };

export function trophyInKind(trophy, kind) {
  if (kind === 'all') return true;
  if (kind === 'missable') return trophy.missable;
  if (kind === 'online') return trophy.kind === 'online';
  return trophy.kind === kind;
}

function matchesQuery(trophy, query) {
  if (!query) return true;
  const strategy = strategyFor(trophy.id);
  const haystack = `${trophy.name} ${trophy.description} ${trophy.guide} ${strategy?.strategy ?? ''}`.toLowerCase();
  return haystack.includes(query);
}

export function visibleTrophies(trophies, filters, tracker) {
  const query = filters.search.trim().toLowerCase();
  const kept = [];
  for (const trophy of trophies) {
    if (!trophyInKind(trophy, filters.kind)) continue;
    if (filters.grade !== 'all' && trophy.grade !== filters.grade) continue;
    if (filters.hideEarned && tracker.earned(trophy.name)) continue;
    if (!matchesQuery(trophy, query)) continue;
    kept.push(trophy);
  }
  if (filters.sort === 'grade') {
    kept.sort((a, b) => (GRADE_ORDER[a.grade] - GRADE_ORDER[b.grade]) || (a.id - b.id));
  } else if (filters.sort === 'name') {
    kept.sort((a, b) => a.name.localeCompare(b.name));
  }
  return kept;
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

function tag(text, extraClass) {
  const el = document.createElement('span');
  el.className = 'tag' + (extraClass ? ` ${extraClass}` : '');
  el.textContent = text;
  return el;
}

export function renderProgress(trophies, tracker) {
  const earned = trophies.filter((t) => tracker.earned(t.name)).length;
  const total = trophies.length;
  const pct = total ? Math.round((earned / total) * 100) : 0;
  document.getElementById('progressFill').style.width = `${pct}%`;
  document.getElementById('progressText').textContent = `${earned} of ${total} earned · ${total - earned} left for the platinum`;
  const perGrade = {};
  for (const trophy of trophies) {
    perGrade[trophy.grade] = perGrade[trophy.grade] ?? { earned: 0, total: 0 };
    perGrade[trophy.grade].total += 1;
    if (tracker.earned(trophy.name)) perGrade[trophy.grade].earned += 1;
  }
  document.getElementById('gradeCounts').textContent = ['platinum', 'gold', 'silver', 'bronze']
    .map((g) => `${perGrade[g].earned}/${perGrade[g].total} ${g}`)
    .join(' · ');
  const counts = statusCounts();
  document.getElementById('methodCounts').textContent =
    `Guide methods: ${counts.confirmed} confirmed · ${counts.reported} reported by one guide · ${counts.unconfirmed} still unconfirmed`;
}

function countStepper(trophy, tracker) {
  const stepper = document.createElement('div');
  stepper.className = 'counter';
  const minus = document.createElement('button');
  minus.type = 'button';
  minus.textContent = '−';
  minus.setAttribute('aria-label', `One fewer ${trophy.countLabel}`);
  minus.addEventListener('click', () => tracker.stepCount(trophy.name, -1, trophy.count));
  const plus = document.createElement('button');
  plus.type = 'button';
  plus.textContent = '+';
  plus.setAttribute('aria-label', `One more ${trophy.countLabel}`);
  plus.addEventListener('click', () => tracker.stepCount(trophy.name, 1, trophy.count));
  const label = document.createElement('span');
  label.textContent = `${tracker.count(trophy.name).toLocaleString()} / ${trophy.count.toLocaleString()} ${trophy.countLabel ?? ''}`;
  stepper.append(minus, label, plus);
  return stepper;
}

export function renderTrophyList(listEl, trophies, filters, tracker, sourceNames, openTrophy) {
  const shown = visibleTrophies(trophies, filters, tracker);
  listEl.replaceChildren();
  for (const trophy of shown) {
    const isEarned = tracker.earned(trophy.name);
    const spoilerHidden = tracker.progress.spoilers && trophy.kind === 'story' && !isEarned;
    const strategy = strategyFor(trophy.id);
    const card = document.createElement('article');
    card.className = 'trophy' + (isEarned ? ' earnedTrophy' : '');
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = isEarned;
    box.setAttribute('aria-label', `Mark ${trophy.name} earned`);
    box.addEventListener('change', () => tracker.toggle(trophy.name));
    card.append(box);
    const head = document.createElement('div');
    head.className = 'trophyHead';
    const name = document.createElement('h3');
    if (spoilerHidden) {
      name.className = 'spoilerName';
      name.textContent = 'Story trophy hidden — earn it to reveal it';
    } else {
      name.textContent = trophy.name;
    }
    head.append(name, gradeBadge(trophy));
    head.append(tag(KIND_LABELS[trophy.kind] ?? trophy.kind));
    if (trophy.missable) head.append(tag('Missable', 'missableTag'));
    if (trophy.hidden) head.append(tag('Hidden on PS', 'hiddenTag'));
    if (strategy && strategy.status !== 'confirmed') {
      head.append(tag(STATUS_LABELS[strategy.status], 'statusTag'));
    }
    card.append(head);
    const official = document.createElement('p');
    official.className = 'official';
    official.textContent = spoilerHidden
      ? 'Official description hidden until earned.'
      : `“${trophy.description}” — official description`;
    card.append(official);
    if (!spoilerHidden) {
      const guide = document.createElement('p');
      guide.className = 'oneline';
      guide.textContent = trophy.guide;
      card.append(guide);
      card.append(sourceLine(trophy, sourceNames));
      if (trophy.count != null) card.append(countStepper(trophy, tracker));
    }
    const actions = document.createElement('div');
    actions.className = 'trophyActions';
    const open = document.createElement('button');
    open.type = 'button';
    open.textContent = spoilerHidden ? 'Why hidden?' : 'Read the full strategy';
    open.addEventListener('click', () => openTrophy(trophy.id));
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

function detailBlock(title, body) {
  const heading = document.createElement('h3');
  heading.textContent = title;
  const p = document.createElement('p');
  p.textContent = body;
  return [heading, p];
}

export function renderTrophyDetail(detailEl, trophy, tracker, sourceNames) {
  detailEl.hidden = false;
  detailEl.replaceChildren();
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'closeBtn';
  close.textContent = 'Close';
  close.addEventListener('click', () => { detailEl.hidden = true; detailEl.replaceChildren(); });
  detailEl.append(close);
  const spoilerHidden = tracker.progress.spoilers && trophy.kind === 'story' && !tracker.earned(trophy.name);
  const strategy = strategyFor(trophy.id);
  const heading = document.createElement('h2');
  heading.textContent = spoilerHidden ? 'Hidden story trophy' : trophy.name;
  detailEl.append(heading);
  const meta = document.createElement('p');
  meta.className = 'src';
  meta.textContent = `${trophy.grade} · ${KIND_LABELS[trophy.kind] ?? trophy.kind}${trophy.hidden ? ' · hidden on PlayStation until earned' : ''}${trophy.missable ? ' · MISSABLE' : ''}${strategy ? ` · ${STATUS_LABELS[strategy.status]}` : ''}`;
  detailEl.append(meta);
  const missableNote = trophy.missable
    ? 'Yes — this is the one missable trophy. Do the Chapter 1 balcony meditation before leaving Chapter 1 (see the warning at the top of the page).'
    : 'It cannot be missed: free roam continues after the story, and there are no difficulty or online trophies.';
  const blocks = [
    ['Official description', spoilerHidden ? 'Hidden until earned — turn spoilers off, or earn it, to read it.' : `“${trophy.description}”`],
    ['What to do', spoilerHidden ? 'This is a story trophy: play the story and it unlocks. Its name and description stay hidden here until you earn it.' : (strategy?.strategy ?? trophy.guide)],
    ['Route and sequence', spoilerHidden ? 'See the roadmap’s Stage 1 for the story order.' : (strategy?.route ?? guideWhere(trophy))],
    ['Before you start', spoilerHidden ? 'No preparation is needed for a story trophy.' : (strategy?.prep ?? 'Nothing special is needed before you start.')],
    ['When to do it', spoilerHidden ? 'In story order.' : (strategy?.timing ?? 'Any time; nothing about it can be missed.')],
    ['What can go wrong', spoilerHidden ? 'Story trophies cannot be missed.' : (strategy?.pitfalls ?? 'Nothing in particular — a finish is enough.')],
    ['When it can be missed', missableNote],
  ];
  for (const [title, body] of blocks) detailEl.append(...detailBlock(title, body));
  if (trophy.count != null && !spoilerHidden) {
    const p = document.createElement('p');
    p.textContent = `Your count: ${tracker.count(trophy.name).toLocaleString()} / ${trophy.count.toLocaleString()} ${trophy.countLabel ?? ''}.`;
    detailEl.append(p);
  }
  detailEl.append(sourceLine(trophy, sourceNames));
  detailEl.scrollIntoView({ block: 'nearest' });
}

function guideWhere(trophy) {
  if (trophy.kind === 'story') return 'In the story: follow the mission or chapter the official description names; story trophies unlock as the campaign rolls on.';
  if (trophy.kind === 'collectibles') return 'Across Leonida, in the open world: use the WAiNK app and the in-game Progress menu to track what is left.';
  if (trophy.kind === 'platinum') return 'Everywhere: it is the sum of the other 54 trophies.';
  return 'In Leonida’s open world and activities: the strategy above says what to do; the in-game Progress menu tracks the counts.';
}

export function renderSources(listEl, sourceNames, sourceLinks) {
  listEl.replaceChildren();
  for (const [key, name] of Object.entries(sourceNames)) {
    const li = document.createElement('li');
    const link = sourceLinks[key];
    if (link) {
      const anchor = document.createElement('a');
      anchor.href = link;
      anchor.textContent = name;
      anchor.rel = 'noopener';
      li.append(anchor);
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
