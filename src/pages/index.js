import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import gsap, { TweenLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeStyles } from "../styles/homeStyles";

import TeamImg from "../components/teamImg";
import JoinusImg from "../components/joinusImg";
import step1Img from "../assets/images/step-1.png";
import step2Img from "../assets/images/step-2.png";
import step3Img from "../assets/images/step-3.png";
import step4Img from "../assets/images/step-4.png";
import testimonialImg1 from "../assets/images/BP-Catering.png";
import testimonialImg2 from "../assets/images/feestzaal-breughel.png";

import gallery1 from "../assets/images/gallery/gallery1.jpg";
import gallery2 from "../assets/images/gallery/gallery2.png";
import gallery3 from "../assets/images/gallery/gallery3.png";
import gallery4 from "../assets/images/gallery/gallery4.png";
import gallery5 from "../assets/images/gallery/gallery5.png";
import gallery6 from "../assets/images/gallery/gallery6.png";
import gallery7 from "../assets/images/gallery/gallery7.png";
import gallery8 from "../assets/images/gallery/gallery8.png";
import gallery9 from "../assets/images/gallery/gallery9.png";
import gallery10 from "../assets/images/gallery/gallery10.jpg";
import gallery11 from "../assets/images/gallery/gallery11.jpg";
import gallery12 from "../assets/images/gallery/gallery12.jpg";
import gallery13 from "../assets/images/gallery/gallery13.jpg";
import gallery14 from "../assets/images/gallery/gallery14.jpg";
import gallery15 from "../assets/images/gallery/gallery15.jpg";
import gallery16 from "../assets/images/gallery/gallery16.jpg";
import gallery17 from "../assets/images/gallery/gallery17.jpg";
import gallery18 from "../assets/images/gallery/gallery18.jpg";
import gallery19 from "../assets/images/gallery/gallery19.jpg";
import gallery20 from "../assets/images/gallery/gallery20.jpg";

const IndexPage = (props) => {
  // const [loading, setLoading] = useState(true); 
  // let isFontLoaded = false;
  // const [isImageLoaded, setIsImageLoaded] = useState(false);

  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
    
    // let eventTicker = setInterval(() => {
    //   isFontLoaded = document.querySelector('html').classList.contains('wf-active');
    //   if (isFontLoaded) {
    //     isImageLoaded && setLoading(false);
    //     clearInterval(eventTicker);
    //   }
    // }, 25);

    // //fallback for slow 3G devices
    // setTimeout(() => {
    //   setLoading(false);
    // }, 10000)
  }

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
  //className={loading ? `no-scroll` : ``}
  
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
              <h1 className="jumbotron__title">Our tribe supports your event</h1>
            </header>
            <p className="description">
              Tribe Events zorgt voor cateringpersoneel op alle types evenementen, 
              van een privéfeest voor particulieren tot een bedrijfsfeest.
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
                  <h3 className="step__title">Contact</h3>
                  <p className="description description--step">
                    Je neemt contact met ons op. Waar kunnen wij jou mee helpen?
                  </p>
                </article>
                <article className="step step--2">
                  <img src={step2Img} alt="Beschrijf"/>
                  <h3 className="step__title">Beschrijf</h3>
                  <p className="description description--step">
                    Beschrijf jouw event. Wat, waar, wanneer en het aantal bezoekers.
                  </p>
                </article>
                <article className="step step--3">
                  <img src={step3Img} alt="Selectie"/>
                  <h3 className="step__title">Selectie</h3>
                  <p className="description description--step">
                    Wij selecteren het perfecte team voor jouw project!
                  </p>
                </article>
                <article className="step step--4">
                  <img src={step4Img} alt="Support"/>
                  <h3 className="step__title">Support</h3>
                  <p className="description description--step">
                    Geniet, wij doen de rest.
                  </p>
                </article>
              </div>
            </div>
        </section>

        <section className="jumbotron jumbotron--join">
          <div className="container">
            <header className="jumbotron__header">
              <h1 className="jumbotron__title">Your vibe tribe attracts your tribe!</h1>
            </header>
            <p className="description">
              Je zoekt niet zomaar naar een studentenjob, maar je wil deel uitmaken van een
              geledig en divers team?
            </p>
            <Link to='/contact' className='btn btn-secondary'>Join us</Link>
          </div>
          <JoinusImg />
        </section>

        <section className="jumbotron jumbotron--testimonials">
          <header className="jumbotron__header jumbotron__header--center">
            <h1 className="jumbotron__title">What people say about us</h1>
          </header>
          <div className="container">
            <Carousel swipeable={true}>
              <div className="quote-wrapper">
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
                  <img src={testimonialImg1} alt="BP Catering" />
                </div>
                <strong className="testimonial__name">
                  Marc Desaedeleer, <span className="function">BP Catering</span>
                </strong>
              </div>
              
              <div className="quote-wrapper">
                <p className="quote">
                Glodi Gonçalves Bella en team ...wat missen we jullie 
                .....maar na regen komt zaonneschijn. Hopelijk mogen we 
                snel terug op jullie diensten rekenen waar de glimlach 
                en gedrevenheid nooit ver te zoeken. Tot snel en dank voor de toffe samenwerking.
                </p>
                <div className="testimonial__img">
                  <img src={testimonialImg2} alt="Feestzaal Breughel" />
                </div>
                <strong className="testimonial__name">
                  Tom Mestach, <span className="function">Feestzaal Breughel</span>
                </strong>
              </div>
            </Carousel>

          </div>
        </section>

        <section className="jumbotron jumbotron--gallery">
          <div className="img-wrapper">
            <img src={gallery1} alt="gallery1" />
          </div>

          <div className="img-wrapper">
            <img src={gallery2} alt="gallery2" />
          </div>

          <div className="img-wrapper">
            <img src={gallery3} alt="gallery3" />
          </div>

          <div className="img-wrapper">
            <img src={gallery4} alt="gallery4" />
          </div>

          <div className="img-wrapper">
            <img src={gallery5} alt="gallery5" />
          </div>

          <div className="img-wrapper">
            <img src={gallery6} alt="gallery6" />
          </div>

          <div className="img-wrapper">
            <img src={gallery7} alt="gallery7" />
          </div>

          <div className="img-wrapper">
            <img src={gallery8} alt="gallery8" />
          </div>

          <div className="img-wrapper">
            <img src={gallery9} alt="gallery9" />
          </div>

          <div className="img-wrapper">
            <img src={gallery10} alt="gallery10" />
          </div>

          <div className="img-wrapper">
            <img src={gallery11} alt="gallery11" />
          </div>

          <div className="img-wrapper">
            <img src={gallery12} alt="gallery12" />
          </div>

          <div className="img-wrapper">
            <img src={gallery13} alt="gallery13" />
          </div>

          <div className="img-wrapper">
            <img src={gallery14} alt="gallery14" />
          </div>

          <div className="img-wrapper">
            <img src={gallery15} alt="gallery15" />
          </div>

          <div className="img-wrapper">
            <img src={gallery16} alt="gallery16" />
          </div>

          <div className="img-wrapper">
            <img src={gallery17} alt="gallery17" />
          </div>

          <div className="img-wrapper">
            <img src={gallery18} alt="gallery18" />
          </div>

          <div className="img-wrapper">
            <img src={gallery19} alt="gallery19" />
          </div>

          <div className="img-wrapper">
            <img src={gallery20} alt="gallery20" />
          </div>

        </section>
      </HomeStyles>
    </Layout>
  )
}

export default IndexPage
