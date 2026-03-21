"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const [hasMounted, setHasMounted] = useState(false);
  const [bokehElements] = useState(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      width: `${Math.random() * 120 + 30}px`,
      height: `${Math.random() * 120 + 30}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`
    }))
  );

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!t.whyChooseUs) return null;

  return (
    <section className="relative py-24 md:py-32 px-4 bg-crimson overflow-hidden min-h-[500px] flex items-center">
      {/* Bokeh Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {hasMounted && bokehElements.map((el) => (
          <div
            key={el.id}
            className="absolute rounded-full bg-white/10 blur-[2px] animate-pulse"
            style={{
              width: el.width,
              height: el.height,
              top: el.top,
              left: el.left,
              opacity: el.opacity,
              animationDelay: el.delay,
              animationDuration: el.duration
            }}
          />
        ))}
        {/* Larger Blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-saffron/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Pills and Phone */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-3">
              {t.whyChooseUs.pills.map((pill: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#FFB800] rounded-full px-6 py-3 w-fit shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="bg-white p-1.5 rounded-full flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
                    <Star className="text-crimson fill-crimson" size={16} />
                  </div>
                  <span className="font-black text-crimson text-sm md:text-base uppercase tracking-wider">
                    {pill}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <div className="bg-black/40 border border-white/10 rounded-2xl px-6 py-4 w-fit shadow-2xl backdrop-blur-sm">
                <p className="text-sm md:text-lg font-black text-saffron uppercase tracking-[0.2em] italic mb-1">
                  {t.whyChooseUs.callUs}
                </p>
                <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] leading-none">
                  {t.whyChooseUs.phone}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Side: Framed Content */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFB800] to-saffron rounded-[4rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative border-4 border-[#FFB800]/30 rounded-[3rem] p-8 md:p-12 bg-black/40 backdrop-blur-md shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 text-center uppercase tracking-tighter leading-tight drop-shadow-2xl">
                {t.whyChooseUs.title}
              </h2>

              <div className="bg-[#FFB800] rounded-2xl px-6 py-3 mb-8 mx-auto w-fit shadow-[0_15px_30px_rgba(255,184,0,0.4)] transform rotate-[-1deg]">
                <p className="text-black font-black text-xs md:text-sm uppercase tracking-widest text-center">
                  {t.whyChooseUs.subTitle}
                </p>
              </div>

              <p className="text-white/90 text-sm md:text-lg leading-relaxed text-center font-bold mb-10 max-w-xl mx-auto drop-shadow-md">
                {t.whyChooseUs.desc}
              </p>

              <div className="flex justify-center">
                <a
                  href={`https://wa.me/${t.whyChooseUs.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB800] hover:bg-white text-black font-black px-12 py-5 rounded-2xl shadow-[0_20px_50px_rgba(255,184,0,0.4)] transition-all duration-500 hover:scale-105 flex items-center gap-4 active:scale-95 group/btn"
                >
                  <WhatsAppIcon className="group-hover/btn:scale-110 transition-transform" size={28} />
                  <span className="text-xl md:text-2xl uppercase tracking-tighter">
                    {t.whyChooseUs.chatBtn}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
