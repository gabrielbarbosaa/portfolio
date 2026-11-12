"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { LanguageSwitcher } from "./ui/LanguageSwitcher";
import { CommandPalette } from "./CommandPalette";
import { useSiteData } from "./SiteDataProvider";
import { useI18n } from "@/lib/i18n/I18nProvider";

const SECTION_IDS = ["about", "expertise", "projects", "experience", "contact"] as const;

export function Navbar() {
  const { t } = useI18n();
  const { hasPosts, hasStudies } = useSiteData();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const navItems = [
    ...SECTION_IDS.map((id) => ({ id, label: t.nav[id], href: `/#${id}` })),
    // Só aparece quando há algum estudo cadastrado
    ...(hasStudies ? [{ id: "studies", label: t.nav.studies, href: "/studies" }] : []),
    // O link do blog só aparece quando há post visível (em produção: publicado)
    ...(hasPosts ? [{ id: "blog", label: t.nav.blog, href: "/blog" }] : []),
  ];
  const isActive = (id: string) =>
    id === "blog"
      ? pathname.startsWith("/blog")
      : id === "studies"
        ? pathname.startsWith("/studies")
        : active === id;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
      if (pathname !== "/") return;

      let current: string | null = null;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        isScrolled || isMenuOpen
          ? "border-line bg-bg/85 backdrop-blur-lg"
          : "border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-fg"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="grid size-8 place-items-center rounded-lg bg-primary text-sm font-bold text-on-primary">
            GB
          </span>
          <span className="hidden sm:inline">Gabriel Barbosa</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.id) ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {isActive(item.id) && (
                <motion.span
                  layoutId="nav-active-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  className="absolute inset-0 rounded-md bg-surface-2"
                />
              )}
              <span className="relative">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CommandPalette />
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid size-9 place-items-center rounded-lg border border-line bg-surface text-fg md:hidden cursor-pointer"
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <nav className="container-page flex flex-col py-3">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 text-base font-medium text-soft transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-line pt-4 pb-2 sm:hidden">
                <LanguageSwitcher />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
