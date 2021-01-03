import { useState, useMemo } from "react";

/**
 * @description
 *
 * useForm
 * Custom react hook used to handle form submissions
 * Contains the values of each form input, as well as booleans for whether each input is valid, and whether all inputs are valid
 *
 * Adapted from
 * https://upmostly.com/tutorials/using-custom-react-hooks-simplify-forms
 *
 */

const useForm = (callback) => {
  /**
   * @state {Object of Any type} values - an object that holds all of the values in the form
   * @state {Boolean} - emailValid - whether the email input is valid
   * @state {Boolean} - formValid - whether the whole form is valid
   */

  const [values, setValues] = useState({});
  const [emailValid, setEmailValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  /**
   * handleSubmit()
   * prevents the default form submit action and instead calls the function passed in as an argument
   * @param {Event} event
   */
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  /**
   * handleChange()
   * updates the values object with the new values from a given input
   * the input's value is mapped to its name
   * the input is then validated
   * @param {Event} event
   */
  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    validateInput(event.target.name, event.target.value);
  };

  // sets form's validity based on its input's validity
  // not gonna lie, I forgot why I used useMemo here instead use useEffect
  useMemo(() => {
    return () => {
      setFormValid(emailValid);
    };
  }, [emailValid]);

  /**
   * validateInput()
   * validates the value from an input based on some criteria
   * only handles email validation for now, as that is the only input
   *
   * @param {String} name
   * @param {Any} value
   */
  const validateInput = (name, value) => {
    if (name === "email") {
      // matching email to this email regex I found on stackoverflow
      // updates state based on if matched expression or not
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(value)) {
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
    }
  };

  /**
   * handleCheck()
   * if checkbox present, then this will store whether it is checked or not in the values object
   *
   * @param {Event} event
   */
  const handleCheck = (event) => {
    event.persist();
    let checkbox = event.target;

    // if checkbox present in values, reset function will remove the checkbox from the values object
    // else, will append checkbox to values with spread operator
    checkbox.name in values
      ? reset(checkbox.name)
      : setValues((values) => ({
          ...values,
          [checkbox.name]: checkbox.value,
        }));
  };

  /**
   * reset()
   * removes the input with the given name from the values object by using object destructuring and omit keyworrd
   * its saying to seperate the input with the name specified in the parameter from the other values
   * then just returns the other values
   * @param {String} name
   */
  const reset = (name) => {
    let { [name]: omit, ...otherValues } = values;
    setValues(otherValues);
  };

  /**
   * clearvalues()
   * empties out the values object
   */
  const clearValues = () => {
    setValues({});
  };

  return {
    handleChange,
    handleSubmit,
    handleCheck,
    reset,
    clearValues,
    values,
    emailValid,
    formValid,
  };
};

export default useForm;
