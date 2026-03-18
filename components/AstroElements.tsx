"use client";

import React, { useEffect, useState } from 'react';

const ZODIAC_SIGNS = [
  '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'
];

const AstroElements = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; delay: string; duration: string }[]>([]);
  const [zodiacs, setZodiacs] = useState<{ id: number; top: string; left: string; sign: string; delay: string; duration: string; size: number }[]>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`
    }));
    const newZodiacs = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      sign: ZODIAC_SIGNS[i],
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 10 + 10}s`,
      size: Math.random() * 20 + 20
    }));

    const timer = setTimeout(() => {
      setStars(newStars);
      setZodiacs(newZodiacs);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute bg-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.duration
          }}
        />
      ))}
      {zodiacs.map((zodiac) => (
        <div
          key={`zodiac-${zodiac.id}`}
          className="absolute text-gold font-serif opacity-30 select-none"
          style={{
            top: zodiac.top,
            left: zodiac.left,
            fontSize: `${zodiac.size}px`,
            animation: `float ${zodiac.duration} ease-in-out infinite`,
            animationDelay: zodiac.delay
          }}
        >
          {zodiac.sign}
        </div>
      ))}
      
      {/* Decorative Circles (Astrolabe effect) */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] border border-gold/10 rounded-full animate-[spin_100s_linear_infinite]" />
      <div className="absolute -bottom-[10%] -left-[15%] w-[800px] h-[800px] border border-gold/5 rounded-full animate-[spin_150s_linear_infinite_reverse]" />
      <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] border border-gold/5 rounded-full animate-[spin_80s_linear_infinite]" />
    </div>
  );
};

export default AstroElements;
