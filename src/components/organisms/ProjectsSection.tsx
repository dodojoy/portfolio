import { BaseButton } from "../atoms/BaseButton";
import { Divider } from "../atoms/Divider";
import { SectionTitle } from "../atoms/SectionTitle";
import { Project } from "../molecules/Project";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "REBU",
      img: "rebu.svg",
      href: "https://github.com/dodojoy/SAP008-social-network",
      firstParagraph:
        "Rebu is a social network designed for lesbian women, enabling them to share experiences, stories, and interests, to connect and form new bonds.",
      secondParagraph:
        "Rebu was created as a creative and technological solution to the lack of inclusive spaces that are specifically made and designed for lesbian women. The goal behind this project is to provide a safe, welcoming, and affirming online space where these women can connect and interact.",
    },
    {
      title: "BURGER QUEEN",
      img: "burgerqueen.svg",
      href: "https://github.com/dodojoy/SAP008-burger-queen-api-client",
      firstParagraph:
        "Burger Queen is a small burger restaurant that is growing and needs an interface to take orders using a tablet and send them to the kitchen so they can be prepared in an organized and efficient manner.",
      secondParagraph:
        "The interface should display the two menus (breakfast and the rest of the day), each with all its products. The user should be able to select which products to add, and the interface should show a summary of the order with the total cost.",
    },
  ];

  return (
    <section
      id="projects"
      className="flex items-center justify-center bg-secondary w-full py-[50px] lg:py-[70px] px-[20px]"
    >
      <div className="container flex flex-col gap-[50px] lg:gap-[80px] items-center justify-center bg-secondary w-full">
        <SectionTitle text="projects" />
        <div className="flex flex-col gap-[50px] lg:gap-[80px] items-center justify-center">
          {projects.map((project, index) => (
            <>
              <Project
                key={project.title}
                title={project.title}
                firstParagraph={project.firstParagraph}
                secondParagraph={project.secondParagraph}
                src={project.img}
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
