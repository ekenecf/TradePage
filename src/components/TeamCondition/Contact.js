import React from "react";
import "./Contact.css";
import "../Steps/GetStarted.css";
import Footer from "../LandingPage/Footer/Footer"

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <h5>PRIVACY POLICY AND TERMS OF SERVICE</h5>
        <h1 className="contact_h1 faq_h1">Terms</h1>
        <hr className="open_acct_hr" />
      </section>

      <section className="maincontainer">
        <div className="ReadContainer">
        <div className="Read">* Please read the following rules carefully before signing in.</div>
        <div className="Standard">
            <h5>1. Standard Terms</h5>
            <p>
            1.1. The terms and conditions outlined in this agreement are comprehensive and should by followed explicitly by all users (hereinafter referred to as "Seller" or "Buyer") of the preeminentcryptotrade.com Ltd (hereinafter referred to as “Company” or preeminentcryptotrade.com’) platform, as well as all other platform features.
            </p>
            <p>
            1.2. To start using the the platform offered by preeminentcryptotrade.com, the Seller is required to fully accept all written statements, their rules and implications stated in this agreement. The Company is not to be held accountable and is not accountable for any breach of terms of this agreement on the part of the Seller.
            </p>
            <p>
            1.3. The Company must give one week’s notice to buyers and/or sellers before modifying any portion or part of this document, which they will be permitted to do so henceforth.
            </p>
        </div>
        <div className="Standard">
            <h5>2. Description of the platform</h5>
            <p>
            2.1. preeminentcryptotrade.com systems are scalable distributed computing systems for the purposes of cryptocurrency trading. The central data hub of the Company is where all the servers are located that power the platform.
            </p>
            <p>
            2.2. The Company gives Buyers the opportunity of receiving measureable capital income through the preeminentcryptotrade.com® platform (http://preeminentcryptotrade.com). Based on the Seller’s use of the platform, all income and capital will be assessed and given.
            </p>
           </div>

        <div className="Standard">
            <h5>3. Terms of resource reservation</h5>
            <p>
              3.1. To generate capital with the preeminentcryptotrade.com system, each Seller must have an “Active” account—meaning that there is no less than BTC 0.001 in the Seller’s account.
            </p>
            <p>
               3.2. To fill an account, the Seller will use the Bitcoin payment system.
            </p>
            <p>
              3.3. Buyer capital is based on the aggregate account balance of the Buyer, in addition to all relevant times of purchase. The Company’s Calculator page will be used for compound interest earnings.
            </p>
            <p>
             3.4. The same payment system used to acquire funds will be used by the Buyer for withdrawals.
            </p>
            <p>
            3.5. All withdrawals from the preeminentcryptotrade.com system is done instantly as soon as the Seller requests a withdrawal.
            </p>
           </div>
        <div className="Standard">
            <h5>4. Parties to the Agreement</h5>
            <p> 
               4.1. To become a Seller, all instructions on http://preeminentcryptotrade.com must be completed to open an account.
            </p>
            <p>
              4.2. Only accurate personal information will be accepted. Improper and falsified information should be banned.
            </p>
            <p>
              4.3. You must be a legal adult and citizen of the current of your primary address in order to become a Buyer.
            </p>
            <p>
              4.4. By opening an account with preeminentcryptotrade.com, each Buyer assures that their use of the platform will not be for illegal purposes.
            </p>
            <p>
              4.5. Only this agreement will stipulate how the platform is to be used, as well as how Buyers and Sellers will use this platform.
            </p>
            <p>
              4.6. No third party will ever be permitted to solicit personal information from Buyers and Sellers using this platform.
            </p>
           </div>
        <div className="Standard">
            <h5>5. Terms of use Account</h5>
            <p> 
              5.1. The Seller must user their real, legal name when opening an account. Opening multiple accounts using the same name or a fake name will result in permanent termination.
            </p>
            <p>
              5.2. A Buyer cannot transfer ownership of an account to a third party.
            </p>
            <p>
              5.3. Payment accounts can be changed via the Buyer’s discretion.
            </p>
            <p>
              5.4. Seller’s cannot delete their accounts.
            </p>
           </div>
        <div className="Standard">
            <h5>6. Affiliate Program Regulations</h5>
            <p> 
              6.1. The Platform Affiliate Program fast-tracks the lead generation of Buyers of preeminentcryptotrade.com.
            </p>
            <p>
               6.2. A 4% affiliate commission fee will be paid by the platform for referrals to preeminentcryptotrade.com by Buyers.
            </p>
            <p>
              6.3 Upon referral, each commission will be deposited into the referring Buyer’s account in real time.
            </p>
           </div>
        <div className="Standard">
            <h5>7. Force majeure circumstances</h5>
            <p> 
              7.1. preeminentcryptotrade.com can suspend the platform if technological disasters, world economic crisis, earthquake, wars, revolution, epidemics and strikes threaten or become detriment to platform use.
            </p>
           </div>
        <div className="Standard">
            <h5>Privacy Policy</h5>
            <p> 
            1.1. This Privacy Policy (Policy) covers all information exchanged between preeminentcryptotrade.com® and Buyers and Seller
            </p>
            <p> 
              1.2. Confidentiality of personal information used with and shared on the platform is safe and secure, including information on the platform, and information forwarded throughout registration.
            </p>
           </div>

        <div className="Standard">
            <p> 
            The Company’s registration documents provide assurance to this Policy.
            </p>
            <p> 
            All users of this policy will be affected by decisions made by the UK court system. See Terms & Agreements for conditions for rules and regulations under such circumstances.
            </p>
           </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
