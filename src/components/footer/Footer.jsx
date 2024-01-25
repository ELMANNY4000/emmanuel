import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-contanier1">
          <h2 className="logo">Emmanuel Ulodo.</h2>
          <div className="foot-category">
            <Link to="/" className="footlink">
              Home
            </Link>
            <Link to="about" className="footlink">
              About Me
            </Link>
            <Link to="portfolio" className="footlink">
              Portfolio
            </Link>
            <Link to="contact" className="footlink">
              Contact Me
            </Link>
          </div>
          <div className="foot-icons">
            <Link
              to="https://www.linkedin.com/in/ulodo-emmanuel-7514b829a/"
              className="ficons"
            >
              <img src="./images/linkedin.png" alt="" />
            </Link>
            <Link to="https://github.com/ELMANNY4000?tab=overview&from=2023-11-01&to=2023-11-27" className="ficons">
              <img src="./images/github.png" alt="" className="socail-icons" />
            </Link>
            <Link to="https://dribbble.com/Emma001" className="ficons">
              <img src="./images/dribbble.png" alt="" />
            </Link>
          </div>
        </div>

        <div className="footer-contanier2">
          <div className="talks">
            <img className="foot-img" src="./images/mail.png" alt="" />
            <span className="talk-text">ulodoe@gmail.com</span>
          </div>

          <div className="f-line"></div>

          <div className="talks">
            <img className="foot-img" src="./images/phone1.png" alt="" />
            <span className="talk-text">09030319295</span>
          </div>

          <div className="f-line"></div>

          <div className="talks">
            <img className="foot-img" src="./images/location.png" alt="" />
            <span className="talk-text">Lagos,Nigeria</span>
          </div>
        </div>
        <p className="copy">
          Copyright © 2023 Jeffery Cannon. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
