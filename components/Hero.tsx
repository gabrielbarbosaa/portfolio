"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveDown } from "lucide-react";
import { AuroraField } from "./background/AuroraField";
import { Ticker } from "./ui/Ticker";
import { MagneticButton } from "./ui/MagneticButton";
import { useI18n } from "@/lib/i18n/I18nProvider";

const heroVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  const { t } = useI18n();
  const handleNavClick = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col pt-24 overflow-hidden"
    >
      <AuroraField />

      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div
                custom={0}
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 mb-8"
              >
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--accent)] px-3 py-1.5 border border-[var(--accent)]/40 rounded-sm bg-[var(--accent)]/5">
                  {t.hero.transmission}
                </span>
                <span className="h-px flex-1 max-w-[80px] bg-[var(--border-strong)]" />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
                  {t.hero.handshake}
                </span>
              </motion.div>

              <motion.h1
                custom={1}
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="font-display font-bold leading-[0.88] mb-8 tracking-[-0.04em]"
                style={{ fontSize: "clamp(3.25rem, 10vw, 8.25rem)" }}
              >
                <span className="block text-[var(--text)]">Gabriel</span>
                <span className="block text-[var(--accent)] text-glow">
                  Barbosa<span className="caret align-baseline" />
                </span>
              </motion.h1>

              <motion.div
                custom={2}
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="mb-10 max-w-xl"
              >
                <p className="font-display text-xl md:text-2xl text-[var(--text-soft)] leading-tight mb-4">
                  {t.hero.intro.line1}
                  <br />
                  {t.hero.intro.line2}{" "}
                  <span className="text-[var(--accent)] font-bold">web</span> ·{" "}
                  <span className="text-[var(--accent)] font-bold">mobile</span>{" "}
                  ·{" "}
                  <span className="text-[var(--accent)] font-bold">finance</span>.
                </p>
                <p className="font-mono text-xs tracking-[0.16em] uppercase text-[var(--text-muted)]">
                  {t.hero.intro.tags}
                </p>
              </motion.div>

              <motion.div
                custom={3}
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-3 mb-12"
              >
                <MagneticButton onClick={() => handleNavClick("#projects")}>
                  {t.hero.cta.primary}
                  <ArrowRight className="w-3.5 h-3.5" />
                </MagneticButton>
                <MagneticButton
                  variant="ghost"
                  onClick={() => handleNavClick("#contact")}
                >
                  {t.hero.cta.secondary}
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div
              custom={4}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-4 space-y-3"
            >
              <TelemetryCard
                label={t.hero.telemetry.status.label}
                value={t.hero.telemetry.status.value}
                detail={t.hero.telemetry.status.detail}
                pulse
              />
              <TelemetryCard
                label={t.hero.telemetry.role.label}
                value={t.hero.telemetry.role.value}
                detail={t.hero.telemetry.role.detail}
              />
              <TelemetryCard
                label={t.hero.telemetry.uptime.label}
                value={t.hero.telemetry.uptime.value}
                detail={t.hero.telemetry.uptime.detail}
              />
              <div className="data-panel p-4 flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] mb-1">
                    {t.hero.telemetry.coordinates}
                  </div>
                  <div className="font-mono text-xs text-[var(--text)]">
                    -30.0277° S · -51.2287° W
                  </div>
                </div>
                <svg
                  viewBox="0 0 40 40"
                  className="w-10 h-10 text-[var(--accent)]"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.7"
                    opacity="0.45"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.7"
                    opacity="0.6"
                  />
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                  <line
                    x1="2"
                    y1="20"
                    x2="38"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    opacity="0.4"
                  />
                  <line
                    x1="20"
                    y1="2"
                    x2="20"
                    y2="38"
                    stroke="currentColor"
                    strokeWidth="0.4"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]"
          >
            <MoveDown className="w-3 h-3 text-[var(--accent)] animate-bounce" />
            {t.hero.scroll}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <Ticker />
      </div>
    </section>
  );
}

function TelemetryCard({
  label,
  value,
  detail,
  pulse = false,
}: {
  label: string;
  value: string;
  detail: string;
  pulse?: boolean;
}) {
  return (
    <div className="data-panel p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
          {label}
        </span>
        {pulse && (
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
          </span>
        )}
      </div>
      <div className="font-display text-lg font-bold text-[var(--text)] mb-1">
        {value}
      </div>
      <div className="font-mono text-[11px] text-[var(--text-soft)]">{detail}</div>
    </div>
  );
}
