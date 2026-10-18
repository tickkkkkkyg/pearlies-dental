"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Sparkles, Smile, Layers, Baby, Siren, Wand2, Droplets, ChevronRight, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  "general-dentistry": Stethoscope,
  "cosmetic-dentistry": Wand2,
  "teeth-whitening": Sparkles,
  "dental-implants": Layers,
  orthodontics: Smile,
  "pediatric-dentistry": Baby,
  "emergency-care": Siren,
};

function ServiceModal({ svc, onClose }: { svc: (typeof services)[number]; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <button aria-label="Close dialog" onClick={onClose} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        className="relative max-h-[90vh] w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="svc-title"
      >
        <div className="relative h-48">
          <Image src={svc.image} alt={svc.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          <button onClick={onClose} className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-700 shadow hover:bg-slate-50 focus-ring">
            <X className="h-4 w-4" />
          </button>
          <h3 id="svc-title" className="absolute bottom-4 left-5 text-xl font-bold text-white drop-shadow">{svc.title}</h3>
        </div>
        <div className="space-y-4 p-6">
          <p className="text-sm leading-relaxed text-slate-600">{svc.longDescription}</p>
          <div className="flex gap-3">
            <Link href="#appointment" onClick={onClose} className="inline-flex h-10 items-center justify-center rounded-full bg-[#0f766e] px-5 text-sm font-bold text-white hover:bg-[#0e6b64]">
              Book this service
            </Link>
            <button onClick={onClose} className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState<(typeof services)[number] | null>(null);

  return (
    <section id="services" className="bg-[#f8fafc] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Dental Services</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Care designed around your smile</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">Seven essentials — from preventive to transformative — with clear plans and gentle, modern dentistry.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.id] ?? Droplets;
            return (
              <motion.article
                key={svc.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:border-teal-200 hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={svc.image} alt={svc.title} fill sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" className="object-cover transition duration-500 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/5 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-xl bg-white/95 p-2 text-[#0f766e] shadow">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-extrabold text-slate-900">{svc.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{svc.description}</p>
                  <button onClick={() => setActive(svc)} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#0f766e] hover:gap-1.5 hover:text-[#0e6b64]">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="#appointment" className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f766e] px-8 text-sm font-bold text-white shadow hover:bg-[#0e6b64]">
            Book Your Appointment
          </Link>
        </div>
      </div>

      <AnimatePresence>{active && <ServiceModal svc={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
