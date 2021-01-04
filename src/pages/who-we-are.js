import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutUsImg from "../components/aboutusImg";

const WhoWeAre = () => {
  const data = useStaticQuery(graphql`
    { 
      team: allContentfulTeamMembers(sort: {fields: [createdAt]}) {
        nodes {
          name
          function
          email
          image {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Who we are" />
      <section className="jumbotron jumbotron--banner">
        <header className="jumbotron__header jumbotron__header--center">
          <h1 className="jumbotron__title">WHO ARE WE?</h1>
        </header>
        <AboutUsImg />
      </section>

      <div className="jumbotron jumbotron--team">
        { data.team.nodes.map((member, i) => (
            <div className="team-member" key={i}>
              <Img className="team-image" fluid={member.image.fluid} alt={member.name} />
              <div className="member-info">
              <strong className="member-name">{member.name}</strong>
                <strong className="member-function">{member.function}</strong>
                <a href={`mailto:${member.email}`} className="email">{member.email}</a>
              </div>
            </div>
        )) }
      </div>
    </Layout>
  )
}

export default WhoWeAre
