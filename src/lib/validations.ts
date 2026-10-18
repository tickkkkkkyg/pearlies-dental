import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your full name").max(100, "Name is too long"),
  phone: z.string().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  email: z.string().email("Please enter a valid email").min(1, "Please enter your email"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().max(500, "Message is too long").optional().or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
