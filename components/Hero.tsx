"use client";

import { motion } from "framer-motion";
import { MeshGradient } from "./background/MeshGradient";
import { ArrowRight } from "lucide-react";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const handleNavClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <MeshGradient />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          {/* Animated tag */}
          <motion.div
            custom={0}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="font-mono text-sm text-[var(--accent)] bg-[var(--accent)]/10 px-4 py-2 rounded-full border border-[var(--accent)]/20">
              &lt; Desenvolvedor Front-End &amp; Mobile /&gt;
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            custom={1}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
            }}
          >
            <span className="text-[var(--text-primary)]">Gabriel</span>
            <br />
            <span className="text-[var(--accent)]">Barbosa</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="font-mono text-base md:text-lg text-[var(--text-secondary)] mb-8 tracking-wide"
          >
            React · Next.js · TypeScript · React Native
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <button
              onClick={() => handleNavClick("#projects")}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-xl font-medium transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,85,255,0.25)] cursor-pointer"
            >
              Ver Projetos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] rounded-xl font-medium transition-all duration-200 bg-transparent cursor-pointer"
            >
              Entrar em Contato
            </button>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            custom={4}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 text-sm text-[var(--text-muted)]"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Disponível para novos projetos
          </motion.div>
        </div>
      </div>
    </section>
  );
}
