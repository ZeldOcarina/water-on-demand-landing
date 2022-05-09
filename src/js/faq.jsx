import React from "react";
import FaqItem from "./components/faq-item";
import faqs from "./content/faq-content";

function Faq() {
  return (
    <div className="questions__container">
      <section className="questions">
        {faqs.map(({ question, answer }, i) => (
          <FaqItem {...{ question, answer }} key={i} />
        ))}
      </section>
    </div>
  );
}

export default Faq;
