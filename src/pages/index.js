import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../components/stylesheets/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="image-container">
      <Image />
    </div>
    <div class="content-container">
      <h1 class="greeting">Bonjour,</h1>
      <p class="sub-greeting"> Allow me to introduce myself: </p>
      <div class="separator-container">
        <div class="separator left"></div>
        <div class="separator center"></div>
        <div class="separator right"></div>
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
