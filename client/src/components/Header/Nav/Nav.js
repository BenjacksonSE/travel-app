import React from 'react';
import Button from '../../../UI/Button/Button';
import classes from "./Nav.module.scss"

const Nav = ( {isMenu, menuToggle}) => {
  return <nav className={isMenu ? classes.menu__nav : classes.nav}>
    <ul>
      <li onClick={menuToggle}>
        <a href="/">Itineraries</a>
      </li>
      <li onClick={menuToggle}>
        <a href="/">Logout</a>
      </li>
    </ul>
    <Button className={classes.create} onClick={menuToggle}>Create</Button>

  </nav>;
};

export default Nav;
