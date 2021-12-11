import React from 'react'
import Layout from "../components/layout"

import PostItem from "../components/post-item"

const Posts = () => (
  <Layout>
    <div className="timeline-heading-container">
      <h1 className="timeline-heading">Entries</h1>
    </div>
    <PostItem 
      title='Adding a Simple Modal With Gatsby.js'
      date='September 21, 2020'
    />
    <PostItem 
      title='Adventures In Creating Your Own Microservice' 
      date='August 10, 2019'
    />
  </Layout>
)

export default Posts
