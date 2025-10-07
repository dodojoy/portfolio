import { TextProps } from "@/types";

export const SectionTitle: React.FC<TextProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center group">
      <h2 className="text-[30px] md:text-[30px] uppercase">{text}</h2>
      <div className="bg-primary w-[80%] h-[5px] mt-[-5px] origin-center scale-x-50 group-hover:scale-x-100 transition-transform duration-500 ease-out transform"></div>
    </div>
  );
};
