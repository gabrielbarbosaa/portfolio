import type { Lang } from "@/lib/i18n/dictionaries";

type L<T> = Record<Lang, T>;

export interface Experience {
  company: string;
  role: L<string>;
  location: L<string>;
  period: L<string>;
  bullets: L<string[]>;
  technologies: string[];
  isCurrent?: boolean;
}

export interface Education {
  title: L<string>;
  institution: string;
  period: string;
  inProgress?: boolean;
}

const POA: L<string> = { pt: "Porto Alegre, RS", en: "Porto Alegre, Brazil", es: "Porto Alegre, Brasil" };
const VIAMAO: L<string> = { pt: "Viamão, RS", en: "Viamão, Brazil", es: "Viamão, Brasil" };

export const experiences: Experience[] = [
  {
    company: "ATF Credit",
    isCurrent: true,
    role: {
      pt: "Desenvolvedor Front-end Sênior",
      en: "Senior Front-end Developer",
      es: "Desarrollador Front-end Senior",
    },
    location: POA,
    period: { pt: "fev. 2026 – atual", en: "Feb 2026 – present", es: "feb. 2026 – actual" },
    bullets: {
      pt: [
        "Responsável pela arquitetura e governança técnica do front-end de plataformas digitais bancárias, incluindo Internet Banking e aplicações mobile.",
        "Condução de decisões sobre stack, padrões de desenvolvimento, organização de código, componentização e diretrizes arquitetônicas, visando escalabilidade e evolução sustentável.",
        "Desenvolvimento e evolução de fluxos críticos do setor financeiro, como autenticação, gestão de sessão e transações bancárias, com foco em segurança, performance e confiabilidade.",
        "Desenvolvimento dos módulos de TED e Pix do Internet Banking.",
        "Atuação no back-end com Java e Python, incluindo um serviço de comunicação para disparo de e-mails, envio de notificações e geração e validação de códigos OTP.",
        "Referência técnica do time de front-end em decisões de arquitetura, code reviews e disseminação de boas práticas.",
      ],
      en: [
        "Own the front-end architecture and technical governance of digital banking platforms, including Internet Banking and mobile apps.",
        "Lead decisions on stack, development standards, code organization, component design and architectural guidelines, aiming at scalability and sustainable evolution.",
        "Build and evolve critical financial flows such as authentication, session management and banking transactions, focusing on security, performance and reliability.",
        "Built the TED and Pix transfer modules of the Internet Banking platform.",
        "Back-end work with Java and Python, including a communication service for email delivery, notifications and OTP generation and validation.",
        "Technical reference for the front-end team in architecture decisions, code reviews and engineering best practices.",
      ],
      es: [
        "Responsable de la arquitectura y la gobernanza técnica del front-end de plataformas bancarias digitales, incluyendo Internet Banking y aplicaciones mobile.",
        "Conducción de decisiones sobre stack, estándares de desarrollo, organización del código, componentización y lineamientos de arquitectura, buscando escalabilidad y evolución sostenible.",
        "Desarrollo y evolución de flujos críticos del sector financiero, como autenticación, gestión de sesión y transacciones bancarias, con foco en seguridad, rendimiento y confiabilidad.",
        "Desarrollo de los módulos de TED y Pix del Internet Banking.",
        "Trabajo en el back-end con Java y Python, incluyendo un servicio de comunicación para envío de e-mails, notificaciones y generación y validación de códigos OTP.",
        "Referente técnico del equipo de front-end en decisiones de arquitectura, code reviews y difusión de buenas prácticas.",
      ],
    },
    technologies: ["React", "Next.js", "React Native", "TypeScript", "Java", "Python"],
  },
  {
    company: "CRIA Design Digital",
    role: {
      pt: "Desenvolvedor Front-end Pleno",
      en: "Mid-level Front-end Developer",
      es: "Desarrollador Front-end Semi Senior",
    },
    location: VIAMAO,
    period: { pt: "mai. 2025 – jan. 2026", en: "May 2025 – Jan 2026", es: "may. 2025 – ene. 2026" },
    bullets: {
      pt: [
        "Desenvolvimento do site em Next.js e da dashboard administrativa da ULook, rede social do segmento de moda, com foco em SEO, performance e experiência do usuário.",
        "Desenvolvimento de uma plataforma de investimentos para a EQR Holding, com gráficos interativos, estado global e integração com APIs para apresentação dinâmica de dados.",
      ],
      en: [
        "Built the Next.js website and admin dashboard for ULook, a fashion-focused social network, with a focus on SEO, performance and user experience.",
        "Built an investment platform for EQR Holding, with interactive charts, global state and API integrations for dynamic data presentation.",
      ],
      es: [
        "Desarrollo del sitio en Next.js y del panel administrativo de ULook, red social del segmento de moda, con foco en SEO, rendimiento y experiencia de usuario.",
        "Desarrollo de una plataforma de inversiones para EQR Holding, con gráficos interactivos, estado global e integración con APIs para la presentación dinámica de datos.",
      ],
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    company: "Zaply",
    role: {
      pt: "Desenvolvedor Front-end Pleno",
      en: "Mid-level Front-end Developer",
      es: "Desarrollador Front-end Semi Senior",
    },
    location: POA,
    period: { pt: "set. 2024 – abr. 2025", en: "Sep 2024 – Apr 2025", es: "sep. 2024 – abr. 2025" },
    bullets: {
      pt: [
        "Desenvolvimento de uma solução de compra integrada de ingredientes para portais de marcas como Nestlé, Sadia e Qualy.",
        "Implementação da experiência de compra em React e adaptação para distribuição via script CDN, permitindo integração com diferentes sites.",
      ],
      en: [
        "Built an integrated ingredient checkout for brand portals such as Nestlé, Sadia and Qualy.",
        "Implemented the shopping experience in React and adapted it for distribution as a CDN script, enabling integration with different websites.",
      ],
      es: [
        "Desarrollo de una solución de compra integrada de ingredientes para portales de marcas como Nestlé, Sadia y Qualy.",
        "Implementación de la experiencia de compra en React y adaptación para su distribución vía script CDN, permitiendo la integración con distintos sitios.",
      ],
    },
    technologies: ["React", "TypeScript", "Chakra UI", "Zustand", "Vite"],
  },
  {
    company: "CRIA Design Digital",
    role: {
      pt: "Desenvolvedor Front-end Júnior / Pleno",
      en: "Junior / Mid-level Front-end Developer",
      es: "Desarrollador Front-end Junior / Semi Senior",
    },
    location: VIAMAO,
    period: { pt: "set. 2021 – set. 2024", en: "Sep 2021 – Sep 2024", es: "sep. 2021 – sep. 2024" },
    bullets: {
      pt: [
        "Aplicações web e mobile para clientes como GPTW, FinanTruck, Fogo Cruzado, SOS Água e Luz, Fiquem Sabendo, Agenda Transparente, Bodetech, FleetDesk e Automotive Business.",
        "Micro front-end de autenticação para o GPTW com React, TypeScript, Chakra UI, Zustand, React Hook Form e Yup.",
        "Aplicações responsivas e dashboards integrados com APIs, Google Maps, Google Charts e WebSocket.",
        "Funcionalidades offline-first com Realm e interfaces com foco em acessibilidade, usabilidade e confiabilidade.",
        "Aplicações Next.js priorizando SEO, responsividade e carregamento otimizado de conteúdo dinâmico.",
      ],
      en: [
        "Web and mobile applications for clients such as GPTW, FinanTruck, Fogo Cruzado, SOS Água e Luz, Fiquem Sabendo, Agenda Transparente, Bodetech, FleetDesk and Automotive Business.",
        "Authentication micro front-end for GPTW with React, TypeScript, Chakra UI, Zustand, React Hook Form and Yup.",
        "Responsive applications and dashboards integrated with APIs, Google Maps, Google Charts and WebSocket.",
        "Offline-first features with Realm and interfaces focused on accessibility, usability and reliability.",
        "Next.js applications prioritizing SEO, responsiveness and optimized loading of dynamic content.",
      ],
      es: [
        "Aplicaciones web y mobile para clientes como GPTW, FinanTruck, Fogo Cruzado, SOS Água e Luz, Fiquem Sabendo, Agenda Transparente, Bodetech, FleetDesk y Automotive Business.",
        "Micro front-end de autenticación para GPTW con React, TypeScript, Chakra UI, Zustand, React Hook Form y Yup.",
        "Aplicaciones responsivas y dashboards integrados con APIs, Google Maps, Google Charts y WebSocket.",
        "Funcionalidades offline-first con Realm e interfaces enfocadas en accesibilidad, usabilidad y confiabilidad.",
        "Aplicaciones Next.js priorizando SEO, responsividad y carga optimizada de contenido dinámico.",
      ],
    },
    technologies: ["React", "React Native", "Next.js", "TypeScript", "Redux", "Zustand", "Realm", "WebSocket"],
  },
  {
    company: "Tá No Bolso",
    role: { pt: "Desenvolvedor Front-end", en: "Front-end Developer", es: "Desarrollador Front-end" },
    location: { pt: "Remoto", en: "Remote", es: "Remoto" },
    period: { pt: "mai. 2021 – ago. 2021", en: "May 2021 – Aug 2021", es: "may. 2021 – ago. 2021" },
    bullets: {
      pt: ["Desenvolvimento de interfaces web com foco em usabilidade e responsividade, contribuindo para a evolução do produto."],
      en: ["Built web interfaces focused on usability and responsiveness, contributing to the product's evolution."],
      es: ["Desarrollo de interfaces web enfocadas en usabilidad y responsividad, contribuyendo a la evolución del producto."],
    },
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    company: "ilegra",
    role: {
      pt: "Desenvolvedor de Software Front-end",
      en: "Front-end Software Developer",
      es: "Desarrollador de Software Front-end",
    },
    location: POA,
    period: { pt: "ago. 2020 – dez. 2020", en: "Aug 2020 – Dec 2020", es: "ago. 2020 – dic. 2020" },
    bullets: {
      pt: ["Desenvolvimento front-end em projetos corporativos, com foco em qualidade de código, componentização e colaboração em times multidisciplinares."],
      en: ["Front-end development on corporate projects, focused on code quality, component design and collaboration in cross-functional teams."],
      es: ["Desarrollo front-end en proyectos corporativos, con foco en calidad de código, componentización y colaboración en equipos multidisciplinarios."],
    },
    technologies: ["React", "JavaScript", "TypeScript"],
  },
];

export const education: Education[] = [
  {
    title: {
      pt: "Bacharelado em Engenharia de Software",
      en: "B.Sc. in Software Engineering",
      es: "Licenciatura en Ingeniería de Software",
    },
    institution: "Universidade Cruzeiro do Sul",
    period: "2024 – 2028",
    inProgress: true,
  },
  {
    title: { pt: "JavaScript Avançado", en: "Advanced JavaScript", es: "JavaScript Avanzado" },
    institution: "TargetTrust",
    period: "2019",
  },
  {
    title: { pt: "Angular", en: "Angular", es: "Angular" },
    institution: "TargetTrust",
    period: "2019",
  },
  {
    title: {
      pt: "Orientação a Objetos com Java",
      en: "Object-Oriented Programming with Java",
      es: "Programación Orientada a Objetos con Java",
    },
    institution: "TargetTrust",
    period: "2018",
  },
  {
    title: { pt: "HTML, CSS e JavaScript", en: "HTML, CSS and JavaScript", es: "HTML, CSS y JavaScript" },
    institution: "TargetTrust",
    period: "2018",
  },
];
