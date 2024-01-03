import React from 'react'
import "./next.css";

const Carosul = () => {
  return (
    <>
        <div className="carosul">
            <span className="carosulNun">
             37 Total Reviews
            </span>
            <div className="nextCarosul">
                <img src="./images/backward.png" alt="" className="next" />
                <img src="./images/forward.png" alt="" className="next" />
            </div>
        </div>
    </>
  )
}

export default Carosul