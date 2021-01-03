import React, { useState, useEffect } from "react";

/**
 *
 * @description
 *
 * Timer
 * React component that updates itself each second as the user records
 *
 * @props
 *
 * @param {Boolean} isRecording -- flag that tells if user is currently recording
 * @param {Boolean} isStarted -- flag that tells if user has started recording (is true during pause, but not if user stops recording)
 * @param {Function} timeout -- function in Audioform to stop recording
 */

const Timer = (props) => {
  /**
   * @state {Int} secsElapsed
   * The time since the user has started recording
   */
  let [secsElapsed, setSecsElapsed] = useState(0);

  useEffect(() => {
    if (props.isStarted) setSecsElapsed(0);
  }, [props.isStarted]);

  // if user is recording, set an interval that ticks every 1000 ms (1 second) that updates the seconds state
  // if seconds reaches 299 (5 min), cut off recording by calling timeout function
  useEffect(() => {
    if (props.isRecording) {
      let interval = setInterval(() => {
        if (secsElapsed === 299) {
          props.timeout();
        }
        setSecsElapsed((secsElapsed += 1));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [props.isRecording, secsElapsed]);

  // do some math to make the seconds into minutes and seconds
  let secs = secsElapsed % 60 < 10 ? `0${secsElapsed % 60}` : secsElapsed % 60;
  let min = Math.floor(secsElapsed / 60) % 10;
  let time = `${min}:${secs}`;

  // return a div with the current time in it
  let content = <div className="time bold">{time}</div>;
  return content;
};

export default Timer;
