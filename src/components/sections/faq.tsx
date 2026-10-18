"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<string | null>("q1");
  return (
    <section id="faq" className="bg-[#f8fafc] py-14 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">FAQ</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Questions, answered</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">Appointments, treatments, payments, hygiene and emergencies — everything before your visit.</p>
        </div>
        <div className="mt-8 space-y-3">
          {faq.map((it) => {
            const isOpen = open === it.id;
            return (
              <div key={it.id} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? null : it.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-slate-900 sm:text-base">{it.q}</span>
                  <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition ${isOpen ? "rotate-180 border-teal-200 bg-teal-50 text-teal-700" : "border-slate-200 bg-white text-slate-500"}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}>
                      <div className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{it.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
