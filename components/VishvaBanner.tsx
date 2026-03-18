"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";

export default function VishvaBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-white pt-2 pb-0 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-4">
          
          {/* Left: Rating & Name */}
          <div className="text-center lg:text-left w-full lg:w-auto">
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-0.5">
               <div className="bg-saffron text-white px-2 py-0.5 rounded text-[10px] font-black flex items-center gap-1">
                 5.0 <Star size={10} fill="white" />
               </div>
               <div className="flex gap-0.5 text-saffron">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-widest">No.1 Astrologer</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-crimson mb-0.5 uppercase tracking-tighter leading-none">
              {t.hero.maharajName}
            </h2>
            <div className="inline-block bg-gold text-white px-3 py-1 rounded-lg font-black text-[10px] md:text-sm uppercase italic shadow-lg">
              ( 10 Times Gold-Medalist Astrologer )
            </div>
          </div>

          {/* Center: Global Flags & Hook */}
          <div className="flex flex-col items-center gap-2 w-full lg:w-auto">
            <p className="text-[10px] md:text-xs font-black text-gray-800 uppercase tracking-widest text-center">
              Effective Spiritual Solutions & Vedic Remedies
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
               <div className="flex flex-wrap justify-center gap-1 items-center border border-gray-100 p-1.5 rounded shadow-sm">
                 {[
                   { color: "bg-blue-800", flag: "🇺🇸" },
                   { color: "bg-red-600", flag: "🇬🇧" },
                   { color: "bg-blue-600", flag: "🇪🇺" },
                   { color: "bg-orange-500", flag: "🇮🇳" },
                   { color: "bg-black", flag: "🇩🇪" },
                   { color: "bg-yellow-400", flag: "🇧🇪" }
                 ].map((f, i) => (
                   <div key={i} className={`w-6 h-4 ${f.color} relative overflow-hidden flex items-center justify-center text-[6px] text-white shadow-sm`}>
                     {f.flag}
                   </div>
                 ))}
               </div>
            </div>

            <div className="flex items-center overflow-hidden rounded shadow-2xl border-2 border-crimson w-fit">
               <div className="bg-crimson text-white px-3 md:px-4 py-2 font-black text-[9px] md:text-xs uppercase tracking-tighter">
                 One Call Can Change Your Life
               </div>
               <div className="bg-red-600 text-white px-3 md:px-4 py-2 font-black text-[9px] md:text-xs uppercase">
                 No.1 Expert
               </div>
            </div>
          </div>

          {/* Right: Contact & Reviews */}
          <div className="text-center lg:text-right w-full lg:w-auto">
            <div className="flex flex-col items-center lg:items-end gap-1">
               <div className="bg-crimson text-white px-3 py-1 rounded text-[10px] font-black uppercase mb-1">Contact Us Anytime</div>
               <a href="tel:+919929563493" className="text-2xl md:text-6xl font-black text-crimson hover:scale-105 transition-transform block leading-none">
                 +91-9929563493
               </a>
               <div className="flex items-center gap-2 mt-2 justify-center lg:justify-end">
                  <div className="text-gray-400 text-[10px] font-black uppercase">Review Us On</div>
                  <div className="flex items-center scale-75 md:scale-110 origin-center lg:origin-right">
                    <span className="text-blue-500 font-black text-xl">G</span>
                    <span className="text-red-500 font-black text-xl">o</span>
                    <span className="text-yellow-500 font-black text-xl">o</span>
                    <span className="text-blue-500 font-black text-xl">g</span>
                    <span className="text-saffron font-black text-xl">l</span>
                    <span className="text-red-500 font-black text-xl">e</span>
                  </div>
               </div>
               <div className="flex gap-0.5 text-saffron justify-center lg:justify-end">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
