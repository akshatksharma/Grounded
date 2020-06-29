import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import useForm from "../Hooks/useForm";
import "./Emailform.css";

const Emailform = (props) => {
  const [isRelease, setIsRelease] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();
  const submitRef = useRef();
  const {
    values,
    emailValid,
    clearValues,
    handleCheck,
    handleChange,
    handleSubmit,
  } = useForm(submit);

  function submit() {
    if (!emailValid) {
      submitRef.current.classList.add("disabled");
      return;
    }

    Object.entries(values).forEach(([key, value]) => {
      props.dataUpdater([key, value]);
    });
    props.submitPage();

    clearValues();
    setIsRelease(false);
    form.current.reset();
    setSubmitted(true);
  }

  const releaseCheck = () => {
    setIsRelease(!isRelease);
  };

  useEffect(() => {
    if (emailValid) {
      submitRef.current.classList.remove("disabled");
    }
    return () => {};
  }, [emailValid]);

  let content = (
    <div className="box__content">
      <form className="emailForm flow" ref={form}>
        <div className="emailForm__inputs flow">
          <div>
            <input
              className={emailValid || !values.email ? null : "error"}
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="submitText">
          <div className="flow">
            <p className="text">
              We hope to use this archive to better understand the ways people
              have responded to this uncertain time, through research, community
              action, and potentially in-person art installations in the future.
            </p>
            <p className="text">
              If you wish for your materials to be excluded from research,
              exhibitions, and events, please opt out below:
            </p>
          </div>
        </div>
        <div className="submitWrapper">
          <div className="checkbox releaseform">
            <label
              className="checkbox__label"
              htmlFor="releaseform"
              onChange={releaseCheck}
            >
              <input
                id="releaseform"
                type="checkbox"
                name="releaseform"
                value="do-not-allow"
                onChange={handleCheck}
              ></input>
              <div className="checkbox__box--release">
                {isRelease ? (
                  <FontAwesomeIcon icon={faCheckSquare} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faSquare} size="lg" />
                )}
              </div>
              <p className="text--small">
                I do not release my submission for research or inclusion in
                future exhibitions
              </p>
            </label>
          </div>
          <div className="submitButton">
            <label
              ref={submitRef}
              className={"button button--submit"}
              htmlFor="submit"
            >
              Submit
            </label>
            <button id="submit" onClick={handleSubmit}></button>
          </div>
        </div>
      </form>
      {submitted ? <Redirect to="/thank" /> : null}
    </div>
  );
  return content;
};

export default React.memo(Emailform);
