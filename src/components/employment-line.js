import React, { useState } from 'react'
import Modal from "../components/modal"

import "./stylesheets/employment-line.css"

export default function EmploymentLine(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="employment-line-container">
      <div 
        onClick={ () => setShow(true) } 
        className="employment-line-element" 
        style={{height: parseDate(props), backgroundColor: props.backgroundColor}}>
      </div>

      <div 
        className="employment-line-name"
        style={{textDecorationColor: props.backgroundColor}}
      >
        {props.name}
      </div>

      <Modal onClose={ () => setShow(false) } place={props.name} show={show} />
    </div>
  )
}

function parseDate(props) {
  var startDate = new Date(props.startDate)
  var endDate = new Date(props.endDate)

  var diffInTime = endDate.getTime() - startDate.getTime();
  var diffInDays = diffInTime / (1000 * 3600 * 24);

  return parseInt(diffInDays / 8)
}
