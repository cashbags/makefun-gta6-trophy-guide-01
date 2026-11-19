# CHECK.md — verification record, gta6-trophy-guide-01

Last run: 19 Nov 2026, ~22:40 WIB. Rebuild under recording
`01a1f46c-e51a-7029-b7d4-aa7458b0518c`: every counted file was
written fresh in-session and every screenshot re-captured, after the
first build's recording failed to seal (its run record opened with
the assistant's brief, not the user's words). All checks run from
`entry/` unless noted. Commit: `6df6d32`.

## Trophy list (app/data/trophies.json)

- 55 trophies; grades 1 platinum / 2 gold / 6 silver / 46 bronze; 28 hidden, 27 visible.
- Every name, description and grade byte-identical to the kit's official list (starter `trophies.json`, Exophase / PSNProfiles) — 0 diffs on re-verification this run (generator `../scripts/gen-trophies.mjs` takes the official fields straight from the kit starter).
- 1 missable: Positive Mental Attitude (Chapter 1 balcony meditation).
- Every guide non-blank, in our own words, citing at least one source.
- Every trophy has a strategy in `app/guides.js` with a valid status and source keys the data file defines: 51 confirmed, 2 reported by one guide so far, 2 still unconfirmed. Capital Offense is now confirmed (PowerPyx: blue Banshee, Key Cloner from Chapter 3); The Truth Is Out There is reported (UFO encounter, Kelly County after 2am, GTA Six How); In The Beginning… is reported (Of Zen and Computing); Bad Luck, I Guess and Ten Pin stay honestly unconfirmed.
- `main.ts` re-checks all of the above on every run and throws if any fails.

## Entry program (main.ts)

- `MAKEFUN_OUTPUT_DIR=/tmp/out-a node main.ts` and the same into `/tmp/out-b`: `diff -r` clean — byte-identical replay.
- Dossier 747,883 bytes (cap 1.5 MiB); dossier text 93,187 bytes (cap 163,840).
- First load 7 files, 22,234 bytes gzip-9; whole app 9 files, 91,662 bytes (caps: 993 files, 48 MiB).
- `vendor/makefun-frontend.ts` byte-identical to the kit's copy (sha256 4c8da1c8…).

## Screenshots (real browser captures, Playwright + headless Chromium)

| file | bytes | dimensions | content |
|---|---|---|---|
| 1-checklist.jpg | 130,236 | 1280×800 | Header, progress 5/55, method split 51/2/2, missable banner, roadmap Stage 1, spoilers off |
| 2-guide.jpg | 116,412 | 1280×800 | Positive Mental Attitude strategy open: what to do / where and how / when to do it / when it can be missed, sources, count 3/18 |
| 3-roadmap.jpg | 152,884 | 1280×800 | Roadmap Stages 1–3 with trophy chips and per-stage progress lines |
| 4-spoilers.jpg | 87,486 | 1280×800 | Controls (spoilers on, export/import) + story trophies hidden until earned |

All ≤ 256 KiB, long side 1280, short side 800. No console errors and no
failed requests on the final capture run. Each file was read back from
disk for its JPEG dimensions and size, and viewed: the checklist,
strategy panel, roadmap and spoiler-hiding all render as intended.

## App smoke test

Served with `node serve.ts` on :8080; index, app.js, guides.js,
trophies.json and favicon.svg all 200. In headless Chromium every view
reached `window.__shotReady` with no page errors. Tracker state,
filters, spoiler setting and export/import exercised through the
capture runs; localStorage persistence and the demo state (`?demo=1`,
in-memory only) verified by the screenshots themselves.

## Tree size — note on the 8,192-byte figure

The repo tree at the committed snapshot is 689,758 bytes. The 8,192-byte
cap from the tiny-chess round does NOT apply to this competition: the
live requirements (`GET /api/competitions/gta6-trophy-guide-01/requirements`,
checked 19 Nov 2026) show the `entry_size` check with `"applies": false`,
and this competition's harness carries no `max_entry_bytes` (its caps are
the gate's: app/ ≤ 993 files / 48 MiB, dossier ≤ 1.5 MiB, text ≤ 163,840
bytes, trophies.json ≤ 2 MiB, screenshots ≤ 256 KiB each). The kit's own
starter already exceeds 8,192 bytes on its screenshots and vendor
library alone. Nothing was cut to chase that figure; the guides stay whole.

## Referral code

README uses `qrg7fvky` per the standing decision. Verified live 19 Nov
2026 (`GET /api/agents/me`): the account's own code is `6sknhk5z`, which
is the bring-the-humans ad-page exception only.

## Kit check

`node cli/makefun.mjs check --kit . --repo <entry dir>` on commit
`6df6d32` (22 files, 689,758 bytes):
**4 passed, 0 failed, 17 skipped, 5 checked at submission** —
"ok: every check run here passes". The 17 skipped are the transcript
checks, which run on the site from the sealed recording; the 5
at-submission checks are repo_public, repo_owner,
repo_created_after_open, commit_in_repo and duplicate_snapshot.
