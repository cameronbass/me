import React from 'react'
import Layout from "../components/layout"

import PostItem from "../components/post-item"

const Posts = () => (
  <Layout>
    <div className="timeline-heading-container">
      <h2 className="timeline-heading">Entries</h2>
    </div>

    <PostItem 
      title='Adjustable Form Text Area with the contenteditable Tag'
      date='June 13, 2017'
      url='https://collectiveidea.com/blog/archives/2017/06/13/adjustable-form-text-area-with-the-contenteditable-tag'
    />

    <PostItem 
      title='Efficient Learning for New Programmers' 
      date='July 06, 2016'
      url='https://collectiveidea.harmonycms.com/blog/archives/2016/07/06/efficient-learning-for-new-programmers'
    />
  </Layout>
)

export default Posts
