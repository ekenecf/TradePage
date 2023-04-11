import React from "react";
import picturetwo from "../../assets/cb-245-512.svg";
import picturethree from "../../assets/cb-241-512.svg";
import picturefour from "../../assets/cb-270-512.svg";
import desktoparrow from "../../asset/arrow.svg";
import "./StepTwo.css";

const StepTwo = () => {
  return (
    <section>
      <div className="step_two">
        <h5 className="step_two_h5">STEP BY STEP</h5>
        <h2 className="systematic_parag">
          Systematic guide on how to start profiting with Preeminentcryptotrade.com
        </h2>
        <hr className="step_two_hr" />
      </div>

      {/* Grid container */}
      <div className="grid-container">
        <div>
          <div className="step_num">
            <span className="step_num_span"> STEP</span>
            <h3 className="step_num_h3">2</h3>
          </div>

          <div className="third-img explore-img">
            <img src={picturetwo} alt="pics" className="book_pic" />
            <img src={desktoparrow} alt="arrow" className="desktoparrow" />
          </div>

          <h4 className="systematic_parag explore">Explore your account</h4>
          <hr className="step_two_hr" />

          <p className="explore_parag">
            You have two great earning options: you can become a regional or
            worldwide representative, which enables you to take part in our
            lucrative affiliate program, OR you can participate in our
            cryptocurrency trading services to secure a stable, daily income. If
            you can’t decide, fear not—you can activate both earning options
            simultaneously.
          </p>
        </div>

        <div>
          <div className="step_num">
            <span className="step_num_span"> STEP</span>
            <h3 className="step_num_h3">3</h3>
          </div>

          <div className="third-img explore-img">
            <img src={picturethree} alt="pics" className="book_pic" />
            <img src={desktoparrow} alt="arrow" className="desktoparrow" />
          </div>

          <h4 className="systematic_parag explore">Start Trading</h4>
          <hr className="step_two_hr" />

          <p className="explore_parag">
            Fund your personal account with Bitcoin and activate hybrid
            automated cryptocurrency trading. You will receive fixed interest of
            10% for 15 consecutive days. 150% total return. Principal included.
            Start with as little as 0.001 BTC.
          </p>
        </div>

        <div>
          <div className="step_num">
            <span className="step_num_span"> STEP</span>
            <h3 className="step_num_h3">4</h3>
          </div>

          <div className="third-img explore-img">
            <img src={picturefour} alt="pics" className="book_pic" />
          </div>

          <h4 className="systematic_parag explore">Withdraw your profit</h4>
          <hr className="step_two_hr" />

          <p className="explore_parag">
            Making withdrawals is very fast and easy. Preeminentcryptotrade.com® offers
            instant withdrawals for all requested withdrawals. You don’t have to
            wait endless days for your withdrawal requests to be processed. All
            your withdrawals are made available to your Bitcoin address in real
            time once you request them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepTwo;
