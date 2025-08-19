import { readFileSync } from "fs";
import { resolve } from "path";

export const typeDefs = readFileSync(resolve("src/schema.graphql"), "utf8");