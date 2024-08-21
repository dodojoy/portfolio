import { TextProps } from "@/types";

export const HeroSubtitle: React.FC<TextProps> = ({ text }) => {
  return <p className="text-[20px] md:text-[25px] text-center  ">{text}</p>;
};
