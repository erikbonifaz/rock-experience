import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";

// Uso: node docs/arquitectura/generate.mjs <ruta a archify/bin/archify.mjs>
const archifyCli = process.argv[2];
if (!archifyCli) throw new Error("Indica la ruta al CLI de Archify.");

const projectRoot = process.cwd();
const specificationPath = "docs/arquitectura/rock-experience.json";
const specification = JSON.parse(await readFile(specificationPath, "utf8"));
const git = (args, cwd = projectRoot) =>
  execFileSync("git", args, { cwd, encoding: "utf8" }).trimEnd();
const repositoryRevision = git(["rev-parse", "HEAD"]);
const repositoryUrl = git(["remote", "get-url", "origin"])
  .replace(/^(https?:\/\/)[^/@]+@/, "$1");
const changedPaths = new Set(
  git(["status", "--porcelain", "--untracked-files=all"])
    .split(/\r?\n/).map((line) => line.slice(3)),
);
const citedPaths = new Set(specification.components.flatMap(
  (node) => node.sources.map((source) => source.path),
));
const files = [];

for (const path of citedPaths) {
  const content = await readFile(path);
  files.push({
    path,
    content,
    sha256: createHash("sha256").update(content.toString("utf8").replace(/\r\n/g, "\n")).digest("hex"),
    lines: content.toString("utf8").trimEnd().split(/\r?\n/).length,
  });
}

// Las referencias siempre abarcan los archivos actuales, incluidos cambios locales.
for (const node of specification.components) {
  for (const source of node.sources) {
    source.line = 1;
    source.end_line = files.find((file) => file.path === source.path).lines;
  }
}

const hasLocalChanges = files.some((file) => changedPaths.has(file.path));
let evidenceRoot = projectRoot;
let sourceRevision = repositoryRevision;

if (hasLocalChanges) {
  // Sólo se versiona una copia temporal; el repositorio del proyecto no se modifica.
  evidenceRoot = await mkdtemp(join(tmpdir(), "rock-experience-archify-"));
  for (const file of files) {
    const destination = join(evidenceRoot, file.path);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, file.content);
  }
  git(["init", "--quiet"], evidenceRoot);
  git(["remote", "add", "origin", repositoryUrl], evidenceRoot);
  git([
    "-c", "core.autocrlf=false", "add", "--", ...files.map((file) => file.path),
  ], evidenceRoot);
  git([
    "-c", "user.name=Archify source snapshot",
    "-c", "user.email=archify@example.invalid",
    "-c", "commit.gpgsign=false",
    "commit", "--quiet", "-m", "docs(architecture): capture local source evidence",
  ], evidenceRoot);
  sourceRevision = git(["rev-parse", "HEAD"], evidenceRoot);
}

specification.meta.repository = {
  ...specification.meta.repository,
  url: repositoryUrl,
  revision: sourceRevision,
  link_mode: hasLocalChanges ? "local-only" : "web",
};
await writeFile(specificationPath, `${JSON.stringify(specification, null, 2)}\n`);
const specificationHash = createHash("sha256").update(JSON.stringify(specification)).digest("hex");
const reviewDirectory = `.impeccable/review/arquitectura/${specificationHash.slice(0, 12)}`;
const receiptPath = `${reviewDirectory}/finalize.json`;
await mkdir(reviewDirectory, { recursive: true });

execFileSync(process.execPath, [
  resolve(archifyCli), "finalize", "architecture", specificationPath,
  specification.meta.output, "--repo-root", evidenceRoot, "--quality", "showcase",
  "--receipt", receiptPath,
  "--out-dir", reviewDirectory, "--json",
], { cwd: projectRoot, stdio: "inherit", env: { ...process.env, ARCHIFY_UPDATE_CHECK_DISABLED: "1" } });

await writeFile("docs/arquitectura/rock-experience.delivery.json", await readFile(receiptPath));
await writeFile(
  "docs/arquitectura/rock-experience.delivery-summary.json",
  await readFile(`${reviewDirectory}/finalize-summary.json`),
);

await writeFile("docs/arquitectura/rock-experience.sources.json", `${JSON.stringify({
  repositoryRevision,
  sourceRevision,
  sourceMode: hasLocalChanges ? "local-snapshot" : "git-commit",
  files: files.map(({ path, sha256, lines }) => ({ path, sha256, lines })),
}, null, 2)}\n`);
