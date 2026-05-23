import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import DemoSection from "@/components/sections/DemoSection";
import WhyConneqtAI from "@/components/sections/WhyConneqtAI";
import CTASection from "@/components/sections/CTASection";
export default function HomePage() {
  return (
    <>
      <Navbar/>
      <main style={{paddingTop:"52px"}}>
        <Hero/>
        <div style={{height:"1px",background:"linear-gradient(90deg,transparent,#6c63ff,#00d4aa,transparent)",animation:"scanPulse 3s ease-in-out infinite"}}/>
        <Services/>
        <HowItWorks/>
        <WhyConneqtAI/>
        <DemoSection/>
        <CTASection/>
      </main>
      <Footer/>
    </>
  );
}
