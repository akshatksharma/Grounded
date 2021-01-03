import React from "react";
import "./Emailpage.css";
import Emailform from "../../Emailform/Emailform.js";

/**
 * 
 * @description
 * Emailpage
 * React component for the third section on the main page. Handles the static content on that part and includes the form for the user to input their email
 * 
 * @props
 *
 * @param {Function} dataUpdater -- function that appends some data to a formData object for a submission
 * @param {Function} submitPage -- function to submit formData object to backend
 */



const Emailpage = (props) => {
  let content = (
    <div
      className="page page--email"
      role="region"
      aria-label="Confirm submission"
    >
      <div className="box flow">
        <div className="box__header">
          <h3 className="header__title">3. Confirmation</h3>
          <div className="header__background"></div>
        </div>
        <div className="box__content">
          <div className="box__text flow">
            <p className="text">
              Thank you for contributing to Grounded: The Pandemic Archive!{" "}
            </p>
            <p className="text">
              The materials gathered here will soon be made public in an online,
              interactive archive. We will notify you when the gallery goes
              live:
            </p>
          </div>
        </div>
        <Emailform dataUpdater={props.updateData} submitPage={props.submit} />
      </div>
    </div>
  );
  return content;
};

export default React.memo(Emailpage);
