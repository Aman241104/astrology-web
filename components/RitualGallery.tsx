"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RitualGallery() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.to(".ritual-card", {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        });
      }, sectionRef);
      return () => ctx.revert();
    }, 100);
    return () => clearTimeout(timeout);
  }, [t]);

  const gallery = [
    { label: "Maha Havan", color: "from-saffron/20 to-crimson/20" },
    { label: "Vedic Pooja", color: "from-gold/20 to-saffron/20" },
    { label: "Astro Ritual", color: "from-crimson/20 to-gold/20" },
    { label: "Mantra Siddhi", color: "from-saffron/20 to-gold/20" },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-cream/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-crimson mb-4 uppercase tracking-tighter">
            {t.ritualGallery.title}
          </h2>
          <p className="text-gray-600 font-bold uppercase tracking-widest text-xs italic">
            {t.ritualGallery.sub}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {gallery.map((item, i) => (
            <div key={i} className="ritual-card opacity-0 scale-90 group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white transition-all duration-500">
               <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center text-center p-6`}>
                  <div className="text-gold/40 font-black text-lg uppercase tracking-widest leading-tight opacity-50">
                    [ Ritual Photo {i + 1} ]
                  </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <div className="text-white font-black uppercase tracking-widest text-sm">{item.label}</div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
