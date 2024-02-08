import React from 'react'
import "./contact.css";
import { Link } from 'react-router-dom';
import Accordion from '../../components/Accordion/Accordion';

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

          <form action="" className="form">
            <div className="from-group">
              <div className="input-section">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="input-section">
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone Number" />
              </div>
            </div>

            <div className="service">
              <h3 className="text-service">Why are you contacting us?</h3>

              <div className="services-container">
                <div className="service-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Web Design
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Mobile App Design
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                     Collaboration
                    </label>
                  </div>
                </div>

                <div className="service-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Web Development
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                     Mobile App Development
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Others
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <textarea id="message" className="messagebox" rows="10" placeholder="Your Message here..."></textarea>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>

        <div className="accordion">
          <Accordion />
        </div>
      </div>
    </>
  );
}

export default Contact