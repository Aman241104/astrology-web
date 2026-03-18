import React from 'react';

const DecorativeCorner = ({ className }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 40 40" 
      className={`w-10 h-10 text-gold/30 ${className}`}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="M4,4 L36,4" strokeLinecap="round" />
      <path d="M4,4 L4,36" strokeLinecap="round" />
      <circle cx="4" cy="4" r="2" fill="currentColor" />
      <path d="M12,12 L12,4 M12,12 L4,12" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
};

export default DecorativeCorner;
