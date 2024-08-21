interface MenuBtnProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  isOpen: boolean;
}

export const MenuBtn: React.FC<MenuBtnProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer h-auto ${
        isOpen ? "self-end mt-[15px] absolute top-0 right-0" : null
      }`}
    >
      <img
        src={`/icons/${isOpen ? "close" : "hamburger"}.svg`}
        alt="menu icon"
      />
    </button>
  );
};
