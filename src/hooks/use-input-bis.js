import { useState } from "react"

const useInputBis = (checkValidity) => {
  const [inputValue, setInputValue]= useState("")
  const [isTouched, setIsTouched] = useState(false)

  const isInputValid = checkValidity(inputValue)
  const hasError = !isInputValid && isTouched

  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
  }

  const onBlurHandler = (e) => {
    setIsTouched(true)
  }

  const reset = () => {
    setInputValue("")
    setIsTouched(false)
  }

  return {
    value: inputValue,
    isValid: isInputValid,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset
  }
}

export default useInputBis;
