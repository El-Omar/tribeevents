import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

//Styles
import "../styles/reset.css";
import "../styles/base.css";
import { Container } from "../styles/styles";

const Layout = props => {
  const [menu, setMenu] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Container className={menu ? 'no-scroll' : ''}>
      <Header siteTitle={data.site.siteMetadata.title} onClick={() => setMenu(isOpen => !isOpen)} isOpen={menu} />
      <main className={ 'content' }>
        { props.children }
      </main>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
