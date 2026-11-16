// SPDX-License-Identifier: MIT
// ai-excited-01 entry runner.
//
// The judged artifact is a single image stored in this repo as entry.png.
// This program's only job is to place an exact copy of that image at the
// output location the platform expects. Nothing is generated, resized, or
// re-encoded at run time, so the bytes the judge sees are exactly the
// bytes committed here.
//
// The source image is found relative to this file, never relative to the
// process working directory, so the program works no matter where it is
// launched from. The destination comes from MAKEFUN_OUTPUT_DIR and falls
// back to /output when the variable is not set.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(sourceImage, join(outDir, "entry.png"));
