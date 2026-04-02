import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SpiritualElements from "@/components/SpiritualElements";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astro Pawan Swami | Love & Relationship Expert | +91-9875958008",
  description: "Astro Pawan Swami: Specialist in solving all love and relationship problems within 24 hours. Get your ex-love back, stop divorce, and resolve family issues with traditional Vedic rituals. Trusted by 50,000+ clients worldwide.",
  keywords: "love problem specialist, get love back, relationship expert, Pawan Swami, astro, Vedic rituals, marriage problem solution, breakup solution",
  openGraph: {
    title: "Astro Pawan Swami | Love & Relationship Expert",
    description: "Get permanent solutions for love and relationship problems from Astro Pawan Swami. Trusted by 50,000+ clients worldwide.",
    images: ["/images/new/expert-maharaj.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Astro Pawan Swami",
    "image": "/images/new/expert-maharaj.png",
    "@id": "https://www.astropawanswami.com",
    "url": "https://www.astropawanswami.com",
    "telephone": "+91-9875958008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Market",
      "addressLocality": "Jaipur",
      "postalCode": "302001",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.9124,
      "longitude": 75.7873
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://wa.me/919875958008"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Anti-Copy Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('contextmenu', event => event.preventDefault());
              document.onkeydown = function(e) {
                if(e.keyCode == 123) return false;
                if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
                if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
                if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
                if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <SpiritualElements />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
