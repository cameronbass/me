import React, { useState } from 'react'
import Modal from '../modal'

import "../stylesheets/timelines/timeline.css"

export default function TimelineBox(props) {
  const [show, setShow] = useState(false);
  
  return(
    <div 
      onClick={ () => setShow(true) } 
      className="timeline-container__timeline__box" 
      style={{ top: props.top }}
    >
      <div className="timeline-container__timeline__box__logo-background">
        <img style={{ marginTop: props.imageMargin }}className="profile" src={props.image} alt="React Logo" />
      </div>

      <div className="timeline-container__timeline__box__company">
        <div className="timeline-container__timeline__box__name">
          {props.name}
        </div>

        <div className="timeline-container__timeline__box__title">
          {props.title}
        </div>
      </div>

      <Modal onClose={ () => setShow(false) } place={props.name} show={show} />
    </div>
  )
  // const [show, setShow] = useState(false);

  // return (
  //   <div className="employment-line-container">
  //     <div 
  //       onClick={ () => setShow(true) } 
  //       className="employment-line-element" 
  //       style={{height: parseDate(props), backgroundColor: props.backgroundColor}}>
  //     </div>

  //     <div 
  //       className="employment-line-name"
  //       style={{textDecorationColor: props.backgroundColor}}
  //     >
  //       {props.name}
  //     </div>

  //     <Modal onClose={ () => setShow(false) } place={props.name} show={show} />
  //   </div>
  // )
}

// function parseDate(props) {
//   var startDate = new Date(props.startDate)
//   var endDate = new Date(props.endDate)

//   var diffInTime = endDate.getTime() - startDate.getTime();
//   var diffInDays = diffInTime / (1000 * 3600 * 24);

//   return parseInt(diffInDays / 8)
// }
