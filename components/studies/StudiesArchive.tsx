"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { StudyCard } from "@/components/ui/StudyCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Study } from "@/db/schemas";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function StudiesArchive({ studies }: { studies: Study[] }) {
  const { t } = useI18n();

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-page">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          {t.studies.backHome}
        </Link>

        <header className="mt-10 mb-14 max-w-2xl">
          <p className="eyebrow">
            {studies.length} {t.studies.count}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg md:text-5xl">
            {t.studies.allTitle}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-soft">{t.studies.allSubtitle}</p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, i) => (
            <ScrollReveal key={study.slug} delay={(i % 3) * 0.08} className="h-full" hover>
              <StudyCard study={study} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
