import { NextFunctionComponent } from "next";
import React from "react";
import Swiper from "react-id-swiper";
import { Router } from "server/i18n";

import { MainLayout } from "layouts";

import { BAGS_DATA } from "constants/data";
import { getMeta } from "services/helpers";

import ArrowIcon from "static/icons/arrow-icon.svg";

import c from "./BagPage.scss";

interface IProps {
  slug: string;
  t: TranslateFuncType;
}

const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  rebuildOnUpdate: true,
  shouldSwiperUpdate: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
};

export const Bag: NextFunctionComponent<IProps> = ({ t, slug }) => (
  <MainLayout meta={getMeta(t, BAGS_DATA[slug].primaryImg)}>
    <section className={c.container}>
      <header className={c.header}>
        <h1 className={c.title}>
          {t(slug)}
        </h1>
      </header>

      <div className={c.content}>
        <Swiper {...params}>
          {BAGS_DATA[slug].imgs.map((img) => (
            <img
              key={img}
              src={img}
              className={c.img}
              alt={t("bag")}
            />
          ))}
        </Swiper>

        <div className={c.underlayer}>
          <img
            src={BAGS_DATA[slug].secondaryImg}
            className={c.underlayerImg}
            alt={t("bag")}
          />
        </div>
      </div>

      <footer className={c.footer}>
        <button
          onClick={() => Router.back()}
          className={c.backButton}
        >
          <ArrowIcon className={c.arrowIconLeft} />
          {t("bags")}
        </button>
      </footer>
    </section>
  </MainLayout>
);
