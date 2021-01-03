import React, { useState } from "react";
import Modal from "../Thankpage/Modal.js";
import { isIOS } from "react-device-detect";
import AudioRecorder from "audio-recorder-polyfill";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Intropage.css";


// Intropage
// React component for the Introductory / landing section of the site. If the user is on a unsupported platform (i.e chrome on iOS) then a popup shows up

const Intropage = () => {

  // ********* @State visible: Boolean *********
  // Controls whether the popup for the disclaimer popuip is hidden or not. 

  const [visible, setVisible] = useState(true);

  // toggleModal() : Function - sets the state of visible. 
  // Passed into the modal as a prop because it's attached to an onClick event on the close button of the modal 

  const toggleModal = () => {
    setVisible(!visible);
  };


  // hidePage() : JSX compontent - controls whether modal is shown or not based on the device idenitty, its ability to record, and the visible state
  // if device not supported, then will return the modal, else will return nothing

  const deviceSupport = () => {
    if (isIOS && AudioRecorder.notSupported && visible) {

      return (
        <Modal
          hide={toggleModal}
          bkg={false}
          title="Unsupported Browser"
          body={
            <div className="flow">
              <p className="text">
                Due to current limitations in web technologies, it is not
                possible to natively record audio on Chrome for iOS.
              </p>
              <p className="text">
                Please visit this site in your the Safari App on your phone for
                the best experience.
              </p>
              <CopyToClipboard text={"groundedarchive.com"}>
                <p className="text text--special">
                  Click here to copy the site's URL
                </p>
              </CopyToClipboard>
              <p className="text">We apologize for the inconvenience.</p>
            </div>
          }
        />
      );
    } else return null;
  };
  let content = (
    <div
      className="page page--intro flow"
      role="region"
      aria-label="Introduction"
    >
      {deviceSupport()}
      <h1 className="title text--center important">Grounded</h1>
      <div className="intro flow">
        <p className="text--intro text--center">
          The stories of global events are often found in the objects left
          behind: artifacts in museums, keepsakes passed through families, homes
          that withstood war, famine, or plague. Recent events have forced many
          of us to find new meaning in the spaces we inhabit and the objects
          that surround us.
        </p>
        <p className="text--intro text--center">
          “Grounded: The Pandemic Archive” is our effort to assemble a living
          archive of the objects that tell stories of home and hardship amid the
          ongoing battles for health, community, and justice.
        </p>
        <p className="text--intro text--center">
          We invite you to find and preserve an object that holds a piece of
          your story, and add your voice to history.
        </p>
      </div>
      <div className="nextSection flow">
        <p className="text--intro text--center bold important">Here's how</p>
        <svg
          className="arrow"
          width="53"
          height="50"
          viewBox="0 0 53 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L22.5 22.825L43 2M2 15.175L22.5 36L43 15.175"
            stroke="#ffc259"
            strokeWidth="4"
            className="arrow__line"
          />
        </svg>
      </div>
    </div>
  );
  return content;
};

export default React.memo(Intropage);
