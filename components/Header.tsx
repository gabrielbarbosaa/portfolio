"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Navbar() {
  const { t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { href: "#home", label: t.header.nav.console, code: "01" },
    { href: "#about", label: t.header.nav.intel, code: "02" },
    { href: "#projects", label: t.header.nav.missions, code: "03" },
    { href: "#skills", label: t.header.nav.stack, code: "04" },
    { href: "#resume", label: t.header.nav.logbook, code: "05" },
    { href: "#contact", label: t.header.nav.channel, code: "06" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (pathname !== "/") return;
      const sections = ["#home", "#about", "#projects", "#skills", "#resume", "#contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]) as HTMLElement | null;
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    if (pathname !== "/") {
      router.push(`/${href}`);
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-overlay)] backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-3.5">
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={() => {
              if (pathname !== "/") router.push("/");
              else handleNavClick("#home");
            }}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]" />
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] leading-none">
                {t.header.operator}
              </span>
              <span className="font-display font-bold text-[var(--text)] text-base leading-tight">
                gabriel.b<span className="text-[var(--accent)]">_</span>
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href && pathname === "/";
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative px-3 py-2 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  <span className="text-[var(--text-dim)] mr-1.5">{item.code}</span>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-2 right-2 -bottom-0.5 h-px bg-[var(--accent)]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] cursor-pointer transition-colors"
              aria-label={t.header.menuLabel}
            >
              {isMenuOpen ? (
                <X size={16} className="text-[var(--accent)]" />
              ) : (
                <Menu size={16} className="text-[var(--text)]" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[var(--bg-overlay)] backdrop-blur-xl border-b border-[var(--border)]"
          >
            <nav className="max-w-[1440px] mx-auto px-6 py-4 flex flex-col">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="group flex items-center justify-between text-left py-3.5 border-b border-[var(--border-strong)]/40 last:border-0 cursor-pointer"
                >
                  <span className="flex items-baseline gap-3 font-mono text-[12px] tracking-[0.18em] uppercase">
                    <span className="text-[var(--text-dim)] text-[10px]">
                      {item.code}
                    </span>
                    <span className="text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {item.label}
                    </span>
                  </span>
                  <span className="text-[var(--text-dim)] group-hover:text-[var(--accent)] transition-colors">
                    →
                  </span>
                </motion.button>
              ))}
              <div className="mt-4 pt-4 border-t border-[var(--border-strong)]/40 flex items-center justify-between gap-3">
                <LanguageSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
