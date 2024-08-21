import Link from "next/link";
import { BaseButton } from "../atoms/BaseButton";
import { Paragraph } from "../atoms/Paragraph";
import { SectionTitle } from "../atoms/SectionTitle";
import { SubHeading } from "../atoms/SubHeading";
import { AboutMe } from "../molecules/AboutMe";
import { SkillsList } from "../molecules/SkillsList";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col justify-center items-center w-full py-[50px] md:py-[70px] px-[20px] gap-[30px]"
    >
      <SectionTitle text="about" />
      <div className="flex flex-col gap-9 lg:grid lg:grid-cols-2 w-full">
        <AboutMe />
        <SkillsList />
      </div>
      <Link href="#contact" passHref>
        <BaseButton text="contact" />
      </Link>
    </section>
  );
};
