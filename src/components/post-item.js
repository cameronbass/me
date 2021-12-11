import React from 'react'

import "./stylesheets/post-item.css"

export default function PostItem(props) {
  return (
    <div className='post-item-container'>
      <div className='post-item-title'>
        {props.title}
      </div>
      <div className='post-item-date'>
        <p className='post-item-content'><i>{props.date}</i> -</p>
        <p className='post-item-content'>&nbsp;<i>Cam Bass</i></p>
      </div>
    </div>
  )
}
