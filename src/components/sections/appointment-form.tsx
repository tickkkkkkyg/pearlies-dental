"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentFormValues } from "@/lib/validations";
import { Input, Select } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Phone, Timer, Loader2, Check, Info } from "lucide-react";
import { clinic, whatsAppLink, services } from "@/lib/content";

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

export default function AppointmentForm() {
  const [phase, setPhase] = useState<"form" | "submitting" | "ready">("form");
  const [error, setError] = useState<string | null>(null);
  const [href, setHref] = useState<string | null>(null);
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-only min-date, no cascade risk
    setMinDate(new Date(Date.now() + 86400000).toISOString().slice(0, 10));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { name: "", phone: "", email: "", service: "", preferredDate: "", preferredTime: "", message: "" },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setError(null);
    setPhase("submitting");
    await new Promise((r) => setTimeout(r, 700));
    const label = services.find((s) => s.id === data.service)?.title ?? data.service;
    const msg = [
      `Hello ${clinic.name}, I'd like to book an appointment.`,
      ``,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${label}`,
      `Preferred date: ${data.preferredDate}`,
      `Preferred time: ${data.preferredTime}`,
      data.message ? `Note: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const link = whatsAppLink(msg);
    if (!link) {
      setError(`Booking is unavailable right now. Please call ${clinic.phone}.`);
      setPhase("form");
      return;
    }
    setHref(link);
    setPhase("ready");
  };

  return (
    <section id="appointment" className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-100 bg-[#f8fafc] p-4 sm:p-6 lg:p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">
                <Info className="h-3.5 w-3.5" /> Demo form — no backend yet. On submit we prepare a WhatsApp message for confirmation.
              </div>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Request an appointment</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Choose your service and preferred time. We&apos;ll confirm your slot by phone/WhatsApp.</p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="ap-name">Full name *</Label>
                    <Input id="ap-name" autoComplete="name" placeholder="Jane Doe" {...register("name")} aria-invalid={!!errors.name} className={errors.name ? "border-red-300" : ""} />
                    {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ap-phone">Phone number *</Label>
                    <Input id="ap-phone" type="tel" autoComplete="tel" placeholder="+977 98xxxxxxxx" {...register("phone")} aria-invalid={!!errors.phone} className={errors.phone ? "border-red-300" : ""} />
                    {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ap-email">Email *</Label>
                  <Input id="ap-email" type="email" autoComplete="email" placeholder="you@example.com" {...register("email")} aria-invalid={!!errors.email} className={errors.email ? "border-red-300" : ""} />
                  {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                  <p className="text-xs text-slate-500">We use this only to confirm your appointment.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ap-service">Dental service *</Label>
                  <Select id="ap-service" {...register("service")} aria-invalid={!!errors.service} defaultValue="" className={errors.service ? "border-red-300" : ""}>
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </Select>
                  {errors.service && <p className="text-xs text-red-600">{errors.service.message}</p>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="ap-date">Preferred date *</Label>
                    <Input id="ap-date" type="date" min={minDate} {...register("preferredDate")} aria-invalid={!!errors.preferredDate} className={errors.preferredDate ? "border-red-300" : ""} />
                    {errors.preferredDate && <p className="text-xs text-red-600">{errors.preferredDate.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ap-time">Preferred time *</Label>
                    <Select id="ap-time" {...register("preferredTime")} aria-invalid={!!errors.preferredTime} defaultValue="" className={errors.preferredTime ? "border-red-300" : ""}>
                      <option value="">Select a time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </Select>
                    {errors.preferredTime && <p className="text-xs text-red-600">{errors.preferredTime.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ap-message">Additional message</Label>
                  <textarea
                    id="ap-message"
                    rows={3}
                    placeholder="Anything you'd like us to know..."
                    {...register("message")}
                    className={`block w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f766e] ${errors.message ? "border-red-300 focus:ring-red-400" : "border-slate-200"}`}
                  />
                  {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
                </div>

                {error && (
                  <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={phase === "submitting"}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0f766e] px-6 text-sm font-bold text-white shadow hover:bg-[#0e6b64] disabled:opacity-60 sm:w-auto"
                >
                  {phase === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Preparing…
                    </>
                  ) : (
                    "Request appointment"
                  )}
                </button>
                <p className="text-xs leading-relaxed text-slate-500">By submitting, you agree we may contact you to confirm. Your appointment is confirmed only after we reply.</p>
              </form>

              <AnimatePresence>
                {phase === "ready" && href && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-6 rounded-2xl bg-[#0f766e] p-6 text-white shadow-lg">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-center text-lg font-bold">Ready to send</h3>
                    <p className="mt-1 text-center text-sm leading-relaxed text-teal-50">Tap below to send your request on WhatsApp. We&apos;ll reply to confirm your slot.</p>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="mt-4 flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#0f766e] hover:bg-teal-50">
                      Send via WhatsApp
                    </a>
                    <p className="mt-3 text-center text-xs text-teal-100">
                      Prefer to call? <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="font-semibold underline underline-offset-4">{clinic.phone}</a>
                    </p>
                    <button onClick={() => setPhase("form")} className="mx-auto mt-3 block text-xs font-semibold text-teal-100 underline underline-offset-4">
                      Send another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-[#0f1e2e] p-6 text-white shadow-xl">
                <h3 className="text-lg font-bold">Visit us</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {clinic.address.street} · {clinic.address.city}
                  <br />
                  {clinic.address.state}, {clinic.address.country} {clinic.address.zip}
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10"><Phone className="h-4 w-4" /></span>
                    <div>
                      <div className="text-xs font-semibold tracking-widest text-slate-400">PHONE</div>
                      <a href={`tel:${clinic.phone.replace(/\s/g, "")}`} className="text-sm font-bold hover:underline">{clinic.phone}</a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10"><Calendar className="h-4 w-4" /></span>
                    <div>
                      <div className="text-xs font-semibold tracking-widest text-slate-400">HOURS</div>
                      <div className="text-sm font-medium text-slate-100">Mon–Sat 9 AM – 6 PM · Sun Closed</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10"><Timer className="h-4 w-4" /></span>
                    <div>
                      <div className="text-xs font-semibold tracking-widest text-slate-400">EMERGENCY</div>
                      <div className="text-sm text-slate-200">Same-day slots when you&apos;re in pain — call directly.</div>
                    </div>
                  </div>
                </div>
                {whatsAppLink() && (
                  <a href={whatsAppLink()!} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0f1e2e] hover:bg-slate-100">
                    WhatsApp us
                  </a>
                )}
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
                <span className="font-bold text-slate-900">How booking works:</span> this is a demo form with validation. Submitting prepares a WhatsApp message — your appointment is only confirmed after our team replies. Connect a backend (email/API) to make it fully transactional.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
