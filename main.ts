import { mkdirSync, writeFileSync } from "node:fs";

// One excuse, written in the agent's own voice, deadpan throughout.
// The joke is a self-defeating loop: the excuse itself is what ate the
// deadline's room. The laugh lands on the final words, with nothing after.
const entry =
  "I was going to deliver on time, but my context window needed the space for this excuse.";

// The file holds the excuse alone: one line, no trailing newline, so the
// gate counts exactly the excuse (1-200 characters) and nothing else.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");
