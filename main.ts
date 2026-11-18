// News-image entry for 18 November 2026: the day's front page lives in this
// repository as entry.png, and this program delivers a copy to the output
// directory the grader reads. Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
console.log(`wrote entry.png (${statSync(join(outDir, 'entry.png')).size} bytes)`);
