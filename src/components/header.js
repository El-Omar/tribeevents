import PropTypes from "prop-types"
import React, { useRef, useEffect, useState } from "react"
import logo from "../assets/images/logo.png";
import { HeaderStyles } from "../styles/headerStyles";
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ onClick, isOpen }) => {
  let $menuBtn = useRef(null);
  const [url, setUrl] = useState('');
  const pagesWithInvertedLogo = ['who-we-are', 'contact', 'references',];
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    setUrl(typeof window !== 'undefined' ? window.location.pathname : '');
    setInverted(pagesWithInvertedLogo.includes(url.replace(`/`, ``)));
  }, [pagesWithInvertedLogo, url])

  return (
    <HeaderStyles>
      <header className={ `page__header` }>
        <AniLink paintDrip hex='#489c60' to='/'>
          <img className={`logo ${inverted ? 'inverted' : ''}`} src={logo} alt='Tribe Events' />
        </AniLink>
        <button 
          className={`menu ${isOpen ? 'opened' : ''}`} 
          ref={$menuBtn} 
          onClick={onClick} 
          aria-label="Main Menu" 
          aria-expanded={isOpen}>
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </header>
      <div className={`page__nav__wrapper ${isOpen ? 'opened' : ''}`}>
        <nav className="page__nav">
          <li className={`home${url === '/' ? ' active' : ''}`}>
            <AniLink paintDrip hex='#489c60' to='/'>Home</AniLink>
          </li>
          <li className={`who-we-are${url === '/who-we-are' || url === '/who-we-are/' ? ' active' : ''}`}>
            <AniLink paintDrip hex='#40a1d7' to='/who-we-are'>Who are we?</AniLink>
          </li>
          <li className={`references${url === '/references' || url === '/references/' ? ' active' : ''}`}>
            <AniLink paintDrip hex='#ffc200' to='/references'>References</AniLink>
          </li>
          <li className={`contact${url === '/contact' || url === '/contact/' ? ' active' : ''}`}>
            <AniLink paintDrip hex='#d92828' to='/contact'>Contact</AniLink>
          </li>
        </nav>
      </div>
    </HeaderStyles>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
