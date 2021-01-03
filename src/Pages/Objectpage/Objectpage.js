import React, { useState } from "react";
import Fileform from "../../Footer/Fileform/Fileform.js";
import Modal from "../Thankpage/Modal";
import "./Objectpage.css";


/**
 * @description 
 * 
 * Objectpage
 * React component for the image upload section of the main page. Users need to be able upload images here 
 * Contains the <FileForm /> React component, which handles the actual image upload
 * 
 */


const Objectpage = (props) => {

  /**
   * @state {Boolean} visible
   * Controls whether the popup for the disclaimer popuip is hidden or not. 
   */

  const [visible, setVisible] = useState(false);

  // toggleModal() : Function - sets the state of visible. 
  // Passed into the modal as a prop because it's attached to an onClick event on the close button of the modal 

  const toggleModal = () => {
    setVisible(!visible);
    props.setHidden();
  };

  let content = (
    <div className="page page--object" role="region" aria-label="Upload object">

      {/* if the visible State is true, then show the modal, otherwise, show nothing */}
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
        {/* @prop dataUpdater -- references the updateData function in App.js, so that image can be added to the submission  */}
        <Fileform dataUpdater={props.updateData} />
        <div className="guidelines">
          {/* triggers toggleModal onClick, which changes the visible State, causing the modal to popup */}
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
