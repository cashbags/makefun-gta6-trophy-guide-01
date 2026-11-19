// Saved progress for Leonida Legend: which trophies the reader has
// earned, the running counts toward the counted ones, and whether
// story spoilers stay hidden. Everything lives in localStorage under
// one key; the export file is the only way progress leaves the
// browser, and the import reads that file back. Nothing here touches
// the network.
//
// The demo state (?demo=1) is a showcase snapshot held in memory
// only — it never writes to storage, so screenshots can show the
// tracker mid-run without touching the reader's real progress.

export const STORAGE_KEY = 'leonida-legend-progress-v2';

// Showcase state for screenshots: five trophies earned, a few counts
// part-way, spoilers on unless the URL says otherwise.
export const DEMO_STATE = {
  earned: ['Master of None', 'Stick Fiddler', 'Whip It Good', 'On the Spot', 'Treat Yo Self'],
  counts: { 'Cunning Stunts': 137, 'You WAiNKer!': 42, 'Whip It Good': 100, 'Positive Mental Attitude': 3 },
};

function blankProgress() {
  return { earned: [], counts: {}, spoilers: true };
}

export function loadSavedProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return blankProgress();
    const parsed = JSON.parse(raw);
    return {
      earned: Array.isArray(parsed.earned) ? parsed.earned : [],
      counts: parsed.counts && typeof parsed.counts === 'object' ? parsed.counts : {},
      spoilers: parsed.spoilers !== false,
    };
  } catch {
    return blankProgress();
  }
}

export function storeProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    earned: [...progress.earned],
    counts: progress.counts,
    spoilers: progress.spoilers,
  }));
}

// The tracker object the views call. `earned` is a Set of trophy
// names; `counts` maps a trophy name to its current count. Every
// change persists and notifies the renderers.
export function createTracker(saved) {
  const progress = {
    earned: new Set(saved.earned),
    counts: { ...saved.counts },
    spoilers: saved.spoilers,
  };
  const watchers = new Set();
  const tracker = {
    progress,
    watch(fn) { watchers.add(fn); },
    changed() { for (const fn of watchers) fn(); },
    earned(name) { return progress.earned.has(name); },
    toggle(name) {
      if (progress.earned.has(name)) progress.earned.delete(name);
      else progress.earned.add(name);
      tracker.save();
      tracker.changed();
    },
    count(name) { return progress.counts[name] ?? 0; },
    setCount(name, value, target) {
      const next = Math.max(0, Math.min(target ?? value, value));
      if (next === 0) delete progress.counts[name];
      else progress.counts[name] = next;
      tracker.save();
      tracker.changed();
    },
    stepCount(name, delta, target) {
      tracker.setCount(name, tracker.count(name) + delta, target);
    },
    save() { storeProgress(progress); },
    // Earned/total for one roadmap stage, counted from the stage's
    // own trophy list, for the stage progress lines.
    stageProgress(trophies, trophyIds) {
      const inStage = trophyIds
        .map((id) => trophies.find((t) => t.id === id))
        .filter(Boolean);
      return {
        earned: inStage.filter((t) => progress.earned.has(t.name)).length,
        total: inStage.length,
      };
    },
    // Earned/total for one kind filter, shown beside the filter buttons.
    kindProgress(trophies, kind) {
      const inKind = kind === 'missable'
        ? trophies.filter((t) => t.missable)
        : trophies.filter((t) => t.kind === kind);
      return {
        earned: inKind.filter((t) => progress.earned.has(t.name)).length,
        total: inKind.length,
      };
    },
    exportText() {
      return JSON.stringify({
        game: 'Grand Theft Auto VI',
        guide: 'leonida-legend',
        earned: [...progress.earned].sort(),
        counts: progress.counts,
      }, null, 2);
    },
    importText(text) {
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== 'object') throw new Error('import is not an object');
      if (parsed.earned !== undefined && !Array.isArray(parsed.earned)) {
        throw new Error('import earned is not a list');
      }
      if (parsed.counts !== undefined && (typeof parsed.counts !== 'object' || parsed.counts === null)) {
        throw new Error('import counts is not an object');
      }
      progress.earned = new Set(parsed.earned ?? []);
      progress.counts = { ...(parsed.counts ?? {}) };
      tracker.save();
      tracker.changed();
    },
    clear() {
      progress.earned = new Set();
      progress.counts = {};
      tracker.save();
      tracker.changed();
    },
  };
  return tracker;
}

// Offer a text file for download — used only for the progress export
// the reader asks for.
export function downloadFile(filename, text) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}
