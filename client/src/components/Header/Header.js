import React from 'react';
import classes from "./Header.module.scss"

const Header = () => {
  return <header className={classes.header}>
            <div className={classes.header__content}>
                <a href="/" className={classes.header__content__logo}>
                    Travel App
                </a>
      <nav className={classes.header__content__nav}>
        <ul>
          <li>
            <p href="/">Username</p>
          </li>
        </ul>
        <button>Logout</button>
      </nav>
    </div>

  </header>;
};

export default Header;
