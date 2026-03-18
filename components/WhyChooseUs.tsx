"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const [bokehElements] = useState(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      width: `${Math.random() * 120 + 30}px`,
      height: `${Math.random() * 120 + 30}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4,
    }));
  });

  if (!t.whyChooseUs) return null;

  return (
    <section className="relative py-4 px-4 bg-crimson overflow-hidden min-h-[300px] flex items-center">
      {/* Bokeh Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bokehElements.map((el) => (
          <div
            key={el.id}
            className="absolute rounded-full bg-white/10 blur-[2px]"
            style={{
              width: el.width,
              height: el.height,
              top: el.top,
              left: el.left,
              opacity: el.opacity,
            }}
          />
        ))}
        {/* Larger Blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-saffron/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Side: Pills and Phone */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {t.whyChooseUs.pills.map((pill: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#FFB800] rounded-full px-4 py-2 w-fit shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="bg-white p-1 rounded-full flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
                    <Star className="text-crimson fill-crimson" size={14} />
                  </div>
                  <span className="font-black text-crimson text-xs md:text-sm uppercase tracking-tight">
                    {pill}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-1 flex flex-col gap-1">
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-none">
                {t.whyChooseUs.phone}
              </h3>
              <div className="bg-black/80 border border-white/20 rounded-full px-5 md:px-6 py-2 md:py-3 w-fit shadow-2xl">
                <p className="text-sm md:text-xl font-black text-white uppercase tracking-widest text-center italic">
                  {t.whyChooseUs.callUs}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Framed Content */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FFB800] to-[#FFB800]/50 rounded-[3rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative border-[2px] border-[#FFB800] rounded-[2.5rem] p-4 md:p-6 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-2 text-center uppercase tracking-tighter leading-none drop-shadow-xl">
                {t.whyChooseUs.title}
              </h2>

              <div className="bg-[#FFB800] rounded-2xl px-4 py-2 mb-3 mx-auto w-fit shadow-[0_10px_20px_rgba(255,184,0,0.3)] transform rotate-[-0.5deg]">
                <p className="text-black font-black text-[10px] md:text-xs uppercase tracking-tight text-center">
                  {t.whyChooseUs.subTitle}
                </p>
              </div>

              <p className="text-white/95 text-xs md:text-sm leading-relaxed text-center font-medium mb-4 max-w-xl mx-auto drop-shadow-sm">
                {t.whyChooseUs.desc}
              </p>

              <div className="flex justify-center">
                <a
                  href={`https://wa.me/${t.whyChooseUs.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFB800] hover:bg-white text-black font-black px-8 py-3 rounded-full shadow-[0_15px_40px_rgba(255,184,0,0.5)] transition-all duration-500 hover:scale-110 flex items-center gap-3 active:scale-95 group/btn"
                >
                  <MessageCircle className="group-hover/btn:scale-125 transition-transform" size={20} />
                  <span className="text-lg uppercase tracking-tighter">
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
