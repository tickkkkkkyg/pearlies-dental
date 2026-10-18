"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { team } from "@/lib/content";

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Experienced, certified dental professionals dedicated to your oral
            health and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="h-48 overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-teal-600 mb-3">
                  {member.role}
                </p>
                <ul className="text-xs text-slate-500 space-y-1 mb-4">
                  {member.credentials.map((cred) => (
                    <li key={cred}>• {cred}</li>
                  ))}
                </ul>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
