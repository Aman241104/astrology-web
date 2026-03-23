"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Star, Heart, Briefcase, Users, ShieldCheck } from "lucide-react";

export default function ExtraServices() {
  const { t } = useLanguage();

  const extraServices = [
    { 
      title: "Extra Marital Affair", 
      icon: <Users size={24} className="text-crimson" fill="currentColor" /> 
    },
    { 
      title: "Love Marriage Specialist", 
      icon: <Heart size={24} className="text-saffron" fill="currentColor" /> 
    },
    { 
      title: "Marriage Problem Solution", 
      icon: <ShieldCheck size={24} className="text-gold" /> 
    },
    { 
      title: "Business Problem Solution", 
      icon: <Briefcase size={24} className="text-blue-600" /> 
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-[#FFFDF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block bg-gold/10 text-gold px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3 border border-gold/20">
             More Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-crimson mb-4 uppercase tracking-tighter">
            Other Problems We Solve
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {extraServices.map((service, i) => (
            <a 
              key={i}
              href="https://wa.me/919929563493"
              className="bg-white rounded-2xl md:rounded-3xl border-2 border-gold/10 p-6 md:p-8 flex flex-col items-center text-center group hover:border-gold hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gold/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-tight leading-tight group-hover:text-crimson transition-colors">
                {service.title}
              </h3>
              <div className="mt-4 w-8 h-0.5 bg-gold/30 group-hover:w-12 transition-all duration-500"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
