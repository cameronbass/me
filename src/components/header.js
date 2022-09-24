import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"
import "./stylesheets/header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container">
      <div className="timeline-heading-brand heading-colors timeline-heading-red" style={{height: '80px'}}></div>
      <div className="timeline-heading-brand heading-colors timeline-heading-blue" style={{height: '80px'}}></div>
      <div className="timeline-heading-brand heading-colors timeline-heading-yellow" style={{height: '80px', marginRight: '10px'}}></div>
      <h1>
        {siteTitle}

        <p className="sub-heading">
          Software Engineer / Curiosity
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
