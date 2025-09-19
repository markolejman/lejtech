import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { FeaturesSection } from "@/components/features-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProjectsCarousel />
      <ContactSection />
      <Footer />
    </main>
  );
}
