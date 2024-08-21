import { TextProps } from "@/types";

export const SkillTag: React.FC<TextProps> = ({ text }) => {
  return (
    <span className="text-[15px] md:text-[20px] p-[12px] md:p-[15px] md:px-[30px] bg-secondary text-center whitespace-nowrap inline-flex">
      {text}
    </span>
  );
};
