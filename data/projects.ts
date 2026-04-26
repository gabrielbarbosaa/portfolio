export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  demo: string;
}

export const projects: Project[] = [
  {
    title: "GPTW - Great Place to Work",
    description:
      "Plataforma institucional com foco em SEO e performance. Implementação de SSR com Next.js para melhor indexação e experiência do usuário.",
    technologies: ["Next.js", "TypeScript", "Chakra UI"],
    highlights: ["SSR/SSG", "SEO Otimizado", "Performance", "Acessibilidade"],
    demo: "https://gptw.com.br/",
  },
  {
    title: "Convergefy",
    description:
      "Convergefy você conecta todos os seus atendentes em um único WhatsApp. Acompanha todo o seu time em tempo real e organiza seus clientes em uma única tela.",
    technologies: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "Stripe",
      "Material UI",
    ],
    highlights: ["Pagamentos", "Omnichannel"],
    demo: "https://convergefy.com.br/",
  },
  {
    title: "Automotive Business",
    description:
      "É uma plataforma de conteúdo voltada a profissionais responsáveis por construir novas respostas no setor automotivo e da mobilidade.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Tanstack Query"],
    highlights: ["SEO", "Blog", "Responsive", "Performance"],
    demo: "https://www.automotivebusiness.com.br/",
  },
  {
    title: "FleetDesk",
    description:
      "FleetDesk é uma empresa de tecnologia logística (LogTech) que oferece soluções de gestão de frota, com foco em otimização de rotas e gerenciamento em tempo real.",
    technologies: ["React", "TypeScript", "Bootstrap", "Redux", "Jest"],
    highlights: [
      "Google Maps",
      "Testes",
      "Otimização de Rotas",
      "Gestão em Tempo Real",
    ],
    demo: "https://app.fleetdesk.io/login",
  },
];
