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
    cta: {
      label: string;
      href: string;
    };
    socialLinks: string[];
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
    brand: "ARCHITECT.UX",
    resumeLabel: "Resume",
    items: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services", active: true },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    title: {
      lineOne: "Architecting",
      lineTwo: "The Digital",
      highlight: "Frontier",
    },
    description:
      "Frontend Architect & Design System Specialist. Forging scalable, accessible, and high-performance digital experiences.",
    cta: {
      label: "Experience My Work",
      href: "#work",
    },
    scrollHint: "Scroll",
  },
  services: {
    eyebrow: "Core Disciplines",
    cards: [
      {
        title: "Design System Development",
        description:
          "Architecting comprehensive component libraries that bridge design and engineering, ensuring consistent UI across scale.",
        icon: "A",
      },
      {
        title: "Frontend Architecture",
        description:
          "Structuring resilient, highly scalable frontend ecosystems. Focus on state management, routing paradigms, and modular monolith separation.",
        icon: "M",
        wide: true,
      },
      {
        title: "Performance Optimization",
        description:
          "Ruthless minimization of bundle sizes, critical rendering path optimization, and memory leak mitigation for fluid experiences.",
        icon: "C",
      },
      {
        title: "Accessibility (A11y)",
        description:
          "Deep expertise in WCAG compliance, semantic HTML, and ARIA roles. Ensuring digital inclusion is not an afterthought.",
        icon: "T",
      },
      {
        title: "UI Engineering",
        description:
          "Crafting pixel-perfect, highly interactive interfaces that translate high-fidelity designs into robust code.",
        icon: "G",
      },
    ],
  },
  experience: {
    title: {
      lineOne: "Engineering",
      highlight: "Systematic",
      lineTwo: "Scale.",
    },
    description:
      "A timeline of architectural decisions, component library construction, and the pursuit of unbreakable UI pipelines across modern frameworks.",
    items: [
      {
        period: "2021 - PRESENT",
        title: "Lead UI Architect",
        company: "Nexus Systems Group",
        description:
          "Spearheaded the consolidation of divergent UI paradigms into a unified, framework-agnostic design system. Engineered a robust core library serving both React and Angular ecosystems, significantly reducing feature time-to-market. Established Storybook as the ultimate source of truth for design tokens, component APIs, and interactive documentation.",
        tags: ["React & Angular", "Storybook", "Design Tokens", "Tailwind CSS"],
        badge: "DESIGN SYSTEMS FOCUS",
        current: true,
      },
      {
        period: "2018 - 2021",
        title: "Senior Front-End Engineer",
        company: "Aether Technologies",
        description:
          "Architected scalable front-end solutions for enterprise dashboards. Implemented rigorous automated testing methodologies, ensuring zero-regression deploys. Built and maintained complex CI/CD pipelines bridging the gap between front-end infrastructure and cloud deployments.",
        tags: ["Jest & Cypress", "CI/CD Pipelines", "TypeScript Core", "Component Architecture"],
      },
    ],
  },
  skills: {
    title: {
      lineOne: "Technical",
      highlight: "Arsenal.",
    },
    description:
      "Precision-engineered tools and methodologies for constructing robust, scalable, and ethereal digital experiences. Layered architecture meets fluid execution.",
    cards: [
      {
        title: "React",
        description:
          "Component-driven architecture, advanced hooks ecosystem, and deeply optimized state management flows.",
        icon: "</>",
        offset: "low",
      },
      {
        title: "Angular",
        description:
          "Enterprise-scale applications leveraging RxJS reactive paradigms and strict dependency injection.",
        icon: "[]",
        offset: "high",
        emphasis: true,
      },
      {
        title: "TypeScript",
        description:
          "Static typing orchestration, interface contracts, ensuring robust end-to-end type safety.",
        icon: "{}",
        offset: "mid",
      },
      {
        title: "Storybook",
        description:
          "Isolated component laboratories, comprehensive design system documentation, and visual regression testing.",
        icon: "SB",
        offset: "base",
      },
    ],
    pills: ["Accessibility", "Performance"],
  },
  contact: {
    eyebrow: "Initiate Sequence",
    title: {
      lineOne: "Ready to build the",
      lineTwo: "next artifact?",
    },
    cta: {
      label: "Initialize Contact",
      href: "mailto:hello@murillo.dev",
    },
    socialLinks: ["LinkedIn", "GitHub"],
  },
  footer: {
    copyright: "© 2024 LIQUID GLASS FRAMEWORK. ALL RIGHTS RESERVED.",
    links: ["Github", "LinkedIn", "Source"],
  },
};
