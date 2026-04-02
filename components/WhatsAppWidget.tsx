"use client";

import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show prompt after 8 seconds
    const timeout = setTimeout(() => setShowPrompt(true), 8000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed bottom-6 md:bottom-12 right-6 z-[70] hidden lg:flex flex-col items-end gap-4">
      {/* Speech Bubble Prompt */}
      {showPrompt && !isOpen && (
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gold/20 max-w-[200px] animate-bounce-in relative">
          <button 
            onClick={() => setShowPrompt(false)}
            className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 text-gray-400 hover:text-gray-600"
          >
            <X size={12} />
          </button>
          <p className="text-xs font-bold text-gray-700">🙏 Radhe Radhe! How can Guruji help you today?</p>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white rounded-[32px] shadow-3xl border border-gold/10 overflow-hidden animate-bounce-in">
          <div className="bg-crimson p-6 text-white flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 relative">
              <Image
                src="/images/new/expert-maharaj.png"
                alt="Astro Pawan Swami"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight">Astro Pawan Swami</h4>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-saffron rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold opacity-80 uppercase">Online Now</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto opacity-60 hover:opacity-100">
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 bg-gray-50/50">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">
              <p className="text-xs font-medium text-gray-800">Pranam! I am here to help you solve your love, marriage, or relationship problems. Please message me your problem.</p>
            </div>
            <span className="text-[8px] text-gray-400 font-bold block mt-1 uppercase text-right">10:42 AM</span>
          </div>

          <div className="p-4 bg-white flex items-center gap-2">
            <a 
              href="https://wa.me/919875958008"
              className="flex-1 bg-saffron text-white py-3 rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:bg-saffron/90 transition-all active:scale-95"
            >
              START CHAT ON WHATSAPP
              <Send size={14} fill="white" />
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-saffron rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all group relative"
      >
        <div className="absolute inset-0 rounded-full bg-saffron animate-ping opacity-20"></div>
        <WhatsAppIcon size={32} className="relative z-10" />
      </button>
    </div>
  );
}
