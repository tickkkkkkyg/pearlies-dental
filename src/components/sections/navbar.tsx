"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { clinic } from "@/lib/content";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Dentists" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => setScrolled(window.scrollY > 8), []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  useEffect(() => {
    const mq = window.matchMedia("(min-width:1024px)");
    const h = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl transition-all ${scrolled ? "border-slate-200 shadow-[0_8px_30px_rgba(15,30,46,0.06)]" : "border-slate-100"}`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3" aria-label={`${clinic.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0f1e2e] text-sm font-bold tracking-widest text-white shadow-sm">YD</span>
          <span className="hidden sm:block">
            <span className="block text-[15px] font-bold leading-none tracking-tight text-slate-900">Your Dental</span>
            <span className="block text-[15px] font-bold leading-none tracking-tight text-slate-900">Clinic</span>
          </span>
          <span className="sm:hidden text-[15px] font-bold tracking-tight text-slate-900">Your Dental Clinic</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-[#0f766e]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 xl:flex">
            <Phone className="h-4 w-4 text-[#0f766e]" /> {clinic.phone}
          </a>
          <Link href="#appointment" className="rounded-full bg-[#0f766e] px-6 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(15,118,110,0.25)] transition hover:bg-[#0e6b64] hover:shadow-[0_10px_24px_rgba(15,118,110,0.3)]">
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 lg:hidden focus-ring"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full border-b border-slate-100 bg-white shadow-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="grid gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 grid gap-2">
                <Link href="#appointment" onClick={() => setOpen(false)} className="rounded-xl bg-[#0f766e] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#0e6b64]">
                  Book Appointment
                </Link>
                <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">
                  <Phone className="h-4 w-4" /> Call {clinic.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
