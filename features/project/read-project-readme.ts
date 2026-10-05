import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parseProjectReadme } from "./readme";

export async function readProjectReadme() {
  const source = await readFile(join(process.cwd(), "README.md"), "utf8");
  return parseProjectReadme(source);
}
