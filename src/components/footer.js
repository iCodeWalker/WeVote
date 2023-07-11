import React from "react";
import logo from "../assets/images/wevote-logo-low.png";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <img src={logo} alt="logo" className="footer__logo" />
        <div className="footer__section footer__first-section">
          <p className="footer__title">Resources</p>
          <div className="footer__link-container">
            <p className="footer__link">Resource Hub</p>
            <p className="footer__link">Blog</p>
            <p className="footer__link">Learn more</p>
          </div>
        </div>

        <div className="footer__section footer__second-section">
          <p className="footer__title">Resources</p>
          <div className="footer__link-container">
            <p className="footer__link">Resource Hub</p>
            <p className="footer__link">Blog</p>
            <p className="footer__link">Learn more</p>
          </div>
        </div>

        <div className="footer__section footer__third-section">
          <p className="footer__title">Resources</p>
          <div className="footer__link-container">
            <p className="footer__link">Resource Hub</p>
            <p className="footer__link">Blog</p>
            <p className="footer__link">Learn more</p>
          </div>
        </div>
        <div className="footer__section footer__fourth-section">
          <p className="footer__title">Company</p>
          <div className="footer__link-container">
            <p className="footer__link">About Us</p>
            <p className="footer__link">Careers</p>
            <p className="footer__link">Events</p>
            <p className="footer__link">Contact Us</p>
          </div>
        </div>
        <div className="footer__section footer__fifth-section">
          <p className="footer__title">Resources</p>
          <div className="footer__link-container">
            <p className="footer__link">Resource Hub</p>
            <p className="footer__link">Blog</p>
            <p className="footer__link">Learn more</p>
          </div>
        </div>
      </div>
      <p className="footer__copyright">© 2023-24 WeVote</p>
    </div>
  );
};

export default Footer;
