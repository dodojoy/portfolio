interface NavTextProps {
  text: string;
  listItem?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const NavText: React.FC<NavTextProps> = ({
  text,
  listItem,
  onClick,
}) => {
  const style =
    "relative text-lg uppercase list-none cursor-pointer transition-colors duration-300 hover:text-primary group";
  return (
    <>
      {listItem && (
        <li className={style} onClick={onClick}>
          <span>{text}</span>
          <span className="pointer-events-none absolute left-0 -bottom-1 h-[3px] w-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </li>
      )}
      {!listItem && (
        <p className={style}>
          <span>{text}</span>
          <span className="pointer-events-none absolute left-0 -bottom-1 h-[3px] w-full bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        </p>
      )}
    </>
  );
};
