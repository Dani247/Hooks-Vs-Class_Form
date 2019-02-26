import { useState, useEffect } from 'react'

// * custom hooks
export const useFormInput = initState => {
  const [ value, setValue ] = useState(initState)

  const onChangeHandler = e => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: onChangeHandler
  }
}

export const useAppTitle = title => {
  useEffect(() => {
    window.document.title = title
  })
}
