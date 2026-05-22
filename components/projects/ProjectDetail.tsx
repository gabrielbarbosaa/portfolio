"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Briefcase,
  Building2,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { useI18n } from "@/lib/i18n/I18nProvider";

interface ProjectDetailProps {
  project: Project;
  code: string;
}

export function ProjectDetail({ project, code }: ProjectDetailProps) {
  const { t } = useI18n();
  const { details } = project;

  return (
    <main className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t.projectDetail.backToIndex}
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.22em] uppercase text-[var(--accent)]">
              {t.projectDetail.mission} {code}
            </span>
            <span className="h-px flex-1 max-w-[100px] bg-[var(--border-strong)]" />
            <span className="font-mono text-xs tracking-[0.22em] uppercase text-[var(--text-muted)]">
              {details.year}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--text)] leading-[0.92] mb-6 tracking-[-0.03em]">
            {project.title}
          </h1>
          <p className="text-base md:text-xl text-[var(--text-soft)] leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </header>

        <div className="relative data-panel mb-12 overflow-hidden">
          <div className="aspect-[16/8] relative">
            <div className="absolute inset-0 hud-grid-dense opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/12 via-transparent to-[var(--violet)]/12" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-3xl md:text-6xl font-bold text-[var(--text)] opacity-30 tracking-tight px-6 text-center">
                {project.title}
              </span>
            </div>
            <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] bg-[var(--bg)]/70 backdrop-blur-sm px-2 py-1 rounded-sm border border-[var(--accent)]/30">
              {t.projectDetail.preview}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mb-14">
          <InfoCard
            icon={<Briefcase className="w-3.5 h-3.5" />}
            label={t.projectDetail.role}
            value={details.role}
          />
          <InfoCard
            icon={<Calendar className="w-3.5 h-3.5" />}
            label={t.projectDetail.tenure}
            value={details.year}
          />
          {details.client && (
            <InfoCard
              icon={<Building2 className="w-3.5 h-3.5" />}
              label={t.projectDetail.client}
              value={details.client}
            />
          )}
        </div>

        <section className="mb-14">
          <SectionHead label={t.projectDetail.briefing} />
          <p className="text-base md:text-lg text-[var(--text-soft)] leading-relaxed">
            {details.longDescription}
          </p>
        </section>

        <section className="mb-14">
          <SectionHead label={t.projectDetail.stack} />
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs tracking-[0.04em] px-3 py-1.5 rounded-sm bg-[var(--surface)] text-[var(--text-soft)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <SectionHead label={t.projectDetail.deliverables} />
          <ul className="space-y-3">
            {details.features.map((feature, i) => (
              <li
                key={i}
                className="group data-panel p-5 flex gap-4 items-start hover:border-[var(--accent)] transition-colors"
              >
                <span className="font-mono text-xs font-bold text-[var(--accent)] shrink-0 mt-0.5">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className="text-sm md:text-base text-[var(--text-soft)] leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <SectionHead label={t.projectDetail.challenges} />
          <ul className="space-y-3">
            {details.challenges.map((challenge, i) => (
              <li
                key={i}
                className="data-panel p-5 flex gap-4 items-start border-l-2"
                style={{ borderLeftColor: "var(--rose)" }}
              >
                <span className="font-mono text-xs font-bold text-[var(--rose)] shrink-0 mt-0.5">
                  ⚠ {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base text-[var(--text-soft)] leading-relaxed">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {project.demo && (
          <section className="mb-14">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t.projectDetail.accessBuild}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </section>
        )}

        <nav className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.projectDetail.allMissions}
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--accent)] hover:gap-3 transition-all"
          >
            {t.projectDetail.openChannel}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </nav>
      </div>
    </main>
  );
}

function SectionHead({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
        ▸ {label}
      </span>
      <span className="h-px flex-1 bg-[var(--border-strong)]" />
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="data-panel p-5">
      <div className="flex items-center gap-2 mb-2 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
        <span className="text-[var(--accent)]">{icon}</span>
        {label}
      </div>
      <p className="font-display text-base font-bold text-[var(--text)]">{value}</p>
    </div>
  );
}
