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
    <section className="py-20 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-crimson mb-4 uppercase tracking-tight flex items-center justify-center gap-3">
            <HelpCircle size={32} className="text-gold" />
            {t.faq.title.split(" ASKED")[0]} <span className="text-saffron"> {t.faq.title.split("FREQUENTLY ")[1]}</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{t.faq.sub}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gold/10 rounded-2xl overflow-hidden bg-cream/20">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gold/5 transition-colors"
              >
                <span className="font-bold text-gray-800 text-lg">{f.q}</span>
                {openIndex === i ? <ChevronUp className="text-saffron" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-gray-600 font-medium leading-relaxed border-t border-gold/5 bg-white/50">
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
