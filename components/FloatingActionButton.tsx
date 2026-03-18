"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingActionButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-50 animate-bounce-in hidden lg:block">
      <a
        href="https://wa.me/919929563493"
        className="bg-saffron text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-110 transition-transform group"
      >        <div className="bg-white/20 p-2 rounded-full">
          <MessageCircle fill="white" size={24} />
        </div>
        <span className="font-black text-sm pr-4 uppercase tracking-tighter">Consult Maharaj Now</span>
      </a>
    </div>
  );
}
