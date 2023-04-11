import React, { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import "../Contacts/Contact.css";
import "../Steps/GetStarted.css";
import "./Question.css";

const Faq = (faqs) => {
  console.log(faqs)
  const { faq, index } = faqs;
  const [showAns, setshowAns] = useState(false);
  const [showAns2, setshowAns2] = useState("");

  const toggle = (id) => {
    setshowAns(!showAns);
    setshowAns2(id);
  };
  console.log(faq);
  return (
    <div className="flex-faq">
      <section className={"faq " + (faq.open ? "open" : "")} key={index}>
        <div className="quest_arr">
          <h4 className="faq_question" onClick={() => toggle(faq.id)}>
            {faq.question}
          </h4>

          {showAns && showAns2 === faq.id ? (
            <button className="faq-arrow">
              <TiArrowSortedUp />
            </button>
          ) : (
            <button>
              <TiArrowSortedDown className="faq-arrow" />
            </button>
          )}
        </div>
        <br />
        <div className="ans_arr">
          <p>{showAns && showAns2 === faq.id ? faq.answer : null}</p>
        </div>
      </section>
    </div>
  );
};

export default Faq;
