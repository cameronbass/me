/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Image from "../components/image"
import Linkedin from "../../src/images/Linkedin.svg"
import Email from "../../src/images/email.svg"
import Twitter from "../../src/images/twitter.svg"
import Header from "./header"
import "./stylesheets/layout.css"

import "../components/stylesheets/index.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <div className="image-container">
            <Image />
            <div style={{ textAlign: 'center', paddingTop: '20px', display: 'flex', justifyContent: 'space-evenly'}}>
              <a href="https://www.linkedin.com/in/cameron-michael-bass/">
                <img
                  style={{height: '44px', width: '44px', cursor: 'pointer'}}
                  className="profile"
                  src={Email}
                />
              </a>
              <a href="https://www.linkedin.com/in/cameron-michael-bass/">
                <img
                  style={{height: '44px', width: '44px', cursor: 'pointer'}}
                  className="profile"
                  src={Twitter}
                />
              </a>
              <a 
                href="https://www.linkedin.com/in/cameron-michael-bass/"
                className="twitter-icon"
              >
                <img
                  style={{height: '40px', width: '40px', cursor: 'pointer'}}
                  className=""
                  src={Linkedin}
                />
              </a>
            </div>
          </div>
          <div className="children-container">
            {children}
          </div>
        </main>
        <footer>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
