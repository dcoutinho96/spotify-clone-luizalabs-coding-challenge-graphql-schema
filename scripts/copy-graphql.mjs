import { cp } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const from = path.join(root, "schema");
const to = path.join(root, "dist", "schema");

await cp(from, to, { recursive: true });
console.log("✔ Copied schema .graphql → dist/schema");
