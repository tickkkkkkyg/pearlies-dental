import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";

// In a real deployment, this would write to your database / CRM / email.
// This endpoint accepts the appointment request and returns a confirmation.
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = appointmentSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // Simulate backend processing delay (remove in production)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // TODO: Replace with your real backend integration:
    // - Save to database (e.g., Prisma/PostgreSQL, Supabase, MongoDB)
    // - Send confirmation email (e.g., Resend, SendGrid, Nodemailer)
    // - Create calendar event (e.g., Google Calendar API)
    // - Notify clinic staff (e.g., Slack, WhatsApp Business API)
    console.log("Appointment request received:", data);

    return NextResponse.json(
      {
        success: true,
        message:
          "Your appointment request has been received. We will confirm your slot shortly.",
        reference: `PC-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to process your request. Please try again." },
      { status: 500 },
    );
  }
}
