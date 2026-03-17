"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-[100]">
      <div className="bg-crimson text-white py-1.5 text-center overflow-hidden h-9 flex items-center border-b border-gold/20 shadow-sm relative z-[110]">
         <div className="whitespace-nowrap animate-marquee font-bold text-[11px] md:text-xs uppercase tracking-[0.2em] opacity-90">
           🔥 RECENT SUCCESS: Rahul from Delhi just got his ex-back in 24 hours! | 🙏 Pooja from Mumbai stopped her divorce! | ✨ Ankit from UK doubled his business revenue! | 🕉️ Santosh from USA solved marriage issues! | 🧿 Maya from Canada removed black magic!
         </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <div className="font-extrabold text-crimson text-base md:text-xl tracking-tight leading-none uppercase">
              {t.navbar.logo.split(" ")[0]} <span className="text-saffron italic">{t.navbar.logo.split(" ")[1]}</span>
            </div>
            <div className="text-[7px] font-bold text-gray-400 tracking-[0.2em] mt-0.5 uppercase hidden sm:block">
              100% Guaranteed Solutions
            </div>
          </Link>
          
          <div className="flex items-center gap-1.5 md:gap-4">
            <LanguageSwitcher />
            <a 
              href="tel:+919929563493"
              className="bg-crimson text-white px-3 md:px-5 py-1.5 md:py-2.5 rounded-full font-black flex items-center gap-1.5 text-[10px] md:text-sm animate-pulse-slow shadow-lg shadow-crimson/20 active:scale-95 transition-all"
            >
              <Phone size={12} fill="white" className="md:w-[18px] md:h-[18px]" />
              <span className="xs:inline">{t.navbar.callNow}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Clickbait Sub-header */}
      <div className="bg-crimson text-white py-2 px-4 border-t border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <p className="hidden md:block text-[10px] lg:text-xs font-black uppercase tracking-widest text-white/90 italic">
            "Astrology Is Just A Finger Pointing At Reality"
          </p>
          
          <a href="tel:+919929563493" className="flex-1 md:flex-none flex items-center justify-center gap-3">
            <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xl shadow-black/20 animate-bounce">
              <Phone size={14} className="text-crimson" fill="currentColor" />
            </div>
            <span className="text-[11px] md:text-lg font-black uppercase tracking-tighter">Every Problem Solution In One Phone Call</span>
          </a>

          <p className="hidden lg:block text-xs font-black uppercase tracking-widest text-saffron animate-pulse">
            Available 24/7
          </p>
        </div>
      </div>
    </header>
  );
}
