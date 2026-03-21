"use client";

import Navbar from "@/components/Navbar";
import VishvaBanner from "@/components/VishvaBanner";
import Hero from "@/components/Hero";
import CategoryBar from "@/components/CategoryBar";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import AboutMaharaj from "@/components/AboutMaharaj";
import ComparisonTable from "@/components/ComparisonTable";
import WhyChooseUs from "@/components/WhyChooseUs";
import LeadForm from "@/components/LeadForm";
import RitualGallery from "@/components/RitualGallery";
import Benefits from "@/components/Benefits";
import WorkingProcess from "@/components/WorkingProcess";
import FAQ from "@/components/FAQ";
import StickyCTAs from "@/components/StickyCTAs";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useLanguage } from "@/context/LanguageContext";
import { QrCode, Star } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative">
        <Hero />
        <ServicesGrid />
        <VishvaBanner />
        <CategoryBar />
        <TrustBar />
        <AboutMaharaj />
        <ComparisonTable />
        <WhyChooseUs />
        <LeadForm />
        <RitualGallery />
        <Benefits />
        <WorkingProcess />
        
        {/* Testimonials */}
        <section className="py-24 md:py-32 px-4 bg-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 md:mb-24">
              <div className="inline-block bg-crimson/10 text-crimson px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4 border border-crimson/20">
                Testimonials
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-crimson mb-6 uppercase tracking-tighter drop-shadow-sm">
                {t.testimonials.title}
              </h2>
              <div className="w-24 h-1 bg-gold/30 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { text: t.testimonials.t1Text, name: t.testimonials.t1Name },
                { text: t.testimonials.t2Text, name: t.testimonials.t2Name },
                { text: t.testimonials.t3Text, name: t.testimonials.t3Name }
              ].map((test, i) => (
                <div key={i} className="group bg-cream/20 p-8 md:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(212,175,55,0.05)] border border-gold/10 hover:shadow-[0_40px_100px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-3 hover:bg-white">
                  <div className="flex gap-1.5 mb-6">
                     {[...Array(5)].map((_, j) => <Star key={j} className="text-gold fill-gold" size={18} />)}
                  </div>
                  <p className="text-gray-700 italic mb-8 font-bold text-lg md:text-xl leading-relaxed text-shadow-sm">&quot;{test.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center font-black text-crimson italic shadow-inner">
                      {test.name.charAt(0)}
                    </div>
                    <div className="font-black text-crimson italic tracking-widest text-xs md:text-sm uppercase">{test.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      <FAQ />

      {/* Global & Regional Presence Banner */}
      <section className="bg-gold/5 py-16 md:py-24 px-4 relative overflow-hidden">
         {/* Decorative Border with Pattern */}
         <div className="absolute top-0 left-0 w-full h-2 bg-[radial-gradient(circle,rgba(212,175,55,0.4)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
         <div className="absolute bottom-0 left-0 w-full h-2 bg-[radial-gradient(circle,rgba(212,175,55,0.4)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
         
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>

         <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-block bg-white px-6 py-2 rounded-full border border-gold/30 shadow-sm mb-6">
              <h3 className="text-xs md:text-sm font-black text-crimson uppercase tracking-[0.4em]">Serving Major Cities Across India & Globally</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 font-black text-gray-400 text-[10px] md:text-sm max-w-6xl mx-auto uppercase tracking-[0.2em] leading-relaxed">
               <span className="hover:text-gold transition-colors cursor-default">Mumbai</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Delhi</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Bangalore</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Hyderabad</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Ahmedabad</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Chennai</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Kolkata</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Surat</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Pune</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Jaipur</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Lucknow</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Kanpur</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Nagpur</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Indore</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Thane</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Bhopal</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Patna</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default">Vadodara</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default text-crimson">UAE</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default text-crimson">USA</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default text-crimson">UK</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default text-crimson">Canada</span>
               <span className="text-gold/30">•</span>
               <span className="hover:text-gold transition-colors cursor-default text-crimson">Australia</span>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-crimson text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center mix-blend-overlay opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-crimson via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-6xl font-black mb-2 uppercase tracking-tighter leading-[0.85]">{t.footer.ctaTitle}</h2>
          <p className="text-lg md:text-2xl mb-4 font-black text-saffron drop-shadow-lg uppercase italic underline decoration-gold/30 underline-offset-4">
            {t.footer.ctaSub}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
            <a 
              href="tel:+919929563493"
              className="w-full sm:w-auto bg-white text-crimson px-8 py-4 rounded-[20px] font-black text-xl md:text-3xl hover:scale-105 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.4)] active:scale-95 border-b-4 border-gray-200"
            >
              {t.footer.callBtn.split(": ")[1]}
            </a>

            {/* QR Code for Desktop to Mobile handoff */}
            <div className="hidden lg:flex flex-col items-center gap-2">
               <div className="bg-white p-2 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform">
                  <QrCode size={80} className="text-gray-900" />
               </div>
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-saffron">Scan to WhatsApp</span>
            </div>
          </div>

          <div className="bg-black/20 p-4 rounded-[30px] border border-white/10 backdrop-blur-sm mb-4">
             <p className="text-sm md:text-lg font-bold uppercase tracking-wide leading-relaxed">
               Don&apos;t wait for a miracle. <span className="text-saffron">MAKE IT HAPPEN.</span> Maharaj has helped thousands of people just like you to get their love back, stop divorce, and solve relationship issues. <span className="underline decoration-saffron">Your solution is just one call away.</span>
             </p>
          </div>
          
          <div className="text-[10px] font-medium opacity-50 uppercase tracking-[0.2em]">{t.footer.copyright}</div>
          <p className="mt-4 text-[9px] opacity-30 max-w-2xl mx-auto leading-relaxed italic">
            {t.footer.disclaimer}
          </p>
        </div>
      </section>

      <StickyCTAs />
      <WhatsAppWidget />
      </div>
    </main>
  );
}
