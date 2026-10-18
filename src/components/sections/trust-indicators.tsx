"use client";

import { BadgeCheck, HeartPulse, Smile, Sparkles } from "lucide-react";
import { trustIndicators } from "@/lib/content";

const icons = [HeartPulse, Smile, Sparkles, BadgeCheck];

export default function TrustIndicators() {
  return (
    <section aria-label="Clinic highlights" className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {trustIndicators.map((it, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={it.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-base font-extrabold tracking-tight text-slate-900">{it.label}</div>
                  <div className="text-xs font-medium leading-tight text-slate-500">{it.sub}</div>
                  <div className="mt-1 hidden text-[11px] leading-none text-slate-400 lg:block">{it.note}</div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-[11px] tracking-wide text-slate-400 lg:hidden">Statistics above are editable placeholders — replace with verified figures.</p>
      </div>
    </section>
  );
}
