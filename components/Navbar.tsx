"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-extrabold text-crimson text-lg md:text-xl tracking-tight leading-tight uppercase">
          {t.navbar.logo.split(" ")[0]} <span className="text-saffron italic">{t.navbar.logo.split(" ")[1]}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a 
            href="tel:+919929563493"
            className="bg-crimson text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 text-sm animate-pulse-slow shadow-lg shadow-crimson/20"
          >
            <Phone size={18} fill="white" />
            <span className="hidden sm:inline">{t.navbar.callNow}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
