import cn from "classnames";
import { NextFunctionComponent } from "next";
import React, { useState } from "react";

import { Card, Pagination } from "components";
import { MainLayout } from "layouts";
import { useSetTitlePosition } from "services/hooks";

import { BAGS_DATA, BAGS_KEYS } from "constants/data";
import { getMeta } from "services/helpers";

import { homeXl } from "static/images/home";

import c from "./BagsPage.scss";

interface IProps {
  meta: IMeta;
  t: TranslateFuncType;
}

const getLink = (key: string) => ({ pathname: "/bag", query: { slug: key } });

export const Bags: NextFunctionComponent<IProps> = ({ t }) => {
  const [active, setActive] = useState("asteria");
  const fixedTitle: boolean = useSetTitlePosition();

  return (
    <MainLayout meta={getMeta(t, homeXl)}>
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
              link={getLink(key)}
              offset={100}
              itemKey={key}
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
