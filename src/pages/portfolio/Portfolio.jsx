import React from 'react'


const Portfolio = () => {
  return (
    <>
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
    </>
  )
}

export default Portfolio