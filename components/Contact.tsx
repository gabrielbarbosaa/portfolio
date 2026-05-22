"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Clock,
  MapPin,
  Calendar,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const contactCards = [
    {
      key: "email",
      icon: <Mail className="w-4 h-4" />,
      value: "gbarbosa1602@gmail.com",
      href: "mailto:gbarbosa1602@gmail.com",
      ...t.contact.cards.email,
    },
    {
      key: "whatsapp",
      icon: <Phone className="w-4 h-4" />,
      value: "+55 51 99171-6040",
      href: "https://wa.me/5551991716040",
      ...t.contact.cards.whatsapp,
    },
    {
      key: "github",
      icon: <Github className="w-4 h-4" />,
      value: "@gabrielbarbosaa",
      href: "https://github.com/gabrielbarbosaa/",
      ...t.contact.cards.github,
    },
    {
      key: "linkedin",
      icon: <Linkedin className="w-4 h-4" />,
      value: "Gabriel Barbosa",
      href: "https://www.linkedin.com/in/gabrielbarbosa-azevedo/",
      ...t.contact.cards.linkedin,
    },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative">
        <ScrollReveal>
          <SectionLabel
            index="06"
            total="06"
            label={t.contact.section.label}
            title={t.contact.section.title}
            subtitle={t.contact.section.subtitle}
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal delay={0.08}>
              <div className="data-panel p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]" />
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)]">
                    {t.contact.channelOpen}
                  </span>
                </div>
                <p className="font-display text-lg text-[var(--text)] leading-tight mb-3">
                  {t.contact.headline}
                </p>
                <p className="text-sm text-[var(--text-soft)] leading-relaxed mb-5">
                  {t.contact.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-[var(--border)]">
                  <InfoLine icon={<Clock className="w-3 h-3" />} text={t.contact.schedule} />
                  <InfoLine icon={<MapPin className="w-3 h-3" />} text={t.contact.location} />
                  <InfoLine icon={<Calendar className="w-3 h-3" />} text={t.contact.response} />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="relative overflow-hidden data-panel p-6 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-3)]">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[var(--accent)]/10 blur-3xl" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] mb-3 block">
                  {t.contact.echo}
                </span>
                <p className="font-display text-base text-[var(--text)] leading-snug mb-3">
                  {t.contact.echoLine}
                </p>
                <p className="font-mono text-[11px] tracking-[0.06em] text-[var(--text-soft)]">
                  {t.contact.echoCaption}
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.key}
                className="group data-panel p-5 flex flex-col"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-sm border border-[var(--border)] bg-[var(--surface-2)] flex items-center justify-center text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                      {card.icon}
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
                      {card.code}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(card.value, card.key)}
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] cursor-pointer transition-colors"
                    title="copy"
                    aria-label="copy"
                  >
                    {copied === card.key ? (
                      <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <h4 className="font-display text-lg font-bold text-[var(--text)] mb-1">
                  {card.title}
                </h4>
                <p className="text-[11px] text-[var(--text-muted)] mb-3">
                  {card.desc}
                </p>
                <p className="font-mono text-xs text-[var(--text-soft)] mb-5 break-all">
                  {card.value}
                </p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] hover:gap-3 transition-all"
                >
                  {card.label}
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs text-[var(--text-soft)]">
      <span className="text-[var(--accent)]">{icon}</span>
      <span className="font-mono tracking-[0.04em]">{text}</span>
    </div>
  );
}
