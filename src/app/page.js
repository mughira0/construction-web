import Footer from "@/components/Footer";
import HomeHeroSection from "@/views/HeroSection";
import HomeBuildSection from "@/views/HomeOurBuildSection";
import TestimonialsSection from "@/views/OurClients";
import OurProductSection from "@/views/OurProductSection";
import ServicesSection from "@/views/OurServicesSection";

export default function Home() {
  return (
    <div style={{ marginTop: "80px" }}>
      <HomeHeroSection />
      <HomeBuildSection />
      <OurProductSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
