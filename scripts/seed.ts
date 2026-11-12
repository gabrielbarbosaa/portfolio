/**
 * Popula o MongoDB com os dados de db/seed-data.
 *
 *   npm run db:seed            insere só o que ainda não existe (seguro, não sobrescreve edições)
 *   npm run db:seed -- --reset sobrescreve projetos e posts existentes com os dados locais
 *
 * Lê MONGODB_URI / MONGODB_DB de .env.local.
 */
import { COLLECTIONS, getClient, getDb } from "../db/client";
import { postSchema, projectSchema, studySchema } from "../db/schemas";
import { seedProjects } from "../db/seed-data/projects";
import { seedStudies } from "../db/seed-data/studies";
import { loadSeedPosts } from "../db/seed-data/posts";

for (const file of [".env.local", ".env"]) {
  try {
    process.loadEnvFile(file);
  } catch {
    // arquivo opcional
  }
}

const reset = process.argv.includes("--reset");

async function upsertAll<T extends { slug: string }>(
  collectionName: string,
  items: T[],
  validate: (item: T) => T
) {
  const db = await getDb();
  const collection = db.collection(collectionName);
  const now = new Date();
  let inserted = 0;
  let updated = 0;
  let skipped = 0;

  for (const item of items) {
    const doc = validate(item);
    const result = await collection.updateOne(
      { slug: doc.slug },
      reset
        ? { $set: { ...doc, updatedAt: now }, $setOnInsert: { createdAt: now } }
        : { $setOnInsert: { ...doc, createdAt: now, updatedAt: now } },
      { upsert: true }
    );
    if (result.upsertedCount) inserted++;
    else if (result.modifiedCount) updated++;
    else skipped++;
  }

  console.log(
    `  ${collectionName}: ${inserted} inseridos, ${updated} atualizados, ${skipped} já existiam`
  );
}

async function main() {
  const db = await getDb();
  console.log(`Banco: ${db.databaseName}${reset ? " (modo --reset)" : ""}`);

  await Promise.all([
    db.collection(COLLECTIONS.projects).createIndex({ slug: 1 }, { unique: true }),
    db.collection(COLLECTIONS.projects).createIndex({ order: 1 }),
    db.collection(COLLECTIONS.studies).createIndex({ slug: 1 }, { unique: true }),
    db.collection(COLLECTIONS.studies).createIndex({ order: 1 }),
    db.collection(COLLECTIONS.posts).createIndex({ slug: 1 }, { unique: true }),
    db.collection(COLLECTIONS.posts).createIndex({ published: 1, date: -1 }),
    db.collection(COLLECTIONS.pageviews).createIndex({ createdAt: -1 }),
    // Expira visitas antigas sozinho (~13 meses), pra não estourar o free tier do Atlas.
    db.collection(COLLECTIONS.pageviews).createIndex(
      { createdAt: 1 },
      { expireAfterSeconds: 60 * 60 * 24 * 400, name: "createdAt_ttl" }
    ),
  ]);

  await upsertAll(COLLECTIONS.projects, seedProjects, (p) => projectSchema.parse(p));
  await upsertAll(COLLECTIONS.studies, seedStudies, (s) => studySchema.parse(s));
  await upsertAll(COLLECTIONS.posts, loadSeedPosts(), (p) => postSchema.parse(p));

  console.log("Pronto. Se o `next dev` estiver rodando, reinicie para limpar o cache.");
}

main()
  .catch((error) => {
    console.error("Falha no seed:", error instanceof Error ? error.message : error);
    process.exitCode = 1;
  })
  .finally(async () => {
    if (globalThis.__mongoClientPromise) await (await getClient()).close();
  });
