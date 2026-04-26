"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";

const stats = [
  { end: 5, suffix: "+", label: "Anos de experiência" },
  { end: 20, suffix: "+", label: "Projetos entregues" },
  { end: 3, suffix: "", label: "Empresas / Agências" },
  { end: 100, suffix: "%", label: "Trabalho remoto" },
];

const skillPills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { category: "Mobile", items: ["React Native", "Expo"] },
  { category: "Backend", items: ["Node.js", "Nest.js", "PostgreSQL", "MongoDB"] },
  { category: "Testes", items: ["Jest", "Cypress", "Testing Library"] },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="font-mono text-sm text-[var(--accent)] mb-4 block">
            {"// sobre mim"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-16">
            Minha Jornada
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 mb-20">
          {/* Text - 3 columns */}
          <div className="md:col-span-3">
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                Desenvolvedor apaixonado por tecnologia com mais de{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  5 anos de experiência
                </span>{" "}
                criando aplicações web e mobile que impactam positivamente a vida
                das pessoas.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Especializado em{" "}
                <span className="text-[var(--accent)] font-medium">React</span>{" "}
                e{" "}
                <span className="text-[var(--accent)] font-medium">
                  React Native
                </span>
                , com forte conhecimento em performance, acessibilidade e boas
                práticas de desenvolvimento. Sempre em busca de aprender novas
                tecnologias e metodologias para entregar soluções cada vez
                melhores.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats - 2 columns */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                  <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] p-5 text-center hover:border-[var(--accent)]/30 transition-colors duration-200">
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Pills */}
        <div className="space-y-6">
          {skillPills.map((group, i) => (
            <ScrollReveal key={i} delay={0.05 * i}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-[var(--text-muted)] w-20 shrink-0">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1.5 text-sm rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
