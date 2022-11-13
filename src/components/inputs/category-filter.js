import React from 'react'

// Components
import CategoryFilterDrowdown from "./category-filter-dropdown"
import CategoryFilterButton from "./category-filter-button"

export default function CategoryFilter(props) {
  const { 
    multiSelectExpanded, 
    setMultiSelectExpanded, 
    currentCategories, 
    setCategoryQuery 
  } = props

  return (
    <>
      <CategoryFilterButton 
        setMultiSelectExpanded={setMultiSelectExpanded}
        multiSelectExpanded={multiSelectExpanded}
      />

      {multiSelectExpanded && (
        <CategoryFilterDrowdown
          currentCategories={currentCategories} 
          categoryQuery={setCategoryQuery}
        />
      )}
    </>
  )
}