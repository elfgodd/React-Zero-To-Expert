import { useState } from 'react'

// Lo inicio como objeto vaci por si nose envia nada no reviente
const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }
  return [values, handleInputChange]
}

export default useForm

// Tambien se podria exportar asi
// return [values, ({target}) => {
//     setFormState({
//       ...values,
//       [target.name]: target.value
//     })
// }]
