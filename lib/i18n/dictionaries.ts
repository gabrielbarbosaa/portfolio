import type { ExpertiseKey } from "@/data/skills";

export type Lang = "pt" | "en" | "es";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export interface Dictionary {
  nav: {
    about: string;
    expertise: string;
    projects: string;
    experience: string;
    contact: string;
    blog: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    language: string;
  };
  hero: {
    available: string;
    role: string;
    summary: string;
    ctaPrimary: string;
    ctaSecondary: string;
    location: string;
    stats: { value: string; label: string }[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    howIWork: string;
    softSkills: string[];
    education: string;
    inProgress: string;
  };
  expertise: {
    label: string;
    title: string;
    subtitle: string;
    groups: Record<ExpertiseKey, { title: string; description: string }>;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewProject: string;
    allTitle: string;
    allSubtitle: string;
    backHome: string;
    count: string;
  };
  projectDetail: {
    back: string;
    role: string;
    period: string;
    client: string;
    overview: string;
    stack: string;
    features: string;
    challenges: string;
    live: string;
    allProjects: string;
    contact: string;
  };
  experience: {
    label: string;
    title: string;
    subtitle: string;
    current: string;
    downloadCv: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    emailCta: string;
    copy: string;
    copied: string;
  };
  footer: {
    tagline: string;
    rights: string;
    built: string;
  };
  blog: {
    label: string;
    title: string;
    subtitle: string;
    back: string;
    draft: string;
    minRead: string;
    empty: string;
    ptOnly: string;
  };
  palette: {
    trigger: string;
    placeholder: string;
    empty: string;
    groups: { navigation: string; projects: string; actions: string; links: string };
    allProjects: string;
    copyEmail: string;
    emailCopied: string;
    downloadCv: string;
    toggleTheme: string;
    language: string;
    hintNavigate: string;
    hintSelect: string;
    hintClose: string;
  };
}

export const dictionaries: Record<Lang, Dictionary> = {
  pt: {
    nav: {
      about: "Sobre",
      expertise: "Expertise",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      blog: "Blog",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      toggleTheme: "Alternar tema",
      language: "Idioma",
    },
    hero: {
      available: "Disponível para novas oportunidades",
      role: "Software Engineer",
      summary:
        "Mais de 5 anos construindo aplicações web e mobile com React, Next.js, React Native e TypeScript. Hoje cuido da arquitetura do Internet Banking da ATF Credit e atuo também no back-end, com serviços em Java e Python.",
      ctaPrimary: "Ver projetos",
      ctaSecondary: "Fale comigo",
      location: "Porto Alegre, Brasil",
      stats: [
        { value: "5+", label: "anos de experiência" },
        { value: "20+", label: "projetos em produção" },
        { value: "10+", label: "clientes e marcas atendidos" },
        { value: "Pix · TED", label: "fluxos bancários críticos" },
      ],
    },
    about: {
      label: "Sobre",
      title: "Engenharia com foco em produto, da interface ao serviço.",
      paragraphs: [
        "Sou Software Engineer com **mais de 5 anos** de experiência construindo e evoluindo aplicações web e mobile. Minha base é o front-end (**React, Next.js, React Native e TypeScript**), com atuação em arquitetura, micro front-ends e governança técnica.",
        "Na **ATF Credit**, sou responsável pela arquitetura do front-end do Internet Banking e das aplicações mobile, incluindo fluxos críticos como autenticação, sessão, **TED e Pix**. Também atuo no back-end com **Java e Python**, onde desenvolvi um serviço de comunicação para e-mails, notificações e códigos OTP.",
        "Gosto de decisões técnicas bem fundamentadas, código legível e times que compartilham conhecimento. Por isso, code review e boas práticas fazem parte do meu dia a dia.",
      ],
      howIWork: "Como eu trabalho",
      softSkills: [
        "Comunicação técnica",
        "Colaboração multidisciplinar",
        "Autonomia",
        "Resolução de problemas",
        "Pensamento analítico",
        "Visão de produto",
        "Compromisso com qualidade",
      ],
      education: "Formação",
      inProgress: "em andamento",
    },
    expertise: {
      label: "Expertise",
      title: "O que eu faço",
      subtitle:
        "O front-end continua sendo minha base, e o back-end tem ganhado cada vez mais espaço no meu trabalho.",
      groups: {
        frontend: {
          title: "Front-end",
          description:
            "Interfaces rápidas, acessíveis e escaláveis, com SSR/SSG e atenção a SEO e Core Web Vitals.",
        },
        backend: {
          title: "Back-end",
          description:
            "Serviços e APIs REST em Java, Python e Node.js/Nest.js, com PostgreSQL e MongoDB. Inclui disparo de e-mails, notificações e OTP.",
        },
        mobile: {
          title: "Mobile",
          description:
            "Apps em React Native com navegação fluida, persistência local e arquitetura offline-first.",
        },
        architecture: {
          title: "Arquitetura & qualidade",
          description:
            "Micro front-ends, padrões de código, componentização e code review para times que crescem.",
        },
        integrations: {
          title: "APIs & integrações",
          description:
            "Consumo de APIs, tempo real com WebSocket, mapas, gráficos e distribuição via CDN.",
        },
        state: {
          title: "Estado & formulários",
          description:
            "Estado previsível e formulários com validação tipada de ponta a ponta.",
        },
      },
    },
    projects: {
      label: "Projetos",
      title: "Trabalhos selecionados",
      subtitle:
        "Produtos em produção para fintechs, agências, varejo e plataformas de conteúdo.",
      viewAll: "Ver todos os projetos",
      viewProject: "Ver detalhes",
      allTitle: "Todos os projetos",
      allSubtitle:
        "Produtos bancários, plataformas de investimento, redes sociais, e-commerce, apps mobile e ferramentas internas.",
      backHome: "Voltar ao início",
      count: "projetos",
    },
    projectDetail: {
      back: "Todos os projetos",
      role: "Papel",
      period: "Período",
      client: "Cliente",
      overview: "Visão geral",
      stack: "Stack",
      features: "Principais entregas",
      challenges: "Desafios técnicos",
      live: "Ver projeto online",
      allProjects: "Todos os projetos",
      contact: "Vamos conversar",
    },
    experience: {
      label: "Experiência",
      title: "Trajetória profissional",
      subtitle:
        "Da agência ao setor bancário: projetos web, mobile e, mais recentemente, back-end.",
      current: "Atual",
      downloadCv: "Baixar currículo",
    },
    contact: {
      label: "Contato",
      title: "Vamos construir algo juntos?",
      subtitle:
        "Aberto a oportunidades como Software Engineer, projetos freelance e boas conversas sobre engenharia. Respondo em até 24h.",
      emailCta: "Enviar e-mail",
      copy: "Copiar e-mail",
      copied: "Copiado!",
    },
    footer: {
      tagline: "Software Engineer · Porto Alegre, BR",
      rights: "© {year} Gabriel Barbosa.",
      built: "Feito com Next.js e Tailwind CSS.",
    },
    blog: {
      label: "Blog",
      title: "Notas técnicas",
      subtitle:
        "Textos sobre engenharia de software, front-end, back-end e o que venho aprendendo no caminho.",
      back: "Voltar ao blog",
      draft: "Rascunho",
      minRead: "min de leitura",
      empty: "Nenhum post publicado ainda.",
      ptOnly: "Os posts estão disponíveis apenas em português.",
    },
    palette: {
      trigger: "Buscar",
      placeholder: "Busque uma página, projeto ou ação…",
      empty: "Nada encontrado.",
      groups: { navigation: "Navegação", projects: "Projetos", actions: "Ações", links: "Links" },
      allProjects: "Todos os projetos",
      copyEmail: "Copiar e-mail",
      emailCopied: "E-mail copiado!",
      downloadCv: "Baixar currículo",
      toggleTheme: "Alternar tema claro/escuro",
      language: "Idioma",
      hintNavigate: "navegar",
      hintSelect: "abrir",
      hintClose: "fechar",
    },
  },

  en: {
    nav: {
      about: "About",
      expertise: "Expertise",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      blog: "Blog",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toggleTheme: "Toggle theme",
      language: "Language",
    },
    hero: {
      available: "Open to new opportunities",
      role: "Software Engineer",
      summary:
        "5+ years building web and mobile applications with React, Next.js, React Native and TypeScript. I currently own the front-end architecture of ATF Credit's Internet Banking and also work on the back-end, building services in Java and Python.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
      location: "Porto Alegre, Brazil",
      stats: [
        { value: "5+", label: "years of experience" },
        { value: "20+", label: "projects in production" },
        { value: "10+", label: "clients and brands served" },
        { value: "Pix · TED", label: "critical banking flows" },
      ],
    },
    about: {
      label: "About",
      title: "Product-minded engineering, from interface to service.",
      paragraphs: [
        "I'm a Software Engineer with **5+ years** of experience building and evolving web and mobile applications. My foundation is front-end (**React, Next.js, React Native and TypeScript**), with hands-on work in architecture, micro front-ends and technical governance.",
        "At **ATF Credit**, I own the front-end architecture of the Internet Banking and mobile apps, including critical flows such as authentication, session management, **TED and Pix** transfers. I also work on the back-end with **Java and Python**, where I built a communication service for emails, notifications and OTP codes.",
        "I value well-reasoned technical decisions, readable code and teams that share knowledge, which is why code review and engineering best practices are part of my daily routine.",
      ],
      howIWork: "How I work",
      softSkills: [
        "Technical communication",
        "Cross-functional collaboration",
        "Autonomy",
        "Problem solving",
        "Analytical thinking",
        "Product mindset",
        "Commitment to quality",
      ],
      education: "Education",
      inProgress: "in progress",
    },
    expertise: {
      label: "Expertise",
      title: "What I do",
      subtitle:
        "Front-end is still my foundation, and back-end work is taking a growing share of what I do.",
      groups: {
        frontend: {
          title: "Front-end",
          description:
            "Fast, accessible and scalable interfaces with SSR/SSG and care for SEO and Core Web Vitals.",
        },
        backend: {
          title: "Back-end",
          description:
            "Services and REST APIs in Java, Python and Node.js/Nest.js, backed by PostgreSQL and MongoDB. Including email delivery, notifications and OTP.",
        },
        mobile: {
          title: "Mobile",
          description:
            "React Native apps with smooth navigation, local persistence and offline-first architecture.",
        },
        architecture: {
          title: "Architecture & quality",
          description:
            "Micro front-ends, code standards, component design and code review for growing teams.",
        },
        integrations: {
          title: "APIs & integrations",
          description:
            "API consumption, real-time with WebSocket, maps, charts and CDN-distributed widgets.",
        },
        state: {
          title: "State & forms",
          description:
            "Predictable state management and forms with end-to-end typed validation.",
        },
      },
    },
    projects: {
      label: "Projects",
      title: "Selected work",
      subtitle:
        "Products in production for fintechs, agencies, retail and content platforms.",
      viewAll: "View all projects",
      viewProject: "View details",
      allTitle: "All projects",
      allSubtitle:
        "Banking products, investment platforms, social networks, e-commerce, mobile apps and internal tools.",
      backHome: "Back to home",
      count: "projects",
    },
    projectDetail: {
      back: "All projects",
      role: "Role",
      period: "Period",
      client: "Client",
      overview: "Overview",
      stack: "Stack",
      features: "Key deliverables",
      challenges: "Technical challenges",
      live: "View live project",
      allProjects: "All projects",
      contact: "Let's talk",
    },
    experience: {
      label: "Experience",
      title: "Career",
      subtitle:
        "From agency work to banking: web, mobile and, more recently, back-end projects.",
      current: "Current",
      downloadCv: "Download résumé",
    },
    contact: {
      label: "Contact",
      title: "Let's build something together?",
      subtitle:
        "Open to Software Engineer roles, freelance projects and good conversations about engineering. I reply within 24h.",
      emailCta: "Send an email",
      copy: "Copy email",
      copied: "Copied!",
    },
    footer: {
      tagline: "Software Engineer · Porto Alegre, BR",
      rights: "© {year} Gabriel Barbosa.",
      built: "Built with Next.js and Tailwind CSS.",
    },
    blog: {
      label: "Blog",
      title: "Engineering notes",
      subtitle:
        "Writing about software engineering, front-end, back-end and what I've been learning along the way.",
      back: "Back to blog",
      draft: "Draft",
      minRead: "min read",
      empty: "No posts published yet.",
      ptOnly: "Posts are currently available in Portuguese only.",
    },
    palette: {
      trigger: "Search",
      placeholder: "Search for a page, project or action…",
      empty: "No results.",
      groups: { navigation: "Navigation", projects: "Projects", actions: "Actions", links: "Links" },
      allProjects: "All projects",
      copyEmail: "Copy email",
      emailCopied: "Email copied!",
      downloadCv: "Download résumé",
      toggleTheme: "Toggle light/dark theme",
      language: "Language",
      hintNavigate: "navigate",
      hintSelect: "open",
      hintClose: "close",
    },
  },

  es: {
    nav: {
      about: "Sobre mí",
      expertise: "Expertise",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      blog: "Blog",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      toggleTheme: "Cambiar tema",
      language: "Idioma",
    },
    hero: {
      available: "Disponible para nuevas oportunidades",
      role: "Software Engineer",
      summary:
        "Más de 5 años construyendo aplicaciones web y mobile con React, Next.js, React Native y TypeScript. Hoy me encargo de la arquitectura del Internet Banking de ATF Credit y también trabajo en el back-end, con servicios en Java y Python.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
      location: "Porto Alegre, Brasil",
      stats: [
        { value: "5+", label: "años de experiencia" },
        { value: "20+", label: "proyectos en producción" },
        { value: "10+", label: "clientes y marcas atendidos" },
        { value: "Pix · TED", label: "flujos bancarios críticos" },
      ],
    },
    about: {
      label: "Sobre mí",
      title: "Ingeniería con foco en producto, de la interfaz al servicio.",
      paragraphs: [
        "Soy Software Engineer con **más de 5 años** de experiencia construyendo y evolucionando aplicaciones web y mobile. Mi base es el front-end (**React, Next.js, React Native y TypeScript**), con experiencia en arquitectura, micro front-ends y gobernanza técnica.",
        "En **ATF Credit** soy responsable de la arquitectura del front-end del Internet Banking y de las aplicaciones mobile, incluyendo flujos críticos como autenticación, sesión, **TED y Pix**. También trabajo en el back-end con **Java y Python**, donde desarrollé un servicio de comunicación para e-mails, notificaciones y códigos OTP.",
        "Me gustan las decisiones técnicas bien fundamentadas, el código legible y los equipos que comparten conocimiento. Por eso el code review y las buenas prácticas forman parte de mi día a día.",
      ],
      howIWork: "Cómo trabajo",
      softSkills: [
        "Comunicación técnica",
        "Colaboración multidisciplinaria",
        "Autonomía",
        "Resolución de problemas",
        "Pensamiento analítico",
        "Visión de producto",
        "Compromiso con la calidad",
      ],
      education: "Formación",
      inProgress: "en curso",
    },
    expertise: {
      label: "Expertise",
      title: "Lo que hago",
      subtitle:
        "El front-end sigue siendo mi base, y el back-end gana cada vez más espacio en mi trabajo.",
      groups: {
        frontend: {
          title: "Front-end",
          description:
            "Interfaces rápidas, accesibles y escalables, con SSR/SSG y atención a SEO y Core Web Vitals.",
        },
        backend: {
          title: "Back-end",
          description:
            "Servicios y APIs REST en Java, Python y Node.js/Nest.js, con PostgreSQL y MongoDB. Incluye envío de e-mails, notificaciones y OTP.",
        },
        mobile: {
          title: "Mobile",
          description:
            "Apps en React Native con navegación fluida, persistencia local y arquitectura offline-first.",
        },
        architecture: {
          title: "Arquitectura y calidad",
          description:
            "Micro front-ends, estándares de código, componentización y code review para equipos que crecen.",
        },
        integrations: {
          title: "APIs e integraciones",
          description:
            "Consumo de APIs, tiempo real con WebSocket, mapas, gráficos y distribución vía CDN.",
        },
        state: {
          title: "Estado y formularios",
          description:
            "Estado predecible y formularios con validación tipada de punta a punta.",
        },
      },
    },
    projects: {
      label: "Proyectos",
      title: "Trabajos seleccionados",
      subtitle:
        "Productos en producción para fintechs, agencias, retail y plataformas de contenido.",
      viewAll: "Ver todos los proyectos",
      viewProject: "Ver detalles",
      allTitle: "Todos los proyectos",
      allSubtitle:
        "Productos bancarios, plataformas de inversión, redes sociales, e-commerce, apps mobile y herramientas internas.",
      backHome: "Volver al inicio",
      count: "proyectos",
    },
    projectDetail: {
      back: "Todos los proyectos",
      role: "Rol",
      period: "Período",
      client: "Cliente",
      overview: "Visión general",
      stack: "Stack",
      features: "Entregas principales",
      challenges: "Desafíos técnicos",
      live: "Ver proyecto en línea",
      allProjects: "Todos los proyectos",
      contact: "Hablemos",
    },
    experience: {
      label: "Experiencia",
      title: "Trayectoria profesional",
      subtitle:
        "De la agencia al sector bancario: proyectos web, mobile y, más recientemente, back-end.",
      current: "Actual",
      downloadCv: "Descargar CV",
    },
    contact: {
      label: "Contacto",
      title: "¿Construimos algo juntos?",
      subtitle:
        "Abierto a oportunidades como Software Engineer, proyectos freelance y buenas conversaciones sobre ingeniería. Respondo en hasta 24h.",
      emailCta: "Enviar e-mail",
      copy: "Copiar e-mail",
      copied: "¡Copiado!",
    },
    footer: {
      tagline: "Software Engineer · Porto Alegre, BR",
      rights: "© {year} Gabriel Barbosa.",
      built: "Hecho con Next.js y Tailwind CSS.",
    },
    blog: {
      label: "Blog",
      title: "Notas técnicas",
      subtitle:
        "Textos sobre ingeniería de software, front-end, back-end y lo que voy aprendiendo en el camino.",
      back: "Volver al blog",
      draft: "Borrador",
      minRead: "min de lectura",
      empty: "Todavía no hay posts publicados.",
      ptOnly: "Por ahora los posts están disponibles solo en portugués.",
    },
    palette: {
      trigger: "Buscar",
      placeholder: "Busca una página, proyecto o acción…",
      empty: "Sin resultados.",
      groups: { navigation: "Navegación", projects: "Proyectos", actions: "Acciones", links: "Enlaces" },
      allProjects: "Todos los proyectos",
      copyEmail: "Copiar e-mail",
      emailCopied: "¡E-mail copiado!",
      downloadCv: "Descargar CV",
      toggleTheme: "Cambiar tema claro/oscuro",
      language: "Idioma",
      hintNavigate: "navegar",
      hintSelect: "abrir",
      hintClose: "cerrar",
    },
  },
};
