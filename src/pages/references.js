import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

import ReferencesImg from "../components/referencesImg";

const References = () => {
  const data = useStaticQuery(graphql`
    {
      references: allContentfulReferences(sort: {fields: [createdAt]}) {
        nodes {
          link
          name
          logo {
            fixed(width: 120) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="References" />
      <section className="jumbotron jumbotron--banner jumbotron--banner--references">
        <header className="jumbotron__header jumbotron__header--center">
          <h1 className="jumbotron__title">References</h1>
          <p className="description">
            We have teamed up with several companies and left a professional trail of teamspirit and positivity.
          </p>
        </header>
        <ReferencesImg />
      </section>

      <div className="jumbotron jumbotron--references">
        { data.references.nodes.map((ref, i) => (
            <div className="rerference" key={i}>
              { ref.link ? 
                <a href={ref.link} target="_blank" rel="noreferrer">
                  <Img className="team-image" fixed={ref.logo.fixed} alt={ref.name} />
                </a> 
                : <Img className="team-image" fixed={ref.logo.fixed} alt={ref.name} />
              }
            </div>
        )) }
      </div>
    </Layout>
  )
}

export default References
