import React from 'react';
import Button from '../../../UI/Button/Button';
import classes from "./Nav.module.scss"

const Nav = ( {isMenu, menuToggle, handleLogoutClick, handleCreate}) => {
  return <nav className={isMenu ? classes.menu__nav : classes.nav}>
    <ul>
      <li onClick={menuToggle}>
        <a href="/">Itineraries</a>
      </li>
      <li onClick={menuToggle}>
        <button className={classes.logoutbutton} onClick={handleLogoutClick} href="">Logout</button>
      </li>
    </ul>
    <Button className={classes.create} onClick={handleCreate}>Create</Button>

  </nav>;
};

export default Nav;
