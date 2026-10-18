"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 lg:pb-32 lg:pt-24">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50/70 via-white to-white"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-teal-100/50 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 -z-10 h-[320px] w-[520px] rounded-full bg-emerald-100/40 blur-[100px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-teal-700 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>
              Accepting new patients · Kalanki, Kathmandu
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Your Smile,{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                Our Passion
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              Premium, gentle dental care for the whole family. From routine
              cleanings to complete smile makeovers, we combine modern
              technology with a warm, patient-first approach — right here in
              Kathmandu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#appointment"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-teal-600 px-7 text-base font-semibold text-white shadow-md shadow-teal-600/20 transition-all hover:-translate-y-0.5 hover:bg-teal-700"
              >
                Book an Appointment
              </Link>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Small trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80",
                  ].map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 font-semibold text-slate-900">
                    5,000+ happy patients
                    <span className="flex text-amber-400" aria-label="Rated 4.9 out of 5">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <Star className="h-3.5 w-3.5 fill-current" />
                    </span>
                  </div>
                  <div className="text-slate-500">4.9 average rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <ShieldCheck className="h-5 w-5 text-teal-600" />
                Internationally certified &amp; sterilized
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto h-[420px] w-full max-w-[560px] overflow-hidden rounded-3xl border border-white/60 shadow-2xl shadow-teal-900/10 sm:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?auto=format&fit=crop&w=1000&q=80"
                alt="Dentist treating a smiling patient at Pearlies Dental Clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                fetchPriority="high"
                className="object-cover object-center"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  Painless Treatments
                </div>
                <div className="text-xs text-slate-500">
                  Modern, gentle techniques
                </div>
              </div>
            </div>

            <div className="absolute -top-4 right-4 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex">
              <div className="text-right">
                <div className="text-sm font-semibold text-slate-900">
                  Open Mon–Sat
                </div>
                <div className="text-xs text-slate-500">9:00 AM – 6:00 PM</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
