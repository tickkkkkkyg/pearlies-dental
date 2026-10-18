"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "Modern, evidence-based dentistry — explained in plain language.",
  "Calm, respectful care for adults, teens and little ones.",
  "Clear written plans and upfront pricing before any treatment.",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[28px] border border-slate-100 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=80"
                alt="Our bright, welcoming dental clinic interior"
                width={900}
                height={760}
                className="h-[420px] w-full object-cover lg:h-[520px]"
              />
            </div>
            <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-none">
                <div className="text-sm font-bold text-slate-900">Patient-first clinic</div>
                <div className="mt-1 text-xs text-slate-500">Warm, modern &amp; welcoming</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">About Our Clinic</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              A modern clinic that puts people first.
            </h2>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-slate-600">
              We combine contemporary diagnostics and gentle techniques with honest guidance — so every visit feels clear, comfortable and worthwhile. From a child&apos;s first check-up to a full smile restoration, you&apos;ll know the plan, the options and the cost before we begin.
            </p>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#appointment" className="inline-flex h-11 items-center justify-center rounded-full bg-[#0f766e] px-6 text-sm font-bold text-white hover:bg-[#0e6b64]">
                Book a visit
              </Link>
              <Link href="#team" className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-bold text-slate-800 hover:bg-slate-50">
                Meet the dentists
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
