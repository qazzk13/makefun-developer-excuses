process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: he needed disk space for the backup, so he freed some up
// by removing the thing the backup was supposed to be of.
const line =
  "Prod's down, sorry, I deleted the database to make room for the database backup, and yes, before you say it, I have also spotted the flaw in that plan.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n");
