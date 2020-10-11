import React from 'react';
import { Link } from 'gatsby';
import { FooterStyles } from '../styles/footerStyles';

const Footer = () => {

  return (
    <FooterStyles>
      <footer className="page__footer">
        <div className="footer__section">
          <strong>Tribe Events</strong> <br/>
          <address>
          Sint-Niklaasstraat 5 Bus 401, <br/>
          9000 GENT
          </address>
        </div>
        <div className="footer__section">
          <nav className="footer__nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Who we are</Link></li>
            <li><Link to='/'>Contact</Link></li>
          </nav>
        </div>
        <div className="footer__section">
          Find us on: <br />
          [Social Media Icons]
        </div>
      </footer>
    </FooterStyles>
  )
};

export default Footer;