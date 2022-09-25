/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SVG from 'react-inlinesvg'

import Image from "../components/image"
import Linkedin from "../../src/images/linkedin.svg"
import Gmail from "../../src/images/gmail.svg"
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
          maxWidth: 1000,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <div>
            <div className="image-container">
              <Image />
              <div style={{ textAlign: 'center', paddingTop: '20px', display: 'flex', justifyContent: 'space-evenly'}}>
                <a href onClick={() => window.location = 'mailto:cam@statcasters.com'} target={'_blank'}>
                  <SVG className="svg" src={Gmail} width={32} height={32}  />
                </a>
                <a href="https://twitter.com/cameronmbass?lang=en" target={'_blank'}>
                  <SVG 
                    src={Twitter} 
                    className="svg twitter"
                    width={32} 
                    height={32}  
                  />
                </a>
                <a 
                  href="https://www.linkedin.com/in/cameron-michael-bass/" target={'_blank'}
                  className="twitter-icon"
                >
                  <SVG className="svg linkedin" src={Linkedin} width={32} height={32}  />
                </a>
              </div>
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
