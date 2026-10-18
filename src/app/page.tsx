import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import TrustIndicators from "@/components/sections/trust-indicators";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Testimonials from "@/components/sections/testimonials";
import Gallery from "@/components/sections/gallery";
import AppointmentForm from "@/components/sections/appointment-form";
import FAQ from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Pearlies Dental Clinic — Your Smile, Our Passion",
  description:
    "Premium dental care in Kalanki, Kathmandu. General dentistry, teeth whitening, braces, implants, root canal, pediatric and cosmetic dentistry. Book your appointment today.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustIndicators />
        <Services />
        <Team />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <AppointmentForm />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
