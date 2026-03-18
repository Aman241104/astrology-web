"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, Home, Briefcase, ShieldAlert } from "lucide-react";
import Image from "next/image";
import MandalaSVG from "./MandalaSVG";
import DecorativeCorner from "./DecorativeCorner";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Use gsap.to since we have opacity-0 as initial state
        gsap.to(".service-card", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      }, sectionRef);
      return () => ctx.revert();
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [t]);

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
    <section ref={sectionRef} id="services" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <MandalaSVG className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] text-gold opacity-[0.03] animate-[spin_300s_linear_infinite]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-black text-crimson mb-4 uppercase tracking-tighter">
            {t.services.title}
          </h2>
          <div className="w-32 h-2 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 font-bold max-w-2xl mx-auto text-lg md:text-xl uppercase opacity-80">
            {t.services.subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((s, i) => (
            <div 
              key={i}
              className="service-card opacity-0 translate-y-10 group rounded-[40px] bg-white border border-gold/10 hover:border-saffron/60 transition-all duration-500 shadow-xl hover:shadow-[0_20px_80px_rgba(255,153,51,0.15)] overflow-hidden flex flex-col relative"
            >
              <DecorativeCorner className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <DecorativeCorner className="absolute top-4 right-4 z-20 rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
              <DecorativeCorner className="absolute bottom-4 left-4 z-20 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
              <DecorativeCorner className="absolute bottom-4 right-4 z-20 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={s.img} 
                  alt={s.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-saffron text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  Effective Solution
                </div>

                <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-crimson flex items-center justify-center shadow-2xl border border-white/20">
                  {s.icon}
                </div>
              </div>

              <div className="p-10 text-center flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tight group-hover:text-crimson transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed font-medium mb-8 flex-1 uppercase tracking-wide opacity-90">{s.desc}</p>
                
                <a 
                  href="https://wa.me/919929563493"
                  className="w-full bg-crimson text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-saffron transition-all active:scale-95 shadow-xl shadow-crimson/20"
                >
                  {t.services.getSolution}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
