"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, translations } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  t: typeof translations.en;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const detectLocationAndLanguage = async () => {
      try {
        // 1. Try Browser Language first
        const browserLang = navigator.language.split("-")[0];
        if (["hi", "bn", "te", "mr", "ta", "gu"].includes(browserLang)) {
          setLocale(browserLang as Locale);
          return;
        }

        // 2. Fetch GeoIP data for smarter detection in India
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data.country_code === "IN") {
          const region = data.region?.toLowerCase() || "";
          
          if (region.includes("maharashtra")) setLocale("mr");
          else if (region.includes("gujarat")) setLocale("gu");
          else if (region.includes("west bengal")) setLocale("bn");
          else if (region.includes("tamil nadu")) setLocale("ta");
          else if (region.includes("telangana") || region.includes("andhra")) setLocale("te");
          else setLocale("hi"); // Default for India
        }
      } catch (error) {
        console.error("Location detection failed:", error);
        // Fallback already set to 'en'
      }
    };

    detectLocationAndLanguage();
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] || translations.en, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
