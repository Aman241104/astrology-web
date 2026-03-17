"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

export default function AudioGreeting() {
  const [isPlaying, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsOpen(!isPlaying);
  };

  return (
    <div className="bg-gradient-to-r from-saffron to-crimson p-6 rounded-[32px] text-white flex items-center gap-6 shadow-2xl animate-pulse-slow">
      <div 
        onClick={togglePlay}
        className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform active:scale-95 border-2 border-white/30"
      >
        {isPlaying ? <Pause fill="white" /> : <Play fill="white" className="ml-1" />}
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Volume2 size={14} className="animate-bounce" />
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Personal Message</p>
        </div>
        <h4 className="font-black text-lg leading-tight uppercase italic">Listen to Guruji's Voice</h4>
        <p className="text-[10px] font-bold opacity-70 uppercase tracking-tighter">Blessings & Guidance for Your Problem</p>
      </div>

      <audio 
        ref={audioRef}
        onEnded={() => setIsOpen(false)}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder
      />
    </div>
  );
}
