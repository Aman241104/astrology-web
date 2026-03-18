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
    <section className="py-6 px-4 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-3">
          <h2 className="text-2xl md:text-4xl font-black text-crimson mb-1 uppercase tracking-tighter">
            {t.comparison.title}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <table className="w-full border-collapse min-w-[600px] md:min-w-0">
            <thead>
              <tr className="bg-cream">
                <th className="p-2 md:p-3 text-left border-b-2 border-gold/20 text-gray-400 font-black uppercase tracking-widest text-[9px] md:text-[10px] whitespace-nowrap">Features</th>
                <th className="p-2 md:p-3 text-center border-b-2 border-saffron bg-saffron/5">
                   <div className="text-saffron font-black text-xs md:text-sm uppercase tracking-tight italic whitespace-nowrap">Guruji</div>
                </th>
                <th className="p-2 md:p-3 text-center border-b-2 border-gray-200">
                   <div className="text-gray-400 font-black text-xs md:text-sm uppercase tracking-tight whitespace-nowrap">Others</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-cream/30 transition-colors">
                  <td className="p-2 md:p-3 border-b border-gold/10 font-bold text-gray-700 text-[10px] md:text-sm uppercase tracking-wide whitespace-nowrap">
                    {row.label}
                  </td>
                  <td className="p-2 md:p-3 border-b border-gold/10 text-center bg-saffron/5">
                    <div className="flex flex-col items-center gap-1">
                      <CheckCircle2 className="text-saffron" size={14} />
                      <span className="font-black text-gray-900 text-[9px] md:text-xs uppercase">{row.guruji}</span>
                    </div>
                  </td>
                  <td className="p-2 md:p-3 border-b border-gold/10 text-center">
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <XCircle className="text-red-400" size={14} />
                      <span className="font-bold text-gray-500 text-[9px] md:text-xs uppercase">{row.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2 bg-saffron/10 p-4 rounded-[30px] border border-saffron/20 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex items-center gap-4">
             <Info className="text-saffron shrink-0" />
             <p className="text-sm font-black text-gray-700 uppercase tracking-tight">
               {t.upiTrust.title}
             </p>
           </div>
           
           <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm font-black text-blue-600 text-xs italic">GPay</div>
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm font-black text-purple-600 text-xs italic">PhonePe</div>
              <div className="bg-white px-4 py-2 rounded-xl shadow-sm font-black text-blue-800 text-xs italic">Paytm</div>
           </div>
        </div>
      </div>
    </section>
  );
}
