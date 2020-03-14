import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
  <div style={{
    paddingTop: `35px`
  }}>
    <span style={{ paddingLeft: `35px` }}><Link to="/">Home</Link></span>
    <span style={{ paddingLeft: `35px` }}><Link to="/about">Blog</Link></span>
    <span style={{ paddingLeft: `35px` }}><Link to="/">Journey</Link></span>
    <span style={{ paddingLeft: `35px` }}><Link to="/about">Contact</Link></span>
  </div>
)

export default Menu
