"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, AppointmentFormValues } from "@/lib/validations";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input, Select } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Phone, Timer, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinic, whatsAppLink } from "@/lib/content";

const SERVICES = [
  { value: "general-dentistry", label: "General Dentistry" },
  { value: "teeth-whitening", label: "Teeth Whitening" },
  { value: "braces", label: "Braces & Aligners" },
  { value: "implants", label: "Dental Implants" },
  { value: "root-canal", label: "Root Canal" },
  { value: "pediatric-dentistry", label: "Pediatric Dentistry" },
  { value: "cosmetic-dentistry", label: "Cosmetic Dentistry" },
  { value: "scaling", label: "Scaling & Polishing" },
];

export default function AppointmentForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || json.error) {
        throw new Error(json.error?.message || json.message || "Submission failed");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section id="appointment" className="py-20 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                Request an Appointment
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Select your preferred service and time. We will confirm your
                appointment as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register("name")}
                    className={cn(
                      errors.name && "border-red-500 focus-visible:ring-red-500",
                    )}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+977 98xxxxxxxx"
                    {...register("phone")}
                    className={cn(
                      errors.phone && "border-red-500 focus-visible:ring-red-500",
                    )}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className={cn(
                    errors.email && "border-red-500 focus-visible:ring-red-500",
                  )}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="service">Service</Label>
                  <Select
                    id="service"
                    {...register("service")}
                    defaultValue=""
                    className={cn(
                      errors.service && "border-red-500 focus-visible:ring-red-500",
                    )}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    {...register("preferredDate")}
                    className={cn(
                      errors.preferredDate &&
                        "border-red-500 focus-visible:ring-red-500",
                    )}
                  />
                  {errors.preferredDate && (
                    <p className="text-sm text-red-600">
                      {errors.preferredDate.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Input
                  id="preferredTime"
                  type="time"
                  {...register("preferredTime")}
                  className={cn(
                    errors.preferredTime &&
                      "border-red-500 focus-visible:ring-red-500",
                  )}
                />
                {errors.preferredTime && (
                  <p className="text-sm text-red-600">{errors.preferredTime.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message (optional)</Label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Anything you'd like us to know..."
                  {...register("message")}
                  className={cn(
                    "block w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                    errors.message && "border-red-500 focus-visible:ring-red-500",
                  )}
                />
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {status === "error" && (
                <div className="rounded-lg bg-red-50 p-4 text-red-700 border border-red-100">
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Calendar className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Request Appointment <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                aria-live="polite"
                className="rounded-2xl bg-teal-600 p-8 text-center text-white shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Request Received!</h3>
                <p className="text-teal-100">
                  Thank you. We will contact you shortly to confirm your
                  appointment.
                </p>
              </motion.div>
            )}
          </div>

          {/* Right: Info card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-8">
                <div className="rounded-lg bg-teal-50 p-3 text-teal-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Call Us</h3>
                  <p className="text-sm text-slate-600">
                    +977 1 441 2345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="rounded-lg bg-teal-50 p-3 text-teal-600">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Clinic Hours</h3>
                  <p className="text-sm text-slate-600">
                    Mon–Sat: 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-sm text-slate-500">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8">
                <div className="rounded-lg bg-teal-50 p-3 text-teal-600">
                  <Timer className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Emergency?</h3>
                  <p className="text-sm text-slate-600">
                    Same-day slots available for dental emergencies.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-600 mb-4">
                  Prefer WhatsApp? Send us a message:
                </p>
                {whatsAppLink() ? (
                  <a
                    href={whatsAppLink()!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", size: "sm", className: "flex items-center gap-2 w-full" })}
                  >
                    <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                ) : (
                  <p className="text-sm text-slate-500">
                    Call {clinic.phone} to reach us.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
