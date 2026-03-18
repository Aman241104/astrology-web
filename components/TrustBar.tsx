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
    <div className="bg-white pt-1 pb-0 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {trustItems.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center px-4 group">
              {/* Vertical Dashed Separator (Desktop) */}
              {index < trustItems.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 border-r-2 border-dashed border-gray-300"></div>
              )}
              
              {/* Icon Container */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#FFB800] to-[#F5A623] rounded-full flex items-center justify-center mb-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="scale-50 md:scale-75">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-crimson font-black text-sm md:text-base uppercase tracking-tight mb-0.5">
                {item.title}
              </h3>              <p className="text-gray-900 font-bold text-[10px] md:text-xs leading-tight max-w-[200px]">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
