"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Zap, Shield, Heart } from "lucide-react";
import MandalaSVG from "./MandalaSVG";

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t.benefits.b1Title,
      desc: t.benefits.b1Desc,
      icon: <Heart className="text-crimson" fill="currentColor" />
    },
    {
      title: t.benefits.b2Title,
      desc: t.benefits.b2Desc,
      icon: <Shield className="text-gold" fill="currentColor" />
    },
    {
      title: t.benefits.b3Title,
      desc: t.benefits.b3Desc,
      icon: <Zap className="text-saffron" fill="currentColor" />
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 bg-white overflow-hidden relative">
      <MandalaSVG className="absolute top-0 right-0 w-[800px] h-[800px] text-gold opacity-[0.05] translate-x-1/2 -translate-y-1/2 animate-[spin_300s_linear_infinite]" />
      <MandalaSVG className="absolute bottom-0 left-0 w-[600px] h-[600px] text-saffron opacity-[0.03] -translate-x-1/2 translate-y-1/2 animate-[spin_200s_linear_infinite]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1">
             <div className="inline-block bg-crimson/10 text-crimson px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-8 border border-crimson/20">
                Ancient Wisdom
             </div>
             <h2 className="text-4xl md:text-6xl font-black text-crimson mb-10 uppercase tracking-tighter leading-none">
                {t.benefits.title}
             </h2>
             <div className="space-y-10">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-6 group">
                     <div className="w-16 h-16 shrink-0 rounded-2xl bg-cream flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg border border-gold/10">
                        <div className="scale-125">{b.icon}</div>
                     </div>
                     <div>
                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">{b.title}</h3>
                        <p className="text-base md:text-lg text-gray-600 font-bold leading-relaxed italic">{b.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex-1 bg-crimson rounded-[50px] p-10 md:p-16 text-white relative shadow-[0_50px_100px_rgba(220,38,38,0.25)] overflow-hidden border-8 border-white/5">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             
             <h3 className="text-2xl md:text-4xl font-black mb-10 border-b-2 border-white/20 pb-6 uppercase tracking-tighter">{t.benefits.gTitle}</h3>
             <ul className="space-y-6">
                {[
                  t.benefits.g1,
                  t.benefits.g2,
                  t.benefits.g3,
                  t.benefits.g4,
                  t.benefits.g5,
                  t.benefits.g6,
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="bg-saffron/20 p-1.5 rounded-full group-hover:bg-saffron transition-colors">
                      <CheckCircle2 size={24} className="text-saffron group-hover:text-crimson transition-colors" />
                    </div>
                    <span className="font-black text-lg md:text-xl tracking-tight uppercase">{text}</span>
                  </li>
                ))}
             </ul>

             <div className="mt-12">
               <a 
                 href="tel:+919929563493"
                 className="block w-full text-center bg-white text-crimson py-6 rounded-2xl font-black text-xl md:text-2xl hover:bg-cream transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-tighter"
               >
                 {t.benefits.startJourney}
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
