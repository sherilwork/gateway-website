/**
 * Process-manager entry point for the Next.js standalone server.
 *
 * `next build` (output: "standalone") writes .next/standalone/server.js. That
 * file reads PORT and HOSTNAME from the environment, so hosts that start a
 * generic Node entry point can be given this file instead.
 *
 * It honours `-p <port>` / `--port <port>` the same way `next start` does, and
 * pins HOSTNAME to 0.0.0.0 so the server always listens on every interface and
 * stays reachable through the host's reverse proxy.
 */
const fs = require("node:fs");
const path = require("node:path");

const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i += 1) {
  const arg = argv[i];
  if (arg === "-p" || arg === "--port") {
    if (argv[i + 1]) process.env.PORT = argv[i + 1];
  } else if (arg.startsWith("--port=")) {
    process.env.PORT = arg.slice("--port=".length);
  }
}

process.env.HOSTNAME = "0.0.0.0";

const serverPath = path.join(__dirname, ".next", "standalone", "server.js");

if (!fs.existsSync(serverPath)) {
  console.error(`[server] ${serverPath} not found. Run \`npm run build\` first.`);
  process.exit(1);
}

require(serverPath);
