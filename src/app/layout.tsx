import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { clinic } from "@/lib/content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Branding is pulled from lib/content.ts so a rebrand in one place
// updates the title, Open Graph and Twitter cards automatically.
const BRAND = clinic.name;
const TITLE = `${BRAND} — ${clinic.tagline}`;
const DESCRIPTION =
  "Experience exceptional dental care with modern technology, compassionate professionals, and personalized treatment designed around your smile. General, cosmetic, whitening, implants, orthodontics, pediatric and emergency dentistry. Book your appointment today.";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: {
    template: `%s | ${BRAND}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "dental clinic Kathmandu",
    "dentist Kalanki",
    "teeth whitening Nepal",
    "dental implants Kathmandu",
    "braces Kathmandu",
    "pediatric dentist",
    "cosmetic dentistry",
  ],
  authors: [{ name: BRAND }],
  creator: BRAND,
  applicationName: BRAND,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_NP",
    siteName: BRAND,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${BRAND} — modern dental care` }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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
  // Site lives on GitHub Pages; update when a custom domain is added.
  metadataBase: new URL("https://tickkkkkkyg.github.io/pearlies-dental"),
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