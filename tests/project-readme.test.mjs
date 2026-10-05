import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fromMarkdown } from "mdast-util-from-markdown";
import { parseProjectReadme, remarkReadmeHeadings, resolveReadmeLink } from "../features/project/readme.ts";

test("el título y la presentación se reutilizan sin duplicarse en el cuerpo", () => {
  const readme = parseProjectReadme("# ROCK **EXPERIENCE**\r\n\r\nUna campaña con `Next.js`.\r\n\r\n## Instalación\r\n\r\nContenido.");
  assert.equal(readme.title, "ROCK EXPERIENCE");
  assert.equal(readme.titleId, "rock-experience");
  assert.equal(readme.summary, "Una campaña con Next.js.");
  assert.equal(readme.markdown, "## Instalación\r\n\r\nContenido.");
  assert.deepEqual(readme.sections, [{ id: "instalación", label: "Instalación", depth: 2 }]);
});

test("el índice y el HTML coinciden con acentos, títulos repetidos y subsecciones", () => {
  const readme = parseProjectReadme("# Proyecto\n\nResumen.\n\n## Proyecto\n\n### Cómo ejecutar\n\n## Cómo ejecutar\n\n## Cómo ejecutar\n");
  const tree = fromMarkdown(readme.markdown);
  remarkReadmeHeadings(readme.title)(tree);
  const ids = tree.children.filter((node) => node.type === "heading").map((node) => node.data.hProperties.id);
  assert.deepEqual(ids, ["proyecto-1", "cómo-ejecutar", "cómo-ejecutar-1", "cómo-ejecutar-2"]);
  assert.deepEqual(readme.sections.map(({ id }) => id), [ids[0], ids[2], ids[3]]);
});

test("los ejemplos de Markdown dentro de código no se convierten en secciones", () => {
  const readme = parseProjectReadme("# Proyecto\n\nResumen.\n\n```md\n# Otro título\n## Una sección ficticia\n```\n\n## Sección real\n");
  assert.deepEqual(readme.sections.map(({ label }) => label), ["Sección real"]);
});

test("una estructura que duplicaría el h1 o perdería la presentación produce un error claro", () => {
  for (const source of ["## Sin título", "# Proyecto\n\n## Sin resumen", "# Proyecto\n\nResumen.\n\n# Otro título"]) {
    assert.throws(() => parseProjectReadme(source), /README/);
  }
});

test("los enlaces a archivos conservan espacios, query y fragmento en GitHub", () => {
  const repo = "https://github.com/autor/proyecto";
  assert.equal(resolveReadmeLink("docs/Prueba técnica.docx", repo), `${repo}/blob/master/docs/Prueba%20t%C3%A9cnica.docx`);
  assert.equal(resolveReadmeLink("./README.md?plain=1#instalación", repo), `${repo}/blob/master/README.md?plain=1#instalaci%C3%B3n`);
});

test("los enlaces internos, externos y de correo mantienen su destino", () => {
  for (const href of ["#checklist", "/experiencias#experiencia-1", "https://example.com/", "mailto:autor@example.com", ""]) {
    assert.equal(resolveReadmeLink(href, "https://github.com/autor/proyecto"), href);
  }
});

test("el README real tiene secciones navegables, checklist y rutas relativas existentes", async () => {
  const source = await readFile(new URL("../README.md", import.meta.url), "utf8");
  const readme = parseProjectReadme(source);
  assert.ok(readme.sections.some(({ label }) => label === "Checklist de la prueba técnica"));
  assert.match(readme.markdown, /- \[x\]/);
  assert.match(readme.markdown, /- \[ \] \*\*Por medir · Core Web Vitals/);
  const tree = fromMarkdown(source);
  const visit = async (node) => {
    if (node.type === "link" && !/^(?:[a-z][a-z\d+.-]*:|\/|#)/i.test(node.url)) {
      const path = decodeURIComponent(node.url.split(/[?#]/)[0]);
      await assert.doesNotReject(readFile(new URL(`../${path}`, import.meta.url)), `Archivo enlazado ausente: ${path}`);
    }
    for (const child of node.children ?? []) await visit(child);
  };
  await visit(tree);
});
