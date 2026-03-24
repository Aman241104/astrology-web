"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/lib/translations";
import { Languages, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
];


export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-cream border border-gold/20 px-3 py-1.5 rounded-full text-xs font-black text-gray-700 hover:border-saffron transition-all active:scale-95"
      >
        <Languages size={14} className="text-saffron" />
        <span className="uppercase">{locale}</span>
        <ChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-white shadow-2xl rounded-2xl border border-gold/10 z-[200] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-xs font-bold hover:bg-saffron/10 transition-colors flex items-center justify-between ${
                  locale === lang.code ? "bg-saffron/10 text-saffron" : "text-gray-600"
                }`}
              >
                {lang.label}
                {locale === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-saffron" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
