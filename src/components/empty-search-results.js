import React from 'react'

export default function EmptySearchResults(props) {
  return (
    <div>
      {props.currentPosts < 1 &&
        <div className='empty-posts'>
          No Results Found...
        </div>
      }
    </div>
  )
}
