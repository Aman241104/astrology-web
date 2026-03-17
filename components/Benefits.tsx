"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Zap, Shield, Heart } from "lucide-react";

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
    <section className="py-24 px-4 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
             <h2 className="text-3xl md:text-5xl font-black text-crimson mb-8 uppercase tracking-tighter">
                {t.benefits.title}
             </h2>
             <div className="space-y-12">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-6 group">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-cream flex items-center justify-center group-hover:scale-110 transition-transform">
                        {b.icon}
                     </div>
                     <div>
                        <h3 className="text-xl font-black text-gray-800 mb-3 uppercase tracking-wide">{b.title}</h3>
                        <p className="text-gray-600 font-medium leading-relaxed">{b.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex-1 bg-crimson rounded-[50px] p-12 text-white relative shadow-2xl overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
             
             <h3 className="text-2xl md:text-3xl font-black mb-8 border-b border-white/20 pb-4 italic">{t.benefits.gTitle}</h3>
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
                    <CheckCircle2 className="text-saffron group-hover:scale-125 transition-transform" />
                    <span className="font-bold text-lg">{text}</span>
                  </li>
                ))}
             </ul>

             <div className="mt-12">
               <a 
                 href="tel:+919929563493"
                 className="block w-full text-center bg-white text-crimson py-5 rounded-2xl font-black text-xl hover:bg-cream transition-colors shadow-lg"
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
