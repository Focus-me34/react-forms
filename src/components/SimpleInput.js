import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("")
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameInputIsTouched, setEnteredNameInputIsTouched] = useState(false)

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value)
    if (e.target.value.trim() !== "") {
      setEnteredNameIsValid(true)
    }
  }

  const nameInputBlurHandler = (e) => {
    setEnteredNameInputIsTouched(true)
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false)
    }
  }

  const onSubmitUserNameHandler = (e) => {
    e.preventDefault()
    setEnteredNameInputIsTouched(true)

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)
    console.log(enteredName);
    setEnteredName("")
    setEnteredNameInputIsTouched(false)
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameInputIsTouched
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
