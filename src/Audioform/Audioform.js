import React, { useState, useEffect, Fragment } from "react";
import { isIOS } from "react-device-detect";
import AudioRecorder from "audio-recorder-polyfill";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faRedo,
  faPause,
  faPlay,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

import Timer from "./Timer/Timer.js";
import recordAudio from "./audiorecorder.js";
import "./Audioform.css";

const Audioform = (props) => {
  const [recorder, setRecorder] = useState(null);
  const [audioObj, setAudioObj] = useState(null);

  const [recording, setRecording] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const start = async () => {
    try {
      let recorder = await recordAudio();
      recorder.start();
      setRecorder(recorder);
    } catch {
      return;
    }

    setRecording(true);
    setStarted(true);
    setFinished(false);
    setAudioObj(null);
  };

  const pause = () => {
    if (recording) {
      recorder.pause();
      setRecording(false);
    } else {
      recorder.resume();
      setRecording(true);
    }
  };

  const stop = async () => {
    setRecording(false);
    setStarted(false);
    setFinished(true);
    const audioObj = await recorder.stop();
    setAudioObj(audioObj);
    console.log(audioObj);
  };

  useEffect(() => {
    if (audioObj) props.dataUpdater(["audioStory", audioObj.audioBlob]);
  }, [props, audioObj]);

  const recordText = () => {
    let text = recording ? "Recording..." : null;
    if (!recording && started) text = "Paused";
    if (finished) text = "Recording Saved";

    return text;
  };

  const pauseText = () => (recording ? "Pause" : "Resume");

  const startButton = () => {
    if (isIOS && AudioRecorder.notSupported) {
      return (
        <Fragment>
          <div
            className="recorder__button"
            // onClick={props.toggleModal}
            style={{ marginTop: "10px" }}
          >
            <FontAwesomeIcon icon={faPlay} color="#68D391" size="lg" />
            <p className="text bold">Start</p>
          </div>
        </Fragment>
      );
    } else {
      return (
        <button
          className="recorder__button"
          onClick={start}
          style={{ marginTop: "10px" }}
        >
          <FontAwesomeIcon icon={faPlay} color="#68D391" size="lg" />
          <p className="text bold">Start</p>
        </button>
      );
    }
  };

  const redoButton = (
    <button className="recorder__button" onClick={start}>
      <FontAwesomeIcon icon={faRedo} size="lg" />

      <p className="text bold">Redo</p>
    </button>
  );

  const stopButton = (
    <button className="recorder__button" onClick={stop}>
      <FontAwesomeIcon icon={faStop} color={"#FF5858"} size="lg" />

      <p className="text bold">Stop</p>
    </button>
  );

  const pauseButton = (
    <button className="recorder__button" onClick={pause}>
      {recording ? (
        <FontAwesomeIcon icon={faPause} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faPlay} color="#68D391" size="lg" />
      )}
      <p className="text bold">{pauseText()}</p>
    </button>
  );

  const controlBar = () => {
    if (recording && started) {
      return (
        <div
          className="recorder__control"
          role="toolbar"
          aria-label="Recorder controls"
        >
          {pauseButton}
          {stopButton}
        </div>
      );
    }
    if (!recording && started) {
      return (
        <div
          className="recorder__control"
          role="toolbar"
          aria-label="Recorder controls"
        >
          {pauseButton}
          {stopButton}
        </div>
      );
    }
    if (finished) {
      return redoButton;
    } else return startButton();
  };

  const playback = () => {
    if (audioObj) {
      const audioURL = audioObj.audioURL;
      return (
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
            src={audioURL}
            aria-label="audio playback"
          ></audio>
        </div>
      );
    } else return;
  };

  let content = (
    <Fragment>
      <div className="recorder flow" aria-label="audio recorder">
        {recording || finished || started ? (
          <Timer
            isRecording={recording}
            isStarted={started}
            isFinished={finished}
            timeout={stop}
          />
        ) : null}
        <div
          className={
            recording
              ? "recorder__mic recorder__mic recorder__mic--recording"
              : "recorder__mic"
          }
        >
          <FontAwesomeIcon
            icon={faMicrophone}
            size="3x"
            className={recording ? "recording" : "idle"}
          />
        </div>
        <p aria-live="polite">{recordText()}</p>
        {controlBar()}
      </div>
      {playback()}
    </Fragment>
  );

  return content;
};

export default React.memo(Audioform);
