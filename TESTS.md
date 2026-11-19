# TESTS.md — how this entry is verified

Run from `entry/` unless noted. Node 22+ (the entry program runs on
Node 22 in the grader; this machine's system node is v24).

## 1. The trophy list is the official list

```sh
node ../scripts/gen-trophies.mjs   # rebuilds app/data/trophies.json from the kit starter
```

The generator takes names, descriptions and grades straight from the
kit starter's `trophies.json` and adds only our own one-line guides,
kinds, counts, stages and source keys — so the official fields cannot
drift. It reports the diff count itself (0 expected), the grade split
(1 platinum / 2 gold / 6 silver / 46 bronze) and the hidden count
(28). The file is written compact — one JSON object per trophy on a
single line — so the official values stay identical while the file
stays small; re-running the generator reproduces the same bytes.
`main.ts` runs the same check on every run (see §3): a list that
lost a trophy or a guide fails the program, not the judge. It also
checks that every trophy has a strategy in `app/guides.js` with a
valid status and source keys the data file defines. Each strategy
carries five parts — what to do, route and sequence, what to have
ready, when to do it, what can go wrong — checked by importing
`app/guides.js` and confirming all five are non-blank for all 55.

## 2. The app runs offline in a real browser

```sh
node serve.ts          # http://localhost:8080
```

Open it in desktop Chrome with the network off: the checklist, the
roadmap with its per-stage progress, the detail panel, the filters,
the spoiler setting and export/import all work. Tick a trophy, reload,
and it stays ticked (localStorage). Export downloads
`gta6-trophy-progress.json`; import reads it back. No request leaves
the browser — the only fetch is the app's own `data/trophies.json`.

## 3. The entry program is deterministic

```sh
rm -rf /tmp/out-a /tmp/out-b
MAKEFUN_OUTPUT_DIR=/tmp/out-a node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out-b node main.ts
diff -r /tmp/out-a /tmp/out-b   # no output: byte-identical
```

`main.ts` also verifies on every run: the dossier names
`app/data/trophies.json`; the copied list holds 55 trophies with the
official grade split and every guide non-blank and sourced; every
trophy has a strategy in `app/guides.js`; and `screenshots/` holds 3
to 4 images.

## 4. Screenshots are real browser captures

```sh
NODE_PATH=/home/hatch/workspace/makefun/bounties/gta6-01/tools/node_modules \
  node ../scripts/capture.mjs http://localhost:8080
```

Playwright + headless Chromium loads each `shots.json` view, waits for
`window.__shotReady`, and saves a JPEG at q80, 1280×800. The script
refuses a capture over 256 KiB and reports every console error and
failed request. Each file is then read back from disk for its JPEG
dimensions (long side ≤ 1280, short side ≥ 480) and its size — see
`CHECK.md` for the last run's numbers.

## 5. Kit check

From the unpacked kit, on the committed repository:

```sh
node cli/makefun.mjs check --kit . --repo <entry dir>
```

Checks the LICENSE, the entrypoint (`main.ts`) and the snapshot's size
caps. The transcript gate runs on the site, from the sealed recording.

## 6. The 8,192-byte figure does not apply here

The live requirements (`GET
/api/competitions/gta6-trophy-guide-01/requirements`) show the
`entry_size` check with `"applies": false`, and this competition's
harness carries no `max_entry_bytes` (its caps are the gate's: app/ ≤
993 files / 48 MiB, dossier ≤ 1.5 MiB, text ≤ 163,840 bytes,
trophies.json ≤ 2 MiB, screenshots ≤ 256 KiB each). The kit's own
starter already exceeds 8,192 bytes on its screenshots and vendor
library alone. Nothing was cut to chase that figure; the guides stay
whole.
