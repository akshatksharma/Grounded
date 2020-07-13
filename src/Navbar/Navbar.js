import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let content = (
    <header id="header" className="headerbar bold">
      <NavLink
        to="/"
        className="headerbar__title bold"
        activeClassName="selected headerbar__title bold"
      >
        GROUNDED
      </NavLink>
      <NavLink to="/about" activeClassName="selected">
        About
      </NavLink>
    </header>
  );

  return content;
};

export default React.memo(Navbar);
