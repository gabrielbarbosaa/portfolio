"use client";

import { Radio, Activity, Globe2, Clock4, Cpu } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const ICONS = [Radio, Activity, Globe2, Clock4, Cpu, Radio, Activity, Globe2];

export function Ticker() {
  const { t } = useI18n();
  const items = t.ticker.map((text, i) => ({
    icon: ICONS[i % ICONS.length],
    text,
  }));
  const loop = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-[var(--border)] bg-[var(--bg-elev)]/60 backdrop-blur-sm">
      <div className="ticker-track py-2">
        {loop.map(({ icon: Icon, text }, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-6 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)] whitespace-nowrap"
          >
            <Icon className="w-3 h-3 text-[var(--accent)]" />
            {text}
            <span className="text-[var(--text-dim)] mx-2">▰</span>
          </span>
        ))}
      </div>
    </div>
  );
}
