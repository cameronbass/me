import React from 'react'
import { Link } from 'gatsby'

import "./stylesheets/menu.css"

const Menu = () => (
  <div class="menu-container">
    <span class="menu-list"><Link to="/">Home</Link></span>
    <span class="menu-list"><Link to="/about">Blog</Link></span>
    <span class="menu-list"><Link to="/">Journey</Link></span>
    <span class="menu-list"><Link to="/about">Contact</Link></span>
  </div>
)

export default Menu
