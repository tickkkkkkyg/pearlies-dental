"use client";

import { motion } from "framer-motion";
import { Shield, DollarSign, Layers, Users } from "lucide-react";
import { whyChooseUs } from "@/lib/content";
import type { ReactElement } from "react";

const featureIcons: Record<string, ReactElement> = {
  "gentle-care": <Shield className="h-6 w-6" />,
  "transparent-pricing": <DollarSign className="h-6 w-6" />,
  "modern-technology": <Layers className="h-6 w-6" />,
  "family-friendly": <Users className="h-6 w-6" />,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Why Choose Pearlies?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe great dental care is about more than just treatment —
              it&apos;s about trust, comfort, and lasting relationships.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-600 mt-2" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  Gentle techniques and modern anesthesia for pain-free visits.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-600 mt-2" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  Clear treatment plans with no surprise charges.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-600 mt-2" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  ISO-certified sterilization and digital diagnostics.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChooseUs.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-slate-100 bg-slate-50 p-6 shadow-sm hover:border-teal-200 transition-colors"
              >
                <div className="rounded-lg bg-white p-3 text-teal-600 shadow-sm mb-4">
                  {featureIcons[feature.id]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
