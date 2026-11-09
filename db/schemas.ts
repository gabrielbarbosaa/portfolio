import { z } from "zod";

/**
 * Fonte única de verdade para o formato dos dados.
 * Usado para validar o que entra (seed, admin) e o que sai do MongoDB.
 */

const slug = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use apenas letras minúsculas, números e hífens");

const text = z.string().trim().min(1);

export const projectContentSchema = z.object({
  title: text,
  description: text,
  role: text,
  longDescription: text,
  features: z.array(text),
  challenges: z.array(text),
});

export const projectSchema = z.object({
  slug,
  year: text,
  client: text.optional(),
  technologies: z.array(text),
  demo: z.url().optional(),
  /** Posição no arquivo /projects (menor primeiro) */
  order: z.number().int(),
  /** Posição nos destaques da home; null = não aparece na home */
  featuredOrder: z.number().int().nullable(),
  content: z.object({
    pt: projectContentSchema,
    en: projectContentSchema,
    es: projectContentSchema,
  }),
});

export const postSchema = z.object({
  slug,
  title: text,
  description: text,
  /** AAAA-MM-DD */
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  tags: z.array(text),
  readingMinutes: z.number().int().positive(),
  published: z.boolean(),
  /** Conteúdo em Markdown (não MDX: não executa código) */
  body: z.string(),
});

/**
 * Visita registrada pelo tracker do site público (ver app/api/track).
 * Sem IP, sem cookie, sem identificador persistente entre visitas — só o
 * suficiente para números agregados (páginas, origem, dispositivo, idioma, país).
 */
export const pageviewInputSchema = z.object({
  path: z.string().max(512),
  referrer: z.string().max(1024).optional(),
  lang: z.enum(["pt", "en", "es"]).optional(),
  device: z.enum(["mobile", "tablet", "desktop"]),
});

export const pageviewSchema = pageviewInputSchema.omit({ referrer: true }).extend({
  referrerHost: z.string().optional(),
  country: z.string().length(2).optional(),
  createdAt: z.date(),
});

export type PageviewInput = z.infer<typeof pageviewInputSchema>;
export type Pageview = z.infer<typeof pageviewSchema>;

/** O que o formulário do admin envia: sem os campos que o servidor calcula. */
export const projectInputSchema = projectSchema.omit({ order: true, featuredOrder: true });
export const postInputSchema = postSchema.omit({ readingMinutes: true });

export type ProjectContent = z.infer<typeof projectContentSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ProjectInput = z.infer<typeof projectInputSchema>;
export type Post = z.infer<typeof postSchema>;
export type PostMeta = Omit<Post, "body">;
export type PostInput = z.infer<typeof postInputSchema>;
