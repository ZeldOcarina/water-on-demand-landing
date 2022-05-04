import React, { useEffect, useState } from "react";
import axios from "axios";
import FaqItem from "./components/faq-item";

function Faq() {
  const [isFetching, setIsFetching] = useState(true);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/faq");
      setIsFetching(false);
      setFaqs(response.data);
    }
    fetchData();
  }, []);

  if (isFetching) return <div className="faq-container">Loading...</div>;

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
