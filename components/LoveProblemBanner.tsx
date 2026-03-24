"use client";

import Image from "next/image";
import { Phone, MessageCircle, Heart, Star } from "lucide-react";

export default function LoveProblemBanner() {
  return (
    <section className="relative overflow-hidden bg-[#800000]">
      {/* Top Warning Bar */}
      <div className="bg-black text-white py-3 px-4 text-center overflow-hidden border-b-2 border-[#FFD700]/30 relative z-30">
        <div className="animate-marquee whitespace-nowrap inline-block font-black text-[11px] md:text-sm uppercase tracking-widest">
           Don&apos;t Waste Time and Money with Fake Babas: Just One Call You Can Solve all Your Love or Life Problems +91-9929563493
        </div>
      </div>

      {/* Main Banner Container - min-h-screen on mobile */}
      <div className="relative min-h-screen lg:min-h-[900px] flex flex-col items-center py-12 md:py-24">
        
        {/* Intense Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
           <div className="absolute inset-0" style={{ 
             backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
             backgroundSize: '35px 35px'
           }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col items-center text-center">
           
           {/* Top Tagline - De-emphasized Name */}
           <div className="mb-6 flex flex-col items-center gap-2">
              <div className="bg-[#FFB800] text-black px-6 py-2 rounded-lg font-black text-xs md:text-xl uppercase tracking-widest shadow-lg">
                TOP RATED ASTROLOGER
              </div>
              <div className="text-white/80 font-bold text-[10px] md:text-lg uppercase tracking-[0.3em]">
                VISHVANATH MAHARAJ SPECIALIST
              </div>
           </div>

           {/* MAIN SERVICE HEADING - Massive Priority */}
           <div className="relative mb-8 md:mb-12 w-full max-w-5xl">
              <h2 className="text-6xl md:text-[140px] lg:text-[180px] font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                LOVE PROBLEM
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2">
                 <h3 className="text-5xl md:text-[120px] font-black text-[#FFD700] uppercase tracking-tighter leading-none drop-shadow-lg">
                   SOLUTION
                 </h3>
                 <span className="text-4xl md:text-[100px] font-serif italic text-[#FFD700] drop-shadow-md transform -rotate-3">
                   Specialist
                 </span>
              </div>
           </div>

           {/* CENTRAL COUPLE IMAGE - Now the center of the experience */}
           <div className="w-full max-w-[360px] md:max-w-[650px] relative my-8 md:my-16">
              <div className="relative aspect-[4/3] rounded-[40px] md:rounded-[80px] overflow-hidden border-[12px] md:border-[20px] border-[#FFD700] shadow-[0_30px_70px_rgba(0,0,0,0.9)] scale-105">
                 <Image 
                   src="/images/hero-couple-new.png" 
                   alt="Love Problem Expert" 
                   fill 
                   className="object-cover"
                   priority
                 />
                 {/* Decorative Corner Accents */}
                 <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD700] -translate-y-1/2 translate-x-1/2 rotate-45 shadow-2xl"></div>
                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD700] translate-y-1/2 -translate-x-1/2 rotate-45 shadow-2xl"></div>
              </div>
              
              {/* WhatsApp Floating Overlay */}
              <div className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 bg-white rounded-full p-2 md:p-4 shadow-2xl z-20 animate-pulse">
                 <div className="bg-[#25D366] p-4 md:p-8 rounded-full">
                    <MessageCircle size={32} className="text-white fill-white md:w-16 md:h-16" />
                 </div>
              </div>

              {/* Verified Heart Badge */}
              <div className="absolute -top-6 -right-4 md:-top-10 md:-right-10 bg-crimson text-white p-3 md:p-6 rounded-full shadow-2xl z-20 border-4 border-[#FFD700] rotate-12">
                 <Heart size={32} className="fill-white md:w-12 md:h-12" />
              </div>
           </div>

           {/* Services List - Added for better context */}
           <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 md:mb-16">
              {[
                "Lost Love Back", 
                "Marriage Problem", 
                "Husband Wife Issue", 
                "Stop Divorce"
              ].map((service, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-8 py-2 md:py-3 rounded-full flex items-center gap-2">
                   <Star size={12} className="text-[#FFD700] fill-[#FFD700]" />
                   <span className="text-[10px] md:text-sm font-black text-white uppercase tracking-widest">{service}</span>
                </div>
              ))}
           </div>

           {/* Deity Icon & CTA Area */}
           <div className="flex flex-col items-center gap-8 md:gap-12 w-full">
              <div className="relative w-32 h-32 md:w-64 md:h-64 filter drop-shadow-[0_0_50px_rgba(255,184,0,0.8)]">
                <Image 
                  src="/—Pngtree—3d ganesha mandap decor on_17265442.png" 
                  alt="Vedic Remedy" 
                  fill 
                  className="object-contain"
                />
              </div>

              <div className="w-full flex flex-col items-center gap-6">
                 <div className="bg-white px-10 md:px-24 py-4 md:py-8 rounded-full shadow-3xl transform hover:scale-105 transition-all border-b-[8px] md:border-b-[15px] border-gray-300 w-full md:w-auto">
                    <span className="text-black font-black text-lg md:text-5xl uppercase tracking-tighter block">
                      GET PERMANENT SOLUTION NOW
                    </span>
                 </div>
                 
                 <div className="flex items-center gap-2 md:gap-10">
                    <div className="bg-[#FFB800] p-2 md:p-8 rounded-full shadow-2xl border-4 border-white/40 animate-bounce shrink-0">
                       <Phone size={20} className="text-black fill-black md:w-20 md:h-20" />
                    </div>
                    <a 
                      href="tel:+919929563493"
                      className="text-[7.5vw] md:text-[150px] font-black text-white tracking-tighter hover:text-[#FFD700] transition-colors leading-none drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)] whitespace-nowrap"
                    >
                      +91-9929563493
                    </a>
                  </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
