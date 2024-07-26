"use client";

import { useState } from "react";
import { NavBar } from "./NavBar";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header
      className={`${
        isMenuOpen
          ? "absolute top-0 left-0 w-full h-screen z-50 flex flex-col"
          : ""
      }`}
    >
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};
