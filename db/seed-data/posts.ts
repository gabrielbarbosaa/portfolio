import { readFileSync } from "node:fs";
import path from "node:path";
import type { Post, PostMeta } from "../schemas";

/**
 * Dados iniciais do blog. O texto de cada post fica em db/seed-data/posts/<slug>.md.
 * Depois que o banco estiver populado, escreva os posts pelo admin.
 */
const seedPostsMeta: PostMeta[] = [
  {
    slug: "de-front-end-a-software-engineer",
    title: "De front-end a software engineer: o que muda quando você vai para o back-end",
    description:
      "Depois de anos no front-end, comecei a construir serviços no back-end. O que mudou na forma de pensar, o que eu já sabia sem saber e o que precisei aprender do zero.",
    date: "2026-11-09",
    tags: ["Carreira", "Back-end", "Front-end"],
    readingMinutes: 5,
    published: false,
  },
];

export function loadSeedPosts(): Post[] {
  return seedPostsMeta.map((meta) => ({
    ...meta,
    body: readFileSync(
      path.join(process.cwd(), "db", "seed-data", "posts", `${meta.slug}.md`),
      "utf8"
    ),
  }));
}
