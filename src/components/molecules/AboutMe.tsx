import { Paragraph } from "../atoms/Paragraph";
import { SubHeading } from "../atoms/SubHeading";

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-[40px] md:gap-[60px]">
      <SubHeading text="Know me better" />
      <div className="flex flex-col gap-[20px] md:gap-[30px]">
        <Paragraph text="I am a passionate front-end developer dedicated to crafting amazing and scalable web experiences. My ability in clear and efficient communication enables me to collaborate effectively with multidisciplinary teams, translating complex ideas into successful projects." />
        <Paragraph text="My motivation is to contribute to the industry's growth, constantly striving to enhance the usability, accessibility, and performance of the applications I develop. I thrive on tackling new challenges and am determined to drive the success of collaborative projects." />
      </div>
    </div>
  );
};
