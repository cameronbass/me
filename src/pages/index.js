import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/stylesheets/index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="content-container">
      <h1 className="greeting">Bonjour,</h1>
      <p className="sub-greeting"> Allow me to introduce myself: </p>
      <div className="separator-container">
        <div className="separator left"></div>
        <div className="separator center"></div>
        <div className="separator right"></div>
      </div>
      <p>
        Placeholder Text
      </p>
      <p>
        Placeholder Text
      </p>
    </div>
  </Layout>
)

export default IndexPage
