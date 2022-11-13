import React from 'react'

export default function TextSearchInput(props) {
  const { setQuery } = props

  function handleChange(event) {
    setQuery(event.target.value)
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Title or Date"
        onChange={handleChange} />
    </div>
  )
}