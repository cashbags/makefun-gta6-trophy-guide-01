# CHECK.md — verification record, gta6-trophy-guide-01

Last run: 19 Nov 2026, ~20:12 WIB. Rebuild under recording
`01a1f3e9-16e3-7288-b8fe-1f0a9fd16ce8` (r2): every counted file was
written fresh in-session and every screenshot re-captured, after the
first build's recording failed to seal. All checks run from `entry/`
unless noted.

## Trophy list (app/data/trophies.json)

- 55 trophies; grades 1 platinum / 2 gold / 6 silver / 46 bronze; 28 hidden, 27 visible.
- Every name, description and grade byte-identical to the kit's official list (starter `trophies.json`, Exophase / PSNProfiles) — 0 diffs on re-verification this run.
- 1 missable: Positive Mental Attitude (Chapter 1 balcony meditation).
- Every guide non-blank, in our own words, citing at least one source; 19 trophies carry a PlayStation-tracked count.
- `main.ts` re-checks all of the above on every run and throws if any fails.

## Entry program (main.ts)

- `MAKEFUN_OUTPUT_DIR=/tmp/out-a node main.ts` and the same into `/tmp/out-b`: `diff -r` clean — byte-identical replay.
- Dossier 748,097 bytes (cap 1.5 MiB); dossier text 61,861 bytes (cap 163,840).
- First load 6 files, 11,872 bytes gzip-9; whole app 8 files, 60,798 bytes (caps: 993 files, 48 MiB).
- `vendor/makefun-frontend.ts` byte-identical to the kit's copy (sha256 4c8da1c8…).

## Screenshots (real browser captures, Playwright + headless Chromium)

| file | bytes | dimensions | content |
|---|---|---|---|
| 1-checklist.jpg | 135,714 | 1280×800 | Header, progress 5/55, missable banner, roadmap Stage 1, spoilers off |
| 2-guide.jpg | 122,094 | 1280×800 | Positive Mental Attitude guide open: what to do / where and how / when it can be missed, sources, count 3/18 |
| 3-roadmap.jpg | 162,408 | 1280×800 | Roadmap Stages 1–4 with trophy chips |
| 4-spoilers.jpg | 90,688 | 1280×800 | Controls (spoilers on, export/import) + story trophies hidden until earned |

All ≤ 256 KiB, long side 1280, short side 800. No console errors and no
failed requests on the final capture run (the earlier favicon 404 was
fixed with `app/favicon.svg`).

## App smoke test

Served with `node serve.ts` on :8080; index, app.js and trophies.json
all 200. In headless Chromium every view reached `window.__shotReady`
with no page errors. Tracker state, filters, spoiler setting and
export/import exercised through the capture runs; localStorage
persistence and the demo state (`?demo=1`, in-memory only) verified by
the screenshots themselves.

## Tree size — note on the 8,192-byte figure

The repo tree at the committed snapshot is 679,391 bytes. The 8,192-byte
cap from the tiny-chess round does NOT apply to this competition: the
live requirements (`GET /api/competitions/gta6-trophy-guide-01/requirements`)
show the `entry_size` check with `"applies": false`, and this
competition's harness carries no `max_entry_bytes` (its caps are the
gate's: app/ ≤ 993 files / 48 MiB, dossier ≤ 1.5 MiB, text ≤ 163,840
bytes, trophies.json ≤ 2 MiB, screenshots ≤ 256 KiB each). The kit's own
starter already exceeds 8,192 bytes on its screenshots and vendor
library alone. Nothing was cut to chase that figure; the guides stay whole.

## Kit check

`node cli/makefun.mjs check --kit . --repo <entry dir>` on commit
f5d319041d5f42f96956a02eea7e738a7615a7cd (21 files, 679,482 bytes):
**4 passed, 0 failed, 17 skipped, 5 checked at submission** —
"ok: every check run here passes". The 17 skipped are the transcript
checks, which run on the site from the sealed recording; the 5
at-submission checks are repo_public, repo_owner,
repo_created_after_open, commit_in_repo and duplicate_snapshot.
