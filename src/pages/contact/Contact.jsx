import React from 'react'
import "./contact.css";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="top-contact">
          <img src="./images/contact.png" className="message" alt="" />

          <div className="top-head">
            <header className="contact-header">
              We’d love to here from you.
            </header>
            <div className="contact-para">
              Here's what some of my satisfied clients have to say about my work
            </div>
          </div>
          <div className="sub-selection">
            <div className="sub-item">
              <img src="./images/clock.png" alt="" className="sub-image" />
              <span className="sub-text">24 / 7 Assistance</span>
            </div>

            <div className="sub-item">
              <img src="./images/bolt.png" alt="" className="sub-image" />
              <span className="sub-text">Quick Change Resolutions</span>
            </div>

            <div className="sub-item">
              <img src="./images/sparkles.png" alt="" className="sub-image" />
              <span className="sub-text">Flexible Working hours</span>
            </div>
          </div>
        </div>

        <div className="second">
          <div className="small-container">
            <div className="small-button">
              <div className="text-small">
                <span className="text-one">You can Email Me Here</span>
                <span className="text-two">ulodoe@gmail.com</span>
              </div>
              <img src="./images/arrow.png" alt="" className="small-arrow" />
            </div>
            <div className="small-button">
              <div className="text-small">
                <span className="text-one">Give Me a Call on</span>
                <span tel="09030319295" className="text-two">
                  +234 903 031 9295
                </span>
              </div>
              <img src="./images/arrow.png" alt="" className="small-arrow" />
            </div>
            <div className="small-button">
              <div className="text-small">
                <span className="text-one">Location</span>
                <span className="text-two">Lagos,Niger</span>
              </div>
              <img src="./images/arrow.png" alt="" className="small-arrow" />
            </div>

            <div className="second-small">
              <span className="second-text">My Social Profiles</span>

              <div className="second-socail">
                <Link
                  to="https://www.linkedin.com/in/ulodo-emmanuel-7514b829a/"
                  className="ficons"
                >
                  <img src="./images/linkedin.png" alt="" />
                </Link>
                <Link
                  to="https://github.com/ELMANNY4000?tab=overview&from=2023-11-01&to=2023-11-27"
                  className="ficons"
                >
                  <img
                    src="./images/github.png"
                    alt=""
                    className="socail-icons"
                  />
                </Link>
                <Link to="https://dribbble.com/Emma001" className="ficons">
                  <img src="./images/dribbble.png" alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="large-form">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact