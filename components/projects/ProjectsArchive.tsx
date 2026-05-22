"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function ProjectsArchive() {
  const { t } = useI18n();

  return (
    <main className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.archive.backToConsole}
        </Link>

        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.22em] text-[var(--accent)] uppercase">
              {t.archive.label}
            </span>
            <span className="h-px flex-1 max-w-[80px] bg-[var(--border-strong)]" />
            <span className="font-mono text-xs tracking-[0.22em] text-[var(--text-muted)] uppercase">
              {String(projects.length).padStart(3, "0")} {t.archive.entries}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--text)] leading-[0.9] mb-5 tracking-[-0.03em]">
            {t.archive.title}
          </h1>
          <p className="text-base md:text-lg text-[var(--text-soft)] leading-relaxed max-w-2xl">
            {t.archive.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              code={String(index + 1).padStart(3, "0")}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
