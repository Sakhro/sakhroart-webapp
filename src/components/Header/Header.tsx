import { NextFunctionComponent } from "next";
import React from "react";

import { Hamburger } from "./components";

import c from "./Header.scss";

interface IProps {
  isHome: boolean;
  toggleNav: () => void;
}

export const Header: NextFunctionComponent<IProps> = ({
  toggleNav, isHome,
}) => (
    <header className={c.container}>
      <Hamburger
        className={c.hamburger}
        onClick={toggleNav}
        isHome={isHome}
      />
    </header>
  );
