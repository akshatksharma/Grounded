import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import Audioform from "../../Audioform/Audioform.js";
import Textform from "../../Textform/Textform.js";
import Modal from "../Thankpage/Modal.js";
import "./Storypage.css";

const Storypage = (props) => {
  const [iosAudio, setiosAudio] = useState(null);
  const [usingAudio, setUsingAudio] = useState(true);
  const [visible, setVisible] = useState(false);

  const getAudioFromVideo = (event) => {
    const file = event.target.files[0];
    setiosAudio(file);
    props.updateData(["audioStory", file]);
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  const toggleAudio = () => {
    setUsingAudio(!usingAudio);
  };
  const handleKey = (event) => {
    if (event.key === "Enter") setUsingAudio(!usingAudio);
  };

  let content = (
    <div className="page page--story" role="region" aria-label="Record story">
      {visible ? (
        <Modal
          hide={toggleModal}
          bkg={false}
          title="Recording audio on mobile"
          body={
            <div className="flow">
              <p className="text">
                Due to current limitations in iOS, we are not able to natively
                record audio on Apple devices.
              </p>
              <p className="text">
                By clicking the button below, you will be directed to a video
                record screen where you can record your messsage. Your video
                feed will not be submitted.
              </p>
              <p className="text">We apologize for the inconvenience.</p>
              <label htmlFor="audioinput">
                <div className="recorder__button" style={{ marginTop: "20px" }}>
                  <FontAwesomeIcon icon={faPlay} color="#68D391" size="lg" />
                  <p className="text bold">Start</p>
                </div>
              </label>
              <input
                id="audioinput"
                type="file"
                accept="audio/*"
                capture
                onChange={getAudioFromVideo}
                style={{ opacity: "0", margin: "0px" }}
              ></input>
            </div>
          }
        />
      ) : null}
      <div className="box flow">
        <div className="box__header">
          <h3 className="header__title ">2. Tell your story</h3>
          <div className="header__background"></div>
        </div>
        <div className="box__content">
          <div className="box__text flow">
            <p className="text">
              Record a message describing your object and telling its story. How
              you tell the story is up to you; you can record alone, or have a
              friend join you and make it a conversation.
            </p>
            <p className="text">
              Talk for as long as you like (up to five minutes) in whatever
              style you choose.
            </p>
          </div>
        </div>
        {usingAudio ? (
          <React.Fragment>
            <Audioform
              dataUpdater={props.updateData}
              toggleModal={toggleModal}
            />
            {iosAudio ? (
              <div
                classname="audio__preview"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4>Preview</h4>
                <audio
                  className="audioPlayback"
                  controls
                  src={URL.createObjectURL(iosAudio)}
                  aria-label="audio playback"
                ></audio>
              </div>
            ) : null}
          </React.Fragment>
        ) : (
          <Textform dataUpdater={props.updateData} />
        )}
        <div className="checkbox">
          <label
            className="checkbox__label"
            htmlFor="text"
            onChange={toggleAudio}
            onKeyPress={handleKey}
          >
            <input id="text" type="checkbox"></input>
            <div className="checkbox__box--text">
              {usingAudio ? (
                <FontAwesomeIcon icon={faSquare} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faCheckSquare} size="lg" />
              )}
            </div>
            <p className="text--small">
              I would like to tell my story through text instead of audio{" "}
            </p>
          </label>
        </div>
      </div>
    </div>
  );

  return content;
};

export default React.memo(Storypage);
