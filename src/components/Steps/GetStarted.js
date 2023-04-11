import React from "react";
import { NavLink } from "react-router-dom";
import "./GetStarted.css";
import { BsArrowRight } from "react-icons/bs";
import picture from "../../assets/cb-258-512.svg";
import Share from "./Share";
import StepTwo from "./StepTwo";
import Footer from "../LandingPage/Footer/Footer";

const GetStarted = () => {
  return (
    <div className="get_started_cont">
      <section className="open_acct">
        <div className="acct_step">
          <div className="step_1">
            <span> STEP</span>
            <h1 className="step_1_h1">1</h1>
          </div>

          <div className="open_acct_text">
            <div className="open_acct_h2_div">
              <h2 className="open_acct_h2">Open your account</h2>
              <hr className="open_acct_hr" />
            </div>

            <p className="paragraph">
              It’s fast, easy, and free – with no membership fees whatsoever! It
              only takes a few minutes. To open your free account, go to the
              registration page and click the “Create Account” button on the
              top-right-hand side of the website. A form will pops up for you to
              enter your personal information in; as soon as you have done that,
              enter your full name, username, password, email and payment
              accounts and you’re good to go.
            </p>
            <br />
            <br />

            <div className="button-link">
              <NavLink
                to={"/siginup"}
                style={{
                  width: "20%",
                  textAlign: "center",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                SIGN Up
              </NavLink>
            </div>
          </div>
        </div>

        <div className="first-img">
          <img src={picture} alt="pics" className="book_pic" />
        </div>
      </section>

      <StepTwo />
      <Share />

      <Footer />
    </div>
  );
};

export default GetStarted;
