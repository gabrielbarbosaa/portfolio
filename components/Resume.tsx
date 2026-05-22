"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { TimelineItem } from "./ui/TimelineItem";
import { SectionLabel } from "./ui/SectionLabel";
import { experiences, education } from "@/data/experience";
import { motion } from "framer-motion";
import { Download, Calendar, GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Resume() {
  const { t } = useI18n();
  return (
    <section
      id="resume"
      className="relative py-28 md:py-36 overflow-hidden bg-[var(--bg-elev)]/60 backdrop-blur-[2px]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <ScrollReveal>
            <SectionLabel
              index="05"
              total="06"
              label={t.resume.section.label}
              title={t.resume.section.title}
              subtitle={t.resume.section.subtitle}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <button className="btn-ghost group">
              <Download className="w-3.5 h-3.5" />
              {t.resume.downloadCv}
            </button>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
                  ▸ {t.resume.timeline}
                </span>
                <span className="h-px flex-1 bg-[var(--border-strong)]" />
              </div>
            </ScrollReveal>
            <div>
              {experiences.map((exp, i) => (
                <TimelineItem
                  key={i}
                  experience={exp}
                  index={i}
                  isLast={i === experiences.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
                  ▸ {t.resume.training}
                </span>
              </div>
            </ScrollReveal>

            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  className="data-panel p-5"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-display font-bold text-sm text-[var(--text)] leading-tight">
                      {edu.title}
                    </h4>
                    <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--text-muted)] flex items-center gap-1 shrink-0">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-[var(--accent)] text-xs font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
