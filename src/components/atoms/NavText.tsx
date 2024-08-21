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
  const style = "text-lg uppercase list-none cursor-pointer";
  return (
    <>
      {listItem && (
        <li className={style} onClick={onClick}>
          {text}
        </li>
      )}
      {!listItem && <p className={style}>{text}</p>}
    </>
  );
};
