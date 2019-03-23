import { debounce } from "debounce";
import { NextFunctionComponent } from "next";
import React, { Fragment, useEffect, useState } from "react";

import { LanguageSwitcher } from 'components'

import c from "./HomePage.scss";

import homeImgLg from "static/images/home/home-lg.jpg";
import homeImgXl from "static/images/home/home-xl.jpg";
import homeImgXs from "static/images/home/home-xs.jpg";

interface IProps {
  lng: string;
  t: (key: string) => string;
}

const updateDimensions = (setImgSrc) => () => {
  const windowWidth = window.innerWidth;

  const isXS = windowWidth < 500;
  const isLG = windowWidth < 992 && windowWidth > 500;

  switch (true) {
    case isXS:
      setImgSrc(homeImgXs);

      break;
    case isLG:
      setImgSrc(homeImgLg);

      break;
    default:
      setImgSrc(homeImgXl);
  }
};

const getText = (key, lng, t) => {
  const isEN = lng === "en";

  switch (key) {
    case "cult":
      return isEN
        ? t("olesya")
        : t("cult");
    case "bags":
      return isEN
        ? t("sakhro")
        : t("bags");
    case "olesya":
      return isEN
        ? t("cult")
        : t("olesya");
    case "sakhro":
      return isEN
        ? t("bags")
        : t("sakhro");
    default:
      return;
  }
};

export const HomePageBase: NextFunctionComponent<IProps> = ({
  t, lng,
}) => {
  const [imgSrc, setImgSrc] = useState(homeImgXl);

  useEffect(() => {
    updateDimensions(setImgSrc)();

    window.onresize = debounce(updateDimensions(setImgSrc), 500);

    return () => {
      (window.onresize as any).clear();
    };
  }, []);

  return (
    <Fragment>
      <img
        className={c.bg}
        src={imgSrc}
      />

      <LanguageSwitcher lng={lng} />

      <section>
        <div className={c.firstRow}>
          <div className={c.firstColumn}>
            {getText("cult", lng, t)}
          </div>

          <div className={c.secondColumn}>
            {getText("bags", lng, t)}
          </div>
        </div>

        <div className={c.secondRow}>
          <div className={c.firstColumn}>
            {/* Від */}
          </div>

          <div className={c.secondColumn}>
            {getText("olesya", lng, t)}
          </div>
        </div>

        <div className={c.thirdRow}>
          <div className={c.firstColumn} />

          <div className={c.secondColumn}>
            {getText("sakhro", lng, t)}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
