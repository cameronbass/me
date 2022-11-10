import React, { useState } from 'react'

// Components
import CategoryInput from "./category-input"

export default function CategoryInputContainer(props) {
  const { currentCategories, categoryQuery } = props

  const [categories, setCategories] = useState([
    { label: "Sports", value: "sports" },
    { label: "Philosophy", value: "philosophy" },
    { label: "Technology", value: "technology" },
    { label: "Culture", value: "culture" },
  ])

  return (
    <div className='category-container'>
      <div className='category-container-header'>
        Filter By Category
      </div>

      {categories.map((category, index) => (
        <CategoryInput 
          key={index}
          currentCategories={currentCategories}
          categoryQuery={categoryQuery}
          category={category}
        />
      ))}
    </div>
  )
}