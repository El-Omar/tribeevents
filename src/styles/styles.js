import React from 'react';
import styled from 'styled-components';

import { variables, mediaQueries } from "./variables";

const { colors } = variables;
const { spacing } = variables.spacing;
const { heading, body } = variables.fonts;
const { svgs } = variables;

export const Container = styled.div`

  &.no-scroll {
    height: 100vh;
    overflow: hidden;
  }

  .jumbotron__header {
    padding: 2rem 0;
    margin-bottom: 2rem;
    background-image: url(${require('../assets/images/zigzag.png')});
    background-repeat: no-repeat;
    background-size: 100px 14px;
    background-position: bottom left;

    &--center {
      text-align: center;
      background-position: bottom center;
    }
  }

  .jumbotron__title {
    margin: 0;
    font-size: 4.6rem;
    font-weight: 900;
    font-family: ${heading};
    text-transform: uppercase;
  }

  .jumbotron {
    position: relative;
    /* padding: 6rem 3rem; */
  }

  .jumbotron__image {
    width: 100%;
    height: 100%;
  }

  .description {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-family: ${body};
    max-width: 58rem;
  }

  .btn {
    max-width: 12rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    text-decoration: none;
    border-radius: .8rem;
    font-size: 1.8rem;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      filter: invert();
    }

    &-primary {
      background: ${colors.orange};
      color: white;
    }

    &-secondary {
      background: ${colors.black};
      color: white;
    }
  }

  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem;

    ${mediaQueries(`576`, { feature: `min-width` })`
      max-width: 540px;
    `}

    ${mediaQueries(`768`, { feature: `min-width` })`
      max-width: 720px;
    `}

    ${mediaQueries(`992`, { feature: `min-width` })`
      max-width: 960px;
    `}

    ${mediaQueries(`1200`, { feature: `min-width` })`
      max-width: 1140px;
    `}

    ${mediaQueries(`1921`, { feature: `min-width` })`
      max-width: 1880px;
    `}
  }

  .jumbotron--welcome {

    .container {
      max-width: 40rem;
      position: absolute;
      left: 3rem;
      top: 50%;
      transform: translateY(-50%);
    }

    .gatsby-image-wrapper {
      width: 85%;
      margin-left: auto;
    }
  }

  //WORKFLOW / steps
  .jumbotron--workflow {
    background: ${colors.light};
    padding-bottom: 12rem;

    * {
      position: relative;
      z-index: 2;
    }

    &::before {
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      left: 0;
      background: ${colors.light};
      z-index: 1;
    }

    &::after {
      content: "+";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 9rem;
      color: ${colors.black};
      z-index: 2;
    }

    .jumbotron__header {
      padding-top: 6rem;
      padding-bottom: 2rem;
    }

    .steps-group {
      width: 50%;
      padding: 3rem;
      display: inline-block;
      text-align: center;

      &__title {
        font-size: 3rem;
        color: ${colors.black};
      }

      /* &--you .steps-group__title {
        color: ${colors.black};
      } */
    }

    .steps__wrapper {
      display: flex;
    }

    .step {
      display: flex;
      flex-flow: column;
      align-items: center;

      img {
        width: 20rem;
        height: 20rem;
      }

      &__title {
        font-size: 2.4rem;
        margin-bottom: .6rem;
        margin-top: -2rem; //images have spaces with them
      }

      .description--step {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }
  }

  /* JOIN US */
  .jumbotron--join {
    background: ${colors.green};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    .jumbotron__header {
      background: none;
      margin-bottom: 0;
    }

    .container {
      width: 50%;
      margin-left: 3rem;
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }

  /* TESTIMONIALS */
  .jumbotron--testimonials {
    padding: 9rem 3rem;

    .quote {
      position: relative;
      font-size: 2rem;
      line-height: 3.2rem;
      text-align: center;
      padding: 0 2rem;

      &::before, &::after {
        content: '“';
        position: absolute;
        left: -5rem;
        top: 50%;
        transform: translateY(-50%);
        color: ${colors.blue};
        font-size: 10rem;
        font-weight: 900;
      }

      &::after {
        left: auto;
        right: -5rem;
        content: '”';
      }
    }
  }

  /* Gallery */
  .jumbotron--gallery {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    img {
      width: 33.3%;
      height: 45vh;
      object-fit: cover;

      ${mediaQueries(`md`)`
        width: 50%;
      `}

      ${mediaQueries(`sm`)`
        width: 100%;
        height: 30rem;
      `}
    }
  }

`;