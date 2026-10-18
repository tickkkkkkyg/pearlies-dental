"use client";

import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { clinic, whatsAppLink } from "@/lib/content";

export default function ContactSection() {
  const wa = whatsAppLink();
  return (
    <section id="contact" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[24px] bg-[#0f1e2e] p-6 text-white shadow-xl sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">Contact & Location</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">We&apos;d love to see you</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">Editable address, phone, email, hours and map — update <code className="rounded bg-white/10 px-1 py-0.5 text-xs">lib/content.ts</code> to publish your real details.</p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10"><MapPin className="h-5 w-5" /></span>
                <div className="text-sm leading-relaxed">
                  <div className="font-bold text-white">Address</div>
                  <div className="text-slate-300">{clinic.address.street}, {clinic.address.city} — {clinic.address.zip}<br />{clinic.address.state}, {clinic.address.country}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10"><Phone className="h-5 w-5" /></span>
                <div>
                  <div className="font-bold text-white text-sm">Phone</div>
                  <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="text-sm font-semibold text-teal-300 hover:underline">{clinic.phone}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10"><Mail className="h-5 w-5" /></span>
                <div>
                  <div className="font-bold text-white text-sm">Email</div>
                  <a href={`mailto:${clinic.email}`} className="text-sm font-semibold text-teal-300 hover:underline">{clinic.email}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10"><Clock className="h-5 w-5" /></span>
                <div className="text-sm">
                  <div className="font-bold text-white">Hours</div>
                  <div className="text-slate-300">Mon–Sat 9:00 AM – 6:00 PM<br />Sunday Closed</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#0f1e2e] hover:bg-slate-100">WhatsApp us</a>
              ) : null}
              <a href="#appointment" className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold text-white hover:bg-white/10">Book appointment</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-[#f8fafc] shadow-sm">
            <iframe
              title="Clinic location map — update src in lib/site-config.ts or lib/content.ts"
              src="https://www.google.com/maps?q=Kalanki%20Chowk%2C%20Kathmandu%2C%20Nepal&output=embed"
              className="h-[360px] w-full border-0 lg:h-[520px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-white px-4 py-3 sm:px-5">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                <MapPin className="h-4 w-4 text-[#0f766e]" /> {clinic.address.street}, {clinic.address.city}, {clinic.address.country}
              </span>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Kalanki+Chowk,+Kathmandu,+Nepal" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#0f766e] hover:underline">Get directions →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
