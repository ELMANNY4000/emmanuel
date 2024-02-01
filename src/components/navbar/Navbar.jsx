import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
      <h2 className="logo">Emmanuel Ulodo.</h2>
        <div className="navbar-contanier">
          <div className="nav-category">
            <NavLink to="/" className="navlink">
              Home
            </NavLink>
            <NavLink to="about" className="navlink">
              About Me
            </NavLink>
            <NavLink to="portfolio" className="navlink">
              Portfolio
            </NavLink>
            <NavLink to="contact" className="navlink">
              Contact Me
            </NavLink>
          </div>
          <button to="" className="navbar-button">
            <img src="./images/download.png" className="nav-images" alt="" />
            <span className="nbutton">Download CV</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
