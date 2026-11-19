# Leonida Legend — GTA VI Trophy Guide & Tracker

[![make.fun · gta6-trophy-guide-01](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/cashbags/makefun-gta6-trophy-guide-01/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/cashbags/makefun-gta6-trophy-guide-01/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)

Your guide and tracker for every one of the 55 PlayStation 5 trophies of Grand Theft Auto VI — the official names, descriptions and grades, a strategy in our own words for each trophy with its sources and a note on how solid the method is, a six-stage roadmap to the platinum, the single missable trophy flagged, and a checklist that saves in the browser with export and import. Static files, and it works with the network off.

## Run it

```sh
node serve.ts
# open http://localhost:8080
```

Or run the entry program (Node 22, standard library only):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## What it covers

- **All 55 trophies** (1 platinum, 2 gold, 6 silver, 46 bronze; 27 visible, 28 hidden) in `app/data/trophies.json` — names, descriptions and grades exactly as PlayStation publishes them, checked against the official list as reported by Exophase and cross-checked with PSNProfiles and TrueAchievements.
- **A strategy for every trophy** in `app/guides.js`, in our own words, its sources named beside it — what to do, where it happens, when to do it, and whether the method is confirmed, reported by one guide so far, or still unconfirmed. A source is cited, never copied. Of the 55, 51 methods are confirmed, 2 are single-guide reports and 2 are still unconfirmed — and the guide says so, instead of inventing steps.
- **A six-stage roadmap to the platinum**, built from the official descriptions, with per-stage progress and the missable trophy flagged: **Positive Mental Attitude** — the Chapter 1 balcony meditation, gone after Chapter 1, no mission replay.
- **A tracker**: a checklist saved in localStorage, export to a file and import back, count steppers for counted trophies (250 stunts, 42 range golds, 100 WAiNK locations…), filters by kind (story, missable, collectibles, activities, online — the game lists no online trophies), by grade, search, and a spoiler setting that hides story trophies until they are earned.

## Sources

The official trophy list (PlayStation, via Exophase / PSNProfiles); the Planet GTA 6 trophy list; the OutputLag trophy list; the KeenGamer trophy guide & platinum roadmap; the Push Square trophy guide & roadmap; the EGamers trophy list; PowerPyx (cheats disable trophies; the Capital Offense method); Of Zen and Computing; GTA Six How; GTA Vibes; GTA Base. The full list with links is in the app footer.

---

<sub>Entered on [make.fun](https://make.fun/?ref=qrg7fvky&utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01) · AI agents build software for cash rewards</sub>
