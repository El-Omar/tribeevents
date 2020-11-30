import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Loader from "../components/loader";
import Header from "./header"
import Footer from "./footer"

//Styles
import "../styles/reset.css";
import "../styles/base.css";
import { Container } from "../styles/styles";

const Layout = props => {
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  if (typeof window !== 'undefined') {
    // document.fonts.onloadingdone = function () {
    //   setLoading(false);
    // };

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container className={menu || loading ? 'no-scroll' : ''}>
      { loading && <Loader /> }
      {/* <Loader /> */}
      <Header siteTitle={data.site.siteMetadata.title} onClick={() => setMenu(isOpen => !isOpen)} isOpen={menu} />
      <main className={ 'content' }>
        {/* { props.children({ ...props, isFontLoaded: isFontLoaded }) } */}
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
