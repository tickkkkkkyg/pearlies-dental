"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinic } from "@/lib/content";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Our Team" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-full z-40 overflow-hidden border-b border-slate-100 bg-white shadow-lg lg:hidden"
        >
          <div className="space-y-1 px-4 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-600"
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-2 pt-4">
              <Link
                href="#appointment"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
              >
                Book an Appointment
              </Link>
              <a
                href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                <Phone className="h-4 w-4" />
                Call {clinic.phone}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close the mobile menu when the viewport grows to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-sm" : "",
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="flex items-center gap-2"
          aria-label="Pearlies Dental Clinic — home"
        >
          <span className="rounded-xl bg-teal-600 px-3 py-1.5 text-xs font-bold tracking-wider text-white shadow-sm">
            Pearlies
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Dental
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-teal-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${clinic.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-teal-600"
          >
            <Phone className="h-4 w-4 text-teal-600" />
            {clinic.phone}
          </a>
          <Link
            href="#appointment"
            className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
          >
            Book an Appointment
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div id="mobile-menu">
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  );
}
