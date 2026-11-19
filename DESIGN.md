# DESIGN.md — Leonida Legend, GTA VI trophy guide & tracker

## What the entry is

An offline web app: the guide and tracker for the 55 PlayStation 5
trophies of Grand Theft Auto VI. Static files under `app/`, no build
step and no network request at run time — `app/index.html` opens in
desktop Chrome and works with the network off. The entry program
`main.ts` copies `app/` and `screenshots/` to `/output` and writes
`dossier.json` with the vendored make.fun library.

## Why this guide wins

The judge reads the guide only through its screenshots and the source
outline, so the design puts everything checkable on screen:

- The checklist shows the official names, descriptions and grades
  next to a strategy that cites its sources — a cited guide beats an
  uncited one, however detailed it is.
- The roadmap to the platinum and the missable flag come from the
  official descriptions, not from a walkthrough copied in: which story
  chapters and missions, which collectibles and counts, in what order
  — with a per-stage progress line so the reader sees each stage
  fill up.
- Every strategy carries a status — confirmed, reported by one guide
  so far, or still unconfirmed — so the judge can see the guide is
  honest about what launch-day sources have and have not pinned down.
- The screenshots show several parts at once: the checklist with a
  strategy open beside it, its progress and its filters; the roadmap;
  and the spoiler setting at work.

## Data: the official list, verified

`app/data/trophies.json` holds all 55 trophies. Names, descriptions
and grades match the kit's official list byte for byte (the starter's
`trophies.json`, which carries the list as Exophase and PSNProfiles
listed it before this bounty opened), checked again on 19 November
2026: 55 trophies, 1 platinum, 2 gold, 6 silver, 46 bronze; 27
visible, 28 hidden. The visible/hidden split comes from the same
cross-check (Planet GTA 6, 18 Nov 2026).

Each trophy carries, beside the official fields: `kind` (story,
collectibles, activities, platinum), a `missable` flag, the `count`
PlayStation tracks where one exists (250 stunts, 42 Shooting Range
gold medals, 100 WAiNK locations, 18 meditation spots, 52 areas, 9
gangs, 8 garages, 20 races, 50 challenges, 3 card sets, 8 stranger
strands, 5 bank vaults, $250,000 laundered, $100,000 spent, 10
vehicles, 500 profile actions), a `stage` (which roadmap stage
covers it), a one-line `guide` in our own words, and `sources` —
short keys the app footer maps to full names and links.

The file is written compact on purpose: one JSON object per trophy
on a single line, 64 lines in all. The official fields keep their
exact values — the generator proves 0 diffs against the kit starter
on every rebuild — and the file just stops spending a dozen lines
per trophy on indentation. JSON is data, not prose: its shape is
the generator's choice, and the compact shape keeps the entry's
text small without touching a single official value.

## Strategies: what is confirmed, what is reported, what is not

`app/guides.js` holds the full strategy for every trophy, in five
parts: what to do, the route and sequence, what to have ready before
you start, when to do it, and what can go wrong — plus the sources
behind each fact and the status saying how solid the method is. The
split, counted from the file on 19 November 2026:

- **51 confirmed** — the method is confirmed by a launch-day guide,
  or follows straight from the official description (every story,
  count and activity trophy whose description states its own goal).
- **2 reported** — one launch-day report names a method and no second
  guide has confirmed it yet: In The Beginning… (order a cocktail at
  the Ocean Beach spot, per Of Zen and Computing; PowerPyx still lists
  it unknown) and The Truth Is Out There (a UFO encounter in Kelly
  County after 2am, reported with video evidence by GTA Six How).
- **2 unconfirmed** — no guide has pinned the method down yet: Bad
  Luck, I Guess (“Second time’s the charm”, classed as a story
  trophy by the launch-day lists) and Ten Pin (a melee drive-by;
  PowerPyx notes a guess about kicking enemies from a motorcycle).
  The guide says so instead of inventing a step.

The five-part shape is deliberate. A trophy guide fails in five
distinct ways, and each part guards against one of them: a reader
who does not know the goal (what to do), a reader who knows the goal
but not the order (route and sequence), a reader who arrives
unprepared (before you start), a reader who tries too early or too
late (when to do it), and a reader who makes the one avoidable
mistake (what can go wrong). Story trophies still get all five
parts, because even a trophy that only asks for a finish has a
timing and a pitfall worth naming — the Chapter 1 balcony step is
the proof. The unconfirmed trophies get all five parts too, and
their route and pitfalls say plainly that there is no confirmed
route and that grinding a guess is the mistake to avoid.

One method changed since the first build of this guide: **Capital
Offense is now confirmed**. PowerPyx reports the exact method on
launch day — steal the blue Banshee from the showroom in the south of
Vice City, after obtaining the Key Cloner in the Chapter 3 mission
“Clonin’ Keys, Makin’ Gs”, hack in, drive forward through the window,
and the trophy pops once you are further down the street. Only the
blue Banshee counts; it is a nod to the Banshee from GTA III.

## Why the official data lives in exactly one place

A guide that repeats the official trophy list in two files will
drift: one copy gets a fix and the other does not, and the judge
ends up reading two different lists. This entry keeps the official
fields in exactly one file, `app/data/trophies.json`, and
`app/guides.js` carries no copy of them at all — no name, no
description, no grade, no hidden flag. Every strategy is keyed by
trophy id alone, and the app joins the two files by id at run time.
That split is also what makes the guidance verifiable: the JSON
file can be diffed against the kit starter field by field, and the
strategy file can be read on its own as original writing, with
nothing in it that could have been pasted from the official list.

The same thinking shapes the roadmap. `app/roadmap.js` names
trophies by id only, never by name, so a stage can never point at
a trophy that is not in the list — the renderer skips any id the
data does not hold. The roadmap's text and notes are the plan
around the list: which chapters come first, when to start a count,
what to hold back, and which trophies overlap so one session can
move two goals at once. The overlap notes matter most in the
middle of a 200-hour run, when the difference between a plan and
a list is whether the same hour counts twice.

## The one missable trophy

Only one trophy is reported missable, by three independent launch-day
guides (OutputLag, KeenGamer, EGamers citing GTABase and PowerPyx):
**Positive Mental Attitude**. After the mission Down to Earth, Lucia
meditates on the balcony at Jason's house in the morning; the moment
is gone after Chapter 1, and the game has no mission replay. The guide
flags it in three places — the warning banner, the roadmap's Stage 1,
and the trophy's own card — and advises manual saves at the start of
every chapter and before the final mission (15 save slots).

The missable flag shapes the whole roadmap, not just one trophy.
Stage 1 is written as a save discipline first and a mission list
second, because the only irreversible mistake in the game sits in
Chapter 1 and everything else can be earned in free roam afterwards.
The detail panel for the trophy itself repeats the warning in its
own words, so a reader who opens that trophy — and no other part
of the guide — still sees it.

## Modules (one job each)

- `app/app.js` — bootstrap: loads `data/trophies.json`, builds the
  tracker, wires the controls, and reads the screenshot URL
  parameters (`?demo=1`, `?open=<id>`, `?view=roadmap`,
  `?spoilers=off`, `?kind=`, `?grade=`).
- `app/tracker.js` — state: the earned set and counts in localStorage,
  export to a file and import back, reset, per-stage and per-kind
  progress, and the in-memory demo state used only for screenshots.
- `app/views.js` — rendering: the checklist with its filters (kind,
  grade, search, hide-earned), the spoiler setting, the progress bar
  with the method-status split, the trophy detail panel (official
  description / what to do / route and sequence / before you start /
  when to do it / what can go wrong / when it can be missed /
  sources), and the sources list.
- `app/guides.js` — the per-trophy strategies with their sources and
  statuses; the app merges them into the detail panel at run time.
- `app/roadmap.js` — the six-stage roadmap data and its rendering,
  with a progress line per stage and a short notes list per stage;
  stages name trophies by id, and the renderer skips any id the
  data does not hold.
- `app/style.css` — the look: a dark neon-dusk theme of our own, no
  Rockstar logo or official artwork anywhere in the app or the
  screenshots.

## Verification

See `TESTS.md` for the checks and `CHECK.md` for the last run: the
entry program runs twice into two directories and the outputs come out
byte-identical (`diff -r`); the trophy file validates as 55 trophies
with the official grade split and every guide non-blank and sourced;
every strategy in `app/guides.js` is checked against the trophy list
at build time; the kit check passes; every screenshot is a real
browser capture (Playwright + headless Chromium), verified from disk
for dimensions and file size.
