"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";
import { Calendar, MapPin } from "lucide-react";

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
  return (
    <motion.div
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Vertical Line */}
      {!isLast && (
        <motion.div
          className="absolute left-[11px] md:left-[15px] top-6 bottom-0 w-px bg-[var(--border)]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
          style={{ transformOrigin: "top" }}
        />
      )}

      {/* Dot */}
      <motion.div
        className={`absolute left-0 md:left-1 top-1.5 w-[22px] h-[22px] md:w-[30px] md:h-[30px] rounded-full border-[3px] flex items-center justify-center ${
          experience.isCurrent
            ? "border-[var(--accent)] bg-[var(--accent)]/20"
            : "border-[var(--border)] bg-[var(--bg-secondary)]"
        }`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.15 + 0.1,
          duration: 0.4,
          type: "spring",
          stiffness: 300,
        }}
      >
        {experience.isCurrent && (
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[var(--accent)] animate-pulse" />
        )}
      </motion.div>

      {/* Content */}
      <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] p-5 md:p-6 hover:border-[var(--accent)]/30 transition-colors duration-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
          <div>
            <h4 className="font-display text-lg font-bold text-[var(--text-primary)]">
              {experience.title}
            </h4>
            <p className="text-[var(--accent)] font-medium">
              {experience.company}
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {experience.location}
            </span>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--bg-accent)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
