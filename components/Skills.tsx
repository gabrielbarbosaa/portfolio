"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";
import { motion } from "framer-motion";
import {
  skillCategories,
  frameworks,
  tools,
  methodologies,
} from "@/data/skills";
import {
  Monitor,
  Smartphone,
  Palette,
  Database,
  TestTube,
  Settings,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  Palette: <Palette className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  TestTube: <TestTube className="w-4 h-4" />,
  Settings: <Settings className="w-4 h-4" />,
};

const accentByCategory: Record<string, string> = {
  Frontend: "var(--lime)",
  Mobile: "var(--violet)",
  Estilização: "var(--rose)",
  Backend: "var(--cyan)",
  Testes: "var(--accent-3)",
  "DevOps & Tools": "var(--accent-2)",
};

export function Skills() {
  const { t } = useI18n();
  return (
    <section
      id="skills"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">
        <ScrollReveal>
          <SectionLabel
            index="04"
            total="06"
            label={t.skills.section.label}
            title={t.skills.section.title}
            subtitle={t.skills.section.subtitle}
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {skillCategories.map((cat, i) => {
            const color = accentByCategory[cat.title] || "var(--accent)";
            return (
              <motion.div
                key={i}
                className="data-panel p-6 group"
                style={{ "--card-accent": color } as React.CSSProperties}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-[var(--border)]">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-sm flex items-center justify-center border"
                      style={{
                        color,
                        borderColor: color,
                        background: `color-mix(in srgb, ${color} 8%, transparent)`,
                      }}
                    >
                      {iconMap[cat.icon]}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--text)] leading-tight">
                        {cat.title}
                      </h3>
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                        {cat.experience}
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-mono text-[11px] font-bold"
                    style={{ color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, j) => (
                    <span
                      key={j}
                      className="font-mono text-[11px] tracking-[0.04em] px-2 py-1 rounded-sm border transition-colors duration-200"
                      style={
                        s.isPrimary
                          ? {
                              color,
                              borderColor: color,
                              background: `color-mix(in srgb, ${color} 8%, transparent)`,
                            }
                          : {
                              color: "var(--text-soft)",
                              borderColor: "var(--border)",
                              background: "var(--surface-2)",
                            }
                      }
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
              ▸ {t.skills.coreFrameworks}
            </span>
            <span className="h-px flex-1 bg-[var(--border-strong)]" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-24">
          {frameworks.map((fw, i) => (
            <motion.div
              key={i}
              className="group data-panel p-5 text-center"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-sm bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                <span className="font-mono text-xs text-[var(--accent)] font-bold tracking-wider">
                  {fw.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <h4 className="font-display font-bold text-sm text-[var(--text)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                {fw.name}
              </h4>
              <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--text-muted)]">
                {fw.category}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
                  ▸ {t.skills.tools}
                </span>
                <span className="h-px flex-1 bg-[var(--border-strong)]" />
              </div>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {tools.map((t, i) => (
                <motion.span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-[var(--border)] bg-[var(--surface)] font-mono text-xs text-[var(--text-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.025 }}
                >
                  <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
                  ▸ {t.skills.methodologies}
                </span>
                <span className="h-px flex-1 bg-[var(--border-strong)]" />
              </div>
            </ScrollReveal>
            <div className="flex flex-wrap gap-1.5">
              {methodologies.map((m, i) => (
                <motion.span
                  key={i}
                  className="font-mono text-[11px] tracking-[0.06em] px-2.5 py-1 rounded-sm border border-[var(--border-strong)] text-[var(--text-soft)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                >
                  {m}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
