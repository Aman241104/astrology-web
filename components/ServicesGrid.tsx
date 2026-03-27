"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, Home, HeartOff, ShieldCheck, Flame, Users2, Briefcase } from "lucide-react";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ServicesGrid() {
  const { t } = useLanguage();

  const services = [
    { 
      title: t?.services?.loveMarriage?.title || "", 
      desc: t?.services?.loveMarriage?.desc || "", 
      img: "/images/lost-love-back.png", 
      icon: <Heart size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t?.services?.getLoveBack?.title || "", 
      desc: t?.services?.getLoveBack?.desc || "", 
      img: "/images/love-marriage-specialist.png", 
      icon: <Users size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t?.services?.stopDivorce?.title || "", 
      desc: t?.services?.stopDivorce?.desc || "", 
      img: "/images/breakup-problem-solution.png", 
      icon: <Home size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t?.services?.relationshipProblem?.title || "", 
      desc: t?.services?.relationshipProblem?.desc || "", 
      img: "/images/ex-love-back-specialist.png", 
      icon: <HeartOff size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t?.services?.extraMarital?.title || "", 
      desc: t?.services?.extraMarital?.desc || "", 
      img: "/images/family-problem-solution.png", 
      icon: <Users size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t?.services?.husbandWife?.title || "", 
      desc: t?.services?.husbandWife?.desc || "", 
      img: "/images/husband-wife-problem-solution.png", 
      icon: <ShieldCheck size={20} className="text-white" fill="currentColor" />
    },
  ];

  return (
    <section id="services" className="pt-10 md:pt-16 pb-20 md:pb-32 px-4 bg-[#FFFDF5] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515940175183-6798529cb860?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-saffron/10 text-saffron px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4 border border-saffron/20">
             {t.services.title && "Expert Relationship Solutions"}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-crimson mb-4 uppercase tracking-tighter">
            {t.services.title}
          </h2>
          <div className="w-48 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 font-bold max-w-3xl mx-auto text-lg md:text-2xl uppercase opacity-90 leading-tight italic tracking-tight">
            &quot;Talk with our expert to solve your problems in a very short time...&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-12">
          {services.map((s, i) => (
            <a 
              key={i}
              href="https://wa.me/919875958008"
              className="service-card group relative block"
            >
              {/* Modern Card Design */}
              <div className="bg-white rounded-[20px] md:rounded-[40px] border border-gold/10 p-1.5 md:p-2 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative aspect-square rounded-[16px] md:rounded-[32px] overflow-hidden mb-3 md:mb-6">
                  <Image 
                    src={s.img} 
                    alt={s.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 768px) 50vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Icon Over Image - Smaller on mobile */}
                  <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-crimson flex items-center justify-center border-2 border-white/30 group-hover:rotate-[360deg] transition-transform duration-1000 z-20">
                    <div className="scale-75 md:scale-110">{s.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 md:px-6 pb-4 md:pb-8 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-[8px] md:text-[10px] font-black text-saffron uppercase tracking-[0.2em] md:tracking-[0.4em] mb-1 md:mb-2">Expert Solution</div>
                    <h3 className="text-sm md:text-3xl font-black text-gray-900 mb-1 md:mb-3 uppercase tracking-tighter group-hover:text-crimson transition-colors leading-none">{s.title}</h3>
                    <div className="w-8 md:w-12 h-0.5 bg-gold/30 mx-auto mb-2 md:mb-4 group-hover:w-16 md:group-hover:w-24 transition-all duration-500"></div>
                    <p className="text-gray-600 text-[10px] md:text-base leading-tight md:leading-relaxed font-medium mb-3 md:mb-8 line-clamp-2 md:line-clamp-3 group-hover:line-clamp-none transition-all">{s.desc}</p>
                  </div>
                  
                  <div 
                    className="inline-flex items-center gap-1.5 md:gap-3 bg-gradient-to-br from-gold to-saffron hover:from-saffron hover:to-crimson text-white px-3 md:px-10 py-2.5 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-sm uppercase tracking-wider md:tracking-widest transition-all active:scale-95 w-full justify-center mt-auto"
                  >
                    <WhatsAppIcon size={14} />
                    <span className="hidden xs:inline">{t.hero.whatsapp.split(" ")[0]} Now</span>
                    <span className="xs:hidden">Chat</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
