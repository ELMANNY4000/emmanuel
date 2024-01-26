import React from "react";
import "./accordion.css";

const Accordion = () => {
  return (
    <>
      <div className="position">
        <div className="frist-container">
          <div className="accordion-container">
            <h2 className="FAQs-header">Frequently Asked Questions</h2>
            <span className="FAQs-sub">
              Here are answers to some common questions
            </span>
          </div>

          <div className="FAQ-container">
            <div className="Faq-body">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Can you work with clients remotely?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Absolutely! I have experience working with clients from
                      all around the world. Through effective communication
                      channels such as email, video calls, and project
                      management tools, I ensure seamless collaboration
                      regardless of geographical location.
                    </div>
                  </div>
                </div>
                <br />

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How long does it typically take to complete a web design project?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                    Absolutely! I have experience working with 
                    clients from all around the world. Through 
                    effective communication channels such as email, 
                    video calls, and project management tools, I ensure 
                    seamless collaboration regardless 
                    of geographical location.
                    </div>
                  </div>


     




                </div>
                <br />

                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Do you offer website maintenance services?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                    Absolutely! I have experience working with clients from 
                    all around the world. Through effective 
                    communication channels such as 
                    email, video calls, and project 
                    management tools, I 
                    ensure seamless collaboration 
                    regardless of geographical location.
                    </div>
                  </div>


     




                </div><br />


                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can you optimize my website for search engines?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                    Absolutely! I have experience working with clients from all 
                    around the world. Through effective 
                    communication channels such as 
                    email, video calls, and project management tools, I 
                    ensure seamless collaboration 
                    regardless of geographical location.
                    </div>
                  </div>


     




                </div>
                <br />
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can you integrate third-party tools or platforms into my website?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                    Absolutely! I have experience working with 
                    clients from all around the world. 
                    Through effective communication 
                    channels such as email, video calls, 
                    and project management tools, 
                    I ensure seamless collaboration 
                    regardless of geographical location.
                    </div>
                  </div>


     




                </div>

              </div>
            </div>

            <div className="question">
              <img src="./images/star1.png" alt="" className="question-star" />
              <div className="question-text">
                <h2 className="head-question">Still have any Questions ?</h2>
                <p className="ans-question">
                  Let's collaborate to create an exceptional website that sets
                  you apart from the competition. Contact me today to discuss
                  your web design needs and bring your digital vision to life!
                </p>
              </div>
              <div className="button-contact">
                <span className="contect">Contact Me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
