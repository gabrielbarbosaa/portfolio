"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { TimelineItem } from "./ui/TimelineItem";
import { experiences, education } from "@/data/experience";
import { motion } from "framer-motion";
import { Download, Calendar, GraduationCap } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 bg-[var(--bg-secondary)]/50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <ScrollReveal>
            <span className="font-mono text-sm text-[var(--accent)] mb-4 block">{"// currículo"}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)]">Experiência</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-xl font-medium transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,85,255,0.25)] cursor-pointer">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </ScrollReveal>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mb-20">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} experience={exp} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>

        {/* Education */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-[var(--accent)]" />
            <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">Formação Acadêmica</h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <motion.div key={i}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 hover:border-[var(--accent)]/30 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-display font-bold text-[var(--text-primary)] text-sm">{edu.title}</h4>
                <span className="font-mono text-[11px] text-[var(--text-muted)] flex items-center gap-1 shrink-0">
                  <Calendar className="w-3 h-3" />{edu.period}
                </span>
              </div>
              <p className="text-[var(--accent)] text-sm font-medium mb-2">{edu.institution}</p>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
