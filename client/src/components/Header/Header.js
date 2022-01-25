import React from 'react';
import classes from "./Header.module.scss"
import { Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <a href="/" className={classes.header__content__logo}>
          Travel App
        </a>
      <nav className={classes.header__content__nav}>
        <ul>
          <li>
            <a href="/new">Create</a>
          </li>
          <li>
            <p>Username</p>
          </li>
        </ul>
        <button onClick={handleLogoutClick}>Logout</button>
      </nav>
    </div>

  </header>
  )
};

export default Header;
