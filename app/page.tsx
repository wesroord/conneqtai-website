import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import DemoSection from "@/components/sections/DemoSection";
import WhyConneqtAI from "@/components/sections/WhyConneqtAI";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <HowItWorks />
        <DemoSection />
        <WhyConneqtAI />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
