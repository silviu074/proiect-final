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
              Home
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/about" exact>
              About
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/services" exact>
              Services
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/flights" exact>
              Flights
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/housing" exact>
              Housing
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/promotion" exact>
              Special Offers
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
