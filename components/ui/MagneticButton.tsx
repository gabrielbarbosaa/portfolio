"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  external = false,
  className = "",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const baseClass = variant === "primary" ? "btn-primary" : "btn-ghost";
  const innerClass = `${baseClass} ${className}`;

  const content = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className={innerClass}
    >
      {children}
    </motion.span>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      {href ? (
        external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
          >
            {content}
          </a>
        ) : (
          <Link href={href} aria-label={ariaLabel}>
            {content}
          </Link>
        )
      ) : (
        <button onClick={onClick} aria-label={ariaLabel}>
          {content}
        </button>
      )}
    </div>
  );
}
