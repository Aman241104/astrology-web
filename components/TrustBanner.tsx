"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star, Trophy, Globe2, Zap, Users, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TrustBanner() {
  const { t } = useLanguage();

  const achievements = [
    { label: "Active Live Consultations", value: "142", icon: <Zap size={16} className="text-saffron" /> },
    { label: "Success Rate Verified", value: "99.2%", icon: <CheckCircle2 size={16} className="text-green-600" /> },
  ];

  const methodology = [
    { step: "Analyze", desc: "Life Chart Deep Analysis", icon: <Globe2 size={24} /> },
    { step: "Ritual", desc: "Ancient Vedic Remedies", icon: <Trophy size={24} /> },
    { step: "Result", desc: "Positive Life Shift", icon: <Star size={24} /> },
  ];

  return (
    <section className="py-12 md:py-24 px-4 bg-[#FFFDF5] border-y border-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Modern Identity */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gold/10 flex items-center justify-center text-[10px] font-bold text-saffron">
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="bg-saffron/10 text-saffron px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-saffron/20 flex items-center gap-2">
                  <span className="w-2 h-2 bg-saffron rounded-full animate-pulse"></span>
                  Join 50,000+ Happy Clients
                </div>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-crimson leading-[0.9] uppercase tracking-tighter">
                Global Master of <br />
                <span className="text-gold">Ancient Wisdom</span>
              </h2>
              
              <p className="text-gray-600 font-bold text-lg md:text-xl max-w-xl italic leading-relaxed">
                Empowering lives worldwide through precise spiritual science and time-tested Vedic remedies since 2002.
              </p>
            </div>

            {/* Methodology Flow */}
            <div className="grid grid-cols-3 gap-4">
              {methodology.map((m, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-gold/10 shadow-sm flex flex-col items-center text-center group hover:border-saffron transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gold/5 flex items-center justify-center mb-3 text-gold group-hover:text-saffron transition-colors">
                    {m.icon}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gold mb-1">{m.step}</p>
                  <p className="text-[8px] font-bold text-gray-500 leading-tight uppercase">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
               <div className="flex items-center gap-2 bg-crimson text-white px-6 py-3 rounded-xl font-black uppercase text-sm tracking-widest shadow-xl shadow-crimson/20">
                  <ShieldCheck size={18} className="text-gold" />
                  100% Privacy Shield
               </div>
               <div className="flex items-center gap-2 bg-white text-crimson px-6 py-3 rounded-xl font-black uppercase text-sm tracking-widest border border-gold/20 shadow-sm">
                  <Globe2 size={18} className="text-saffron" />
                  International Expert
               </div>
            </div>
          </div>

          {/* Right Side: Visual Proof & Contact */}
          <div className="relative">
            {/* Main Stats Card */}
            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gold/10 shadow-2xl relative z-10 overflow-hidden">
               {/* Decorative Background Accent */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16"></div>
               
               <div className="flex flex-col items-center text-center gap-8">
                  <div className="space-y-2">
                    <div className="flex justify-center gap-1 text-gold">
                       {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-xs">Certified Vedic Wisdom</p>
                  </div>

                  <div className="w-full h-px bg-gold/5"></div>

                  <div className="grid grid-cols-2 gap-8 w-full">
                     {achievements.map((a, i) => (
                       <div key={i} className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-2">
                             {a.icon}
                             <span className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">{a.value}</span>
                          </div>
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{a.label}</span>
                       </div>
                     ))}
                  </div>

                  <div className="w-full h-px bg-gold/5"></div>

                  <div className="w-full space-y-4">
                     <div className="bg-gold/5 rounded-2xl p-6 border border-gold/10 group hover:border-saffron transition-all">
                        <p className="text-[10px] font-black text-gold uppercase tracking-widest mb-2">Connect Directly Via Phone</p>
                        <a 
                          href="tel:+919929563493"
                          className="text-3xl md:text-5xl font-black text-crimson tracking-tighter flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                        >
                          <Phone className="animate-bounce" />
                          +91-9929563493
                        </a>
                     </div>
                     <div className="flex justify-center gap-4">
                        <span className="text-2xl filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">🇺🇸</span>
                        <span className="text-2xl filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">🇬🇧</span>
                        <span className="text-2xl filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">🇮🇳</span>
                        <span className="text-2xl filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">🇨🇦</span>
                        <span className="text-2xl filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">🇦🇺</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-auto md:-bottom-10 md:-left-10 bg-crimson text-white rounded-3xl p-4 md:p-6 shadow-2xl z-20 rotate-[-2deg] md:rotate-[-5deg] hover:rotate-0 transition-transform duration-500 border-2 border-gold/20 w-fit whitespace-nowrap">
               <div className="flex md:flex-col items-center gap-3 md:gap-0">
                 <Trophy size={32} className="md:mb-4 text-gold" />
                 <div className="text-left md:text-center">
                   <p className="font-black text-xl md:text-2xl uppercase leading-none">Top Rated</p>
                   <p className="text-gold font-bold uppercase tracking-widest text-[8px] md:text-[10px] mt-1">Spiritual Consultant 2026</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Phone({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
