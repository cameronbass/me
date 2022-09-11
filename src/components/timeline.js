import React from 'react'

import TimelineBox from "../components/timeline-box"
import TimelineLine from "../components/timeline-line"
import TimelineDate from "../components/timeline-date"

import CollectiveIdea from "../images/logo-vertical.svg"
import NGC from "../images/ngc-logo-bh.svg"
import Blackhawk from "../images/blackhawk.svg"
import AdvisoryAlpha from "../images/advisory-alpha.png"

import "./stylesheets/timeline.css"

const Timeline = () => (
  <div className="timeline-container">
    <div className="timeline-container__date">
      <TimelineDate date="Present" top="2%" />
      <TimelineDate date="2021" top="24%"/>
      <TimelineDate date="2020" top="49%"/>
      <TimelineDate date="2016" top="71%"/>
    </div>

    <div className="timeline-container__timeline"></div>

    <div className="timeline-container__timelines">
      <TimelineLine top="88%" />
      <TimelineLine top="60%" />
      <TimelineLine top="30%" />
      <TimelineLine top="3%" />
    </div>
    <div>
      <TimelineBox 
        name="Collective Idea" 
        title="Software Engineer"
        top="80%"
        image={CollectiveIdea}
        imageMargin="20px"
      />

      <TimelineBox 
        name="National Gift Card" 
        title="Software Engineer"
        top="35%"
        image={NGC}
        imageMargin="30px"
      />

      <TimelineBox 
        name="Blackhawk Network" 
        title="Software Engineer"
        top="-10%"
        image={Blackhawk}
        imageMargin="40px"
      />

      <TimelineBox 
        name="Advisory Alpha" 
        title="Software Engineer"
        top="-54%"
        image={AdvisoryAlpha}
        imageMargin="10px"
      />
    </div>
  </div>
)

export default Timeline
