"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Leve lift + escala no hover (spring), pra cards clicáveis/estáticos. */
  hover?: boolean;
}

/** Fade + deslocamento + leve escala ao entrar na viewport. Uma vez só. */
export function ScrollReveal({
  children,
  delay = 0,
  className,
  hover = false,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      {...(hover
        ? {
            whileHover: {
              y: -6,
              scale: 1.015,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            },
            whileTap: { scale: 0.98 },
          }
        : {})}
    >
      {children}
    </motion.div>
  );
}
