import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactImg from "../components/contactImg";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="jumbotron jumbotron--banner">
        <header className="jumbotron__header jumbotron__header--center">
          <h1 className="jumbotron__title">Get in touch</h1>
        </header>
        <ContactImg />
      </section>

      <section className="jumbotron jumbotron--contact">
        <header className="jumbotron__header">
          <h1 className="jumbotron__title">Contact us</h1>
        </header>
      </section>
    </Layout>
  )
}

export default Contact
