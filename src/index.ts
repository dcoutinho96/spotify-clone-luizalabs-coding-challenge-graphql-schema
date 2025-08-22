import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const globs = [
  path.join(__dirname, "schema", "**/*.graphql"),
  path.join(__dirname, "mutations", "**/*.graphql"),
  path.join(__dirname, "operations", "**/*.graphql"),
];

const typesArray = loadFilesSync(globs, {
  ignoreIndex: true,
  recursive: true,
});

export const typeDefs = mergeTypeDefs(typesArray);
