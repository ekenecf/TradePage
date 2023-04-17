import React, { useEffect } from 'react'
import './Contact.css'
import '../Steps/GetStarted.css'
import { IoLocationOutline } from 'react-icons/io5'
import { BsEnvelope } from 'react-icons/bs'
import { BsHeadset } from 'react-icons/bs'
import Footer from '../LandingPage/Footer/Footer'

const Contact = ({ Display }) => {
  console.log(Display)
  useEffect(() => {
    /* eslint-disable-next-line no-unused-expressions */
    return Display
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])
  return (
    <div>
      <section className="contact">
        <h5>24/7 support one touch away</h5>
        <h1 className="contact_h1 faq_h1">Contact Us</h1>
        <hr className="open_acct_hr" />
      </section>

      <div className="flex-cont">
        {/*  <section className="map">Map</section> */}

        <section className="support_form">
          <h4>Support Form</h4>
          <p className="support_form_parag">
            <IoLocationOutline />
            &nbsp;&nbsp; Address: 1810 37th St Washougal, Washington(WA), 98671
            <br />
            <BsEnvelope />
            &nbsp;&nbsp; elitegainteam@gmail.com
            <br />
            <BsHeadset />
            &nbsp;&nbsp; Phone: +1 202 455 8287
          </p>
          <hr />

          <h4>Support Form</h4>
          <p>You could also send us a message here and we'll reply immediately</p> <br />
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Username or Full name"
              />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
              />
              <textarea
                className="form-control textarea"
                id="message"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <input type="submit" value="Send message" className="sbmt" />
          </form>
          <div></div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
