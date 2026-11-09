import "server-only";
import { COLLECTIONS, getDb, isDbConfigured } from "./client";

export interface RankedItem {
  label: string;
  count: number;
}

export interface DailyCount {
  date: string; // AAAA-MM-DD
  count: number;
}

export interface AnalyticsSummary {
  rangeDays: number;
  totalViews: number;
  avgPerDay: number;
  daily: DailyCount[];
  topPages: RankedItem[];
  topReferrers: RankedItem[];
  byDevice: RankedItem[];
  byLang: RankedItem[];
  byCountry: RankedItem[];
}

const DEVICE_LABELS: Record<string, string> = {
  desktop: "Desktop",
  mobile: "Celular",
  tablet: "Tablet",
};

const LANG_LABELS: Record<string, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

function emptySummary(rangeDays: number): AnalyticsSummary {
  return {
    rangeDays,
    totalViews: 0,
    avgPerDay: 0,
    daily: [],
    topPages: [],
    topReferrers: [],
    byDevice: [],
    byLang: [],
    byCountry: [],
  };
}

/** Não cacheado: página de admin, baixo tráfego, sempre quer o dado mais fresco. */
export async function getAnalyticsSummary(rangeDays: number): Promise<AnalyticsSummary> {
  if (!isDbConfigured()) return emptySummary(rangeDays);

  const db = await getDb();
  const collection = db.collection(COLLECTIONS.pageviews);
  // rangeDays dias corridos incluindo hoje — o mesmo intervalo que o
  // preenchimento do gráfico abaixo usa, pra totalViews bater com a soma das barras.
  const since = new Date();
  since.setUTCDate(since.getUTCDate() - (rangeDays - 1));
  since.setUTCHours(0, 0, 0, 0);
  const match = { createdAt: { $gte: since } };

  const rankedBy = async (
    field: string,
    { labels, fallback = "Direto", limit = 8 }: { labels?: Record<string, string>; fallback?: string; limit?: number } = {}
  ) => {
    const rows = await collection
      .aggregate<{ _id: string | null; count: number }>([
        { $match: match },
        { $group: { _id: `$${field}`, count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: limit },
      ])
      .toArray();
    return rows.map((row) => ({
      label: labels?.[row._id ?? ""] ?? row._id ?? fallback,
      count: row.count,
    }));
  };

  const [totalViews, daily, topPages, topReferrers, byDevice, byLang, byCountry] =
    await Promise.all([
      collection.countDocuments(match),
      collection
        .aggregate<{ _id: string; count: number }>([
          { $match: match },
          {
            $group: {
              _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt", timezone: "UTC" } },
              count: { $sum: 1 },
            },
          },
          { $sort: { _id: 1 } },
        ])
        .toArray(),
      rankedBy("path", { fallback: "(desconhecida)" }),
      rankedBy("referrerHost", { fallback: "Direto", limit: 6 }),
      rankedBy("device", { labels: DEVICE_LABELS, fallback: "Desconhecido", limit: 3 }),
      rankedBy("lang", { labels: LANG_LABELS, fallback: "Desconhecido", limit: 3 }),
      rankedBy("country", { fallback: "Desconhecido", limit: 6 }),
    ]);

  // Preenche os dias sem nenhuma visita com zero, pro gráfico não ter buracos.
  const byDate = new Map(daily.map((d) => [d._id, d.count]));
  const filled: DailyCount[] = [];
  for (let i = rangeDays - 1; i >= 0; i--) {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - i);
    const key = d.toISOString().slice(0, 10);
    filled.push({ date: key, count: byDate.get(key) ?? 0 });
  }

  return {
    rangeDays,
    totalViews,
    avgPerDay: rangeDays > 0 ? Math.round((totalViews / rangeDays) * 10) / 10 : 0,
    daily: filled,
    topPages,
    topReferrers,
    byDevice,
    byLang,
    byCountry,
  };
}
