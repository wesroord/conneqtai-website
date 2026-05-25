import NavbarNL from "@/components/layout/NavbarNL";
import Footer from "@/components/layout/Footer";
import HeroNL from "@/components/sections/nl/HeroNL";
import ServicesNL from "@/components/sections/nl/ServicesNL";
import HowItWorksNL from "@/components/sections/nl/HowItWorksNL";
import WhyConneqtAINL from "@/components/sections/nl/WhyConneqtAINL";
import CTASectionNL from "@/components/sections/nl/CTASectionNL";
export default function HomePageNL() {
  return (<><NavbarNL /><main style={{paddingTop:"52px"}}><HeroNL /><div style={{height:"1px",background:"linear-gradient(90deg,transparent,#ff00aa,#7700ff,#00aaff,transparent)"}} /><ServicesNL /><HowItWorksNL /><WhyConneqtAINL /><CTASectionNL /></main><Footer /></>);
}
