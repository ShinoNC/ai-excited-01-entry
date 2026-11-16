// SPDX-License-Identifier: MIT
// ai-excited-01: the entry program. It places the image at the output
// path byte-for-byte, so the judged bytes are exactly the repo bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const bytes = readFileSync(resolve(root, "entry.png"));

mkdirSync(target, { recursive: true });
writeFileSync(resolve(target, "entry.png"), bytes);
