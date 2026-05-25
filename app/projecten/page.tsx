import NavbarNL from "@/components/layout/NavbarNL";
import Footer from "@/components/layout/Footer";
import CasesHeroNL from "@/components/sections/nl/CasesHeroNL";
import CaseStudyNL from "@/components/sections/nl/CaseStudyNL";
import CasesCTANL from "@/components/sections/nl/CasesCTANL";
export default function CasesPageNL() {
  return (<><NavbarNL /><main style={{paddingTop:"52px"}}><CasesHeroNL /><CaseStudyNL /><CasesCTANL /></main><Footer /></>);
}
