import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useState, useEffect } from "react"
import logo from "../assets/images/logo.png";
import { HeaderStyles } from "../styles/headerStyles";

const Header = ({ onClick, isOpen }) => {
  let $menuBtn = useRef(null);
  // const [menu, setMenu] = useState(false);

  return (
    <HeaderStyles>
      <header className={ `page__header` }>
        <Link to='/'><img src={logo} alt='Tribe Events' /></Link>
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
          <li className="active"><Link to='/'>Home</Link></li>
          <li><Link to='/'>Who are we?</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </nav>
      </div>
        {/* 
        <nav className="page__nav">
          <button className={ `nav__trigger` }>
            <div className="trigger__line trigger__line--first"></div>
            <div className="trigger__line trigger__line--second"></div>
            <div className="trigger__line trigger__line--third"></div>
          </button>
          <ul className={ `nav__list nav__list--closed` }>
            <li className="nav__item"><a href="#definition" title="Definition">Definition</a></li>
            <li className="nav__item"><a href="#work" title="work">Work</a></li>
            <li className="nav__item"><a href="#contact" title="contact">Contact</a></li>
          </ul>
        </nav> */}
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
