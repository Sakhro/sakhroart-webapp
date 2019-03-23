import cn from "classnames";
import React, { Fragment } from "react";

import { NextFunctionComponent } from "next";
import c from "./HorizontalXS.scss";

interface IProps {
  primary: boolean;
}

export const HorizontalXS: NextFunctionComponent<IProps> = ({ primary }) => (
  <Fragment>
    {/* <div className={cn(c.hFirst, primary && c.primary)} /> */}
    <div className={cn(c.hSecond, { [c.primary]: primary })} />
    <div className={cn(c.hThird, { [c.primary]: primary })} />
    <div className={cn(c.hFourth, { [c.primary]: primary })} />
    <div className={cn(c.vFirst, { [c.primary]: primary })} />
    <div className={cn(c.circle, { [c.primary]: primary })} />
  </Fragment>
);
