"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Search, Sparkles } from "lucide-react";

export default function WorkingProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t.workingProcess.s1Title,
      desc: t.workingProcess.s1Desc,
      icon: <MessageCircle className="text-white" size={32} />,
      color: "bg-saffron"
    },
    {
      title: t.workingProcess.s2Title,
      desc: t.workingProcess.s2Desc,
      icon: <Search className="text-white" size={32} />,
      color: "bg-gold"
    },
    {
      title: t.workingProcess.s3Title,
      desc: t.workingProcess.s3Desc,
      icon: <Sparkles className="text-white" size={32} />,
      color: "bg-crimson"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream/50 px-4 relative overflow-hidden">
      {/* Background Astrology Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] border border-gold/40 rounded-full"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] border border-gold/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-3">
          <h2 className="text-2xl md:text-4xl font-black text-crimson mb-1 uppercase tracking-tight">{t.workingProcess.title}</h2>
          <p className="text-gray-600 font-bold uppercase tracking-widest text-[10px] italic">{t.workingProcess.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gold/20 -z-10"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className={`w-14 h-14 rounded-full ${s.color} flex items-center justify-center mb-2 shadow-xl border-4 border-white transform transition hover:scale-110`}>
                <div className="scale-50">{s.icon}</div>
              </div>
              <h3 className="text-lg font-black text-gray-800 mb-1">{s.title}</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
