"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, Home, Briefcase, ShieldAlert } from "lucide-react";
import Image from "next/image";

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
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=300&h=200",
      icon: <Heart size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.getLoveBack.title, 
      desc: t.services.getLoveBack.desc, 
      img: "https://images.unsplash.com/photo-1516589174184-c685266e430c?auto=format&fit=crop&q=80&w=300&h=200",
      icon: <Users size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.stopDivorce.title, 
      desc: t.services.stopDivorce.desc, 
      img: "https://images.unsplash.com/photo-1484863137850-59afccd31986?auto=format&fit=crop&q=80&w=300&h=200",
      icon: <Home size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.blackMagic.title, 
      desc: t.services.blackMagic.desc, 
      img: "https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&q=80&w=300&h=200",
      icon: <ShieldAlert size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.careerMoney.title, 
      desc: t.services.careerMoney.desc, 
      img: "https://images.unsplash.com/photo-1454165833467-03a669d449f5?auto=format&fit=crop&q=80&w=300&h=200",
      icon: <Briefcase size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.muthkarni.title, 
      desc: t.services.muthkarni.desc, 
      img: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80&w=300&h=200",
      icon: <Users size={20} className="text-white" fill="currentColor" />
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-crimson mb-4 uppercase tracking-tight">
            {t.services.title}
          </h2>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 font-medium max-w-2xl mx-auto">
            {t.services.subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <div 
              key={i}
              className="service-card opacity-0 translate-y-10 group rounded-3xl bg-white border border-gold/10 hover:border-saffron/40 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={s.img} 
                  alt={s.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-crimson flex items-center justify-center shadow-lg">
                  {s.icon}
                </div>
              </div>

              <div className="p-8 text-center flex-1 flex flex-col">
                <h3 className="text-xl font-black text-gray-800 mb-3 uppercase tracking-wide">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6 flex-1">{s.desc}</p>
                
                <a 
                  href="https://wa.me/919929563493"
                  className="w-full bg-crimson/5 text-crimson py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-crimson hover:text-white transition-all active:scale-95 inline-block"
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
