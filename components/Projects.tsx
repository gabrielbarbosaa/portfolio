"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionHeader } from "./ui/SectionHeader";
import { ProjectCard } from "./ui/ProjectCard";
import type { Project } from "@/db/schemas";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Projects({ projects: featured }: { projects: Project[] }) {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.projects.label}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          action={
            <Link href="/projects" className="btn btn-outline">
              {t.projects.viewAll}
              <ArrowRight className="size-4" />
            </Link>
          }
        />

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.05} className="h-full">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
