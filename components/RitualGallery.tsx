"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import DecorativeCorner from "./DecorativeCorner";

export default function RitualGallery() {
  const { t } = useLanguage();

  const gallery = [
    { label: "Maha Havan", img: "/images/rituals/maha-havan-3842912874.png" },
    { label: "Vedic Pooja", img: "/images/rituals/vedic-pooja-3842959859.png" },
    { label: "Astro Ritual", img: "/images/rituals/astro-ritual-3843005940.png" },
    { label: "Mantra Siddhi", img: "/images/rituals/mantra-siddhi-3843060169.png" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-cream/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-3">
          <h2 className="text-2xl md:text-4xl font-black text-crimson mb-1 uppercase tracking-tighter">
            {t.ritualGallery.title}
          </h2>
          <p className="text-gray-600 font-bold uppercase tracking-widest text-[10px] italic">
            {t.ritualGallery.sub}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {gallery.map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="ritual-card group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white transition-all duration-500 hover:shadow-gold/20">
                 <DecorativeCorner className="absolute top-2 left-2 z-20 opacity-30 group-hover:opacity-100 transition-opacity scale-50" />
                 <DecorativeCorner className="absolute bottom-2 right-2 z-20 rotate-180 opacity-30 group-hover:opacity-100 transition-opacity scale-50" />

                 <Image 
                   src={item.img} 
                   alt={item.label} 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-500 grayscale-[20%] group-hover:grayscale-0"
                   sizes="(max-width: 768px) 50vw, 25vw"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-center ritual-card transition-all duration-500 delay-150">
                <div className="text-crimson font-black uppercase tracking-widest text-[10px] md:text-sm mb-0.5">{item.label}</div>
                <div className="w-6 h-0.5 bg-gold/40 mx-auto rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
