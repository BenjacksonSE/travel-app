import classes from "./Button.module.scss"
import React from 'react';

const Button = ({outline, children, onClick}) => {

  // http://localhost:3000/mymaps
  function handleCreate(e) {
    e.preventDefault();
    fetch("/mymaps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Untitled Trip",
      }),
    }).then((r) => {
      if (r.ok) {
        console.log("Created");
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }

  return <button className={`${classes.button} ${outline ? classes.outline : ""}`} onClick={handleCreate}>
    {children}
  </button>;
};

export default Button;
