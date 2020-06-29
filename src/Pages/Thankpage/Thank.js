import React from "react";
import { NavLink } from "react-router-dom";
import "./Thank.css";

const Thank = () => {
  let content = (
    <div className="page page--thank">
      <div className="box box--thank flow">
        <div className="box__header">
          <div className="header__title header__title--thank"> Thank You!</div>
        </div>
        <div className="box__content box__content--thank">
          <div className="box__text flow">
            <p className="text">
              Thank you again for helping us represent this moment of history.
            </p>
            <p className="text">
              If you have any questions or concerns about our usage of the
              archive, feel free to contact us.
            </p>
          </div>
        </div>
        <NavLink className="button text" to="/">
          Back to homepage
        </NavLink>
      </div>
    </div>
  );

  return content;
};

export default  React.memo(Thank);
