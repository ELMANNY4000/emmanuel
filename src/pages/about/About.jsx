import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <img src="./images/profile2.png" alt="" className="about-image" />
          <div className="about-info">
            <div className="sub-title">
              <div className="title-text">
                <span className="abuot-text">
                  Welcome to the world of captivating web design!
                </span>
              </div>

              <div className="about-details">
                <h2 className="about-name">I'm Jeffery Cannon</h2>
                <p className="about-me">
                  A skilled web developer with a passion for creating visually
                  stunning and user-friendly websites. With a keen eye for
                  detail and a commitment to excellence, I specialize in
                  crafting online experiences that leave a lasting impression.
                  From concept to launch, I collaborate closely with clients to
                  bring their visions to life and ensure their digital presence
                  stands out from the crowd. With my expertise and dedication, I
                  am here to help you elevate your online presence and make a
                  powerful impact in the digital landscape.
                </p>
              </div>
            </div>

            <div className="about-rate">
              <div className="ab-rate">
                <h2 className="rate-plus">
                55<span className="infinty">+</span>
                </h2>
                <p className="type">Completed Projects</p>
              </div>

              <div className="ab-rate">
                <h2 className="rate-plus">
                55<span className="infinty">+</span>
                </h2>
                <p className="type">Completed Projects</p>
              </div>

              <div className="ab-rate">
                <h2 className="rate-plus">
                55<span className="infinty">+</span>
                </h2>
                <p className="type">Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="Milestones">
          <div className="milestones-header">
            <span className="timeline-head">Milestones of My Career</span>
            <p className="sub-header">
            Lorem ipsum dolor sit amet consectetur. 
            Nisl ut neque tortor nulla 
            felis nunc. Sit ac sed sed pulvinar sit 
            purus morbi. Elit amet sed velit auctor 
            urna vitae nam ultricies massa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default About;