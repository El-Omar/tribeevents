import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TeamImg = ({ onLoad }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team-comp.png" }) {
        childImageSharp {
          fluid(maxWidth: 1645) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img 
    fluid={data.placeholderImage.childImageSharp.fluid} 
    imgStyle={{
      objectFit: "cover",
      objectPosition: "0 50%",
    }}
    onLoad={onLoad}
  />
}

export default TeamImg
