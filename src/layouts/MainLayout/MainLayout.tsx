import Head from "next/head";
import React, { Fragment, useState } from "react";

import { Header, Nav, Overlay } from "components";
import { NextFunctionComponent } from "next";

interface IProps {
  meta: IMeta;
}

export const MainLayout: NextFunctionComponent<IProps> = ({
  children, meta,
}) => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState((prevState) => !prevState);
  };

  return (
    <Fragment>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.og.description} />

        {meta.og && (
          <Fragment>
            <meta property="og:title" content={meta.og.title} />
            <meta property="og:description" content={meta.og.description} />
            <meta property="og:image" content={meta.og.image} />

            <meta name="twitter:title" content={meta.og.title} />
            <meta name="twitter:description" content={meta.og.description} />
            <meta name="twitter:image" content={meta.og.image} />
          </Fragment>
        )}

      </Head>

      <Overlay
        isHome={false}
        navOpen={navState}
      />

      <Header
        isHome={false}
        toggleNav={toggleNav}
      />

      <Nav
        show={navState}
        onClose={toggleNav}
      />

      <main>
        {children}
      </main>
    </Fragment>
  );
};

MainLayout.defaultProps = {
  meta: {
    title: "Олеся Сахро | Офіційний сайт",
    description: "Культові сумки від Олесі Сахро",
  },
};
