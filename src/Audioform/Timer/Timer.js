import React, { useState, useEffect } from "react";

const Timer = (props) => {
  let [secsElapsed, setSecsElapsed] = useState(0);

  useEffect(() => {
    if (props.isStarted) setSecsElapsed(0);
  }, [props.isStarted]);

  useEffect(() => {
    if (props.isRecording) {
      let interval = setInterval(() => {
        if (secsElapsed === 299) {
          console.log("stopping");
          props.timeout();
        }
        setSecsElapsed((secsElapsed += 1));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [props.isRecording, secsElapsed]);

  let secs = secsElapsed % 60 < 10 ? `0${secsElapsed % 60}` : secsElapsed % 60;
  let min = Math.floor(secsElapsed / 60) % 10;
  let time = `${min}:${secs}`;

  let content = <div className="time bold">{time}</div>;
  return content;
};

export default Timer;
