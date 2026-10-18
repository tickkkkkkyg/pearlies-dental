// ──────────────────────────────────────────────────────────
// Site configuration — edit this file to rebrand the clinic
// ──────────────────────────────────────────────────────────
export const siteConfig = {
  // Brand — swap these to rebrand instantly
  brand: {
    name: "Your Dental Clinic",
    shortName: "YDC",
    tagline: "Your Smile, Our Passion.",
    logoMark: "YD", // shown in the navy badge
  },
  // Palette tokens — change here to reskin the entire site
  // (also mirrored in globals.css @theme for Tailwind)
  palette: {
    navy: "#0f1e2e",
    teal: "#0f766e",
    tealSoft: "#14b8a6",
    mint: "#ecfdf5",
  },
  contact: {
    phone: "+977 1 441 2345",
    phoneRaw: "+97714412345",
    whatsapp: "+977 9841234567",
    whatsappRaw: "9779841234567",
    email: "hello@yourdentalclinic.com.np",
    address: {
      street: "Kalanki Chowk",
      city: "Kathmandu",
      state: "Bagmati Pradesh",
      zip: "44600",
      country: "Nepal",
      googleMapsQuery: "Kalanki Chowk, Kathmandu, Nepal",
    },
    hours: {
      weekdays: "Mon – Fri: 9:00 AM – 6:00 PM",
      saturday: "Saturday: 9:00 AM – 4:00 PM",
      sunday: "Sunday: Closed",
      short: "Open Mon–Sat · 9 AM – 6 PM",
    },
  },
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
  booking: {
    // Set to false to hide WhatsApp and show phone-only fallback
    whatsappEnabled: true,
    defaultMessage:
      "Hello Your Dental Clinic, I'd like to book an appointment. Please share available slots.",
    // When true, form shows the "demo" notice (no real backend)
    demoMode: true,
  },
  map: {
    // Swap to your verified Google Maps embed URL
    embedSrc:
      "https://www.google.com/maps?q=Kalanki%20Chowk%2C%20Kathmandu%2C%20Nepal&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Kalanki+Chowk,+Kathmandu,+Nepal",
  },
} as const;

export function whatsAppLink(message = siteConfig.booking.defaultMessage): string | null {
  if (!siteConfig.booking.whatsappEnabled) return null;
  const phone = siteConfig.contact.whatsappRaw.replace(/[^\d]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
