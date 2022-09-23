import React from 'react'
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
      <Timeline />
    </Layout>
  );
}
