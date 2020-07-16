import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";

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
    handleChange,
    handleSubmit,
  } = useForm(submit);

  function submit() {
    if (!emailValid) {
      submitRef.current.classList.add("disabled");
      submitRef.current.setAttribute("aria-invalid", "true");
      submitRef.current.setAttribute("aria-disabled", "true");
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

  useEffect(() => {
    if (emailValid) {
      submitRef.current.classList.remove("disabled");
      submitRef.current.setAttribute("aria-invalid", "false");
      submitRef.current.setAttribute("aria-disabled", "false");
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
              placeholder="Enter your email"
              required
              aria-label="Enter email"
              aria-disabled={emailValid || !values.email ? "false" : "true"}
            />
          </div>
        </div>
        <div className="submitText">
          <div className=" box__text flow">
            <p className="text">
              In addition to sharing the stories of a diverse global community,
              we hope to use this archive to understand the ways people have
              responded to this uncertain time, through research, community
              action, and art installations.
            </p>
          </div>
        </div>
        <div className="submitWrapper">
          <label htmlFor="submit"></label>
          <button
            ref={submitRef}
            id="submit"
            className={"button button--submit"}
            onClick={handleSubmit}
            aria-live="polite"
          >
            Submit
          </button>
        </div>
      </form>
      {submitted ? <Redirect to="/thank" /> : null}
    </div>
  );
  return content;
};

export default React.memo(Emailform);
