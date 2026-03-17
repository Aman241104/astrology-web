"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MessageCircle, Phone } from "lucide-react";

export default function StickyCTAs() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 lg:hidden flex border-t-2 border-gold/10">
      <a 
        href="https://wa.me/919929563493"
        className="flex-1 bg-[#25D366] text-white py-4 flex items-center justify-center gap-2 font-black text-lg shadow-inner active:bg-[#20bd5a]"
      >
        <MessageCircle fill="white" />
        {t.hero.whatsapp.split(" ")[0]}
      </a>
      <a 
        href="tel:+919929563493"
        className="flex-1 bg-crimson text-white py-4 flex items-center justify-center gap-2 font-black text-lg shadow-inner active:bg-crimson/90"
      >
        <Phone fill="white" />
        {t.hero.call}
      </a>
    </div>
  );
}
