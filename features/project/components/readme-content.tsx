import Markdown, { defaultUrlTransform } from "react-markdown";
import remarkGfm from "remark-gfm";
import { repositoryUrl } from "../content";
import { remarkReadmeHeadings, resolveReadmeLink } from "../readme";
import styles from "./readme-content.module.css";

export function ReadmeContent({ title, markdown }: { title: string; markdown: string }) {
  return (
    <article className={styles.content} aria-label={`Documentación de ${title}`}>
      <Markdown
        skipHtml
        remarkPlugins={[remarkGfm, [remarkReadmeHeadings, title]]}
        urlTransform={(url) => resolveReadmeLink(defaultUrlTransform(url), repositoryUrl)}
        components={{
          h2: ({ id, children }) => <h2 id={id} tabIndex={-1}>{children}</h2>,
          h3: ({ id, children }) => <h3 id={id} tabIndex={-1}>{children}</h3>,
          h4: ({ id, children }) => <h4 id={id} tabIndex={-1}>{children}</h4>,
          table: ({ children }) => (
            <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Tabla de documentación">
              <table>{children}</table>
            </div>
          ),
          input: ({ checked }) => (
            <span className={styles.check} data-checked={checked ? "true" : "false"} aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" focusable="false">
                <rect x="1.5" y="1.5" width="17" height="17" stroke="currentColor" />
                {checked ? <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" /> : null}
              </svg>
            </span>
          ),
        }}
      >
        {markdown}
      </Markdown>
    </article>
  );
}
