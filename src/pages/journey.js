import React from 'react'
import Layout from "../components/layout"
import Timeline from "../components/timelines/timeline"

export default function Journey() {
  return (
    <Layout>
      <div className="timeline-heading-container">
        <h2 className="timeline-heading">Experience</h2>
      </div>
      <Timeline />
    </Layout>
  );
}
