"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Sparkles,
  AlignHorizontalDistributeStart,
  Anchor,
  Activity,
  Baby,
  Wand2,
  Droplets,
} from "lucide-react";
import { services } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  "general-dentistry": Stethoscope,
  "teeth-whitening": Sparkles,
  braces: AlignHorizontalDistributeStart,
  implants: Anchor,
  "root-canal": Activity,
  "pediatric-dentistry": Baby,
  "cosmetic-dentistry": Wand2,
  scaling: Droplets,
};

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-600">
            Our Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Comprehensive Dental Care
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            From preventive check-ups to advanced smile makeovers, we offer a
            full range of dental services under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.id] ?? Sparkles;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-colors hover:border-teal-200"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 p-2 text-teal-600 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-teal-700">
                    {service.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href="#appointment"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
                  >
                    Book this service
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#appointment"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-teal-600 px-8 text-base font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
