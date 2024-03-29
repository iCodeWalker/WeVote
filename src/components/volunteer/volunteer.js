import React from "react";

import "./volunteer.scss";

const Volunteer = () => {
  return (
    <div className="volunteer">
      <div className="volunteer__form-container">
        <p className="volunteer__form-container--heading">Volunteer</p>
        <p className="volunteer__form-container--para">
          Add your name to join the WeVote team. We’ll send you important
          updates on how you can get involved, and join our push to get every
          eligible Nigerian to vote on Election Day.
        </p>
        <form className="form__container">
          <input className="form__text-field" placeholder="Your name" />
          <span class="border"></span>
          <div>
            <input className="form__text-field" placeholder="Your e-mail" />
            <span class="border"></span>
            <input className="form__text-field" placeholder="Phone Number" />
            <span class="border"></span>
          </div>

          <button className="volunteer__btn">Send</button>
        </form>
      </div>
      <div className="volunteer__text-container">
        <h1 className="volunteer__text-container--heading">Our Values</h1>
        <p className="volunteer__text-container--para">
          We are non-profit, non-partisan, independent, non-governmental. We are
          on a mission to ensure meaningful participation in Nigerian elections
          and increase voter turnout to the international average of 66% in
          2023.
        </p>
      </div>
    </div>
  );
};

export default Volunteer;
