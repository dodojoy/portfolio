import { TextProps } from "@/types";

export const SectionTitle: React.FC<TextProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-[30px] md:text-[30px] uppercase">{text}</h2>
      <div className="bg-primary w-[80%] h-[5px] mt-[-5px]"></div>
    </div>
  );
};
