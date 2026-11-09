"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  FileText,
  FolderOpen,
  Github,
  Hash,
  Languages,
  Linkedin,
  Search,
  SunMoon,
  type LucideIcon,
} from "lucide-react";
import { profile } from "@/data/profile";
import { useSiteData } from "./SiteDataProvider";
import { LANGS } from "@/lib/i18n/dictionaries";
import { useI18n } from "@/lib/i18n/I18nProvider";

type GroupKey = "navigation" | "projects" | "actions" | "links";

interface Command {
  id: string;
  group: GroupKey;
  label: string;
  keywords?: string;
  icon: LucideIcon;
  run: () => void;
}

const normalize = (text: string) =>
  text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export function CommandPalette() {
  const { t, lang, setLang } = useI18n();
  const { resolvedTheme, setTheme } = useTheme();
  const { projects, hasPosts } = useSiteData();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMac, setIsMac] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
    triggerRef.current?.focus();
  }, []);

  // Atalho global ⌘K / Ctrl+K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Trava o scroll da página e foca o campo ao abrir
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(id);
  }, [toast]);

  const commands = useMemo<Command[]>(() => {
    const go = (href: string) => () => router.push(href);
    const sections = ["about", "expertise", "projects", "experience", "contact"] as const;

    return [
      ...sections.map((id) => ({
        id: `nav-${id}`,
        group: "navigation" as const,
        label: t.nav[id],
        icon: Hash,
        run: go(`/#${id}`),
      })),
      { id: "nav-all-projects", group: "navigation", label: t.palette.allProjects, icon: FolderOpen, run: go("/projects") },
      ...(hasPosts
        ? [{ id: "nav-blog", group: "navigation" as const, label: t.nav.blog, icon: FileText, run: go("/blog") }]
        : []),
      ...projects.map((project) => ({
        id: `project-${project.slug}`,
        group: "projects" as const,
        label: project.titles[lang],
        keywords: `${project.client ?? ""} ${project.technologies.join(" ")}`,
        icon: ArrowRight,
        run: go(`/projects/${project.slug}`),
      })),
      {
        id: "action-copy-email",
        group: "actions",
        label: t.palette.copyEmail,
        keywords: profile.email,
        icon: Copy,
        run: () => {
          navigator.clipboard.writeText(profile.email).then(
            () => setToast(t.palette.emailCopied),
            () => (window.location.href = `mailto:${profile.email}`)
          );
        },
      },
      {
        id: "action-cv",
        group: "actions",
        label: t.palette.downloadCv,
        keywords: "cv pdf resume curriculo",
        icon: Download,
        run: () => window.open(profile.cvUrl, "_blank"),
      },
      {
        id: "action-theme",
        group: "actions",
        label: t.palette.toggleTheme,
        keywords: "dark light tema theme",
        icon: SunMoon,
        run: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
      ...LANGS.filter((l) => l.code !== lang).map((l) => ({
        id: `action-lang-${l.code}`,
        group: "actions" as const,
        label: `${t.palette.language}: ${l.label}`,
        keywords: "idioma language lang",
        icon: Languages,
        run: () => setLang(l.code),
      })),
      { id: "link-github", group: "links", label: "GitHub", keywords: profile.githubHandle, icon: Github, run: () => window.open(profile.github, "_blank", "noopener") },
      { id: "link-linkedin", group: "links", label: "LinkedIn", icon: Linkedin, run: () => window.open(profile.linkedin, "_blank", "noopener") },
    ];
  }, [t, lang, setLang, router, resolvedTheme, setTheme, projects, hasPosts]);

  const filtered = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return commands;
    return commands.filter((cmd) => {
      const haystack = normalize(`${cmd.label} ${cmd.keywords ?? ""}`);
      return terms.every((term) => haystack.includes(term));
    });
  }, [commands, query]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const runCommand = (cmd: Command) => {
    close();
    cmd.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (filtered.length ? (i + 1) % filtered.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = filtered[active];
      if (cmd) runCommand(cmd);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  const groups: GroupKey[] = ["navigation", "projects", "actions", "links"];
  const shortcut = isMac ? "⌘K" : "Ctrl K";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 items-center gap-2 rounded-lg border border-line bg-surface px-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg cursor-pointer"
        aria-label={`${t.palette.trigger} (${shortcut})`}
        aria-haspopup="dialog"
      >
        <Search className="size-4" />
        <span className="hidden lg:inline">{t.palette.trigger}</span>
        <kbd className="hidden rounded border border-line bg-surface-2 px-1.5 font-mono text-[11px] lg:inline">
          {shortcut}
        </kbd>
      </button>

      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={close} aria-hidden />
            <div
              role="dialog"
              aria-modal="true"
              aria-label={t.palette.trigger}
              className="card relative w-full max-w-xl overflow-hidden shadow-[var(--shadow-lg)]"
              onKeyDown={onKeyDown}
            >
              <div className="flex items-center gap-3 border-b border-line px-4">
                <Search className="size-4 shrink-0 text-muted" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.palette.placeholder}
                  className="h-14 w-full bg-transparent text-base text-fg outline-none placeholder:text-dim"
                  role="combobox"
                  aria-expanded="true"
                  aria-controls="command-list"
                  aria-activedescendant={filtered[active] ? `cmd-${filtered[active].id}` : undefined}
                  aria-autocomplete="list"
                  autoComplete="off"
                  spellCheck={false}
                />
                <kbd className="rounded border border-line bg-surface-2 px-1.5 font-mono text-[11px] text-muted">
                  Esc
                </kbd>
              </div>

              <ul
                ref={listRef}
                id="command-list"
                role="listbox"
                className="max-h-[min(60vh,420px)] overflow-y-auto p-2"
              >
                {filtered.length === 0 && (
                  <li className="px-3 py-10 text-center text-sm text-muted">{t.palette.empty}</li>
                )}
                {groups.map((group) => {
                  const items = filtered.filter((c) => c.group === group);
                  if (items.length === 0) return null;
                  return (
                    <li key={group} role="presentation">
                      <p className="px-3 pt-3 pb-1.5 text-xs font-medium text-dim">
                        {t.palette.groups[group]}
                      </p>
                      <ul role="group">
                        {items.map((cmd) => {
                          const index = filtered.indexOf(cmd);
                          const selected = index === active;
                          const Icon = cmd.icon;
                          return (
                            <li
                              key={cmd.id}
                              id={`cmd-${cmd.id}`}
                              role="option"
                              aria-selected={selected}
                              data-index={index}
                              onMouseMove={() => setActive(index)}
                              onClick={() => runCommand(cmd)}
                              className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                                selected ? "bg-primary/10 text-fg" : "text-soft"
                              }`}
                            >
                              <Icon className={`size-4 shrink-0 ${selected ? "text-primary" : "text-muted"}`} />
                              <span className="truncate">{cmd.label}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>

              <div className="hidden items-center gap-4 border-t border-line px-4 py-2.5 text-xs text-muted sm:flex">
                <span><kbd className="font-mono">↑↓</kbd> {t.palette.hintNavigate}</span>
                <span><kbd className="font-mono">↵</kbd> {t.palette.hintSelect}</span>
                <span><kbd className="font-mono">esc</kbd> {t.palette.hintClose}</span>
              </div>
            </div>
          </div>,
          document.body
        )}

      {mounted &&
        toast &&
        createPortal(
          <div
            role="status"
            className="card fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 px-4 py-2.5 text-sm text-fg shadow-[var(--shadow-lg)]"
          >
            <Check className="size-4 text-primary" />
            {toast}
          </div>,
          document.body
        )}
    </>
  );
}
