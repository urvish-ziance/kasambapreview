import React from "react";
import OutlineButton from "../../components/buttons/OutlineButton";
import SolidButton from "../../components/buttons/SolidButton";

import classes from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={classes.fullPage}>
      <div className={classes.headings}>
        <h3>Welcome to Lorem</h3>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit dolore magna aliqua
        </h1>
        <h5>Excepteur sint occaecat cupidatat non proident</h5>
      </div>

      <div className={classes.buttonGroup}>
        <OutlineButton title="Learn More" />
        <SolidButton title="Get Started" type=""/>
      </div>

      <div className={classes.linearGradient} />
    </div>
  );
}

export default LandingPage;
