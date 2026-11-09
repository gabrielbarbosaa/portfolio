"use client";

import { Download } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionHeader } from "./ui/SectionHeader";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Experience() {
  const { t, lang } = useI18n();

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

        <ol className="card divide-y divide-line px-6 md:px-10">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period.pt}`}>
              <ScrollReveal className="grid gap-3 py-8 md:grid-cols-[13rem_1fr] md:gap-10 md:py-10">
                <div className="flex items-center gap-3 md:flex-col md:items-start">
                  <span className="font-mono text-sm text-muted">{exp.period[lang]}</span>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {t.experience.current}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-fg">{exp.role[lang]}</h3>
                  <p className="mt-0.5 font-medium text-primary">
                    {exp.company}
                    <span className="font-normal text-muted"> · {exp.location[lang]}</span>
                  </p>

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
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
