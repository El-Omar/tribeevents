import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const JoinusImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "join-us.png" }) {
        childImageSharp {
          fluid(maxWidth: 2482) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default JoinusImg
