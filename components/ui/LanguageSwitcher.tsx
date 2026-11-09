"use client";

import { motion } from "framer-motion";
import { LANGS } from "@/lib/i18n/dictionaries";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className="inline-flex h-9 items-center rounded-lg border border-line bg-surface p-0.5"
      role="radiogroup"
      aria-label={t.nav.language}
    >
      {LANGS.map(({ code, label }) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setLang(code)}
            className={`relative h-full rounded-md px-2.5 text-xs font-medium transition-colors cursor-pointer ${
              active ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                className="absolute inset-0 rounded-md bg-surface-2 shadow-[var(--shadow-sm)]"
              />
            )}
            <span className="relative">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
