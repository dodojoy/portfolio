"use client";

import { Divider } from "../atoms/Divider";
import { SectionTitle } from "../atoms/SectionTitle";
import { Project } from "../molecules/Project";
import { useTranslations } from "next-intl";

export const ProjectsSection = () => {
  const t = useTranslations("Projects");
  const projects = [
    {
      title: "Brazu",
      videoUrl: "https://www.youtube.com/embed/QJ5uXRhwL20",
      href: "https://www.brazu.io/",
      firstParagraph: t.rich("brazu.p1", {
        strong: (chunks) => <strong>{chunks}</strong>,
        link: (chunks) => (
          <a
            className="underline"
            href="https://www.brazu.io/"
            target="_blank"
            rel="noreferrer"
          >
            {chunks}
          </a>
        ),
      }),
      secondParagraph: t.rich("brazu.p2", {
        video1: (chunks) => (
          <a
            className="underline"
            href="https://youtu.be/QJ5uXRhwL20"
            target="_blank"
            rel="noreferrer"
          >
            {chunks}
          </a>
        ),
        video2: (chunks) => (
          <a
            className="underline"
            href="https://youtu.be/nM3wn1gwj18"
            target="_blank"
            rel="noreferrer"
          >
            {chunks}
          </a>
        ),
      }),
    },
    {
      title: "Valid",
      href: "https://www.carven.com.br/",
      videoUrl: "https://www.youtube.com/embed/o9YGwW23Hao",
      firstParagraph: t.rich("valid.p1", {
        strong: (c) => <strong>{c}</strong>,
        valid: (c) => (
          <a
            className="underline"
            href="https://valid.com/"
            target="_blank"
            rel="noreferrer"
          >
            {c}
          </a>
        ),
        link: (c) => (
          <a
            className="underline"
            href="https://www.carven.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            {c}
          </a>
        ),
      }),
      secondParagraph: t.rich("valid.p2", {
        strong: (c) => <strong>{c}</strong>,
      }),
    },
  ];

  return (
    <section
      id="projects"
      className="flex items-center justify-center bg-secondary w-full py-[50px] lg:py-[70px] px-[20px]"
    >
      <div className="container flex flex-col gap-[50px] lg:gap-[80px] items-center justify-center bg-secondary w-full">
        <SectionTitle text={t("title")} />
        <div className="flex flex-col gap-[50px] lg:gap-[80px] items-center justify-center">
          {projects.map((project, index) => (
            <>
              <Project
                key={project.title}
                title={project.title}
                firstParagraph={project.firstParagraph}
                secondParagraph={project.secondParagraph}
                videoUrl={project.videoUrl}
                href={project.href}
              />
              {index < projects.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
