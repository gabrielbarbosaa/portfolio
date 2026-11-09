import { COLLECTIONS, getClient, getDb } from "../db/client";
import { seedProjects } from "../db/seed-data/projects";

for (const file of [".env.local", ".env"]) {
  try { process.loadEnvFile(file); } catch {}
}

const SLUG = "atf-sociedade-de-credito-direto";

async function main() {
  const project = seedProjects.find((p) => p.slug === SLUG);
  if (!project) throw new Error(`slug ${SLUG} não encontrado em seed-data`);

  const db = await getDb();
  const { slug: _slug, order: _order, featuredOrder: _featuredOrder, ...fields } = project;

  const result = await db.collection(COLLECTIONS.projects).updateOne(
    { slug: SLUG },
    { $set: { ...fields, updatedAt: new Date() } }
  );

  console.log(`matched=${result.matchedCount} modified=${result.modifiedCount} (0 matched = documento não existia ainda, nada foi tocado)`);
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1; })
  .finally(async () => { if (globalThis.__mongoClientPromise) await (await getClient()).close(); });
