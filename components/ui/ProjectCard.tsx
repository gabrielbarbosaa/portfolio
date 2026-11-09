"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/db/schemas";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useI18n();
  const content = project.content[lang];
  const techPreview = project.technologies.slice(0, 4);
  const extra = project.technologies.length - techPreview.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group card card-hover flex h-full flex-col p-6 md:p-7"
    >
      <div className="flex items-center justify-between gap-4 text-xs text-muted">
        <span className="font-mono">{project.year}</span>
        {project.client && <span className="truncate">{project.client}</span>}
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-primary md:text-2xl">
        {content.title}
      </h3>

      <p className="mt-3 line-clamp-3 leading-relaxed text-soft">
        {content.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {techPreview.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
        {extra > 0 && <span className="tag">+{extra}</span>}
      </div>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-primary">
        {t.projects.viewProject}
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
