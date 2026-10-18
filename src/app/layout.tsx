import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pearlies Dental Clinic",
    default: "Pearlies Dental Clinic — Kalanki, Kathmandu",
  },
  description:
    "Premium dental care in Kalanki, Kathmandu. General dentistry, whitening, braces, implants, root canal, pediatric and cosmetic dentistry. Book your appointment today.",
  openGraph: {
    title: "Pearlies Dental Clinic — Your Smile, Our Passion",
    description:
      "Premium dental care in Kalanki, Kathmandu. General dentistry, whitening, braces, implants, root canal, pediatric and cosmetic dentistry.",
    type: "website",
    locale: "en_NP",
    siteName: "Pearlies Dental Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pearlies Dental Clinic — Your Smile, Our Passion",
    description:
      "Premium dental care in Kalanki, Kathmandu. Book your appointment today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}
