interface NavTextProps {
  text: string;
  listItem?: boolean;
}

export const NavText: React.FC<NavTextProps> = ({ text, listItem }) => {
  const style = "text-2xl uppercase list-none cursor-pointer";
  return (
    <>
      {listItem && <li className={style}>{text}</li>}
      {!listItem && <p className={style}>{text}</p>}
    </>
  );
};
