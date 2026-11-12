"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionHeader } from "./ui/SectionHeader";
import { StudyCard } from "./ui/StudyCard";
import { studies } from "@/data/studies";
import { useI18n } from "@/lib/i18n/I18nProvider";

const HOME_LIMIT = 3;

export function Studies() {
  const { t } = useI18n();
  if (studies.length === 0) return null;

  return (
    <section id="studies" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.studies.label}
          title={t.studies.title}
          subtitle={t.studies.subtitle}
          action={
            <Link href="/studies" className="btn btn-outline">
              {t.studies.viewAll}
              <ArrowRight className="size-4" />
            </Link>
          }
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {studies.slice(0, HOME_LIMIT).map((study, i) => (
            <ScrollReveal key={study.slug} delay={i * 0.08} className="h-full" hover>
              <StudyCard study={study} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
