import React from 'react';
import { NextFunctionComponent } from 'next';
import cn from 'classnames';
import { i18n } from "server/i18n";

import UaFlag from "static/icons/ua.svg";
import EnFlag from "static/icons/en.svg";

import c from './LanguageSwitcher.scss'

interface IProps {
  lng: "ua" | "en"
}

const changeLanguage = (lng: string) => () => i18n.changeLanguage(lng);

export const LanguageSwitcher: NextFunctionComponent<IProps> = ({ lng }) => (
  <div className={c.container}>
    <UaFlag
      className={cn(c.lng, { [c.active]: lng === 'ua' })}
      onClick={changeLanguage("ua")}
    />
    <EnFlag
      className={cn(c.lng, { [c.active]: lng === 'en' })}
      onClick={changeLanguage("en")}
    />
  </div>
)