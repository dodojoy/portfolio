"use client";
import Link from "next/link";
import { BaseButton } from "../atoms/BaseButton";
import { HeroSubtitle } from "../atoms/HeroSubtitle";
import { HeroTitle } from "../atoms/HeroTitle";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("Hero");
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center bg-hero-pattern h-[90vh] md:h-[75vh] w-full px-[20px]"
    >
      <div className="container flex flex-col items-center justify-center gap-[40px] ">
        <div className="flex flex-col gap-[20px]">
          <HeroTitle text={t("title")} />
          <HeroSubtitle text={t("subtitle")} />
        </div>
        <Link href="#projects" passHref>
          <BaseButton lg text={t("cta")} />
        </Link>
      </div>
    </section>
  );
};
