"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-md border border-[var(--border)] bg-[var(--surface)]" />
    );
  }

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative w-10 h-10 flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-colors duration-200 cursor-pointer"
      aria-label="Toggle theme"
    >
      <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? (
            <Sun size={16} className="text-[var(--accent)]" />
          ) : (
            <Moon size={16} className="text-[var(--accent)]" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
