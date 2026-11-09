"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ui/ScrollReveal";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    { name: "LinkedIn", handle: profile.linkedinHandle, href: profile.linkedin, Icon: Linkedin },
    { name: "GitHub", handle: profile.githubHandle, href: profile.github, Icon: Github },
    { name: "WhatsApp", handle: profile.phoneDisplay, href: profile.whatsapp, Icon: MessageCircle },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page">
        <ScrollReveal className="card relative overflow-hidden p-8 md:p-14">
          <div aria-hidden className="soft-glow pointer-events-none absolute inset-0" />

          <div className="relative">
            <p className="eyebrow">{t.contact.label}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-fg md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">
              {t.contact.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail className="size-4" />
                {t.contact.emailCta}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-outline overflow-hidden"
                aria-live="polite"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "copied" : "copy"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2"
                  >
                    {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
                    {copied ? t.contact.copied : t.contact.copy}
                  </motion.span>
                </AnimatePresence>
              </button>
              <span className="font-mono text-sm text-muted">{profile.email}</span>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {channels.map(({ name, handle, href, Icon }, i) => (
                <ScrollReveal key={name} delay={i * 0.08} hover>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-line bg-surface-2 p-4 transition-colors hover:border-line-strong"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-surface text-soft">
                      <Icon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-fg">{name}</span>
                      <span className="block truncate text-sm text-muted">{handle}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
