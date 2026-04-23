export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  wide?: boolean;
};

export type TimelineItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  badge?: string;
  current?: boolean;
};

export type SkillCard = {
  title: string;
  description: string;
  icon: string;
  offset: "low" | "high" | "mid" | "base";
  emphasis?: boolean;
};

export type LandingContent = {
  aliases: Record<string, string>;
  nav: {
    items: NavItem[];
    brand: string;
    resumeLabel: string;
  };
  hero: {
    title: {
      lineOne: string;
      lineTwo: string;
      highlight: string;
    };
    description: string;
    cta: {
      label: string;
      href: string;
    };
    scrollHint: string;
  };
  services: {
    eyebrow: string;
    cards: ServiceCard[];
  };
  experience: {
    title: {
      lineOne: string;
      highlight: string;
      lineTwo: string;
    };
    description: string;
    items: TimelineItem[];
  };
  skills: {
    title: {
      lineOne: string;
      highlight: string;
    };
    description: string;
    cards: SkillCard[];
    pills: string[];
  };
  contact: {
    eyebrow: string;
    title: {
      lineOne: string;
      lineTwo: string;
    };
    ctas: { label: string; href: string; icon: string }[];
    socialLinks: { label: string; href: string }[];
  };
  footer: {
    copyright: string;
    links: string[];
  };
};

export const landingContent: LandingContent = {
  aliases: {
    work: "services",
  },
  nav: {
    brand: "Murillo Martins",
    resumeLabel: "Currículo",
    items: [
      { label: "Serviços", href: "#services" },
      { label: "Experiência", href: "#experience" },
      { label: "Habilidades", href: "#skills" },
      { label: "Contato", href: "#contact" },
    ],
  },
  hero: {
    title: {
      lineOne: "Arquitetando",
      lineTwo: "A Fronteira",
      highlight: "Digital",
    },
    description:
      "Desenvolvedor de Software especializado em Frontend & Design Systems. Construindo experiências digitais escaláveis, acessíveis e de alta performance.",
    cta: {
      label: "Conheça Meu Trabalho",
      href: "#work",
    },
    scrollHint: "Rolar",
  },
  services: {
    eyebrow: "Serviços Prestados",
    cards: [
      {
        title: "Landing Pages",
        description:
          "Páginas de alta conversão, rápidas e responsivas. Do design ao deploy, com foco em performance e resultados.",
        icon: "landing",
      },
      {
        title: "Sistemas Web",
        description:
          "Desenvolvimento de aplicações web completas, desde painéis administrativos até plataformas SaaS robustas e escaláveis.",
        icon: "web",
      },
      {
        title: "Design System",
        description:
          "Bibliotecas de componentes consistentes que conectam design e engenharia, acelerando o desenvolvimento em escala.",
        icon: "designsystem",
      },
      {
        title: "Refatoração de Sistema",
        description:
          "Modernização de código legado com stack atual, melhorando manutenibilidade e performance sem perder funcionalidades.",
        icon: "refactor",
      },
      {
        title: "Consultoria de Frontend",
        description:
          "Revisão de arquitetura, code review e definição de boas práticas para times que querem elevar a qualidade do frontend.",
        icon: "consulting",
      },
      {
        title: "Mentoria Técnica",
        description:
          "Acompanhamento personalizado de devs júnior e pleno em boas práticas, arquitetura e crescimento de carreira em frontend.",
        icon: "mentoring",
      },
    ],
  },
  experience: {
    title: {
      lineOne: "Carreira",
      highlight: "Construída",
      lineTwo: "com Propósito.",
    },
    description:
      "Não apenas código — decisões que moldaram produtos, aceleraram times e deixaram uma marca em cada projeto.",
    items: [
      {
        period: "OUT 2022 - PRESENTE",
        title: "Desenvolvedor Front-end Pleno",
        company: "Ambev Tech",
        description:
          "Atuo no time de Design System contribuindo para a construção e evolução de bibliotecas de componentes reutilizáveis. Responsável por desenvolver, documentar e manter componentes que atendem múltiplos times de produto, garantindo consistência visual e agilidade no desenvolvimento em escala.",
        tags: ["Design System", "React", "Azure DevOps", "Git"],
        badge: "POSIÇÃO ATUAL",
        current: true,
      },
      {
        period: "JAN 2022 - NOV 2022",
        title: "Analista de Sustentação Pleno",
        company: "Ambev Tech",
        description:
          "Atuação no time de engenharia com atendimento de chamados via ServiceNow, suporte direto em C# e Python, troubleshooting em ambientes com MongoDB, Kubernetes e Datadog. Gestão de repositórios, branches, releases e pipelines no Azure DevOps, além de criação e manutenção de base de conhecimento interna.",
        tags: ["Python", "C#", "Azure DevOps", "Kubernetes", "ServiceNow"],
      },
      {
        period: "SET 2019 - JAN 2022",
        title: "Analista I",
        company: "Senac RS",
        description:
          "Atuação como analista de sustentação com foco em otimização de processos e proposição de soluções para as partes interessadas. Responsável pela administração do sistema de Gestão de Demandas, análise e implantação de novos sistemas, realização de capacitações internas e sustentação contínua de sistemas críticos.",
        tags: ["SQL", "Gestão de Demandas", "Sustentação de Sistemas"],
      },
      {
        period: "AGO 2018 - SET 2019",
        title: "Estagiário",
        company: "Senac RS",
        description:
          "Suporte de TI com atendimento interno via telefone e acesso remoto (VNC/TS/TeamViewer). Resolução de incidentes web, atendimento de requisições de acesso a sistemas internos, e-mail, internet e intranet. Monitoramento de links de comunicação (MPLS/Internet/Rádio), Firewall e Windows Server via Opmon.",
        tags: ["Suporte TI", "Windows Server", "Firewall", "Redes"],
      },
    ],
  },
  skills: {
    title: {
      lineOne: "Skills",
      highlight: "Técnicas",
    },
    description:
      "Ferramentas e metodologias de precisão para construir experiências digitais robustas, escaláveis e etéreas. Arquitetura em camadas encontra execução fluida.",
    cards: [
      {
        title: "React",
        description:
          "Arquitetura orientada a componentes, ecossistema avançado de hooks e fluxos de gerenciamento de estado profundamente otimizados.",
        icon: "ReactIcon",
        offset: "low",
      },
      {
        title: "Angular",
        description:
          "Aplicações de escala corporativa com injeção de dependência rigorosa. Utilização de Signals para reatividade granular e performance otimizada.",
        icon: "AngularIcon",
        offset: "high",
        emphasis: true,
      },
      {
        title: "TypeScript",
        description:
          "Orquestração de tipagem estática, contratos de interfaces, garantindo segurança de tipos robusta de ponta a ponta.",
        icon: "TypeScriptIcon",
        offset: "mid",
      },
      {
        title: "Storybook",
        description:
          "Laboratórios de componentes isolados, documentação abrangente de design system e testes de regressão visual.",
        icon: "StorybookIcon",
        offset: "base",
      },
    ],
    pills: ["Figma", "CSS / SCSS", "Supabase", "Git", "Azure DevOps", "GitHub", "Acessibilidade", "Performance"],
  },
  contact: {
    eyebrow: "Próximo Passo",
    title: {
      lineOne: "Tem um projeto?",
      lineTwo: "Me chama.",
    },
    ctas: [
      { label: "WhatsApp", href: "https://wa.me/5551997276111?text=Olá%2C+vim+pelo+seu+portfólio!", icon: "whatsapp" },
      { label: "E-mail", href: "mailto:murillohgmartins@gmail.com", icon: "email" },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/murillo-martins-ti/" },
      { label: "GitHub", href: "https://github.com/murillomartinss" },
    ],
  },
  footer: {
    copyright: "Murillo Martins. Todos os direitos reservados.",
    links: ["Github", "LinkedIn", "Código-Fonte"],
  },
};
