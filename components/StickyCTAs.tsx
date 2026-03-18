"use client";

import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function StickyCTAs() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden flex border-t-2 border-gold/20 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
      <a
        href="https://wa.me/919929563493"
        className="flex-1 bg-[#25D366] text-white py-3 flex flex-col items-center justify-center gap-0.5 font-black shadow-inner active:scale-95 transition-transform border-r border-white/10"
      >
        <WhatsAppIcon size={20} />
        <span className="text-[10px] uppercase tracking-tighter leading-none">WhatsApp</span>
      </a>
      <a 
        href="tel:+919929563493"
        className="flex-1 bg-crimson text-white py-3 flex flex-col items-center justify-center gap-0.5 font-black shadow-inner active:scale-95 transition-transform"
      >
        <Phone size={20} fill="white" />
        <span className="text-[10px] uppercase tracking-tighter leading-none">Call Now</span>
      </a>
    </div>
  );
}
