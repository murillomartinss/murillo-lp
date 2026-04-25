import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { landingContent, type LandingContent } from "../config/landingContent";
import { enContent } from "../config/landingContent.en";
import { esContent } from "../config/landingContent.es";

export type Locale = "pt" | "en" | "es";

type LanguageContextType = {
  locale: Locale;
  content: LandingContent;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const contentMap: Record<Locale, LandingContent> = {
  pt: landingContent,
  en: enContent,
  es: esContent,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    const langMap: Record<Locale, string> = { pt: "pt-BR", en: "en", es: "es" };
    document.documentElement.lang = langMap[next];
  };

  useEffect(() => {
    document.documentElement.lang = "pt-BR";
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, content: contentMap[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
