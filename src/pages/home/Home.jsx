import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import ProjectCard from "../../components/projectCard/ProjectCard";

import Comments from "../../components/comments/Comments"
import Accordion from "../../components/Accordion/Accordion";

const Home = () => {

  return (
    <>
      <div className="hero">
        <div className="hero-main-container">
          <div className="hero-sub-container">
            <div className="htexts">
              <span className="hello-container">
                <p className="hello">Hello There 🤗</p>
              </span>
              <h2 className="greeting">Emmanuel Ulodo Welcome’s You!</h2>
              <p className="hero-text">
                I am a passionate and experienced web developer, dedicated to
                creating visually stunning and <br /> highly functional
                websites. Explore my portfolio to see the power of effective
                design in action
              </p>
            </div>
            <div className="hero-buttons">
              <Link to="contact" className="hero-button1">
                <img src="./images/phone.png" className="nav-images" alt="" />
                <span className="nbutton">Book a Call</span>
              </Link>

              <Link to="portfolio" className="hero-button2">
                <span className="hbutton">View Portfolio</span>
                <img src="./images/arrow.png" className="nav-images" alt="" />
              </Link>
            </div>
          </div>

          <div className="hero-rate">
            <div className="rate">
              <span className="rate-num">
                01<span className="plus">+</span>
              </span>
              <p className="cate">Completed Projects</p>
            </div>

            <div className="rate">
              <span className="rate-num">
                01<span className="plus">+</span>
              </span>
              <p className="cate">Happy Customers</p>
            </div>

            <div className="rate">
              <span className="rate-num">
                03<span className="plus">+</span>
              </span>
              <p className="cate">Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="profile">
          <img src="./images/Container.png" alt="" />
        </div>
      </div>

      <div className="skill">
        <div className="s-first">
          <div className="skill-header">
            <h2 className="skill-head">Creative Skills</h2>
            <p className="skill-texts">
              As a web developer, I possess a diverse set of skills and
              expertise to bring your web design visions to life
            </p>
          </div>
          <div className="skill-card-container">
            <div className="skill-sub-container1">
              <div className="skill-card">
                <img src="./images/html5.png" alt="" className="skill-icons" />
                <h4 className="stext"> HyperText Markup Language</h4>
                <p className="skill-card-text">
                  HTML is much more to explore as you delve deeper into web
                  development. Understanding HTML is foundational to creating
                  well-structured and accessible web pages.
                </p>
              </div>

              <div className="skill-card">
                <img
                  src="./images/tdesign_css3.png"
                  alt=""
                  className="skill-icons"
                />
                <h4 className="stext">Cascading Style Sheets</h4>
                <p className="skill-card-text">
                  CSS There's a lot more to explore, and CSS is constantly
                  evolving with new features and capabilities. Practice and
                  experimentation are key to becoming proficient in CSS.
                </p>
              </div>

              <div className="skill-card">
                <img
                  src="./images/javascript.png"
                  alt=""
                  className="skill-icons"
                />
                <h4 className="stext">JavaScript</h4>
                <p className="skill-card-text">
                  JavaScript is a versatile language used not only in the
                  browser but also on the server side (Node.js) and in various
                  other development environments.
                </p>
              </div>
            </div>
          </div>

          <div className="skill-card-container">
            <div className="skill-sub-container1">
              <div className="skill-card">
                <img src="./images/react.png" alt="" className="skill-icons" />
                <h4 className="stext"> React.JS</h4>
                <p className="skill-card-text">
                  React has a vibrant ecosystem, and it's commonly used in
                  conjunction with other libraries and tools for state
                  management (Redux, Context API), routing (React Router), and
                  more.
                </p>
              </div>

              <div className="skill-card">
                <img src="./images/redux.png" alt="" className="skill-icons" />
                <h4 className="stext">Redux</h4>
                <p className="skill-card-text">
                  Redux but it can be used with other libraries and frameworks
                  as well. It is particularly helpful for managing the state of
                  large and complex applications.
                </p>
              </div>

              <div className="skill-card">
                <img src="./images/nextjs.png" alt="" className="skill-icons" />
                <h4 className="stext">Next.JS</h4>
                <p className="skill-card-text">
                  Next.js is widely used for building modern, scalable web
                  applications and is a popular choice in the React ecosystem.
                  Its flexibility and powerful features make it suitable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="benefits">
        <div className="benefits-container">
          <div className="benefits-header">
            <h2 className="benefits-head">Benefits</h2>
            <p className="btext">
              By choosing my web development service, you'll enjoy the following
              benefits
            </p>
          </div>

          <div className="benefits-details">
            <div className="benefits-details-sub">
              <div className="benefits-card1">
                <header className="benefit-text-head">
                  Crafting Unique Designs Aligned with Your Brand
                </header>
                <p className="benefits-text-details">
                  Recognizing the significance of a distinctive brand identity,
                  I prioritize close collaboration with you to develop website
                  designs that authentically reflect your brand's essence,
                  values, and goals. Through this partnership, we create bespoke
                  designs that not only differentiate you from competitors but
                  also deeply resonate with your intended audience.
                </p>
              </div>

              <div className="benefits-card1">
                <header className="benefit-text-head">
                  Achieving Creative Brilliance to Engage Users
                </header>
                <p className="benefits-text-details">
                  Leveraging my acute sense of aesthetics and fervor for
                  creativity, I specialize in crafting visually striking and
                  compelling websites. Through the harmonious integration of
                  captivating visuals, dynamic typography, and strategic color
                  schemes, I construct an user experience that captivates
                  visitors. Your website will not only make a memorable
                  impression but also elevate your brand's credibility and
                  convey professionalism.
                </p>
              </div>
            </div>

            <div className="benefits-details-sub">
              <div className="benefits-card2">
                <header className="benefit-text-head">
                  Focused on User-Centric Design Principles
                </header>
                <p className="benefits-text-details">
                  Embracing a user-centric approach, I center the design process
                  around your visitors' needs and preferences. Through thorough
                  research and rigorous user testing methodologies, I guarantee
                  that your website is intuitively structured, effortlessly
                  navigable, and effectively directs users towards their
                  objectives. The outcome is a gratifying user experience that
                  enhances engagement and boosts conversion rates.
                </p>
              </div>

              <div className="benefits-card2">
                <header className="benefit-text-head">
                  Optimized for Mobile Accessibility
                </header>
                <p className="benefits-text-details">
                  In an era where users expect instant access to information on
                  the go, investing in a mobile-friendly website is paramount
                  for staying competitive in your industry. With my expertise, I
                  can help you achieve just that, ensuring that your website
                  remains relevant and accessible to your target audience,
                  regardless of their device preferences. Let's collaborate to
                  create a mobile-friendly design that elevates your online
                  presence and drives meaningful interactions with your
                  audience.
                </p>
              </div>

              <div className="benefits-card2">
                <header className="benefit-text-head">
                  Expertise in Cutting-Edge Technologies
                </header>
                <p className="benefits-text-details">
                  Through continuous learning and exploration of emerging
                  technologies, I stay abreast of the latest advancements in the
                  field of web development. This enables me to incorporate
                  innovative features and functionalities into your website,
                  providing users with a dynamic and immersive browsing
                  experience. From responsive layouts to cross-browser
                  compatibility, I implement robust solutions that enhance
                  usability and accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="works">
        <div className="workLarge-container">
          <div className="work-header">
            <h2 className="work-head">My Works</h2>
            <p className="headp">
              Here's what some of my satisfied clients have to say about my work
            </p>
          </div>
          <div className="work-project">
            <ProjectCard />
            <Link to="portfolio" className="work-button">
              <span className="wbutton">View Portfolio</span>
              <img
                src="./images/arrow-witch.png"
                className="work-images"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="client">
        <div className="clientContainer">
          <div className="client-Header">
            <h2 className="client-head">What My Clients say About Me</h2>
            <p className="client-text">
              Here's what some of my satisfied clients have to say about my work
            </p>
          </div>
          <div className="client-next">
            
            <Comments />
          </div>
        </div>
      </div>

      <div className="accordion">
        <Accordion />
      </div>
    </>
  );
};

export default Home;
