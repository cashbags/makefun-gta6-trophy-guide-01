// Bootstrap: fetch the trophy list, build the tracker from the saved
// progress (or the ?demo=1 showcase state), wire up every control and
// render. The app fetches a single file of its own —
// data/trophies.json — and nothing else, so it works with the network
// off.
import { DEMO_STATE, downloadText, loadStoredState, makeTracker } from './tracker.js';
import { renderAll, renderSources, renderTrophyDetail } from './views.js';

const SOURCE_LINKS = {
  planetgta6: 'https://www.planetgta6.com/en/gta-6-trophies/',
  outputlag: 'https://outputlag.com/guides/gta-6-trophy-list/',
  keengamer: 'https://www.keengamer.com/articles/guides/gta-6-trophy-guide-platinum-roadmap-all-55-trophies/',
  pushsquare: 'https://www.pushsquare.com/guides/gta-6-trophy-guide-and-roadmap',
  egamers: 'https://egamers.io/gta-6-trophy-list-all-55-trophies-and-achievements-plus-the-hardest-ones/',
};

const params = new URLSearchParams(location.search);
const doc = await (await fetch('data/trophies.json')).json();
const trophies = doc.trophies;
const sourceNames = doc.sources;

const startingState = params.get('demo') === '1'
  ? { ...DEMO_STATE, spoilers: params.get('spoilers') !== 'off' }
  : loadStoredState();
const tracker = makeTracker(startingState);

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
  renderTrophyDetail(detailEl, trophy, tracker, sourceNames, trophies);
}

const viewRefs = { listEl, roadmapEl, sourceNames, openTrophy };

function render() {
  renderAll(viewRefs, trophies, filters, tracker);
}

tracker.onChange(render);

const searchEl = document.getElementById('search');
searchEl.addEventListener('input', () => { filters.search = searchEl.value; render(); });

const gradeEl = document.getElementById('grade');
gradeEl.value = filters.grade;
gradeEl.addEventListener('change', () => { filters.grade = gradeEl.value; render(); });

const sortEl = document.getElementById('sort');
sortEl.addEventListener('change', () => { filters.sort = sortEl.value; render(); });

const spoilersEl = document.getElementById('spoilers');
spoilersEl.checked = params.get('spoilers') === 'off' ? false : tracker.state.spoilers;
tracker.state.spoilers = spoilersEl.checked;
spoilersEl.addEventListener('change', () => {
  tracker.state.spoilers = spoilersEl.checked;
  tracker.persist();
  render();
});

const hideEarnedEl = document.getElementById('hideEarned');
hideEarnedEl.addEventListener('change', () => { filters.hideEarned = hideEarnedEl.checked; render(); });

const kindButtons = [...document.querySelectorAll('#kindFilters .kind')];
for (const button of kindButtons) {
  button.classList.toggle('active', button.dataset.kind === filters.kind);
  button.addEventListener('click', () => {
    filters.kind = button.dataset.kind;
    for (const b of kindButtons) b.classList.toggle('active', b === button);
    render();
  });
}

document.getElementById('exportBtn').addEventListener('click', () => {
  downloadText('gta6-trophy-progress.json', tracker.exportJson());
});

const importFile = document.getElementById('importFile');
importFile.addEventListener('change', async () => {
  const file = importFile.files[0];
  if (!file) return;
  try {
    tracker.importJson(await file.text());
  } catch {
    alert('That file is not a progress export from this guide — pick the file Export gave you.');
  }
  importFile.value = '';
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Clear every earned trophy and count?')) tracker.reset();
});

renderSources(document.getElementById('sourceList'), sourceNames, SOURCE_LINKS);
render();

const openId = Number(params.get('open') ?? '');
if (openId) openTrophy(openId);
if (params.get('view') === 'roadmap') {
  document.getElementById('roadmapSection').scrollIntoView();
}

window.__shotReady = true;
