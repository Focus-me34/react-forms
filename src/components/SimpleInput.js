import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== "")

  const {
    value: enteredEmail,
    isValid: enteredEmailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailInputIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault()
    if (!enteredNameIsValid || !enteredEmailInputIsValid) return

    console.log({name: enteredName, email: enteredEmail});
    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
      </div>
      {nameInputHasError && <p className="error-text">Enter a valid name</p>}

      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
      </div>
      {emailInputHasError && <p className="error-text">Enter a valid email</p>}

      <div className="form-actions">
        <button className={formIsValid ? "" : "btn-disabled"} disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
