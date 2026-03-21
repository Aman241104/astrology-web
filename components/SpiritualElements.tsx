"use client";

import React, { useEffect, useState } from 'react';

const SpiritualElements = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [stars] = useState(() => 
    Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`
    }))
  );

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.15]">
      {hasMounted && stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size * 0.8}px`,
            height: `${star.size * 0.8}px`,
            animationDelay: star.delay,
            animationDuration: `${parseFloat(star.duration) * 2}s`
          }}
        />
      ))}
      
      {/* Decorative Circles - Made more complex and subtle */}
      <div className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] border border-gold/10 rounded-full animate-[spin_120s_linear_infinite]" />
      <div className="absolute -top-[10%] -right-[5%] w-[780px] h-[780px] border border-gold/5 rounded-full animate-[spin_100s_linear_infinite_reverse]" />
      
      <div className="absolute -bottom-[5%] -left-[10%] w-[1000px] h-[1000px] border border-gold/10 rounded-full animate-[spin_180s_linear_infinite_reverse]" />
      
      <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] border border-gold/5 rounded-full animate-[spin_90s_linear_infinite]" />
      <div className="absolute top-[20%] left-[30%] w-[480px] h-[480px] border border-gold/10 border-dashed rounded-full animate-[spin_110s_linear_infinite_reverse]" />
    </div>
  );
};

export default SpiritualElements;
