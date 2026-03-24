"use client";

import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function LoveProblemBanner() {
  return (
    <section className="relative overflow-hidden bg-[#7A0000]">
      {/* Top Warning Bar - Fixed at top of banner */}
      <div className="bg-black text-white py-2.5 px-4 text-center overflow-hidden border-b-2 border-[#FFD700]/30 relative z-30">
        <div className="animate-marquee whitespace-nowrap inline-block font-black text-[11px] md:text-sm uppercase tracking-widest">
           Don&apos;t Waste Time and Money with Fake Babas: Just One Call You Can Solve all Your Love or Life Problems +91-9929563493
        </div>
      </div>

      {/* Main Banner Container - min-h-screen on mobile to take all vertical space */}
      <div className="relative min-h-screen lg:min-h-[850px] flex flex-col items-center justify-center py-10 md:py-24">
        
        {/* Intense Grid Pattern - High Contrast for impact */}
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none">
           <div className="absolute inset-0" style={{ 
             backgroundImage: 'linear-gradient(to right, #ffffff 1.5px, transparent 1.5px), linear-gradient(to bottom, #ffffff 1.5px, transparent 1.5px)',
             backgroundSize: '35px 35px'
           }}></div>
        </div>

        {/* Diagonal Light Beam Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Couple Image Frame - Optimized for Mobile Impact */}
          <div className="w-full max-w-[340px] md:max-w-[500px] lg:flex-1 relative order-2 lg:order-1 mt-4 lg:mt-0">
             <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-[40px] md:rounded-[80px] overflow-hidden border-[10px] md:border-[18px] border-[#FFD700] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                <Image 
                  src="/images/hero-couple-new.png" 
                  alt="Relationship Specialist" 
                  fill 
                  className="object-cover"
                  priority
                />
                {/* Visual Corner Accents */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD700] -translate-y-1/2 translate-x-1/2 rotate-45"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD700] translate-y-1/2 -translate-x-1/2 rotate-45"></div>
             </div>
             
             {/* WhatsApp Icon - Large & Floating */}
             <div className="absolute -bottom-6 -left-4 md:-bottom-12 md:-left-8 bg-white rounded-full p-2 md:p-4 shadow-[0_15px_30px_rgba(0,0,0,0.4)] z-20 animate-bounce">
                <div className="bg-[#25D366] p-4 md:p-6 rounded-full">
                   <MessageCircle size={36} className="text-white fill-white md:w-14 md:h-14" />
                </div>
             </div>
          </div>

          {/* Text Content Area - Massive Impact Typography */}
          <div className="lg:flex-[1.5] text-center lg:text-left text-white order-1 lg:order-2 w-full flex flex-col items-center lg:items-start justify-center">
             
             <div className="mb-4 md:mb-6">
                <span className="bg-[#FFB800] text-black px-6 md:px-12 py-2 md:py-4 rounded-xl font-black text-xs md:text-3xl uppercase tracking-tighter shadow-[0_6px_0_#926600] inline-block">
                  TOP RATED ASTROLOGER
                </span>
             </div>
             
             <div className="relative mb-6 md:mb-8 w-full">
                <h2 className="text-4xl md:text-[100px] font-black text-[#FFD700] uppercase tracking-tighter leading-[0.85] mb-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  VISHVANATH <br className="hidden lg:block"/> MAHARAJ
                </h2>
                
                <div className="relative inline-block mt-1 lg:mt-4">
                  <h3 className="text-5xl md:text-[140px] lg:text-[160px] font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)]">
                    LOVE PROBLEM
                  </h3>
                  <span className="absolute -bottom-3 right-0 md:-bottom-10 md:-right-16 text-3xl md:text-[110px] font-serif italic text-[#FFD700] drop-shadow-[0_4px_8px_rgba(0,0,0,1)] transform -rotate-6 z-20 px-2">
                    Specialist
                  </span>
                </div>
             </div>

             {/* Deity Icon - Sized for Mobile Vertical Balance */}
             <div className="flex justify-center lg:justify-start my-6 lg:my-10">
                <div className="relative w-28 h-28 md:w-56 md:h-56 filter drop-shadow-[0_0_40px_rgba(255,184,0,0.8)]">
                  <Image 
                    src="/—Pngtree—3d ganesha mandap decor on_17265442.png" 
                    alt="Lord Ganesha" 
                    fill 
                    className="object-contain"
                  />
                </div>
             </div>

             {/* CTA Actions - Full Width on Mobile */}
             <div className="flex flex-col items-center lg:items-start gap-5 md:gap-10 w-full lg:w-auto">
                <div className="bg-white px-8 md:px-20 py-4 md:py-6 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-all border-b-[6px] md:border-b-[10px] border-gray-300 w-full lg:w-auto">
                  <span className="text-black font-black text-base md:text-4xl uppercase tracking-widest block text-center">
                    CALL US FOR REMEDIES
                  </span>
                </div>
                
                <div className="flex items-center gap-4 md:gap-8 justify-center lg:justify-start">
                  <div className="bg-[#FFB800] p-3 md:p-6 rounded-full shadow-2xl border-4 border-white/40 group">
                     <Phone size={28} className="text-black fill-black md:w-16 md:h-16 group-hover:scale-110 transition-transform" />
                  </div>
                  <a 
                    href="tel:+919929563493"
                    className="text-4xl md:text-[120px] font-black text-white tracking-tighter hover:text-[#FFD700] transition-colors leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                  >
                    +91-9929563493
                  </a>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Trust Badges Bar - Hidden on mobile to keep focus on vertical banner space */}
      <div className="hidden md:flex bg-black/40 py-5 border-t-2 border-[#FFD700]/20 backdrop-blur-md">
         <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center font-black text-gold italic">24h</div>
               <span className="text-xs md:text-sm font-black text-white uppercase tracking-[0.4em]">Guaranteed Results</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center font-black text-gold italic">1:1</div>
               <span className="text-xs md:text-sm font-black text-white uppercase tracking-[0.4em]">Private Consultation</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center font-black text-gold italic">5.0</div>
               <span className="text-xs md:text-sm font-black text-white uppercase tracking-[0.4em]">World Class Expert</span>
            </div>
         </div>
      </div>
    </section>
  );
}
