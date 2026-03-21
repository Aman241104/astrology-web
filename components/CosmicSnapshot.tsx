"use client";

import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

export default function CosmicSnapshot() {
  const [energies, setEnergies] = useState({ love: 0, career: 0, luck: 0 });

  useEffect(() => {
    // Animate to these values on load
    const timeout = setTimeout(() => {
      setEnergies({ love: 98, career: 99, luck: 99 });
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const items = [
    { label: "Love Energy", value: energies.love, icon: <Heart size={14} className="text-crimson" fill="currentColor" />, color: "stroke-crimson" },
    { label: "Happiness", value: energies.career, icon: <Sparkles size={14} className="text-saffron" fill="currentColor" />, color: "stroke-saffron" },
    { label: "Bonding", value: energies.luck, icon: <Heart size={14} className="text-gold" fill="currentColor" />, color: "stroke-gold" },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-sm border border-gold/20 rounded-[32px] p-4 md:p-6 shadow-xl flex justify-around gap-2 md:gap-4 max-w-[280px] md:max-w-sm mx-auto lg:mx-0 reveal-text scale-90 md:scale-100 origin-center lg:origin-left">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                className="text-gray-100"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={175.9}
                strokeDashoffset={175.9 - (175.9 * item.value) / 100}
                className={`${item.color} transition-all duration-1000 ease-out`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              {item.icon}
            </div>
          </div>
          <div className="text-center">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter leading-none mb-1">{item.label}</div>
            <div className="text-sm font-black text-gray-800">{item.value}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}
