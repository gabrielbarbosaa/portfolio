export type Lang = "pt" | "en" | "es";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export interface Dictionary {
  header: {
    operator: string;
    nav: {
      console: string;
      intel: string;
      missions: string;
      stack: string;
      logbook: string;
      channel: string;
    };
    menuLabel: string;
  };
  hero: {
    transmission: string;
    handshake: string;
    intro: {
      line1: string;
      line2: string;
      tags: string;
    };
    cta: {
      primary: string;
      secondary: string;
    };
    scroll: string;
    telemetry: {
      status: { label: string; value: string; detail: string };
      role: { label: string; value: string; detail: string };
      uptime: { label: string; value: string; detail: string };
      coordinates: string;
    };
  };
  ticker: string[];
  about: {
    section: { label: string; title: string; subtitle: string };
    briefing: string;
    paragraph1: string;
    paragraph2: string;
    skillGroups: {
      frontend: string;
      mobile: string;
      backend: string;
      tests: string;
    };
    telemetry: string;
    stats: {
      service: string;
      missions: string;
      partners: string;
      remote: string;
    };
  };
  projects: {
    section: { label: string; title: string; subtitle: string };
    archive: { label: string; description: string; cta: string };
    mission: string;
    open: string;
  };
  archive: {
    backToConsole: string;
    label: string;
    entries: string;
    title: string;
    subtitle: string;
  };
  projectDetail: {
    backToIndex: string;
    mission: string;
    preview: string;
    role: string;
    tenure: string;
    client: string;
    briefing: string;
    stack: string;
    deliverables: string;
    challenges: string;
    accessBuild: string;
    allMissions: string;
    openChannel: string;
  };
  skills: {
    section: { label: string; title: string; subtitle: string };
    coreFrameworks: string;
    tools: string;
    methodologies: string;
  };
  resume: {
    section: { label: string; title: string; subtitle: string };
    timeline: string;
    training: string;
    active: string;
    archived: string;
    downloadCv: string;
  };
  contact: {
    section: { label: string; title: string; subtitle: string };
    channelOpen: string;
    headline: string;
    description: string;
    schedule: string;
    location: string;
    response: string;
    echo: string;
    echoLine: string;
    echoCaption: string;
    cards: {
      email: { code: string; title: string; desc: string; label: string };
      whatsapp: { code: string; title: string; desc: string; label: string };
      github: { code: string; title: string; desc: string; label: string };
      linkedin: { code: string; title: string; desc: string; label: string };
    };
  };
  footer: {
    operatorTagline: string;
    coordinates: string;
    channels: string;
    rights: string;
    crafted: string;
  };
}

export const dictionaries: Record<Lang, Dictionary> = {
  pt: {
    header: {
      operator: "Operator",
      nav: {
        console: "Console",
        intel: "Intel",
        missions: "Missões",
        stack: "Stack",
        logbook: "Histórico",
        channel: "Canal",
      },
      menuLabel: "Menu",
    },
    hero: {
      transmission: "TRANSMISSÃO /001",
      handshake: "Iniciando handshake…",
      intro: {
        line1: "Engenheiro de interfaces operando",
        line2: "na fronteira",
        tags: "▸ React · Next.js · React Native · TypeScript",
      },
      cta: {
        primary: "Ver Missões",
        secondary: "Abrir Canal",
      },
      scroll: "scroll · descer para logs",
      telemetry: {
        status: {
          label: "STATUS",
          value: "ONLINE",
          detail: "Disponível para novos projetos",
        },
        role: {
          label: "FUNÇÃO",
          value: "Sr. FE Engineer",
          detail: "ATF · Internet Banking & Mobile",
        },
        uptime: {
          label: "UPTIME",
          value: "5y+ em serviço",
          detail: "20+ missões concluídas",
        },
        coordinates: "Coordenadas",
      },
    },
    ticker: [
      "SISTEMA ONLINE",
      "STATUS: DISPONÍVEL",
      "LAT -30.0277 · LON -51.2287",
      "UTC-03 · PORTO ALEGRE",
      "STACK: REACT · NEXT · RN · TS",
      "CANAL ABERTO — ACEITANDO TRANSMISSÕES",
      "UPTIME 5Y+",
      "REMOTO — MUNDIAL",
    ],
    about: {
      section: {
        label: "Intel",
        title: "Perfil do operador",
        subtitle:
          "Engenheiro de interfaces com cinco anos de campo, especializado em construir sistemas web e mobile resilientes — atualmente operando o front-end das plataformas bancárias da ATF.",
      },
      briefing: "Briefing",
      paragraph1:
        "Desenvolvedor sênior com **5+ anos** no front-end e mobile, atualmente liderando tecnicamente o ecossistema do **Internet Banking e App** da ATF — incluindo decisões de arquitetura, padronização e fluxos críticos como autenticação e transações.",
      paragraph2:
        "Domínio sólido em **React**, **Next.js** e **React Native**, com foco em TypeScript, performance, acessibilidade e componentização escalável.",
      skillGroups: {
        frontend: "FRONTEND",
        mobile: "MOBILE",
        backend: "BACKEND",
        tests: "TESTES",
      },
      telemetry: "Telemetria",
      stats: {
        service: "em serviço",
        missions: "missões deployadas",
        partners: "agências e bancos",
        remote: "operações remotas",
      },
    },
    projects: {
      section: {
        label: "Missões",
        title: "Trabalhos em produção",
        subtitle:
          "Missões concluídas em produção — bancos, fintechs, agências e plataformas de conteúdo.",
      },
      archive: {
        label: "Archive",
        description: "Catálogo completo com todas as missões deployadas.",
        cta: "Acessar archive",
      },
      mission: "MISSÃO",
      open: "Abrir",
    },
    archive: {
      backToConsole: "Voltar ao console",
      label: "Archive / Índice completo",
      entries: "entradas",
      title: "Todas as missões",
      subtitle:
        "Coleção completa das operações executadas — produtos bancários, fintechs, redes sociais, plataformas de conteúdo e ferramentas internas.",
    },
    projectDetail: {
      backToIndex: "Índice do archive",
      mission: "MISSÃO",
      preview: "◐ PREVIEW · COVER",
      role: "Função",
      tenure: "Período",
      client: "Cliente",
      briefing: "Briefing",
      stack: "Stack utilizada",
      deliverables: "Principais entregas",
      challenges: "Desafios de engenharia",
      accessBuild: "Acessar build ao vivo",
      allMissions: "Todas as missões",
      openChannel: "Abrir canal",
    },
    skills: {
      section: {
        label: "Stack",
        title: "Arsenal de combate",
        subtitle:
          "Tecnologias, frameworks e metodologias usadas em produção diária.",
      },
      coreFrameworks: "Frameworks principais",
      tools: "Ferramentas",
      methodologies: "Metodologias",
    },
    resume: {
      section: {
        label: "Histórico",
        title: "Histórico de missões",
        subtitle:
          "Registro cronológico das operações executadas — empresas, papéis e stack utilizada.",
      },
      timeline: "Linha do tempo",
      training: "Registros de formação",
      active: "ATIVO",
      archived: "ARQUIVADO",
      downloadCv: "Baixar CV",
    },
    contact: {
      section: {
        label: "Canal",
        title: "Transmissão aberta",
        subtitle:
          "Pronto para colaborar em novas missões — produto, banco digital, plataformas web e mobile.",
      },
      channelOpen: "Canal aberto",
      headline: "Aceitando novas operações remotas.",
      description:
        "Disponível para contratos full-time, freelas e consultorias técnicas em front-end e mobile.",
      schedule: "Seg–Sex · 09–18h",
      location: "UTC-03 · Porto Alegre, BR",
      response: "Resposta em até 24h",
      echo: "Resposta de eco",
      echoLine: "“Toda missão começa com um sinal claro.”",
      echoCaption: "— escolha o canal abaixo e envie sua transmissão.",
      cards: {
        email: {
          code: "TX/01",
          title: "Email",
          desc: "Canal principal · propostas formais",
          label: "Abrir transmissão",
        },
        whatsapp: {
          code: "TX/02",
          title: "WhatsApp",
          desc: "Frequência aberta · respostas rápidas",
          label: "Canal de voz",
        },
        github: {
          code: "TX/03",
          title: "GitHub",
          desc: "Repositórios e contribuições",
          label: "Inspecionar commits",
        },
        linkedin: {
          code: "TX/04",
          title: "LinkedIn",
          desc: "Rede profissional",
          label: "Estabelecer link",
        },
      },
    },
    footer: {
      operatorTagline:
        "Console operativo · Sr Front-End & Mobile · Porto Alegre, BR",
      coordinates: "Coordenadas",
      channels: "Canais",
      rights: "© {year} GB · TODAS AS TRANSMISSÕES RESERVADAS",
      crafted: "Construído com",
    },
  },

  en: {
    header: {
      operator: "Operator",
      nav: {
        console: "Console",
        intel: "Intel",
        missions: "Missions",
        stack: "Stack",
        logbook: "Logbook",
        channel: "Channel",
      },
      menuLabel: "Menu",
    },
    hero: {
      transmission: "TRANSMISSION /001",
      handshake: "Initiating handshake…",
      intro: {
        line1: "Interface engineer operating",
        line2: "at the edge of",
        tags: "▸ React · Next.js · React Native · TypeScript",
      },
      cta: {
        primary: "View Missions",
        secondary: "Open Channel",
      },
      scroll: "scroll · descend to logs",
      telemetry: {
        status: {
          label: "STATUS",
          value: "ONLINE",
          detail: "Available for new projects",
        },
        role: {
          label: "ROLE",
          value: "Sr. FE Engineer",
          detail: "ATF · Internet Banking & Mobile",
        },
        uptime: {
          label: "UPTIME",
          value: "5y+ in service",
          detail: "20+ missions completed",
        },
        coordinates: "Coordinates",
      },
    },
    ticker: [
      "SYSTEM ONLINE",
      "STATUS: AVAILABLE",
      "LAT -30.0277 · LON -51.2287",
      "UTC-03 · PORTO ALEGRE",
      "STACK: REACT · NEXT · RN · TS",
      "CHANNEL OPEN — ACCEPTING TRANSMISSIONS",
      "UPTIME 5Y+",
      "REMOTE — WORLDWIDE",
    ],
    about: {
      section: {
        label: "Intel",
        title: "Operator profile",
        subtitle:
          "Interface engineer with five years in the field, specialized in building resilient web and mobile systems — currently running the front-end of ATF's banking platforms.",
      },
      briefing: "Briefing",
      paragraph1:
        "Senior developer with **5+ years** in front-end and mobile, currently leading the **Internet Banking and App** ecosystem at ATF — including architecture, standardization, and critical flows like authentication and transactions.",
      paragraph2:
        "Strong command of **React**, **Next.js** and **React Native**, focused on TypeScript, performance, accessibility and scalable component design.",
      skillGroups: {
        frontend: "FRONTEND",
        mobile: "MOBILE",
        backend: "BACKEND",
        tests: "TESTS",
      },
      telemetry: "Telemetry",
      stats: {
        service: "in service",
        missions: "missions deployed",
        partners: "agencies & banks",
        remote: "remote ops",
      },
    },
    projects: {
      section: {
        label: "Missions",
        title: "Deployed work",
        subtitle:
          "Missions completed in production — banks, fintechs, agencies and content platforms.",
      },
      archive: {
        label: "Archive",
        description: "Full catalog of every deployed mission.",
        cta: "Open archive",
      },
      mission: "MISSION",
      open: "Open",
    },
    archive: {
      backToConsole: "Return to console",
      label: "Archive / Full Index",
      entries: "entries",
      title: "All missions",
      subtitle:
        "Complete collection of executed operations — banking products, fintechs, social networks, content platforms and internal tools.",
    },
    projectDetail: {
      backToIndex: "Archive index",
      mission: "MISSION",
      preview: "◐ PREVIEW · COVER",
      role: "Role",
      tenure: "Tenure",
      client: "Client",
      briefing: "Briefing",
      stack: "Stack deployed",
      deliverables: "Key deliverables",
      challenges: "Engineering challenges",
      accessBuild: "Access live build",
      allMissions: "All missions",
      openChannel: "Open channel",
    },
    skills: {
      section: {
        label: "Stack",
        title: "Combat-ready toolkit",
        subtitle:
          "Technologies, frameworks and methodologies used in daily production.",
      },
      coreFrameworks: "Core frameworks",
      tools: "Tools",
      methodologies: "Methodologies",
    },
    resume: {
      section: {
        label: "Logbook",
        title: "Mission history",
        subtitle:
          "Chronological record of executed operations — companies, roles and stack used.",
      },
      timeline: "Operations timeline",
      training: "Training records",
      active: "ACTIVE",
      archived: "ARCHIVED",
      downloadCv: "Download cv",
    },
    contact: {
      section: {
        label: "Channel",
        title: "Open transmission",
        subtitle:
          "Ready to collaborate on new missions — product, digital banking, web and mobile platforms.",
      },
      channelOpen: "Channel open",
      headline: "Accepting new remote operations.",
      description:
        "Available for full-time contracts, freelance and technical consulting in front-end and mobile.",
      schedule: "Mon–Fri · 9am–6pm",
      location: "UTC-03 · Porto Alegre, BR",
      response: "Response within 24h",
      echo: "Echo response",
      echoLine: "“Every mission begins with a clear signal.”",
      echoCaption: "— pick a channel below and send your transmission.",
      cards: {
        email: {
          code: "TX/01",
          title: "Email",
          desc: "Main channel · formal proposals",
          label: "Open transmission",
        },
        whatsapp: {
          code: "TX/02",
          title: "WhatsApp",
          desc: "Open frequency · quick replies",
          label: "Voice channel",
        },
        github: {
          code: "TX/03",
          title: "GitHub",
          desc: "Repositories and contributions",
          label: "Inspect commits",
        },
        linkedin: {
          code: "TX/04",
          title: "LinkedIn",
          desc: "Professional network",
          label: "Establish link",
        },
      },
    },
    footer: {
      operatorTagline:
        "Operative console · Sr Front-End & Mobile · Porto Alegre, BR",
      coordinates: "Coordinates",
      channels: "Channels",
      rights: "© {year} GB · ALL TRANSMISSIONS RESERVED",
      crafted: "Crafted with",
    },
  },

  es: {
    header: {
      operator: "Operator",
      nav: {
        console: "Consola",
        intel: "Intel",
        missions: "Misiones",
        stack: "Stack",
        logbook: "Bitácora",
        channel: "Canal",
      },
      menuLabel: "Menú",
    },
    hero: {
      transmission: "TRANSMISIÓN /001",
      handshake: "Iniciando handshake…",
      intro: {
        line1: "Ingeniero de interfaces operando",
        line2: "en la frontera",
        tags: "▸ React · Next.js · React Native · TypeScript",
      },
      cta: {
        primary: "Ver Misiones",
        secondary: "Abrir Canal",
      },
      scroll: "scroll · descender al logbook",
      telemetry: {
        status: {
          label: "ESTADO",
          value: "EN LÍNEA",
          detail: "Disponible para nuevos proyectos",
        },
        role: {
          label: "ROL",
          value: "Sr. FE Engineer",
          detail: "ATF · Internet Banking & Mobile",
        },
        uptime: {
          label: "UPTIME",
          value: "5+ años en servicio",
          detail: "20+ misiones completadas",
        },
        coordinates: "Coordenadas",
      },
    },
    ticker: [
      "SISTEMA EN LÍNEA",
      "ESTADO: DISPONIBLE",
      "LAT -30.0277 · LON -51.2287",
      "UTC-03 · PORTO ALEGRE",
      "STACK: REACT · NEXT · RN · TS",
      "CANAL ABIERTO — ACEPTANDO TRANSMISIONES",
      "UPTIME 5A+",
      "REMOTO — GLOBAL",
    ],
    about: {
      section: {
        label: "Intel",
        title: "Perfil del operador",
        subtitle:
          "Ingeniero de interfaces con cinco años de campo, especializado en construir sistemas web y mobile resilientes — actualmente operando el front-end de las plataformas bancarias de ATF.",
      },
      briefing: "Briefing",
      paragraph1:
        "Desarrollador senior con **5+ años** en front-end y mobile, actualmente liderando técnicamente el ecosistema del **Internet Banking y App** de ATF — incluyendo decisiones de arquitectura, estandarización y flujos críticos como autenticación y transacciones.",
      paragraph2:
        "Dominio sólido en **React**, **Next.js** y **React Native**, con foco en TypeScript, rendimiento, accesibilidad y componentes escalables.",
      skillGroups: {
        frontend: "FRONTEND",
        mobile: "MOBILE",
        backend: "BACKEND",
        tests: "TESTS",
      },
      telemetry: "Telemetría",
      stats: {
        service: "en servicio",
        missions: "misiones desplegadas",
        partners: "agencias y bancos",
        remote: "operaciones remotas",
      },
    },
    projects: {
      section: {
        label: "Misiones",
        title: "Trabajos desplegados",
        subtitle:
          "Misiones completadas en producción — bancos, fintechs, agencias y plataformas de contenido.",
      },
      archive: {
        label: "Archivo",
        description: "Catálogo completo de todas las misiones desplegadas.",
        cta: "Acceder al archivo",
      },
      mission: "MISIÓN",
      open: "Abrir",
    },
    archive: {
      backToConsole: "Volver a la consola",
      label: "Archivo / Índice completo",
      entries: "entradas",
      title: "Todas las misiones",
      subtitle:
        "Colección completa de las operaciones ejecutadas — productos bancarios, fintechs, redes sociales, plataformas de contenido y herramientas internas.",
    },
    projectDetail: {
      backToIndex: "Índice del archivo",
      mission: "MISIÓN",
      preview: "◐ PREVIEW · COVER",
      role: "Rol",
      tenure: "Período",
      client: "Cliente",
      briefing: "Briefing",
      stack: "Stack utilizada",
      deliverables: "Entregas principales",
      challenges: "Desafíos de ingeniería",
      accessBuild: "Acceder al build en vivo",
      allMissions: "Todas las misiones",
      openChannel: "Abrir canal",
    },
    skills: {
      section: {
        label: "Stack",
        title: "Kit de combate",
        subtitle:
          "Tecnologías, frameworks y metodologías usadas en producción diaria.",
      },
      coreFrameworks: "Frameworks principales",
      tools: "Herramientas",
      methodologies: "Metodologías",
    },
    resume: {
      section: {
        label: "Bitácora",
        title: "Historial de misiones",
        subtitle:
          "Registro cronológico de las operaciones ejecutadas — empresas, roles y stack utilizada.",
      },
      timeline: "Línea de tiempo",
      training: "Registros de formación",
      active: "ACTIVO",
      archived: "ARCHIVADO",
      downloadCv: "Descargar CV",
    },
    contact: {
      section: {
        label: "Canal",
        title: "Transmisión abierta",
        subtitle:
          "Listo para colaborar en nuevas misiones — producto, banca digital, plataformas web y mobile.",
      },
      channelOpen: "Canal abierto",
      headline: "Aceptando nuevas operaciones remotas.",
      description:
        "Disponible para contratos full-time, freelance y consultorías técnicas en front-end y mobile.",
      schedule: "Lun–Vie · 09–18h",
      location: "UTC-03 · Porto Alegre, BR",
      response: "Respuesta en hasta 24h",
      echo: "Eco de respuesta",
      echoLine: "«Toda misión comienza con una señal clara.»",
      echoCaption: "— elige el canal abajo y envía tu transmisión.",
      cards: {
        email: {
          code: "TX/01",
          title: "Email",
          desc: "Canal principal · propuestas formales",
          label: "Abrir transmisión",
        },
        whatsapp: {
          code: "TX/02",
          title: "WhatsApp",
          desc: "Frecuencia abierta · respuestas rápidas",
          label: "Canal de voz",
        },
        github: {
          code: "TX/03",
          title: "GitHub",
          desc: "Repositorios y contribuciones",
          label: "Inspeccionar commits",
        },
        linkedin: {
          code: "TX/04",
          title: "LinkedIn",
          desc: "Red profesional",
          label: "Establecer enlace",
        },
      },
    },
    footer: {
      operatorTagline:
        "Consola operativa · Sr Front-End & Mobile · Porto Alegre, BR",
      coordinates: "Coordenadas",
      channels: "Canales",
      rights: "© {year} GB · TODAS LAS TRANSMISIONES RESERVADAS",
      crafted: "Construido con",
    },
  },
};
