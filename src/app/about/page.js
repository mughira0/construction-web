import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VedioSection from "@/views/AboutVedioSection";
import HomeBuildSection from "@/views/HomeOurBuildSection";

function About() {
  return (
    <div style={{ marginTop: "80px" }}>
      <HeroSection
        item={{
          subheading: "About Us",
          heading: "Welcome to Our Services",
          description:
            "Have questions about our construction services? We're here to help and ready to bring your construction projects to life.",
        }}
      />
      <HomeBuildSection />
      <VedioSection />
      <Footer />
    </div>
  );
}

export default About;
