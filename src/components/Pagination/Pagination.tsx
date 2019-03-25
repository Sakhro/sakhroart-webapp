import { NextFunctionComponent } from "next";
import React from "react";

import c from "./Pagination.scss";

const renderItem = (active) => (index) => (
  <li
    key={index}
    className={active === index ? c.active : null}
  />
);

interface IProps {
  active: string;
  data: any[];
}

export const Pagination: NextFunctionComponent<IProps> = ({ active, data }) => (
  <section className={c.container}>
    <ul>
      {data.map(renderItem(active))}
    </ul>
  </section>
);
