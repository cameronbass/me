import React from 'react'

import TimelineBox from "./timeline-box"
import TimelineLine from "./timeline-line"
import TimelineDate from './timeline-date'

import CollectiveIdea from '../../images/logo-vertical.svg'
import NGC from "../../images/ngc.svg"
import Blackhawk from "../../images/blackhawk.svg"
import AdvisoryAlpha from "../../images/advisory.svg"

import "../../components/stylesheets/timelines/timeline.css"

const Timeline = () => (
  <div className="timeline-container">
    <div className="timeline-container__date">
      <TimelineDate date="Jan '22 - Present" top="2%" />
      <TimelineDate date="2021 - 2022" top="24%"/>
      <TimelineDate date="2020 - 2021" top="49%"/>
      <TimelineDate date="2016 - 2020" top="71%"/>
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
        name="Advisory Alpha" 
        title="Software Engineer"
        timeline="Jan '22 - Present"
        top="-20px"
        image={AdvisoryAlpha}
        imageMargin="0px"
      />

      <TimelineBox 
        name="Blackhawk Network" 
        title="Software Engineer"
        timeline="2021 - 2022"
        top="25px"
        image={Blackhawk}
        imageMargin="0px"
      />

      <TimelineBox 
        name="National Gift Card" 
        title="Software Engineer"
        timeline="2020 - 2021"
        top="85px"
        image={NGC}
        imageMargin="0px"
      />

      <TimelineBox 
        name="Collective Idea" 
        title="Software Engineer"
        timeline="2016 - 2020"
        top="135px"
        image={CollectiveIdea}
        imageMargin="0px"
      />
    </div>
  </div>
)

export default Timeline
