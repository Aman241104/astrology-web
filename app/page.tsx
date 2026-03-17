"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import AboutMaharaj from "@/components/AboutMaharaj";
import ComparisonTable from "@/components/ComparisonTable";
import LeadForm from "@/components/LeadForm";
import RitualGallery from "@/components/RitualGallery";
import Benefits from "@/components/Benefits";
import WorkingProcess from "@/components/WorkingProcess";
import FAQ from "@/components/FAQ";
import StickyCTAs from "@/components/StickyCTAs";
import SocialProofToast from "@/components/SocialProofToast";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useLanguage } from "@/context/LanguageContext";
import { QrCode } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Live Results Ticker */}
      <div className="bg-crimson text-white py-2 text-center overflow-hidden h-10 flex items-center border-b border-gold/20">
         <div className="whitespace-nowrap animate-marquee font-bold text-xs uppercase tracking-[0.2em]">
           🔥 RECENT SUCCESS: Rahul from Delhi just got his ex-back in 24 hours! | 🙏 Pooja from Mumbai stopped her divorce! | ✨ Ankit from UK doubled his business revenue!
         </div>
      </div>

      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AboutMaharaj />
      <ComparisonTable />
      <LeadForm />
      <RitualGallery />
      <Benefits />
      <WorkingProcess />
      
      {/* Testimonials */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-crimson mb-12 uppercase tracking-tight">
            {t.testimonials.title.split(" SUCCESS")[0]} <span className="text-saffron"> {t.testimonials.title.split("OUR ")[1]}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: t.testimonials.t1Text, name: t.testimonials.t1Name },
              { text: t.testimonials.t2Text, name: t.testimonials.t2Name },
              { text: t.testimonials.t3Text, name: t.testimonials.t3Name }
            ].map((test, i) => (
              <div key={i} className="bg-cream/40 p-8 rounded-3xl shadow-sm border border-gold/10 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                   {[...Array(5)].map((_, j) => <span key={j} className="text-gold">★</span>)}
                </div>
                <p className="text-gray-700 italic mb-6 font-medium">"{test.text}"</p>
                <div className="font-black text-crimson italic tracking-widest text-xs">{test.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      {/* Global & Regional Presence Banner */}
      <section className="bg-gold/10 py-16 px-4 border-y border-gold/20">
         <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-black text-gray-800 uppercase mb-8 tracking-tighter">Serving Major Cities Across India & Globally</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold text-gray-500 text-[10px] md:text-sm max-w-5xl mx-auto uppercase tracking-widest leading-loose">
               <span>Mumbai</span> <span>•</span> <span>Delhi</span> <span>•</span> <span>Bangalore</span> <span>•</span> <span>Hyderabad</span> <span>•</span> <span>Ahmedabad</span> <span>•</span> 
               <span>Chennai</span> <span>•</span> <span>Kolkata</span> <span>•</span> <span>Surat</span> <span>•</span> <span>Pune</span> <span>•</span> <span>Jaipur</span> <span>•</span> 
               <span>Lucknow</span> <span>•</span> <span>Kanpur</span> <span>•</span> <span>Nagpur</span> <span>•</span> <span>Indore</span> <span>•</span> <span>Thane</span> <span>•</span> 
               <span>Bhopal</span> <span>•</span> <span>Patna</span> <span>•</span> <span>Vadodara</span> <span>•</span> <span>UAE</span> <span>•</span> <span>USA</span> <span>•</span> 
               <span>UK</span> <span>•</span> <span>Canada</span> <span>•</span> <span>Australia</span>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-crimson text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">{t.footer.ctaTitle}</h2>
          <p className="text-xl md:text-2xl mb-12 font-bold text-saffron drop-shadow-sm uppercase">{t.footer.ctaSub}</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
            <a 
              href="tel:+919929563493"
              className="w-full sm:w-auto bg-white text-crimson px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-2xl shadow-black/20"
            >
              {t.footer.callBtn}
            </a>

            {/* QR Code for Desktop to Mobile handoff */}
            <div className="hidden lg:flex flex-col items-center gap-2">
               <div className="bg-white p-2 rounded-xl shadow-lg">
                  <QrCode size={80} className="text-gray-800" />
               </div>
               <span className="text-[10px] font-black uppercase opacity-60">Scan to WhatsApp</span>
            </div>
          </div>
          
          <div className="text-xs font-medium opacity-50 uppercase tracking-[0.2em]">{t.footer.copyright}</div>
          <p className="mt-8 text-[10px] opacity-30 max-w-2xl mx-auto leading-relaxed italic">
            {t.footer.disclaimer}
          </p>
        </div>
      </section>

      <StickyCTAs />
      <SocialProofToast />
      <WhatsAppWidget />
    </main>
  );
}
