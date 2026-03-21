"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Phone, Star } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-[1000]">
      {/* Top Marquee */}
      <div className="bg-crimson text-white py-1 md:py-1.5 text-center overflow-hidden h-7 md:h-9 flex items-center border-b border-gold/20 shadow-sm relative z-[1001]">
         <div className="whitespace-nowrap animate-marquee font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] opacity-90">
           🔥 RECENT SUCCESS: Rahul from Delhi just got his ex-back in 24 hours! | 🙏 Pooja from Mumbai stopped her divorce! | ✨ Ankit from UK solved relationship issues! | 🕉️ Santosh from USA solved marriage issues! | 🧿 Maya from Canada found love back solutions!
         </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gold/10 relative z-[1002]">
        <div className="max-w-7xl mx-auto px-4 h-14 md:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-crimson rounded-full flex items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-transform duration-1000">
               <Star className="text-white animate-pulse w-[18px] h-[18px] md:w-6 md:h-6" fill="white" />
            </div>
            <div className="flex flex-col">
              <div className="font-black text-crimson text-sm md:text-3xl tracking-tighter leading-none uppercase">
                {t.navbar.logo.split(" ")[0]} {t.navbar.logo.split(" ").length > 1 && <span className="text-saffron italic">{t.navbar.logo.split(" ")[1]}</span>}
              </div>
              <div className="text-[6px] md:text-[11px] font-black text-gray-500 tracking-[0.2em] md:tracking-[0.25em] mt-0.5 md:mt-1 uppercase">
                Expert Guidance
              </div>
            </div>
          </Link>
          
          <div className="flex items-center gap-2 md:gap-6 relative">
            <LanguageSwitcher />
            <a 
              href="tel:+919929563493"
              className="bg-crimson text-white px-3 md:px-8 py-2 md:py-3 rounded-full font-black flex items-center gap-1.5 md:gap-2 text-[10px] md:text-base animate-pulse-slow shadow-xl shadow-crimson/30 active:scale-95 transition-all hover:scale-105"
            >
              <Phone size={12} fill="white" className="md:w-5 md:h-5" />
              <span className="hidden sm:inline">{t.navbar.callNow}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Sub-header CTA - Hidden on mobile to save vertical space */}
      <div className="hidden md:block bg-crimson text-white py-1 px-4 border-t border-white/10 shadow-2xl relative z-[1000]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <p className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-white/90 italic">
            &quot;Spiritual Wisdom Is A Light Pointing At Reality&quot;
          </p>
          
          <a href="tel:+919929563493" className="flex-1 md:flex-none flex items-center justify-center gap-3">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-2xl animate-bounce">
              <Phone size={14} className="text-crimson md:w-4 md:h-4" fill="currentColor" />
            </div>
            <span className="text-sm md:text-lg font-black uppercase tracking-tighter drop-shadow-md">Every Problem Solution In One Phone Call</span>
          </a>

          <div className="hidden lg:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-saffron">
            <span className="w-2 h-2 bg-saffron rounded-full animate-ping"></span>
            Live Now
          </div>
        </div>
      </div>
    </header>
  );
}
