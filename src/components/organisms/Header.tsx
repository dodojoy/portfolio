"use client";

import { useState } from "react";
import { NavBar } from "./NavBar";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header
      className={`${
        isMenuOpen
          ? "fixed top-0 left-0 w-full h-screen z-50 flex flex-col bg-bg-white"
          : "h-[10vh] md:h-[8vh]"
      } flex justify-center p-[20px] sm:p-[30px]`}
    >
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};
