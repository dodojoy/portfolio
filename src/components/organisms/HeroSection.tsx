import Link from "next/link";
import { BaseButton } from "../atoms/BaseButton";
import { HeroSubtitle } from "../atoms/HeroSubtitle";
import { HeroTitle } from "../atoms/HeroTitle";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center bg-hero-pattern h-[90vh] md:h-[75vh] w-full px-[20px]"
    >
      <div className="container flex flex-col items-center justify-center gap-[40px] ">
        <div className="flex flex-col gap-[20px]">
          <HeroTitle text="hi, i’m joyce teodoro!" />
          <HeroSubtitle text="Front-end developer with clear and efficient communication skills, determined and focused on contributing to the growth and improvement of web development." />
        </div>
        <Link href="#projects" passHref>
          <BaseButton lg text="projects" />
        </Link>
      </div>
    </section>
  );
};
