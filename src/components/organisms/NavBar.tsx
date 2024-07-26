"use client";

import { useWindowSize } from "usehooks-ts";
import { NavText } from "../atoms/NavText";
import { NavTextGroup } from "../molecules/NavTextGroup";
import { ProfileImg } from "../atoms/ProfileImg";
import { useState, useEffect } from "react";
import { MenuBtn } from "../atoms/MenuBtn";

interface NavBarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const { width } = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = width <= 768;

  const handleMenuOnClick = () => setIsMenuOpen(!isMenuOpen);

  if (!isClient) {
    return null;
  }

  return (
    <nav
      className={`flex w-full ${
        isMenuOpen
          ? "flex-col h-full justify-center items-center relative"
          : "justify-between"
      }`}
    >
      <div className="flex gap-[32px] items-center">
        {!isMenuOpen && <ProfileImg />}
        {!isMobile && <NavText text="joyce teodoro" />}
      </div>
      {isMobile && <MenuBtn onClick={handleMenuOnClick} isOpen={isMenuOpen} />}
      {(isMenuOpen || !isMobile) && (
        <NavTextGroup>
          {["home", "about", "projects", "contact"].map((item, index) => (
            <NavText text={item} key={index} listItem />
          ))}
        </NavTextGroup>
      )}
    </nav>
  );
};
