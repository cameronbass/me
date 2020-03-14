import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      maxWidth: `300px`,
      marginBottom: `1.45rem`,
      minWidth: `300px`
    }}>
      <Image />
    </div>
    <div style={{
      marginLeft: `50px`
    }}>
      <h1 style={{
        fontSize: `78px`
      }}>
       Bonjour,
      </h1>
      <p style={{
        fontSize: `34px`,
        paddingTop: `10px`,
        paddingBottom: `10px`
      }}>
        Allow me to introduce myself:
      </p>
      <p>
        I'm baby tofu tacos hammock pour-over, kinfolk lumbersexual asymmetrical banh mi literally street art tbh tousled raclette air plant. Mumblecore everyday carry chambray trust fund austin, venmo bushwick chicharrones vice. Deep v photo booth lomo pork belly next level hexagon fanny pack fixie cronut letterpress skateboard kitsch intelligentsia. Umami echo park mumblecore, polaroid hexagon asymmetrical stumptown fam.
      </p>
      <p>
        Copper mug craft beer food truck affogato irony. Kickstarter hexagon enamel pin wayfarers williamsburg tumeric godard literally single-origin coffee pug. Occupy organic raw denim yuccie. Fam flexitarian iPhone microdosing, chartreuse meditation kale chips. Leggings sustainable put a bird on it tote bag squid bespoke hell of mustache tattooed. Selvage next level iceland, whatever farm-to-table man bun brooklyn.
      </p>
    </div>
  </Layout>
)

export default IndexPage
