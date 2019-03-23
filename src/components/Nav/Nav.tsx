import cn from "classnames";
import { NextFunctionComponent } from "next";
import Link from "next/link";
import React from "react";

import c from "./Nav.scss";

interface IProps {
  show: boolean
  onClose: () => void
}

const links = [
  { label: "Головна", href: "/", className: c.home },
  { label: "Колекції", href: "/collections", className: c.collections },
  { label: "Історія", href: "/history", className: c.history },
]

export const Nav: NextFunctionComponent<IProps> = ({ show, onClose }) => (
  <nav className={cn(c.container, show && c.opened)}>
    <button className={c.close} onClick={onClose} />

    <ul>
      {links.map(({ label, href, className }) => (
        <li className={cn(className, { [c.opened]: show })}>
          <Link href={href}>
            <a className={c.link} onClick={onClose}>
              {label}
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
