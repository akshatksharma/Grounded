import React from "react";
import "./Emailpage.css";
import Emailform from "../../Emailform/Emailform.js";

const Emailpage = (props) => {
  let content = (
    <div className="page page--email">
      <div className="box flow">
        <div className="box__header">
          <div className="header__title">3. Confirmation</div>
          <div className="header__background"></div>
        </div>
        <div className="box__content">
          <div className="box__text flow">
            <p className="text">
              Thank you for contributing to Grounded: The Pandemic Archive!
            </p>
            <p className="text">
              The materials gathered in the archive will be displayed online in
              an interactive archive. Please leave your contact information
              below to be notified when the gallery is live:
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
