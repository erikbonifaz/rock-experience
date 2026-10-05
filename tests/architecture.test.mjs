import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const projectFile = (path) => new URL(`../${path}`, import.meta.url);
const json = async (path) => JSON.parse(await readFile(projectFile(path), "utf8"));
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

async function pagePaths(directory = "app") {
  const pages = [];
  for (const entry of await readdir(projectFile(directory), { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) pages.push(...await pagePaths(path));
    else if (entry.name === "page.tsx") pages.push(path);
  }
  return pages;
}

test("el mapa representa todas las páginas y los dos endpoints de la aplicación", async () => {
  const diagram = await json("docs/arquitectura/rock-experience.json");
  const sources = new Set(diagram.components.flatMap((node) => node.sources.map(({ path }) => path)));
  for (const path of [...await pagePaths(), "app/api/experiences/route.ts", "app/api/contact/route.ts"]) {
    assert.ok(sources.has(path), `La ruta ${path} no está representada en Archify.`);
  }
});

test("las fuentes del mapa coinciden con los archivos actuales del proyecto", async () => {
  const diagram = await json("docs/arquitectura/rock-experience.json");
  const evidence = await json("docs/arquitectura/rock-experience.sources.json");
  const citedPaths = new Set(diagram.components.flatMap((node) => node.sources.map(({ path }) => path)));
  assert.deepEqual(new Set(evidence.files.map(({ path }) => path)), citedPaths);
  for (const file of evidence.files) {
    const content = (await readFile(projectFile(file.path), "utf8")).replace(/\r\n/g, "\n");
    assert.equal(sha256(content), file.sha256, `Cambió ${file.path}; regenera el mapa de Archify.`);
  }
});

test("el visor generado corresponde al JSON y tiene procedencia verificada", async () => {
  const receipt = await json("public/diagrams/rock-experience.delivery.json");
  assert.equal(receipt.status, "current");
  assert.equal(sha256(await readFile(projectFile("docs/arquitectura/rock-experience.json"))), receipt.specification.sha256, "El JSON cambió sin regenerar el visor.");
  assert.equal(sha256(await readFile(projectFile("public/diagrams/rock-experience.html"))), receipt.artifact.sha256, "El HTML no coincide con el recibo de Archify.");
});
