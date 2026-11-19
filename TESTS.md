# TESTS.md — how this entry is verified

Run from `entry/` unless noted. Node 22+ (the entry program runs on
Node 22 in the grader; this machine's system node is v24).

## 1. The trophy list is the official list

```sh
node -e "
const mine = JSON.parse(require('fs').readFileSync('app/data/trophies.json','utf8'));
const kit = JSON.parse(require('fs').readFileSync('../gta6-trophy-guide-01-kit/starter/app/data/trophies.json','utf8'));
// 55 trophies; grades 1 platinum / 2 gold / 6 silver / 46 bronze; 28 hidden;
// every name, description and grade identical to the kit's official list;
// every guide non-blank and every trophy citing at least one source.
"
```

The check is also run by `main.ts` on every run (see §3): a list that
lost a trophy or a guide fails the program, not the judge.

## 2. The app runs offline in a real browser

```sh
node serve.ts          # http://localhost:8080
```

Open it in desktop Chrome with the network off: the checklist, the
roadmap, the detail panel, the filters, the spoiler setting and
export/import all work. Tick a trophy, reload: it stays ticked
(localStorage). Export downloads `gta6-trophy-progress.json`; import
reads it back. No request leaves the browser — the only fetch is the
app's own `data/trophies.json`.

## 3. The entry program is deterministic

```sh
rm -rf /tmp/out-a /tmp/out-b
MAKEFUN_OUTPUT_DIR=/tmp/out-a node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out-b node main.ts
diff -r /tmp/out-a /tmp/out-b   # no output: byte-identical
```

`main.ts` also verifies on every run: the dossier names
`app/data/trophies.json`; the copied list holds 55 trophies with the
official grade split and every guide non-blank and sourced; and
`screenshots/` holds 3 to 4 images.

## 4. Screenshots are real browser captures

```sh
NODE_PATH=/home/hatch/workspace/makefun/bounties/gta6-01/tools/node_modules \
  node ../scripts/capture.mjs http://localhost:8080
```

Playwright + headless Chromium loads each `shots.json` view, waits for
`window.__shotReady`, and saves JPEG q80 at 1280×800. The script
refuses a capture over 256 KiB and reports every console error and
failed request. Each file is then read back from disk for its JPEG
dimensions (long side ≤ 1280, short side ≥ 480) and size — see
`CHECK.md` for the last run's numbers.

## 5. Kit check

From the unpacked kit, on the committed repository:

```sh
node cli/makefun.mjs check --kit . --repo <entry dir>
```

Checks the LICENSE, the entrypoint (`main.ts`) and the snapshot's size
caps. The transcript gate runs on the site, from the sealed recording.
