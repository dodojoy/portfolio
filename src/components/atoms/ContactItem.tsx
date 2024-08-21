import Link from "next/link";

interface ContactItemProps {
  src: string;
  text: string;
  href: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  src,
  text,
  href,
}) => {
  return (
    <Link className="flex gap-[10px] items-center" href={href} target="_blank">
      <img
        src={src}
        alt="contact icon"
        className="w-[30px] lg:w-[50px] h-auto"
      />
      <p className="text-[15px] lg:text-[20px]">{text}</p>
    </Link>
  );
};
