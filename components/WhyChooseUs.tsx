"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  if (!t.whyChooseUs) return null;

  return (
    <section className="relative py-24 md:py-32 px-4 bg-crimson overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Pills and Phone */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              {t.whyChooseUs.pills.map((pill: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gold rounded-2xl px-6 py-4 w-full md:w-fit border border-white/20 transition-all duration-300 group hover:bg-white"
                >
                  <div className="bg-crimson p-2 rounded-full flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-700">
                    <Star className="text-white fill-white" size={18} />
                  </div>
                  <span className="font-black text-crimson text-sm md:text-xl uppercase tracking-wider">
                    {pill}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm md:text-xl font-black text-gold uppercase tracking-[0.4em] italic">
                {t.whyChooseUs.callUs}
              </p>
              <a 
                href={`tel:${t.whyChooseUs.phone}`}
                className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none hover:text-gold transition-colors block"
              >
                {t.whyChooseUs.phone}
              </a>
            </div>
          </div>

          {/* Right Side: Framed Content */}
          <div className="relative">
            <div className="border-4 border-white/10 rounded-[40px] p-8 md:p-16 bg-black/20 backdrop-blur-md">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 text-center uppercase tracking-tighter leading-none">
                {t.whyChooseUs.title}
              </h2>

              <div className="bg-gold rounded-full px-8 py-3 mb-10 mx-auto w-fit border border-white/20">
                <p className="text-crimson font-black text-xs md:text-base uppercase tracking-widest text-center">
                  {t.whyChooseUs.subTitle}
                </p>
              </div>

              <p className="text-white/90 text-base md:text-xl leading-relaxed text-center font-bold mb-12 max-w-xl mx-auto italic">
                {t.whyChooseUs.desc}
              </p>

              <div className="flex justify-center">
                <a
                  href={`https://wa.me/${t.whyChooseUs.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gold text-crimson font-black px-12 py-6 rounded-2xl transition-all duration-500 hover:scale-105 flex items-center gap-4 active:scale-95 group/btn w-full md:w-auto justify-center"
                >
                  <WhatsAppIcon className="text-[#25D366] group-hover/btn:scale-110 transition-transform" size={32} />
                  <span className="text-xl md:text-3xl uppercase tracking-tighter">
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
