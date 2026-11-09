"use client";

import { useId, useState } from "react";
import type { DailyCount } from "@/db/analytics";

/** Arredonda pra um teto "redondo" de eixo (2, 5, 10, 20, 50, 100...). */
function niceMax(n: number): number {
  if (n <= 1) return 1;
  const magnitude = Math.pow(10, Math.floor(Math.log10(n)));
  const residual = n / magnitude;
  const step = residual <= 1 ? 1 : residual <= 2 ? 2 : residual <= 5 ? 5 : 10;
  return step * magnitude;
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });

export function DailyBarChart({ data }: { data: DailyCount[] }) {
  const [active, setActive] = useState<number | null>(null);
  const titleId = useId();
  const max = niceMax(Math.max(1, ...data.map((d) => d.count)));
  const gridValues = [0, Math.round(max / 2), max];
  const activeDay = active !== null ? data[active] : null;

  return (
    <div>
      <div className="relative h-48">
        {/* Gridlines — hairline, recessivas, nunca tracejadas */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...gridValues].reverse().map((value) => (
            <div key={value} className="flex items-center gap-2">
              <span className="w-8 shrink-0 text-right font-mono text-[10px] text-dim">
                {value}
              </span>
              <span className="h-px flex-1 bg-line" />
            </div>
          ))}
        </div>

        {/* Barras */}
        <div className="absolute inset-y-0 left-10 right-0 flex items-end gap-px">
          {data.map((day, i) => {
            const heightPct = Math.max(1, (day.count / max) * 100);
            const isActive = active === i;
            return (
              <button
                key={day.date}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                aria-describedby={isActive ? titleId : undefined}
                className="group relative h-full flex-1 cursor-default"
              >
                {/* área de toque maior que a barra visível */}
                <span
                  className={`absolute inset-x-0 bottom-0 rounded-t-[3px] transition-colors ${
                    isActive ? "bg-primary" : "bg-primary/70 group-hover:bg-primary"
                  }`}
                  style={{ height: `${heightPct}%` }}
                />
              </button>
            );
          })}
        </div>

        {activeDay && (
          <div
            id={titleId}
            role="tooltip"
            className="pointer-events-none absolute -top-2 left-1/2 z-10 -translate-x-1/2 -translate-y-full rounded-lg border border-line bg-surface px-3 py-1.5 text-center shadow-[var(--shadow-md)]"
          >
            <p className="text-sm font-semibold tabular-nums text-fg">{activeDay.count}</p>
            <p className="text-xs text-muted">{formatDate(activeDay.date)}</p>
          </div>
        )}
      </div>

      <details className="mt-4">
        <summary className="cursor-pointer text-xs text-muted hover:text-fg">
          Ver como tabela
        </summary>
        <div className="mt-2 max-h-48 overflow-y-auto rounded-lg border border-line">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-surface-2 text-xs text-muted">
              <tr>
                <th className="px-3 py-1.5 text-left font-medium">Data</th>
                <th className="px-3 py-1.5 text-right font-medium">Visualizações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {data.map((day) => (
                <tr key={day.date}>
                  <td className="px-3 py-1.5 text-soft">{formatDate(day.date)}</td>
                  <td className="px-3 py-1.5 text-right font-mono tabular-nums text-fg">
                    {day.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
