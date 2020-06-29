import { useState, useMemo } from "react";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [emailValid, setEmailValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    validateInput(event.target.name, event.target.value);
  };

  useMemo(() => {
    return () => {
      setFormValid(emailValid);
    };
  }, [emailValid]);

  const validateInput = (name, value) => {
    console.log(name);
    console.log(value);
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === "email") {
      if (!regex.test(value)) {
        console.log("false");
        setEmailValid(false);
      } else {
        console.log("true");
        setEmailValid(true);
      }
    }
  };

  const handleCheck = (event) => {
    event.persist();
    let checkbox = event.target;

    checkbox.name in values
      ? reset(checkbox.name)
      : setValues((values) => ({
          ...values,
          [checkbox.name]: checkbox.value,
        }));
  };

  const reset = (name) => {
    let { [name]: omit, ...otherValues } = values;
    setValues(otherValues);
  };

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
