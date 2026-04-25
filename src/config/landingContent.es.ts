import type { LandingContent } from "./landingContent";

export const esContent: LandingContent = {
  aliases: {
    work: "services",
  },
  ui: {
    emailCopied: "¡Copiado!",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mobileMenuLabel: "Menú móvil",
  },
  nav: {
    brand: "Murillo Martins",
    resumeLabel: "Currículum",
    items: [
      { label: "Servicios", href: "#services" },
      { label: "Experiencia", href: "#experience" },
      { label: "Habilidades", href: "#skills" },
      { label: "Contacto", href: "#contact" },
    ],
  },
  hero: {
    title: {
      lineOne: "Arquitectando",
      lineTwo: "La Frontera",
      highlight: "Digital",
    },
    description:
      "Desarrollador de Software especializado en Frontend y Design Systems. Construyendo experiencias digitales escalables, accesibles y de alto rendimiento.",
    cta: {
      label: "Ver Mi Trabajo",
      href: "#work",
    },
    scrollHint: "Desplazar",
  },
  services: {
    eyebrow: "Servicios",
    cards: [
      {
        title: "Landing Pages",
        description:
          "Páginas de alta conversión, rápidas y responsivas. Del diseño al deploy, con foco en rendimiento y resultados.",
        icon: "landing",
      },
      {
        title: "Sistemas Web",
        description:
          "Desarrollo de aplicaciones web completas, desde paneles administrativos hasta plataformas SaaS robustas y escalables.",
        icon: "web",
      },
      {
        title: "Design System",
        description:
          "Bibliotecas de componentes consistentes que conectan diseño e ingeniería, acelerando el desarrollo a escala.",
        icon: "designsystem",
      },
      {
        title: "Refactorización",
        description:
          "Modernización de código legado con stacks actuales, mejorando mantenibilidad y rendimiento sin perder funcionalidades.",
        icon: "refactor",
      },
      {
        title: "Consultoría Frontend",
        description:
          "Revisión de arquitectura, code review y definición de buenas prácticas para equipos que quieren elevar su calidad frontend.",
        icon: "consulting",
      },
      {
        title: "Mentoría Técnica",
        description:
          "Acompañamiento personalizado para devs junior y semi-senior en buenas prácticas, arquitectura y crecimiento de carrera.",
        icon: "mentoring",
      },
    ],
  },
  experience: {
    title: {
      lineOne: "Carrera",
      highlight: "Construida",
      lineTwo: "con Propósito.",
    },
    description:
      "No solo código — decisiones que moldearon productos, aceleraron equipos y dejaron huella en cada proyecto.",
    items: [
      {
        period: "OCT 2022 - PRESENTE",
        title: "Desarrollador Front-end Semi-Senior",
        company: "Ambev Tech",
        description:
          "Trabajo en el equipo de Design System contribuyendo a la construcción y evolución de bibliotecas de componentes reutilizables. Responsable de desarrollar, documentar y mantener componentes que sirven a múltiples equipos de producto, garantizando consistencia visual y agilidad en el desarrollo a escala.",
        tags: ["Design System", "React", "Azure DevOps", "Git"],
        badge: "ACTUAL",
        current: true,
      },
      {
        period: "ENE 2022 - NOV 2022",
        title: "Analista de Soporte Semi-Senior",
        company: "Ambev Tech",
        description:
          "Soporte al equipo de ingeniería mediante tickets en ServiceNow, soporte directo en C# y Python, troubleshooting en entornos con MongoDB, Kubernetes y Datadog. Gestión de repositorios, branches, releases y pipelines en Azure DevOps, además de creación y mantenimiento de base de conocimiento interna.",
        tags: ["Python", "C#", "Azure DevOps", "Kubernetes", "ServiceNow"],
      },
      {
        period: "SEP 2019 - ENE 2022",
        title: "Analista I",
        company: "Senac RS",
        description:
          "Analista de soporte con foco en optimización de procesos y propuesta de soluciones para las partes interesadas. Responsable de la administración del sistema de Gestión de Demandas, análisis e implementación de nuevos sistemas, capacitaciones internas y soporte continuo de sistemas críticos.",
        tags: ["SQL", "Gestión de Demandas", "Soporte de Sistemas"],
      },
      {
        period: "AGO 2018 - SEP 2019",
        title: "Pasante",
        company: "Senac RS",
        description:
          "Soporte de TI con atención interna vía teléfono y acceso remoto (VNC/TS/TeamViewer). Resolución de incidentes web, atención de solicitudes de acceso a sistemas internos, correo, internet e intranet. Monitoreo de enlaces de comunicación (MPLS/Internet/Radio), Firewall y Windows Server vía Opmon.",
        tags: ["Soporte TI", "Windows Server", "Firewall", "Redes"],
      },
    ],
  },
  skills: {
    title: {
      lineOne: "Skills",
      highlight: "Técnicas",
    },
    description:
      "Herramientas y metodologías de precisión para construir experiencias digitales robustas, escalables y de alto rendimiento. Arquitectura en capas encuentra ejecución fluida.",
    cards: [
      {
        title: "React",
        description:
          "Arquitectura orientada a componentes, ecosistema avanzado de hooks y flujos de gestión de estado profundamente optimizados.",
        icon: "ReactIcon",
        offset: "low",
      },
      {
        title: "Angular",
        description:
          "Aplicaciones de escala empresarial con inyección de dependencias estricta. Uso de Signals para reactividad granular y rendimiento optimizado.",
        icon: "AngularIcon",
        offset: "high",
        emphasis: true,
      },
      {
        title: "TypeScript",
        description:
          "Orquestación de tipado estático, contratos de interfaces, garantizando seguridad de tipos robusta de extremo a extremo.",
        icon: "TypeScriptIcon",
        offset: "mid",
      },
      {
        title: "Storybook",
        description:
          "Laboratorios de componentes aislados, documentación completa de design system y pruebas de regresión visual.",
        icon: "StorybookIcon",
        offset: "base",
      },
    ],
    pills: ["Figma", "CSS / SCSS", "Supabase", "Git", "Azure DevOps", "GitHub", "Accesibilidad", "Rendimiento"],
  },
  contact: {
    eyebrow: "Próximo Paso",
    title: {
      lineOne: "¿Tienes un proyecto?",
      lineTwo: "Hablemos.",
    },
    ctas: [
      { label: "WhatsApp", href: "https://wa.me/5551997276111?text=Hola!+Te+encontré+a+través+de+tu+portafolio.", icon: "whatsapp" },
      { label: "Email", href: "mailto:murillohgmartins@gmail.com", icon: "email" },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/murillo-martins-ti/" },
      { label: "GitHub", href: "https://github.com/murillomartinss" },
    ],
  },
  footer: {
    copyright: "Todos los derechos reservados.",
    links: ["Github", "LinkedIn", "Código Fuente"],
  },
};
