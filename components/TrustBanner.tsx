"use client";

import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TrustBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-white pt-32 md:pt-48 pb-8 md:pb-12 border-y-4 border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
          
          {/* Left: Rating & Name */}
          <div className="text-center lg:text-left w-full lg:w-auto">
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
               <div className="bg-saffron text-white px-2 py-0.5 rounded text-[10px] font-black flex items-center gap-1">
                 5.0 <Star size={10} fill="white" />
               </div>
               <div className="flex gap-0.5 text-saffron">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-widest">No.1 Expert</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-crimson mb-2 uppercase tracking-tighter leading-none">
               {t.hero.expertName}
               </h2>
               <div className="inline-block bg-gold text-white px-4 py-1.5 rounded-lg font-black text-xs md:text-lg uppercase italic shadow-lg">
               ( World-Renowned Relationship Expert )
               </div>          </div>

          {/* Center: Global Flags & Hook */}
          <div className="flex flex-col items-center gap-4 w-full lg:w-auto">
            <p className="text-[10px] md:text-sm font-black text-gray-800 uppercase tracking-widest text-center">
              Effective Spiritual Solutions & Vedic Remedies
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
               {/* Simplified Flag Icons using colored spans for high performance */}
               <div className="flex flex-wrap justify-center gap-1 items-center border border-gray-100 p-1.5 rounded shadow-sm">
                 {[
                   { color: "bg-blue-800", flag: "🇺🇸" },
                   { color: "bg-red-600", flag: "🇬🇧" },
                   { color: "bg-blue-600", flag: "🇪🇺" },
                   { color: "bg-orange-500", flag: "🇮🇳" },
                   { color: "bg-black", flag: "🇩🇪" },
                   { color: "bg-yellow-400", flag: "🇧🇪" }
                 ].map((f, i) => (
                   <div key={i} className={`w-6 h-4 ${f.color} relative overflow-hidden flex items-center justify-center text-[6px] text-white`}>
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
            <div className="flex flex-col items-center lg:items-end gap-2">
               <div className="bg-crimson/90 text-white px-3 py-1 rounded text-[10px] font-black uppercase">Contact Us Anytime</div>
               <a href="tel:+919929563493" className="text-2xl md:text-4xl font-black text-crimson hover:scale-105 transition-transform block">
                 +91-9929563493
               </a>
               <div className="flex items-center gap-2 mt-2 justify-center lg:justify-end">
                  <div className="text-gray-400 text-[10px] font-black uppercase">Review Us On</div>
                  <div className="flex items-center scale-75 md:scale-100 origin-center lg:origin-right">
                    <span className="text-blue-500 font-black text-xl">G</span>
                    <span className="text-red-500 font-black text-xl">o</span>
                    <span className="text-yellow-500 font-black text-xl">o</span>
                    <span className="text-blue-500 font-black text-xl">g</span>
                    <span className="text-saffron font-black text-xl">l</span>
                    <span className="text-red-500 font-black text-xl">e</span>
                  </div>
               </div>
               <div className="flex gap-0.5 text-saffron justify-center lg:justify-end">
                 {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Specialty Bar */}
      <div className="bg-crimson mt-8 md:mt-12 py-4">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              "Love Problem Specialist",
              "Husband Wife Problem",
              "Love Marriage Specialist",
              "Lost Love Back Expert",
              "24 Hours Solution"
            ].map((text, i) => (
              <div key={i} className="bg-white text-crimson px-3 md:px-4 py-1.5 md:py-2 rounded-full font-black text-[8px] md:text-sm flex items-center gap-1.5 md:gap-2 shadow-inner border border-crimson/20 whitespace-nowrap">
                <div className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-saffron flex items-center justify-center shrink-0">
                  <Star fill="white" className="text-white w-2 h-2 md:w-3 md:h-3" />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
