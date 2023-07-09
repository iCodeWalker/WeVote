import React from "react";

import "./contactUsSection.scss";

const ContactUsSection = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-us-section__container-1">
        <h1 className="contact-us-section__heading">Get In Touch</h1>
        <p className="contact-us-section__para">
          WeVote is an initiative of Advocacy for Civic Engagement Centre
          (CAC/IT/148930 ).
        </p>

        <div className="contact-us-section__address-section">
          <p className="contact-us-section__para-2">
            29a Oladimeji Alo Street,
          </p>
          <p className="contact-us-section__para-2">Off Freedom Way,</p>
          <p className="contact-us-section__para-2">Lekki Phase 1</p>
          <p className="contact-us-section__para-2">Lagos, Nigeria</p>
        </div>

        <div className="contact-us-section__address-section">
          <p className="contact-us-section__para-2">2348136676447</p>
          <p className="contact-us-section__para-2">hello@wevote.ng</p>
        </div>

        <p className="contact-us-section__para-2">www.acecentre.org</p>
      </div>

      <div className="contact-us-section__container-2">
        <h2 className="contact-us-section__heading">Write Us</h2>
        <input
          placeholder="Your Name"
          className="contact-us-section__inputField"
        />
        <input
          placeholder="Your Email"
          className="contact-us-section__inputField"
        />
        <input
          placeholder="Phone Number"
          className="contact-us-section__inputField"
        />
        <input
          placeholder="Subject"
          className="contact-us-section__inputField"
        />

        <textarea
          id="w3review"
          name="w3review"
          rows="6"
          cols="50"
          placeholder="Please Enter Your Message"
          className="contact-us-section__textArea"
        />
      </div>
    </div>
  );
};

export default ContactUsSection;
