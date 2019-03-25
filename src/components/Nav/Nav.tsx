import cn from "classnames";
import { NextFunctionComponent } from "next";
import React from "react";
import { Link } from "server/i18n";

import { LanguageSwitcher } from 'components';

import { FB_URL, INSTAGRAM_URL } from "constants/config";

import FacebookIcon from "static/icons/facebook.svg";
import InstagramIcon from "static/icons/instagram.svg";

import c from "./Nav.scss";

interface IProps {
  show: boolean;
  lng: "ua" | "en";
  t: (key: string) => string;
  onClose: () => void;
}

const links = [
  { key: "home", href: "/", className: c.home },
  { key: "bags", href: "/bags", className: c.collections },
  { key: "history", href: "/history", className: c.history },
];

export const NavBase: NextFunctionComponent<IProps> = ({
  show, onClose, t, lng,
}) => (
    <nav className={cn(c.container, show && c.opened)}>
      <button className={c.close} onClick={onClose} />

      <ul>
        {links.map(({ key, href, className }) => (
          <li
            key={key}
            className={cn(className, { [c.opened]: show })}
          >
            <Link href={href} prefetch={true}>
              <a className={c.link} onClick={onClose}>
                {t(key)}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <footer className={cn(c.footer, { [c.opened]: show })}>
        <LanguageSwitcher lng={lng} />

        <div className={c.socials}>
          <a
            href={INSTAGRAM_URL}
            rel="noreferrer noopener"
            target="_blank"
          >
            <InstagramIcon className={c.icon} />
          </a>

          <a
            href={FB_URL}
            rel="noreferrer noopener"
            target="_blank"
          >
            <FacebookIcon className={c.icon} />
          </a>
        </div>
      </footer>
    </nav>
  );
