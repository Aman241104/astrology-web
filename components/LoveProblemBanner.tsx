"use client";

import Image from "next/image";
import { MessageCircle, Heart, Star } from "lucide-react";

export default function LoveProblemBanner() {
  return (
    <section className="relative overflow-hidden bg-[#800000]">
      {/* Main Banner Container - Auto height for all screens to prevent extra bottom space */}
      <div className="relative flex flex-col items-center py-8 md:py-16 lg:py-20">
        
        {/* Intense Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
           <div className="absolute inset-0" style={{ 
             backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
             backgroundSize: '35px 35px'
           }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
           
           {/* CENTRAL COUPLE IMAGE - Now on the left for md+ */}
           <div className="w-full max-w-[360px] md:max-w-[450px] lg:max-w-[550px] relative my-6 md:my-0 order-2 md:order-1">
              <a 
                href="https://wa.me/919875958008"
                className="block relative aspect-[4/3] rounded-[40px] md:rounded-[60px] overflow-hidden border-[12px] md:border-[15px] border-[#FFD700] shadow-[0_30px_70px_rgba(0,0,0,0.9)] scale-105 hover:scale-110 transition-transform cursor-pointer"
              >
                 <Image 
                   src="/images/love-problem-main.png" 
                   alt="Love Problem Expert" 
                   fill 
                   className="object-cover"
                   priority
                 />
                 {/* Decorative Corner Accents */}
                 <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD700] -translate-y-1/2 translate-x-1/2 rotate-45 shadow-2xl"></div>
                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FFD700] translate-y-1/2 -translate-x-1/2 rotate-45 shadow-2xl"></div>
              </a>
              
              {/* WhatsApp Floating Overlay */}
              <div className="absolute -bottom-8 -left-4 md:-bottom-10 md:-left-8 bg-white rounded-full p-2 md:p-3 shadow-2xl z-20 animate-pulse">
                 <div className="bg-[#25D366] p-4 md:p-6 rounded-full">
                    <MessageCircle size={32} className="text-white fill-white md:w-12 md:h-12" />
                 </div>
              </div>

              {/* Verified Heart Badge */}
              <div className="absolute -top-6 -right-4 md:-top-10 md:-right-8 bg-crimson text-white p-3 md:p-5 rounded-full shadow-2xl z-20 border-4 border-[#FFD700] rotate-12">
                 <Heart size={32} className="fill-white md:w-10 md:h-10" />
              </div>
           </div>

           {/* TEXT CONTENT - Now on the right for md+ */}
           <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2 flex-1">
              {/* MAIN SERVICE HEADING - Massive Priority */}
              <div className="relative mb-6 md:mb-8 w-full">
                 <h2 className="text-6xl md:text-[80px] lg:text-[100px] font-black text-white uppercase tracking-tighter leading-[0.85] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                   LOVE PROBLEM
                 </h2>
                 <div className="flex flex-col md:flex-row items-center md:items-end gap-2 mt-1">
                    <h3 className="text-5xl md:text-[60px] lg:text-[80px] font-black text-[#FFD700] uppercase tracking-tighter leading-none drop-shadow-lg">
                      SOLUTION
                    </h3>
                    <span className="text-4xl md:text-[50px] lg:text-[70px] font-serif italic text-[#FFD700] drop-shadow-md transform -rotate-3 md:mb-2">
                      Specialist
                    </span>
                 </div>
              </div>

              {/* Services List - Aligned to left on desktop */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-4">
                 {[
                   "Lost Love Back", 
                   "Marriage Problem", 
                   "Husband Wife Issue", 
                   "Stop Divorce"
                 ].map((service, idx) => (
                   <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-6 py-2 rounded-full flex items-center gap-2">
                      <Star size={12} className="text-[#FFD700] fill-[#FFD700]" />
                      <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">{service}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
