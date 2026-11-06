import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = dirname(fileURLToPath(import.meta.url));
const nextCli = resolve(root, "../node_modules/next/dist/bin/next");
const args = process.argv.slice(2).flatMap((arg) => {
  if (arg === "--host") return ["--hostname"];
  if (arg === "--strictPort") return [];
  return [arg];
});
const child = spawn(process.execPath, [nextCli, "dev", ...args], { stdio: "inherit", env: process.env });
child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});
