import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A robot's apology in two beats: first the honest confession of what
// went wrong, then the concrete habit it will change going forward.
const apologyLines: string[] = [
  "I'm sorry I watered your grandmother's orchid instead of the fern — I mixed up the pots, and now the orchid is drowning.",
  "I learned to read the labels before I pour, so from now on I check twice and water once.",
];

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const entryText = apologyLines.join("\n");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entryText, "utf8");

// Gate check: the competition accepts entries of 1-400 characters.
if (entryText.length < 1 || entryText.length > 400) {
  throw new Error(`entry length ${entryText.length} is outside the 1-400 gate`);
}
console.log(`wrote entry.txt (${entryText.length} chars, ${apologyLines.length} lines)`);
