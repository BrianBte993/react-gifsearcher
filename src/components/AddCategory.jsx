import { useState } from 'react'

export const AddCategory = ({ /* setCategories, categories */ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (inputValue.trim().length <= 1) return;

    /*  setCategories([...categories, inputValue]) */
    onNewCategory(inputValue.trim())

    setInputValue('');
  }


  return (

    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Bucar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}
