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
                      How long does it typically take to complete a web design
                      project?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Overall, a web development project can take anywhere from
                      2 to 6 months or more to complete, depending on the
                      project's specific requirements and complexities.
                      Effective project management, communication, and
                      collaboration among team members are essential to ensure
                      the project stays on track and is delivered on time.
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
                      Our team of experienced professionals specializes in
                      providing proactive and reactive maintenance solutions
                      tailored to your specific needs. Whether you're a small
                      business owner, a growing startup, or a large corporation,
                      we have the expertise to keep your website running
                      smoothly. Our website maintenance services include:{" "}
                      <strong>Security Updates</strong>,
                      <strong>Content Updates</strong>,{" "}
                      <strong>Performance Optimization</strong> &&
                      <strong>Analytics and Reporting</strong>
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
                      By implementing these SEO best practices, you can improve
                      your website's visibility, attract more organic traffic,
                      and ultimately achieve better rankings in search engine
                      results. If you need further assistance or personalized
                      advice, consider consulting with an experienced SEO
                      professional or agency.
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
                      Can you integrate third-party tools or platforms into my
                      website?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Yes, we offer integration services for third-party tools
                      and platforms to enhance the functionality of your
                      website. Whether you need to integrate payment gateways,
                      analytics tools, social media plugins, or other services,
                      we can help seamlessly integrate them into your website,
                      providing additional features and capabilities to meet
                      your specific needs and requirements.
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
