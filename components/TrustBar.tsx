"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CreditCard, ShieldCheck, Headset, ThumbsUp, Lock } from "lucide-react";

export default function TrustBar() {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: (
        <div className="relative">
          <CreditCard className="text-black" size={32} />
          <div className="absolute -bottom-1 -right-1 bg-[#FFB800] rounded-full p-0.5">
            <Lock className="text-black" size={12} fill="currentColor" />
          </div>
        </div>
      ),
      title: t.trustBar.secureTitle,
      sub: t.trustBar.secureSub,
    },
    {
      icon: <ShieldCheck className="text-black" size={32} />,
      title: t.trustBar.qualityTitle,
      sub: t.trustBar.qualitySub,
    },
    {
      icon: <Headset className="text-black" size={32} />,
      title: t.trustBar.supportTitle,
      sub: t.trustBar.supportSub,
    },
    {
      icon: <ThumbsUp className="text-black" size={32} />,
      title: t.trustBar.trustTitle,
      sub: t.trustBar.trustSub,
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-6 group">
              {/* Vertical Dashed Separator (Desktop) */}
              {index < trustItems.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-24 border-r-2 border-dashed border-gold/20"></div>
              )}
              
              {/* Icon Container */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFB800] to-[#F5A623] rounded-[2rem] flex items-center justify-center mb-6 shadow-[0_15px_35px_rgba(255,184,0,0.2)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <div className="scale-110">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-crimson font-black text-lg md:text-xl uppercase tracking-tighter mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 font-bold text-xs md:text-sm leading-relaxed max-w-[240px]">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
