"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#ecfdf5] via-white to-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-teal-100/60 blur-[90px]" />
        <div className="absolute -right-24 top-24 h-[360px] w-[560px] rounded-full bg-emerald-100/50 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 pt-8 lg:pb-16 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/90 px-3 py-1.5 text-xs font-semibold tracking-wide text-teal-700 shadow-sm backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>
              Kalanki, Kathmandu · Accepting new patients
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="text-balance text-[2.2rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#0f1e2e] sm:text-5xl lg:text-[3.6rem]"
            >
              Your Smile,
              <br />
              <span className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] bg-clip-text text-transparent">Our Passion.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-slate-600 sm:text-lg"
            >
              Experience exceptional dental care with modern technology, compassionate professionals, and personalized treatment designed around your smile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="#appointment" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f766e] px-7 text-sm font-bold text-white shadow-[0_12px_28px_rgba(15,118,110,0.28)] transition hover:bg-[#0e6b64]">
                Book an Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 text-sm font-bold text-slate-800 hover:bg-slate-50">
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80",
                  ].map((src) => (
                    <Image key={src} src={src} alt="" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div className="text-sm leading-none">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    Loved by patients
                    <span className="flex text-amber-400">
                      <Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" /><Star className="h-3.5 w-3.5 fill-current" />
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-slate-500">Sample rating — replace with verified reviews</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
                <ShieldCheck className="h-4 w-4 text-[#0f766e]" /> Sterilized · Digital diagnostics
              </span>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative"
          >
            <div className="relative mx-auto overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_24px_64px_rgba(15,30,46,0.18)]">
              <div className="relative aspect-[4/3.4] lg:aspect-[4/3.2]">
                <Image
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
                  alt="Bright, modern dental clinic with patient and dentist"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e2e]/10 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:left-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-none">
                <div className="text-sm font-bold text-slate-900">Painless Treatments</div>
                <div className="mt-1 text-xs text-slate-500">Modern, gentle techniques</div>
              </div>
            </div>
            <div className="absolute -top-3 right-2 hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex">
              <div className="text-right leading-none">
                <div className="text-sm font-bold text-slate-900">Open Mon–Sat</div>
                <div className="mt-1 text-xs text-slate-500">9:00 AM – 6:00 PM</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
