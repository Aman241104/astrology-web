"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PhoneCall, Star, ShieldCheck, Clock } from "lucide-react";
import CosmicSnapshot from "./CosmicSnapshot";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-4 bg-white overflow-hidden relative">
      {/* Background Astrology Pattern - Simplified */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-gold rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-gold/20 rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="reveal-text flex flex-col sm:flex-row items-center gap-3 mb-1 justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 bg-crimson text-white font-black px-5 py-2 rounded-full text-xs md:text-sm animate-pulse shadow-xl shadow-crimson/20">
              <Star size={14} fill="white" />
              AUTHENTIC SUCCESS SOLUTIONS
            </div>
            <div className="inline-flex items-center gap-2 bg-saffron text-white font-black px-5 py-2 rounded-full text-xs md:text-sm shadow-xl shadow-saffron/20">
              100% SECURE & PRIVATE
            </div>
          </div>
          
          <h1 className="reveal-text text-5xl md:text-8xl font-black text-crimson leading-[0.9] mb-4 tracking-tighter uppercase">
            {t.hero.title}
          </h1>
          
          <p className="reveal-text text-xl md:text-4xl text-gray-800 mb-2 max-w-2xl font-black leading-tight uppercase italic text-shadow-gold">
            {t.hero.sub}
          </p>

          <p className="reveal-text text-base md:text-xl text-gray-600 mb-6 max-w-2xl font-bold leading-tight uppercase">
            {t.hero.desc}
          </p>

          <div className="reveal-text mb-3">
             <CosmicSnapshot />
          </div>

          <div className="reveal-text flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/919929563493"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-green-200 transition-all hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon />
              {t.hero.whatsapp}
            </a>
            
            <a 
              href="tel:+919929563493"
              className="w-full sm:w-auto bg-crimson hover:bg-crimson/90 text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-crimson/20 transition-all hover:scale-105 active:scale-95"
            >
              <PhoneCall fill="white" />
              {t.hero.call}
            </a>
          </div>

          <div className="reveal-text mt-2 grid grid-cols-3 gap-4 border-t border-gold/10 pt-2">
            <div className="flex flex-col items-center lg:items-start gap-1">
              <ShieldCheck className="text-gold" size={24} />
              <span className="text-[10px] font-black text-gray-500 uppercase">{t.hero.privacy}</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <Clock className="text-gold" size={24} />
              <span className="text-[10px] font-black text-gray-500 uppercase">{t.hero.results}</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <Star className="text-gold" size={24} fill="currentColor" />
              <span className="text-[10px] font-black text-gray-500 uppercase">{t.hero.exp}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image/Video Container */}
        <div className="reveal-img relative w-full lg:w-[450px] aspect-[4/5] bg-gradient-to-tr from-saffron/20 to-gold/20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
           <video 
             src="/images/hero-main-pinterest.mp4" 
             className="w-full h-full object-cover"
             autoPlay 
             loop 
             muted 
             playsInline
           />
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
           <div className="absolute bottom-6 left-6 right-6 text-white text-center">
             <div className="font-black text-xl italic uppercase tracking-wider">Authentic Spiritual Solutions</div>
             <div className="text-xs font-medium opacity-80 uppercase tracking-widest">100% Confidentiality</div>
           </div>
        </div>
      </div>
    </section>
  );
}
