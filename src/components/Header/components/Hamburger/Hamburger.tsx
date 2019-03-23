import cn from "classnames";
import { NextFunctionComponent } from "next";
import React from "react";

import c from "./Hamburger.scss";

interface IProps {
  className: string;
  isHome: boolean;
  onClick: () => void;
}

export const Hamburger: NextFunctionComponent<IProps> = ({
  className, onClick, isHome,
}) => (
    <button
      className={cn(c.container, className)}
      onClick={onClick}
    >
      <div className={cn(c.topBar, { [c.white]: isHome })} />
      <div className={cn(c.middleBar, { [c.white]: isHome })} />
      <div className={cn(c.bottomBar, { [c.white]: isHome })} />
    </button>
  );
