import React, { useState } from "react";
import classes from "./Header.module.css";
import SolidButton from "../buttons/SolidButton";
import OutlineButton from "../buttons/OutlineButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className={classes.flex}>
      <h1 className={classes.logo}>LOGO</h1>

      <Bars3Icon className={classes.menuIcon} onClick={toggleSidebar} />
      <div className={classes.responsive}>
        <nav className={classes.navigation}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>How it works?</li>
          </ul>
        </nav>

        <div className={classes.buttonGroup}>
          <SolidButton type="" title="Sign Up" />
          <OutlineButton type="" title="Log in" />
        </div>
      </div>

      {sidebar && (
        <div className={classes.sidebarResponsive}>
          <XMarkIcon className={classes.closeIcon} onClick={toggleSidebar}/>
          <nav className={classes.sidebarNavigation}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact Us</li>
              <li>How it works?</li>
            </ul>
          </nav>

          <div className={classes.sidebarButtonGroup}>
            <SolidButton type="" title="Sign Up" />
            <OutlineButton type="" title="Log in" fontColor="black" borderColor="var(--primaryBgColor1)"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
