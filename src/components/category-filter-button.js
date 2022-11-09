import React from 'react'

// Images
import Arrow from "../../src/images/arrow.svg"

export default function CategoryFilterButton(props) {
  const { multiSelectExpanded, setMultiSelectExpanded } = props

  return (
    <>
      <div 
        className='category-filter-dropdown' 
        onClick={() => setMultiSelectExpanded(!multiSelectExpanded)}
        style={{ backgroundColor: multiSelectExpanded ? `#fff` : ``}}
      >
        <span className='category-filter-title' >Category Filter</span>
        <img
          src={Arrow}
          style={{
            transform: multiSelectExpanded ? `rotate(180deg)` : `rotate(0deg)`,
            transitionDuration: `150ms`,
          }}
        />
      </div>
    </>
  )
}