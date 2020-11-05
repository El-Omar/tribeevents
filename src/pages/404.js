import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ 
      height: '80vh', 
      fontSize: '2rem',
      lineHeight: '3rem',
      textAlign: 'center', 
      padding: '15rem 3rem' }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to='/'>Go back to the home page!</Link>
    </div>
  </Layout>
)

export default NotFoundPage
