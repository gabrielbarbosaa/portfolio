"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/I18nProvider";
import type { PageviewInput } from "@/db/schemas";

function deviceType(): PageviewInput["device"] {
  const width = window.innerWidth;
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

/**
 * Analytics próprio e minimalista: sem cookies, sem identificador entre
 * visitas, sem IP armazenado. Registra só o necessário para números
 * agregados, vistos no painel em /admin/analytics.
 */
export function PageviewTracker() {
  const pathname = usePathname();
  const { lang } = useI18n();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    const key = `${pathname}:${lang}`;
    if (lastTracked.current === key) return;
    lastTracked.current = key;

    const payload: PageviewInput = {
      path: pathname,
      referrer: document.referrer || undefined,
      lang,
      device: deviceType(),
    };

    try {
      const body = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
      } else {
        fetch("/api/track", {
          method: "POST",
          body,
          headers: { "Content-Type": "application/json" },
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Analytics nunca deve quebrar a navegação.
    }
  }, [pathname, lang]);

  return null;
}
