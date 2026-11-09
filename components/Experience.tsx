"use client";

import { useRef } from "react";
import { Download } from "lucide-react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionHeader } from "./ui/SectionHeader";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Experience() {
  const { t, lang } = useI18n();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.45"],
  });

  return (
    <section id="experience" className="border-y border-line bg-subtle py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.experience.label}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
          action={
            <a href={profile.cvUrl} download className="btn btn-outline">
              <Download className="size-4" />
              {t.experience.downloadCv}
            </a>
          }
        />

        <div className="relative">
          <div className="absolute top-5 bottom-5 left-[1.125rem] w-px bg-line" />
          <motion.div
            aria-hidden
            style={{ scaleY: scrollYProgress }}
            className="absolute top-5 bottom-5 left-[1.125rem] w-px origin-top bg-primary"
          />

          <ol ref={listRef} className="space-y-5">
            {experiences.map((exp, i) => (
              <li
                key={`${exp.company}-${exp.period.pt}`}
                className="grid grid-cols-[2.25rem_1fr] gap-4 md:gap-6"
              >
                <div className="flex justify-center pt-5">
                  <TimelineNode index={i} total={experiences.length} progress={scrollYProgress} />
                </div>

                <ScrollReveal delay={Math.min(i, 3) * 0.05} hover className="card p-6 md:p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-fg">{exp.role[lang]}</h3>
                      <p className="mt-0.5 font-medium text-primary">
                        {exp.company}
                        <span className="font-normal text-muted"> · {exp.location[lang]}</span>
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-end">
                      <span className="font-mono text-sm text-muted">{exp.period[lang]}</span>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          <span className="size-1.5 rounded-full bg-primary" />
                          {t.experience.current}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-soft">
                    {exp.bullets[lang].map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-relaxed">
                        <span
                          aria-hidden
                          className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-line-strong"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Nó da timeline que acende conforme o scroll avança por ele. */
function TimelineNode({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const point = total > 1 ? index / (total - 1) : 0;
  const start = Math.max(point - 0.08, 0);
  const background = useTransform(progress, [start, point], ["var(--surface)", "var(--primary)"]);
  const borderColor = useTransform(progress, [start, point], ["var(--border-strong)", "var(--primary)"]);
  const scale = useTransform(progress, [start, point], [1, 1.12]);

  return (
    <motion.span
      aria-hidden
      style={{ background, borderColor, scale }}
      className="relative z-10 mt-1 size-9 shrink-0 rounded-full border-2 ring-4 ring-subtle"
    />
  );
}
