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

    ${mediaQueries(`lg`)`
      font-size: 4rem;
    `}

    ${mediaQueries(`md`)`
      font-size: 3.6rem;
    `}
  }

  .jumbotron {
    position: relative;
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
    
    ${mediaQueries(`1921`)`
      max-width: 1880px;
    `}
  
    ${mediaQueries(`1200`)`
      max-width: 1140px;
    `}
  
    ${mediaQueries(`992`)`
      max-width: 960px;
    `}

    ${mediaQueries(`768`)`
      max-width: 720px;
      padding: 1.5rem;
    `}
  
    ${mediaQueries(`576`)`
      max-width: 540px;
    `}
  }

  .jumbotron--welcome {
    overflow: hidden;

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

    ${mediaQueries(`lg`)`
      .container {
        top: 60%;
      }

      .gatsby-image-wrapper {
        width: 70%;
        transform: translateX(10%);
      }
    `}

    ${mediaQueries(`1000`)`
      .container {
        padding: 0;
      }
      
      .gatsby-image-wrapper {
        width: 75rem;
        transform: translateX(20%);
      }

      .description {
        text-shadow: 1px 1px white;
      }
    `}

    ${mediaQueries(`md`)`    
      .gatsby-image-wrapper {
        width: 65rem;
        transform: translateX(30%);
      }
    `}

    ${mediaQueries(`sm`)`
      .gatsby-image-wrapper {
        width: 70rem;
        transform: translateX(25%);
        position: absolute !important;
        top: 0;
        bottom: 0;
      }

      .container {
        position: relative;
        margin-left: 0;
        transform: none;
        padding: 15rem 3rem 3rem 0;
      }

      .description {
        width: 30rem;
      }
    `}
  }

  //WORKFLOW / steps
  .jumbotron--workflow {
    background: ${colors.light};
    padding-bottom: 9rem;

    * {
      position: relative;
      z-index: 2;
    }

    &::before {
      /* content: ''; */
      position: absolute;
      width: 70%;
      height: 100%;
      left: -20%;
      background: ${colors.yellow};
      z-index: 1;
      transform: skewX(20deg);
      transform-origin: right center;
    }

    &::after {
      /* content: "+"; */
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
      padding: 0 3rem;
      display: inline-block;
      text-align: center;

      &__title {
        font-size: 3rem;
        color: ${colors.black};
      }

      ${mediaQueries(`md`)`
        width: 100%;
      `}
    }

    .steps__wrapper {
      display: flex;
      justify-content: center;
      ${mediaQueries(`sm`)`
        flex-flow: column;
      `}
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
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    color: white;

    .jumbotron__header {
      background: none;
      margin-bottom: 0;
    }

    .container {
      width: 50%;
      padding-left: 3rem;

      ${mediaQueries(`md`)`
        width: 100%;
      `} 
    }

    .gatsby-image-wrapper {
      width: 50%;
      height: 100%;
      margin-left: auto;

      ${mediaQueries(`md`)`
        width: 100%;
      `}
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
      ${mediaQueries(`md`, {feature: 'min-width'})`
        padding: 0 5rem;

        &::before, &::after {
          content: '“';
          position: absolute;
          left: -1rem;
          top: 50%;
          transform: translateY(-50%);
          color: ${colors.blue};
          font-size: 10rem;
          font-weight: 900;
        }

        &::after {
          left: auto;
          right: -1rem;
          content: '”';
        }
      `}
    }

    .testimonial__img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      overflow: hidden;
      margin: 1rem auto 2rem auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .testimonial__name {
      display: block;
      text-align: center;
      font-size: 1.6rem;

      .function {
        font-weight: normal;
        font-style: italic;
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

  .jumbotron--banner {
    height: 70vh;
    overflow: hidden;

    .jumbotron__header {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 5;
      color: white;
    }
  }

  .jumbotron--team {
    padding: 6rem 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    .team-member {
      position: relative;
      width: 30rem;
      height: 42rem;
      margin: 1rem;
      overflow: hidden;
      border: 2px solid ${colors.light};

      .team-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .member-info {
        width: 100%;
        height: 10rem;
        padding: 1rem;
        display: flex;
        flex-flow: column;
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, .8);
        color: white;
        font-size: 1.4rem;
        line-height: 2.6rem;
        text-align: center;
        font-family: ${heading};

        .member-name {
          font-size: 1.8rem;
          color: ${colors.yellow};
        }

        .member-function {
          font-style: italic;
          font-weight: normal;
        }

        .email {
          color: white;
        }
      }
    }
  }

  .jumbotron--contact {
    padding: 3rem;
  }
`;