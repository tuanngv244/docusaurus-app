import React, { type ReactNode } from "react";
import Navbar from "@theme-original/Navbar";
import type NavbarType from "@theme/Navbar";
import type { WrapperProps } from "@docusaurus/types";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import NavbarItem from "@theme/NavbarItem";
import ColorModeToggle from "@theme/ColorModeToggle";
import { useColorMode } from "@docusaurus/theme-common";

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): ReactNode {
  const {
    siteConfig: {
      themeConfig: { navbar },
    },
  } = useDocusaurusContext() as any;
  const { colorMode, setColorMode } = useColorMode();

  const logo = navbar.logo;

  console.log("logo", logo);

  return (
    // <div className="container">
    //   <Navbar
    //     logo={{
    //       src: "img/logo.svg",
    //     }}
    //     {...props}
    //   />
    // </div>
    <header className="header navbar ">
      <div className="wrap container">
        <div className="navbar__inner">
          <div className="navbar__brand">
            <a href="/">
              <img
                className="navbar__logo"
                src={logo.src}
                alt={logo.alt}
                height="32"
              />
            </a>
          </div>
          <div className="navbar__items">
            {(navbar.items || []).map((item, i) => (
              <NavbarItem {...item} key={i} />
            ))}
            <ColorModeToggle
              value={colorMode}
              className="margin-left--sm"
              onChange={(ev) => {
                setColorMode(ev);
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
