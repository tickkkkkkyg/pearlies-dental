"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Our Clinic
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A clean, modern, and welcoming environment designed for your
            comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="relative h-48 overflow-hidden rounded-2xl bg-slate-100 group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-teal-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
