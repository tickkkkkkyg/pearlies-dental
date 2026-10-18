"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Star } from "lucide-react";
import { trustIndicators } from "@/lib/content";

const icons = [Users, Award, Star, ShieldCheck];

export default function TrustIndicators() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustIndicators.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="rounded-xl bg-teal-50 p-3 text-teal-600 flex-shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {item.label}
                  </div>
                  <div className="text-sm text-slate-500">{item.value}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
