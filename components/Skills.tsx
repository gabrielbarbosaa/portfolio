"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { motion } from "framer-motion";
import {
  skillCategories,
  frameworks,
  tools,
  methodologies,
} from "@/data/skills";
import {
  Monitor, Smartphone, Palette, Database, TestTube, Settings,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  TestTube: <TestTube className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />,
};

const catColors: Record<string, string> = {
  Frontend: "border-blue-500/30 hover:border-blue-500/60",
  Mobile: "border-green-500/30 hover:border-green-500/60",
  "Estilização": "border-purple-500/30 hover:border-purple-500/60",
  Backend: "border-orange-500/30 hover:border-orange-500/60",
  Testes: "border-red-500/30 hover:border-red-500/60",
  "DevOps & Tools": "border-gray-500/30 hover:border-gray-500/60",
};

const catIconColors: Record<string, string> = {
  Frontend: "text-blue-500",
  Mobile: "text-green-500",
  "Estilização": "text-purple-500",
  Backend: "text-orange-500",
  Testes: "text-red-500",
  "DevOps & Tools": "text-gray-400",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <span className="font-mono text-sm text-[var(--accent)] mb-4 block">{"// habilidades"}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-16">Stack Técnico</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {skillCategories.map((cat, i) => (
            <motion.div key={i} className={`rounded-xl border bg-[var(--bg-secondary)] p-6 transition-all duration-200 ${catColors[cat.title] || ""}`}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={catIconColors[cat.title] || "text-[var(--accent)]"}>{iconMap[cat.icon]}</div>
                  <h3 className="font-display font-bold text-[var(--text-primary)]">{cat.title}</h3>
                </div>
                <span className="font-mono text-[11px] text-[var(--text-muted)] bg-[var(--bg-accent)] px-2 py-1 rounded">{cat.experience}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s, j) => (
                  <span key={j} className={`text-xs px-2.5 py-1 rounded-md ${s.isPrimary ? "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 font-medium" : "bg-[var(--bg-accent)] text-[var(--text-muted)] border border-[var(--border-subtle)]"}`}>{s.name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <ScrollReveal><h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-6 text-center">Principais Frameworks</h3></ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {frameworks.map((fw, i) => (
            <motion.div key={i} className="group text-center p-5 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)]/40 transition-all duration-200"
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }} whileHover={{ y: -4 }}>
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                <span className="font-mono text-sm text-[var(--accent)] font-bold">{fw.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <h4 className="font-medium text-sm text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">{fw.name}</h4>
              <p className="font-mono text-[11px] text-[var(--text-muted)]">{fw.category}</p>
            </motion.div>
          ))}
        </div>

        <ScrollReveal><h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-6 text-center">Ferramentas</h3></ScrollReveal>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tools.map((t, i) => (
            <motion.span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] text-sm text-[var(--text-secondary)] hover:border-[var(--accent)]/30 transition-all"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />{t}
            </motion.span>
          ))}
        </div>

        <ScrollReveal><h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-6 text-center">Metodologias</h3></ScrollReveal>
        <div className="flex flex-wrap justify-center gap-2">
          {methodologies.map((m, i) => (
            <motion.span key={i} className="font-mono text-xs px-3 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
              {m}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
