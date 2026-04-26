"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(0,85,255,0.08)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
    >
      {/* Cover Area */}
      <div className="relative aspect-video bg-[var(--bg-accent)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-warm)]/5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-lg text-[var(--text-muted)] opacity-40">
            {project.title}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 transition-colors duration-300 flex items-center justify-center">
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-[var(--bg-accent)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--accent)] group-hover:gap-3 transition-all duration-200">
          <span>Ver Projeto</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.a>
  );
}
