import { useState } from 'react'

// Lo inicio como objeto vaci por si nose envia nada no reviente
const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const reset = () => {
    setValues(initialState)
  }

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }
  return [values, handleInputChange, reset]
}

export default useForm
