"use client";

import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { clinic, whatsAppLink } from "@/lib/content";

const whatsappHref = whatsAppLink();

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-teal-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-teal-100 leading-relaxed">
            Have questions or need to schedule a visit? Reach out to our friendly
            team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact details */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl border border-teal-200/30 bg-white/5 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-teal-600 p-3 text-white flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Call Us</h3>
                    <p className="text-sm text-teal-100">
                      <a
                        href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                        className="text-teal-300 hover:underline transition-colors"
                      >
                        {clinic.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-teal-600 p-3 text-white flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Email Us</h3>
                    <p className="text-sm text-teal-100">
                      <a
                        href={`mailto:${clinic.email}`}
                        className="text-teal-300 hover:underline transition-colors"
                      >
                        {clinic.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-teal-600 p-3 text-white flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Visit Us</h3>
                    <p className="text-sm text-teal-100 leading-relaxed">
                      {clinic.address.street}, {clinic.address.city} -
                      {clinic.address.zip}<br />
                      {clinic.address.state}, {clinic.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-teal-600 p-3 text-white flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Clinic Hours</h3>
                    <div className="text-sm text-teal-100 space-y-1">
                      <p>
                        Mon – Fri: {clinic.hours.monday}
                      </p>
                      <p>
                        Saturday: {clinic.hours.saturday}
                      </p>
                      <p>
                        Sunday: {clinic.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-teal-200/30">
                <p className="text-xs text-teal-200/70 uppercase tracking-wider font-semibold mb-3">
                  Connect on WhatsApp
                </p>
                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-green-600 transition-colors"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp
                  </a>
                ) : (
                  <p className="text-sm text-teal-100">
                    Call {clinic.phone} to reach us.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Map / directions */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-teal-200/30 bg-white/5 shadow-xl">
              <iframe
                title="Pearlies Dental Clinic location on Google Maps — Kalanki Chowk, Kathmandu"
                src="https://www.google.com/maps?q=Kalanki%20Chowk%2C%20Kathmandu%2C%20Nepal&output=embed"
                className="h-[420px] w-full border-0 lg:h-full lg:min-h-[420px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-teal-200/30 bg-teal-700/40 px-5 py-4">
                <div className="flex items-center gap-2 text-sm text-teal-50">
                  <MapPin className="h-4 w-4 text-teal-300" />
                  {clinic.address.street}, {clinic.address.city},{" "}
                  {clinic.address.country}
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Kalanki+Chowk,+Kathmandu,+Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
