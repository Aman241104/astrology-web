"use client";

import { Heart, Briefcase, Users, ShieldCheck } from "lucide-react";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ExtraServices() {
  const extraServices = [
    { 
      title: "Extra Mateiral Affair", 
      desc: "Remove third-party interference and restore loyalty in your relationship permanently.",
      img: "/images/extra-marital-affair.png",
      icon: <Users size={20} className="text-white" fill="currentColor" /> 
    },
    {
      title: "Love Marriage Specialist",
      desc: "Solve intercaste marriage issues and convince parents for your happy love marriage.",
      img: "/images/love-marriage-new.png",
      icon: <Heart size={20} className="text-white" fill="currentColor" />
    },
    {
      title: "Marriage Problem Solution",
      desc: "Resolve deep-rooted husband-wife disputes and bring back peace to your married life.",
      img: "/images/new/divorce-solution.png",
      icon: <ShieldCheck size={20} className="text-white" fill="currentColor" />
    },
    { 
      title: "Business problem Solution", 
      desc: "Remove financial blocks and negative energy affecting your career and business growth.",
      img: "/images/business-problem-solution.png",
      icon: <Briefcase size={20} className="text-white" fill="currentColor" /> 
    },
  ];

  return (
    <section className="py-12 md:py-32 px-4 bg-[#FFFDF5] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515940175183-6798529cb860?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-gold/10 text-gold px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4 border border-gold/20">
             More Solutions
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-crimson mb-4 uppercase tracking-tighter">
            Other Problems We Solve
          </h2>
          <div className="w-48 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
          {extraServices.map((s, i) => (
            <a 
              key={i}
              href="https://wa.me/919929563493"
              className="service-card group relative block"
            >
              {/* Modern Card Design - Matching ServicesGrid */}
              <div className="bg-white rounded-[20px] md:rounded-[40px] border border-gold/10 p-1.5 md:p-2 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col shadow-sm hover:shadow-xl transition-all">
                
                {/* Image Container */}
                <div className="relative aspect-square rounded-[16px] md:rounded-[32px] overflow-hidden mb-3 md:mb-6">
                  <Image 
                    src={s.img} 
                    alt={s.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-md px-2 md:px-4 py-1 rounded-full border border-gold/20 flex items-center gap-1 md:gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-saffron rounded-full animate-pulse"></div>
                    <span className="text-[8px] md:text-[10px] font-black text-gray-800 uppercase tracking-widest">Expert Solution</span>
                  </div>

                  {/* Icon Over Image */}
                  <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-crimson flex items-center justify-center border-2 border-white/30 group-hover:rotate-[360deg] transition-transform duration-1000 z-20">
                    <div className="scale-75 md:scale-110">{s.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 md:px-6 pb-4 md:pb-8 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-[8px] md:text-[10px] font-black text-saffron uppercase tracking-[0.2em] md:tracking-[0.4em] mb-1 md:mb-2">Highly Effective</div>
                    <h3 className="text-sm md:text-2xl font-black text-gray-900 mb-1 md:mb-3 uppercase tracking-tighter group-hover:text-crimson transition-colors leading-tight">{s.title}</h3>
                    <div className="w-8 md:w-12 h-0.5 bg-gold/30 mx-auto mb-2 md:mb-4 group-hover:w-16 transition-all duration-500"></div>
                    <p className="text-gray-600 text-[10px] md:text-sm leading-tight md:leading-relaxed font-medium mb-3 md:mb-8 line-clamp-3 group-hover:line-clamp-none transition-all">{s.desc}</p>
                  </div>
                  
                  <div 
                    className="inline-flex items-center gap-1.5 md:gap-3 bg-gradient-to-br from-gold to-saffron hover:from-saffron hover:to-crimson text-white px-3 md:px-6 py-2.5 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest transition-all active:scale-95 w-full justify-center mt-auto shadow-md"
                  >
                    <WhatsAppIcon size={14} />
                    <span>WhatsApp Now</span>
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
