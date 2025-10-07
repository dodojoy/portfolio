"use client";

import Link from "next/link";
import { BaseButton } from "../atoms/BaseButton";
import { Paragraph } from "../atoms/Paragraph";
import { SubHeading } from "../atoms/SubHeading";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";

interface ProjectProps {
  title: string;
  firstParagraph: ReactNode;
  secondParagraph: ReactNode;
  src?: string;
  videoUrl?: string;
  href: string;
  links?: { label: string; href: string }[];
}

export const Project: React.FC<ProjectProps> = ({
  src,
  videoUrl,
  title,
  firstParagraph,
  secondParagraph,
  href,
  links,
}) => {
  const t = useTranslations("Projects");
  return (
    <div className="flex flex-col items-center gap-[50px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[80px]">
        {videoUrl ? (
          <div className="w-full justify-self-center order-2 lg:order-1">
            <div className="relative w-full h-0 pt-[56.25%] rounded-md overflow-hidden shadow-sm">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          src && (
            <img
              className="w-full h-full justify-self-center order-2 lg:order-1"
              src={src}
              alt="project image"
            />
          )
        )}
        <div className="justify-self-center order-1 lg:order-2 flex flex-col gap-[30px]">
          <SubHeading text={title} />
          <Paragraph text={firstParagraph} />
          <Paragraph text={secondParagraph} />
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {links.map((l) => (
                <Link key={l.href} href={l.href} target="_blank">
                  <BaseButton text={l.label} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Link href={href} target="_blank">
        <BaseButton text={t("cta")} />
      </Link>
    </div>
  );
};
