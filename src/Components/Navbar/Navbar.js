import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        RO Travel
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContet"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ color: "white" }}
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-tachometer-alt"></i>Home
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/about" exact>
              <i className="fas fa-address-book"></i>About
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/services" exact>
              <i className="fas fa-tachometer-alt"></i>Services
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/promotion" exact>
              <i className="fas fa-tachometer-alt"></i>Promotion
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/subscription" exact>
              <i className="fas fa-tachometer-alt"></i>Subscribe
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
