import React from 'react'

import "./stylesheets/employment-line.css"

const EmploymentLine = (props) => (
  <div className="employment-line-container">
    <div className="employment-line-name">{props.name}</div>
    <div>Days at {props.name}: {parseDate(props)}</div>
    <div className="square2" style={{height: parseDate(props)}}></div>
  </div>
)

function parseDate(props) {
  var startDate = new Date(props.startDate)
  var endDate = new Date(props.endDate)

  var diffInTime = endDate.getTime() - startDate.getTime();
  var diffInDays = diffInTime / (1000 * 3600 * 24);

  return parseInt(diffInDays/ 8)
}

export default EmploymentLine