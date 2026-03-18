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
    <section className="py-6 px-4 bg-white overflow-hidden relative">
      <MandalaSVG className="absolute top-0 right-0 w-[600px] h-[600px] text-gold opacity-[0.03] translate-x-1/2 -translate-y-1/2" />
      <MandalaSVG className="absolute bottom-0 left-0 w-[400px] h-[400px] text-saffron opacity-[0.02] -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1">
             <h2 className="text-2xl md:text-4xl font-black text-crimson mb-3 uppercase tracking-tighter">
                {t.benefits.title}
             </h2>
             <div className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-3 group">
                     <div className="w-10 h-10 shrink-0 rounded-xl bg-cream flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="scale-75">{b.icon}</div>
                     </div>
                     <div>
                        <h3 className="text-base font-black text-gray-800 mb-0.5 uppercase tracking-wide">{b.title}</h3>
                        <p className="text-[10px] md:text-xs text-gray-600 font-medium leading-relaxed">{b.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex-1 bg-crimson rounded-[30px] p-6 md:p-8 text-white relative shadow-2xl overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             
             <h3 className="text-xl md:text-xl font-black mb-4 border-b border-white/20 pb-2 italic">{t.benefits.gTitle}</h3>
             <ul className="space-y-2">
                {[
                  t.benefits.g1,
                  t.benefits.g2,
                  t.benefits.g3,
                  t.benefits.g4,
                  t.benefits.g5,
                  t.benefits.g6,
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-2 group">
                    <CheckCircle2 size={16} className="text-saffron group-hover:scale-125 transition-transform" />
                    <span className="font-bold text-sm md:text-base">{text}</span>
                  </li>
                ))}
             </ul>

             <div className="mt-4">
               <a 
                 href="tel:+919929563493"
                 className="block w-full text-center bg-white text-crimson py-3 rounded-lg font-black text-base hover:bg-cream transition-colors shadow-lg"
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
