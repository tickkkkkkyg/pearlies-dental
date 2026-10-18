import { z } from "zod";

export const appointmentSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  message: z.string().max(500, "Message is too long").optional(),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
