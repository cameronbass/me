import React from 'react'

import "./stylesheets/timeline.css"

export default function TimelineLine(props) {
  return(
    <div style={{ top: props.top }}className="timeline-container__timeline__line"></div>
  )
}
