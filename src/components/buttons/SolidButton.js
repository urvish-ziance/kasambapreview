import React from 'react'
import classes from "./Button.module.css";


function SolidButton({type, title, onClick=()=>{}}) {
  return (
    <button className={[classes.button, classes.solid].join(' ')} type={type} onClick={onClick}>{title}</button>
  )
}

export default SolidButton