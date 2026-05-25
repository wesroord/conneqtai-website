import NavbarNL from "@/components/layout/NavbarNL";
import Footer from "@/components/layout/Footer";
import PricingHeroNL from "@/components/sections/nl/PricingHeroNL";
import PricingCardsNL from "@/components/sections/nl/PricingCardsNL";
import PricingFAQNL from "@/components/sections/nl/PricingFAQNL";
export default function PricingPageNL() {
  return (<><NavbarNL /><main style={{paddingTop:"52px"}}><PricingHeroNL /><PricingCardsNL /><PricingFAQNL /></main><Footer /></>);
}
