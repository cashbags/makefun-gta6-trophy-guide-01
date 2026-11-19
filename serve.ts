// serve.ts — serve app/ on http://localhost:8080 for trying the guide
// in a desktop browser. Standard library only; serves only files under
// app/, with the right content type for html, css, js and json, and
// nothing else. Run with `node serve.ts` from this directory.
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const root = join(here, 'app');
const port = Number(process.env.PORT ?? 8080);

const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const server = createServer((req, res) => {
  let path = normalize(join(root, decodeURIComponent(new URL(req.url ?? '/', 'http://x').pathname)));
  if (existsSync(path) && statSync(path).isDirectory()) path = join(path, 'index.html');
  if (!path.startsWith(root) || !existsSync(path) || !statSync(path).isFile()) {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('not found\n');
    return;
  }
  res.writeHead(200, { 'content-type': TYPES[extname(path)] ?? 'application/octet-stream' });
  res.end(readFileSync(path));
});

server.listen(port, () => {
  console.log(`Leonida Legend guide at http://localhost:${port}/`);
});
