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

        <p className="contact-us-section__para-2">29a Oladimeji Alo Street,</p>

        <p className="contact-us-section__para-2">Off Freedom Way,</p>
        <p className="contact-us-section__para-2">Lekki Phase 1</p>
        <p className="contact-us-section__para-2">Lagos, Nigeria</p>

        <p className="contact-us-section__para-2">2348136676447</p>
        <p className="contact-us-section__para-2">hello@wevote.ng</p>

        <p className="contact-us-section__para-2">www.acecentre.org</p>
      </div>

      <div className="contact-us-section__container-2">
        <h2 className="contact-us-section__heading">Write Us</h2>
        {/* <p className="contact-us-section__para">
          We envision a highly democratic country where good governance thrives
          because of actively engaged citizens.
        </p>

        <h2 className="contact-us-section__heading">Our Values</h2>
        <p className="contact-us-section__para">
          We are non-profit, non-partisan, independent, non-governmental.
        </p> */}
      </div>
    </div>
  );
};

export default ContactUsSection;
