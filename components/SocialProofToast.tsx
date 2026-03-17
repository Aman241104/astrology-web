"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Phone } from "lucide-react";

const locations = ["Mumbai", "Delhi", "Ahmedabad", "Surat", "London", "Dubai", "New York", "Bangalore", "Pune", "Jaipur"];
const names = ["Rahul", "Priya", "Amit", "Sneh", "Ibrahim", "Ankit", "Deepa", "Vikram", "Meera", "Karan"];

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", type: "call" });
  const { locale } = useLanguage();

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
    <div className="fixed bottom-24 left-4 z-[60] animate-bounce-in">
      <div className="bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-4 border border-gold/20 flex items-center gap-4 max-w-[280px]">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${data.type === 'call' ? 'bg-crimson' : 'bg-[#25D366]'}`}>
          {data.type === 'call' ? <Phone size={18} fill="white" className="text-white" /> : <MessageCircle size={18} fill="white" className="text-white" />}
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Recent Activity</p>
          <p className="text-sm font-bold text-gray-800 leading-tight">
            <span className="text-crimson">{data.name}</span> from {data.city} just {data.type === 'call' ? 'called' : 'messaged'} Guruji.
          </p>
        </div>
      </div>
    </div>
  );
}
