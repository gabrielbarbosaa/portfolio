"use client";

import { GraduationCap, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { RichText } from "./ui/RichText";
import { education } from "@/data/experience";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function About() {
  const { t, lang } = useI18n();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <ScrollReveal>
            <p className="eyebrow">{t.about.label}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg md:text-4xl">
              {t.about.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05} className="mt-8 space-y-5 text-lg leading-relaxed text-soft">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </ScrollReveal>
        </div>

        <div className="space-y-5 lg:col-span-5 lg:pt-2">
          <ScrollReveal delay={0.1} className="card p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-fg">
              <Sparkles className="size-4 text-primary" />
              {t.about.howIWork}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.about.softSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm text-soft"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="card p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-fg">
              <GraduationCap className="size-4 text-primary" />
              {t.about.education}
            </h3>
            <ul className="mt-4 divide-y divide-line">
              {education.map((edu, i) => (
                <li
                  key={edu.title.pt}
                  className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className={`text-fg ${i === 0 ? "font-medium" : "text-sm"}`}>
                      {edu.title[lang]}
                    </p>
                    <p className="text-sm text-muted">
                      {edu.institution}
                      {edu.inProgress && ` · ${t.about.inProgress}`}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {edu.period}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
