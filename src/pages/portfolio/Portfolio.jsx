import React from "react";
import "./portfolio.css"
import ProjectCard from "../../components/projectCard/ProjectCard";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-container">
        <div className="top-contact">
          <img src="./images/small-star.png" className="message" alt="" />

          <div className="top-head">
            <header className="contact-header">My Creative Portfolios</header>
            <div className="contact-para">
              Here's what some of my satisfied clients have to say about my work
            </div>
          </div>
          <div className="sub-selection">
            <div className="sub-item">
              <img
                src="./images/verification.png"
                alt=""
                className="sub-image"
              />
              <span className="sub-text">01+ Completed Projects</span>
            </div>

            <div className="sub-item">
              <img src="./images/Customer.png" alt="" className="sub-image" />
              <span className="sub-text">01+Happy Customers</span>
            </div>

            <div className="sub-item">
              <img src="./images/chart.svg" alt="" className="sub-image" />
              <span className="sub-text">03+ Years of Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="works">
        <div className="workLarge-container">
          
          <div className="work-project">
            <ProjectCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
