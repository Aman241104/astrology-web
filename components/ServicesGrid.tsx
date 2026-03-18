"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, Home, Briefcase, ShieldAlert, MessageCircle } from "lucide-react";
import Image from "next/image";
import MandalaSVG from "./MandalaSVG";
import ZodiacWheel from "./ZodiacWheel";

export default function ServicesGrid() {
  const { t } = useLanguage();

  const services = [
    { 
      title: t.services.loveMarriage.title, 
      desc: t.services.loveMarriage.desc, 
      img: "/images/services/love-marriage.png",
      icon: <Heart size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.getLoveBack.title, 
      desc: t.services.getLoveBack.desc, 
      img: "/images/services/get-love-back.png",
      icon: <Users size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.stopDivorce.title, 
      desc: t.services.stopDivorce.desc, 
      img: "/images/services/stop-divorce.png",
      icon: <Home size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.blackMagic.title, 
      desc: t.services.blackMagic.desc, 
      img: "/images/services/black-magic.png",
      icon: <ShieldAlert size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.careerMoney.title, 
      desc: t.services.careerMoney.desc, 
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=100&w=600&h=400",
      icon: <Briefcase size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.muthkarni.title, 
      desc: t.services.muthkarni.desc, 
      img: "/images/services/muthkarni.png",
      icon: <Users size={20} className="text-white" fill="currentColor" />
    },
  ];

  return (
    <section id="services" className="pt-0 pb-4 px-4 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515940175183-6798529cb860?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.03]"></div>
      <MandalaSVG className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] text-gold opacity-[0.05] animate-[spin_400s_linear_infinite]" />
      <ZodiacWheel className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] text-saffron opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4">
          <div className="inline-block bg-saffron/10 text-saffron px-4 py-1 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-1 border border-saffron/20">
             Our Best Astrological Solutions
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-crimson mb-1 uppercase tracking-tighter drop-shadow-sm">
            {t.services.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mb-2"></div>
          <p className="text-gray-700 font-bold max-w-3xl mx-auto text-sm md:text-lg uppercase opacity-80 leading-tight italic">
            &quot;Talk With Astrologer & He Can Solve Your Problems In Very Short Time...&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div 
              key={i}
              className="service-card group flex flex-col items-center text-center relative"
            >
              {/* Floating Zodiac Symbol behind card */}
              <div className="absolute -top-10 -z-10 text-9xl text-gold/5 group-hover:text-gold/10 transition-colors font-serif pointer-events-none select-none">
                {['♈', '♌', '♐', '♋', '♏', '♓'][i % 6]}
              </div>

              <div className="relative w-48 h-48 md:w-64 md:h-64 mb-2 p-3 bg-white rounded-full shadow-[0_32px_64px_-16px_rgba(212,175,55,0.3)] border-4 border-gold/10 group-hover:border-saffron/40 transition-all duration-700 hover:scale-105">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner">
                  <Image 
                    src={s.img} 
                    alt={s.title} 
                    fill 
                    className="object-cover group-hover:scale-125 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                {/* Icon Badge */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-crimson flex items-center justify-center shadow-2xl border-4 border-white group-hover:rotate-[360deg] transition-transform duration-1000 z-20">
                  <div className="scale-75">{s.icon}</div>
                </div>
              </div>

              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-[30px] border border-gold/10 group-hover:border-gold/30 transition-all group-hover:bg-white/80 shadow-sm group-hover:shadow-xl w-full">
                <div className="text-[9px] font-black text-saffron uppercase tracking-[0.3em] mb-0.5">Best Astrologer</div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-1 uppercase tracking-tighter group-hover:text-crimson transition-colors leading-none">{s.title}</h3>
                <p className="text-gray-600 text-[10px] md:text-sm leading-relaxed font-bold mb-2 opacity-90 line-clamp-2 group-hover:line-clamp-none transition-all">{s.desc}</p>
                
                <a 
                  href="https://wa.me/919929563493"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-gold/20 hover:shadow-gold/40"
                >
                  <MessageCircle size={14} fill="white" />
                  Chat Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
