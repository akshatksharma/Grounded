import React, { useState } from "react";
import Fileform from "../../Fileform/Fileform.js";
import Modal from "../Thankpage/Modal";
import "./Objectpage.css";

const Objectpage = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
    props.setHidden();
  };

  let content = (
    <div className="page page--object" role="region" aria-label="Upload object">
      {visible ? (
        <Modal
          hide={toggleModal}
          title="Guiding Questions"
          style={{
            body: {
              maxHeight: "500px",
              overflowY: "scroll",
              opacity: "100 !important",
            },
            title: {},
          }}
          body={
            <div className="flow">
              <div className="text question ">
                What things have you been using, or what activities have you
                been doing more than usual over the past couple of months?{" "}
              </div>
              <hr />
              <div className="text question">
                What items or areas in your home have taken on a new
                significance recently?{" "}
              </div>
              <hr />
              <div className="text question">
                What objects remind you of your lack of mobility? Which objects
                help you push through that limiting experience?{" "}
              </div>
              <hr />
              <div className="text question">
                What things have you been using, or what activities have you
                been doing more than usual over the past couple of months?{" "}
              </div>
              <hr />
              <div className="text question">
                What items or areas in your home have taken on a new
                significance recently?{" "}
              </div>
              <hr />
              <div className="text question">
                What objects remind you of your lack of mobility? Which objects
                help you push through that limiting experience?{" "}
              </div>
              <hr />
              <div className="text question">
                What things have you been using, or what activities have you
                been doing more than usual over the past couple of months?{" "}
              </div>
              <hr />
              <div className="text question">
                What items or areas in your home have taken on a new
                significance recently?{" "}
              </div>
              <hr />
              <div className="text question">
                What objects remind you of your lack of mobility? Which objects
                help you push through that limiting experience?{" "}
              </div>
            </div>
          }
        />
      ) : null}
      <h2 className="subtitle bold text--center">How to contribute:</h2>
      <div className="box flow">
        <div className="box__header">
          <h3 className="header__title">1. Choose an object</h3>
          <div className="header__background"></div>
        </div>

        <div className="box__content">
          <div className="box__text flow">
            <p className="text">
              It can be anything (an item, a room, a smell, a sound) that has
              gained or lost meaning to you since the pandemic began. 
            </p>
            <p className="text">Submit an image of your object.</p>
          </div>
        </div>
        <Fileform dataUpdater={props.updateData} />
        <div className="guidelines">
          <button onClick={toggleModal} style={{ padding: "20px" }}>
            Having trouble thinking of an object? Click here
          </button>
        </div>
      </div>
    </div>
  );
  return content;
};

export default React.memo(Objectpage);
