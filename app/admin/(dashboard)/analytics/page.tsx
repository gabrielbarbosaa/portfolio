import Link from "next/link";
import { Eye, TrendingUp } from "lucide-react";
import { getAnalyticsSummary } from "@/db/analytics";
import { isDbConfigured } from "@/db/client";
import { DailyBarChart } from "@/components/admin/analytics/DailyBarChart";
import { RankedBars } from "@/components/admin/analytics/RankedBars";

const RANGE_PRESETS = [7, 30, 90] as const;

export default async function AdminAnalyticsPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  const { range } = await searchParams;
  const rangeDays = RANGE_PRESETS.includes(Number(range) as (typeof RANGE_PRESETS)[number])
    ? Number(range)
    : 30;

  const dbReady = isDbConfigured();
  const summary = await getAnalyticsSummary(rangeDays);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-fg">Analytics</h1>
          <p className="mt-1 text-sm text-muted">
            Dados próprios do site: sem cookies, sem IP guardado, sem rastreio entre visitas.
          </p>
        </div>

        {/* Filtro de período — uma linha, acima de tudo que ele escopa */}
        <div className="inline-flex rounded-lg border border-line bg-surface p-0.5">
          {RANGE_PRESETS.map((days) => (
            <Link
              key={days}
              href={`/admin/analytics?range=${days}`}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                rangeDays === days ? "bg-surface-2 text-fg shadow-[var(--shadow-sm)]" : "text-muted hover:text-fg"
              }`}
            >
              {days} dias
            </Link>
          ))}
        </div>
      </div>

      {!dbReady && (
        <p className="rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
          MONGODB_URI não está configurada: nenhum dado foi coletado ainda.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <StatTile icon={Eye} label={`Visualizações em ${rangeDays} dias`} value={summary.totalViews} />
        <StatTile icon={TrendingUp} label="Média por dia" value={summary.avgPerDay} />
      </div>

      <div className="card p-6">
        <h2 className="mb-5 text-sm font-semibold text-fg">Visualizações por dia</h2>
        <DailyBarChart data={summary.daily} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="mb-4 text-sm font-semibold text-fg">Páginas mais vistas</h2>
          <RankedBars items={summary.topPages} />
        </div>
        <div className="card p-6">
          <h2 className="mb-4 text-sm font-semibold text-fg">De onde vêm</h2>
          <RankedBars items={summary.topReferrers} />
        </div>
        <div className="card p-6">
          <h2 className="mb-4 text-sm font-semibold text-fg">Dispositivo</h2>
          <RankedBars items={summary.byDevice} />
        </div>
        <div className="card p-6">
          <h2 className="mb-4 text-sm font-semibold text-fg">Idioma</h2>
          <RankedBars items={summary.byLang} />
        </div>
        <div className="card p-6 md:col-span-2">
          <h2 className="mb-4 text-sm font-semibold text-fg">Países</h2>
          <RankedBars items={summary.byCountry} />
        </div>
      </div>
    </div>
  );
}

function StatTile({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
}) {
  return (
    <div className="card flex items-center gap-4 p-6">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-2xl font-semibold tabular-nums text-fg">{value}</span>
        <span className="block text-sm text-muted">{label}</span>
      </span>
    </div>
  );
}
