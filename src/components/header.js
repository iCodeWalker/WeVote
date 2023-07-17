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
  };
  return (
    <div className="header__container">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__wrapper">
        <div
          className={`${isActive ? "header__item-active" : "header__item"}`}
          onClick={handleClick}
        >
          <Link to="/" id="1">
            Home
          </Link>
        </div>
        <div
          className={`${isActive ? "header__item-active" : "header__item"}`}
          onClick={handleClick}
          id="2"
        >
          <Link to="/state-detail">Details</Link>
        </div>
        <div
          className={`${isActive ? "header__item-active" : "header__item"}`}
          onClick={handleClick}
          id="3"
        >
          <Link to="/user-detail">You</Link>
        </div>
        <div
          className={`${isActive ? "header__item-active" : "header__item"}`}
          onClick={handleClick}
          id="4"
        >
          <Link to="/about-us">About us</Link>
        </div>
        <div
          className={`${isActive ? "header__item-active" : "header__item"}`}
          onClick={handleClick}
          id="5"
        >
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
