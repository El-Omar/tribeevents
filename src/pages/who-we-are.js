import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"

import logo from "../assets/images/logo.png";
import AboutUsImg from "../components/aboutusImg";
import WhoWeAreImg from "../components/whoWeAreImg";

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
      values: allContentfulValues(sort: {fields: [createdAt]}) {
        nodes {
          color
          title
          quote {
            quote
          }
          text {
            text
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
        <WhoWeAreImg />
      </section>

      <section className="wrap wrap--values">
        <div className="container">
          <div className="row">
            <div className="w-5">
              <h2>OUR T.R.I.B.E VALUES</h2>
              <p className="description">
                Een Tribe [stam] is een groep van verschillende mensen met een eigen cultuur die één gemeenschap vormen. Ook bij Tribe Events hechten we veel belang aan diversiteit en samenhorigheid.
              </p>
              <AniLink paintDrip hex='#ececec' to='/contact' className='btn btn-secondary'>Contact</AniLink>
              <img className="logo d-md-none" src={logo} alt='Tribe Events' />
            </div>

            <div className="w-5">
              <div className="values">
                { data.values.nodes.map((value, i) => (
                  <div className="value" key={i}>
                    <h3>
                      { value.color && <div className="title__bg" style={{ backgroundColor: value.color }}></div> }
                      { value.title }
                    </h3>
                    { value.quote.quote && <p className="quote">"{ value.quote.quote }"</p> }
                    { value.text.text && <p className="text">{ value.text.text }</p> }
                  </div>
                )) }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="jumbotron jumbotron--banner">
        <AboutUsImg />
      </section>

      <section className="wrap wrap--meet">
        <header className="jumbotron__header jumbotron__header--center">
          <h1 className="jumbotron__title">MEET OUR TRIBE</h1>
        </header>
        <div className="container">
          <p className="description text-center">Nieuwsgierig? Leer ons geweldige team kennen! Jong, energiek en klaar om jouw project met veel enthousiasme aan te pakken!</p>
        </div>
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
