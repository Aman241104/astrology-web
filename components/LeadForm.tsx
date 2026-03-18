"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send } from "lucide-react";

export default function LeadForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-saffron/10 p-12 rounded-3xl border border-saffron/20 text-center animate-pulse">
        <h3 className="text-2xl font-black text-crimson mb-2">{t.leadForm.successTitle}</h3>
        <p className="text-saffron font-bold uppercase tracking-widest text-xs">{t.leadForm.successSub}</p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-gradient-to-tr from-saffron/5 to-gold/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6">
        
        <div className="flex-1">
           <h2 className="text-2xl md:text-4xl font-black text-crimson mb-1 uppercase tracking-tight">{t.leadForm.urgentHelp}</h2>
           <p className="text-sm md:text-lg text-gray-700 font-bold mb-2">{t.leadForm.sub}</p>
           
           <ul className="space-y-1 font-black text-gray-500 uppercase tracking-widest text-[9px]">
              <li className="flex items-center gap-2">✓ {t.leadForm.hook1}</li>
              <li className="flex items-center gap-2">✓ {t.leadForm.hook2}</li>
              <li className="flex items-center gap-2">✓ {t.leadForm.hook3}</li>
           </ul>
        </div>

        <div className="flex-1 w-full bg-white p-4 md:p-6 rounded-[25px] shadow-2xl border-4 border-gold/10">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">{t.leadForm.name}</label>
              <input required type="text" className="w-full bg-cream/30 border-2 border-gold/10 rounded-lg px-4 py-2 font-bold text-gray-800 focus:border-saffron outline-none transition-all text-sm" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">{t.leadForm.phone}</label>
                <input required type="tel" className="w-full bg-cream/30 border-2 border-gold/10 rounded-lg px-4 py-2 font-bold text-gray-800 focus:border-saffron outline-none transition-all text-sm" />
              </div>
              <div className="relative">
                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">Your Zodiac Sign</label>
                <div className="relative">
                  <select className="w-full bg-cream/30 border-2 border-gold/10 rounded-lg px-4 py-2 font-bold text-gray-800 focus:border-saffron outline-none transition-all appearance-none cursor-pointer text-xs">
                    <option>Aries (Mar 21 - Apr 19)</option>
                    <option>Taurus (Apr 20 - May 20)</option>
                    <option>Gemini (May 21 - Jun 20)</option>
                    <option>Cancer (Jun 21 - Jul 22)</option>
                    <option>Leo (Jul 23 - Aug 22)</option>
                    <option>Virgo (Aug 23 - Sep 22)</option>
                    <option>Libra (Sep 23 - Oct 22)</option>
                    <option>Scorpio (Oct 23 - Nov 21)</option>
                    <option>Sagittarius (Nov 22 - Dec 21)</option>
                    <option>Capricorn (Dec 22 - Jan 19)</option>
                    <option>Aquarius (Jan 20 - Feb 18)</option>
                    <option>Pisces (Feb 19 - Mar 20)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-0.5">{t.leadForm.problem}</label>
              <textarea required className="w-full bg-cream/30 border-2 border-gold/10 rounded-lg px-4 py-2 font-bold text-gray-800 focus:border-saffron outline-none transition-all min-h-[60px] text-sm"></textarea>
            </div>
            <button type="submit" className="w-full bg-crimson text-white py-3 rounded-lg font-black text-base flex items-center justify-center gap-2 hover:bg-crimson/90 transition-all shadow-xl shadow-crimson/20 active:scale-95">
              <Send fill="white" size={16} />
              {t.leadForm.submit}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
