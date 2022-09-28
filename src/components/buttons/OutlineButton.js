import React from "react";
import classes from "./Button.module.css";
function OutlineButton({ type, title, fontColor="white", borderColor="white"}) {
  return (
    <button className={[classes.button, classes.outline].join(" ")} type={type} style={{color: fontColor, borderColor: borderColor}}>
      {title}
    </button>
  );
}

export default OutlineButton;
