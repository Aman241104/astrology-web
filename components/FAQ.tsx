"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 }
  ];

  return (
    <section className="py-24 md:py-32 bg-white px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-1 bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-gold/10 text-gold px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-6 border border-gold/20">
             Common Queries
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-crimson mb-6 uppercase tracking-tighter drop-shadow-sm flex items-center justify-center gap-4 md:gap-6">
            <HelpCircle className="text-gold w-8 h-8 md:w-12 md:h-12" />
            {t.faq.title}
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-xs md:text-base italic leading-relaxed">{t.faq.sub}</p>
          <div className="w-24 h-1 bg-gold/30 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className={`border-2 rounded-[30px] overflow-hidden transition-all duration-500 ${openIndex === i ? 'border-gold bg-cream/30 shadow-[0_20px_50px_rgba(212,175,55,0.1)]' : 'border-gold/10 bg-cream/10 hover:border-gold/30'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
              >
                <span className={`font-black text-lg md:text-2xl tracking-tight transition-colors ${openIndex === i ? 'text-crimson' : 'text-gray-800'}`}>{f.q}</span>
                <div className={`p-2 rounded-full transition-all duration-500 ${openIndex === i ? 'bg-crimson text-white rotate-180' : 'bg-gold/10 text-gold'}`}>
                  <ChevronDown size={24} />
                </div>
              </button>
              <div className={`transition-all duration-500 overflow-hidden ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 md:p-8 pt-0 text-gray-700 font-bold text-base md:text-xl leading-relaxed border-t border-gold/10 bg-white/40 italic">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
