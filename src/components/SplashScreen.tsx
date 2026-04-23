import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./SplashScreen.module.css";
import LogoIcon from "../assets/logo.svg?react";

type SplashScreenProps = {
  onComplete: () => void;
};

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const reduceMotion = useReducedMotion();
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const delay = reduceMotion ? 0 : 1800;
    const timer = setTimeout(() => onCompleteRef.current(), delay);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className={styles.logoWrap}
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.6 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, ease: [0.2, 0.9, 0.2, 1] }}
      >
        <div className={styles.glow} aria-hidden="true" />
        <LogoIcon width={180} height={180} />
      </motion.div>
    </motion.div>
  );
}
