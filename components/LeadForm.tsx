"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Send, Loader2 } from "lucide-react";

export default function LeadForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Send to Google Sheets (Apps Script URL)
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwnGNsJpkNEf18nx1ZOcaafhZeDX0_C-qh-8vwPJ2Mm1iZGUYCQw3KZRZ9nxOidx9_x/exec"; 
      
      const submissionData = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        problem: formData.problem
      });

      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: submissionData.toString(),
      }).catch(err => console.error("Sheets Error:", err));

      // 2. Prepare WhatsApp message
      const whatsappNumber = "919875958008";
      const message = `*New Lead from Website*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Problem:* ${formData.problem}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // 3. Redirect to WhatsApp (Automatic)
      window.open(whatsappUrl, "_blank");

      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or call Guruji directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-saffron/10 p-12 rounded-3xl border border-saffron/20 text-center">
        <h3 className="text-2xl font-black text-crimson mb-2">{t.leadForm.successTitle}</h3>
        <p className="text-saffron font-bold uppercase tracking-widest text-xs">{t.leadForm.successSub}</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-crimson font-bold underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-4 bg-gradient-to-tr from-saffron/10 to-gold/5 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-crimson/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        <div className="flex-1 text-center lg:text-left">
           <div className="inline-block bg-crimson/10 text-crimson px-6 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-6 border border-crimson/20">
              Free Consultation
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-crimson mb-4 uppercase tracking-tighter leading-none">{t.leadForm.urgentHelp}</h2>
           <p className="text-lg md:text-2xl text-gray-700 font-bold mb-8 max-w-xl mx-auto lg:mx-0">{t.leadForm.sub}</p>
           
           <ul className="space-y-4 font-black text-gray-600 uppercase tracking-widest text-xs md:text-sm max-w-md mx-auto lg:mx-0">
              <li className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl border border-gold/10 shadow-sm">
                <span className="text-saffron text-xl">★</span> {t.leadForm.hook1}
              </li>
              <li className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl border border-gold/10 shadow-sm">
                <span className="text-saffron text-xl">★</span> {t.leadForm.hook2}
              </li>
              <li className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl border border-gold/10 shadow-sm">
                <span className="text-saffron text-xl">★</span> {t.leadForm.hook3}
              </li>
           </ul>
        </div>

        <div className="flex-1 w-full bg-white p-8 md:p-12 rounded-[40px] border-8 border-gold/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{t.leadForm.name}</label>
              <input 
                required 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text" 
                className="w-full bg-cream/30 border-2 border-gold/10 rounded-xl px-6 py-4 font-bold text-gray-800 focus:border-saffron outline-none transition-all text-lg" 
                placeholder="Enter your full name" 
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{t.leadForm.phone}</label>
                <input 
                  required 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel" 
                  className="w-full bg-cream/30 border-2 border-gold/10 rounded-xl px-6 py-4 font-bold text-gray-800 focus:border-saffron outline-none transition-all text-lg" 
                  placeholder="Your phone number" 
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2">{t.leadForm.problem}</label>
              <textarea 
                required 
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                className="w-full bg-cream/30 border-2 border-gold/10 rounded-xl px-6 py-4 font-bold text-gray-800 focus:border-saffron outline-none transition-all min-h-[120px] text-lg" 
                placeholder="How can Guruji help you?"
              ></textarea>
            </div>
            <button 
              disabled={loading}
              type="submit" 
              className="w-full bg-crimson text-white py-5 rounded-2xl font-black text-xl flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 hover:bg-crimson/90 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                <>
                  <Send fill="white" size={20} className="sm:w-6 sm:h-6" />
                  <span className="text-center sm:text-left">{t.leadForm.submit}</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
