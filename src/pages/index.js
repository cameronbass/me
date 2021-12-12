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
        I have been working in the software industry for 6 years and I have had the good fortune of learning from and working with extremely smart and talented people throughout my years in technology.
      </p>
      <p>
        From the moment I learned that a career in software building was possible I never looked back.
      </p>
    </div>
  </Layout>
)

export default IndexPage
