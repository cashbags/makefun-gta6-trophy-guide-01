// Tracker state: the trophies the player has earned, the counts toward
// counted trophies, and the spoiler setting. It is saved in
// localStorage, with export to a file and import back. No network: the
// state never leaves the browser except through the export the player
// asks for.
export const STORAGE_KEY = 'gta6-trophy-guide-01-v1';

// A demo state for screenshots (?demo=1): a handful of trophies earned
// and counts part-way, held in memory only and never written to
// storage, so a screenshot shows the tracker at work without touching
// the player's real progress.
export const DEMO_STATE = {
  earned: ['Master of None', 'Stick Fiddler', 'Whip It Good', 'On the Spot', 'Treat Yo Self'],
  counts: { 'Cunning Stunts': 137, 'You WAiNKer!': 42, 'Whip It Good': 100, 'Positive Mental Attitude': 3 },
};

function emptyState() {
  return { earned: [], counts: {}, spoilers: true };
}

export function loadStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw);
    return {
      earned: Array.isArray(parsed.earned) ? parsed.earned : [],
      counts: parsed.counts && typeof parsed.counts === 'object' ? parsed.counts : {},
      spoilers: parsed.spoilers !== false,
    };
  } catch {
    return emptyState();
  }
}

export function saveStoredState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    earned: [...state.earned],
    counts: state.counts,
    spoilers: state.spoilers,
  }));
}

export function makeTracker(initial) {
  const state = {
    earned: new Set(initial.earned),
    counts: { ...initial.counts },
    spoilers: initial.spoilers,
  };
  const listeners = new Set();
  const tracker = {
    state,
    onChange(fn) { listeners.add(fn); },
    notify() { for (const fn of listeners) fn(); },
    isEarned(name) { return state.earned.has(name); },
    toggleEarned(name) {
      if (state.earned.has(name)) state.earned.delete(name);
      else state.earned.add(name);
      tracker.persist();
      tracker.notify();
    },
    getCount(name) { return state.counts[name] ?? 0; },
    setCount(name, value, target) {
      const next = Math.max(0, Math.min(target ?? value, value));
      if (next === 0) delete state.counts[name];
      else state.counts[name] = next;
      tracker.persist();
      tracker.notify();
    },
    bumpCount(name, delta, target) {
      tracker.setCount(name, tracker.getCount(name) + delta, target);
    },
    persist() { saveStoredState(state); },
    exportJson() {
      return JSON.stringify({
        game: 'Grand Theft Auto VI',
        exported: 'gta6-trophy-guide-01',
        earned: [...state.earned].sort(),
        counts: state.counts,
      }, null, 2);
    },
    importJson(text) {
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== 'object') throw new Error('import is not an object');
      if (parsed.earned !== undefined && !Array.isArray(parsed.earned)) {
        throw new Error('import earned is not a list');
      }
      if (parsed.counts !== undefined && (typeof parsed.counts !== 'object' || parsed.counts === null)) {
        throw new Error('import counts is not an object');
      }
      state.earned = new Set(parsed.earned ?? []);
      state.counts = { ...(parsed.counts ?? {}) };
      tracker.persist();
      tracker.notify();
    },
    reset() {
      state.earned = new Set();
      state.counts = {};
      tracker.persist();
      tracker.notify();
    },
  };
  return tracker;
}

export function downloadText(filename, text) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
