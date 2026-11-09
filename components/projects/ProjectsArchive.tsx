"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project } from "@/db/schemas";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function ProjectsArchive({ projects }: { projects: Project[] }) {
  const { t } = useI18n();

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-page">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          {t.projects.backHome}
        </Link>

        <header className="mt-10 mb-14 max-w-2xl">
          <p className="eyebrow">
            {projects.length} {t.projects.count}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            {t.projects.allTitle}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-soft">
            {t.projects.allSubtitle}
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={(i % 3) * 0.08} className="h-full" hover>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
