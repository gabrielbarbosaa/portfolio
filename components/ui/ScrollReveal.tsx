"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  variant?: "rise" | "fade" | "clip";
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  variant = "rise",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.12 });

  const variants = {
    rise: {
      hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    clip: {
      hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
      visible: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
    },
  } as const;

  const chosen = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={chosen}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
