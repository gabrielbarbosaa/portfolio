"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="hero-grid absolute inset-0 -z-10" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-soft">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t.hero.available}
          </span>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
            Gabriel Barbosa
          </h1>
          <p className="mt-3 text-xl font-medium text-primary sm:text-2xl">
            {t.hero.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            {t.hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#projects" className="btn btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/#contact" className="btn btn-outline">
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" />
              {t.hero.location}
            </span>
            <span aria-hidden className="h-4 w-px bg-line-strong" />
            <div className="flex items-center gap-1">
              <IconLink href={profile.github} label="GitHub">
                <Github className="size-[18px]" />
              </IconLink>
              <IconLink href={profile.linkedin} label="LinkedIn">
                <Linkedin className="size-[18px]" />
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} label="E-mail">
                <Mail className="size-[18px]" />
              </IconLink>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="min-w-0"
        >
          <CodeCard />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="container-page mt-20"
      >
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="bg-surface p-5 md:p-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {children}
    </a>
  );
}

/* Cartão de código: mostra o perfil front + back de forma visual. */
function CodeCard() {
  const kw = "text-primary";
  const str = "text-secondary";
  const num = "text-accent";
  const punc = "text-dim";
  const prop = "text-fg";

  const list = (items: string[]) => (
    <>
      <span className={punc}>[</span>
      {items.map((item, i) => (
        <span key={item}>
          <span className={str}>&quot;{item}&quot;</span>
          {i < items.length - 1 && <span className={punc}>, </span>}
        </span>
      ))}
      <span className={punc}>]</span>
    </>
  );

  const line = (key: string, value: React.ReactNode) => (
    <>
      {"  "}
      <span className={prop}>{key}</span>
      <span className={punc}>: </span>
      {value}
      <span className={punc}>,</span>
      {"\n"}
    </>
  );

  return (
    <div className="card overflow-hidden shadow-[var(--shadow-lg)]">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 font-mono text-xs text-muted">engineer.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 text-soft sm:text-[13px] md:p-6">
        <code>
          <span className="text-dim">{"// Porto Alegre, BR · UTC-3\n"}</span>
          <span className={kw}>const</span> <span className={prop}>engineer</span>{" "}
          <span className={punc}>=</span> <span className={punc}>{"{"}</span>
          {"\n"}
          {line("name", <span className={str}>&quot;Gabriel Barbosa&quot;</span>)}
          {line("role", <span className={str}>&quot;Software Engineer&quot;</span>)}
          {line("yearsOfExperience", <span className={num}>5</span>)}
          {line("frontend", list(["React", "Next.js", "TypeScript"]))}
          {line("mobile", list(["React Native"]))}
          {line("backend", list(["Java", "Python", "Node.js"]))}
          {line("focus", list(["product", "performance", "quality"]))}
          <span className={punc}>{"}"}</span> <span className={kw}>as const</span>
          <span className={punc}>;</span>
        </code>
      </pre>
    </div>
  );
}
