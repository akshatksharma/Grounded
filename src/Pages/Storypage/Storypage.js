import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import Audioform from "../../Audioform/Audioform.js";
import Textform from "../../Textform/Textform.js";

import "./Storypage.css";

const Storypage = (props) => {
  const [iosAudio, setiosAudio] = useState(null);
  const [usingAudio, setUsingAudio] = useState(true);

  const toggleAudio = () => {
    setUsingAudio(!usingAudio);
  };
  const handleKey = (event) => {
    if (event.key === "Enter") setUsingAudio(!usingAudio);
  };

  let content = (
    <div className="page page--story" role="region" aria-label="Record story">
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
