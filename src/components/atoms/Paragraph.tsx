import { TextProps } from "@/types";

export const Paragraph: React.FC<TextProps> = ({ text }) => {
  return <p className="text-[17px] md:text-[20px]">{text}</p>;
};
