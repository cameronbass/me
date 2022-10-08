// React
import React from 'react'

// Components
import Layout from "../components/layout"
import PaginatedPosts from "../components/paginated-posts"

// Stylesheets
import "../components/stylesheets/posts.css"

// Posts
export default function Posts() {
  return (
    <Layout>
      <div className="posts-container">
        <div className="timeline-heading-container">
          <div className="timeline-heading-brand timeline-heading-red"></div>
          <div className="timeline-heading-brand timeline-heading-blue"></div>
          <div className="timeline-heading-brand timeline-heading-yellow"></div>
          <h2 className="timeline-heading">Entries</h2>
        </div>

        <div className='page-information'>
          <p className='page-information__text'>We live in the information age, and it's undoubtedly the case that developers blogging about their discoveries has made learning how to build software much easier for me. Writing and posting about my technological findings is how I can give back in a small way.<span className='sub-text'><i>* Search by title or date</i></span></p>
        </div>

        <PaginatedPosts postsPerPage={2} />
      </div>
    </Layout>
  )
}
