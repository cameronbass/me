import React from 'react'
import TimelineBox from "../components/timeline-box"
import TimelineLine from "../components/timeline-line"

import "./stylesheets/timeline.css"

const Timeline = () => (
  <div className="timeline-container">
    <div className="timeline-container__timeline"></div>

    <div><TimelineLine /></div>
    <div><TimelineBox name="Collective Idea" /></div>
  </div>
)

export default Timeline
