"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import type { Project } from "@/db/schemas";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectDetail({ project }: { project: Project }) {
  const { t, lang } = useI18n();
  const details = project.content[lang];

  const meta = [
    { label: t.projectDetail.role, value: details.role },
    { label: t.projectDetail.period, value: project.year },
    ...(project.client ? [{ label: t.projectDetail.client, value: project.client }] : []),
  ];

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32">
      <article className="container-page max-w-4xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          {t.projectDetail.back}
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mt-10"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-fg md:text-6xl">
            {details.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-soft md:text-xl">
            {details.description}
          </p>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {meta.map((item) => (
              <div key={item.label} className="bg-surface p-5">
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  {item.label}
                </dt>
                <dd className="mt-1.5 font-medium text-fg">{item.value}</dd>
              </div>
            ))}
          </dl>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8"
            >
              {t.projectDetail.live}
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </motion.header>

        <Section title={t.projectDetail.overview}>
          <p className="text-lg leading-relaxed text-soft">{details.longDescription}</p>
        </Section>

        <Section title={t.projectDetail.stack}>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.projectDetail.features}>
          <ul className="space-y-3">
            {details.features.map((feature) => (
              <li key={feature} className="flex gap-3 leading-relaxed text-soft">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.projectDetail.challenges}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {details.challenges.map((challenge, i) => (
              <li key={challenge} className="card p-5">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 leading-relaxed text-soft">{challenge}</p>
              </li>
            ))}
          </ul>
        </Section>

        <nav className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            {t.projectDetail.allProjects}
          </Link>
          <Link href="/#contact" className="btn btn-outline">
            {t.projectDetail.contact}
            <ArrowUpRight className="size-4" />
          </Link>
        </nav>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <ScrollReveal className="mt-14">
      <section>
        <h2 className="mb-5 text-xl font-semibold tracking-tight text-fg">{title}</h2>
        {children}
      </section>
    </ScrollReveal>
  );
}
