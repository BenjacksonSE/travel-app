import React from 'react';
import {useState} from "react";
import Logo from '../../UI/Logo/Logo';
import classes from "./Header.module.scss"
import Nav from './Nav/Nav';
import {CgMenuRight, CgClose} from "react-icons/cg"

const Header = ({ user, setUser, handleCreate }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p)
  }

  const menuToggle = !menuOpen ? (
    <CgMenuRight onClick={handleMenuToggle}/>
  ) : (
    <CgClose onClick={handleMenuToggle}/>
  );

  return (
    <header className={classes.header}>
      <Logo />
      <Nav handleLogoutClick={handleLogoutClick} setUser={setUser}/>
      <div className={classes.header__menu}>
        <div className={classes.header__menu__toggle}>
          {menuToggle}
        </div>
        <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
          <Nav handleCreate={handleCreate} isMenu menuToggle={handleMenuToggle} />
        </aside>
      </div>
    </header>
  )
};

export default Header;
