"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import DecorativeCorner from "./DecorativeCorner";

export default function RitualGallery() {
  const { t } = useLanguage();

  const gallery = [
    { label: "Maha Havan", img: "/images/rituals/maha-havan-3842912874.png" },
    { label: "Vedic Pooja", img: "/images/rituals/vedic-pooja-3842959859.png" },
    { label: "Spiritual Ritual", img: "/images/rituals/astro-ritual-3843005940.png" },
    { label: "Mantra Siddhi", img: "/images/rituals/mantra-siddhi-3843060169.png" },
  ];

  return (
    <section className="py-24 md:py-32 px-4 bg-cream/10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold/10 text-gold px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4 border border-gold/20">
             Vedic Tradition
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-crimson mb-4 uppercase tracking-tighter drop-shadow-sm">
            {t.ritualGallery.title}
          </h2>
          <p className="text-gray-600 font-bold uppercase tracking-[0.3em] text-xs md:text-base italic max-w-2xl mx-auto leading-relaxed">
            {t.ritualGallery.sub}
          </p>
          <div className="w-24 h-1 bg-gold/30 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {gallery.map((item, i) => (
            <div key={i} className="flex flex-col gap-6 group">
              <div className="ritual-card relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white transition-all duration-700 hover:shadow-gold/30 hover:-translate-y-2">
                 <DecorativeCorner className="absolute top-4 left-4 z-20 opacity-40 group-hover:opacity-100 transition-opacity scale-75" />
                 <DecorativeCorner className="absolute bottom-4 right-4 z-20 rotate-180 opacity-40 group-hover:opacity-100 transition-opacity scale-75" />

                 <Image 
                   src={item.img} 
                   alt={item.label} 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                   sizes="(max-width: 768px) 100vw, 25vw"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                 
                 <div className="absolute bottom-8 left-0 right-0 text-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
                    <span className="bg-white/90 backdrop-blur-md text-crimson px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest border border-gold/20">View Details</span>
                 </div>
              </div>
              <div className="text-center transition-all duration-500">
                <div className="text-crimson font-black uppercase tracking-[0.2em] text-sm md:text-xl mb-1 group-hover:scale-110 transition-transform">{item.label}</div>
                <div className="w-12 h-1 bg-gold/40 mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
