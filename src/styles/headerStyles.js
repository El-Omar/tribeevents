import React from 'react';
import styled from 'styled-components';
import { variables, mediaQueries } from './variables';

const { fonts, colors, transitions } = variables;

export const HeaderStyles = styled.div`
  z-index: 10;
  padding: 3rem;
  position: absolute;
  width: 100%;

  ${mediaQueries(`sm`)`
    padding: 2rem;
  `}

  .page__header {
    position: relative;
    z-index: 8;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    ${mediaQueries(`sm`)`
      width: 17rem;
    `}
  }

  .inverted {
    filter: invert(1);
  }

  .page__nav__wrapper {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 5;
    background: rgba(255, 255, 255, .85);
    transition: all .38s ease-in-out;
    opacity: 0;
    visibility: hidden;

    &.opened {
      visibility: visible;
      opacity: 1;
    }

    .page__nav {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      list-style: none;
      font-family: ${fonts.heading};
      font-weight: 900;

      li {
        min-width: 100px;
        text-align: center;
        padding: 3rem 0;
        color: ${colors.black};
        transition: ${transitions.default};

        &:hover {
          color: ${colors.orange};
        }

        &.active {
          background-image: url(${require('../assets/images/zigzag.png')});
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: 100px 14px;
          color: ${colors.black};
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      }
    }
  }

  .menu {
    background-color: white;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
  }

  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }

  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }

  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

`;