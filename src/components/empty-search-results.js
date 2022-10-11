import React from 'react'

export default function EmptySearchResults(props) {
  return (
    <div>
      {props.posts.length <= 0 &&
        <div className='empty-posts'>
          No Results Found...
        </div>
      }
    </div>
  )
}
