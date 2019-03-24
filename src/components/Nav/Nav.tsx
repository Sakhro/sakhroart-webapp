import cn from "classnames";
import { NextFunctionComponent } from "next";
import React from "react";
import { Link } from "server/i18n";

import c from "./Nav.scss";

interface IProps {
  show: boolean;
  t: (key: string) => string;
  onClose: () => void;
}

const links = [
  { key: "home", href: "/", className: c.home },
  { key: "bags", href: "/bags", className: c.collections },
  { key: "history", href: "/history", className: c.history },
];

export const NavBase: NextFunctionComponent<IProps> = ({
  show, onClose, t,
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

      {/* <div className={cn(c.socials, show && c.opened)}>
      <a href="//www.instagram.com/olesya.sakhro" rel='noreferrer noopener' target="_blank">
        <i className="fab fa-instagram fa-2x"></i>
      </a>
      <a href="//web.facebook.com/olesya.sakhro" rel='noreferrer noopener' target="_blank">
        <i className="fab fa-facebook-square fa-2x"></i>
      </a>
    </div> */}
    </nav>
  );
