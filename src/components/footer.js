import React from 'react';
import { Link } from 'gatsby';
import { FooterStyles } from '../styles/footerStyles';

import fbImg from '../assets/images/facebook.png';
import instaImg from '../assets/images/instagram.png';
import inImg from '../assets/images/linkedin.png';
import twImmg from '../assets/images/twitter.png';

const Footer = () => {

  return (
    <FooterStyles>
      <footer className="page__footer">
        <div className="footer__section contact-info">
          <strong>Tribe Events</strong>
          <address>
            <strong>Sint-Niklaasstraat 5 Bus 401</strong>
            <strong>9000 Gent</strong>
          </address>
        </div>
        <div className="footer__section footer__section--nav">
          <nav className="footer__nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/who-we-are'>Who are we?</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </nav>
        </div>
        <div className="footer__section footer__section--social">
          <a href="https://www.facebook.com/TribeEventsBE" rel="noreferrer" target="_blank" title="Facebook">
            <img src={fbImg} alt="Facebook" width="32" />
          </a>
          <a href="https://www.instagram.com/tribe__events/" rel="noreferrer" target="_blank" title="Instagram">
            <img src={instaImg} alt="Instagram" width="32" />
          </a>
          <a href="https://twitter.com/tribeevents1" rel="noreferrer" target="_blank" title="Twitter">
            <img src={twImmg} alt="Twitter" width="32" />
          </a>
          <a href="https://www.linkedin.com/company/tribe-events/" rel="noreferrer" target="_blank" title="Linkedin">
            <img src={inImg} alt="Linkedin" width="32" />
          </a>
          <div className="phone"> <br/>
          Tel: <a href="tel:+32 9 311 77 27">+32 9 311 77 27</a> <br/>
          GSM: <a href="tel:+32 471 45 58 55">+32 471 45 58 55</a>
          </div>
        </div>
        <div className="copyright">
          <p>
            ©2020 Tribe Group BV • Sint-Niklaasstraat 5 bus 401 • 9000 Gent • 0719.349.030 • RPR Gent
          </p>
        </div>
      </footer>
    </FooterStyles>
  )
};

export default Footer;