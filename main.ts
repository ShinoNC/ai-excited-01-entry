// SPDX-License-Identifier: MIT
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "entry.png"));
