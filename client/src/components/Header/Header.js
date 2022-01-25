import React from 'react';
import classes from "./Header.module.scss"

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
      <Logo />
      <Nav />
      <div className={classes.header__menu}>
        <div className={classes.header__menu__toggle}>
          {menuToggle}
        </div>
        <aside className={'${classes.menu} ${menuOpen && classes.show}'}>
          
        </aside>
      </div>
    </header>
  )
};

export default Header;
