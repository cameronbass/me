import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"
import "./stylesheets/header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container">
      <h1>
        {siteTitle}
        <p className="sub-heading">
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
