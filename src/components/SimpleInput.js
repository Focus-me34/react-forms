import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("")
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameInputIsTouched, setEnteredNameInputIsTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ""
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameInputIsTouched


  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameInputIsTouched(true)
  }

  const onSubmitUserNameHandler = (e) => {
    e.preventDefault()
    setEnteredNameInputIsTouched(true)

    if (!enteredNameIsValid) return

    setEnteredName("")
    setEnteredNameInputIsTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={onSubmitUserNameHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
      </div>
      {nameInputIsInvalid && <p className="error-text">Enter a valid name</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
