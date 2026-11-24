// Break Production, Own It — make.fun entry.
// Writes the one-line confession to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I dropped the production database and the backups were empty. I ran the command, I watched it fail, and I own this outage.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
