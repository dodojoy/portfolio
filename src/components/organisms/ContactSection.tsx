import { ContactItem } from "../atoms/ContactItem";
import { SectionTitle } from "../atoms/SectionTitle";

export const ContactSection = () => {
  const contacts = [
    {
      img: "/icons/email.svg",
      text: "joyce.mbt@gmail.com",
      href: "mailto:joyce.mbt@gmail.com",
    },
    {
      img: "/icons/github.svg",
      text: "/dodojoy",
      href: "https://github.com/dodojoy",
    },
    {
      img: "/icons/linkedin.svg",
      text: "/joyce-teodoro",
      href: "https://www.linkedin.com/in/joyce-teodoro/",
    },
  ];
  return (
    <section id="contact" className="container mx-auto flex flex-col justify-center items-center w-full py-[50px] md:py-[80px] px-[20px] gap-[30px] gap-[80px]">
      <SectionTitle text="Contact" />
      <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[80px]">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.text}
            href={contact.href}
            src={contact.img}
            text={contact.text}
          />
        ))}
      </div>
    </section>
  );
};
