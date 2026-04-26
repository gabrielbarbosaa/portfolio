"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { ProjectCard } from "./ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--bg-secondary)]/50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="font-mono text-sm text-[var(--accent)] mb-4 block">
            {"// projetos"}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Trabalhos Selecionados
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-16 max-w-2xl">
            Projetos que demonstram qualidade técnica, atenção a UX e performance
            em produção.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
