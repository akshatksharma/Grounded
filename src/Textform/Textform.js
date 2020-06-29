import React, { useState } from "react";
import useForm from "../Hooks/useForm";
import "./Textform.css";

const Textform = (props) => {
  const [savedTime, setSavedTime] = useState();
  const { values, handleChange } = useForm();

  const submit = () => {
    const today = new Date();
    const hours = today.getHours() - 12;
    const minutes =
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    const meridiem = today.getHours() > 12 ? " PM" : " AM";
    const time = hours + ":" + minutes + meridiem;
    setSavedTime(time);

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
          <div>{savedTime ? "Last saved:" : null}</div>
          <div>{savedTime}</div>
        </div>
        <div className=" button--save text--center" onClick={submit}>
          Save
        </div>
      </div>
    </div>
  );

  return content;
};

export default React.memo(Textform);
