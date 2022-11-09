import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

// Components
import PostItem from "../components/post-item"
import TextSearchInput from "../components/text-search-input"
import MultiSelectSearchInput from "../components/multi-select-search-input"
import EmptySearchResults from "../components/empty-search-results"

// StyleSheets
import "../../src/components/stylesheets/inputs/multi-select.css"

// Images
import Arrow from "../../src/images/arrow.svg"

// Plugins
import ClickAwayListener from '@mui/base/ClickAwayListener';

export default function PaginatedPosts({ postsPerPage }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentCategories, setCategoryQuery] = useState([])
  const [multiSelectExpanded, setMultiSelectExpanded] = useState(false);
  const [posts, setPosts] = useState([])
  const [currentPosts, setCurrentPosts] = useState([])
  const [pageCount, setPageCount] = useState(0);
  const [postOffset, setPostOffset] = useState(0);

  useEffect(() => {
    console.log(process.env.NODE_ENV)
    console.log(process.env.GATSBY_SERVER_URI)
    const endOffset = postOffset + postsPerPage;

    console.log(currentCategories)

    const categories = encodeURIComponent(JSON.stringify(currentCategories))

    fetch(process.env.GATSBY_SERVER_URI + searchQuery + `&categories=${categories}`)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setCurrentPosts(data.slice(postOffset, endOffset));
        setPageCount(Math.ceil(data.length / postsPerPage));
      })
  }, [postOffset, postsPerPage, searchQuery, currentCategories])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % posts.length;

    setPostOffset(newOffset);
  };

  const handleClickAway = () => {
    if (multiSelectExpanded) {
      setMultiSelectExpanded(false)
    }
  }

  return (
    <div>
      <TextSearchInput setQuery={setSearchQuery} />
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <div className='category-filter'>
            <div 
              className='category-filter-dropdown' 
              onClick={() => setMultiSelectExpanded(!multiSelectExpanded)}
              style={{
                backgroundColor: multiSelectExpanded ? `#fff` : ``,
              }}
            >
              <span className='category-filter-title' >Category Filter</span>
              <img
                src={Arrow}
                style={{
                  transform: multiSelectExpanded ? `rotate(180deg)` : `rotate(0deg)`,
                  transitionDuration: `150ms`,
                }}
              />
            </div>
          </div>
          {multiSelectExpanded && (
            <MultiSelectSearchInput 
              currentCategories={currentCategories} 
              categoryQuery={setCategoryQuery}
            />
          )}
        </div>
      </ClickAwayListener>

      {currentPosts.map((post, index) => (
        <PostItem
          key={index}
          title={post.title || post.item.title}
          date={post.date || post.item.date}
          categories={post.categories || post.item.categories}
          url={post.url || post.item.url}
        />
      ))}

      {(currentPosts.length > 0 && posts.length > 1) &&
        <ReactPaginate
          containerClassName='pagination'
          nextLabel=">"
          onPageChange={handlePageClick}
          pageLinkClassName="page-link"
          nextLinkClassName="page-link-next"
          previousLinkClassName="page-link-previous"
          activeClassName="active"
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      }

      <EmptySearchResults posts={currentPosts} />
    </div>
  )
}