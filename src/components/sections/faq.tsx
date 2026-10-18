"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Everything you need to know before your visit.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.id === "q1" ? 0 : 0.1 }}
                className="rounded-xl border border-slate-100 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenId(isOpen ? null : item.id)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-4 text-left bg-transparent text-slate-900 font-semibold text-lg hover:bg-slate-50 transition-colors focus-visible-ring"
                >
                  {item.q}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-slate-400 transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-600 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
