import cn from "classnames";
import { NextFunctionComponent } from "next";
import React from "react";
import { i18n } from "server/i18n";

import EnFlag from "static/icons/en.svg";
import UaFlag from "static/icons/ua.svg";

import c from "./LanguageSwitcher.scss";

interface IProps {
  lng: "ua" | "en";
}

const changeLanguage = (lng: string) => () => i18n.changeLanguage(lng);

export const LanguageSwitcher: NextFunctionComponent<IProps> = ({ lng }) => (
  <div className={c.container}>
    <UaFlag
      className={cn(c.lng, { [c.active]: lng === "ua" })}
      onClick={changeLanguage("ua")}
    />
    <EnFlag
      className={cn(c.lng, { [c.active]: lng === "en" })}
      onClick={changeLanguage("en")}
    />
  </div>
);
