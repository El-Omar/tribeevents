import React from 'react';
import styled from 'styled-components';
import { variables, mediaQueries } from './variables';
const { colors } = variables;

export const FooterStyles = styled.div`
  margin-top: 5rem;
  padding: 3rem;
  background: ${colors.black};
  color: white;
  font-size: 1.4rem;

  .page__footer {
    display: flex;
    flex-flow: row wrap;

    .footer__section {
      width: 33.3%;

      ${mediaQueries(`md`)`
        width: 100%;
      `}
    }

    .footer__nav {
      list-style: none;
      color: white;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;
