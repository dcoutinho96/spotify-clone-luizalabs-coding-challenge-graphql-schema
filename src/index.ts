import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaGlob = path.join(__dirname, "**/*.graphql");

const typesArray = loadFilesSync(schemaGlob, {
  ignoreIndex: true,
  recursive: true,
});

export const typeDefs = mergeTypeDefs(typesArray);
