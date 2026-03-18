"use client";

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const locations = ["Mumbai", "Delhi", "Ahmedabad", "Surat", "London", "Dubai", "New York", "Bangalore", "Pune", "Jaipur"];
const names = ["Rahul", "Priya", "Amit", "Sneh", "Ibrahim", "Ankit", "Deepa", "Vikram", "Meera", "Karan"];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", type: "call" });

  useEffect(() => {
    const showToast = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = locations[Math.floor(Math.random() * locations.length)];
      const type = Math.random() > 0.5 ? "call" : "whatsapp";
      
      setData({ name, city, type });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      showToast();
    }, 12000);

    // Show first one after 3 seconds
    const timeout = setTimeout(showToast, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-24 left-4 right-4 md:top-auto md:bottom-24 md:left-4 md:right-auto z-[60] animate-bounce-in max-w-[280px] md:max-w-sm mx-auto md:mx-0 group">
      <div className="bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-3 md:p-4 border border-gold/20 flex items-center gap-3 md:gap-4 relative overflow-hidden">
        <button 
          onClick={() => setVisible(false)}
          className="absolute top-1 right-1 p-1 text-gray-400 hover:text-crimson transition-colors rounded-full hover:bg-gray-100"
        >
          <X size={14} />
        </button>
        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${data.type === 'call' ? 'bg-crimson' : 'bg-saffron'}`}>
          {data.type === 'call' ? <Phone size={14} fill="white" className="text-white md:w-[18px] md:h-[18px]" /> : <WhatsAppIcon size={14} className="text-white md:w-[18px] md:h-[18px]" />}
        </div>
        <div>
          <p className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Recent Activity</p>
          <p className="text-xs md:text-sm font-bold text-gray-800 leading-tight">
            <span className="text-crimson">{data.name}</span> from {data.city} just {data.type === 'call' ? 'called' : 'messaged'} Guruji.
          </p>
        </div>
      </div>
    </div>
  );
}
