"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Search, Sparkles } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WorkingProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t.workingProcess.s1Title,
      desc: t.workingProcess.s1Desc,
      icon: <WhatsAppIcon className="text-white" size={32} />,
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
    <section className="py-24 md:py-32 bg-cream/30 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] border-2 border-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] border-2 border-gold/10 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-crimson/10 text-crimson px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-6 border border-crimson/20">
             Easy Process
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-crimson mb-6 uppercase tracking-tighter leading-none">{t.workingProcess.title}</h2>
          <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-xs md:text-base italic max-w-2xl mx-auto leading-relaxed">{t.workingProcess.sub}</p>
          <div className="w-24 h-1 bg-gold/30 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 -z-10"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="group flex flex-col items-center text-center p-8 md:p-12 rounded-[40px] bg-white border border-gold/10 hover:shadow-[0_40px_80px_rgba(212,175,55,0.1)] transition-all duration-500 hover:-translate-y-3">
              <div className={`w-24 h-24 rounded-3xl ${s.color} flex items-center justify-center mb-8 shadow-2xl border-4 border-white group-hover:rotate-12 group-hover:scale-110 transition-all`}>
                <div className="scale-150">{s.icon}</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-tight group-hover:text-crimson transition-colors">{s.title}</h3>
              <p className="text-lg md:text-xl text-gray-600 font-bold leading-relaxed italic">{s.desc}</p>
              
              {/* Step Number Badge */}
              <div className="absolute top-4 right-8 text-4xl md:text-6xl font-black text-gray-100 group-hover:text-gold/20 transition-colors">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
