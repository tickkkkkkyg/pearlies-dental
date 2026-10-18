import Link from "next/link";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { clinic } from "@/lib/content";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-[#0a1628] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold tracking-widest text-[#0a1628]">YD</span>
              <span className="text-sm font-bold tracking-tight text-white">Your Dental Clinic</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">Premium, people-first dental care in Kalanki, Kathmandu. Your smile is our passion — and our responsibility.</p>
            <p className="mt-3 text-xs text-slate-500">Update brand, colors, address, phone &amp; hours in <code className="rounded bg-white/10 px-1">lib/content.ts</code>.</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="#services" className="text-slate-400 hover:text-teal-300">General Dentistry</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-teal-300">Cosmetic Dentistry</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-teal-300">Teeth Whitening</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-teal-300">Dental Implants</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-teal-300">Orthodontics &amp; Braces</Link></li>
              <li><Link href="#services" className="text-slate-400 hover:text-teal-300">Emergency Care</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Clinic</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="#about" className="text-slate-400 hover:text-teal-300">About</Link></li>
              <li><Link href="#team" className="text-slate-400 hover:text-teal-300">Our Dentists</Link></li>
              <li><Link href="#why-us" className="text-slate-400 hover:text-teal-300">Why Choose Us</Link></li>
              <li><Link href="#testimonials" className="text-slate-400 hover:text-teal-300">Reviews</Link></li>
              <li><Link href="#faq" className="text-slate-400 hover:text-teal-300">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Contact</h3>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-teal-400" /><a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="text-slate-400 hover:text-teal-300">{clinic.phone}</a></li>
              <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-teal-400" /><a href={`mailto:${clinic.email}`} className="text-slate-400 hover:text-teal-300">{clinic.email}</a></li>
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-teal-400" /><span className="text-slate-400">{clinic.address.street}, {clinic.address.city}</span></li>
            </ul>
            <Link href="#appointment" className="mt-5 inline-flex text-sm font-bold text-teal-300 hover:text-teal-200">Book an appointment →</Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© {year} {clinic.name}. All rights reserved.</span>
          <span className="flex items-center gap-1">Made with <Heart className="h-3 w-3 fill-teal-500 text-teal-500" /> in Kathmandu · <Link href="#appointment" className="hover:text-slate-300">Privacy</Link> · <Link href="#appointment" className="hover:text-slate-300">Terms</Link></span>
        </div>
      </div>
    </footer>
  );
}
