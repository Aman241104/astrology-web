"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function AboutMaharaj() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-cream/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Detail */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-saffron/10 text-saffron font-bold px-4 py-1 rounded-full text-xs mb-6 uppercase tracking-widest border border-saffron/20">
             <Star size={14} fill="currentColor" />
             {t.about.meetTheMaster}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-crimson mb-8 leading-none uppercase tracking-tighter">
            {t.about.title}
          </h2>
          
          <div className="space-y-6 text-gray-700 font-medium text-lg leading-relaxed">
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
            <p className="font-bold text-gray-900 border-l-4 border-gold pl-6 py-2 bg-gold/5">
              "{t.about.quote}" — {t.hero.maharajName}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { title: t.about.vashikaranExp, icon: <Heart size={20} className="text-crimson" fill="currentColor" /> },
              { title: t.about.kalaJadooExp, icon: <ShieldCheck size={20} className="text-gold" /> },
              { title: t.about.kundliExp, icon: <Sparkles size={20} className="text-saffron" /> },
              { title: t.about.businessExp, icon: <Star size={20} className="text-gold" fill="currentColor" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gold/10">
                {item.icon}
                <span className="font-bold text-gray-800 uppercase tracking-wide text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image/Graphics */}
        <div className="flex-1 order-1 lg:order-2 w-full lg:w-auto relative">
           <div className="relative z-10 w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-3xl border-8 border-white bg-gradient-to-br from-gold/10 to-saffron/10">
             <div className="absolute inset-0 flex items-center justify-center text-gold/20 font-black text-6xl rotate-12 opacity-5 whitespace-nowrap">
                {t.hero.maharajName} {t.hero.maharajName}
             </div>
             <div className="absolute inset-0 flex items-center justify-center text-gold/30 font-bold text-xl uppercase tracking-widest p-12 text-center">
                [ Detailed Full Profile Photo of Maharaj ]
             </div>
             {/* Saffron Overlay on Bottom */}
             <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-saffron to-transparent"></div>
             <div className="absolute bottom-8 left-0 w-full text-center text-white px-6">
               <div className="text-sm font-black uppercase tracking-[0.3em] mb-2">{t.about.awardWinner}</div>
               <div className="text-3xl font-black italic uppercase leading-none">{t.hero.maharajName}</div>
             </div>
           </div>
           {/* Floating Badge */}
           <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold text-white rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl z-20 border-4 border-white rotate-12">
              <div className="text-xl font-black leading-none mb-1">20+</div>
              <div className="text-[10px] font-bold uppercase leading-none">{t.about.yrsExp}</div>
           </div>
        </div>

      </div>
    </section>
  );
}
