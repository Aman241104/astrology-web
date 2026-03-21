import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vishvanath Maharaj - Relationship Problem Solution Expert",
  description: "Get instant solutions for Love Marriage, Husband-Wife Issues, Get Ex Back, and Relationship Problems from Vishvanath Maharaj. Trusted by 50,000+ clients worldwide.",
};

import { LanguageProvider } from "@/context/LanguageContext";
import SpiritualElements from "@/components/SpiritualElements";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vishvanath Maharaj",
    "image": "/images/new/expert-maharaj.png",
    "telephone": "+91-9929563493",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5240"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
