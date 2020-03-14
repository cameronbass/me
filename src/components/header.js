import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#eae5e5`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#4c4c4c`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <p style={{
          fontSize: `16px`,
          paddingTop: `10px`
        }}>
          Software Engineer / Linguist
        </p>
      </h1>

      <Menu></Menu>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
