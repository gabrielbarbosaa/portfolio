"use client";

import { useEffect, useState } from "react";
import { LANGS, type Lang } from "@/lib/i18n/dictionaries";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] w-[108px]" />
    );
  }

  return (
    <div
      className="relative inline-flex items-center h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] p-0.5"
      role="radiogroup"
      aria-label="Language"
    >
      {LANGS.map(({ code, label }) => {
        const active = code === lang;
        return (
          <button
            key={code}
            role="radio"
            aria-checked={active}
            onClick={() => setLang(code as Lang)}
            className={`relative h-full px-2.5 font-mono text-[10px] tracking-[0.22em] uppercase transition-colors duration-200 cursor-pointer ${
              active
                ? "text-[var(--bg)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {active && (
              <span className="absolute inset-0 rounded-[5px] bg-[var(--accent)]" />
            )}
            <span className="relative">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
