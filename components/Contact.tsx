"use client";

import { ScrollReveal } from "./ui/ScrollReveal";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Clock, MapPin, Calendar, ArrowUpRight, Copy } from "lucide-react";

export function Contact() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const contactCards = [
    { icon: <Mail className="w-5 h-5" />, title: "Email", value: "gbarbosa1602@gmail.com", desc: "Melhor forma para propostas", href: "mailto:gbarbosa1602@gmail.com", label: "Enviar Email" },
    { icon: <Phone className="w-5 h-5" />, title: "WhatsApp", value: "+55 (51) 99171-6040", desc: "Para conversas rápidas", href: "https://wa.me/5551991716040", label: "Abrir WhatsApp" },
    { icon: <Github className="w-5 h-5" />, title: "GitHub", value: "@gabrielbarbosaa", desc: "Projetos e contribuições", href: "https://github.com/gabrielbarbosaa/", label: "Visitar" },
    { icon: <Linkedin className="w-5 h-5" />, title: "LinkedIn", value: "Gabriel Barbosa", desc: "Conecte-se profissionalmente", href: "https://linkedin.com", label: "Visitar" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Left — Copy + Status */}
          <div className="md:col-span-2">
            <ScrollReveal>
          <span className="font-mono text-sm text-[var(--accent)] mb-4 block">
            {"// contato"}
          </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
                Vamos trabalhar<br />juntos?
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Interessado em trabalhar juntos? Vamos conversar sobre seu próximo projeto.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">Disponível para novos projetos</span>
                </div>
                <div className="space-y-2 text-sm text-[var(--text-muted)]">
                  <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" />Seg–Sex, 9h às 18h</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />UTC-3 (Brasília)</div>
                  <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" />Resposta em até 24h</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Contact Cards */}
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-4">
            {contactCards.map((card, i) => (
              <motion.div key={i}
                className="group rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 hover:border-[var(--accent)]/40 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[var(--accent)]">{card.icon}</div>
                  <button onClick={() => copyToClipboard(card.value)} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer" title="Copiar">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                <h4 className="font-display font-bold text-[var(--text-primary)] mb-1">{card.title}</h4>
                <p className="text-xs text-[var(--text-muted)] mb-3">{card.desc}</p>
                <p className="font-mono text-sm text-[var(--text-secondary)] mb-4">{card.value}</p>
                <a href={card.href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:gap-2.5 transition-all duration-200">
                  {card.label}<ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
