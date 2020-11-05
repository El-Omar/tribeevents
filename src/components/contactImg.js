import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ContactImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "contact.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
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
  />
}

export default ContactImg
