"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { SectionLabel } from "./ui/SectionLabel";
import { useI18n } from "@/lib/i18n/I18nProvider";

const skillPillsKey = [
  {
    key: "frontend" as const,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  { key: "mobile" as const, items: ["React Native", "Expo"] },
  {
    key: "backend" as const,
    items: ["Node.js", "Nest.js", "PostgreSQL", "MongoDB"],
  },
  { key: "tests" as const, items: ["Jest", "Cypress", "Testing Library"] },
];

function renderParagraph(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return (
        <span key={i} className="text-[var(--accent)] font-medium">
          {content}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function About() {
  const { t } = useI18n();

  const stats = [
    { end: 5, suffix: "y+", label: t.about.stats.service },
    { end: 20, suffix: "+", label: t.about.stats.missions },
    { end: 6, suffix: "", label: t.about.stats.partners },
    { end: 100, suffix: "%", label: t.about.stats.remote },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">
        <ScrollReveal>
          <SectionLabel
            index="02"
            total="06"
            label={t.about.section.label}
            title={t.about.section.title}
            subtitle={t.about.section.subtitle}
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-10 mb-24">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.08}>
              <div className="data-panel p-7 md:p-9">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
                    ▸ {t.about.briefing}
                  </span>
                  <span className="h-px flex-1 bg-[var(--border-strong)]" />
                </div>
                <p className="text-base md:text-lg text-[var(--text-soft)] leading-relaxed mb-4">
                  {renderParagraph(t.about.paragraph1)}
                </p>
                <p className="text-base md:text-lg text-[var(--text-soft)] leading-relaxed">
                  {renderParagraph(t.about.paragraph2)}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-4 pl-1">
                {skillPillsKey.map((group, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center gap-3"
                  >
                    <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--accent)] uppercase shrink-0 sm:w-24">
                      {t.about.skillGroups[group.key]}
                    </span>
                    <div className="h-px flex-1 hidden sm:block bg-[var(--border)]" />
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item, j) => (
                        <span
                          key={j}
                          className="font-mono text-[11px] tracking-[0.06em] px-2.5 py-1 rounded-sm bg-[var(--surface)] text-[var(--text-soft)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-150"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2} variant="clip">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
                  ▸ {t.about.telemetry}
                </span>
                <span className="h-px flex-1 bg-[var(--border-strong)]" />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.08}>
                  <div className="data-panel p-5 h-full">
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
