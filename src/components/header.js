import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"
import "./stylesheets/header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div class="header-container">
      <h1>
        {siteTitle}
        <p class="sub-heading">
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
