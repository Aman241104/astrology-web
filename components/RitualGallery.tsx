"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function RitualGallery() {
  const { t } = useLanguage();

  const gallery = [
    { label: "Maha Havan", color: "from-saffron/20 to-crimson/20" },
    { label: "Vedic Pooja", color: "from-gold/20 to-saffron/20" },
    { label: "Astro Ritual", color: "from-crimson/20 to-gold/20" },
    { label: "Mantra Siddhi", color: "from-saffron/20 to-gold/20" },
  ];

  return (
    <section className="py-24 px-4 bg-cream/20 overflow-hidden">
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
            <div key={i} className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
               {/* Image Placeholder with Gradient */}
               <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center text-center p-6`}>
                  <div className="text-gold/40 font-black text-lg uppercase tracking-widest leading-tight opacity-50">
                    [ Ritual Photo {i + 1} ]
                  </div>
               </div>
               
               {/* Label Overlay */}
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
