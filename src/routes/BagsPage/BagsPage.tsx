import cn from "classnames";
import { NextFunctionComponent } from "next";
import React, { useState } from "react";

import { Card, Pagination } from "components";
import { MainLayout } from "layouts";
import { useSetTitlePosition } from "services/hooks";

import { BAGS_DATA, BAGS_KEYS } from "constants/data";

import c from "./BagsPage.scss";

interface IProps {
  meta: IMeta;
  t: (key: string) => string;
}

export const Bags: NextFunctionComponent<IProps> = ({ t, meta }) => {
  const [active, setActive] = useState("");
  const fixedTitle: boolean = useSetTitlePosition();

  return (
    <MainLayout meta={meta}>
      <section className={c.container}>
        <header className={cn(c.header, { [c.fixTitle]: fixedTitle })}>
          <h1 className={c.title}>
            {t("title")}
          </h1>
        </header>

        <div className={c.content}>
          {BAGS_KEYS.map((key: string) => (
            <Card
              key={key}
              link="/"
              title={t(key)}
              setActive={setActive}
              primaryImg={BAGS_DATA[key].primaryImg}
              secondaryImg={BAGS_DATA[key].secondaryImg}
            />
          ))}
        </div>

        <Pagination active={active} data={BAGS_KEYS} />
      </section>
    </MainLayout>
  );
};
