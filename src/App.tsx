import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionProps,
  type Variants,
} from "framer-motion";
import styles from "./App.module.css";

type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  wide?: boolean;
};

type TimelineItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  badge?: string;
  current?: boolean;
};

type SkillCard = {
  title: string;
  description: string;
  icon: string;
  offset: "low" | "high" | "mid" | "base";
  emphasis?: boolean;
};

const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services", active: true },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const serviceCards: ServiceCard[] = [
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
];

const timelineItems: TimelineItem[] = [
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
];

const skillCards: SkillCard[] = [
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
];

const socialLinks = ["LinkedIn", "GitHub"];

const sectionStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 72,
    scale: 0.92,
    rotateX: -14,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.95,
      ease: [0.2, 0.9, 0.2, 1],
    },
  },
};

function fadeUp(delay = 0, reduceMotion = false): MotionProps {
  if (reduceMotion) {
    return {};
  }

  return {
    initial: { opacity: 0, y: 48, scale: 0.96, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.9, ease: [0.2, 0.9, 0.2, 1], delay },
  };
}

function FrameNav() {
  return (
    <header className={styles.navWrap}>
      <div className={styles.nav}>
        <a className={styles.brand} href="#hero">
          ARCHITECT.UX
        </a>
        <nav className={styles.navLinks} aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={item.active ? styles.navLinkActive : styles.navLink}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className={styles.resumeButton} href="#contact">
          Resume
        </a>
      </div>
    </header>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const servicesRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll();
  const heroYOffset = useTransform(scrollYProgress, [0, 0.28], [0, reduceMotion ? 0 : -140]);
  const heroScale = useTransform(scrollYProgress, [0, 0.24], [1, reduceMotion ? 1 : 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, reduceMotion ? 1 : 0.46]);
  const leftGlowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -220]);
  const rightGlowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 180]);

  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start 90%", "end 10%"],
  });
  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    offset: ["start 90%", "end 10%"],
  });
  const { scrollYProgress: skillsProgress } = useScroll({
    target: skillsRef,
    offset: ["start 90%", "end 10%"],
  });
  const { scrollYProgress: contactProgress } = useScroll({
    target: contactRef,
    offset: ["start 92%", "end 8%"],
  });

  const servicesY = useTransform(servicesProgress, [0, 0.55, 1], [reduceMotion ? 0 : 180, 0, reduceMotion ? 0 : -110]);
  const servicesOpacity = useTransform(servicesProgress, [0, 0.18, 0.84, 1], [0.18, 1, 1, reduceMotion ? 1 : 0.52]);

  const experienceY = useTransform(experienceProgress, [0, 0.55, 1], [reduceMotion ? 0 : 190, 0, reduceMotion ? 0 : -120]);
  const experienceOpacity = useTransform(experienceProgress, [0, 0.2, 0.88, 1], [0.12, 1, 1, reduceMotion ? 1 : 0.56]);
  const lineProgress = useSpring(useTransform(experienceProgress, [0.15, 0.82], [0, 1]), {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  const skillsY = useTransform(skillsProgress, [0, 0.55, 1], [reduceMotion ? 0 : 180, 0, reduceMotion ? 0 : -115]);
  const skillsOpacity = useTransform(skillsProgress, [0, 0.2, 0.9, 1], [0.14, 1, 1, reduceMotion ? 1 : 0.5]);

  const contactY = useTransform(contactProgress, [0, 0.55, 1], [reduceMotion ? 0 : 140, 0, reduceMotion ? 0 : -70]);
  const contactOpacity = useTransform(contactProgress, [0, 0.2, 1], [0.2, 1, 1]);

  return (
    <div className={styles.page}>
      <div className={styles.noise} aria-hidden="true" />
      <motion.div
        className={styles.glowLeft}
        aria-hidden="true"
        style={{ y: leftGlowY }}
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 0.96, 1], opacity: [0.8, 1, 0.9, 0.8] }}
        transition={reduceMotion ? undefined : { duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className={styles.glowRight}
        aria-hidden="true"
        style={{ y: rightGlowY }}
        animate={reduceMotion ? undefined : { scale: [1, 0.92, 1.06, 1], opacity: [0.7, 0.92, 0.78, 0.7] }}
        transition={reduceMotion ? undefined : { duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <FrameNav />

      <main className={styles.canvas}>
        <section id="hero" className={styles.heroSection}>
          <div className={styles.heroFrame}>
            <motion.div
              className={styles.heroInner}
              style={{ y: heroYOffset, scale: heroScale, opacity: heroOpacity }}
              initial={reduceMotion ? undefined : "hidden"}
              animate={reduceMotion ? undefined : "show"}
              variants={sectionStagger}
            >
              <motion.h1 className={styles.heroTitle} variants={cardReveal}>
                Architecting
                <br />
                The Digital
                <br />
                <span>Frontier</span>
              </motion.h1>
              <motion.p className={styles.heroText} variants={cardReveal}>
                Frontend Architect &amp; Design System Specialist. Forging scalable,
                accessible, and high-performance digital experiences.
              </motion.p>
              <motion.a
                className={styles.primaryCta}
                href="#work"
                variants={cardReveal}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.04, boxShadow: "0 0 60px rgba(45, 212, 191, 0.4)" }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                Experience My Work
                <span aria-hidden="true">+</span>
              </motion.a>
            </motion.div>
            <motion.div
              className={styles.scrollHint}
              aria-hidden="true"
              animate={reduceMotion ? undefined : { y: [0, 16, 0], opacity: [0.35, 0.75, 0.35] }}
              transition={reduceMotion ? undefined : { duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <span>Scroll</span>
              <div />
            </motion.div>
          </div>
        </section>

        <motion.section
          ref={servicesRef}
          id="services"
          className={[styles.servicesSection, styles.sectionPanel].join(" ")}
          style={{ y: servicesY, opacity: servicesOpacity }}
        >
          <motion.div className={styles.sectionHeader} {...fadeUp(0.06, reduceMotion)}>
            <motion.h2
              whileInView={reduceMotion ? undefined : { x: [0, -14, 0], opacity: [0.2, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
            >
              Core Disciplines
            </motion.h2>
            <motion.div
              className={styles.sectionLine}
              whileInView={reduceMotion ? undefined : { scaleX: [0.2, 1.2, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, ease: [0.2, 0.9, 0.2, 1] }}
            />
          </motion.div>
          <motion.div
            className={styles.servicesGrid}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionStagger}
          >
            {serviceCards.map((card) => (
              <motion.article
                key={card.title}
                className={card.wide ? styles.serviceCardWide : styles.serviceCard}
                variants={cardReveal}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -16, scale: 1.02, boxShadow: "0 34px 70px rgba(0, 0, 0, 0.5)" }
                }
                transition={{ duration: 0.35 }}
              >
                {card.wide ? (
                  <motion.div
                    className={styles.serviceImage}
                    aria-hidden="true"
                    whileHover={reduceMotion ? undefined : { scale: 1.08, opacity: 0.32 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                ) : null}
                <div className={styles.serviceIcon} aria-hidden="true">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          ref={experienceRef}
          id="experience"
          className={[styles.experienceSection, styles.sectionPanel].join(" ")}
          style={{
            y: experienceY,
            opacity: experienceOpacity,
          }}
        >
          <motion.div
            className={styles.experienceGlow}
            aria-hidden="true"
            animate={reduceMotion ? undefined : { x: [0, 40, -10, 0], scale: [1, 1.05, 0.98, 1] }}
            transition={reduceMotion ? undefined : { duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.header className={styles.experienceHeader} {...fadeUp(0.08, reduceMotion)}>
            <h2>
              Engineering
              <br />
              <span>Systematic</span> Scale.
            </h2>
            <p>
              A timeline of architectural decisions, component library construction,
              and the pursuit of unbreakable UI pipelines across modern frameworks.
            </p>
          </motion.header>

          <div className={styles.timeline}>
            <div className={styles.timelineLine} aria-hidden="true">
              <motion.div className={styles.timelineLineProgress} style={{ scaleY: lineProgress }} />
            </div>
            <motion.div
              className={styles.timelineItems}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.15 }}
              variants={sectionStagger}
            >
              {timelineItems.map((item, index) => (
                <motion.article
                  key={item.period}
                  className={styles.timelineCard}
                  variants={cardReveal}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -14, x: 6, scale: 1.01, boxShadow: "0 34px 80px rgba(0, 0, 0, 0.42)" }
                  }
                  transition={{ duration: 0.35 }}
                >
                  <motion.div
                    className={item.current ? styles.timelineNodeCurrent : styles.timelineNode}
                    aria-hidden="true"
                    animate={
                      reduceMotion
                        ? undefined
                        : item.current
                          ? {
                              scale: [1, 1.4, 1],
                              boxShadow: [
                                "0 0 15px rgba(87, 241, 219, 0.45), 0 0 0 4px #0a0a0a",
                                "0 0 34px rgba(87, 241, 219, 0.95), 0 0 0 4px #0a0a0a",
                                "0 0 15px rgba(87, 241, 219, 0.45), 0 0 0 4px #0a0a0a",
                              ],
                            }
                          : { scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65] }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : { duration: item.current ? 2.8 : 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                    }
                  />
                  <div className={styles.timelineTop}>
                    <div>
                      <div className={styles.timelinePeriod}>{item.period}</div>
                      <h3>{item.title}</h3>
                      <div className={styles.timelineCompany}>{item.company}</div>
                    </div>
                    {item.badge ? <span className={styles.timelineBadge}>{item.badge}</span> : null}
                  </div>
                  <p>{item.description}</p>
                  <div className={styles.tagRow}>
                    {item.tags.map((tag) => (
                      <motion.span key={tag} className={styles.tag} whileHover={reduceMotion ? undefined : { y: -4, scale: 1.04 }}>
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={skillsRef}
          id="skills"
          className={[styles.skillsSection, styles.sectionPanel].join(" ")}
          style={{ y: skillsY, opacity: skillsOpacity }}
        >
          <motion.div
            className={styles.skillsGlow}
            aria-hidden="true"
            animate={reduceMotion ? undefined : { x: [0, -25, 10, 0], y: [0, 20, -10, 0] }}
            transition={reduceMotion ? undefined : { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <div className={styles.skillsLayout}>
            <motion.header className={styles.skillsIntro} {...fadeUp(0.08, reduceMotion)}>
              <h2>
                Technical
                <br />
                <span>Arsenal.</span>
              </h2>
              <p>
                Precision-engineered tools and methodologies for constructing robust,
                scalable, and ethereal digital experiences. Layered architecture meets
                fluid execution.
              </p>
            </motion.header>

            <motion.div
              className={styles.skillsGrid}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.15 }}
              variants={sectionStagger}
            >
              <motion.div
                className={styles.skillsGhostLine}
                aria-hidden="true"
                whileInView={reduceMotion ? undefined : { scaleY: [0.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.2, 0.9, 0.2, 1] }}
              />
              {skillCards.map((card, index) => {
                const classes = [
                  styles.skillCard,
                  card.offset === "low" ? styles.skillOffsetLow : "",
                  card.offset === "high" ? styles.skillOffsetHigh : "",
                  card.offset === "mid" ? styles.skillOffsetMid : "",
                  card.emphasis ? styles.skillCardEmphasis : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <motion.article
                    key={card.title}
                    className={classes}
                    variants={cardReveal}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -18,
                            scale: 1.03,
                            rotateZ: index % 2 === 0 ? -1.2 : 1.2,
                            boxShadow: "0 28px 64px rgba(0, 0, 0, 0.5)",
                          }
                    }
                    transition={{ duration: 0.35 }}
                  >
                    <div className={styles.skillIcon} aria-hidden="true">
                      {card.icon}
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </motion.article>
                );
              })}

              <motion.div className={styles.skillPills} variants={cardReveal}>
                <motion.div className={styles.skillPill} whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}>
                  Accessibility
                </motion.div>
                <motion.div className={styles.skillPill} whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}>
                  Performance
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={contactRef}
          id="contact"
          className={[styles.contactSection, styles.sectionPanel].join(" ")}
          style={{ y: contactY, opacity: contactOpacity }}
        >
          <div className={styles.contactFade} aria-hidden="true" />
          <motion.div className={styles.contactInner} {...fadeUp(0.08, reduceMotion)}>
            <p className={styles.contactEyebrow}>Initiate Sequence</p>
            <h2>
              Ready to build the
              <br />
              next artifact?
            </h2>
            <div className={styles.contactActions}>
              <motion.a
                className={styles.contactButton}
                href="mailto:hello@murillo.dev"
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.04, boxShadow: "0 0 72px rgba(87, 241, 219, 0.3)" }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                Initialize Contact
                <span aria-hidden="true">+</span>
              </motion.a>
              <div className={styles.contactLinks}>
                {socialLinks.map((label) => (
                  <motion.a key={label} href="#contact" whileHover={reduceMotion ? undefined : { y: -4 }}>
                    {label}
                    <span className={styles.contactUnderline} aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className={styles.footer}>
        <span>© 2024 LIQUID GLASS FRAMEWORK. ALL RIGHTS RESERVED.</span>
        <div className={styles.footerLinks}>
          <a href="#contact">Github</a>
          <a href="#contact">LinkedIn</a>
          <a href="#contact">Source</a>
        </div>
      </footer>
    </div>
  );
}
