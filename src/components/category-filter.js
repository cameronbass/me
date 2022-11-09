import React, { useState } from 'react'

// Components
import MultiSelectSearchInput from "./category-input-container"
import CategoryFilterButton from "../components/category-filter-button"

export default function CategoryFilter(props) {
  const { multiSelectExpanded, setMultiSelectExpanded, currentCategories, setCategoryQuery } = props

  return (
    <>
      <CategoryFilterButton 
        setMultiSelectExpanded={setMultiSelectExpanded}
        multiSelectExpanded={multiSelectExpanded}
      />

      {multiSelectExpanded && (
        <MultiSelectSearchInput 
          currentCategories={currentCategories} 
          categoryQuery={setCategoryQuery}
        />
      )}
    </>
  )
}