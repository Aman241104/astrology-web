import React from 'react';

const MandalaSVG = ({ className }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5"
    >
      <circle cx="100" cy="100" r="90" opacity="0.1" />
      <circle cx="100" cy="100" r="80" opacity="0.2" />
      <circle cx="100" cy="100" r="70" opacity="0.3" />
      <g opacity="0.2">
        {[...Array(12)].map((_, i) => (
          <line 
            key={i}
            x1="100" y1="100" 
            x2={100 + 90 * Math.cos((i * 30 * Math.PI) / 180)} 
            y2={100 + 90 * Math.sin((i * 30 * Math.PI) / 180)} 
          />
        ))}
      </g>
      <g opacity="0.15">
        {[...Array(24)].map((_, i) => (
          <circle 
            key={i}
            cx={100 + 60 * Math.cos((i * 15 * Math.PI) / 180)} 
            cy={100 + 60 * Math.sin((i * 15 * Math.PI) / 180)} 
            r="10" 
          />
        ))}
      </g>
      <path 
        d="M100,20 Q120,60 100,100 Q80,60 100,20" 
        className="animate-pulse"
        transform="rotate(0 100 100)"
      />
      {[...Array(8)].map((_, i) => (
        <path 
          key={i}
          d="M100,40 Q115,70 100,100 Q85,70 100,40" 
          transform={`rotate(${i * 45} 100 100)`}
          opacity="0.3"
        />
      ))}
    </svg>
  );
};

export default MandalaSVG;
