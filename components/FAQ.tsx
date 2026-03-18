"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-3xl font-black text-crimson mb-1 uppercase tracking-tight flex items-center justify-center gap-2 md:gap-3">
            <HelpCircle className="text-gold w-5 h-5 md:w-6 md:h-6" />
            {t.faq.title}
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[9px]">{t.faq.sub}</p>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gold/10 rounded-lg overflow-hidden bg-cream/20">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-3 md:p-4 text-left hover:bg-gold/5 transition-colors"
              >
                <span className="font-bold text-gray-800 text-sm md:text-base">{f.q}</span>
                {openIndex === i ? <ChevronUp className="text-saffron" size={18} /> : <ChevronDown className="text-gray-400" size={18} />}
              </button>
              {openIndex === i && (
                <div className="p-3 md:p-4 pt-0 text-gray-600 font-medium text-xs md:text-sm leading-relaxed border-t border-gold/5 bg-white/50">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
