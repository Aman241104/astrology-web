"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star, ShieldCheck, Heart, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import MandalaSVG from "./MandalaSVG";

export default function AboutExpert() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-10 md:py-16 px-4 bg-cream/30 relative overflow-hidden">
      {/* Decorative Background Mandalas */}
      <MandalaSVG className="absolute -top-24 -left-24 w-96 h-96 text-gold opacity-[0.05] animate-[spin_180s_linear_infinite]" />
      <MandalaSVG className="absolute -bottom-24 -right-24 w-[500px] h-[500px] text-saffron opacity-[0.03] animate-[spin_240s_linear_infinite_reverse]" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 relative z-10">
        
        {/* Left Side: Detail */}
        <div className="about-reveal flex-1 order-2 lg:order-1 w-full lg:w-auto">
          <div className="inline-flex items-center gap-2 bg-saffron/10 text-saffron font-bold px-4 py-1 rounded-full text-[10px] mb-1 uppercase tracking-widest border border-saffron/20">
             <Star size={12} fill="currentColor" />
             {t.about.meetTheMaster}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-crimson mb-2 leading-none uppercase tracking-tighter">
            {t.about.title}
          </h2>
          
          <div className="space-y-2 text-gray-700 font-medium text-sm md:text-base leading-relaxed">
            <p>{t.about.bio1}</p>

            <p>{t.about.bio2}</p>
            <p className="font-bold text-gray-900 border-l-4 border-gold pl-4 py-1 bg-gold/5 italic text-sm md:text-base">
              &quot;{t.about.quote}&quot; — {t.hero.expertName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {[
              { title: t.about.relationshipExp, icon: <Heart size={20} className="text-crimson" fill="currentColor" /> },
              { title: t.about.negativeEnergyExp, icon: <ShieldCheck size={20} className="text-gold" /> },
              { title: t.about.marriageProblemExp, icon: <Sparkles size={20} className="text-saffron" /> },
              { title: t.about.businessExp, icon: <Users size={20} className="text-blue-600" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border-2 border-gold/20 hover:border-gold transition-all duration-300">
                {item.icon}
                <span className="font-bold text-gray-800 uppercase tracking-wide text-sm">{item.title}</span>
              </div>
            ))}
          </div>
          </div>

          {/* Right Side: Image/Graphics */}
          <div className="about-reveal flex-1 order-1 lg:order-2 w-full lg:w-auto relative group">
           {/* Spiritual Aura Particles */}
           <div className="absolute -top-10 -left-10 w-20 h-20 bg-gold/20 rounded-full blur-2xl animate-pulse"></div>
           <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-crimson/10 rounded-full blur-2xl animate-pulse delay-700"></div>

           <div className="relative z-10 w-full aspect-[4/5] rounded-[40px] md:rounded-[60px] overflow-hidden border-8 border-white bg-gradient-to-br from-gold/10 to-saffron/10">
             {/* Conic Glow Overlay */}
             <div className="absolute -inset-40 bg-gradient-conic from-gold/20 via-transparent to-gold/20 animate-[spin_20s_linear_infinite] opacity-40 blur-3xl z-0"></div>

             <Image 
               src="/images/new/expert-maharaj.png" 
               alt={t.hero.expertName}
               fill
               className="object-cover z-0 grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
               sizes="(max-width: 768px) 100vw, 450px"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
             <div className="absolute bottom-10 left-0 w-full text-center text-white px-8 z-20">
               <div className="text-xs font-black uppercase tracking-[0.4em] mb-3 text-saffron">{t.about.awardWinner}</div>
               <div className="text-4xl font-black italic uppercase leading-none">{t.hero.expertName}</div>
             </div>
           </div>
           
           <div className="absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br from-gold to-saffron text-white rounded-full flex flex-col items-center justify-center text-center p-6 z-30 border-[12px] border-white rotate-12 hover:rotate-0 transition-all duration-700 cursor-default group/badge">
              <div className="text-4xl font-black leading-none mb-1 group-hover/badge:scale-110 transition-transform">20+</div>
              <div className="text-[10px] font-black uppercase leading-tight tracking-[0.2em] opacity-90">{t.about.yrsExp}</div>
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20"></div>
           </div>
        </div>

      </div>
    </section>
  );
}
