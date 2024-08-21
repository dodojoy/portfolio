interface NavTextGroupProps {
  children: React.ReactNode;
}

export const NavTextGroup: React.FC<NavTextGroupProps> = ({ children }) => {
  return (
    <ul className=" flex flex-col items-center md:flex-row gap-[30px] lg:gap-[32px]">
      {children}
    </ul>
  );
};
