import { debounce } from "debounce";
import { NextFunctionComponent } from "next";
import React, { useEffect, useState } from "react";

import { LanguageSwitcher } from "components";
import { MainLayout } from "layouts";
import { getMeta } from "services/helpers";

import c from "./HomePage.scss";

import { homeLG, homeXl, homeXS } from "static/images/home";

interface IProps {
  lng: "ua" | "en";
  t: TranslateFuncType;
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

export const Home: NextFunctionComponent<IProps> = ({
  t, lng,
}) => {
  const [imgSrc, setImgSrc] = useState(homeXl);

  useEffect(() => {
    updateDimensions(setImgSrc)();

    window.onresize = debounce(updateDimensions(setImgSrc), 500);

    return () => {
      (window.onresize as any).clear();
    };
  }, []);

  return (
    <MainLayout meta={getMeta(t, homeXl)}>
      <img
        className={c.bg}
        src={imgSrc}
      />

      <LanguageSwitcher lng={lng} absolute={true} />

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
