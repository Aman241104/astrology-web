"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, PhoneCall, Star, ShieldCheck, Clock } from "lucide-react";
import CosmicSnapshot from "./CosmicSnapshot";

export default function Hero() {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });
      
      gsap.from(".reveal-img", {
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-24 pb-12 px-4 bg-gradient-to-b from-cream to-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="reveal-text flex flex-col sm:flex-row items-center gap-3 mb-6 justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 bg-saffron/10 text-saffron font-bold px-4 py-1.5 rounded-full text-xs md:text-sm border border-saffron/20">
              <Star size={14} fill="currentColor" />
              {t.hero.privacy}
            </div>
            <div className="inline-flex items-center gap-2 bg-crimson text-white font-bold px-4 py-1.5 rounded-full text-xs md:text-sm animate-pulse">
              {t.hero.freeConsult}
            </div>
            <div className="hidden sm:flex items-center gap-2 text-crimson font-black text-xs uppercase tracking-tighter">
               <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
               ONLY 4 SLOTS LEFT TODAY
            </div>
          </div>
          
          <h1 className="reveal-text text-4xl md:text-7xl font-black text-crimson leading-[1.0] mb-6 tracking-tighter uppercase">
            {t.hero.title}
          </h1>
          
          <p className="reveal-text text-xl md:text-2xl text-gray-800 mb-8 max-w-2xl font-bold leading-tight uppercase">
            {t.hero.sub}
          </p>

          <p className="reveal-text text-md md:text-lg text-gray-600 mb-10 max-w-2xl font-medium leading-relaxed">
            {t.hero.desc}
          </p>

          <div className="reveal-text mb-10">
             <CosmicSnapshot />
          </div>

          <div className="reveal-text flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/919929563493"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-green-200 transition-all hover:scale-105"
            >
              <MessageCircle fill="white" />
              {t.hero.whatsapp}
            </a>
            
            <a 
              href="tel:+919929563493"
              className="w-full sm:w-auto bg-crimson hover:bg-crimson/90 text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-crimson/20 transition-all hover:scale-105"
            >
              <PhoneCall fill="white" />
              {t.hero.call}
            </a>
          </div>

          <div className="reveal-text mt-10 grid grid-cols-3 gap-4 border-t border-gold/10 pt-8">
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

        {/* Right Side: Image Placeholder */}
        <div className="reveal-img relative w-full lg:w-[450px] aspect-[4/5] bg-gradient-to-tr from-saffron/20 to-gold/20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
           <div className="absolute inset-0 flex items-center justify-center text-gold/30 font-black text-2xl uppercase tracking-widest text-center p-8">
              [ {t.hero.maharajName} ]
           </div>
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
           <div className="absolute bottom-6 left-6 right-6 text-white text-center">
             <div className="font-black text-xl italic uppercase tracking-wider">{t.hero.maharajName}</div>
             <div className="text-xs font-medium opacity-80">{t.hero.goldMedalist}</div>
           </div>
        </div>
      </div>
    </section>
  );
}
