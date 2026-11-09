import { NextResponse } from "next/server";
import { COLLECTIONS, getDb, isDbConfigured } from "@/db/client";
import { pageviewInputSchema } from "@/db/schemas";

export const runtime = "nodejs";

// Nunca deixa o rastreamento quebrar a navegação do visitante.
const noContent = () => new NextResponse(null, { status: 204 });

function hostnameOf(url: string | undefined, ownHost: string): string | undefined {
  if (!url) return undefined;
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return host === ownHost.replace(/^www\./, "") ? undefined : host;
  } catch {
    return undefined;
  }
}

export async function POST(request: Request) {
  if (!isDbConfigured()) return noContent();

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return noContent();
  }

  const parsed = pageviewInputSchema.safeParse(body);
  if (!parsed.success) return noContent();

  try {
    const db = await getDb();
    const ownHost = new URL(request.url).hostname;
    const { referrer, ...rest } = parsed.data;
    await db.collection(COLLECTIONS.pageviews).insertOne({
      ...rest,
      // Só o domínio de origem é guardado — a URL completa pode trazer termos de busca.
      referrerHost: hostnameOf(referrer, ownHost),
      // Vercel infere o país a partir do IP sem que precisemos guardá-lo.
      country: request.headers.get("x-vercel-ip-country")?.slice(0, 2) ?? undefined,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("[track] falha ao registrar visita:", error);
  }

  return noContent();
}
