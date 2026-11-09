import "server-only";
import { unstable_cache } from "next/cache";
import { COLLECTIONS, getDb, isDbConfigured } from "./client";
import { postSchema, projectSchema, type Post, type PostMeta, type Project } from "./schemas";
import { seedProjects } from "./seed-data/projects";
import { loadSeedPosts } from "./seed-data/posts";

/**
 * Leituras do site público.
 *
 * Os resultados ficam em cache (as páginas continuam estáticas). Quando algo
 * for editado no admin, basta chamar revalidateTag(CACHE_TAGS.projects | posts).
 */
export const CACHE_TAGS = { projects: "projects", posts: "posts" } as const;

/** Em `next dev` os rascunhos aparecem; em produção, nunca. */
const SHOW_DRAFTS = process.env.NODE_ENV !== "production";

let warnedFallback = false;
function warnFallback() {
  if (warnedFallback) return;
  warnedFallback = true;
  console.warn("[db] MONGODB_URI não definida: usando os dados locais de db/seed-data.");
}

const fetchProjects = unstable_cache(
  async (): Promise<Project[]> => {
    if (!isDbConfigured()) {
      warnFallback();
      return seedProjects;
    }
    const db = await getDb();
    const docs = await db.collection(COLLECTIONS.projects).find().sort({ order: 1 }).toArray();
    // .parse remove _id/createdAt/updatedAt e garante o formato esperado
    return docs.map((doc) => projectSchema.parse(doc));
  },
  ["projects"],
  { tags: [CACHE_TAGS.projects] }
);

const fetchPosts = unstable_cache(
  async (): Promise<Post[]> => {
    if (!isDbConfigured()) {
      warnFallback();
      return loadSeedPosts().sort((a, b) => b.date.localeCompare(a.date));
    }
    const db = await getDb();
    const docs = await db.collection(COLLECTIONS.posts).find().sort({ date: -1 }).toArray();
    return docs.map((doc) => postSchema.parse(doc));
  },
  ["posts"],
  { tags: [CACHE_TAGS.posts] }
);

/* ---------- Projetos ---------- */

export function getProjects() {
  return fetchProjects();
}

export async function getFeaturedProjects() {
  const projects = await fetchProjects();
  return projects
    .filter((p) => p.featuredOrder !== null)
    .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
}

export async function getProjectBySlug(slug: string) {
  const projects = await fetchProjects();
  return projects.find((p) => p.slug === slug);
}

/* ---------- Blog ---------- */

const toMeta = ({ body: _body, ...meta }: Post): PostMeta => meta;

export async function getPosts(): Promise<PostMeta[]> {
  const posts = await fetchPosts();
  return posts.filter((p) => p.published || SHOW_DRAFTS).map(toMeta);
}

export async function getPublishedPosts(): Promise<PostMeta[]> {
  const posts = await fetchPosts();
  return posts.filter((p) => p.published).map(toMeta);
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await fetchPosts();
  const post = posts.find((p) => p.slug === slug);
  return post && (post.published || SHOW_DRAFTS) ? post : undefined;
}

/* ---------- Admin (vê tudo, inclusive rascunhos, em qualquer ambiente) ---------- */

export async function getAllPostsAdmin(): Promise<Post[]> {
  return fetchPosts();
}

export async function getPostAdmin(slug: string): Promise<Post | undefined> {
  const posts = await fetchPosts();
  return posts.find((p) => p.slug === slug);
}
