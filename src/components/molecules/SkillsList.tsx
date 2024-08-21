import { SkillTag } from "../atoms/SkillTag";
import { SubHeading } from "../atoms/SubHeading";

export const SkillsList = () => {
  const skills = [
    "Javascript",
    "NextJs",
    "ReactJs",
    "Material UI",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "TypeScript",
    "Figma",
    "Tailwind",
  ];

  return (
    <div className="flex flex-col gap-[40px] md:gap-[30px] w-full">
      <SubHeading text="Skills" />
      <div className="grid gap-[20px] md:gap-[30px] grid-cols-3 place-items-center">
        {skills.map((skill) => (
          <SkillTag text={skill} key={skill} />
        ))}
      </div>
    </div>
  );
};
