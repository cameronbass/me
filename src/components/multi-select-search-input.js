import React, { useState } from 'react'

export default function MultiSelectSearchInput(props) {
  const { currentCategories, categoryQuery } = props

  const [categories, setCategories] = useState([
    { label: "Sports", value: "sports" },
    { label: "Philosophy", value: "philosophy" },
    { label: "Technology", value: "technology" },
    { label: "Culture", value: "culture" },
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
    <div className='category-container'>
      <div className='category-container-header'>
        Filter By Category
      </div>
      {categories.map((category, index) => (
        <div key={index} className='multi-select'>
          <label>{category.label}</label>
          <input 
            key={index} 
            type="checkbox" 
            name="category" 
            value={category.value}
            className="multi-select-input"
            onChange={handleChange} />
        </div>
      ))}
    </div>
  )
}