"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, Newspaper, Globe, Award } from "lucide-react";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-8 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Media Logos Placeholder */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{t.trustBar.asSeenOn}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="text-2xl font-black italic">ZEE NEWS</div>
             <div className="text-2xl font-black">AAJ TAK</div>
             <div className="text-2xl font-black italic">NDTV</div>
             <div className="text-2xl font-black">TIMES NOW</div>
             <div className="text-2xl font-black italic">ABP NEWS</div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-saffron shrink-0" size={24} />
            <span className="text-sm font-black text-gray-800 uppercase">{t.trustBar.privacyText}</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="text-saffron shrink-0" size={24} />
            <span className="text-sm font-black text-gray-800 uppercase">{t.trustBar.globalText}</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="text-saffron shrink-0" size={24} />
            <span className="text-sm font-black text-gray-800 uppercase">{t.trustBar.awardText}</span>
          </div>
          <div className="flex items-center gap-3">
            <Newspaper className="text-saffron shrink-0" size={24} />
            <span className="text-sm font-black text-gray-800 uppercase">{t.trustBar.expertText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
