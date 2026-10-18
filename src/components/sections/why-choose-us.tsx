"use client";

import { Heart, ShieldCheck, Sparkles, UserCheck, Receipt, Clock3 } from "lucide-react";
import { whyChooseUs } from "@/lib/content";
import type { ReactElement } from "react";

const icons: Record<string, ReactElement> = {
  comfort: <Heart className="h-5 w-5" />,
  experienced: <UserCheck className="h-5 w-5" />,
  technology: <ShieldCheck className="h-5 w-5" />,
  personalized: <Sparkles className="h-5 w-5" />,
  transparent: <Receipt className="h-5 w-5" />,
  convenient: <Clock3 className="h-5 w-5" />,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Dentistry that feels different</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">Six reasons patients trust us — comfort, expertise, technology, and honest care in one welcoming home.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f) => (
            <div key={f.id} className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-6 shadow-sm">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0f766e] shadow-sm ring-1 ring-slate-100">
                {icons[f.id] ?? <Sparkles className="h-5 w-5" />}
              </span>
              <h3 className="mt-4 text-base font-extrabold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
