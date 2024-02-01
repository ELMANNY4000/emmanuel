import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <img src="./images/porfile2.png" alt="" className="about-image" />
          <div className="about-info">
            <div className="sub-title">
              <div className="title-text">
                <span className="abuot-text">
                  Welcome to the world of captivating web development!
                </span>
              </div>

              <div className="about-details">
                <h2 className="about-name">I'm Emmanuel Ulodo</h2>
                <p className="about-me">
                  As a seasoned web developer
                  and UI/UX designer, I'm driven by a fervent enthusiasm for
                  crafting captivating digital experiences. My expertise lies in
                  seamlessly blending aesthetics with functionality to deliver
                  websites that not only look remarkable but also provide
                  intuitive user interactions. With a meticulous attention to
                  detail, I thrive on transforming concepts into tangible online
                  solutions that resonate with users. From wireframing to final
                  deployment, I'm deeply committed to collaborating closely with
                  clients, ensuring that every aspect of their vision is
                  meticulously translated into a polished digital product. My
                  relentless pursuit of excellence is fueled by a desire to set
                  new standards in web design and user experience. By harnessing
                  the latest technologies and adhering to best practices, I aim
                  to create immersive online environments that leave a lasting
                  impression on visitors.
                </p>
              </div>
            </div>

            <div className="about-rate">
              <div className="ab-rate">
                <h2 className="rate-plus">
                  01<span className="infinty">+</span>
                </h2>
                <p className="type">Completed Projects</p>
              </div>

              <div className="ab-rate">
                <h2 className="rate-plus">
                  01<span className="infinty">+</span>
                </h2>
                <p className="type">Happy Customers</p>
              </div>

              <div className="ab-rate">
                <h2 className="rate-plus">
                  03<span className="infinty">+</span>
                </h2>
                <p className="type">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};


export default About;