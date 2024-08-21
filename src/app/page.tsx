import { AboutSection } from "@/components/organisms/AboutSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import "./globals.css";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { ContactSection } from "@/components/organisms/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
