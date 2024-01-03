import React from "react";
import "./accordion.css"


const Accordion = () => {


  // Get all the faq questions
const faqQuestions = document.querySelectorAll(".faq-question");

// Loop through each question
faqQuestions.forEach(faqQuestion => {
  // Add a click event listener to each question
  faqQuestion.addEventListener("click", () => {
    // Toggle the active class to the question
    faqQuestion.classList.toggle("active");
    // Get the answer element of the question
    const faqAnswer = faqQuestion.nextElementSibling;
    // Toggle the show class to the answer
    faqAnswer.classList.toggle("show");
  });
});


  return (
    <div>
      <div className="faq">
        <h1>FAQ</h1>
        <div className="faq-item">
          <h2 className="faq-question">Can you work with clients remotely?</h2>
          <p className="faq-answer">
            Absolutely! I have experience working with clients from all around
            the world. Through effective communication channels such as email,
            video calls, and project management tools, I ensure seamless
            collaboration regardless of geographical location.
          </p>
        </div>
        <div className="faq-item">
          <h2 className="faq-question">
            How long does it typically take to complete a web design project?
          </h2>
          <p className="faq-answer">
            The duration of a web design project depends on the scope and
            complexity of the requirements. However, I usually aim to deliver
            the final product within 4 to 6 weeks from the start date.
          </p>
        </div>
        <div className="faq-item">
          <h2 className="faq-question">
            Do you offer website maintenance services?
          </h2>
          <p className="faq-answer">
            Yes, I do. I can provide ongoing support and maintenance for your
            website, such as updating content, fixing bugs, adding features, and
            improving performance.
          </p>
        </div>
        <div className="faq-item">
          <h2 className="faq-question">
            Can you optimize my website for search engines?
          </h2>
          <p className="faq-answer">
            Yes, I can. I follow the best practices of SEO (Search Engine
            Optimization) to ensure that your website ranks well on Google and
            other search engines. I can also help you with keyword research,
            content creation, and analytics.
          </p>
        </div>
        <div className="faq-item">
          <h2 className="faq-question">
            Can you integrate third-party tools or platforms into my website?
          </h2>
          <p className="faq-answer">
            Yes, I can. I have experience working with various tools and
            platforms, such as WordPress, Shopify, Mailchimp, Stripe, PayPal,
            and more. I can integrate them into your website seamlessly and
            securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
