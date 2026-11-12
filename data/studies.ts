import type { Lang } from "@/lib/i18n/dictionaries";

/**
 * Projetos de estudo / pessoais (repositórios do GitHub).
 *
 * Para publicar um novo, adicione um item no TOPO da lista (os mais recentes
 * aparecem primeiro) e faça o deploy. A página /studies/<slug> é gerada sozinha.
 */
export interface StudyContent {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  challenges: string[];
}

export interface Study {
  slug: string;
  /** Nome do repositório em github.com/gabrielbarbosaa/<repo> */
  repo: string;
  year: string;
  status: "building" | "done";
  technologies: string[];
  /** Link de demo, se houver */
  demo?: string;
  content: Record<Lang, StudyContent>;
}

export const GITHUB_USER = "gabrielbarbosaa";

export const studies: Study[] = [
  {
    slug: "moonlight",
    repo: "moonlight",
    year: "2026",
    status: "done",
    demo: "https://moonlight.gabrielbarbosadev.com.br/",
    technologies: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Zod",
      "TensorFlow.js",
      "nsfwjs",
      "sharp",
      "Docker",
      "Caddy",
      "TanStack Query",
      "Turborepo",
      "pnpm",
    ],
    content: {
      pt: {
        title: "Moonlight",
        description:
          "Plataforma multi-tenant para montar páginas pessoais por blocos, com moderação de imagens por IA (NSFW), upload otimizado e deploy próprio.",
        longDescription:
          "Moonlight é um projeto de estudo e portfólio: uma plataforma multi-tenant em que cada cliente monta sua página a partir de blocos (header, hero, links, texto, rodapé) e a publica no próprio subdomínio. É um monorepo pnpm + Turborepo com Next.js 15 no front e NestJS + Prisma sobre PostgreSQL no back. As páginas são guardadas como JSONB versionado e validadas pelo mesmo schema Zod no front e no back. Um dos pontos mais interessantes é o upload de imagens: cada arquivo passa por um pipeline que valida o formato real, reencoda com sharp e passa por uma moderação NSFW rodando localmente, sem depender de API externa. O projeto roda 100% local e sem custo, e está publicado com a API numa VPS (Docker + Caddy) e o front na Vercel.",
        features: [
          "Páginas montadas por blocos, armazenadas como JSONB com schemaVersion e validadas pelo mesmo schema Zod no front e no back",
          "Multi-tenant por subdomínio (ex.: maria.localhost), com fallback por caminho em /s/[tenant]",
          "Moderação de imagens NSFW com nsfwjs (MobileNetV2) + TensorFlow.js, rodando numa worker thread: a imagem é pré-processada com sharp e rejeitada se a soma das notas Porn + Hentai passar de um limite configurável (padrão 0,6)",
          "Upload com sharp: detecta o formato real (JPEG, PNG, WebP, GIF), corrige a orientação EXIF, limita o tamanho, descarta metadados e converte tudo para WebP",
          "Proteções no upload: rate limit de 40 imagens por hora por usuário, limite de pixels contra decompression bomb e cota por plano",
          "Storage atrás de uma interface (hoje disco local), pronto para trocar por um bucket sem mexer no domínio; e-mail e cobrança seguem o mesmo padrão de adapters",
          "Cookie de sessão host-only no domínio principal, para que as páginas dos clientes nunca recebam a sessão do admin",
          "Redis para cache, filas e contadores, e Mailpit para testar e-mails em desenvolvimento",
        ],
        challenges: [
          "Rodar um modelo de IA dentro do Node sem travar a API: o TensorFlow.js fica numa worker thread, com timeout por imagem, respawn automático e erros 503 amigáveis",
          "Equilibrar falsos positivos e negativos na moderação, usando o limiar da soma de categorias e permitindo ajustá-lo ou desligar a checagem por variável de ambiente",
          "Isolar os dados de cada cliente numa plataforma multi-tenant e separar a sessão do admin das páginas públicas",
          "Manter front e back sincronizados com contratos compartilhados num monorepo, com Husky, commitlint e um comando de verificação único",
          "Colocar tudo no ar: API, PostgreSQL e Redis em containers com Caddy na VPS e o front na Vercel",
        ],
      },
      en: {
        title: "Moonlight",
        description:
          "Multi-tenant platform to build personal pages from blocks, with AI image moderation (NSFW), optimized uploads and a self-hosted deploy.",
        longDescription:
          "Moonlight is a study and portfolio project: a multi-tenant platform where each customer builds a page from blocks (header, hero, links, text, footer) and publishes it on their own subdomain. It is a pnpm + Turborepo monorepo with Next.js 15 on the front end and NestJS + Prisma on PostgreSQL on the back end. Pages are stored as versioned JSONB and validated by the same Zod schema on both sides. One of the most interesting parts is image upload: every file goes through a pipeline that checks the real format, re-encodes it with sharp and runs it through an NSFW moderation model that runs locally, with no external API. The project runs fully locally at no cost, and is deployed with the API on a VPS (Docker + Caddy) and the front end on Vercel.",
        features: [
          "Block-based pages stored as JSONB with a schemaVersion and validated by the same Zod schema on front and back end",
          "Multi-tenant by subdomain (e.g. maria.localhost), with a path fallback at /s/[tenant]",
          "NSFW image moderation with nsfwjs (MobileNetV2) + TensorFlow.js in a worker thread: the image is preprocessed with sharp and rejected when the Porn + Hentai scores sum past a configurable threshold (default 0.6)",
          "Uploads with sharp: detects the real format (JPEG, PNG, WebP, GIF), fixes EXIF orientation, caps the size, drops metadata and converts everything to WebP",
          "Upload safeguards: 40 images per hour per user rate limit, a pixel cap against decompression bombs and plan-based quotas",
          "Storage behind an interface (local disk today), ready to swap for a bucket without touching the domain; email and billing follow the same adapter pattern",
          "Host-only session cookie on the main domain, so customer pages never receive the admin session",
          "Redis for cache, queues and counters, and Mailpit to test emails in development",
        ],
        challenges: [
          "Running an AI model inside Node without blocking the API: TensorFlow.js lives in a worker thread, with a per-image timeout, automatic respawn and friendly 503 errors",
          "Balancing false positives and negatives in moderation, using a summed-category threshold that can be tuned, or the check disabled, through an environment variable",
          "Isolating each customer's data in a multi-tenant platform and keeping the admin session apart from public pages",
          "Keeping front and back in sync with shared contracts in a monorepo, with Husky, commitlint and a single verify command",
          "Getting it all online: API, PostgreSQL and Redis in containers behind Caddy on a VPS, and the front end on Vercel",
        ],
      },
      es: {
        title: "Moonlight",
        description:
          "Plataforma multi-tenant para crear páginas personales por bloques, con moderación de imágenes por IA (NSFW), subidas optimizadas y deploy propio.",
        longDescription:
          "Moonlight es un proyecto de estudio y portafolio: una plataforma multi-tenant donde cada cliente arma su página a partir de bloques (header, hero, enlaces, texto, pie) y la publica en su propio subdominio. Es un monorepo pnpm + Turborepo con Next.js 15 en el front y NestJS + Prisma sobre PostgreSQL en el back. Las páginas se guardan como JSONB versionado y se validan con el mismo schema Zod en ambos lados. Uno de los puntos más interesantes es la subida de imágenes: cada archivo pasa por un pipeline que valida el formato real, lo recodifica con sharp y lo somete a una moderación NSFW que corre localmente, sin depender de una API externa. El proyecto corre 100% local y sin costo, y está publicado con la API en una VPS (Docker + Caddy) y el front en Vercel.",
        features: [
          "Páginas por bloques guardadas como JSONB con schemaVersion y validadas con el mismo schema Zod en front y back",
          "Multi-tenant por subdominio (ej.: maria.localhost), con fallback por ruta en /s/[tenant]",
          "Moderación de imágenes NSFW con nsfwjs (MobileNetV2) + TensorFlow.js en una worker thread: la imagen se preprocesa con sharp y se rechaza si la suma de las notas Porn + Hentai supera un umbral configurable (por defecto 0,6)",
          "Subidas con sharp: detecta el formato real (JPEG, PNG, WebP, GIF), corrige la orientación EXIF, limita el tamaño, descarta metadatos y convierte todo a WebP",
          "Protecciones en la subida: rate limit de 40 imágenes por hora por usuario, límite de píxeles contra decompression bombs y cuotas por plan",
          "Storage detrás de una interfaz (hoy disco local), listo para cambiar a un bucket sin tocar el dominio; email y cobro siguen el mismo patrón de adapters",
          "Cookie de sesión host-only en el dominio principal, para que las páginas de los clientes nunca reciban la sesión del admin",
          "Redis para caché, colas y contadores, y Mailpit para probar emails en desarrollo",
        ],
        challenges: [
          "Correr un modelo de IA dentro de Node sin bloquear la API: TensorFlow.js vive en una worker thread, con timeout por imagen, respawn automático y errores 503 amigables",
          "Equilibrar falsos positivos y negativos en la moderación, usando un umbral sobre la suma de categorías que se puede ajustar, o desactivar la verificación, por variable de entorno",
          "Aislar los datos de cada cliente en una plataforma multi-tenant y separar la sesión del admin de las páginas públicas",
          "Mantener front y back sincronizados con contratos compartidos en un monorepo, con Husky, commitlint y un comando único de verificación",
          "Poner todo en producción: API, PostgreSQL y Redis en contenedores con Caddy en la VPS y el front en Vercel",
        ],
      },
    },
  },
];
export const getStudy = (slug: string) => studies.find((s) => s.slug === slug);
export const repoUrl = (study: Study) => `https://github.com/${GITHUB_USER}/${study.repo}`;
