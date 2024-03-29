import React, { useState } from 'react'
import Modal from '../modal'

import "../stylesheets/timelines/timeline.css"

export default function TimelineBox(props) {
  const [show, setShow] = useState(false);
  
  return(
    <div className="timeline-container__timeline__box__container" style={{ top: props.top }}>
      <div className="timeline-container__timeline__box__dates">
        { props.timeline }
      </div>

      <div onClick={ () => setShow(true) } className="timeline-container__timeline__box">
        <div className="timeline-container__timeline__box__logo-background">
          <img
            style={{ marginTop: props.imageMargin }}
            className="profile"
            src={props.image}
            alt="React Logo"
          />
        </div>

        <div className="timeline-container__timeline__box__company">
          <div className="timeline-container__timeline__box__name">
            {props.name}
          </div>

          <div className="timeline-container__timeline__box__title">
            {props.title}
          </div>
        </div>

        <Modal onClose={ () => setShow(false) } place={props.name} show={show} text={props.text} svg={props.image} />
      </div>
    </div>
  )
}
