import React, { useState } from "react";
import "./header.scss";
import logo from "../assets/images/wevote-logo-low.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [id, setId] = useState(1);

  const handleClick = (event) => {
    setIsActive((current) => !current);
    setId(event.target.id);

    const element = document.getElementById(`${event.target.id}`);
    console.log(`header__item-active-${event.target.id}`);
    if (element?.classList?.contains("header__item-active")) {
      element.classList?.remove("header__item-active");
    } else {
      element?.classList?.add("header__item-active");
    }
  };
  return (
    <div className="header__container">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__wrapper">
        <div className="header__item" onClick={handleClick}>
          <Link to="/" id="1">
            Home
          </Link>
        </div>
        <div className="header__item" onClick={handleClick}>
          <Link to="/state-detail" id="2">
            Details
          </Link>
        </div>
        <div className="header__item" onClick={handleClick}>
          <Link to="/user-detail" id="3">
            You
          </Link>
        </div>
        <div className="header__item" onClick={handleClick}>
          <Link to="/about-us" id="4">
            About us
          </Link>
        </div>
        <div className="header__item" onClick={handleClick}>
          <Link to="/contact-us" id="5">
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
