"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle, Newspaper, Globe, Award } from "lucide-react";

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-white py-8 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4">
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
