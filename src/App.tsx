import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type MotionProps,
  type Variants,
} from "framer-motion";
import styles from "./App.module.css";
import { landingContent } from "./config/landingContent";
import SplashScreen from "./components/SplashScreen";
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
import WhatsAppIcon from "./assets/icons/whatsapp.svg?react";
import EmailIcon from "./assets/icons/email.svg?react";
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

const ctaIcons: Record<string, React.ReactNode> = {
  whatsapp: <WhatsAppIcon width={16} height={16} />,
  email: <EmailIcon width={16} height={16} />,
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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    onNavigate(href);
  };

  const isActive = (href: string) =>
    (landingContent.aliases[href.slice(1)] ?? href.slice(1)) === activeSection;

  return (
    <header className={styles.navWrap}>
      <div className={styles.nav}>
        <a
          className={styles.brand}
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <LogoIcon width={36} height={36} className={styles.logoIcon} aria-label="Murillo Martins" />
        </a>
        <nav className={styles.navLinks} aria-label="Primary">
          {landingContent.nav.items.map((item) => (
            <a
              key={item.label}
              className={isActive(item.href) ? styles.navLinkActive : styles.navLink}
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
        <button
          className={[styles.hamburger, menuOpen ? styles.hamburgerOpen : ""].filter(Boolean).join(" ")}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.navMobileMenu}
            aria-label="Menu mobile"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {landingContent.nav.items.map((item) => (
              <a
                key={item.label}
                className={isActive(item.href) ? styles.navMobileLinkActive : styles.navMobileLink}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const [splashDone, setSplashDone] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [emailCopied, setEmailCopied] = useState(false);
  const scrollViewportRef = useRef<HTMLDivElement | null>(null);

  const scrollToHash = (hash: string, behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth") => {
    const normalizedHash = hash.startsWith("#") ? hash.slice(1) : hash;
    const targetId = landingContent.aliases[normalizedHash] ?? normalizedHash;
    const target = document.getElementById(targetId);
    const viewport = scrollViewportRef.current;

    if (!target || !viewport) {
      return;
    }

    const HEADER_OFFSET = 96;

    let layoutTop = 0;
    let el: HTMLElement | null = target;
    while (el && el !== viewport) {
      layoutTop += el.offsetTop;
      el = el.offsetParent as HTMLElement | null;
    }

    viewport.scrollTo({ top: layoutTop - HEADER_OFFSET, behavior });
    setActiveSection(targetId);

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
    const viewport = scrollViewportRef.current;
    if (!viewport) return;

    const sectionIds = ["hero", "services", "experience", "skills", "contact"];

    const updateActive = () => {
      const viewportRect = viewport.getBoundingClientRect();
      const activationLine = viewportRect.height * 0.35;

      let best = sectionIds[0];
      let bestDist = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - viewportRect.top;
        if (top <= activationLine) {
          const dist = activationLine - top;
          if (dist < bestDist) {
            bestDist = dist;
            best = id;
          }
        }
      }

      setActiveSection(best);
    };

    viewport.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => viewport.removeEventListener("scroll", updateActive);
  }, []);


  return (
    <>
      <AnimatePresence>
        {!splashDone && <SplashScreen key="splash" onComplete={() => setSplashDone(true)} />}
      </AnimatePresence>
    <div className={styles.page}>
      <div ref={scrollViewportRef} className={styles.scrollViewport}>
        <div className={styles.noise} aria-hidden="true" />
        <motion.div
          className={styles.glowLeft}
          aria-hidden="true"
          animate={reduceMotion ? undefined : { scale: [1, 1.08, 0.96, 1], opacity: [0.8, 1, 0.9, 0.8] }}
          transition={reduceMotion ? undefined : { duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.glowRight}
          aria-hidden="true"
          animate={reduceMotion ? undefined : { scale: [1, 0.92, 1.06, 1], opacity: [0.7, 0.92, 0.78, 0.7] }}
          transition={reduceMotion ? undefined : { duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <FrameNav onNavigate={scrollToHash} activeSection={activeSection} />

        <main className={styles.canvas}>
          <section id="hero" className={styles.heroSection}>
            <div className={styles.heroFrame}>
              <motion.div
                className={styles.heroInner}
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
                  whileHover={reduceMotion ? undefined : { backgroundColor: "#1a6fe0", boxShadow: "0 0 60px rgba(29, 111, 216, 0.4)" }}
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

          <section
            id="services"
            className={styles.servicesSection}
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
          </section>

          <section
            id="experience"
            className={styles.experienceSection}
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
                <div className={styles.timelineLineProgress} />
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
          </section>

          <section
            id="skills"
            className={styles.skillsSection}
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
          </section>

          <section
            id="contact"
            className={styles.contactSection}
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
                <div className={styles.contactButtons}>
                  {landingContent.contact.ctas.map((cta, i) => {
                    const isEmail = cta.href.startsWith("mailto:");
                    const email = isEmail ? cta.href.replace("mailto:", "") : null;
                    return (
                      <motion.a
                        key={cta.icon}
                        className={i === 0 ? styles.contactButton : styles.contactButtonOutline}
                        href={cta.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (isEmail && email) {
                            navigator.clipboard.writeText(email).then(() => {
                              setEmailCopied(true);
                              setTimeout(() => setEmailCopied(false), 2000);
                            });
                          } else {
                            window.open(cta.href, "_blank", "noopener,noreferrer");
                          }
                        }}
                        whileHover={reduceMotion ? undefined : { boxShadow: "0 0 56px rgba(29, 111, 216, 0.35)" }}
                        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                      >
                        <span className={styles.ctaIcon} aria-hidden="true">{ctaIcons[cta.icon]}</span>
                        {isEmail ? (emailCopied ? "Copiado!" : cta.label) : cta.label}
                      </motion.a>
                    );
                  })}
                </div>
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
          </section>
        </main>

        <footer className={styles.footer}>
          <span>
            © {new Date().getFullYear()} Murillo Martins.
            <span className={styles.footerBreak}> Todos os direitos reservados.</span>
          </span>
        </footer>
      </div>
    </div>
    </>
  );
}
