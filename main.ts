// main.ts — the entry program for Leonida Legend (Node 22, standard
// library only). The guide lives in this directory's app/ folder: plain
// static files a desktop browser opens at app/index.html — ES modules
// and CSS, no build step — and offline: nothing is loaded over the
// network. Its trophy list and guides are app/data/trophies.json: all
// 55 official PlayStation 5 trophies, each with its official name,
// description and grade, a guide in our own words that cites its
// sources, a kind, a missable flag and the count PlayStation tracks
// where one exists. This program hands the guide in: it copies app/
// and screenshots/ from beside this file to /output and writes
// /output/dossier.json — the summary the judge reads — with the
// vendored make.fun library (vendor/makefun-frontend.ts, the scorer's
// own copy, unchanged; never edit that file, the scorer compares it
// byte for byte with its own copy).
//
// The program is deterministic: it copies files and writes one
// dossier, reading nothing from the clock or the network, so two runs
// into two directories give byte-identical outputs. That is checked on
// every verification pass with `diff -r` (see TESTS.md).
//
// Try it locally with `node serve.ts`, then open http://localhost:8080.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const rootDir = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
cpSync(join(rootDir, 'app'), join(outDir, 'app'), { recursive: true });
mkdirSync(join(outDir, 'screenshots'), { recursive: true });
if (existsSync(join(rootDir, 'screenshots'))) {
  cpSync(join(rootDir, 'screenshots'), join(outDir, 'screenshots'), { recursive: true });
}

// The scorer's own caps (reference/gate.json): only text_max_bytes
// shapes the bytes; the rest refuse an entry the scorer would refuse
// (more than 4 screenshots, or one over 256 KiB; more than 993 files
// and directories in app/, or 48 MiB of app files). Passing the same
// limits here means the dossier carries the caps the scorer enforces —
// the entry cannot pass the dossier and then fail the gate on a size
// its author never checked.
writeFileSync(
  join(outDir, 'dossier.json'),
  buildDossier(outDir, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    app_max_files: 993,
    app_max_bytes: 50331648,
  }),
);

// Read the dossier back and prove the trophy file made it in. This is
// the one place that can fail loudly when app/data/trophies.json was
// never copied, instead of letting the scorer find a missing list.
// The check is cheap (one parse) and deterministic — it reads only
// what was just written — so it costs the replay nothing and catches a
// packaging slip on every run. It also proves the list is whole: 55
// trophies, the official grade split (1 platinum, 2 gold, 6 silver,
// 46 bronze), every guide non-blank and every trophy sourced. A list
// that lost a trophy to a bad edit fails here, at build time, not in
// front of the judge. The screenshots are counted the same way: 3 to
// 4, each a whole file the dossier already hashed.
function verifyOutput(dir: string): void {
  const dossier = JSON.parse(readFileSync(join(dir, 'dossier.json'), 'utf8'));
  if (!JSON.stringify(dossier).includes('app/data/trophies.json')) {
    throw new Error('dossier is missing app/data/trophies.json — the trophy list did not copy');
  }
  const list = JSON.parse(readFileSync(join(dir, 'app', 'data', 'trophies.json'), 'utf8'));
  const trophies = list.trophies ?? list;
  if (!Array.isArray(trophies) || trophies.length !== 55) {
    throw new Error(`trophy list holds ${Array.isArray(trophies) ? trophies.length : 'no'} trophies, expected 55`);
  }
  const grades: Record<string, number> = {};
  for (const t of trophies) {
    grades[t.grade] = (grades[t.grade] ?? 0) + 1;
    if (typeof t.name !== 'string' || !t.name.trim()) throw new Error('a trophy has no name');
    if (typeof t.description !== 'string' || !t.description.trim()) {
      throw new Error(`trophy ${t.name} has no official description`);
    }
    if (typeof t.guide !== 'string' || !t.guide.trim()) throw new Error(`trophy ${t.name} has no guide`);
    if (!Array.isArray(t.sources) || t.sources.length === 0) {
      throw new Error(`trophy ${t.name} cites no source`);
    }
  }
  const want: Record<string, number> = { platinum: 1, gold: 2, silver: 6, bronze: 46 };
  for (const [grade, count] of Object.entries(want)) {
    if (grades[grade] !== count) {
      throw new Error(`grade split holds ${grades[grade] ?? 0} ${grade}, expected ${count}`);
    }
  }
  const shots = readdirSync(join(dir, 'screenshots')).filter((f) => !f.startsWith('.'));
  if (shots.length < 3 || shots.length > 4) {
    throw new Error(`screenshots/ holds ${shots.length} images, expected 3 to 4`);
  }
}

verifyOutput(outDir);
