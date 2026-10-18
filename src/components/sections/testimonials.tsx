"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  const prev = useCallback(() => setIdx((v) => (v - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((v) => (v + 1) % total), [total]);
  const t = testimonials[idx];

  return (
    <section id="testimonials" className="bg-[#f8fafc] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Reviews</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">What patients say</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Sample reviews below are placeholders. Replace with verified, consented patient testimonials.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prev} aria-label="Previous review" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-ring">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next review" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-ring">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((r, i) => (
            <article
              key={r.id}
              className={`rounded-2xl border bg-white p-6 shadow-sm transition ${i === idx ? "border-teal-200 ring-1 ring-teal-100" : "border-slate-100 opacity-70 lg:opacity-100"}`}
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className={`h-4 w-4 ${s < r.rating ? "fill-current" : "text-slate-200"}`} />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-slate-700">&ldquo;{r.text}&rdquo;</blockquote>
              <div className="mt-5 flex items-center gap-3">
                <Image src={r.image} alt={r.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-bold text-slate-900">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2 lg:hidden" role="tablist" aria-label="Reviews">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition ${i === idx ? "w-8 bg-[#0f766e]" : "w-2 bg-slate-300"}`}
            />
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing review {idx + 1} of {total}: {t.name}
        </p>
      </div>
    </section>
  );
}
