import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ClinicHighlights } from "@/components/ClinicHighlights";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { AppointmentForm } from "@/components/AppointmentForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />
      <Hero />
      <About />
      <ClinicHighlights />
      <Services />
      <WhyChooseUs />
      <Process />
      <AppointmentForm />
      <FAQ />
      <Footer />
    </main>
  );
}
