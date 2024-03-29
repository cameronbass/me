import React from 'react'
import { Link } from 'gatsby'

import "./stylesheets/menu.css"

const Menu = () => (
  <div className="menu-container">
    <span className="menu-list"><Link to="/">Home</Link></span>
    <span className="menu-list"><Link to="/journey">Journey</Link></span>
    <span className="menu-list"><Link to="/posts">Posts</Link></span>
    <span className="menu-list"><Link to="/casts">Casts</Link></span>
  </div>
)

export default Menu
