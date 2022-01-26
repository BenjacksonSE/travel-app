import React from 'react';
import Button from '../../../UI/Button/Button';
import classes from "./Nav.module.scss"

const Nav = ( {isMenu, menuToggle}) => {
  return <nav className={isMenu ? classes.menu__nav : classes.nav}>
    <ul>
      <li onClick={menuToggle}>
        <a href="/">Locations</a>
      </li>
      <li onClick={menuToggle}>
        <a href="/">Pricing</a>
      </li>
      <li onClick={menuToggle}>
        <a href="/">More</a>
      </li>
    </ul>
    <Button className={classes.create} onClick={menuToggle}>Create</Button>

  </nav>;
};

export default Nav;
