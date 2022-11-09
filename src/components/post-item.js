import React from 'react'

import "./stylesheets/post-item.css"

export default function PostItem(props) {
  function capitalizeWords(arr) {
    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
  }

  return (
    <a href={ props.url } target={'_blank'} rel={'noreferrer'} className='post-item-container'>
      <div className='post-item-title'>
        {props.title}
      </div>
      <div className='post-item-descriptive-container'>
        <div className='post-item-date'>
          <p className='post-item-content'><i>{props.date}</i></p>
        </div>
        <div className='post-item-categories'>
          <p className='post-item-category-content'><i>{capitalizeWords(props.categories)}</i></p>
        </div>
      </div>
    </a>
  )
}
