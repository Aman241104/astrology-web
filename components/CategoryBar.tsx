"use client";

import { Heart, Users, HeartOff, MessageCircle, Home, Sparkles } from "lucide-react";

export default function CategoryBar() {
  const categories = [
    { label: "Love", icon: <Heart size={32} className="text-crimson" fill="currentColor" /> },
    { label: "Marriage", icon: <Users size={32} className="text-pink-500" fill="currentColor" /> },
    { label: "Ex Back", icon: <MessageCircle size={32} className="text-saffron" fill="currentColor" /> },
    { label: "Relationship", icon: <HeartOff size={32} className="text-gray-600" /> },
    { label: "Family", icon: <Home size={32} className="text-blue-600" /> },
    { label: "Healing", icon: <Sparkles size={32} className="text-gold" fill="currentColor" /> },
  ];

  return (
    <section className="bg-crimson py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-4 left-10 w-16 h-16 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-white/60 font-black text-xs md:text-sm uppercase tracking-[0.5em] mb-2">Explore Our Expertise</h3>
          <div className="w-20 h-1 bg-white/20 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center gap-4 cursor-pointer"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                  {cat.icon}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-black text-white uppercase tracking-[0.2em] text-[10px] md:text-xs transition-colors group-hover:text-saffron">
                  {cat.label}
                </span>
                <div className="w-0 h-0.5 bg-saffron transition-all duration-300 group-hover:w-full mt-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
