"use client";

import Image from "next/image";
import { Phone, Lock } from "lucide-react";

export default function TrustBanner() {
  return (
    <section className="bg-white py-10 px-4 border-b border-gray-100 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center">
          
          {/* Left Section: Branding & Identity */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-2">
              <div className="relative w-28 h-28 md:w-40 md:h-40 shrink-0">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl"></div>
                <div className="relative w-full h-full filter drop-shadow-[0_10px_15px_rgba(212,175,55,0.4)] flex items-center justify-center">
                  <Image 
                    src="/—Pngtree—3d ganesha mandap decor on_17265442.png" 
                    alt="Lord Ganesha" 
                    fill 
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-crimson font-black text-sm md:text-lg uppercase tracking-tight">Best Online Astro</span>
                <h2 className="text-3xl md:text-5xl font-black text-crimson uppercase tracking-tighter drop-shadow-[0_2px_0_rgba(255,215,0,1)]">
                  ASTRO <br className="hidden md:block" /> PAWAN SWAMI
                </h2>
              </div>
            </div>
            
            {/* Decorative Divider */}
            <div className="relative w-48 h-6 mb-2">
               <svg viewBox="0 0 200 20" className="w-full h-full text-black">
                 <path d="M0 10 Q 50 10 100 10 Q 150 10 200 10" stroke="currentColor" strokeWidth="1" fill="none" />
                 <path d="M80 10 Q 100 0 120 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
                 <circle cx="100" cy="10" r="2" fill="currentColor" />
               </svg>
            </div>

            <div className="bg-[#FFD700] px-6 py-2 rounded-full shadow-md">
               <span className="font-black text-black text-xs md:text-sm uppercase tracking-wide">Love And Family Problem Expert</span>
            </div>
          </div>

          {/* Middle Section: Global Trust & Stats */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-[#004D40] font-black text-lg md:text-2xl uppercase tracking-tighter mb-4">
              TRUSTED WORLD FAMOUS NO.1 ASTRO
            </h3>
            
            <div className="flex items-center gap-6 mb-4">
              <div className="flex flex-col items-center">
                 <div className="bg-[#2ECC71] p-1.5 rounded-lg flex items-center gap-1 border border-[#27AE60] shadow-sm">
                   <Lock size={14} className="text-white fill-white" />
                   <div className="flex flex-col leading-none">
                      <span className="text-[8px] font-black text-white">100%</span>
                      <span className="text-[8px] font-black text-white">SECURE</span>
                   </div>
                 </div>
              </div>

              <div className="flex gap-2">
                 {["🇺🇸", "🇨🇦", "🇬🇧", "🇦🇪", "🇸🇬", "🇦🇺"].map((flag, i) => (
                   <span key={i} className="text-3xl shadow-sm filter drop-shadow-sm">{flag}</span>
                 ))}
              </div>
            </div>

            <p className="text-[#004D40] font-black text-xs md:text-sm uppercase mb-4">
              All Problem & Get Permanent Solution
            </p>

            <div className="bg-[#FFD700] px-6 py-2 rounded-full shadow-md">
               <span className="font-black text-black text-xs md:text-sm uppercase tracking-wide">20+ Years experience in Astrology</span>
            </div>
          </div>

          {/* Right Section: Contact & CTA */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-crimson font-black text-sm md:text-lg uppercase mb-3">
              Need Guidance Call & Get The Permanent Solution
            </h4>

            <div className="flex items-center gap-2 md:gap-3 mb-4">
               <div className="bg-crimson p-1.5 md:p-3 rounded-full shadow-lg shrink-0">
                  <Phone size={18} className="text-white fill-white md:w-6 md:h-6" />
               </div>
               <a 
                 href="tel:+919875958008"
                 className="text-2xl md:text-5xl font-black text-crimson tracking-tighter hover:scale-105 transition-transform drop-shadow-[0_1px_0_rgba(255,215,0,1)] whitespace-nowrap"
               >
                 +91-9875958008
               </a>
               <a 
                 href="https://wa.me/919875958008"
                 className="shrink-0"
               >
                 <Image 
                   src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                   alt="WhatsApp" 
                   width={36} 
                   height={36}
                   className="md:w-16 md:h-16 hover:scale-110 transition-transform"
                 />
               </a>
            </div>

            <div className="bg-[#FFD700] px-8 py-2.5 rounded-full shadow-md mb-3 w-full md:w-auto">
               <span className="font-black text-black text-sm md:text-lg uppercase tracking-tighter">Call us today for all solutions</span>
            </div>

            <p className="text-black font-black text-xs md:text-base uppercase tracking-tight">
              Get An Answer To Your All Life Related Queries
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
