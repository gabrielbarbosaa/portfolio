"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Github } from "lucide-react";
import { repoUrl, type Study } from "@/data/studies";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function StudyDetail({ study }: { study: Study }) {
  const { t, lang } = useI18n();
  const details = study.content[lang];

  const meta = [
    { label: t.projectDetail.period, value: study.year },
    { label: t.studies.statusLabel, value: t.studies.status[study.status] },
    { label: t.studies.repository, value: `${study.repo}` },
  ];

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32">
      <article className="container-page max-w-4xl">
        <Link
          href="/studies"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          {t.studies.back}
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={repoUrl(study)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github className="size-4" />
              {t.studies.repo}
              <ArrowUpRight className="size-4" />
            </a>
            {study.demo && (
              <a
                href={study.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                {t.projectDetail.live}
                <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </motion.header>

        <Section title={t.projectDetail.overview}>
          <p className="text-lg leading-relaxed text-soft">{details.longDescription}</p>
        </Section>

        <Section title={t.projectDetail.stack}>
          <ul className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
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
            href="/studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            {t.studies.back}
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
