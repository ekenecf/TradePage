import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import Faq from "./Faq";
import Footer from "../LandingPage/Footer/Footer"

function Question() {
  const [questions, setQuestions] = useState([]);
  const allQuestions = [
    {
      id: uuidv4(),
      question: 
      "Q: What is the main idea behind the establishment of Preeminentcryptotrade.com? Is the company for ‘real’? And is there anything that really proves this?",
      answer:
      "A: Preeminentcryptotrade.com is a cryptocurrency trading company established in 2022. The wide array of services we offer were specifically designed to assist Bitcoin holders in making good trading decisions. We are a London-based company that possesses a group of trading professionals covering many industries, ranging from engineering to advanced computer technology. Our group of professionals are widely versed in cryptocurrency techniques as well and can expertly answer any question you might have concerning cryptocurrency trading.",
      open: true,
    },
    {
      id: uuidv4(),
      question: "Q: You seem to provide a quite lucrative interest rate for a limited period of time. Where is the funds coming from?",
      answer:
        "A: As a result of the volume of cryptocurrency trading and our cutting-edge trading technology, we have the ability to provide an interest rate that’s higher than what’s usually obtainable in the average market. Moreover, the fact that we are always spreading our reach as far as we can globally helps us in reaching new heights. Plus, we have to stick only to concepts that have to do with modern-day infrastructure if we want to maintain our status as one of the best cryptocurrency trading platforms.",
      open: false,
    },
    {
      id: uuidv4(),
      question: "Q: Are there risks involved?",
      answer:
        "A: You already made a good decision by deciding to join our community. Preeminentcryptotrade.com is a completely risk-free trading company, all thanks to our overall ideology and company concept. In addition, our company is made up of certified professionals in various fields such as cryptocurrency trading, blockchain technology, cryptocurrency finance and security. Our goal is to provide a seamless trading experience based on expert project management. We aim to make cryptocurrency trading available to anybody that has no experience within the field.",
      open: false,
    },
  ];

  useEffect(() => {
    setQuestions(allQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section className="contact">
        <h1 className="contact_h1 faq_h1">Frequently Asked Questions</h1>
        <h3 className="faq_h3">
          You ask, we answer. 99% of of most commonly asked questions are listed
          here.
        </h3>
        <hr className="open_acct_hr faq_hr" />
      </section>

      <section className="sub-header-faq">
        <span id="click-1">General</span>/
        <span id="click-2">Account &amp; Transactions</span>/
        <span id="click-3">Affiliate</span>
        <br />
        <br />
      </section>

      <section>
        {questions.map((question, i) => (
          <Faq faq={question} index={i} />
        ))}
      </section>

        <Footer/>
    </div>
  );
}

export default Question;
