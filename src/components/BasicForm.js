import useInputBis from "../hooks/use-input-bis";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    onChangeHandler: firstNameInputChangeHandler,
    onBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstNameInput
  } = useInputBis(value => value !== "")

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    onChangeHandler: lastNameInputChangeHandler,
    onBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput
  } = useInputBis(value => value !== "")

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    onChangeHandler: EmailInputChangeHandler,
    onBlurHandler: EmailInputBlurHandler,
    reset: resetEmailInput
  } = useInputBis(value => value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));

  let formIsValid = false
  console.log((firstNameIsValid && lastNameIsValid && emailIsValid));
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }

  const resetAllInputs = () => {
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    console.log({ first_name: enteredFirstName, last_name: enteredLastName, email: enteredEmail });
    resetAllInputs();
  }

  const firstNameClasses = firstNameHasError ? "form-control invalid" : "form-control";
  const lastNameClasses = lastNameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameInputChangeHandler} onBlur={firstNameInputBlurHandler} value={enteredFirstName} />
          {firstNameHasError && <p className="error-text">Enter a valid name (More than 5 characters)</p>}
        </div>

        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameInputChangeHandler} onBlur={lastNameInputBlurHandler} value={enteredLastName} />
          {lastNameHasError && <p className="error-text">Enter a valid last name (More than 2 characters)</p>}
        </div>
      </div>

      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={EmailInputChangeHandler} onBlur={EmailInputBlurHandler} value={enteredEmail} />
        {emailHasError && <p>Enter a valid email address</p>}
      </div>

      <div className='form-actions'>
        <button className={formIsValid ? "" : "btn-disabled"} disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
