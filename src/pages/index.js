import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Layout from "../components/layout"
import SEO from "../components/seo"

import TeamImg from "../components/teamImg";
import JoinusImg from "../components/joinusImg";
import step1Img from "../assets/images/step-1.png";
import step2Img from "../assets/images/step-2.png";
import step3Img from "../assets/images/step-3.png";
import step4Img from "../assets/images/step-4.png";
import testimonialImg from "../assets/images/testimonial.jpg";

import gallery1 from "../assets/images/gallery/gallery1.png";
import gallery2 from "../assets/images/gallery/gallery2.png";
import gallery3 from "../assets/images/gallery/gallery3.png";
import gallery4 from "../assets/images/gallery/gallery4.png";
import gallery5 from "../assets/images/gallery/gallery5.png";
import gallery6 from "../assets/images/gallery/gallery6.png";
import gallery7 from "../assets/images/gallery/gallery7.png";
import gallery8 from "../assets/images/gallery/gallery8.png";
import gallery9 from "../assets/images/gallery/gallery9.png";

const IndexPage = () => {
  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
  }

  const $step1 = useRef(null);
  const $step2 = useRef(null);
  const $step3 = useRef(null);
  const $step4 = useRef(null);

  useEffect(() => {
    
    gsap.to($step1.current, {
      scrollTrigger: {
        trigger: $step1.current,
        start: 'center 75%',
        end: 'top 75%',
        scrub: 1,
        pin: $step1.current,
        pinSpacing: true,
        onLeave: () => {
          gsap.to($step2.current, {
            scrollTrigger: {
              trigger: $step2.current,
              start: 'center 60%',
              end: 'top 60%',
              scrub: 1,
              pin: $step2.current,
              onLeave: () => {
                gsap.to($step3.current, {
                  scrollTrigger: {
                    trigger: $step3.current,
                    start: 'center 50%',
                    end: 'top 50%',
                    scrub: 1,
                    pin: $step3.current,
                    onLeave: () => {
                      gsap.to($step4.current, {
                        scrollTrigger: {
                          trigger: $step4.current,
                          start: 'center 40%',
                          end: 'top 40%',
                          scrub: 1,
                          pin: $step4.current,
                        },
                        x: 0,
                        duration: 1,
                        opacity: 1
                      })
                    },
                  },
                  x: 0,
                  duration: 1,
                  opacity: 1
                })
              },
            },
            x: 0,
            duration: 2,
            opacity: 1
          })
        },
      },
      x: 0,
      duration: 1,
      opacity: 1
    })

  }, [])
  
  // const data = useStaticQuery(graphql`
  //   { 
  //     projects: allContentfulProject(sort: {fields: [createdAt]}) {
  //       edges {
  //         node {
  //           slug
  //           title
  //           images {
  //             fluid(maxWidth: 800) {
  //               ...GatsbyContentfulFluid_withWebp
  //             }
  //             title
  //           }
  //         }
  //       }
  //     }
  //     placeholderImage: file(relativePath: { eq: "elomar@2x.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1104) {
  //           ...GatsbyImageSharpFluid_withWebp_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Layout>
      <SEO title="Home" />
      <section className="jumbotron jumbotron--welcome">
        <TeamImg  />
        <div className="container">
          <header className="jumbotron__header">
            <h1 className="jumbotron__title">Our tribe supports your event</h1>
          </header>
          <p className="description">
            Tribe Events zorgt voor cateringpersoneel op alle types evenementen, 
            van een privéfeest voor particulieren tot een bedrijfsfeest.
          </p>
          <Link to='/' className="btn btn-primary">Hire us</Link>
        </div>
      </section>

      <section className="jumbotron jumbotron--workflow">

        <div className="steps__content">
          <header className="jumbotron__header jumbotron__header--center">
            <h1 className="jumbotron__title">How this works</h1>
          </header>
            <div className="steps__wrapper">
              <article className="step step--1" ref={$step1}>
                <img src={step1Img} alt="Contact"/>
                <h3 className="step__title">Contact</h3>
                <p className="description description--step">
                  Je neemt contact met ons op. Waar kunnen wij jou mee helpen?
                </p>
              </article>
              <article className="step step--2" ref={$step2}>
                <img src={step2Img} alt="Beschrijf"/>
                <h3 className="step__title">Beschrijf</h3>
                <p className="description description--step">
                  Beschrijf jouw event. Wat, waar, wanneer en het aantal bezoekers.
                </p>
              </article>
              <article className="step step--3" ref={$step3}>
                <img src={step3Img} alt="Selectie"/>
                <h3 className="step__title">Selectie</h3>
                <p className="description description--step">
                  Wij selecteren het perfecte team voor jouw project!
                </p>
              </article>
              <article className="step step--4" ref={$step4}>
                <img src={step4Img} alt="Support"/>
                <h3 className="step__title">Support</h3>
                <p className="description description--step">
                  Beschrijf jouw event. Wat, waar, wanneer en het aantal bezoekers.
                </p>
              </article>
            </div>
          </div>
      </section>

      <section className="jumbotron jumbotron--join">
        <div className="container">
          <header className="jumbotron__header">
            <h1 className="jumbotron__title">Your tribe attracts your vibe!</h1>
          </header>
          <p className="description">
            Je zoekt niet zomaar naar een studentenjob, maar je wil deel uitmaken van een
            geledig en divers team?
          </p>
          <Link to='/' className='btn btn-secondary'>Join us</Link>
        </div>
        <JoinusImg />
      </section>

      <section className="jumbotron jumbotron--testimonials">
        <header className="jumbotron__header jumbotron__header--center">
          <h1 className="jumbotron__title">What people say about us</h1>
        </header>
        <div className="container">
          <p className="quote">
            Sedert een klein jaartje werken we voor onze extra personeelsleden op events 
            (kelners en keukenpersoneel) samen met 'Tribe Events'. Van bij het begin liep 
            de samenwerking zeer vlot. Hun personeel is steeds vriendelijk,... piekfijn 
            uitgedost en altijd op tijd aanwezig, 3 kenmerken die we zelf hoog in het 
            vaandel houden! Sedert de samenwerking met Glodi en zijn team hoef ik mij 
            merkelijk minder zorgen te maken om voldoende medewerkers te hebben onze 
            evenementen wat ons een enorme tijdsbesparing en geeft in de planning en 
            een pak minder stress! Bovendien houdt Tribe events ook steeds rekening 
            met onze wensen en opmerkingen zodat ze steeds de ideale medewerkers voor 
            elk event van ons selecteren. Kortom, we kijken met plezier uit naar een 
            samenwerking van nog vele jaren!!!
          </p>
          <div className="testimonial__img">
            <img src={testimonialImg} alt="John" />
          </div>
          <strong className="testimonial__name">
            Marc Desaedeleer, <span className="function">Founder Nar D'Oree</span>
          </strong>
        </div>
      </section>

      <section className="jumbotron jumbotron--gallery">
        <img src={gallery1} alt="gallery1" />
        <img src={gallery2} alt="gallery2" />
        <img src={gallery3} alt="gallery3" />
        <img src={gallery4} alt="gallery4" />
        <img src={gallery5} alt="gallery5" />
        <img src={gallery6} alt="gallery6" />
        <img src={gallery7} alt="gallery7" />
        <img src={gallery8} alt="gallery8" />
        <img src={gallery9} alt="gallery9" />
      </section>
    </Layout>
  )
}

export default IndexPage
