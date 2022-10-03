import React, { useEffect, useState } from 'react'
import Layout from "../components/layout"

import PostItem from "../components/post-item"

import "../components/stylesheets/posts.css"

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/getAll")
      .then(response => response.json())
      .then(data => setPosts(data))
  })

  return (
    <Layout>
      <div className="posts-container">
        <div className="timeline-heading-container">
          <div className="timeline-heading-brand timeline-heading-red"></div>
          <div className="timeline-heading-brand timeline-heading-blue"></div>
          <div className="timeline-heading-brand timeline-heading-yellow"></div>
          <h2 className="timeline-heading">Entries</h2>
        </div>

        <div>
          {posts.map((post, index) => (
            <PostItem
              key={index}
              title={post.title}
              date={post.date}
              url={post.url}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
