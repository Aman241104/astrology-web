"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, Home, Briefcase, ShieldAlert } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
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
  }, []);

  const services = [
    {
      title: t.services.loveMarriage.title,
      desc: t.services.loveMarriage.desc,
      icon: <Heart className="text-crimson" fill="currentColor" />,
    },
    {
      title: t.services.getLoveBack.title,
      desc: t.services.getLoveBack.desc,
      icon: <Users className="text-saffron" fill="currentColor" />,
    },
    {
      title: t.services.stopDivorce.title,
      desc: t.services.stopDivorce.desc,
      icon: <Home className="text-crimson" fill="currentColor" />,
    },
    {
      title: t.services.blackMagic.title,
      desc: t.services.blackMagic.desc,
      icon: <ShieldAlert className="text-gold" fill="currentColor" />,
    },
    {
      title: t.services.careerMoney.title,
      desc: t.services.careerMoney.desc,
      icon: <Briefcase className="text-saffron" fill="currentColor" />,
    },
    {
      title: t.services.muthkarni.title,
      desc: t.services.muthkarni.desc,
      icon: <Users className="text-crimson" fill="currentColor" />,
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-crimson mb-4 uppercase tracking-tight">
            {t.services.title.split(" SPECIALIZED")[0]} <span className="text-saffron"> {t.services.title.split("OUR ")[1]}</span>
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
              className="service-card group p-8 rounded-3xl bg-cream border border-gold/10 hover:border-saffron/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-3 uppercase tracking-wide">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">{s.desc}</p>
              
              <a 
                href="https://wa.me/919929563493"
                className="mt-6 text-crimson font-bold text-xs uppercase tracking-widest border-b-2 border-crimson/20 group-hover:border-crimson transition-all"
              >
                {t.services.getSolution}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
