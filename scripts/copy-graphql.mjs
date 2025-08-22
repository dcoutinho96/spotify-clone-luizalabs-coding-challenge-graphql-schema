import { cp } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

async function copyDir(name) {
  const from = path.join(root, name);
  const to = path.join(root, "dist", name);
  await cp(from, to, { recursive: true });
  console.log(`✔ Copied ${name} → dist/${name}`);
}

await Promise.all([
  copyDir("schema"),
]);
