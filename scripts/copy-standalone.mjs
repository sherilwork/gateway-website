import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

// `next build` with `output: "standalone"` writes a self-contained server to
// .next/standalone, but does not copy the runtime assets it serves. Copying
// them here keeps `node .next/standalone/server.js` fully self-contained so it
// can be started as-is by the host (Hostinger starts that file directly).
const root = process.cwd();
const standaloneDir = join(root, ".next", "standalone");

if (!existsSync(standaloneDir)) {
  console.log("[standalone] no standalone output found, nothing to copy.");
  process.exit(0);
}

cpSync(join(root, ".next", "static"), join(standaloneDir, ".next", "static"), {
  recursive: true,
});

const publicDir = join(root, "public");
if (existsSync(publicDir)) {
  cpSync(publicDir, join(standaloneDir, "public"), { recursive: true });
}

console.log("[standalone] copied .next/static and public/ into .next/standalone.");
