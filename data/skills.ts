import type { Lang } from "@/lib/i18n/dictionaries";

/** Nome de tecnologia (igual em todos os idiomas) ou termo traduzido. */
export type SkillLabel = string | Record<Lang, string>;

export const skillLabel = (skill: SkillLabel, lang: Lang) =>
  typeof skill === "string" ? skill : skill[lang];

export type ExpertiseKey =
  | "frontend"
  | "backend"
  | "mobile"
  | "architecture"
  | "integrations"
  | "state";

export type Tone = "primary" | "secondary" | "accent";

export interface ExpertiseArea {
  key: ExpertiseKey;
  icon: "Monitor" | "Server" | "Smartphone" | "Boxes" | "Plug" | "Layers";
  tone: Tone;
  skills: SkillLabel[];
}

export const expertise: ExpertiseArea[] = [
  {
    key: "frontend",
    icon: "Monitor",
    tone: "primary",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Styled Components",
      "Chakra UI",
      "Material UI",
      "Hero UI",
    ],
  },
  {
    key: "backend",
    icon: "Server",
    tone: "secondary",
    skills: [
      "Java",
      "Python",
      "Node.js",
      "Nest.js",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      { pt: "E-mail & notificações", en: "Email & notifications", es: "E-mail y notificaciones" },
      "OTP",
    ],
  },
  {
    key: "mobile",
    icon: "Smartphone",
    tone: "primary",
    skills: ["React Native", "Expo", "Realm", "Offline-first"],
  },
  {
    key: "architecture",
    icon: "Boxes",
    tone: "accent",
    skills: [
      "Micro front-ends",
      { pt: "Componentização", en: "Component design", es: "Componentización" },
      "SPA / MPA",
      "Code review",
      { pt: "Acessibilidade", en: "Accessibility", es: "Accesibilidad" },
      "SEO",
      { pt: "Performance", en: "Performance", es: "Rendimiento" },
    ],
  },
  {
    key: "integrations",
    icon: "Plug",
    tone: "secondary",
    skills: [
      "Axios",
      "React Query",
      "WebSocket",
      "Google Maps API",
      "Google Charts",
      { pt: "Scripts via CDN", en: "CDN scripts", es: "Scripts vía CDN" },
    ],
  },
  {
    key: "state",
    icon: "Layers",
    tone: "primary",
    skills: [
      "Redux",
      "Zustand",
      "Context API",
      "React Hook Form",
      "Yup",
      "Zod",
    ],
  },
];
