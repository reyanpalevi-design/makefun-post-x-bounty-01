// post-x-promote-make-your-own-bounty-01 entry
// The entry is the X post itself. This program copies POST.json from the
// repository root into the output directory, where the gate reads it.
// Before copying, it validates that POST.json parses and names an X post
// address, so a malformed entry fails loudly here instead of at the gate.
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(botDir, 'POST.json');
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read or parsed: ${(err as Error).message}`);
  process.exit(1);
}

const url = (parsed as { url?: unknown })?.url;
if (typeof url !== 'string' || !/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json does not name an X post address: ${String(url)}`);
  process.exit(1);
}

const raw = readFileSync(postPath, 'utf8');
if (Buffer.byteLength(raw, 'utf8') > 16384) {
  console.error(`POST.json is too large: ${Buffer.byteLength(raw, 'utf8')} bytes`);
  process.exit(1);
}
if (url.trim() !== url) {
  console.error('POST.json url carries surrounding whitespace');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postPath, join(outputDir, 'POST.json'));
