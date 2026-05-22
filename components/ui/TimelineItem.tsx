"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";
import { Calendar, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast?: boolean;
}

export function TimelineItem({
  experience,
  index,
  isLast = false,
}: TimelineItemProps) {
  const { t } = useI18n();
  return (
    <motion.div
      className="relative pl-10 md:pl-14 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {!isLast && (
        <motion.div
          className="absolute left-[12px] md:left-[16px] top-8 bottom-0 w-px bg-gradient-to-b from-[var(--border-strong)] via-[var(--border)] to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.25, duration: 0.6 }}
          style={{ transformOrigin: "top" }}
        />
      )}

      <motion.div
        className={`absolute left-0 md:left-[2px] top-2 w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-sm flex items-center justify-center border ${
          experience.isCurrent
            ? "border-[var(--accent)] bg-[var(--accent)]/10 pulse-node"
            : "border-[var(--border-strong)] bg-[var(--surface)]"
        }`}
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.1 + 0.1,
          duration: 0.4,
          type: "spring",
          stiffness: 280,
        }}
      >
        <span
          className={`font-mono text-[10px] font-bold ${
            experience.isCurrent
              ? "text-[var(--accent)]"
              : "text-[var(--text-muted)]"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>

      <div className="data-panel p-5 md:p-6">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)]">
            {experience.isCurrent ? t.resume.active : t.resume.archived}
          </span>
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {experience.location}
            </span>
          </div>
        </div>

        <h4 className="font-display text-lg md:text-xl font-bold text-[var(--text)] leading-tight">
          {experience.title}
        </h4>
        <p className="text-[var(--accent)] font-medium text-sm mb-4">
          {experience.company}
        </p>

        <p className="text-sm text-[var(--text-soft)] mb-5 leading-relaxed">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              className="font-mono text-[10px] tracking-[0.04em] px-2 py-0.5 rounded-sm bg-[var(--surface-2)] text-[var(--text-soft)] border border-[var(--border)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
