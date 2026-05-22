export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  isCurrent?: boolean;
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor Front-end Sênior",
    company: "ATF Credit Sociedade de Crédito Direto S/A",
    location: "Porto Alegre, RS",
    period: "Fev 2026 – Atual",
    description:
      "Responsável pela arquitetura e governança técnica do front-end das plataformas digitais bancárias (Internet Banking e Mobile). Lidero decisões do ecossistema front-end — definição de stack, padrões de desenvolvimento, organização de código e diretrizes arquiteturais — garantindo escalabilidade, consistência e evolução sustentável das aplicações. Atuação direta em fluxos críticos do sistema financeiro, como autenticação, sessões e transações, com foco em segurança, performance e confiabilidade. Atuo como referência técnica para o time, apoiando tomada de decisões, code reviews e disseminação de boas práticas.",
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
    ],
    isCurrent: true,
  },
  {
    title: "Desenvolvedor Front-end Pleno",
    company: "Cria Digital",
    location: "Viamão, RS",
    period: "Abr 2025 – Fev 2026",
    description:
      "Ulook — Desenvolvimento de uma rede social voltada à moda, com foco em SEO e experiência do usuário, atuando tanto no site principal (Next.js) quanto na dashboard administrativa, garantindo performance e escalabilidade. EQR Holding — Desenvolvimento de uma plataforma de investimentos de alto padrão, com gráficos interativos, controle de estado global e consumo dinâmico de dados, com foco em performance e experiência premium.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    title: "Desenvolvedor Front-end Pleno I",
    company: "Zaply",
    location: "Porto Alegre, RS",
    period: "Set 2024 – Abr 2025",
    description:
      "Desenvolvimento de uma solução de compra integrada de ingredientes para sites como Nestlé, Sadia e Qualy, permitindo ao usuário adquirir todos os itens de uma receita diretamente. Criação do sistema em React e conversão em script CDN para fácil integração com diferentes portais.",
    technologies: ["React", "TypeScript", "Chakra UI", "Zustand", "Vite"],
  },
  {
    title: "Desenvolvedor Front-end Pleno | React | React Native",
    company: "Cria Digital",
    location: "Viamão, RS",
    period: "Set 2022 – Ago 2024",
    description:
      "Atuação em múltiplos produtos web e mobile: FinanTruck (app de gestão financeira com Redux e validações robustas), Fogo Cruzado (site institucional responsivo com integração de APIs), SOS Água e Luz (site e dashboard com Google Maps e Google Charts), Fiquem Sabendo (portal de acesso a informações governamentais), Agenda Transparente (centralização de agenda de autoridades públicas), Bodetech (app offline-first com Realm e Zustand), FletDesk (plataforma de gestão de frotas com drag and drop, Google Maps e WebSocket) e Automotive Business (blog em Next.js com foco em SEO e performance).",
    technologies: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Redux",
      "Zustand",
      "Realm",
      "WebSocket",
    ],
  },
  {
    title: "Desenvolvedor Front-end Júnior",
    company: "Cria Digital",
    location: "Viamão, RS",
    period: "Set 2021 – Set 2022",
    description:
      "GPTW (Great Place to Work) — Participação no desenvolvimento do novo sistema de questionários, com reformulação de interface e estrutura, incluindo implementação de um micro front-end de autenticação com foco em performance, escalabilidade e UX.",
    technologies: [
      "React",
      "TypeScript",
      "Chakra UI",
      "Zustand",
      "React Hook Form",
      "Yup",
    ],
  },
  {
    title: "Desenvolvedor Front-end",
    company: "Tá No Bolso",
    location: "Remoto",
    period: "Mai 2021 – Ago 2021",
    description:
      "Atuação no desenvolvimento de interfaces web com foco em usabilidade e responsividade, contribuindo para a evolução do produto.",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Desenvolvedor de Software Front-end",
    company: "ilegra",
    location: "Porto Alegre, RS",
    period: "Ago 2020 – Dez 2020",
    description:
      "Desenvolvimento de aplicações front-end em projetos corporativos, com foco em qualidade de código, componentização e colaboração em times multidisciplinares.",
    technologies: ["React", "JavaScript", "TypeScript"],
  },
];

export const education: Education[] = [
  {
    title: "Bacharelado em Engenharia de Software (em andamento)",
    institution: "Universidade Cruzeiro do Sul",
    period: "2024 - 2028",
    description:
      "O curso abrange diversas áreas da tecnologia da informação, como programação, desenvolvimento web e mobile, banco de dados e gestão de projetos de software.",
  },
  {
    title: "Curso de HTML/CSS e JavaScript",
    institution: "TargetTrust",
    period: "2018",
    description:
      "Especialização em desenvolvimento web com foco em HTML, CSS e JavaScript.",
  },
  {
    title: "Curso de Orientação a Objetos com Java",
    institution: "TargetTrust",
    period: "2018",
    description:
      "Aprofundamento em conceitos de programação orientada a objetos utilizando Java, incluindo herança, polimorfismo e encapsulamento.",
  },
  {
    title: "Curso de Angular",
    institution: "TargetTrust",
    period: "2019",
    description:
      "Capacitação em desenvolvimento de aplicações web utilizando Angular.",
  },
  {
    title: "Curso de JavaScript Avançado",
    institution: "TargetTrust",
    period: "2019",
    description:
      "Aperfeiçoamento em JavaScript com foco em técnicas avançadas, incluindo ES6+ e padrões de design.",
  },
];
