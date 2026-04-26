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
    title: "Desenvolvedor Front-end Pleno",
    company: "CRIA Design Digital",
    location: "Viamão, RS",
    period: "2025 – Atual",
    description:
      "Atuação no desenvolvimento de aplicações web e mobile com React, React Native, Next.js e TypeScript. Experiência na criação de interfaces responsivas com Styled Components, Tailwind, Chakra e Mantine. Participação em todas as etapas do projeto, desde o levantamento de requisitos até o deploy, com foco em performance, manutenção e evolução de código. Trabalho colaborativo com times de design, produto e back-end para garantir entregas de qualidade.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mantine",
      "Chakra UI",
      "Styled Components",
      "React Native",
    ],
    isCurrent: true,
  },
  {
    title: "Desenvolvedor Front-end Pleno",
    company: "Zaply",
    location: "Porto Alegre, RS",
    period: "2024 – 2025",
    description:
      "Desenvolvimento de aplicações web e mobile com React, React Native, Next.js e TypeScript. Criação de interfaces responsivas com Styled Components, Tailwind, Chakra e Mantine. Atuação em sistemas escaláveis e de alta performance, com foco em qualidade por meio de testes automatizados (unitários e e2e). Participação ativa em todas as etapas do projeto — do levantamento de requisitos ao deploy — incluindo integrações com APIs externas, adaptação de layout para múltiplos dispositivos, planejamento técnico e code reviews. Colaboração constante com designers, PMs e back-end para entregas alinhadas ao produto.",
    technologies: ["React", "Chakra UI", "Zustand", "Vite", "TypeScript"],
  },
  {
    title: "Desenvolvedor Front-end Pleno",
    company: "CRIA Design Digital",
    location: "Viamão, RS",
    period: "2021 – 2024",
    description:
      "Atuação no desenvolvimento de aplicações web e mobile com React, React Native, Next.js e TypeScript. Experiência na criação de interfaces responsivas com Styled Components, Tailwind, Chakra e Mantine. Participação em todas as etapas do projeto, desde o levantamento de requisitos até o deploy, com foco em performance, manutenção e evolução de código. Trabalho colaborativo com times de design, produto e back-end para garantir entregas de qualidade.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mantine",
      "Chakra UI",
      "Styled Components",
      "React Native",
    ],
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
