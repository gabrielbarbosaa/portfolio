import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renderiza o Markdown de um post no servidor.
 * HTML cru é ignorado (inclusive comentários <!-- -->), então o conteúdo
 * vindo do banco não executa código nem injeta HTML.
 */
export function PostBody({ body }: { body: string }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      skipHtml
      components={{
        a: ({ href = "", title, children }) =>
          href.startsWith("http") ? (
            <a href={href} title={title} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ) : (
            <a href={href} title={title}>
              {children}
            </a>
          ),
      }}
    >
      {body}
    </Markdown>
  );
}
