"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, XCircle, Info } from "lucide-react";

export default function ComparisonTable() {
  const { t } = useLanguage();

  const rows = [
    { label: t.comparison.row1[0], guruji: t.comparison.row1[1], others: t.comparison.row1[2] },
    { label: t.comparison.row2[0], guruji: t.comparison.row2[1], others: t.comparison.row2[2] },
    { label: t.comparison.row3[0], guruji: t.comparison.row3[1], others: t.comparison.row3[2] },
    { label: t.comparison.row4[0], guruji: t.comparison.row4[1], others: t.comparison.row4[2] },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] border border-gold/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-crimson mb-2 uppercase tracking-tighter leading-tight">
            {t.comparison.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="overflow-x-auto pb-8 scrollbar-hide">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-gold/10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(212,175,55,0.1)] bg-white">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-cream/50">
                    <th className="py-6 px-6 text-left border-b-2 border-gold/10 text-gray-400 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                      Spiritual Comparison
                    </th>
                    <th className="py-6 px-6 text-center border-b-2 border-saffron bg-saffron/5">
                       <div className="text-saffron font-black text-sm md:text-lg uppercase tracking-tight italic">Vishvanath Maharaj</div>
                    </th>
                    <th className="py-6 px-6 text-center border-b-2 border-gray-200">
                       <div className="text-gray-400 font-black text-sm md:text-lg uppercase tracking-tight">Other Astrologers</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gold/10">
                  {rows.map((row, i) => (
                    <tr key={i} className="group hover:bg-cream/20 transition-all duration-300">
                      <td className="py-6 px-6 font-bold text-gray-700 text-xs md:text-base uppercase tracking-wide group-hover:text-crimson transition-colors">
                        {row.label}
                      </td>
                      <td className="py-6 px-6 text-center bg-saffron/[0.02] group-hover:bg-saffron/[0.05] transition-colors">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-saffron flex items-center justify-center shadow-[0_5px_15px_rgba(255,153,51,0.3)]">
                            <CheckCircle2 className="text-white" size={18} />
                          </div>
                          <span className="font-black text-gray-900 text-[10px] md:text-sm uppercase tracking-tighter">{row.guruji}</span>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="flex flex-col items-center gap-2 opacity-30 group-hover:opacity-50 transition-opacity">
                          <XCircle className="text-red-400" size={20} />
                          <span className="font-bold text-gray-500 text-[10px] md:text-sm uppercase tracking-tighter">{row.others}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-white to-cream p-6 md:p-8 rounded-[3rem] border border-gold/20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 group">
           <div className="flex items-center gap-6">
             <div className="w-16 h-16 rounded-2xl bg-saffron/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
               <Info className="text-saffron" size={32} />
             </div>
             <div>
               <p className="text-lg md:text-xl font-black text-gray-800 uppercase tracking-tight leading-tight mb-1">
                 {t.upiTrust.title}
               </p>
               <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">International Payment Methods Accepted</p>
             </div>
           </div>
           
           <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 bg-white/50 p-4 rounded-2xl border border-white backdrop-blur-sm shadow-inner">
              {[
                { name: "GPay", color: "text-blue-600" },
                { name: "PhonePe", color: "text-purple-600" },
                { name: "Paytm", color: "text-blue-800" },
                { name: "Bank Transfer", color: "text-green-600" }
              ].map((p, idx) => (
                <div key={idx} className={`px-5 py-2.5 rounded-xl shadow-sm font-black ${p.color} text-[10px] md:text-sm italic bg-white border border-gray-50 hover:scale-105 transition-transform cursor-default`}>
                  {p.name}
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
