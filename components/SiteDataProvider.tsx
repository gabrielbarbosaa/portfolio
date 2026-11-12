"use client";

import { createContext, useContext } from "react";
import type { Lang } from "@/lib/i18n/dictionaries";

/** Dados globais leves usados por componentes de cliente (menu e ⌘K). */
export interface SiteData {
  projects: {
    slug: string;
    client?: string;
    technologies: string[];
    titles: Record<Lang, string>;
  }[];
  hasPosts: boolean;
  hasStudies: boolean;
}

const SiteDataContext = createContext<SiteData>({
  projects: [],
  hasPosts: false,
  hasStudies: false,
});

export function SiteDataProvider({
  value,
  children,
}: {
  value: SiteData;
  children: React.ReactNode;
}) {
  return <SiteDataContext.Provider value={value}>{children}</SiteDataContext.Provider>;
}

export const useSiteData = () => useContext(SiteDataContext);
