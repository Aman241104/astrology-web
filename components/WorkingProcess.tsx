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
    <section className="py-20 bg-cream/50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-crimson mb-4 uppercase tracking-tight">{t.workingProcess.title}</h2>
          <p className="text-gray-600 font-bold uppercase tracking-widest text-sm italic">{t.workingProcess.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gold/20 -z-10"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className={`w-24 h-24 rounded-full ${s.color} flex items-center justify-center mb-8 shadow-xl border-4 border-white transform transition hover:scale-110`}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-4">{s.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
