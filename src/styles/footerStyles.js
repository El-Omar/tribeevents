import React from 'react';
import styled from 'styled-components';
import { variables, mediaQueries } from './variables';
const { colors } = variables;

export const FooterStyles = styled.div`
  padding: 5rem 3rem;
  background: ${colors.black};
  color: white;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-family: ${variables.fonts.heading};

  .page__footer {
    display: flex;
    flex-flow: row wrap;

    a {
      color: ${colors.yellow};
    }

    .contact-info a {
      /* color: white; */
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
