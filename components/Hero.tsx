"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, PhoneCall, Star, ShieldCheck, Clock } from "lucide-react";
import CosmicSnapshot from "./CosmicSnapshot";
import Image from "next/image";

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
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-36 md:pt-40 pb-12 px-4 bg-gradient-to-b from-cream to-white overflow-hidden relative">
      {/* Background Astrology Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-2 border-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/40 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-gold/20 rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="reveal-text opacity-0 translate-y-10 flex flex-col sm:flex-row items-center gap-3 mb-6 justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 bg-crimson text-white font-black px-5 py-2 rounded-full text-xs md:text-sm animate-pulse shadow-xl shadow-crimson/20">
              <Star size={14} fill="white" />
              100% SUCCESS GUARANTEE
            </div>
            <div className="inline-flex items-center gap-2 bg-saffron text-white font-black px-5 py-2 rounded-full text-xs md:text-sm shadow-xl shadow-saffron/20">
              PAY AFTER RESULTS
            </div>
          </div>
          
          <h1 className="reveal-text opacity-0 translate-y-10 text-5xl md:text-8xl font-black text-crimson leading-[0.9] mb-8 tracking-tighter uppercase">
            {t.hero.title}
          </h1>
          
          <p className="reveal-text opacity-0 translate-y-10 text-2xl md:text-4xl text-gray-800 mb-8 max-w-2xl font-black leading-none uppercase italic text-shadow-gold">
            {t.hero.sub}
          </p>

          <p className="reveal-text opacity-0 translate-y-10 text-lg md:text-xl text-gray-600 mb-10 max-w-2xl font-bold leading-tight uppercase">
            {t.hero.desc}
          </p>

          <div className="reveal-text opacity-0 translate-y-10 mb-10">
             <CosmicSnapshot />
          </div>

          <div className="reveal-text opacity-0 translate-y-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/919929563493"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-green-200 transition-all hover:scale-105 active:scale-95"
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

          <div className="reveal-text opacity-0 translate-y-10 mt-10 grid grid-cols-3 gap-4 border-t border-gold/10 pt-8">
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
        <div className="reveal-img opacity-0 translate-x-10 relative w-full lg:w-[450px] aspect-[4/5] bg-gradient-to-tr from-saffron/20 to-gold/20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
           <Image 
             src="https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?auto=format&fit=crop&q=80&w=450&h=560" 
             alt="Love & Relationship Problem Solution"
             fill
             priority
             className="object-cover"
             sizes="(max-width: 768px) 100vw, 450px"
           />
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
           <div className="absolute bottom-6 left-6 right-6 text-white text-center">
             <div className="font-black text-xl italic uppercase tracking-wider">100% Guaranteed Solutions</div>
             <div className="text-xs font-medium opacity-80 uppercase tracking-widest">Pay After Results</div>
           </div>
        </div>
      </div>
    </section>
  );
}
