import { useEffect, useRef, useState } from "react";
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
import { landingContent } from "./config/landingContent";
import FigmaIcon from "./assets/icons/figma.svg?react";
import CssIcon from "./assets/icons/css.svg?react";
import SupabaseIcon from "./assets/icons/supabase.svg?react";
import GitIcon from "./assets/icons/git.svg?react";
import AzureIcon from "./assets/icons/azure.svg?react";
import GithubIcon from "./assets/icons/github.svg?react";
import AccessibilityIcon from "./assets/icons/accessibility.svg?react";
import PerformanceIcon from "./assets/icons/performance.svg?react";
import ReactIcon from "./assets/icons/react.svg?react";
import AngularIcon from "./assets/icons/angular.svg?react";
import TypeScriptIcon from "./assets/icons/typescript.svg?react";
import StorybookIcon from "./assets/icons/storybook.svg?react";
import LandingIcon from "./assets/icons/landing.svg?react";
import WebIcon from "./assets/icons/web.svg?react";
import DesignSystemIcon from "./assets/icons/designsystem.svg?react";
import RefactorIcon from "./assets/icons/refactor.svg?react";
import ConsultingIcon from "./assets/icons/consulting.svg?react";
import MentoringIcon from "./assets/icons/mentoring.svg?react";
import LinkedinIcon from "./assets/icons/linkedin.svg?react";
import LogoIcon from "./assets/logo.svg?react";

type FrameNavProps = {
  onNavigate: (hash: string) => void;
  activeSection: string;
};

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

const serviceIcons: Record<string, React.ReactNode> = {
  landing: <LandingIcon width={18} height={18} />,
  web: <WebIcon width={18} height={18} />,
  designsystem: <DesignSystemIcon width={18} height={18} />,
  refactor: <RefactorIcon width={18} height={18} />,
  consulting: <ConsultingIcon width={18} height={18} />,
  mentoring: <MentoringIcon width={18} height={18} />,
};

const skillIcons: Record<string, React.ReactNode> = {
  "ReactIcon": <ReactIcon width={22} height={22} />,
  "AngularIcon": <AngularIcon width={22} height={22} />,
  "TypeScriptIcon": <TypeScriptIcon width={22} height={22} />,
  "StorybookIcon": <StorybookIcon width={22} height={22} />,
};

const socialIcons: Record<string, React.ReactNode> = {
  "LinkedIn": <LinkedinIcon width={18} height={18} />,
  "GitHub": <GithubIcon width={18} height={18} />,
};

const pillIcons: Record<string, React.ReactNode> = {
  "Figma": <FigmaIcon width={14} height={14} />,
  "CSS / SCSS": <CssIcon width={14} height={14} />,
  "Supabase": <SupabaseIcon width={14} height={14} />,
  "Git": <GitIcon width={14} height={14} />,
  "Azure DevOps": <AzureIcon width={14} height={14} />,
  "GitHub": <GithubIcon width={14} height={14} />,
  "Acessibilidade": <AccessibilityIcon width={14} height={14} />,
  "Performance": <PerformanceIcon width={14} height={14} />,
};

function fadeUp(delay = 0, reduceMotion: boolean | null = false): MotionProps {
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

function FrameNav({ onNavigate, activeSection }: FrameNavProps) {
  return (
    <header className={styles.navWrap}>
      <div className={styles.nav}>
        <a
          className={styles.brand}
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("#hero");
          }}
        >
          <LogoIcon width={32} height={24} aria-label="Murillo Martins" />
        </a>
        <nav className={styles.navLinks} aria-label="Primary">
          {landingContent.nav.items.map((item) => (
            <a
              key={item.label}
              className={
                (landingContent.aliases[item.href.slice(1)] ?? item.href.slice(1)) === activeSection
                  ? styles.navLinkActive
                  : styles.navLink
              }
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("hero");
  const scrollViewportRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToHash = (hash: string, behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth") => {
    const normalizedHash = hash.startsWith("#") ? hash.slice(1) : hash;
    const targetId = landingContent.aliases[normalizedHash] ?? normalizedHash;
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior, block: "start" });

    if (window.location.hash !== `#${targetId}`) {
      window.history.replaceState(null, "", `#${targetId}`);
    }
  };

  useEffect(() => {
    const initialHash = window.location.hash;

    if (!initialHash) {
      return;
    }

    requestAnimationFrame(() => {
      scrollToHash(initialHash, "auto");
    });
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "services", "experience", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { root: scrollViewportRef.current, threshold: 0.4 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ container: scrollViewportRef });
  const heroYOffset = useTransform(scrollYProgress, [0, 0.28], [0, reduceMotion ? 0 : -140]);
  const heroScale = useTransform(scrollYProgress, [0, 0.24], [1, reduceMotion ? 1 : 0.94]);
  const leftGlowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -220]);
  const rightGlowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 180]);

  const { scrollYProgress: servicesProgress } = useScroll({
    container: scrollViewportRef,
    target: servicesRef,
    offset: ["start 90%", "end 10%"],
  });
  const { scrollYProgress: experienceProgress } = useScroll({
    container: scrollViewportRef,
    target: experienceRef,
    offset: ["start 90%", "end 10%"],
  });
  const { scrollYProgress: skillsProgress } = useScroll({
    container: scrollViewportRef,
    target: skillsRef,
    offset: ["start 90%", "end 10%"],
  });
  const { scrollYProgress: contactProgress } = useScroll({
    container: scrollViewportRef,
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
      <div ref={scrollViewportRef} className={styles.scrollViewport}>
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
        <FrameNav onNavigate={scrollToHash} activeSection={activeSection} />

        <main className={styles.canvas}>
          <section id="hero" className={styles.heroSection}>
            <div className={styles.heroFrame}>
              <motion.div
                className={styles.heroInner}
                style={{ y: heroYOffset, scale: heroScale, opacity: 1 }}
                initial={reduceMotion ? undefined : "hidden"}
                animate={reduceMotion ? undefined : "show"}
                variants={sectionStagger}
              >
                <motion.h1 className={styles.heroTitle} variants={cardReveal}>
                  {landingContent.hero.title.lineOne}
                  <br />
                  {landingContent.hero.title.lineTwo}
                  <br />
                  <span>{landingContent.hero.title.highlight}</span>
                </motion.h1>
                <motion.p className={styles.heroText} variants={cardReveal}>
                  {landingContent.hero.description}
                </motion.p>
                <motion.a
                  className={styles.primaryCta}
                  href={landingContent.hero.cta.href}
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToHash(landingContent.hero.cta.href);
                  }}
                  variants={cardReveal}
                  whileHover={reduceMotion ? undefined : { y: -5, scale: 1.04, boxShadow: "0 0 60px rgba(45, 212, 191, 0.4)" }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  {landingContent.hero.cta.label}
                  <span aria-hidden="true">+</span>
                </motion.a>
              </motion.div>
              <div className={styles.scrollHintWrap}>
                <motion.div
                  className={styles.scrollHint}
                  aria-hidden="true"
                  animate={reduceMotion ? undefined : { y: [0, 16, 0], opacity: [0.35, 0.75, 0.35] }}
                  transition={reduceMotion ? undefined : { duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <span>{landingContent.hero.scrollHint}</span>
                  <div />
                </motion.div>
              </div>
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
                {landingContent.services.eyebrow}
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
              {landingContent.services.cards.map((card) => (
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
                    {serviceIcons[card.icon] ?? card.icon}
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
                {landingContent.experience.title.lineOne}
                <br />
                <span>{landingContent.experience.title.highlight}</span> {landingContent.experience.title.lineTwo}
              </h2>
              <p>{landingContent.experience.description}</p>
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
                {landingContent.experience.items.map((item) => (
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
                  {landingContent.skills.title.lineOne}
                  <br />
                  <span>{landingContent.skills.title.highlight}</span>
                </h2>
                <p>{landingContent.skills.description}</p>
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
                {landingContent.skills.cards.map((card, index) => {
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
                      <div className={styles.skillCardHeader}>
                        <div className={styles.skillIcon} aria-hidden="true">
                          {skillIcons[card.icon] ?? card.icon}
                        </div>
                        <h3>{card.title}</h3>
                      </div>
                      <p>{card.description}</p>
                    </motion.article>
                  );
                })}

                <motion.div className={styles.skillPills} variants={cardReveal}>
                  <div className={styles.skillPillsTrack}>
                    {[...landingContent.skills.pills, ...landingContent.skills.pills].map((pill, i) => (
                      <div key={i} className={styles.skillPill}>
                        {pillIcons[pill] && <span className={styles.skillPillIcon}>{pillIcons[pill]}</span>}
                        {pill}
                      </div>
                    ))}
                  </div>
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
              <p className={styles.contactEyebrow}>{landingContent.contact.eyebrow}</p>
              <h2>
                {landingContent.contact.title.lineOne}
                <br />
                {landingContent.contact.title.lineTwo}
              </h2>
              <div className={styles.contactActions}>
                <motion.a
                  className={styles.contactButton}
                  href={landingContent.contact.cta.href}
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 1.04, boxShadow: "0 0 72px rgba(87, 241, 219, 0.3)" }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                >
                  {landingContent.contact.cta.label}
                  <span aria-hidden="true">+</span>
                </motion.a>
                <div className={styles.contactLinks}>
                  {landingContent.contact.socialLinks.map(({ label, href }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={reduceMotion ? undefined : { y: -4 }}
                    >
                      {socialIcons[label] && <span className={styles.socialIcon} aria-hidden="true">{socialIcons[label]}</span>}
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
          <span>© {new Date().getFullYear()} {landingContent.footer.copyright}</span>
        </footer>
      </div>
    </div>
  );
}
