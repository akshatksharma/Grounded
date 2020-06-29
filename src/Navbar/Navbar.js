import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let content = (
    <div id="header" className="headerbar bold">
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
    </div>
  );

  return content;
};

export default React.memo(Navbar);
