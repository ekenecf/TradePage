import React from "react";
import { NavLink } from "react-router-dom";
import "./Share.css";
import { BsArrowRight } from "react-icons/bs";
import picture from "../../assets/cb-263-512.svg";

const Share = () => {
  return (
      <section className="open_acct_shared">
        <div className="acct_step">
          <div className="step">
            <span>STEP</span>
            <h1 className="share_h1">5</h1>
          </div>

          <div className="open_acct_text">
            <div className="open_acct_h2_div">
              <h3 className="open_acct_h2_shared">Share your earnings with others</h3>
              <hr className="open_acct_hr" />
            </div>

            <p className="parag">
              The affiliate program was created to reward members, who share our
              trading platform with their friends and colleagues.
              When you refer other people to our trading platform, you earn up
              to 8% from their direct account fundings. The affiliate program is
              for everybody; you don’t need to have an active account to be able
              to participate.
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
                <BsArrowRight className="arrow" />
                SIGN Up
              </NavLink>
            </div>
          </div>
        </div>

        <div className="second-img">
          <img src={picture} alt="pics" className="book_pic" />
        </div>
      </section>
  );
};

export default Share;
