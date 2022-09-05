import React from 'react'

import "./stylesheets/timeline.css"

export default function TimelineDate(props) {
  return(
    <div style={{ top: props.top }} className="timeline-container__timeline__date">
      {props.date}
    </div>
  )
}
