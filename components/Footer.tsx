"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const rights = t.footer.rights.replace("{year}", String(new Date().getFullYear()));

  const links = [
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${profile.email}`, label: "E-mail", Icon: Mail },
  ];

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-fg">Gabriel Barbosa</p>
          <p className="mt-1 text-sm text-muted">{t.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-1">
          {links.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg"
            >
              <Icon className="size-[18px]" />
            </a>
          ))}
        </div>
      </div>
      <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p>{rights}</p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
