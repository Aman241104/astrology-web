"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, PhoneCall, Star, ShieldCheck, Clock, Moon, Sun } from "lucide-react";
import CosmicSnapshot from "./CosmicSnapshot";
import Image from "next/image";
import ZodiacWheel from "./ZodiacWheel";

export default function Hero() {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".reveal-text", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });
      
      gsap.to(".reveal-img", {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      });

      // Floating animation for icons
      gsap.to(".float-icon", {
        y: -30,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-24 md:pt-40 pb-12 px-4 bg-gradient-to-b from-cream to-white overflow-hidden relative">
      {/* Background Astrology Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <ZodiacWheel className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] text-gold" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>

        {/* Floating Astrology Elements */}
        <Moon className="absolute top-40 left-[10%] text-gold float-icon opacity-20" size={60} />
        <Sun className="absolute bottom-40 right-[15%] text-saffron float-icon opacity-20" size={80} />
        <Star className="absolute top-60 right-[10%] text-gold float-icon opacity-30" size={40} fill="currentColor" />
        <Star className="absolute bottom-20 left-[20%] text-saffron float-icon opacity-20" size={30} fill="currentColor" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left p-4 md:p-8 rounded-[30px] md:rounded-[40px] border-4 border-gold/5 bg-white/30 backdrop-blur-sm shadow-2xl relative">
          {/* Decorative Corner Ornaments */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-saffron rounded-tl-2xl opacity-20"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-crimson rounded-br-2xl opacity-20"></div>

          <div className="reveal-text opacity-0 translate-y-10 flex flex-col sm:flex-row items-center gap-2 md:gap-3 mb-4 md:mb-6 justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 bg-crimson text-white font-black px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-base animate-pulse shadow-2xl shadow-crimson/40">
              <Star fill="white" className="w-3 h-3 md:w-4 md:h-4" />
              EXPERT SPIRITUAL GUIDANCE
            </div>
            <div className="inline-flex items-center gap-2 bg-saffron text-white font-black px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-base shadow-2xl shadow-saffron/40">
              ANCIENT VEDIC RITUALS
            </div>
          </div>
          
          <h1 className="reveal-text opacity-0 translate-y-10 text-3xl md:text-9xl font-black text-crimson leading-tight md:leading-[0.85] mb-4 md:mb-8 tracking-tighter uppercase drop-shadow-2xl">
            {t.hero.title}
          </h1>
          
          <p className="reveal-text opacity-0 translate-y-10 text-xl md:text-5xl text-gray-900 mb-6 md:mb-10 max-w-2xl font-black leading-none uppercase italic text-shadow-gold">
            {t.hero.sub}
          </p>

          <p className="reveal-text opacity-0 translate-y-10 text-sm md:text-2xl text-gray-700 mb-8 md:mb-12 max-w-2xl font-bold leading-tight uppercase opacity-80">
            {t.hero.desc}
          </p>

          <div className="reveal-text opacity-0 translate-y-10 mb-8 md:mb-10">
             <CosmicSnapshot />
          </div>

          <div className="reveal-text opacity-0 translate-y-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/919929563493"
              className="w-full sm:w-auto bg-saffron hover:bg-saffron/90 text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-saffron/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle fill="white" />
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

          <div className="reveal-text opacity-0 translate-y-10 mt-8 md:mt-10 grid grid-cols-3 gap-2 md:gap-4 border-t border-gold/10 pt-6 md:pt-8">
            <div className="flex flex-col items-center lg:items-start gap-1">
              <ShieldCheck className="text-gold w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[8px] md:text-[10px] font-black text-gray-500 uppercase">{t.hero.privacy}</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <Clock className="text-gold w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[8px] md:text-[10px] font-black text-gray-500 uppercase">{t.hero.results}</span>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <Star className="text-gold w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
              <span className="text-[8px] md:text-[10px] font-black text-gray-500 uppercase">{t.hero.exp}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="reveal-img opacity-0 translate-x-10 relative w-full lg:w-[600px] aspect-[4/3] bg-gradient-to-tr from-saffron/20 to-gold/20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
           <Image 
             src="/images/hero-main.png" 
             alt="Love & Relationship Problem Solution"
             fill
             priority
             className="object-cover"
             sizes="(max-width: 768px) 100vw, 600px"
           />
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
           <div className="absolute bottom-6 left-6 right-6 text-white text-center">
             <div className="font-black text-xl italic uppercase tracking-wider">Expert Astrological Guidance</div>
             <div className="text-xs font-medium opacity-80 uppercase tracking-widest">Personalized Spiritual Solutions</div>
           </div>
        </div>
      </div>
    </section>
  );
}
