"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { ProjectCard } from "./ui/ProjectCard";
import { SectionLabel } from "./ui/SectionLabel";
import { projects } from "@/data/projects";
import { useI18n } from "@/lib/i18n/I18nProvider";

const FEATURED_LIMIT = 4;

export function Projects() {
  const { t } = useI18n();
  const featured = projects.slice(0, FEATURED_LIMIT);

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 overflow-hidden bg-[var(--bg-elev)]/60 backdrop-blur-[2px]"
    >
      <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">
        <ScrollReveal>
          <SectionLabel
            index="03"
            total="06"
            label={t.projects.section.label}
            title={t.projects.section.title}
            subtitle={t.projects.section.subtitle}
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              code={String(index + 1).padStart(3, "0")}
            />
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-10 border-t border-[var(--border)]">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)] mb-1">
                {t.projects.archive.label}
              </p>
              <p className="text-[var(--text-soft)]">
                {t.projects.archive.description}
              </p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 font-mono text-xs tracking-[0.22em] uppercase text-[var(--accent)] hover:gap-4 transition-all"
            >
              {t.projects.archive.cta}
              <span className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--bg)] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
