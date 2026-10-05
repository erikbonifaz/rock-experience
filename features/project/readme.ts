import GithubSlugger from "github-slugger";
import { fromMarkdown } from "mdast-util-from-markdown";

type MarkdownTree = ReturnType<typeof fromMarkdown>;
type Heading = Extract<MarkdownTree["children"][number], { type: "heading" }>;
type MarkdownNode = {
  type: string;
  value?: string;
  alt?: string | null;
  children?: MarkdownNode[];
};

function nodeText(node: MarkdownNode): string {
  return node.value ?? node.alt ?? node.children?.map(nodeText).join("") ?? "";
}

function headings(node: MarkdownNode): Heading[] {
  if (node.type === "heading") return [node as Heading];
  return node.children?.flatMap(headings) ?? [];
}

export function parseProjectReadme(source: string) {
  const tree = fromMarkdown(source);
  const [titleNode, summaryNode] = tree.children;

  if (titleNode?.type !== "heading" || titleNode.depth !== 1) {
    throw new Error("El README debe comenzar con un título # de nivel 1.");
  }
  if (summaryNode?.type !== "paragraph") {
    throw new Error("El título del README debe ir seguido de un párrafo de presentación.");
  }
  if (headings(tree).filter((heading) => heading.depth === 1).length !== 1) {
    throw new Error("El README debe tener un único título #; utiliza ## para las secciones.");
  }

  const title = nodeText(titleNode);
  const markdown = source.slice(summaryNode.position!.end.offset).trim();
  const slugger = new GithubSlugger();
  const titleId = slugger.slug(title);
  const sections = headings(fromMarkdown(markdown)).map((heading) => ({
    id: slugger.slug(nodeText(heading)),
    label: nodeText(heading),
    depth: heading.depth,
  })).filter((heading) => heading.depth === 2);

  return { title, titleId, summary: nodeText(summaryNode), markdown, sections };
}

// El índice y los títulos usan la misma secuencia de slugs, incluidos duplicados.
export function remarkReadmeHeadings(title: string) {
  return (tree: MarkdownTree) => {
    const slugger = new GithubSlugger();
    slugger.slug(title);
    for (const heading of headings(tree)) {
      heading.data = {
        ...heading.data,
        hProperties: {
          ...heading.data?.hProperties,
          id: slugger.slug(nodeText(heading)),
        },
      };
    }
  };
}

export function resolveReadmeLink(href: string, repositoryUrl: string): string {
  if (!href || href.startsWith("#") || href.startsWith("/") || /^[a-z][a-z\d+.-]*:/i.test(href)) {
    return href;
  }
  return new URL(href, `${repositoryUrl}/blob/master/`).href;
}
