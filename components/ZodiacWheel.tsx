import React from 'react';

const ZodiacWheel = ({ className }: { className?: string }) => {
  const signs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  
  return (
    <div className={className}>
      <svg viewBox="0 0 400 400" className="w-full h-full animate-[spin_120s_linear_infinite] opacity-20">
        <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
        
        {/* Zodiac Segments */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 200 200)`}>
            <line x1="200" y1="10" x2="200" y2="50" stroke="currentColor" strokeWidth="1" />
            <text 
              x="200" y="35" 
              fontSize="20" 
              fill="currentColor" 
              textAnchor="middle" 
              transform={`rotate(15 200 35)`}
              className="font-serif select-none"
            >
              {signs[i]}
            </text>
          </g>
        ))}
        
        {/* Constellation Lines (Simplified) */}
        <g opacity="0.4">
          <path d="M200,50 L250,150 L300,100 L350,200" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M100,100 L150,200 L50,250 L100,300" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M300,300 L250,350 L200,300 L150,350" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </g>
      </svg>
      
      {/* Central Star */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_rgba(212,175,55,1)] animate-pulse" />
    </div>
  );
};

export default ZodiacWheel;
