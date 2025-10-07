"use client";
import { useTranslations } from "next-intl";
import { Paragraph } from "../atoms/Paragraph";
import { SubHeading } from "../atoms/SubHeading";

export const AboutMe = () => {
  const t = useTranslations("About");
  return (
    <div className="flex flex-col gap-[40px] md:gap-[60px]">
      <SubHeading text={t("subtitle")} />
      <div className="flex flex-col gap-[20px] md:gap-[30px]">
        <Paragraph
          text={t.rich("description1", {
            highlight: (chunks) => (
              <mark className="bg-primary px-1 rounded-sm">{chunks}</mark>
            ),
          })}
        />
        <Paragraph text={t("description2")} />
      </div>
    </div>
  );
};
