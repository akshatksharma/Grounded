import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import "./Textform.css";

/**
 *
 * @description
 * Textform
 * Handles the text submission section of the main page.
 *
 * @props
 *
 * @param {Function} dataUpdater -- function that appends some data to a formData object for a submission
 */

const Textform = (props) => {
  /**
   * @state {String} savedtime - the time that the user pressed save at
   * @state {Object of Any type} values - an object that holds all of the values in the form
   * @state {Funciton} - handleChange - function that updates value object whenever form inputs are changed
   */

  const [savedTime, setSavedTime] = useState();
  const { values, handleChange } = useForm();

  /**
   * submit()
   * handles the save action of the text input
   */
  const submit = () => {
    // getting the current time and doing some math / manipulations to make it look like H:MM

    const today = new Date();
    const hours =
      today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    const minutes =
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    const meridiem = today.getHours() > 12 ? " PM" : " AM";
    const time = hours + ":" + minutes + meridiem;
    setSavedTime(time);

    // updaing the submission formData with the text

    Object.entries(values).forEach(([key, value]) => {
      props.dataUpdater([key, value]);
    });
  };

  let content = (
    <div className="textInput">
      <textarea
        className="textStory"
        name="textStory"
        onChange={handleChange}
      ></textarea>
      <div className="saveArea text--small">
        <div className="savedTime">
          {/* using the savedTime state to show the time  */}
          <div>{savedTime ? "Last saved:" : null}</div>
          <div>{savedTime}</div>
        </div>
        <button className=" button--save text--center" onClick={submit}>
          Save
        </button>
      </div>
    </div>
  );

  return content;
};

export default React.memo(Textform);
