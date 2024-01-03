import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Carosul from "../../components/carosol/Carosul";
import Comments from "../../components/comments/Comments";
import Accordion from "../../components/Accordion/Accordion";




const sections = [
  { header: 'Section 1', content: 'Content for Section 1' },
  { header: 'Section 2', content: 'Content for Section 2' },
  // Add more sections as needed
];


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
              <h2 className="greeting">
                Emmanuel Ulodo Welcome’s You!
              </h2>
              <p className="hero-text">
                I am a passionate and experienced web developer, dedicated to
                creating visually stunning and <br /> highly functional
                websites. Explore my portfolio to see the power of effective
                design in action
              </p>
            </div>
            <div className="hero-buttons">
              <Link className="hero-button1">
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
                55<span className="plus">+</span>
              </span>
              <p className="cate">Completed Projects</p>
            </div>

            <div className="rate">
              <span className="rate-num">
                20<span className="plus">+</span>
              </span>
              <p className="cate">Happy Customers</p>
            </div>

            <div className="rate">
              <span className="rate-num">
                80<span className="plus">+</span>
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
              As a web developer, I possess a diverse set of skills and expertise
              to bring your web design visions to life
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
                  Customized Designs Tailored to Your Brand
                </header>
                <p className="benefits-text-details">
                  I understand the importance of creating a unique and memorable
                  brand identity. By collaborating closely with you, I ensure
                  that your website reflects your brand's personality, values,
                  and objectives. The result is a customized design that sets
                  you apart from the competition and resonates with your target
                  audience.
                </p>
              </div>

              <div className="benefits-card1">
                <header className="benefit-text-head">
                  Creative Excellence that Captivates Visitors
                </header>
                <p className="benefits-text-details">
                  With a keen eye for aesthetics and a passion for creativity, I
                  excel in designing visually stunning and engaging websites. By
                  combining beautiful visuals, captivating typography, and
                  strategic use of color, I create an immersive and impactful
                  user experience. Your website will leave a lasting impression
                  on visitors, enhancing your brand's credibility and
                  professionalism.
                </p>
              </div>
            </div>

            <div className="benefits-details-sub">
              <div className="benefits-card2">
                <header className="benefit-text-head">
                  User-Centric Approach for Optimal Experience
                </header>
                <p className="benefits-text-details">
                  I prioritize user experience (UX) design, placing your
                  visitors at the center of the design process. By conducting
                  in-depth research and employing user testing techniques, I
                  ensure that your website is intuitive, easy to navigate, and
                  seamlessly guides users towards their goals. The result is a
                  satisfying user journey that increases engagement and
                  conversions.
                </p>
              </div>

              <div className="benefits-card2">
                <header className="benefit-text-head">
                  Mobile-Friendly Designs for Broad Accessibilit
                </header>
                <p className="benefits-text-details">
                  I prioritize user experience (UX) design, placing your
                  visitors at the center of the design process. By conducting
                  in-depth research and employing user testing techniques, I
                  ensure that your website is intuitive, easy to navigate, and
                  seamlessly guides users towards their goals. The result is a
                  satisfying user journey that increases engagement and
                  conversions.
                </p>
              </div>

              <div className="benefits-card2">
                <header className="benefit-text-head">
                  Expertise in Cutting-Edge Technologies
                </header>
                <p className="benefits-text-details">
                  I prioritize user experience (UX) design, placing your
                  visitors at the center of the design process. By conducting
                  in-depth research and employing user testing techniques, I
                  ensure that your website is intuitive, easy to navigate, and
                  seamlessly guides users towards their goals. The result is a
                  satisfying user journey that increases engagement and
                  conversions.
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
              Here's what some of my satisfied clients 
              have to say about my work</p>
          </div>
          <div className="work-project">
            <ProjectCard/>
            <Link to="portfolio" className="work-button">
                <span className="wbutton">View Portfolio</span>
                <img src="./images/arrow-witch.png" className="work-images" alt="" />
            </Link>
          </div>
        </div>
      </div>
       
       <div className="client">
        <div className="clientContainer">
          <div className="client-Header">
          <h2 className="client-head">What My Clients say About Me</h2>
          <p className="client-text">Here's what some of my satisfied clients have to say about my work</p>
          </div>
          <div className="client-next">
            <Carosul/>
            <Comments/>
          </div>
        </div>
       </div>

       <div className="addition">
        <div>
          <h1>React Accordion Example</h1>
          <Accordion sections={sections} />
        </div>
       </div>
       
    </>
  );
};

export default Home;
