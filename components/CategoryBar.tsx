"use client";

import { Heart, Briefcase, Users, HeartOff, TrendingUp, Sparkles } from "lucide-react";

export default function CategoryBar() {
  const categories = [
    { label: "Love", icon: <Heart size={32} className="text-crimson" fill="currentColor" /> },
    { label: "Career", icon: <Briefcase size={32} className="text-saffron" fill="currentColor" /> },
    { label: "Marriage", icon: <Users size={32} className="text-pink-500" fill="currentColor" /> },
    { label: "Breakup", icon: <HeartOff size={32} className="text-gray-600" /> },
    { label: "Business", icon: <TrendingUp size={32} className="text-blue-600" /> },
    { label: "Healer", icon: <Sparkles size={32} className="text-gold" fill="currentColor" /> },
  ];

  return (
    <section className="bg-crimson pt-1 pb-0 relative overflow-hidden">
      {/* Bokeh / Bubble Effect Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-4 left-10 w-8 h-8 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-12 h-12 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-white rounded-full blur-lg"></div>
        <div className="absolute top-10 right-1/4 w-10 h-10 bg-white rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-3">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] bg-white rounded-lg md:rounded-xl shadow-2xl flex flex-col items-center justify-center gap-0.5 md:gap-1 transform transition-all hover:scale-110 cursor-pointer group shrink-0"
            >
              <div className="group-hover:animate-bounce scale-50 md:scale-60">
                {cat.icon}
              </div>
              <span className="font-black text-gray-800 uppercase tracking-tighter text-[8px] md:text-xs text-center px-1">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
