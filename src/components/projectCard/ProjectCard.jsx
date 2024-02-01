import React from 'react'
import "./projectCard.css";
import { Link } from 'react-router-dom';

const ProjectCard = () => {
  return (
    <>
    <div className='one'>
    <div className="projectCards">
        <h3 className='projectName'>Bonik-Ecommerice-Wbsite</h3>
        <div className="projectImages">
          <div className=''>
            <img src="./images/product.png" alt="project" className='largeproject' />
          </div>
          
          <Link to="https://bonik-ecommerice-website-eta.vercel.app/" className="navbar-button">
          <img src="./images/open-arrow.png" className="nav-images" alt="" />
            <span className="nbutton">Projects</span>
          </Link>
        </div>
      </div>

      <div className="projectCards">
        <h3 className='projectName'>Netfilx Media Streaming</h3>
        <div className="projectImages">
          <div className=''>
            <img src="./images/product2.png" alt="project" className='largeproject' />
          </div>
          
          <Link to="https://celebrated-rolypoly-9963e6.netlify.app/" className="navbar-button">
          <img src="./images/open-arrow.png" className="nav-images" alt="" />
            <span className="nbutton">Projects</span>
          </Link>
        </div>
      </div>

      <div className="projectCards">
        <h3 className='projectName'>spotify-clone</h3>
        <div className="projectImages">
          <div className=''>
            <img src="./images/product1.png" alt="project" className='largeproject' />
          </div>
          
          <Link to="https://spotify-clone-gules-chi.vercel.app/#" className="navbar-button">
          <img src="./images/open-arrow.png" className="nav-images" alt="" />
            <span className="nbutton">Projects</span>
          </Link>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default ProjectCard