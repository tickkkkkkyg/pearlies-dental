import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pearlies Dental Clinic",
    default: "Pearlies Dental Clinic — Your Smile, Our Passion | Kalanki, Kathmandu",
  },
  description:
    "Experience exceptional dental care with modern technology, compassionate professionals, and personalized treatment. General, cosmetic, whitening, implants, orthodontics, pediatric & emergency dentistry in Kalanki, Kathmandu. Book your appointment today.",
  keywords: [
    "dental clinic Kathmandu",
    "dentist Kalanki",
    "teeth whitening Nepal",
    "dental implants Kathmandu",
    "braces Kathmandu",
    "pediatric dentist",
    "cosmetic dentistry",
  ],
  authors: [{ name: "Pearlies Dental Clinic" }],
  creator: "Pearlies Dental Clinic",
  openGraph: {
    title: "Pearlies Dental Clinic — Your Smile, Our Passion",
    description:
      "Premium dental care in Kalanki, Kathmandu. Modern technology, compassionate professionals, personalized treatment designed around your smile.",
    type: "website",
    locale: "en_NP",
    siteName: "Pearlies Dental Clinic",
    images: [
      {
        url: "https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Modern dental clinic — Pearlies Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pearlies Dental Clinic — Your Smile, Our Passion",
    description:
      "Premium dental care in Kalanki, Kathmandu. Book your appointment today.",
    images: ["https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://pearliesdental.com.np"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
