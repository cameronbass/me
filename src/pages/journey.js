import React from 'react'

// Components
import Layout from "../components/layout"
import Timeline from "../components/timelines/timeline"

export default function Journey() {
  return (
    <Layout>
      <div className="timeline-heading-container">
        <div className="timeline-heading-brand timeline-heading-red"></div>
        <div className="timeline-heading-brand timeline-heading-blue"></div>
        <div className="timeline-heading-brand timeline-heading-yellow"></div>
        <h2 className="timeline-heading">Experience</h2>
      </div>

      <div className='page-information'>
        <p className='page-information__text'>My journey in the software industry has allowed me to work for large companies and small consultancies. My experience has provided me with training on various types of applications and platforms. <span className='sub-text'><i>* Click on the boxes for detailed information on my time at each company</i></span></p>
      </div>

      <Timeline />
    </Layout>
  );
}
