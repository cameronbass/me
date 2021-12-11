import React from 'react'

import "./stylesheets/timeline.css"

const Timeline = () => (
  <div className="timeline-container">
    <div className="container">
      <div id="square2" className="square2"></div>
      <div id="square1" className="square1"></div>
      Hello, {formatName("Cam bass")}!
    </div>
  </div>
)

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(str) {
  return str
}

export default Timeline
