import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Img from "gatsby-image"
import ModalImage from "react-modal-image";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeStyles } from "../styles/homeStyles";

import TeamImg from "../components/teamImg";
import JoinusImg from "../components/joinusImg";
import step1Img from "../assets/images/step-1.png";
import step2Img from "../assets/images/step-2.png";
import step3Img from "../assets/images/step-3.png";
import step4Img from "../assets/images/step-4.png";

const IndexPage = (props) => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHome(sort: {fields: [createdAt]}) {
        nodes {
          welcomeTitle
          welcomeText {
            welcomeText
          }
          joinUsTitle
          joinUsText {
            joinUsText
          }
          testimonialsTitle
          gallery {
            title
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }

      allContentfulTestimonials(sort: {fields: [createdAt]}) {
        nodes {
          name
          client
          link
          quote {
            json
          }
          logo {
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const home = data.allContentfulHome.nodes[0];
  const testimonials = data.allContentfulTestimonials.nodes;

  console.log(testimonials);
  
  return (
    <Layout>
      <HomeStyles> 
        <SEO title="Home" />
        <section className="jumbotron jumbotron--welcome">
          <TeamImg onLoad={() => {
            // setIsImageLoaded(true);
            // isFontLoaded && setLoading(false); 
          }} />
          <div className="container">
            <header className="jumbotron__header">
              <h1 className="jumbotron__title">{home.welcomeTitle}</h1>
            </header>
            <p className="description">
              {home.welcomeText.welcomeText}
            </p>
            <Link to='/contact' className="btn btn-primary">Hire us</Link>
          </div>
        </section>

        <section className="jumbotron jumbotron--workflow">

          <div className="steps__content">
            <header className="jumbotron__header jumbotron__header--center">
              <h1 className="jumbotron__title">How this works</h1>
            </header>
              <div className="steps__wrapper">
                <article className="step step--1">
                  <img src={step1Img} alt="Contact"/>
                  <div className="content">
                    <h3 className="step__title">Contact</h3>
                    <p className="description description--step">
                      Je neemt contact met ons op. Waar kunnen wij jou mee helpen?
                    </p>
                  </div>
                </article>

                <article className="step step--2">
                  <img src={step2Img} alt="Beschrijf"/>
                  <div className="content">
                    <h3 className="step__title">Beschrijf</h3>
                    <p className="description description--step">
                      Beschrijf jouw event. Wat, waar, wanneer en het aantal bezoekers.
                    </p>
                  </div>
                </article>

                <article className="step step--3">
                  <img src={step3Img} alt="Selectie"/>
                  <div className="content">
                    <h3 className="step__title">Selectie</h3>
                    <p className="description description--step">
                      Wij selecteren het perfecte team voor jouw project!
                    </p>
                  </div>
                </article>

                <article className="step step--4">
                  <img src={step4Img} alt="Support"/>
                  <div className="content">
                    <h3 className="step__title">Support</h3>
                    <p className="description description--step">
                      Geniet, wij doen de rest.
                    </p>
                  </div>
                </article>

              </div>
            </div>
        </section>

        <section className="jumbotron jumbotron--join">
          <div className="container">
            <header className="jumbotron__header">
              <h1 className="jumbotron__title">{home.joinUsTitle}</h1>
            </header>
            <p className="description">
              {home.joinUsText.joinUsText}
            </p>
            <Link to='/contact#student' className='btn btn-secondary'>Join us</Link>
          </div>
          <JoinusImg />
        </section>

        <section className="jumbotron jumbotron--testimonials">
          <header className="jumbotron__header jumbotron__header--center">
            <h1 className="jumbotron__title">What people say about us</h1>
          </header>
          <div className="container">
            <Carousel swipeable={true}>
              {
                testimonials.map((t, i) => (
                  <div className="quote-wrapper" key={i}>
                    <div className="quote">
                      { documentToReactComponents(t.quote.json) }
                    </div>
                    <div className="testimonial__img">
                      { t.link ? 
                        <a href={t.link} target="_blank" rel="noreferrer">
                          <Img fluid={t.logo.fluid} imgStyle={{ objectFit: "contain", objectPosition: "center", }} />
                        </a> 
                        : <Img fluid={t.logo.fluid} imgStyle={{ objectFit: "contain", objectPosition: "center", }} /> 
                      }
                    </div>
                    <strong className="testimonial__name">
                      {t.name}, <span className="function">{t.client}</span>
                    </strong>
                  </div>
                ))
              }
            </Carousel>
          </div>
        </section>

        <section className="jumbotron jumbotron--gallery">
          {
            home.gallery.map((picture, i) => (
              <div className="img-wrapper" key={i}>
                <ModalImage small={picture.fluid.src} large={picture.fluid.src} alt={picture.title} hideDownload={true} hideZoom={true}></ModalImage>
              </div>
            ))
          }
        </section>
      </HomeStyles>
    </Layout>
  )
}

export default IndexPage
