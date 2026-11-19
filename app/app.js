// Bootstrap for Leonida Legend: load the trophy list, build the
// tracker from the saved progress (or the ?demo=1 showcase state),
// wire up every control and render. The app loads one file of its
// own — data/trophies.json — plus the strategy notes in guides.js,
// and nothing else, so it works with the network off.
//
// Screenshot URL parameters: ?demo=1 shows the showcase state,
// ?open=<id> opens one trophy's strategy, ?view=roadmap scrolls to
// the roadmap, ?spoilers=off reveals story trophies, ?kind= and
// ?grade= pre-set the filters.
import { DEMO_STATE, downloadFile, loadSavedProgress, createTracker } from './tracker.js';
import { renderAll, renderSources, renderTrophyDetail } from './views.js';

const SOURCE_LINKS = {
  planetgta6: 'https://www.planetgta6.com/en/gta-6-trophies/',
  outputlag: 'https://outputlag.com/guides/gta-6-trophy-list/',
  keengamer: 'https://www.keengamer.com/articles/guides/gta-6-trophy-guide-platinum-roadmap-all-55-trophies/',
  pushsquare: 'https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap',
  egamers: 'https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/',
  powerpyx: 'https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/',
  ofzen: 'https://www.ofzenandcomputing.com/gta-6-trophy-list-trophies-achievements/',
  gtasix: 'https://gtasix.how/trophies/',
  gtavibes: 'https://www.gtavibes.com/guides/gta-6-trophy-list-achievements',
  gtabase: 'https://www.gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series',
};

const params = new URLSearchParams(location.search);
const doc = await (await fetch('data/trophies.json')).json();
const trophies = doc.trophies;
const sourceNames = doc.sources;

const startingState = params.get('demo') === '1'
  ? { ...DEMO_STATE, spoilers: params.get('spoilers') !== 'off' }
  : loadSavedProgress();
const tracker = createTracker(startingState);

const filters = {
  search: '',
  grade: params.get('grade') ?? 'all',
  kind: params.get('kind') ?? 'all',
  sort: 'list',
  hideEarned: false,
};

const listEl = document.getElementById('list');
const roadmapEl = document.getElementById('roadmapStages');
const detailEl = document.getElementById('detail');

function openTrophy(id) {
  const trophy = trophies.find((t) => t.id === id);
  if (!trophy) return;
  renderTrophyDetail(detailEl, trophy, tracker, sourceNames);
}

const viewRefs = { listEl, roadmapEl, sourceNames, openTrophy };

function render() {
  renderAll(viewRefs, trophies, filters, tracker);
}

tracker.watch(render);

const searchEl = document.getElementById('search');
searchEl.addEventListener('input', () => { filters.search = searchEl.value; render(); });

const gradeEl = document.getElementById('grade');
gradeEl.value = filters.grade;
gradeEl.addEventListener('change', () => { filters.grade = gradeEl.value; render(); });

const sortEl = document.getElementById('sort');
sortEl.addEventListener('change', () => { filters.sort = sortEl.value; render(); });

const spoilersEl = document.getElementById('spoilers');
spoilersEl.checked = params.get('spoilers') === 'off' ? false : tracker.progress.spoilers;
tracker.progress.spoilers = spoilersEl.checked;
spoilersEl.addEventListener('change', () => {
  tracker.progress.spoilers = spoilersEl.checked;
  tracker.save();
  render();
});

const hideEarnedEl = document.getElementById('hideEarned');
hideEarnedEl.addEventListener('change', () => { filters.hideEarned = hideEarnedEl.checked; render(); });

const kindButtons = [...document.querySelectorAll('#kindFilters .kind')];
for (const button of kindButtons) {
  button.classList.toggle('active', button.dataset.kind === filters.kind);
  button.addEventListener('click', () => {
    filters.kind = button.dataset.kind;
    for (const other of kindButtons) other.classList.toggle('active', other === button);
    render();
  });
}

document.getElementById('exportBtn').addEventListener('click', () => {
  downloadFile('gta6-trophy-progress.json', tracker.exportText());
});

const importFile = document.getElementById('importFile');
importFile.addEventListener('change', async () => {
  const file = importFile.files[0];
  if (!file) return;
  try {
    tracker.importText(await file.text());
  } catch {
    alert('That file is not a progress export from this guide — pick the file Export gave you.');
  }
  importFile.value = '';
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Clear every earned trophy and count?')) tracker.clear();
});

renderSources(document.getElementById('sourceList'), sourceNames, SOURCE_LINKS);
render();

const openId = Number(params.get('open') ?? '');
if (openId) openTrophy(openId);
if (params.get('view') === 'roadmap') {
  document.getElementById('roadmapSection').scrollIntoView();
}

window.__shotReady = true;
