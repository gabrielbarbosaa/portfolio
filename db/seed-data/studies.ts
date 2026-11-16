import type { Study } from "../schemas";

/**
 * Dados iniciais dos projetos de estudo.
 * - `npm run db:seed` grava no MongoDB (só insere o que ainda não existe).
 * - Sem MONGODB_URI, o site lê direto daqui (modo sem banco).
 * Depois que o banco estiver populado, edite os estudos pelo admin, não aqui.
 */
type SeedStudy = Omit<Study, "order">;
const studies: SeedStudy[] = [
  {
    slug: "moonlight",
    repo: "moonlight",
    year: "2026",
    status: "done",
    demo: "https://moonlight.gabrielbarbosadev.com.br/",
    technologies: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Zod",
      "TensorFlow.js",
      "nsfwjs",
      "sharp",
      "Docker",
      "Caddy",
      "TanStack Query",
      "Turborepo",
      "pnpm",
    ],
    content: {
      pt: {
        title: "Moonlight",
        description:
          "Plataforma multi-tenant para montar páginas pessoais por blocos, com moderação de imagens por IA (NSFW), upload otimizado e deploy próprio.",
        longDescription:
          "Moonlight é um projeto de estudo e portfólio: uma plataforma multi-tenant em que cada cliente monta sua página a partir de blocos (header, hero, links, texto, rodapé) e a publica no próprio subdomínio. É um monorepo pnpm + Turborepo com Next.js 15 no front e NestJS + Prisma sobre PostgreSQL no back. As páginas são guardadas como JSONB versionado e validadas pelo mesmo schema Zod no front e no back. Um dos pontos mais interessantes é o upload de imagens: cada arquivo passa por um pipeline que valida o formato real, reencoda com sharp e passa por uma moderação NSFW rodando localmente, sem depender de API externa. O projeto roda 100% local e sem custo, e está publicado com a API numa VPS (Docker + Caddy) e o front na Vercel.",
        features: [
          "Páginas montadas por blocos, armazenadas como JSONB com schemaVersion e validadas pelo mesmo schema Zod no front e no back",
          "Multi-tenant por subdomínio (ex.: maria.localhost), com fallback por caminho em /s/[tenant]",
          "Moderação de imagens NSFW com nsfwjs (MobileNetV2) + TensorFlow.js, rodando numa worker thread: a imagem é pré-processada com sharp e rejeitada se a soma das notas Porn + Hentai passar de um limite configurável (padrão 0,6)",
          "Upload com sharp: detecta o formato real (JPEG, PNG, WebP, GIF), corrige a orientação EXIF, limita o tamanho, descarta metadados e converte tudo para WebP",
          "Proteções no upload: rate limit de 40 imagens por hora por usuário, limite de pixels contra decompression bomb e cota por plano",
          "Storage atrás de uma interface (hoje disco local), pronto para trocar por um bucket sem mexer no domínio; e-mail e cobrança seguem o mesmo padrão de adapters",
          "Cookie de sessão host-only no domínio principal, para que as páginas dos clientes nunca recebam a sessão do admin",
          "Redis para cache, filas e contadores, e Mailpit para testar e-mails em desenvolvimento",
        ],
        challenges: [
          "Rodar um modelo de IA dentro do Node sem travar a API: o TensorFlow.js fica numa worker thread, com timeout por imagem, respawn automático e erros 503 amigáveis",
          "Equilibrar falsos positivos e negativos na moderação, usando o limiar da soma de categorias e permitindo ajustá-lo ou desligar a checagem por variável de ambiente",
          "Isolar os dados de cada cliente numa plataforma multi-tenant e separar a sessão do admin das páginas públicas",
          "Manter front e back sincronizados com contratos compartilhados num monorepo, com Husky, commitlint e um comando de verificação único",
          "Colocar tudo no ar: API, PostgreSQL e Redis em containers com Caddy na VPS e o front na Vercel",
        ],
      },
      en: {
        title: "Moonlight",
        description:
          "Multi-tenant platform to build personal pages from blocks, with AI image moderation (NSFW), optimized uploads and a self-hosted deploy.",
        longDescription:
          "Moonlight is a study and portfolio project: a multi-tenant platform where each customer builds a page from blocks (header, hero, links, text, footer) and publishes it on their own subdomain. It is a pnpm + Turborepo monorepo with Next.js 15 on the front end and NestJS + Prisma on PostgreSQL on the back end. Pages are stored as versioned JSONB and validated by the same Zod schema on both sides. One of the most interesting parts is image upload: every file goes through a pipeline that checks the real format, re-encodes it with sharp and runs it through an NSFW moderation model that runs locally, with no external API. The project runs fully locally at no cost, and is deployed with the API on a VPS (Docker + Caddy) and the front end on Vercel.",
        features: [
          "Block-based pages stored as JSONB with a schemaVersion and validated by the same Zod schema on front and back end",
          "Multi-tenant by subdomain (e.g. maria.localhost), with a path fallback at /s/[tenant]",
          "NSFW image moderation with nsfwjs (MobileNetV2) + TensorFlow.js in a worker thread: the image is preprocessed with sharp and rejected when the Porn + Hentai scores sum past a configurable threshold (default 0.6)",
          "Uploads with sharp: detects the real format (JPEG, PNG, WebP, GIF), fixes EXIF orientation, caps the size, drops metadata and converts everything to WebP",
          "Upload safeguards: 40 images per hour per user rate limit, a pixel cap against decompression bombs and plan-based quotas",
          "Storage behind an interface (local disk today), ready to swap for a bucket without touching the domain; email and billing follow the same adapter pattern",
          "Host-only session cookie on the main domain, so customer pages never receive the admin session",
          "Redis for cache, queues and counters, and Mailpit to test emails in development",
        ],
        challenges: [
          "Running an AI model inside Node without blocking the API: TensorFlow.js lives in a worker thread, with a per-image timeout, automatic respawn and friendly 503 errors",
          "Balancing false positives and negatives in moderation, using a summed-category threshold that can be tuned, or the check disabled, through an environment variable",
          "Isolating each customer's data in a multi-tenant platform and keeping the admin session apart from public pages",
          "Keeping front and back in sync with shared contracts in a monorepo, with Husky, commitlint and a single verify command",
          "Getting it all online: API, PostgreSQL and Redis in containers behind Caddy on a VPS, and the front end on Vercel",
        ],
      },
      es: {
        title: "Moonlight",
        description:
          "Plataforma multi-tenant para crear páginas personales por bloques, con moderación de imágenes por IA (NSFW), subidas optimizadas y deploy propio.",
        longDescription:
          "Moonlight es un proyecto de estudio y portafolio: una plataforma multi-tenant donde cada cliente arma su página a partir de bloques (header, hero, enlaces, texto, pie) y la publica en su propio subdominio. Es un monorepo pnpm + Turborepo con Next.js 15 en el front y NestJS + Prisma sobre PostgreSQL en el back. Las páginas se guardan como JSONB versionado y se validan con el mismo schema Zod en ambos lados. Uno de los puntos más interesantes es la subida de imágenes: cada archivo pasa por un pipeline que valida el formato real, lo recodifica con sharp y lo somete a una moderación NSFW que corre localmente, sin depender de una API externa. El proyecto corre 100% local y sin costo, y está publicado con la API en una VPS (Docker + Caddy) y el front en Vercel.",
        features: [
          "Páginas por bloques guardadas como JSONB con schemaVersion y validadas con el mismo schema Zod en front y back",
          "Multi-tenant por subdominio (ej.: maria.localhost), con fallback por ruta en /s/[tenant]",
          "Moderación de imágenes NSFW con nsfwjs (MobileNetV2) + TensorFlow.js en una worker thread: la imagen se preprocesa con sharp y se rechaza si la suma de las notas Porn + Hentai supera un umbral configurable (por defecto 0,6)",
          "Subidas con sharp: detecta el formato real (JPEG, PNG, WebP, GIF), corrige la orientación EXIF, limita el tamaño, descarta metadatos y convierte todo a WebP",
          "Protecciones en la subida: rate limit de 40 imágenes por hora por usuario, límite de píxeles contra decompression bombs y cuotas por plan",
          "Storage detrás de una interfaz (hoy disco local), listo para cambiar a un bucket sin tocar el dominio; email y cobro siguen el mismo patrón de adapters",
          "Cookie de sesión host-only en el dominio principal, para que las páginas de los clientes nunca reciban la sesión del admin",
          "Redis para caché, colas y contadores, y Mailpit para probar emails en desarrollo",
        ],
        challenges: [
          "Correr un modelo de IA dentro de Node sin bloquear la API: TensorFlow.js vive en una worker thread, con timeout por imagen, respawn automático y errores 503 amigables",
          "Equilibrar falsos positivos y negativos en la moderación, usando un umbral sobre la suma de categorías que se puede ajustar, o desactivar la verificación, por variable de entorno",
          "Aislar los datos de cada cliente en una plataforma multi-tenant y separar la sesión del admin de las páginas públicas",
          "Mantener front y back sincronizados con contratos compartidos en un monorepo, con Husky, commitlint y un comando único de verificación",
          "Poner todo en producción: API, PostgreSQL y Redis en contenedores con Caddy en la VPS y el front en Vercel",
        ],
      },
    },
  },
  {
    slug: "pygmy-api",
    repo: "pygmy-api",
    year: "2026",
    status: "done",
    demo: "https://pygmy.gabrielbarbosadev.com.br/",
    technologies: [
      "Python",
      "FastAPI",
      "Redis",
      "Pydantic",
      "Next.js",
      "TypeScript",
      "GitHub OAuth",
      "SMTP",
      "Docker",
      "Docker Compose",
      "Caddy",
      "pytest",
    ],
    content: {
      pt: {
        title: "pygmy",
        description:
          "API de OTP por e-mail para reaproveitar em todos os meus projetos: FastAPI + Redis, chaves por projeto, painel admin com login GitHub e deploy próprio em Docker.",
        longDescription:
          "pygmy nasceu de um problema que se repetia: cada projeto precisava de verificação por código no e-mail, e reescrever isso toda vez é desperdício e fonte de erro. Em vez disso, extraí o serviço para uma API única, que qualquer projeto consome com uma chave. O backend é FastAPI com Redis: gera o código, envia por SMTP e valida com limites rígidos. O site em Next.js traz documentação, uma demo interativa e um painel /admin, protegido por login com GitHub, onde crio uma credencial por projeto, giro as chaves e acompanho o uso dos últimos 14 dias. Tudo sobe com um docker compose em uma VPS, isolado de outros serviços, atrás de Caddy com HTTPS automático. É a versão enxuta, de código aberto, do mesmo tipo de serviço de OTP que construí profissionalmente.",
        features: [
          "Dois endpoints, POST /v1/otp/request e /verify, autenticados por Bearer token ou X-API-Key, com exemplos em curl, Python e Node",
          "Códigos de 6 dígitos gerados com secrets, guardados no Redis apenas como HMAC, com expiração de 5 minutos e uso único",
          "Limites contra abuso: 5 tentativas por código, cooldown de 60 s para reenvio, 5 pedidos por hora por e-mail e 20 por hora por IP do usuário final",
          "Uma credencial por projeto, com namespace isolado: o mesmo e-mail em dois projetos nunca compartilha código nem limites",
          "Chaves guardadas só como SHA-256; o segredo pyg_... aparece uma única vez, na criação ou na rotação",
          "Painel /admin com login somente por GitHub (OAuth, lista de usuários permitidos) para criar, renomear, desativar, girar e excluir chaves, com gráfico de uso dos últimos 14 dias",
          "Envio por SMTP (Hostinger) com template HTML do e-mail e nome do app configurável por requisição",
          "Deploy isolado: rede, volume e containers próprios, portas só em 127.0.0.1, limites de memória e CPU, Caddy ou nginx na frente",
          "Testes automatizados com pytest",
        ],
        challenges: [
          "Tratar o OTP como dado sensível: guardar só o HMAC, comparar em tempo constante e garantir o uso único mesmo com verificações simultâneas",
          "Aplicar rate limit e cooldown de forma atômica no Redis, sem corridas entre requisições concorrentes",
          "Isolar os projetos entre si, usando o id da chave, e não o nome, como namespace, para que renomear nunca quebre nada",
          "Proteger o painel: o navegador nunca vê a chave admin, que fica só no servidor do site, e a sessão é um cookie httpOnly",
          "Evitar que um código fique preso quando o e-mail não é entregue, removendo o código e o cooldown se o envio falhar",
          "Conviver na mesma VPS com outros serviços, sem disputar portas nem recursos",
        ],
      },
      en: {
        title: "pygmy",
        description:
          "Email OTP API I can reuse across all my projects: FastAPI + Redis, per-project keys, an admin panel with GitHub login and its own Docker deploy.",
        longDescription:
          "pygmy came from a recurring problem: every project needed email code verification, and rewriting it each time is wasteful and error-prone. Instead, I extracted the service into a single API that any project consumes with a key. The back end is FastAPI with Redis: it generates the code, sends it over SMTP and validates it under strict limits. The Next.js site ships documentation, an interactive demo and an /admin panel, protected by GitHub login, where I create one credential per project, rotate keys and follow usage over the last 14 days. Everything comes up with one docker compose on a VPS, isolated from other services, behind Caddy with automatic HTTPS. It is the lean, open-source take on the kind of OTP service I built professionally.",
        features: [
          "Two endpoints, POST /v1/otp/request and /verify, authenticated by Bearer token or X-API-Key, with curl, Python and Node examples",
          "6-digit codes generated with secrets, stored in Redis only as an HMAC, with a 5-minute expiry and single use",
          "Abuse limits: 5 attempts per code, a 60 s resend cooldown, 5 requests per hour per email and 20 per hour per end-user IP",
          "One credential per project with an isolated namespace: the same email in two projects never shares a code or limits",
          "Keys stored only as SHA-256; the pyg_... secret is shown a single time, on creation or rotation",
          "/admin panel with GitHub-only login (OAuth, allow-list of users) to create, rename, disable, rotate and delete keys, with a 14-day usage chart",
          "SMTP delivery (Hostinger) with an HTML email template and an app name configurable per request",
          "Isolated deploy: own network, volume and containers, ports bound to 127.0.0.1 only, memory and CPU limits, Caddy or nginx in front",
          "Automated tests with pytest",
        ],
        challenges: [
          "Treating OTP as sensitive data: store only the HMAC, compare in constant time and guarantee single use even with concurrent verifications",
          "Applying rate limits and cooldowns atomically in Redis, with no races between concurrent requests",
          "Isolating projects from each other by using the key id, not its name, as the namespace, so renaming never breaks anything",
          "Protecting the panel: the browser never sees the admin key, which stays on the site's server, and the session is an httpOnly cookie",
          "Not leaving a code stuck when the email is never delivered, by removing the code and cooldown if sending fails",
          "Sharing a VPS with other services without fighting over ports or resources",
        ],
      },
      es: {
        title: "pygmy",
        description:
          "API de OTP por e-mail para reutilizar en todos mis proyectos: FastAPI + Redis, claves por proyecto, panel admin con login de GitHub y deploy propio en Docker.",
        longDescription:
          "pygmy nació de un problema que se repetía: cada proyecto necesitaba verificación por código en el e-mail, y reescribirlo cada vez es un desperdicio y una fuente de errores. En su lugar, extraje el servicio a una única API que cualquier proyecto consume con una clave. El backend es FastAPI con Redis: genera el código, lo envía por SMTP y lo valida con límites estrictos. El sitio en Next.js trae documentación, una demo interactiva y un panel /admin, protegido por login de GitHub, donde creo una credencial por proyecto, roto las claves y sigo el uso de los últimos 14 días. Todo sube con un docker compose en una VPS, aislado de otros servicios, detrás de Caddy con HTTPS automático. Es la versión liviana y de código abierto del mismo tipo de servicio de OTP que construí profesionalmente.",
        features: [
          "Dos endpoints, POST /v1/otp/request y /verify, autenticados por Bearer token o X-API-Key, con ejemplos en curl, Python y Node",
          "Códigos de 6 dígitos generados con secrets, guardados en Redis solo como HMAC, con expiración de 5 minutos y uso único",
          "Límites contra abuso: 5 intentos por código, cooldown de 60 s para reenvío, 5 pedidos por hora por e-mail y 20 por hora por IP del usuario final",
          "Una credencial por proyecto con namespace aislado: el mismo e-mail en dos proyectos nunca comparte código ni límites",
          "Claves guardadas solo como SHA-256; el secreto pyg_... aparece una única vez, al crear o rotar",
          "Panel /admin con login solo por GitHub (OAuth, lista de usuarios permitidos) para crear, renombrar, desactivar, rotar y eliminar claves, con gráfico de uso de los últimos 14 días",
          "Envío por SMTP (Hostinger) con plantilla HTML del e-mail y nombre de la app configurable por solicitud",
          "Deploy aislado: red, volumen y contenedores propios, puertos solo en 127.0.0.1, límites de memoria y CPU, Caddy o nginx al frente",
          "Tests automatizados con pytest",
        ],
        challenges: [
          "Tratar el OTP como dato sensible: guardar solo el HMAC, comparar en tiempo constante y garantizar el uso único incluso con verificaciones simultáneas",
          "Aplicar rate limit y cooldown de forma atómica en Redis, sin condiciones de carrera entre solicitudes concurrentes",
          "Aislar los proyectos entre sí, usando el id de la clave, y no el nombre, como namespace, para que renombrar nunca rompa nada",
          "Proteger el panel: el navegador nunca ve la clave admin, que queda solo en el servidor del sitio, y la sesión es una cookie httpOnly",
          "Evitar que un código quede trabado cuando el e-mail no se entrega, eliminando el código y el cooldown si el envío falla",
          "Convivir en la misma VPS con otros servicios, sin pelear por puertos ni recursos",
        ],
      },
    },
  },
  {
    slug: "astora",
    repo: "astora",
    year: "2026",
    status: "building",
    technologies: ["JavaScript", "Three.js", "WebGL", "GLSL", "Vite"],
    content: {
      pt: {
        title: "Astora",
        description:
          "Explorador 3D do Universo no navegador, em cinco escalas: de telescópios em órbita ao Grupo Local de galáxias, com buracos negros feitos em shader.",
        longDescription:
          "Astora é um explorador 3D do Universo que roda no navegador. Você arrasta para girar, rola para dar zoom e clica em um astro para ver Sobre, Dados e Curiosidades. Começou como um modelo do Sistema Solar e virou cinco escalas independentes: telescópios, Sistema Solar, vizinhança estelar, Via Láctea e Grupo Local. É feito com Three.js e Vite, em JavaScript puro e sem framework de UI, com o conteúdo de cada astro em arquivos de dados separados da cena. O projeto também é honesto sobre o que simplifica: o README documenta o que é proporcional, o que tem posição real e o que é estilizado em cada escala.",
        features: [
          "Cinco níveis de escala, cada um num módulo próprio e construído só quando você entra nele: telescópios, Sistema Solar, vizinhança estelar, Via Láctea e Grupo Local",
          "Cerca de 30 observatórios, em órbita e em solo, como Hubble, James Webb (no ponto L2), ALMA e VLT, com os de solo posicionados por latitude e longitude reais",
          "Sol, planetas, luas, anéis, planetas anões, cinturões de asteroides e de Kuiper e o cometa Halley, com distâncias e diâmetros dos planetas proporcionais entre si",
          "Cerca de 17 estrelas próximas em posições reais (ascensão reta, declinação e distância), com seus exoplanetas",
          "Via Láctea com dezenas de milhares de partículas num único Points com shader próprio, e buracos negros (Sagitário A*, Cygnus X-1 e M87*) desenhados em shader, com disco de acreção, efeito Doppler e lente gravitacional",
          "Terra com mapa de cores, relevo, nuvens e luzes de cidade que só acendem no lado escuro; texturas reais dos planetas carregadas sob demanda quando a câmera chega perto",
          "Busca \"Explorar\" e atalhos de teclado: / ou Ctrl+K para buscar, 1 a 4 para trocar de escala, setas para navegar entre astros",
        ],
        challenges: [
          "Fazer escalas absurdamente diferentes caberem numa mesma experiência, resolvendo com níveis independentes em vez de uma cena única",
          "Desenhar um buraco negro convincente sem simular física: um shader num billboard que sempre encara a câmera e cuja inclinação do disco vem do ângulo da câmera",
          "Manter o desempenho com muitas partículas: um único Points, níveis sob demanda, pixel ratio limitado a 2 e menos partículas em dispositivos touch",
          "Economizar rede e memória de vídeo, começando cada astro com uma textura procedural e trocando pela real só quando a câmera se aproxima",
          "Ser honesto sobre a fidelidade, documentando o que é real e o que é estilizado em cada escala",
        ],
      },
      en: {
        title: "Astora",
        description:
          "3D explorer of the Universe in the browser, across five scales: from telescopes in orbit to the Local Group of galaxies, with black holes built in shaders.",
        longDescription:
          "Astora is a 3D explorer of the Universe that runs in the browser. You drag to rotate, scroll to zoom and click a body to see About, Data and Curiosities. It started as a model of the Solar System and became five independent scales: telescopes, the Solar System, the stellar neighborhood, the Milky Way and the Local Group. It is built with Three.js and Vite, in plain JavaScript with no UI framework, with each body's content in data files separate from the scene. The project is also honest about what it simplifies: the README documents what is proportional, what has real positions and what is stylized at each scale.",
        features: [
          "Five scale levels, each in its own module and built only when you enter it: telescopes, Solar System, stellar neighborhood, Milky Way and Local Group",
          "About 30 observatories, in orbit and on the ground, such as Hubble, James Webb (at L2), ALMA and VLT, with ground sites placed at real latitude and longitude",
          "Sun, planets, moons, rings, dwarf planets, asteroid and Kuiper belts and Halley's comet, with planet distances and diameters proportional to each other",
          "About 17 nearby stars at real positions (right ascension, declination and distance), with their exoplanets",
          "A Milky Way with tens of thousands of particles in a single Points with its own shader, and black holes (Sagittarius A*, Cygnus X-1 and M87*) drawn in shader, with accretion disk, Doppler effect and gravitational lensing",
          "An Earth with color map, relief, clouds and city lights that only turn on on the dark side; real planet textures loaded on demand when the camera gets close",
          "An \"Explore\" search and keyboard shortcuts: / or Ctrl+K to search, 1 to 4 to switch scale, arrows to move between bodies",
        ],
        challenges: [
          "Fitting wildly different scales into one experience, solved with independent levels instead of a single scene",
          "Drawing a convincing black hole without simulating physics: a shader on a billboard that always faces the camera, with the disk tilt derived from the camera angle",
          "Keeping performance with many particles: a single Points, on-demand levels, pixel ratio capped at 2 and fewer particles on touch devices",
          "Saving bandwidth and video memory by starting each body with a procedural texture and swapping in the real one only when the camera gets close",
          "Being honest about fidelity, documenting what is real and what is stylized at each scale",
        ],
      },
      es: {
        title: "Astora",
        description:
          "Explorador 3D del Universo en el navegador, en cinco escalas: de telescopios en órbita al Grupo Local de galaxias, con agujeros negros hechos en shader.",
        longDescription:
          "Astora es un explorador 3D del Universo que corre en el navegador. Arrastras para girar, haces scroll para acercar y haces clic en un astro para ver Sobre, Datos y Curiosidades. Empezó como un modelo del Sistema Solar y se convirtió en cinco escalas independientes: telescopios, Sistema Solar, vecindad estelar, Vía Láctea y Grupo Local. Está hecho con Three.js y Vite, en JavaScript puro y sin framework de UI, con el contenido de cada astro en archivos de datos separados de la escena. El proyecto también es honesto sobre lo que simplifica: el README documenta qué es proporcional, qué tiene posición real y qué está estilizado en cada escala.",
        features: [
          "Cinco niveles de escala, cada uno en un módulo propio y construido solo cuando entras en él: telescopios, Sistema Solar, vecindad estelar, Vía Láctea y Grupo Local",
          "Cerca de 30 observatorios, en órbita y en tierra, como Hubble, James Webb (en el punto L2), ALMA y VLT, con los de tierra ubicados por latitud y longitud reales",
          "Sol, planetas, lunas, anillos, planetas enanos, cinturones de asteroides y de Kuiper y el cometa Halley, con distancias y diámetros de los planetas proporcionales entre sí",
          "Cerca de 17 estrellas cercanas en posiciones reales (ascensión recta, declinación y distancia), con sus exoplanetas",
          "Vía Láctea con decenas de miles de partículas en un único Points con shader propio, y agujeros negros (Sagitario A*, Cygnus X-1 y M87*) dibujados en shader, con disco de acreción, efecto Doppler y lente gravitacional",
          "Tierra con mapa de colores, relieve, nubes y luces de ciudad que solo se encienden en el lado oscuro; texturas reales de los planetas cargadas bajo demanda cuando la cámara se acerca",
          "Búsqueda \"Explorar\" y atajos de teclado: / o Ctrl+K para buscar, 1 a 4 para cambiar de escala, flechas para moverse entre astros",
        ],
        challenges: [
          "Hacer que escalas absurdamente distintas quepan en una misma experiencia, resuelto con niveles independientes en lugar de una escena única",
          "Dibujar un agujero negro convincente sin simular física: un shader en un billboard que siempre mira a la cámara, con la inclinación del disco derivada del ángulo de la cámara",
          "Mantener el rendimiento con muchas partículas: un único Points, niveles bajo demanda, pixel ratio limitado a 2 y menos partículas en dispositivos touch",
          "Ahorrar red y memoria de video, empezando cada astro con una textura procedural y cambiándola por la real solo cuando la cámara se acerca",
          "Ser honesto sobre la fidelidad, documentando qué es real y qué está estilizado en cada escala",
        ],
      },
    },
  },
];

export const seedStudies: Study[] = studies.map((study, order) => ({ ...study, order }));
