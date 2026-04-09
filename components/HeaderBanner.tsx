"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

export default function HeaderBanner() {
  return (
    <div className="bg-white border-b border-gray-100 py-2 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 xl:gap-6 pb-2 lg:pb-0">
        {/* Left Side: Ganesha & Name */}
        <div className="flex items-center gap-4 xl:gap-8 shrink-0">
          <div className="relative w-24 h-24 xl:w-40 xl:h-40 shrink-0">
             <Image 
                src="/—Pngtree—3d ganesha mandap decor on_17265442.png"
                alt="Lord Ganesha"
                fill
                className="object-contain"
                priority
             />
          </div>
          <div className="flex flex-col text-center">
            <span className="text-crimson font-black text-[10px] xl:text-xs uppercase tracking-[0.2em] mb-1">BEST ONLINE ASTRO</span>
            <div className="flex flex-col leading-[0.75] xl:leading-[0.8]">
              <span className="text-crimson font-black text-3xl xl:text-5xl tracking-tighter uppercase">ASTRO</span>
              <span className="text-crimson font-black text-3xl xl:text-5xl tracking-tighter uppercase">PAWAN</span>
              <span className="text-crimson font-black text-3xl xl:text-5xl tracking-tighter uppercase">SWAMI</span>
            </div>
            <div className="mt-2 xl:mt-4 bg-[#FFCC00] px-3 py-1 xl:px-4 xl:py-2 rounded-full text-[8px] xl:text-[10px] font-black uppercase text-black shadow-md border-b-2 border-black/10">
              LOVE AND FAMILY PROBLEM EXPERT
            </div>
          </div>
        </div>

        <div className="w-px h-24 xl:h-32 bg-gray-100 hidden xl:block"></div>

        {/* Middle Section: Trust & Flags */}
        <div className="flex flex-col items-center gap-3 xl:gap-4 text-center">
          <h2 className="text-crimson font-black text-xl xl:text-3xl uppercase tracking-tighter leading-tight max-w-[200px] xl:max-w-[300px]">
            TRUSTED WORLD FAMOUS NO.1 ASTRO
          </h2>
          
          <div className="flex items-center gap-2 xl:gap-3">
             <div className="bg-[#22c55e] text-white px-2 py-1 xl:px-3 xl:py-1.5 rounded-lg flex flex-col items-center leading-none">
                <span className="text-[8px] xl:text-[10px] font-black uppercase">100%</span>
                <span className="text-[8px] xl:text-[10px] font-black uppercase">SECURE</span>
             </div>
             
             {/* Flags */}
             <div className="flex gap-1 xl:gap-2">
                <span className="text-xl xl:text-3xl">🇺🇸</span>
                <span className="text-xl xl:text-3xl">🇨🇦</span>
                <span className="text-xl xl:text-3xl">🇬🇧</span>
                <span className="text-xl xl:text-3xl">🇦🇪</span>
                <span className="text-xl xl:text-3xl">🇸🇬</span>
                <span className="text-xl xl:text-3xl">🇦🇺</span>
             </div>
          </div>

          <div className="text-[#065f46] font-black text-[10px] xl:text-sm uppercase tracking-wider">
            ALL PROBLEM & GET PERMANENT SOLUTION
          </div>

          <div className="bg-[#FFCC00] px-4 py-1.5 xl:px-6 xl:py-2.5 rounded-full text-[8px] xl:text-xs font-black uppercase text-black shadow-lg border-b-2 border-black/10">
            20+ YEARS EXPERIENCE IN ASTROLOGY
          </div>
        </div>

        <div className="w-px h-24 xl:h-32 bg-gray-100 hidden xl:block"></div>

        {/* Right Side: Contact & CTA */}
        <div className="flex flex-col items-center gap-2 xl:gap-4 text-center shrink-0">
          <div className="flex flex-col leading-tight">
            <span className="text-crimson font-black text-[10px] xl:text-sm uppercase tracking-wider">NEED GUIDANCE CALL & GET THE</span>
            <span className="text-crimson font-black text-[10px] xl:text-sm uppercase tracking-wider">PERMANENT SOLUTION</span>
          </div>

          <div className="flex items-center gap-2 xl:gap-4">
             <div className="w-8 h-8 xl:w-12 xl:h-12 bg-crimson rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                <Phone fill="white" size={16} className="xl:w-6 xl:h-6" />
             </div>
             <a href="tel:+919875958008" className="text-crimson font-black text-3xl xl:text-6xl tracking-tighter hover:scale-105 transition-transform">
               +91-9875958008
             </a>
             <div className="w-8 h-8 xl:w-12 xl:h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-5 h-5 xl:w-8 xl:h-8 fill-current">
                   <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.77 0 1.26.408 2.43 1.1 3.38l-1.16 3.416 3.535-1.158c.9.561 1.95.885 3.088.885 3.185 0 5.765-2.589 5.765-5.77 0-3.183-2.58-5.773-5.761-5.773zm3.38 8.113c-.144.405-.833.784-1.15.823-.31.036-.694.058-1.136-.088-.27-.089-.607-.21-1.03-.394-1.794-.788-2.984-2.616-3.075-2.738-.088-.124-.716-.953-.716-1.815 0-.862.454-1.286.613-1.454.16-.168.353-.21.472-.21.12 0 .238.002.341.006.11.005.253-.042.396.3.143.348.498 1.216.541 1.3.044.085.073.184.017.294-.055.111-.082.18-.164.274-.082.094-.173.21-.247.28-.081.079-.166.166-.071.327.094.162.42.693.901 1.121.62.551 1.141.722 1.302.803.161.082.256.069.351-.04.094-.11.403-.468.512-.627.108-.159.215-.133.364-.077.15.056.945.446 1.108.527.163.082.271.121.311.19.039.068.039.397-.105.802z" />
                </svg>
             </div>
          </div>

          <a 
            href="tel:+919875958008"
            className="w-full bg-[#FFCC00] hover:bg-[#FF9933] text-black font-black py-2 xl:py-4 px-4 xl:px-8 rounded-full text-lg xl:text-3xl shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all uppercase tracking-tighter"
          >
            CALL US TODAY FOR ALL SOLUTIONS
          </a>

          <div className="text-black font-black text-[8px] xl:text-[11px] uppercase tracking-tight">
            GET AN ANSWER TO YOUR ALL LIFE RELATED QUERIES
          </div>
        </div>
      </div>
    </div>
  );
}
