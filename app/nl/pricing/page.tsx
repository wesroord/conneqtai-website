import NavbarNL from "@/components/layout/NavbarNL";
import Footer from "@/components/layout/Footer";
import PricingHeroNL from "@/components/sections/nl/PricingHeroNL";
import PricingCardsNL from "@/components/sections/nl/PricingCardsNL";
export default function PricingPageNL() {
  return (<><NavbarNL /><main style={{paddingTop:"52px"}}><PricingHeroNL /><PricingCardsNL /></main><Footer /></>);
}
