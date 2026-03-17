"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/lib/translations";
import { Languages } from "lucide-react";

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "bn", label: "বাংলা" },
  { code: "te", label: "తెలుగు" },
  { code: "mr", label: "मराठी" },
  { code: "ta", label: "தமிழ்" },
];


export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 bg-cream border border-gold/20 px-3 py-1.5 rounded-full text-xs font-black text-gray-700 hover:border-saffron transition-all">
        <Languages size={14} className="text-saffron" />
        <span className="uppercase">{locale}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-32 bg-white shadow-2xl rounded-2xl border border-gold/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[100] overflow-hidden">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={`w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-saffron/10 transition-colors ${
              locale === lang.code ? "bg-saffron/10 text-saffron" : "text-gray-600"
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
