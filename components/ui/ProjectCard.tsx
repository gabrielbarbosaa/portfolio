"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useI18n } from "@/lib/i18n/I18nProvider";

interface ProjectCardProps {
  project: Project;
  index: number;
  code: string;
}

export function ProjectCard({ project, index, code }: ProjectCardProps) {
  const { t } = useI18n();
  const techPreview = project.technologies.slice(0, 4);
  const extra = project.technologies.length - techPreview.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block data-panel overflow-hidden"
      >
        <span className="pointer-events-none absolute top-3 left-3 w-3 h-3 border-t border-l border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="pointer-events-none absolute top-3 right-3 w-3 h-3 border-t border-r border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="pointer-events-none absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)]">
          <div className="absolute inset-0 hud-grid-dense opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/8 via-transparent to-[var(--violet)]/8 transition-opacity duration-500 opacity-60 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl md:text-4xl font-bold text-[var(--text)] opacity-25 group-hover:opacity-50 transition-opacity duration-500 tracking-tight px-4 text-center">
              {project.title}
            </span>
          </div>
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] bg-[var(--bg)]/70 backdrop-blur-sm px-2 py-1 rounded-sm border border-[var(--accent)]/30">
              {t.projects.mission} {code}
            </span>
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] bg-[var(--bg)]/70 backdrop-blur-sm px-2 py-1 rounded-sm border border-[var(--border)]">
              {project.details.year}
            </span>
          </div>
          <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4 text-[var(--bg)]" strokeWidth={2.5} />
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
              {project.details.role}
            </span>
            <span className="text-[var(--text-dim)]">·</span>
            {project.details.client && (
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
                {project.details.client}
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl md:text-[1.65rem] font-bold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 leading-tight">
            {project.title}
          </h3>

          <p className="text-sm text-[var(--text-soft)] mb-5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5 flex-1">
              {techPreview.map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] tracking-[0.04em] px-2 py-0.5 rounded-sm bg-[var(--surface-2)] text-[var(--text-soft)] border border-[var(--border)]"
                >
                  {tech}
                </span>
              ))}
              {extra > 0 && (
                <span className="font-mono text-[10px] px-2 py-0.5 text-[var(--text-muted)]">
                  +{extra}
                </span>
              )}
            </div>
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] flex items-center gap-1 shrink-0 group-hover:gap-2 transition-all">
              {t.projects.open}
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
