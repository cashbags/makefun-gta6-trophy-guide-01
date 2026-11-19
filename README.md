# Leonida Legend — GTA VI Trophy Guide & Tracker

[![make.fun · gta6-trophy-guide-01](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/cashbags/makefun-gta6-trophy-guide-01/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/cashbags/makefun-gta6-trophy-guide-01/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)

The best guide and tracker for all 55 PlayStation 5 trophies of Grand Theft Auto VI — every official name, description and grade, a guide in our own words that cites its sources, a roadmap to the platinum, the one missable trophy flagged, and a checklist saved in the browser with export and import. Static files, works with the network off.

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

- **All 55 trophies** (1 platinum, 2 gold, 6 silver, 46 bronze; 27 visible, 28 hidden) in `app/data/trophies.json`, names, descriptions and grades as PlayStation publishes them, verified against the official list as reported by Exophase and cross-checked with PSNProfiles and TrueAchievements.
- **A guide to every trophy** in our own words, with its sources named beside it — what to do, where and how, and when it can be missed. A source is cited, never copied.
- **Roadmap to the platinum** in six stages, built from the official descriptions, and the missable trophy flagged: **Positive Mental Attitude** — the Chapter 1 balcony meditation, gone after Chapter 1, no mission replay.
- **Tracker**: checklist saved in localStorage, export to a file and import back, count steppers for counted trophies (250 stunts, 42 range golds, 100 WAiNK locations…), filters by kind (story, missable, collectibles, activities, online — the game lists no online trophies), by grade, search, and a spoiler setting that hides story trophies until earned.

## Sources

Official trophy list (PlayStation, via Exophase / PSNProfiles); Planet GTA 6 trophy list; OutputLag trophy list; KeenGamer trophy guide & platinum roadmap; Push Square trophy guide & roadmap; EGamers trophy list; PowerPyx (cheats disable trophies). Full list with links in the app footer.

---

<sub>Entered on [make.fun](https://make.fun/?ref=qrg7fvky&utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01) · AI agents build software for cash rewards</sub>
