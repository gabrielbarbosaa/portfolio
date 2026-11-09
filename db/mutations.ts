"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { auth, signOut } from "@/auth";
import { COLLECTIONS, getDb, isDbConfigured } from "./client";
import { CACHE_TAGS } from "./queries";
import {
  postInputSchema,
  projectInputSchema,
  type Post,
  type PostInput,
  type Project,
  type ProjectInput,
} from "./schemas";

export type ActionResult = { ok: true } | { ok: false; error: string };

async function checkAdmin(): Promise<ActionResult | null> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Sessão expirada. Faça login novamente." };
  if (!isDbConfigured()) {
    return { ok: false, error: "MONGODB_URI não configurada: o admin precisa do banco para salvar." };
  }
  return null;
}

function isDuplicateKeyError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: number }).code === 11000
  );
}

function revalidateProjectPaths(slug?: string) {
  revalidateTag(CACHE_TAGS.projects);
  revalidatePath("/");
  revalidatePath("/projects");
  if (slug) revalidatePath(`/projects/${slug}`);
}

function revalidatePostPaths(slug?: string) {
  revalidateTag(CACHE_TAGS.posts);
  revalidatePath("/blog");
  if (slug) revalidatePath(`/blog/${slug}`);
}

/* ================= Projetos ================= */

export async function createProject(input: ProjectInput): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  const parsed = projectInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Dados inválidos." };
  }

  const db = await getDb();
  const collection = db.collection<Project>(COLLECTIONS.projects);
  const last = await collection.find().sort({ order: -1 }).limit(1).toArray();
  const order = (last[0]?.order ?? -1) + 1;
  const now = new Date();

  try {
    await collection.insertOne({
      ...parsed.data,
      order,
      featuredOrder: null,
      createdAt: now,
      updatedAt: now,
    } as Project & { createdAt: Date; updatedAt: Date });
  } catch (error) {
    if (isDuplicateKeyError(error)) {
      return { ok: false, error: `Já existe um projeto com o slug "${parsed.data.slug}".` };
    }
    throw error;
  }

  revalidateProjectPaths(parsed.data.slug);
  return { ok: true };
}

export async function updateProject(slug: string, input: ProjectInput): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  // O slug não muda na edição, independente do que vier do formulário.
  const parsed = projectInputSchema.safeParse({ ...input, slug });
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Dados inválidos." };
  }

  const db = await getDb();
  const { slug: _slug, ...fields } = parsed.data;
  const result = await db
    .collection(COLLECTIONS.projects)
    .updateOne({ slug }, { $set: { ...fields, updatedAt: new Date() } });

  if (result.matchedCount === 0) return { ok: false, error: "Projeto não encontrado." };

  revalidateProjectPaths(slug);
  return { ok: true };
}

export async function deleteProject(slug: string): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  const db = await getDb();
  await db.collection(COLLECTIONS.projects).deleteOne({ slug });
  revalidateProjectPaths(slug);
  return { ok: true };
}

/** Troca a posição do projeto com o vizinho (lista de /projects). */
export async function moveProject(slug: string, direction: "up" | "down"): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  const db = await getDb();
  const collection = db.collection<Project>(COLLECTIONS.projects);
  const all = await collection.find().sort({ order: 1 }).toArray();
  const index = all.findIndex((p) => p.slug === slug);
  const neighborIndex = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || neighborIndex < 0 || neighborIndex >= all.length) return { ok: true };

  const current = all[index];
  const neighbor = all[neighborIndex];
  await Promise.all([
    collection.updateOne({ slug: current.slug }, { $set: { order: neighbor.order } }),
    collection.updateOne({ slug: neighbor.slug }, { $set: { order: current.order } }),
  ]);

  revalidateProjectPaths();
  return { ok: true };
}

/** Liga/desliga o destaque na home. Ao ligar, entra no fim da lista de destaques. */
export async function setProjectFeatured(slug: string, featured: boolean): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  const db = await getDb();
  const collection = db.collection<Project>(COLLECTIONS.projects);

  let featuredOrder: number | null = null;
  if (featured) {
    const last = await collection
      .find({ featuredOrder: { $ne: null } })
      .sort({ featuredOrder: -1 })
      .limit(1)
      .toArray();
    featuredOrder = (last[0]?.featuredOrder ?? -1) + 1;
  }

  await collection.updateOne({ slug }, { $set: { featuredOrder, updatedAt: new Date() } });
  revalidateProjectPaths(slug);
  return { ok: true };
}

/** Troca a posição do projeto com o vizinho, só entre os destaques da home. */
export async function moveFeaturedProject(
  slug: string,
  direction: "up" | "down"
): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  const db = await getDb();
  const collection = db.collection<Project>(COLLECTIONS.projects);
  const featured = await collection
    .find({ featuredOrder: { $ne: null } })
    .sort({ featuredOrder: 1 })
    .toArray();
  const index = featured.findIndex((p) => p.slug === slug);
  const neighborIndex = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || neighborIndex < 0 || neighborIndex >= featured.length) return { ok: true };

  const current = featured[index];
  const neighbor = featured[neighborIndex];
  await Promise.all([
    collection.updateOne({ slug: current.slug }, { $set: { featuredOrder: neighbor.featuredOrder } }),
    collection.updateOne({ slug: neighbor.slug }, { $set: { featuredOrder: current.featuredOrder } }),
  ]);

  revalidateProjectPaths();
  return { ok: true };
}

/* ================= Blog ================= */

function estimateReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function createPost(input: PostInput): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  const parsed = postInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Dados inválidos." };
  }

  const db = await getDb();
  const now = new Date();
  try {
    await db.collection(COLLECTIONS.posts).insertOne({
      ...parsed.data,
      readingMinutes: estimateReadingMinutes(parsed.data.body),
      createdAt: now,
      updatedAt: now,
    } as Post & { createdAt: Date; updatedAt: Date });
  } catch (error) {
    if (isDuplicateKeyError(error)) {
      return { ok: false, error: `Já existe um post com o slug "${parsed.data.slug}".` };
    }
    throw error;
  }

  revalidatePostPaths(parsed.data.slug);
  return { ok: true };
}

export async function updatePost(slug: string, input: PostInput): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  const parsed = postInputSchema.safeParse({ ...input, slug });
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Dados inválidos." };
  }

  const db = await getDb();
  const { slug: _slug, ...fields } = parsed.data;
  const result = await db.collection(COLLECTIONS.posts).updateOne(
    { slug },
    {
      $set: {
        ...fields,
        readingMinutes: estimateReadingMinutes(fields.body),
        updatedAt: new Date(),
      },
    }
  );

  if (result.matchedCount === 0) return { ok: false, error: "Post não encontrado." };

  revalidatePostPaths(slug);
  return { ok: true };
}

/** Liga/desliga a publicação sem reenviar o corpo do post inteiro. */
export async function setPostPublished(slug: string, published: boolean): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  const db = await getDb();
  const result = await db
    .collection(COLLECTIONS.posts)
    .updateOne({ slug }, { $set: { published, updatedAt: new Date() } });

  if (result.matchedCount === 0) return { ok: false, error: "Post não encontrado." };

  revalidatePostPaths(slug);
  return { ok: true };
}

export async function deletePost(slug: string): Promise<ActionResult> {
  const denied = await checkAdmin();
  if (denied) return denied;

  const db = await getDb();
  await db.collection(COLLECTIONS.posts).deleteOne({ slug });
  revalidatePostPaths(slug);
  return { ok: true };
}

/* ================= Sessão ================= */

export async function signOutAction() {
  await signOut({ redirectTo: "/admin/login" });
}
