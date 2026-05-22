export interface ProjectDetails {
  role: string;
  year: string;
  client?: string;
  longDescription: string;
  features: string[];
  challenges: string[];
  repo?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  demo: string;
  details: ProjectDetails;
}

export const projects: Project[] = [
  {
    slug: "gptw",
    title: "GPTW - Great Place to Work",
    description:
      "Plataforma institucional com foco em SEO e performance. Implementação de SSR com Next.js para melhor indexação e experiência do usuário.",
    technologies: ["Next.js", "TypeScript", "Chakra UI"],
    highlights: ["SSR/SSG", "SEO Otimizado", "Performance", "Acessibilidade"],
    demo: "https://gptw.com.br/",
    details: {
      role: "Desenvolvedor Front-end",
      year: "2021 – 2022",
      client: "Great Place to Work",
      longDescription:
        "Participação no desenvolvimento do novo sistema de questionários da GPTW, com reformulação completa de interface e estrutura. Implementação de um micro front-end de autenticação com foco em performance, escalabilidade e UX, garantindo integração estável com o ecossistema existente da plataforma institucional.",
      features: [
        "Renderização server-side com Next.js para SEO",
        "Micro front-end de autenticação isolado e escalável",
        "Validação robusta de formulários com React Hook Form e Yup",
        "Gerenciamento de estado leve com Zustand",
        "Componentização acessível com Chakra UI",
      ],
      challenges: [
        "Integrar o micro front-end ao monolito existente sem regressões",
        "Garantir performance de carregamento mesmo com SSR e múltiplas integrações",
        "Manter acessibilidade em fluxos críticos de autenticação",
      ],
    },
  },
  {
    slug: "convergefy",
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
    details: {
      role: "Desenvolvedor Front-end",
      year: "2023",
      client: "Convergefy",
      longDescription:
        "Plataforma omnichannel para gestão de atendimento via WhatsApp, com acompanhamento em tempo real do time e organização centralizada dos clientes. Integração completa com Stripe para fluxo de assinaturas e cobrança recorrente.",
      features: [
        "Integração com Stripe para checkout e assinaturas",
        "Sincronização em tempo real do status dos atendentes",
        "Caching e revalidação de dados com Tanstack Query",
        "Interface consistente com Material UI",
        "Multi-tenant com isolamento de dados por organização",
      ],
      challenges: [
        "Gerenciar estados assíncronos complexos em uma UI de tempo real",
        "Implementar fluxos de pagamento confiáveis com Stripe",
        "Manter consistência visual entre múltiplas telas e perfis de usuário",
      ],
    },
  },
  {
    slug: "automotive-business",
    title: "Automotive Business",
    description:
      "É uma plataforma de conteúdo voltada a profissionais responsáveis por construir novas respostas no setor automotivo e da mobilidade.",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Tanstack Query"],
    highlights: ["SEO", "Blog", "Responsive", "Performance"],
    demo: "https://www.automotivebusiness.com.br/",
    details: {
      role: "Desenvolvedor Front-end",
      year: "2023 – 2024",
      client: "Automotive Business",
      longDescription:
        "Blog de notícias automotivas construído em Next.js, com foco em performance, SEO e carregamento otimizado de conteúdo dinâmico. Estrutura preparada para alto volume de tráfego e indexação eficiente em buscadores.",
      features: [
        "Geração estática incremental (ISR) para escalar publicações",
        "SEO técnico com metadados dinâmicos e dados estruturados",
        "Layout responsivo com TailwindCSS",
        "Cache e fetching otimizados com Tanstack Query",
        "Lazy loading de imagens e componentes pesados",
      ],
      challenges: [
        "Equilibrar SSR/ISR para conteúdo dinâmico e estável",
        "Otimizar Core Web Vitals em páginas ricas em mídia",
        "Garantir indexação correta de URLs e categorias",
      ],
    },
  },
  {
    slug: "fleetdesk",
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
    details: {
      role: "Desenvolvedor Front-end",
      year: "2022 – 2024",
      client: "FleetDesk",
      longDescription:
        "Plataforma de gestão de frotas com foco em otimização de rotas e operação em tempo real. Implementação de drag and drop para organização de rotas, integração com Google Maps e comunicação em tempo real via WebSocket para atualização de status dos veículos.",
      features: [
        "Drag and drop para montagem e reorganização de rotas",
        "Integração com Google Maps para visualização e geocoding",
        "Comunicação em tempo real via WebSocket",
        "Estado global com Redux para fluxos complexos",
        "Cobertura de testes unitários com Jest",
      ],
      challenges: [
        "Renderizar grandes volumes de pontos no mapa sem perda de performance",
        "Sincronizar estado entre WebSocket e store global",
        "Manter UX fluida em interações drag-and-drop sobre listas longas",
      ],
    },
  },
  {
    slug: "ulook",
    title: "Ulook",
    description:
      "Rede social voltada à moda com foco em SEO e experiência do usuário. Site principal em Next.js e dashboard administrativa para gestão de conteúdo.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: ["SEO", "Rede Social", "Dashboard", "Performance"],
    demo: "",
    details: {
      role: "Desenvolvedor Front-end Pleno",
      year: "2025",
      client: "Cria Digital",
      longDescription:
        "Rede social voltada ao universo da moda, com site principal em Next.js otimizado para SEO e experiência do usuário, e dashboard administrativa para gestão de usuários, conteúdo e moderação. Arquitetura pensada para escalar conforme o crescimento da base.",
      features: [
        "Feed social com renderização otimizada",
        "Dashboard administrativa para moderação e analytics",
        "SEO técnico para descoberta orgânica de perfis e posts",
        "Estrutura preparada para escalabilidade horizontal",
      ],
      challenges: [
        "Equilibrar SSR e interatividade típica de redes sociais",
        "Modelar permissões diferenciadas entre usuários e administradores",
        "Garantir performance em feeds com mídia rica",
      ],
    },
  },
  {
    slug: "eqr-holding",
    title: "EQR Holding",
    description:
      "Plataforma de investimentos de alto padrão com gráficos interativos, controle de estado global e consumo dinâmico de dados.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    highlights: ["Investimentos", "Gráficos", "Premium UX", "Performance"],
    demo: "",
    details: {
      role: "Desenvolvedor Front-end Pleno",
      year: "2025",
      client: "Cria Digital",
      longDescription:
        "Plataforma de investimentos de alto padrão com visualizações financeiras complexas, gráficos interativos e fluxos dinâmicos de dados. Foco em experiência premium, microinterações cuidadas e performance em telas pesadas em dados.",
      features: [
        "Gráficos interativos para análise de portfólio",
        "Controle de estado global com Zustand",
        "Consumo dinâmico de dados financeiros",
        "Design premium com microinterações refinadas",
      ],
      challenges: [
        "Renderizar grandes datasets sem comprometer responsividade",
        "Manter consistência visual em telas com alta densidade de informação",
        "Garantir confiabilidade em dados sensíveis de investidores",
      ],
    },
  },
  {
    slug: "zaply-recipes",
    title: "Zaply — Compra Integrada",
    description:
      "Solução de compra integrada de ingredientes para portais como Nestlé, Sadia e Qualy. Sistema em React convertido em script CDN para fácil integração.",
    technologies: ["React", "TypeScript", "Vite"],
    highlights: ["CDN", "Integração", "E-commerce", "Multi-portal"],
    demo: "",
    details: {
      role: "Desenvolvedor Front-End Pleno I",
      year: "2024 – 2025",
      client: "Zaply",
      longDescription:
        "Solução que permite ao usuário adquirir todos os ingredientes de uma receita diretamente a partir do portal do parceiro (Nestlé, Sadia, Qualy, entre outros). O sistema foi desenvolvido em React e convertido em um script distribuído via CDN, permitindo integração simples em múltiplos portais com estilos isolados.",
      features: [
        "Distribuição via CDN com isolamento de escopo",
        "Integração plug-and-play com múltiplos portais",
        "Carrinho unificado entre marcas parceiras",
        "Build otimizado com Vite para baixo footprint",
      ],
      challenges: [
        "Empacotar React em um bundle leve e isolado para CDN",
        "Garantir compatibilidade com diferentes hosts e estilos legados",
        "Sincronizar carrinho entre marcas mantendo UX consistente",
      ],
    },
  },
  {
    slug: "finantruck",
    title: "FinanTruck",
    description:
      "Aplicativo de gestão financeira para motoristas com controle de estado centralizado via Redux e validação robusta de formulários.",
    technologies: ["React Native", "TypeScript", "Redux"],
    highlights: ["Mobile", "Fintech", "UX", "Formulários"],
    demo: "",
    details: {
      role: "Desenvolvedor Front-end Pleno",
      year: "2022 – 2024",
      client: "Cria Digital",
      longDescription:
        "Aplicativo mobile de gestão financeira voltado para motoristas autônomos, com controle de receitas, despesas e indicadores. Foco em fluidez da navegação, validações confiáveis e experiência mobile otimizada para uso no dia a dia.",
      features: [
        "Controle centralizado de estado com Redux",
        "Validação robusta de formulários",
        "Dashboards financeiros simples e acionáveis",
        "Experiência mobile otimizada para uso em movimento",
      ],
      challenges: [
        "Modelar fluxos financeiros simples para um público não técnico",
        "Garantir resiliência da UI em conexões instáveis",
        "Manter consistência entre estado local e dados sincronizados",
      ],
    },
  },
  {
    slug: "bodetech",
    title: "Bodetech",
    description:
      "Aplicativo offline-first para gestão de caprinos com persistência local via Realm e gerenciamento de estado com Zustand.",
    technologies: ["React Native", "TypeScript", "Realm", "Zustand"],
    highlights: ["Offline-first", "Mobile", "AgroTech", "Realm"],
    demo: "",
    details: {
      role: "Desenvolvedor Front-end Pleno",
      year: "2022 – 2024",
      client: "Cria Digital",
      longDescription:
        "Aplicativo mobile offline-first para gestão de caprinos no campo, com persistência local de dados via Realm e sincronização posterior. Pensado para ambientes com pouca ou nenhuma conectividade, mantendo a operação contínua.",
      features: [
        "Persistência local com Realm para operação offline",
        "Sincronização inteligente quando há conectividade",
        "Gerenciamento de estado com Zustand",
        "Fluxos otimizados para uso em campo",
      ],
      challenges: [
        "Modelar sincronização offline-first com resolução de conflitos",
        "Otimizar consultas Realm em datasets grandes",
        "Garantir UX confiável em condições de rede instáveis",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
