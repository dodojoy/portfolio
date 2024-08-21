import Link from "next/link";
import { BaseButton } from "../atoms/BaseButton";
import { Paragraph } from "../atoms/Paragraph";
import { SubHeading } from "../atoms/SubHeading";

interface ProjectProps {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  src: string;
  href: string;
}

export const Project: React.FC<ProjectProps> = ({
  src,
  title,
  firstParagraph,
  secondParagraph,
  href,
}) => {
  return (
    <div className="flex flex-col items-center gap-[50px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[80px]">
        <img
          className="w-full h-full justify-self-center order-2 lg:order-1"
          src={src}
          alt="project image"
        />
        <div className="justify-self-center order-1 lg:order-2 flex flex-col gap-[30px]">
          <SubHeading text={title} />
          <Paragraph text={firstParagraph} />
          <Paragraph text={secondParagraph} />
        </div>
      </div>
      <Link href={href} target="_blank">
        <BaseButton text="see more" />
      </Link>
    </div>
  );
};
