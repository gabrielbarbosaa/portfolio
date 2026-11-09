import type { Project } from "../schemas";

/**
 * Dados iniciais dos projetos.
 * - `npm run db:seed` grava no MongoDB (só insere o que ainda não existe).
 * - Sem MONGODB_URI, o site lê direto daqui (modo sem banco).
 * Depois que o banco estiver populado, edite os projetos pelo admin, não aqui.
 */
type SeedProject = Omit<Project, "order" | "featuredOrder">;

/** Ordem dos destaques na home */
const featuredSlugs = ["atf-sociedade-de-credito-direto", "eqr-holding", "ulook", "zaply-recipes"];

const projects: SeedProject[] = [
  {
    slug: "atf-sociedade-de-credito-direto",
    year: "2026",
    technologies: ["Java", "Python", "REST APIs", "OTP"],
    content: {
      pt: {
        title: "ATF Sociedade de Crédito Direto",
        description:
          "Serviço back-end para envio de e-mails, notificações e geração e validação de códigos OTP, usado nos fluxos de autenticação do Internet Banking.",
        role: "Software Engineer (back-end)",
        longDescription:
          "Serviço de comunicação desenvolvido em Java e Python para a ATF Credit, banco onde atuo como Software Engineer. O serviço centraliza o disparo de e-mails, o envio de notificações e a geração e validação de códigos OTP (one-time password) usados em fluxos sensíveis do Internet Banking, como autenticação e confirmação de operações.",
        features: [
          "Disparo de e-mails transacionais a partir de um ponto único de integração",
          "Envio de notificações para os canais da plataforma",
          "Geração e validação de códigos OTP em fluxos de autenticação",
          "APIs REST consumidas pelas aplicações web e mobile",
        ],
        challenges: [
          "Tratar o OTP como dado sensível: validade curta, uso único e limite de tentativas",
          "Garantir confiabilidade em fluxos críticos, nos quais uma falha de envio bloqueia o usuário",
          "Desenhar um contrato de API simples, consumido por diferentes front-ends",
        ],
      },
      en: {
        title: "ATF Sociedade de Crédito Direto",
        description:
          "Back-end service for email delivery, notifications and OTP generation and validation, used in the Internet Banking authentication flows.",
        role: "Software Engineer (back-end)",
        longDescription:
          "Communication service built in Java and Python for ATF Credit, the bank where I work as a Software Engineer. The service centralizes transactional email delivery, notifications and the generation and validation of OTP (one-time password) codes used in sensitive Internet Banking flows, such as authentication and operation confirmation.",
        features: [
          "Transactional email delivery through a single integration point",
          "Notification delivery to the platform's channels",
          "OTP generation and validation in authentication flows",
          "REST APIs consumed by the web and mobile applications",
        ],
        challenges: [
          "Treating OTP as sensitive data: short expiry, single use and attempt limits",
          "Ensuring reliability in critical flows, where a failed delivery blocks the user",
          "Designing a simple API contract consumed by different front-ends",
        ],
      },
      es: {
        title: "ATF Sociedade de Crédito Direto",
        description:
          "Servicio back-end para envío de e-mails, notificaciones y generación y validación de códigos OTP, usado en los flujos de autenticación del Internet Banking.",
        role: "Software Engineer (back-end)",
        longDescription:
          "Servicio de comunicación desarrollado en Java y Python para ATF Credit, banco donde trabajo como Software Engineer. El servicio centraliza el envío de e-mails transaccionales, las notificaciones y la generación y validación de códigos OTP (one-time password) usados en flujos sensibles del Internet Banking, como autenticación y confirmación de operaciones.",
        features: [
          "Envío de e-mails transaccionales desde un único punto de integración",
          "Envío de notificaciones a los canales de la plataforma",
          "Generación y validación de códigos OTP en flujos de autenticación",
          "APIs REST consumidas por las aplicaciones web y mobile",
        ],
        challenges: [
          "Tratar el OTP como dato sensible: validez corta, uso único y límite de intentos",
          "Garantizar confiabilidad en flujos críticos, donde un fallo de envío bloquea al usuario",
          "Diseñar un contrato de API simple, consumido por distintos front-ends",
        ],
      },
    },
  },
  {
    slug: "eqr-holding",
    year: "2025",
    client: "CRIA Design Digital",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    content: {
      pt: {
        title: "EQR Holding",
        description:
          "Plataforma de investimentos de alto padrão com gráficos interativos, estado global e consumo dinâmico de dados.",
        role: "Desenvolvedor Front-end Pleno",
        longDescription:
          "Plataforma de investimentos de alto padrão com visualizações financeiras complexas, gráficos interativos e fluxos dinâmicos de dados. Foco em experiência premium, microinterações cuidadas e performance em telas com muitos dados.",
        features: [
          "Gráficos interativos para análise de portfólio",
          "Estado global com Zustand",
          "Consumo dinâmico de dados financeiros via API",
          "Design premium com microinterações refinadas",
        ],
        challenges: [
          "Renderizar grandes volumes de dados sem comprometer a responsividade",
          "Manter consistência visual em telas com alta densidade de informação",
          "Garantir confiabilidade na exibição de dados sensíveis de investidores",
        ],
      },
      en: {
        title: "EQR Holding",
        description:
          "High-end investment platform with interactive charts, global state and dynamic data consumption.",
        role: "Mid-level Front-end Developer",
        longDescription:
          "High-end investment platform with complex financial visualizations, interactive charts and dynamic data flows. Focused on a premium experience, polished micro-interactions and performance on data-heavy screens.",
        features: [
          "Interactive charts for portfolio analysis",
          "Global state with Zustand",
          "Dynamic financial data consumption via API",
          "Premium design with refined micro-interactions",
        ],
        challenges: [
          "Rendering large datasets without hurting responsiveness",
          "Keeping visual consistency on information-dense screens",
          "Reliably displaying sensitive investor data",
        ],
      },
      es: {
        title: "EQR Holding",
        description:
          "Plataforma de inversiones de alto nivel con gráficos interactivos, estado global y consumo dinámico de datos.",
        role: "Desarrollador Front-end Semi Senior",
        longDescription:
          "Plataforma de inversiones de alto nivel con visualizaciones financieras complejas, gráficos interactivos y flujos dinámicos de datos. Foco en una experiencia premium, microinteracciones cuidadas y rendimiento en pantallas con muchos datos.",
        features: [
          "Gráficos interactivos para análisis de portafolio",
          "Estado global con Zustand",
          "Consumo dinámico de datos financieros vía API",
          "Diseño premium con microinteracciones refinadas",
        ],
        challenges: [
          "Renderizar grandes volúmenes de datos sin afectar la respuesta de la interfaz",
          "Mantener consistencia visual en pantallas con alta densidad de información",
          "Mostrar con confiabilidad datos sensibles de inversores",
        ],
      },
    },
  },
  {
    slug: "ulook",
    year: "2025",
    client: "CRIA Design Digital",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    content: {
      pt: {
        title: "ULook",
        description:
          "Rede social voltada à moda, com site em Next.js focado em SEO e uma dashboard administrativa para gestão de conteúdo.",
        role: "Desenvolvedor Front-end Pleno",
        longDescription:
          "Rede social do universo da moda, com site principal em Next.js otimizado para SEO e experiência do usuário, e dashboard administrativa para gestão de usuários, conteúdo e moderação. Arquitetura pensada para escalar com o crescimento da base.",
        features: [
          "Feed social com renderização otimizada",
          "Dashboard administrativa para moderação e analytics",
          "SEO técnico para descoberta orgânica de perfis e posts",
          "Estrutura preparada para escalar",
        ],
        challenges: [
          "Equilibrar SSR com a interatividade típica de redes sociais",
          "Modelar permissões diferentes para usuários e administradores",
          "Garantir performance em feeds com muita mídia",
        ],
      },
      en: {
        title: "ULook",
        description:
          "Fashion-focused social network, with an SEO-driven Next.js website and an admin dashboard for content management.",
        role: "Mid-level Front-end Developer",
        longDescription:
          "Social network for the fashion world, with a main website in Next.js optimized for SEO and user experience, plus an admin dashboard for user, content and moderation management. Architecture designed to scale as the user base grows.",
        features: [
          "Social feed with optimized rendering",
          "Admin dashboard for moderation and analytics",
          "Technical SEO for organic discovery of profiles and posts",
          "Structure ready to scale",
        ],
        challenges: [
          "Balancing SSR with the interactivity typical of social networks",
          "Modeling different permissions for users and administrators",
          "Keeping performance on media-heavy feeds",
        ],
      },
      es: {
        title: "ULook",
        description:
          "Red social enfocada en la moda, con sitio en Next.js orientado a SEO y un panel administrativo para gestión de contenido.",
        role: "Desarrollador Front-end Semi Senior",
        longDescription:
          "Red social del universo de la moda, con sitio principal en Next.js optimizado para SEO y experiencia de usuario, y un panel administrativo para gestión de usuarios, contenido y moderación. Arquitectura pensada para escalar con el crecimiento de la base.",
        features: [
          "Feed social con renderizado optimizado",
          "Panel administrativo para moderación y analytics",
          "SEO técnico para descubrimiento orgánico de perfiles y posts",
          "Estructura preparada para escalar",
        ],
        challenges: [
          "Equilibrar SSR con la interactividad típica de redes sociales",
          "Modelar permisos distintos para usuarios y administradores",
          "Garantizar rendimiento en feeds con mucho contenido multimedia",
        ],
      },
    },
  },
  {
    slug: "zaply-recipes",
    year: "2024 – 2025",
    client: "Zaply",
    technologies: ["React", "TypeScript", "Vite", "Chakra UI", "Zustand"],
    content: {
      pt: {
        title: "Zaply · Compra Integrada",
        description:
          "Compra integrada de ingredientes para portais como Nestlé, Sadia e Qualy, feita em React e distribuída como script via CDN.",
        role: "Desenvolvedor Front-end Pleno",
        longDescription:
          "Solução que permite ao usuário comprar todos os ingredientes de uma receita direto do portal do parceiro (Nestlé, Sadia, Qualy, entre outros). O sistema foi desenvolvido em React e empacotado como um script distribuído via CDN, permitindo integração simples em vários portais com estilos isolados.",
        features: [
          "Distribuição via CDN com escopo isolado",
          "Integração plug-and-play em múltiplos portais",
          "Carrinho unificado entre marcas parceiras",
          "Build otimizado com Vite para um bundle leve",
        ],
        challenges: [
          "Empacotar React em um bundle leve e isolado para CDN",
          "Garantir compatibilidade com hosts diferentes e estilos legados",
          "Sincronizar o carrinho entre marcas mantendo a UX consistente",
        ],
      },
      en: {
        title: "Zaply · Integrated Checkout",
        description:
          "Integrated ingredient checkout for portals such as Nestlé, Sadia and Qualy, built in React and distributed as a CDN script.",
        role: "Mid-level Front-end Developer",
        longDescription:
          "A solution that lets users buy every ingredient of a recipe directly from the partner's portal (Nestlé, Sadia, Qualy and others). Built in React and bundled as a CDN-distributed script, enabling simple integration across multiple portals with isolated styles.",
        features: [
          "CDN distribution with isolated scope",
          "Plug-and-play integration across multiple portals",
          "Unified cart across partner brands",
          "Optimized Vite build for a lightweight bundle",
        ],
        challenges: [
          "Bundling React into a lightweight, isolated CDN script",
          "Ensuring compatibility with different hosts and legacy styles",
          "Syncing the cart across brands while keeping UX consistent",
        ],
      },
      es: {
        title: "Zaply · Compra Integrada",
        description:
          "Compra integrada de ingredientes para portales como Nestlé, Sadia y Qualy, hecha en React y distribuida como script vía CDN.",
        role: "Desarrollador Front-end Semi Senior",
        longDescription:
          "Solución que permite comprar todos los ingredientes de una receta directamente desde el portal del socio (Nestlé, Sadia, Qualy, entre otros). El sistema se desarrolló en React y se empaquetó como un script distribuido vía CDN, permitiendo una integración simple en varios portales con estilos aislados.",
        features: [
          "Distribución vía CDN con alcance aislado",
          "Integración plug-and-play en múltiples portales",
          "Carrito unificado entre marcas asociadas",
          "Build optimizado con Vite para un bundle liviano",
        ],
        challenges: [
          "Empaquetar React en un bundle liviano y aislado para CDN",
          "Garantizar compatibilidad con distintos hosts y estilos heredados",
          "Sincronizar el carrito entre marcas manteniendo una UX consistente",
        ],
      },
    },
  },
  {
    slug: "gptw",
    year: "2021 – 2022",
    client: "Great Place to Work",
    technologies: ["React", "TypeScript", "Chakra UI", "Zustand", "React Hook Form", "Yup"],
    demo: "https://gptw.com.br/",
    content: {
      pt: {
        title: "GPTW · Great Place to Work",
        description:
          "Novo sistema de questionários do GPTW, com micro front-end de autenticação focado em performance, escalabilidade e UX.",
        role: "Desenvolvedor Front-end",
        longDescription:
          "Participação no desenvolvimento do novo sistema de questionários do GPTW, com reformulação completa de interface e estrutura. Implementação de um micro front-end de autenticação com foco em performance, escalabilidade e UX, integrado de forma estável ao ecossistema existente.",
        features: [
          "Micro front-end de autenticação isolado e escalável",
          "Formulários com validação robusta via React Hook Form e Yup",
          "Estado leve com Zustand",
          "Componentes acessíveis com Chakra UI",
        ],
        challenges: [
          "Integrar o micro front-end ao sistema existente sem regressões",
          "Manter boa performance de carregamento com múltiplas integrações",
          "Garantir acessibilidade em fluxos críticos de autenticação",
        ],
      },
      en: {
        title: "GPTW · Great Place to Work",
        description:
          "GPTW's new survey system, including an authentication micro front-end focused on performance, scalability and UX.",
        role: "Front-end Developer",
        longDescription:
          "Contributed to GPTW's new survey system, with a complete overhaul of its interface and structure. Built an authentication micro front-end focused on performance, scalability and UX, integrated reliably with the existing ecosystem.",
        features: [
          "Isolated, scalable authentication micro front-end",
          "Robust form validation with React Hook Form and Yup",
          "Lightweight state with Zustand",
          "Accessible components with Chakra UI",
        ],
        challenges: [
          "Integrating the micro front-end into the existing system without regressions",
          "Keeping load performance high with multiple integrations",
          "Ensuring accessibility in critical authentication flows",
        ],
      },
      es: {
        title: "GPTW · Great Place to Work",
        description:
          "Nuevo sistema de encuestas de GPTW, con un micro front-end de autenticación enfocado en rendimiento, escalabilidad y UX.",
        role: "Desarrollador Front-end",
        longDescription:
          "Participación en el desarrollo del nuevo sistema de encuestas de GPTW, con una reformulación completa de interfaz y estructura. Implementación de un micro front-end de autenticación enfocado en rendimiento, escalabilidad y UX, integrado de forma estable al ecosistema existente.",
        features: [
          "Micro front-end de autenticación aislado y escalable",
          "Formularios con validación robusta vía React Hook Form y Yup",
          "Estado liviano con Zustand",
          "Componentes accesibles con Chakra UI",
        ],
        challenges: [
          "Integrar el micro front-end al sistema existente sin regresiones",
          "Mantener buen rendimiento de carga con múltiples integraciones",
          "Garantizar accesibilidad en flujos críticos de autenticación",
        ],
      },
    },
  },
  {
    slug: "locus-arquitetura",
    year: "2023",
    client: "Locus Arquitetura",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Slick", "Vercel"],
    demo: "https://www.locusarquitetura.arq.br/",
    content: {
      pt: {
        title: "Locus Arquitetura",
        description:
          "Site institucional de um escritório de arquitetura de Curitiba, com portfólio de projetos, história, equipe e gerenciamento de obras.",
        role: "Desenvolvedor Front-end (freelance)",
        longDescription:
          "Projeto freelance para a Locus Arquitetura, escritório de Curitiba fundado em 2009. O site apresenta a história e a equipe do escritório, o portfólio de projetos residenciais, comerciais e de interiores, e o serviço de gerenciamento de obras. Construído com Next.js (App Router) e TypeScript e publicado na Vercel, com foco em imagens de alta qualidade sem perder performance.",
        features: [
          "Hero com transição entre imagens dos projetos em destaque",
          "Portfólio com página dedicada e carrosséis de projetos",
          "Animações sutis de entrada com Framer Motion",
          "Imagens otimizadas com next/image e fontes com next/font",
          "Layout responsivo com Tailwind CSS e deploy na Vercel",
        ],
        challenges: [
          "Manter o carregamento rápido em um site guiado por fotografias grandes",
          "Traduzir a identidade do escritório em uma interface limpa e elegante",
          "Conduzir o projeto de ponta a ponta diretamente com o cliente",
        ],
      },
      en: {
        title: "Locus Arquitetura",
        description:
          "Website for an architecture firm in Curitiba, featuring its project portfolio, history, team and construction management services.",
        role: "Front-end Developer (freelance)",
        longDescription:
          "Freelance project for Locus Arquitetura, an architecture firm founded in 2009 in Curitiba, Brazil. The website presents the firm's history and team, its portfolio of residential, commercial and interior projects, and its construction management service. Built with Next.js (App Router) and TypeScript and deployed on Vercel, focused on high-quality imagery without sacrificing performance.",
        features: [
          "Hero with transitions between featured project images",
          "Dedicated portfolio page and project carousels",
          "Subtle entrance animations with Framer Motion",
          "Images optimized with next/image and fonts with next/font",
          "Responsive layout with Tailwind CSS, deployed on Vercel",
        ],
        challenges: [
          "Keeping load times fast on a site driven by large photographs",
          "Translating the firm's identity into a clean, elegant interface",
          "Running the project end to end directly with the client",
        ],
      },
      es: {
        title: "Locus Arquitetura",
        description:
          "Sitio institucional de un estudio de arquitectura de Curitiba, con portafolio de proyectos, historia, equipo y gestión de obras.",
        role: "Desarrollador Front-end (freelance)",
        longDescription:
          "Proyecto freelance para Locus Arquitetura, estudio de Curitiba fundado en 2009. El sitio presenta la historia y el equipo del estudio, su portafolio de proyectos residenciales, comerciales y de interiores, y el servicio de gestión de obras. Construido con Next.js (App Router) y TypeScript y publicado en Vercel, con foco en imágenes de alta calidad sin perder rendimiento.",
        features: [
          "Hero con transición entre imágenes de proyectos destacados",
          "Portafolio con página dedicada y carruseles de proyectos",
          "Animaciones sutiles de entrada con Framer Motion",
          "Imágenes optimizadas con next/image y fuentes con next/font",
          "Layout responsivo con Tailwind CSS y deploy en Vercel",
        ],
        challenges: [
          "Mantener una carga rápida en un sitio guiado por fotografías grandes",
          "Traducir la identidad del estudio en una interfaz limpia y elegante",
          "Llevar el proyecto de punta a punta directamente con el cliente",
        ],
      },
    },
  },
  {
    slug: "fogo-cruzado",
    year: "2021 – 2022",
    client: "CRIA Design Digital",
    technologies: ["React Native", "React", "TypeScript", "REST APIs"],
    demo: "https://fogocruzado.org.br/",
    content: {
      pt: {
        title: "Fogo Cruzado",
        description:
          "App mobile e site do Fogo Cruzado, plataforma de dados abertos sobre violência armada, integrados à API de ocorrências.",
        role: "Desenvolvedor Front-end",
        longDescription:
          "Desenvolvimento do aplicativo e do site do Fogo Cruzado, plataforma que reúne e divulga dados sobre tiroteios e violência armada nas regiões metropolitanas. O app permite acompanhar ocorrências, e o site institucional apresenta o projeto, seus dados e relatórios, ambos integrados à API da plataforma.",
        features: [
          "Aplicativo mobile para acompanhamento de ocorrências",
          "Site institucional responsivo",
          "Integração com a API de dados de ocorrências",
          "Interfaces claras para comunicar dados sensíveis ao público",
        ],
        challenges: [
          "Apresentar dados sensíveis de forma clara, confiável e acessível",
          "Manter consistência entre app e site consumindo a mesma API",
          "Garantir boa experiência em aparelhos e conexões variadas",
        ],
      },
      en: {
        title: "Fogo Cruzado",
        description:
          "Mobile app and website for Fogo Cruzado, an open-data platform on armed violence, integrated with its incidents API.",
        role: "Front-end Developer",
        longDescription:
          "Built the app and website for Fogo Cruzado, a platform that collects and publishes data on shootings and armed violence in Brazilian metropolitan areas. The app lets people follow incidents, and the website presents the project, its data and reports, both integrated with the platform's API.",
        features: [
          "Mobile app for following incidents",
          "Responsive institutional website",
          "Integration with the incidents data API",
          "Clear interfaces to communicate sensitive data to the public",
        ],
        challenges: [
          "Presenting sensitive data clearly, reliably and accessibly",
          "Keeping app and website consistent while consuming the same API",
          "Delivering a good experience across varied devices and connections",
        ],
      },
      es: {
        title: "Fogo Cruzado",
        description:
          "App mobile y sitio de Fogo Cruzado, plataforma de datos abiertos sobre violencia armada, integrados a su API de incidentes.",
        role: "Desarrollador Front-end",
        longDescription:
          "Desarrollo de la aplicación y del sitio de Fogo Cruzado, plataforma que reúne y divulga datos sobre tiroteos y violencia armada en regiones metropolitanas de Brasil. La app permite seguir incidentes, y el sitio institucional presenta el proyecto, sus datos e informes, ambos integrados a la API de la plataforma.",
        features: [
          "Aplicación mobile para seguimiento de incidentes",
          "Sitio institucional responsivo",
          "Integración con la API de datos de incidentes",
          "Interfaces claras para comunicar datos sensibles al público",
        ],
        challenges: [
          "Presentar datos sensibles de forma clara, confiable y accesible",
          "Mantener consistencia entre app y sitio consumiendo la misma API",
          "Garantizar una buena experiencia en dispositivos y conexiones variadas",
        ],
      },
    },
  },
  {
    slug: "fleetdesk",
    year: "2022 – 2024",
    client: "FleetDesk",
    technologies: ["React", "TypeScript", "Redux", "Bootstrap", "Jest", "WebSocket"],
    demo: "https://app.fleetdesk.io/login",
    content: {
      pt: {
        title: "FleetDesk",
        description:
          "Plataforma LogTech de gestão de frotas, com otimização de rotas, Google Maps e atualizações em tempo real via WebSocket.",
        role: "Desenvolvedor Front-end",
        longDescription:
          "Plataforma de gestão de frotas com foco em otimização de rotas e operação em tempo real. Implementação de drag and drop para organização de rotas, integração com Google Maps e comunicação em tempo real via WebSocket para atualização do status dos veículos.",
        features: [
          "Drag and drop para montar e reorganizar rotas",
          "Integração com Google Maps para visualização e geocoding",
          "Comunicação em tempo real via WebSocket",
          "Estado global com Redux para fluxos complexos",
          "Testes unitários com Jest",
        ],
        challenges: [
          "Renderizar muitos pontos no mapa sem perder performance",
          "Sincronizar o estado entre WebSocket e store global",
          "Manter o drag and drop fluido em listas longas",
        ],
      },
      en: {
        title: "FleetDesk",
        description:
          "LogTech fleet management platform with route optimization, Google Maps and real-time updates over WebSocket.",
        role: "Front-end Developer",
        longDescription:
          "Fleet management platform focused on route optimization and real-time operations. Implemented drag and drop for route planning, Google Maps integration and real-time communication over WebSocket for vehicle status updates.",
        features: [
          "Drag and drop to build and reorder routes",
          "Google Maps integration for visualization and geocoding",
          "Real-time communication over WebSocket",
          "Global state with Redux for complex flows",
          "Unit tests with Jest",
        ],
        challenges: [
          "Rendering many map points without losing performance",
          "Syncing state between WebSocket and the global store",
          "Keeping drag and drop smooth on long lists",
        ],
      },
      es: {
        title: "FleetDesk",
        description:
          "Plataforma LogTech de gestión de flotas, con optimización de rutas, Google Maps y actualizaciones en tiempo real vía WebSocket.",
        role: "Desarrollador Front-end",
        longDescription:
          "Plataforma de gestión de flotas enfocada en optimización de rutas y operación en tiempo real. Implementación de drag and drop para organizar rutas, integración con Google Maps y comunicación en tiempo real vía WebSocket para actualizar el estado de los vehículos.",
        features: [
          "Drag and drop para armar y reorganizar rutas",
          "Integración con Google Maps para visualización y geocoding",
          "Comunicación en tiempo real vía WebSocket",
          "Estado global con Redux para flujos complejos",
          "Tests unitarios con Jest",
        ],
        challenges: [
          "Renderizar muchos puntos en el mapa sin perder rendimiento",
          "Sincronizar el estado entre WebSocket y el store global",
          "Mantener el drag and drop fluido en listas largas",
        ],
      },
    },
  },
  {
    slug: "automotive-business",
    year: "2023 – 2024",
    client: "Automotive Business",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    demo: "https://www.automotivebusiness.com.br/",
    content: {
      pt: {
        title: "Automotive Business",
        description:
          "Plataforma de conteúdo para profissionais do setor automotivo e de mobilidade, com foco em SEO e performance.",
        role: "Desenvolvedor Front-end",
        longDescription:
          "Portal de notícias do setor automotivo construído em Next.js, com foco em performance, SEO e carregamento otimizado de conteúdo dinâmico. Estrutura preparada para alto volume de tráfego e indexação eficiente.",
        features: [
          "Geração estática incremental (ISR) para escalar publicações",
          "SEO técnico com metadados dinâmicos e dados estruturados",
          "Layout responsivo com Tailwind CSS",
          "Cache e fetching otimizados com TanStack Query",
          "Lazy loading de imagens e componentes pesados",
        ],
        challenges: [
          "Equilibrar SSR e ISR entre conteúdo dinâmico e estável",
          "Otimizar Core Web Vitals em páginas ricas em mídia",
          "Garantir a indexação correta de URLs e categorias",
        ],
      },
      en: {
        title: "Automotive Business",
        description:
          "Content platform for automotive and mobility professionals, focused on SEO and performance.",
        role: "Front-end Developer",
        longDescription:
          "Automotive industry news portal built with Next.js, focused on performance, SEO and optimized loading of dynamic content. Structured for high traffic and efficient search indexing.",
        features: [
          "Incremental Static Regeneration (ISR) to scale publishing",
          "Technical SEO with dynamic metadata and structured data",
          "Responsive layout with Tailwind CSS",
          "Optimized caching and fetching with TanStack Query",
          "Lazy loading of images and heavy components",
        ],
        challenges: [
          "Balancing SSR and ISR between dynamic and stable content",
          "Optimizing Core Web Vitals on media-rich pages",
          "Ensuring correct indexing of URLs and categories",
        ],
      },
      es: {
        title: "Automotive Business",
        description:
          "Plataforma de contenido para profesionales del sector automotriz y de movilidad, enfocada en SEO y rendimiento.",
        role: "Desarrollador Front-end",
        longDescription:
          "Portal de noticias del sector automotriz construido en Next.js, enfocado en rendimiento, SEO y carga optimizada de contenido dinámico. Estructura preparada para alto tráfico e indexación eficiente.",
        features: [
          "Regeneración estática incremental (ISR) para escalar publicaciones",
          "SEO técnico con metadatos dinámicos y datos estructurados",
          "Layout responsivo con Tailwind CSS",
          "Caché y fetching optimizados con TanStack Query",
          "Lazy loading de imágenes y componentes pesados",
        ],
        challenges: [
          "Equilibrar SSR e ISR entre contenido dinámico y estable",
          "Optimizar Core Web Vitals en páginas con mucho contenido multimedia",
          "Garantizar la indexación correcta de URLs y categorías",
        ],
      },
    },
  },
  {
    slug: "convergefy",
    year: "2023",
    client: "Convergefy",
    technologies: ["React", "TypeScript", "TanStack Query", "Stripe", "Material UI"],
    demo: "https://convergefy.com.br/",
    content: {
      pt: {
        title: "Convergefy",
        description:
          "Plataforma omnichannel que conecta todos os atendentes em um único WhatsApp, com acompanhamento do time em tempo real.",
        role: "Desenvolvedor Front-end",
        longDescription:
          "Plataforma omnichannel para gestão de atendimento via WhatsApp, com acompanhamento do time em tempo real e organização centralizada dos clientes. Integração com Stripe para assinaturas e cobrança recorrente.",
        features: [
          "Integração com Stripe para checkout e assinaturas",
          "Status dos atendentes sincronizado em tempo real",
          "Cache e revalidação de dados com TanStack Query",
          "Interface consistente com Material UI",
          "Multi-tenant com isolamento de dados por organização",
        ],
        challenges: [
          "Gerenciar estados assíncronos complexos em uma UI de tempo real",
          "Implementar fluxos de pagamento confiáveis com Stripe",
          "Manter consistência visual entre telas e perfis de usuário",
        ],
      },
      en: {
        title: "Convergefy",
        description:
          "Omnichannel platform that connects every support agent to a single WhatsApp number, with real-time team monitoring.",
        role: "Front-end Developer",
        longDescription:
          "Omnichannel platform for WhatsApp customer support, with real-time team monitoring and centralized customer management. Integrated with Stripe for subscriptions and recurring billing.",
        features: [
          "Stripe integration for checkout and subscriptions",
          "Real-time agent status sync",
          "Data caching and revalidation with TanStack Query",
          "Consistent interface with Material UI",
          "Multi-tenant with per-organization data isolation",
        ],
        challenges: [
          "Managing complex async state in a real-time UI",
          "Building reliable payment flows with Stripe",
          "Keeping visual consistency across screens and user roles",
        ],
      },
      es: {
        title: "Convergefy",
        description:
          "Plataforma omnicanal que conecta a todos los agentes en un único WhatsApp, con seguimiento del equipo en tiempo real.",
        role: "Desarrollador Front-end",
        longDescription:
          "Plataforma omnicanal para gestión de atención vía WhatsApp, con seguimiento del equipo en tiempo real y organización centralizada de clientes. Integración con Stripe para suscripciones y cobro recurrente.",
        features: [
          "Integración con Stripe para checkout y suscripciones",
          "Estado de los agentes sincronizado en tiempo real",
          "Caché y revalidación de datos con TanStack Query",
          "Interfaz consistente con Material UI",
          "Multi-tenant con aislamiento de datos por organización",
        ],
        challenges: [
          "Gestionar estados asíncronos complejos en una UI en tiempo real",
          "Implementar flujos de pago confiables con Stripe",
          "Mantener consistencia visual entre pantallas y perfiles de usuario",
        ],
      },
    },
  },
  {
    slug: "finantruck",
    year: "2022 – 2024",
    client: "CRIA Design Digital",
    technologies: ["React Native", "TypeScript", "Redux"],
    content: {
      pt: {
        title: "FinanTruck",
        description:
          "App de gestão financeira para caminhoneiros, com estado centralizado em Redux e validação robusta de formulários.",
        role: "Desenvolvedor Front-end Pleno",
        longDescription:
          "Aplicativo mobile de gestão financeira para motoristas autônomos, com controle de receitas, despesas e indicadores. Foco em navegação fluida, validações confiáveis e uma experiência pensada para o uso no dia a dia.",
        features: [
          "Estado centralizado com Redux",
          "Validação robusta de formulários",
          "Dashboards financeiros simples e acionáveis",
          "Experiência mobile pensada para uso em movimento",
        ],
        challenges: [
          "Modelar fluxos financeiros simples para um público não técnico",
          "Manter a interface resiliente em conexões instáveis",
          "Manter consistência entre estado local e dados sincronizados",
        ],
      },
      en: {
        title: "FinanTruck",
        description:
          "Financial management app for truck drivers, with centralized Redux state and robust form validation.",
        role: "Mid-level Front-end Developer",
        longDescription:
          "Mobile financial management app for independent drivers, tracking income, expenses and key indicators. Focused on smooth navigation, reliable validation and an experience designed for everyday use.",
        features: [
          "Centralized state with Redux",
          "Robust form validation",
          "Simple, actionable financial dashboards",
          "Mobile experience designed for use on the go",
        ],
        challenges: [
          "Modeling simple financial flows for a non-technical audience",
          "Keeping the interface resilient on unstable connections",
          "Keeping local state consistent with synced data",
        ],
      },
      es: {
        title: "FinanTruck",
        description:
          "App de gestión financiera para camioneros, con estado centralizado en Redux y validación robusta de formularios.",
        role: "Desarrollador Front-end Semi Senior",
        longDescription:
          "Aplicación mobile de gestión financiera para conductores autónomos, con control de ingresos, gastos e indicadores. Foco en navegación fluida, validaciones confiables y una experiencia pensada para el uso diario.",
        features: [
          "Estado centralizado con Redux",
          "Validación robusta de formularios",
          "Dashboards financieros simples y accionables",
          "Experiencia mobile pensada para usar en movimiento",
        ],
        challenges: [
          "Modelar flujos financieros simples para un público no técnico",
          "Mantener la interfaz resiliente con conexiones inestables",
          "Mantener consistencia entre el estado local y los datos sincronizados",
        ],
      },
    },
  },
  {
    slug: "bodetech",
    year: "2022 – 2024",
    client: "CRIA Design Digital",
    technologies: ["React Native", "TypeScript", "Realm", "Zustand"],
    content: {
      pt: {
        title: "Bodetech",
        description:
          "App offline-first para gestão de caprinos no campo, com persistência local via Realm e estado com Zustand.",
        role: "Desenvolvedor Front-end Pleno",
        longDescription:
          "Aplicativo mobile offline-first para gestão de caprinos no campo, com persistência local via Realm e sincronização posterior. Pensado para ambientes com pouca ou nenhuma conectividade, mantendo a operação contínua.",
        features: [
          "Persistência local com Realm para operar offline",
          "Sincronização quando há conectividade",
          "Estado com Zustand",
          "Fluxos otimizados para uso em campo",
        ],
        challenges: [
          "Modelar a sincronização offline-first com resolução de conflitos",
          "Otimizar consultas Realm em bases grandes",
          "Garantir uma UX confiável com rede instável",
        ],
      },
      en: {
        title: "Bodetech",
        description:
          "Offline-first app for goat herd management in the field, with local persistence via Realm and state with Zustand.",
        role: "Mid-level Front-end Developer",
        longDescription:
          "Offline-first mobile app for managing goat herds in the field, with local persistence via Realm and later synchronization. Designed for places with little or no connectivity, keeping operations running.",
        features: [
          "Local persistence with Realm to work offline",
          "Sync when connectivity is available",
          "State management with Zustand",
          "Flows optimized for field use",
        ],
        challenges: [
          "Modeling offline-first sync with conflict resolution",
          "Optimizing Realm queries on large datasets",
          "Ensuring reliable UX on unstable networks",
        ],
      },
      es: {
        title: "Bodetech",
        description:
          "App offline-first para gestión de caprinos en el campo, con persistencia local vía Realm y estado con Zustand.",
        role: "Desarrollador Front-end Semi Senior",
        longDescription:
          "Aplicación mobile offline-first para gestión de caprinos en el campo, con persistencia local vía Realm y sincronización posterior. Pensada para lugares con poca o ninguna conectividad, manteniendo la operación continua.",
        features: [
          "Persistencia local con Realm para operar offline",
          "Sincronización cuando hay conectividad",
          "Estado con Zustand",
          "Flujos optimizados para uso en el campo",
        ],
        challenges: [
          "Modelar la sincronización offline-first con resolución de conflictos",
          "Optimizar consultas Realm en bases grandes",
          "Garantizar una UX confiable con red inestable",
        ],
      },
    },
  },
];

export const seedProjects: Project[] = projects.map((project, index) => {
  const featured = featuredSlugs.indexOf(project.slug);
  return { ...project, order: index, featuredOrder: featured === -1 ? null : featured };
});
