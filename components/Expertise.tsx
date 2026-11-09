"use client";

import { Boxes, Layers, Monitor, Plug, Server, Smartphone } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionHeader } from "./ui/SectionHeader";
import { expertise, skillLabel, type ExpertiseArea, type Tone } from "@/data/skills";
import { useI18n } from "@/lib/i18n/I18nProvider";

const icons: Record<ExpertiseArea["icon"], React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Smartphone,
  Boxes,
  Plug,
  Layers,
};

const toneClasses: Record<Tone, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
};

export function Expertise() {
  const { t, lang } = useI18n();

  return (
    <section id="expertise" className="border-y border-line bg-subtle py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.expertise.label}
          title={t.expertise.title}
          subtitle={t.expertise.subtitle}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((area, i) => {
            const Icon = icons[area.icon];
            const copy = t.expertise.groups[area.key];
            return (
              <ScrollReveal key={area.key} delay={i * 0.05} className="card flex flex-col p-6">
                <span
                  className={`grid size-10 place-items-center rounded-lg ${toneClasses[area.tone]}`}
                >
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-fg">{copy.title}</h3>
                <p className="mt-2 leading-relaxed text-soft">{copy.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                  {area.skills.map((skill) => {
                    const label = skillLabel(skill, lang);
                    return (
                      <li key={label} className="tag">
                        {label}
                      </li>
                    );
                  })}
                </ul>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
