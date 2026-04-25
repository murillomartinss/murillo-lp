import type { LandingContent } from "./landingContent";

export const enContent: LandingContent = {
  aliases: {
    work: "services",
  },
  ui: {
    emailCopied: "Copied!",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileMenuLabel: "Mobile menu",
  },
  nav: {
    brand: "Murillo Martins",
    resumeLabel: "Resume",
    items: [
      { label: "Services", href: "#services" },
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
      "Software Developer specialized in Frontend & Design Systems. Building scalable, accessible, and high-performance digital experiences.",
    cta: {
      label: "See My Work",
      href: "#work",
    },
    scrollHint: "Scroll",
  },
  services: {
    eyebrow: "Services",
    cards: [
      {
        title: "Landing Pages",
        description:
          "High-conversion pages, fast and responsive. From design to deploy, focused on performance and results.",
        icon: "landing",
      },
      {
        title: "Web Systems",
        description:
          "Full web application development, from admin dashboards to robust and scalable SaaS platforms.",
        icon: "web",
      },
      {
        title: "Design System",
        description:
          "Consistent component libraries that bridge design and engineering, accelerating development at scale.",
        icon: "designsystem",
      },
      {
        title: "System Refactoring",
        description:
          "Modernizing legacy codebases with current tech stacks, improving maintainability and performance without losing features.",
        icon: "refactor",
      },
      {
        title: "Frontend Consulting",
        description:
          "Architecture reviews, code review, and best-practice definition for teams looking to raise their frontend quality.",
        icon: "consulting",
      },
      {
        title: "Technical Mentoring",
        description:
          "Personalized guidance for junior and mid-level devs on best practices, architecture, and career growth in frontend.",
        icon: "mentoring",
      },
    ],
  },
  experience: {
    title: {
      lineOne: "Career",
      highlight: "Built",
      lineTwo: "with Purpose.",
    },
    description:
      "Not just code — decisions that shaped products, accelerated teams, and left a mark on every project.",
    items: [
      {
        period: "OCT 2022 - PRESENT",
        title: "Mid-level Front-end Developer",
        company: "Ambev Tech",
        description:
          "Working on the Design System team, contributing to building and evolving reusable component libraries. Responsible for developing, documenting, and maintaining components that serve multiple product teams, ensuring visual consistency and development agility at scale.",
        tags: ["Design System", "React", "Azure DevOps", "Git"],
        badge: "CURRENT",
        current: true,
      },
      {
        period: "JAN 2022 - NOV 2022",
        title: "Mid-level Support Analyst",
        company: "Ambev Tech",
        description:
          "Engineering team support via ServiceNow tickets, direct support in C# and Python, troubleshooting in environments with MongoDB, Kubernetes, and Datadog. Repository, branch, release, and pipeline management in Azure DevOps, plus internal knowledge base creation and maintenance.",
        tags: ["Python", "C#", "Azure DevOps", "Kubernetes", "ServiceNow"],
      },
      {
        period: "SEP 2019 - JAN 2022",
        title: "Analyst I",
        company: "Senac RS",
        description:
          "Support analyst focused on process optimization and proposing solutions for stakeholders. Responsible for administering the Demand Management system, analyzing and deploying new systems, conducting internal training sessions, and providing ongoing support for critical systems.",
        tags: ["SQL", "Demand Management", "Systems Support"],
      },
      {
        period: "AUG 2018 - SEP 2019",
        title: "Intern",
        company: "Senac RS",
        description:
          "IT support via phone and remote access (VNC/TS/TeamViewer). Resolved web incidents, handled access requests for internal systems, email, internet, and intranet. Monitored communication links (MPLS/Internet/Radio), Firewall, and Windows Server via Opmon.",
        tags: ["IT Support", "Windows Server", "Firewall", "Networking"],
      },
    ],
  },
  skills: {
    title: {
      lineOne: "Technical",
      highlight: "Skills",
    },
    description:
      "Precision tools and methodologies for building robust, scalable, and high-performance digital experiences. Layered architecture meets fluid execution.",
    cards: [
      {
        title: "React",
        description:
          "Component-driven architecture, advanced hooks ecosystem, and deeply optimized state management flows.",
        icon: "ReactIcon",
        offset: "low",
      },
      {
        title: "Angular",
        description:
          "Enterprise-scale applications with strict dependency injection. Leveraging Signals for granular reactivity and optimized performance.",
        icon: "AngularIcon",
        offset: "high",
        emphasis: true,
      },
      {
        title: "TypeScript",
        description:
          "Static typing orchestration, interface contracts, ensuring robust end-to-end type safety.",
        icon: "TypeScriptIcon",
        offset: "mid",
      },
      {
        title: "Storybook",
        description:
          "Isolated component labs, comprehensive design system documentation, and visual regression testing.",
        icon: "StorybookIcon",
        offset: "base",
      },
    ],
    pills: ["Figma", "CSS / SCSS", "Supabase", "Git", "Azure DevOps", "GitHub", "Accessibility", "Performance"],
  },
  contact: {
    eyebrow: "Next Step",
    title: {
      lineOne: "Have a project?",
      lineTwo: "Let's talk.",
    },
    ctas: [
      { label: "WhatsApp", href: "https://wa.me/5551997276111?text=Hello!+I+found+you+through+your+portfolio.", icon: "whatsapp" },
      { label: "Email", href: "mailto:murillohgmartins@gmail.com", icon: "email" },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/murillo-martins-ti/" },
      { label: "GitHub", href: "https://github.com/murillomartinss" },
    ],
  },
  footer: {
    copyright: "All rights reserved.",
    links: ["Github", "LinkedIn", "Source Code"],
  },
};
