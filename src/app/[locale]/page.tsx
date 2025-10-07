import { AboutSection } from "@/components/organisms/AboutSection";
import { HeroSection } from "@/components/organisms/HeroSection";
import "../globals.css";
import { ProjectsSection } from "@/components/organisms/ProjectsSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  const _ = t("title");
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
