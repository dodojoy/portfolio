"use client";

import { useWindowSize } from "usehooks-ts";
import { NavText } from "../atoms/NavText";
import { NavTextGroup } from "../molecules/NavTextGroup";
import { ProfileImg } from "../atoms/ProfileImg";
import { useState, useEffect } from "react";
import { MenuBtn } from "../atoms/MenuBtn";
import Link from "next/link";

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
  const isMobile = width <= 768;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen, setIsMenuOpen]);

  const handleMenuOnClick = () => setIsMenuOpen(!isMenuOpen);

  if (!isClient) {
    return null;
  }

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`flex w-full container ${
        isMenuOpen
          ? "flex-col h-full justify-center items-center relative"
          : "justify-between"
      } transition-all duration-300`}
    >
      <div className="flex gap-[32px] items-center">
        {!isMenuOpen && <ProfileImg />}
        {!isMobile && <NavText text="joyce teodoro" />}
      </div>
      {isMobile && <MenuBtn onClick={handleMenuOnClick} isOpen={isMenuOpen} />}
      {(isMenuOpen || !isMobile) && (
        <NavTextGroup>
          {["home", "about", "projects", "contact"].map((item) => (
            <Link href={`#${item}`} passHref key={item}>
              <NavText text={item} listItem onClick={handleLinkClick} />
            </Link>
          ))}
        </NavTextGroup>
      )}
    </nav>
  );
};
