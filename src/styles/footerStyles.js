import React from 'react';
import styled from 'styled-components';
import pattern from "../assets/images/pattern-footer.png";
import { variables, mediaQueries } from './variables';
const { colors } = variables;


export const FooterStyles = styled.div`
  padding: 3rem;
  margin-top: 5rem;
  position: relative;
  background-color: ${colors.black};
  color: white;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-family: ${variables.fonts.heading};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3rem;
    left: 0;
    right: 0;
    top: -3rem;
    background-image: url(${pattern});
    background-repeat: repeat-x;
    background-position: left top;
    background-size: auto 6rem;
  }

  .page__footer {
    display: flex;
    flex-flow: row wrap;

    a {
      color: ${colors.yellow};
    }

    .footer__section {
      width: 33.3%;

      ${mediaQueries(`md`)`
        width: 100%;
      `}

      &--social {
        text-align: right;

        a img {
          filter: invert(1);
        }

        a {
          padding: 0 1rem;
        }
      }
    }

    .copyright {
      width: 100%;
      margin-top: 4rem;
      text-align: center;

      p {
        margin-bottom: 0;
      }
    }

    .credit {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      a, .madeby {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: 0 1rem;
      }

      img {
        width: 5rem;
      }

      .elomar {
        width: auto;
        height: 3.5rem;
      }
    }

    .footer__nav {
      display: flex;
      flex-flow: column;
      align-items: center;
      list-style: none;
      color: white;

      li {
        margin: 1rem 0;
      }

      a {
        text-decoration: none;
      }
    }

    address {
      margin-top: 1.2rem;
      
      strong {
        display: block;
        margin-top: 1.2rem;
        font-weight: normal;
      }
    }

    ${mediaQueries(`md`)`
      .footer__section--social {
        order: -1;
        padding-bottom: 2rem;
      }
      
      .footer__section {
        text-align: center;
        margin-bottom: 2rem;
      }
    `}
  }
`;
