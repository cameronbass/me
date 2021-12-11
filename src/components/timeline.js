import React from 'react'
import EmploymentLine from "../components/employment-line"

import "./stylesheets/timeline.css"

const Timeline = () => (
  <div className="timeline-container">
    <div className="container">
      <EmploymentLine name="Collective Idea" startDate="01/03/2016" endDate="01/03/2022" />
      <EmploymentLine name="Blackhawk Network" startDate="11/03/2020" endDate="12/24/2021"/>
      <EmploymentLine name="National Gift Card" startDate="11/03/2019" endDate="11/01/2020"/>
    </div>
  </div>
)

export default Timeline
