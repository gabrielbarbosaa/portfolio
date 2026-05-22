"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const rights = t.footer.rights.replace("{year}", String(year));

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span className="font-display font-bold text-base text-[var(--text)]">
                gabriel.b<span className="text-[var(--accent)]">_</span>
              </span>
            </div>
            <p className="font-mono text-[11px] tracking-[0.04em] text-[var(--text-muted)] leading-relaxed max-w-xs">
              {t.footer.operatorTagline}
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] mb-3">
              ▸ {t.footer.coordinates}
            </p>
            <p className="font-mono text-xs text-[var(--text-soft)] mb-1">
              -30.0277° S · -51.2287° W
            </p>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              UTC-03 · BR/RS
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] mb-3">
              ▸ {t.footer.channels}
            </p>
            <div className="flex md:justify-end gap-2">
              <SocialLink
                href="https://github.com/gabrielbarbosaa/"
                icon={<Github className="w-3.5 h-3.5" />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/gabrielbarbosa-azevedo/"
                icon={<Linkedin className="w-3.5 h-3.5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="mailto:gbarbosa1602@gmail.com"
                icon={<Mail className="w-3.5 h-3.5" />}
                label="Email"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
            {rights}
          </p>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
            {t.footer.crafted}{" "}
            <span className="text-[var(--accent)]">React</span> ·{" "}
            <span className="text-[var(--accent)]">Next</span> ·{" "}
            <span className="text-[var(--accent)]">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--surface)] text-[var(--text-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
    >
      {icon}
    </a>
  );
}
