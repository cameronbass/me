import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

// components
import PostItem from "../components/post-item"

export default function PaginatedPosts({ postsPerPage }) {
  const [posts, setPosts] = useState([])
  const [currentPosts, setCurrentPosts] = useState([])
  const [pageCount, setPageCount] = useState(0);
  const [postOffset, setPostOffset] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/getAll")
      .then(response => response.json())
      .then(data => {
        const endOffset = postOffset + postsPerPage;
        console.log(`Loading items from ${postOffset} to ${endOffset}`);

        setPosts(data)
        setCurrentPosts(data.slice(postOffset, endOffset));
        setPageCount(Math.ceil(data.length / postsPerPage));
      })
  }, [postOffset, postsPerPage])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % posts.length;

    console.log(newOffset)
    setPostOffset(newOffset);
  };

  return (
    <>
      {currentPosts.map((post, index) => (
        <PostItem
          key={index}
          title={post.title}
          date={post.date}
          url={post.url}
        />
      ))}

      <ReactPaginate
        containerClassName='pagination'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  )
}