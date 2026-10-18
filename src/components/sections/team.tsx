"use client";

import Image from "next/image";

import { team } from "@/lib/content";

export default function Team() {
  return (
    <section id="team" className="bg-[#f8fafc] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Our Dentists</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Meet the clinicians behind your smile</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">Qualified, collaborative and genuinely kind — dedicated to comfortable, beautiful, lasting results.</p>
          <p className="mt-2 text-xs font-medium text-amber-700 bg-amber-50 inline-block rounded-full px-3 py-1 ring-1 ring-amber-200">Profiles below are sample placeholders — verify credentials before publishing.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.id} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="relative h-56 bg-slate-100">
                <Image src={m.image} alt={m.name} fill sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw" className="object-cover object-top" />
              </div>
              <div className="p-5">
                <div className="text-sm font-bold leading-none text-[#0f766e]">{m.specialty}</div>
                <h3 className="mt-1 text-lg font-extrabold leading-tight text-slate-900">{m.name}</h3>
                <div className="text-sm font-semibold text-slate-700">{m.role}</div>
                <ul className="mt-3 space-y-1">
                  {m.credentials.map((c) => (
                    <li key={c} className="text-xs leading-relaxed text-slate-500">• {c}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
