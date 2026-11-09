import type { RankedItem } from "@/db/analytics";

/**
 * Lista ranqueada, uma cor só (magnitude, não identidade — ver skill dataviz).
 * O valor fica sempre ao lado da barra, nunca só dentro dela.
 */
export function RankedBars({ items }: { items: RankedItem[] }) {
  if (items.length === 0) {
    return <p className="text-sm text-muted">Sem dados no período.</p>;
  }

  const max = Math.max(...items.map((i) => i.count));

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.label}>
          <div className="mb-1 flex items-center justify-between gap-3 text-sm">
            <span className="truncate text-soft">{item.label}</span>
            <span className="shrink-0 font-mono tabular-nums text-muted">{item.count}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${Math.max(4, (item.count / max) * 100)}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
