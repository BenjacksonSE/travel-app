import classes from "./Button.module.scss"
import React from 'react';

const Button = ({outline, children, onClick}) => {
  return <button className={`${classes.button} ${outline ? classes.outline : ""}`} onClick={onClick}>
    {children}
  </button>;
};

export default Button;
