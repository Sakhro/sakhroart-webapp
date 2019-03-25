
import cn from "classnames";
import { NextFunctionComponent } from "next";
import React from "react";

import { MainLayout } from "layouts";
import { useSetTitlePosition } from "services/hooks";

import { getMeta } from "services/helpers";
import { kenzo, olesyaSakhro } from "static/images/history";

import c from "./HistoryPage.scss";

interface IProps {
  t: TranslateFuncType;
}

export const History: NextFunctionComponent<IProps> = ({ t }) => {
  const fixedTitle = useSetTitlePosition();

  return (
    <MainLayout meta={getMeta(t, olesyaSakhro)}>
      <article className={c.container}>
        <header className={cn(c.header, { [c.fixTitle]: fixedTitle })}>
          <h1 className={c.title}>
            {t("title")}
          </h1>
        </header>

        <div className={c.content}>

          <img
            className={c.img}
            src={kenzo}
          />

          <h2 className={c.subtitle}>
            {t("subtitle")}
          </h2>

          <p className={c.parag}>
            {t("parag1")}
          </p>

          <p className={c.parag}>
            {t("parag2")}
          </p>

          <p className={c.parag}>
            {t("parag3")}
          </p>

          <img
            className={c.img}
            src={olesyaSakhro}
          />

          <p className={c.parag}>
            {t("parag4")}
          </p>

          <p className={c.parag}>
            {t("parag5")}
          </p>

          <p className={c.parag}>
            {t("parag6")}
          </p>

          <p className={c.parag}>
            {t("parag7")}
          </p>
        </div>
      </article>
    </MainLayout>
  );
};
