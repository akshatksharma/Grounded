import React, { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";

import useForm from "../Hooks/useForm";
import "./Emailform.css";

/**
 * 
 * @description
 * Emailform
 * Handles the email submission section of the main page.
 * 
 * @props
 *
 * @param {Function} dataUpdater -- function that appends some data to a formData object for a submission
 * @param {Function} submitPage -- function to submit formData object to backend
 */

const Emailform = (props) => {

  /**
   * @state {Boolean} submitted - has user clicked submit or not
   * @ref {Reference} - reference to the form. Used to reset form on submit
   * @ref {Reference} - reference to the submit button. Used to style it as needed.
   * @state {Object of Any type} values - an object that holds all of the values in the form
   * @state {Boolean} - emailValid - whether the email input is valid
   * @state {Function} - handleChange - function that updates value object whenever form inputs are changed
   * @state {Function} - handleSubmit - function that handles the submission action of the fomr
   */

  const [submitted, setSubmitted] = useState(false);
  const form = useRef();
  const submitRef = useRef();


  // useForm is a react hook that handles the logic of the form
  // when it's wired to the inputs, it will record all of their values, along with if they are valid or not
  // takes in the function to call when submitting form, in this case, it's submit()
  const {
    values,
    emailValid,
    clearValues,
    handleChange,
    handleSubmit,
  } = useForm(submit);

  /**
   * submit()
   * if email not valid, applies necessary styles and does not submit 
   * otherwise updates the submission formData object with the values in the form
   * in this case, the only value is the email form, so that will be added
   */
  function submit() {
    if (!emailValid) {
      submitRef.current.classList.add("disabled");
      submitRef.current.setAttribute("aria-invalid", "true");
      submitRef.current.setAttribute("aria-disabled", "true");
      return;
    }

    // email is valid, so need to update formData object w/ the values stored by the useForm hook 

    Object.entries(values).forEach(([key, value]) => {
      props.dataUpdater([key, value]);
    });

    // submits the formData in the App.js to the backend
    props.submitPage();

    // sets form back to default empty values
    clearValues();
    form.current.reset();
    setSubmitted(true);
  }

  // effect hook to update the style of the form inputs as the user types
  // if not an email, then styled with red
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
          {/* input is controlled by the useForm hook */}
          {/* whenever its value changes, the hook updates itself */}
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
          {/* whenever form submitted, call hook's handleSubmit function */}
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
      {/* If submitted form, then redirect to thank you page */}
      {submitted ? <Redirect to="/thank" /> : null}
    </div>
  );
  return content;
};

export default React.memo(Emailform);
