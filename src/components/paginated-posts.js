import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

// components
import PostItem from "../components/post-item"
import SearchInput from "../components/search-input"
import EmptySearchResults from "../components/empty-search-results"

export default function PaginatedPosts({ postsPerPage }) {
  const [query, setQuery] = useState("")
  const [posts, setPosts] = useState([])
  const [currentPosts, setCurrentPosts] = useState([])
  const [pageCount, setPageCount] = useState(0);
  const [postOffset, setPostOffset] = useState(0);

  useEffect(() => {
    const endOffset = postOffset + postsPerPage;

    fetch("http://localhost:3000/api/getAll?search=" + query)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setCurrentPosts(data.slice(postOffset, endOffset));
        setPageCount(Math.ceil(data.length / postsPerPage));
      })
  }, [postOffset, postsPerPage, query])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % posts.length;

    console.log(newOffset)
    setPostOffset(newOffset);
  };

  return (
    <div>
      <SearchInput setQuery={setQuery} />

      {currentPosts.map((post, index) => (
        <PostItem
          key={index}
          title={post.title || post.item.title}
          date={post.date || post.item.date}
          url={post.url || post.item.url}
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

      <EmptySearchResults currentPosts={currentPosts} />
    </div>
  )
}