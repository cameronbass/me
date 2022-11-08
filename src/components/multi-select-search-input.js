import React, { useState } from 'react'
import "../../src/components/stylesheets/inputs/multi-select.css"

export default function MultiSelectSearchInput(props) {
  const { currentCategories, categoryQuery } = props

  const [categories, setCategories] = useState([
    { label: "sports", value: "Post Name" },
    { label: "philosophy", value: "Fake Name" },
    { label: "technology", value: "Fake Name" },
    { label: "culture", value: "Fake Name" },
  ])

  function handleChange(event) {
    if (event.target.checked) {
      categoryQuery([...currentCategories, event.target.value])
    } else {
      categoryQuery((prevState) =>
        prevState.filter((prevItem) => prevItem !== event.target.value)
      )
    }
  }

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className='multi-select'>
          <label>{category.label}</label>
          <input 
            key={index} 
            type="checkbox" 
            name="category" 
            value={category.label}
            className="multi-select-input"
            onChange={handleChange} />
        </div>
      ))}
    </div>
  )
}