"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Heart, Users, Home, HeartOff, MessageCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ServicesGrid() {
  const { t } = useLanguage();

  const services = [
    { 
      title: t.services.loveMarriage.title, 
      desc: t.services.loveMarriage.desc, 
      img: "/images/services/love-marriage-3842579264.png",
      icon: <Heart size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.getLoveBack.title, 
      desc: t.services.getLoveBack.desc, 
      img: "/images/services/get-love-back-1773844157683.png",
      icon: <Users size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.stopDivorce.title, 
      desc: t.services.stopDivorce.desc, 
      img: "/images/services/stop-divorce-3842628694.png",
      icon: <Home size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.relationshipProblem.title, 
      desc: t.services.relationshipProblem.desc, 
      img: "/images/new/relationship-issue.png",
      icon: <HeartOff size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.loveBackSolution.title, 
      desc: t.services.loveBackSolution.desc, 
      img: "/images/services/get-love-back.png",
      icon: <MessageCircle size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: t.services.divorceSolution.title, 
      desc: t.services.divorceSolution.desc, 
      img: "/images/new/divorce-solution.png",
      icon: <ShieldCheck size={20} className="text-white" fill="currentColor" />
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-[#FFFDF5] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515940175183-6798529cb860?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-saffron/10 text-saffron px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4 border border-saffron/20 shadow-sm">
             {t.services.title && "Expert Relationship Solutions"}
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-crimson mb-4 uppercase tracking-tighter drop-shadow-md">
            {t.services.title}
          </h2>
          <div className="w-48 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 font-bold max-w-3xl mx-auto text-lg md:text-2xl uppercase opacity-90 leading-tight italic tracking-tight">
            &quot;Talk with our expert to solve your problems in a very short time...&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {services.map((s, i) => (
            <div 
              key={i}
              className="service-card group relative"
            >
              {/* Modern Card Design */}
              <div className="bg-white rounded-[40px] border border-gold/10 p-2 shadow-[0_20px_50px_rgba(212,175,55,0.1)] group-hover:shadow-[0_30px_70px_rgba(212,175,55,0.2)] transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6">
                  <Image 
                    src={s.img} 
                    alt={s.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-gold/20 flex items-center gap-2">
                    <div className="w-2 h-2 bg-saffron rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black text-gray-800 uppercase tracking-widest">Verified Results</span>
                  </div>

                  {/* Icon Over Image */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-crimson flex items-center justify-center shadow-2xl border-2 border-white/30 group-hover:rotate-[360deg] transition-transform duration-1000 z-20">
                    <div className="scale-110">{s.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-8 text-center">
                  <div className="text-[10px] font-black text-saffron uppercase tracking-[0.4em] mb-2 drop-shadow-sm">Relationship Expert</div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 uppercase tracking-tighter group-hover:text-crimson transition-colors leading-none">{s.title}</h3>
                  <div className="w-12 h-0.5 bg-gold/30 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium mb-8 min-h-[3rem] line-clamp-3 group-hover:line-clamp-none transition-all">{s.desc}</p>
                  
                  <a 
                    href="https://wa.me/919929563493"
                    className="inline-flex items-center gap-3 bg-gradient-to-br from-gold to-saffron hover:from-saffron hover:to-crimson text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.5)] w-full justify-center"
                  >
                    <WhatsAppIcon size={18} />
                    {t.hero.whatsapp.split(" ")[0]} Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
