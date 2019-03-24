import { debounce } from "debounce";
import { NextFunctionComponent } from "next";
import React, { useEffect, useState } from "react";

import { LanguageSwitcher } from "components";
import { MainLayout } from "layouts";

import c from "./HomePage.scss";

import { homeLG, homeXl, homeXS } from "static/images/home";

interface IProps {
  lng: string;
  meta: IMeta;
  t: (key: string) => string;
}

const updateDimensions = (setImgSrc) => () => {
  const windowWidth = window.innerWidth;

  const isXS = windowWidth < 500;
  const isLG = windowWidth < 992 && windowWidth > 500;

  switch (true) {
    case isXS:
      setImgSrc(homeXS);

      break;
    case isLG:
      setImgSrc(homeLG);

      break;
    default:
      setImgSrc(homeXl);
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
  t, lng, meta,
}) => {
  const [imgSrc, setImgSrc] = useState(homeLG);

  useEffect(() => {
    updateDimensions(setImgSrc)();

    window.onresize = debounce(updateDimensions(setImgSrc), 500);

    return () => {
      (window.onresize as any).clear();
    };
  }, []);

  return (
    <MainLayout meta={meta}>
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
    </MainLayout>
  );
};
