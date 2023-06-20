import React from "react";
import "./header.scss";
import logo from "../assets/images/wevote-logo-low.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__container">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__wrapper">
        <div className="header__item">
          <a href="/"> Home</a>
        </div>
        <div className="header__item">
          <Link to="/details">Details</Link>
        </div>
        <div className="header__item">
          <Link to="/user-detail">You</Link>
        </div>
        <div className="header__item">
          <Link to="/about-us">About us</Link>
        </div>
        <div className="header__item">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
