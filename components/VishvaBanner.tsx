"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";

export default function VishvaBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-12 md:py-16 relative overflow-hidden border-b-4 border-gold/10">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left: Rating & Name */}
          <div className="text-center lg:text-left flex-1">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
               <div className="bg-saffron text-white px-3 py-1 rounded-md text-[10px] md:text-xs font-black flex items-center gap-1 shadow-sm">
                 5.0 <Star size={12} fill="white" />
               </div>
               <div className="flex gap-0.5 text-saffron">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <span className="text-[10px] md:text-xs font-black text-gray-400 ml-2 uppercase tracking-[0.2em]">World Class Expert</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-crimson mb-2 uppercase tracking-tighter leading-tight drop-shadow-sm">
              {t.hero.maharajName}
            </h2>
            <div className="inline-flex bg-gold/10 text-gold border border-gold/20 px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase italic tracking-wider">
              🏆 10 Times Gold-Medalist Astrologer
            </div>
          </div>

          {/* Center: Global Flags & Hook */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.3em] text-center border-b border-gold/10 pb-2 w-full max-w-[200px]">
              Global Presence
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
               {[
                 { color: "bg-blue-800", flag: "🇺🇸", label: "USA" },
                 { color: "bg-red-600", flag: "🇬🇧", label: "UK" },
                 { color: "bg-orange-500", flag: "🇮🇳", label: "IND" },
                 { color: "bg-blue-600", flag: "🇨🇦", label: "CAN" },
                 { color: "bg-yellow-400", flag: "🇦🇺", label: "AUS" }
               ].map((f, i) => (
                 <div key={i} className="flex flex-col items-center gap-1 group cursor-default">
                   <div className={`w-8 h-5 ${f.color} rounded-sm overflow-hidden flex items-center justify-center text-xs shadow-md group-hover:scale-110 transition-transform`}>
                     {f.flag}
                   </div>
                   <span className="text-[8px] font-black text-gray-400 uppercase">{f.label}</span>
                 </div>
               ))}
            </div>

            <div className="flex items-center overflow-hidden rounded-xl shadow-xl border border-crimson/20 bg-cream/30">
               <div className="bg-crimson text-white px-4 md:px-6 py-2.5 font-black text-[10px] md:text-sm uppercase tracking-tighter">
                 Instant Solutions
               </div>
               <div className="bg-white text-crimson px-4 md:px-6 py-2.5 font-black text-[10px] md:text-sm uppercase tracking-widest border-l border-crimson/20">
                 24/7 Available
               </div>
            </div>
          </div>

          {/* Right: Contact & Reviews */}
          <div className="text-center lg:text-right flex-1 flex flex-col items-center lg:items-end">
            <div className="bg-crimson/10 text-crimson border border-crimson/20 px-4 py-1 rounded-full text-[10px] md:text-xs font-black uppercase mb-2 tracking-widest animate-pulse">
              Connect With Guruji
            </div>
            <a href="tel:+919929563493" className="text-3xl md:text-5xl font-black text-gray-900 hover:text-crimson transition-colors block leading-none mb-3 tracking-tighter">
              +91-9929563493
            </a>
            
            <div className="flex items-center gap-3 mt-2 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
               <div className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase leading-tight text-right">
                 Verified<br/>Reviews on
               </div>
               <div className="flex items-center scale-90 md:scale-110 origin-right">
                 <span className="text-[#4285F4] font-black text-xl">G</span>
                 <span className="text-[#EA4335] font-black text-xl">o</span>
                 <span className="text-[#FBBC05] font-black text-xl">o</span>
                 <span className="text-[#4285F4] font-black text-xl">g</span>
                 <span className="text-[#34A853] font-black text-xl">l</span>
                 <span className="text-[#EA4335] font-black text-xl">e</span>
               </div>
               <div className="flex gap-0.5 text-saffron ml-1">
                 {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
