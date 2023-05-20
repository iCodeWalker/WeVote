import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <nav className="header__wrapper">
        <div className="header__item">
          <a href="#"> Home</a>
        </div>
        <div className="header__item">
          <a href="#"> Details</a>
        </div>
        <div className="header__item">
          <a href="#">Your View</a>
        </div>
        <div className="header__item">
          <a href="#"> About</a>
        </div>
        <div className="header__item">
          <a href="#"> Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
