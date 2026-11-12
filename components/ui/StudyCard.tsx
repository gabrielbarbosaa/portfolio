"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { Study } from "@/db/schemas";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function StudyCard({ study }: { study: Study }) {
  const { t, lang } = useI18n();
  const content = study.content[lang];
  const techPreview = study.technologies.slice(0, 5);
  const extra = study.technologies.length - techPreview.length;

  return (
    <Link href={`/studies/${study.slug}`} className="group card flex h-full flex-col p-6 md:p-7">
      <div className="flex items-center justify-between gap-3 text-xs text-muted">
        <span className="inline-flex items-center gap-2 font-mono">
          <Github className="size-4" />
          {study.repo}
        </span>
        <span className="flex items-center gap-2">
          <span className="font-mono">{study.year}</span>
          <span className="tag">{t.studies.status[study.status]}</span>
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-primary md:text-2xl">
        {content.title}
      </h3>
      <p className="mt-3 line-clamp-3 leading-relaxed text-soft">{content.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {techPreview.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
        {extra > 0 && <span className="tag">+{extra}</span>}
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 pt-6">
        <span className="text-sm font-medium text-primary">{t.studies.viewStudy}</span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
