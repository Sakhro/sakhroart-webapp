import { debounce } from "debounce";
import { NextFunctionComponent } from "next";
import React, { Fragment, useEffect, useState } from "react";

import c from "./HomePage.scss";

import homeImgLg from "static/images/home/home-lg.jpg";
import homeImgXl from "static/images/home/home-xl.jpg";
import homeImgXs from "static/images/home/home-xs.jpg";

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

export const HomePageBase: NextFunctionComponent = () => {
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
      <section>
        <div className={c.firstRow}>
          <div className={c.firstColumn}>
            Культові
          </div>

          <div className={c.secondColumn}>
            Сумки
          </div>
        </div>

        <div className={c.secondRow}>
          <div className={c.firstColumn}>
            {/* Від */}
          </div>

          <div className={c.secondColumn}>
            Олесі
          </div>
        </div>

        <div className={c.thirdRow}>
          <div className={c.firstColumn} />

          <div className={c.secondColumn}>
            Сахро
          </div>
        </div>
      </section>
    </Fragment>
  );
};
