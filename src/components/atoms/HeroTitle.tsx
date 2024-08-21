import { TextProps } from "@/types";

export const HeroTitle: React.FC<TextProps> = ({ text }) => {
  return (
    <h1 className="text-[50px] md:text-[70px] uppercase text-center">{text}</h1>
  );
};
