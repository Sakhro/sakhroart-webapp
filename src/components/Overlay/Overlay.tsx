import { NextFunctionComponent } from "next";
import React from "react";

import { HorizontalXS } from "./components";

interface IProps {
  isHome: boolean;
  navOpen: boolean;
}

export const Overlay: NextFunctionComponent<IProps> = ({
  isHome, navOpen,
}) => (
    <HorizontalXS primary={!isHome || navOpen} />
  );
