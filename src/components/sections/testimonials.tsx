"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Real stories from real patients who trust us with their smiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white border border-slate-100 p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn(
                      "h-5 w-5",
                      star <= t.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-200",
                    )}
                  />
                ))}
              </div>
              <blockquote className="mb-6 text-lg italic leading-relaxed text-slate-600">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover object-center border border-slate-200"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
