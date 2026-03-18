"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Phone } from "lucide-react";

export default function StickyCTAs() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden flex border-t-2 border-gold/10">
      <a
        href="https://wa.me/919929563493"
        className="flex-1 bg-saffron text-white py-4 flex items-center justify-center gap-2 font-black text-lg shadow-inner active:scale-95 transition-transform"
      >        <MessageCircle fill="white" />
        {t.hero.whatsapp}
      </a>
      <a 
        href="tel:+919929563493"
        className="flex-1 bg-crimson text-white py-4 flex items-center justify-center gap-2 font-black text-lg shadow-inner active:scale-95 transition-transform"
      >
        <Phone fill="white" />
        {t.hero.call}
      </a>
    </div>
  );
}
