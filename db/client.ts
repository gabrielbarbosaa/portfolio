import { MongoClient, type Db } from "mongodb";

export const COLLECTIONS = {
  projects: "projects",
  posts: "posts",
} as const;

declare global {
  // Reaproveita a conexão entre hot reloads (dev) e invocações (serverless)
  var __mongoClientPromise: Promise<MongoClient> | undefined;
}

export function isDbConfigured() {
  return Boolean(process.env.MONGODB_URI?.trim());
}

export function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI?.trim();
  if (!uri) {
    throw new Error("MONGODB_URI não definida. Configure em .env.local (veja .env.example).");
  }

  if (!globalThis.__mongoClientPromise) {
    const client = new MongoClient(uri, {
      appName: "portfolio",
      // Campos `undefined` são omitidos em vez de virarem `null`
      ignoreUndefined: true,
    });
    globalThis.__mongoClientPromise = client.connect().catch((error) => {
      // Não deixa uma falha de conexão "presa" no cache
      globalThis.__mongoClientPromise = undefined;
      throw error;
    });
  }

  return globalThis.__mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClient();
  return client.db(process.env.MONGODB_DB?.trim() || "portfolio");
}
