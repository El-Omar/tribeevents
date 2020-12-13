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

  h2 {
    margin-bottom: 1rem;
    font-size: 3.6rem;
    font-weight: 900;
    font-family: ${heading};
    text-transform: uppercase;

    ${mediaQueries(`lg`)`
      font-size: 3rem;
    `}

    ${mediaQueries(`md`)`
      font-size: 2.6rem;
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
    /* background: ${colors.light}; */
    padding-bottom: 9rem;
    min-height: 60vh;
    border-top: .5rem solid ${colors.yellow};

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

    .steps__wrapper {
      width: 100%;
      margin-top: 6rem;

      ${mediaQueries(`sm`)`
      flex-flow: column;
      `}
    }
    

    .step {
      padding: 3rem;
      padding-top: 5%;
      padding-bottom: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-top: -10%;

      &::before {
        content: "1";
        position: absolute;
        width: 10rem;
        height: 10rem;
        left: 25%;
        top: 40%;
        bottom: 50%;
        transform: translateY(-50%);
        font-size: 10rem;
        font-weight: bold;
        z-index: 2;
        opacity: .75;
      }

      &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: ${colors.yellow};
        transform: skewY(-3deg);
      }

      .content {
        width: 25rem;
      }

      &--1 {
        margin-top: 0;
      }

      &--2 {
        color: white;

        &::after {
          background: ${colors.green};
          transform: skewY(3deg);
        }
        
        &::before {
          content: "2";
          left: auto;
          right: 25%;
        }
      }

      &--3 {

        &::after {
          background: ${colors.blue};
        }
        
        &::before {
          content: "3";
        }
      }

      &--4 {
        color: white;
        padding-bottom: 5%;

        &::after {
          background: ${colors.red};
          transform: skewY(3deg);
        }

        &::before {
          content: "4";
          left: auto;
          right: 25%;
          top: 55%;
        }
      }

      img {
        width: 20rem;
        height: 20rem;
      }

      &__title {
        font-size: 2.4rem;
        margin-bottom: .6rem;
      }

      .description--step {
        font-size: 1.6rem;
        line-height: 2.4rem;
        max-width: 30rem;
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

    .quote-wrapper {
      padding-bottom: 5rem;
    }

    .container {
      padding: 0;
    }

    .quote {
      position: relative;
      font-size: 2rem;
      line-height: 3.2rem;
      text-align: center;
      padding: 1.5rem;

      ${mediaQueries(`md`)`
        font-size: 1.6rem;
      `}
    }

    .testimonial__img {
      width: 15rem;
      height: 5rem;
      margin: 1rem auto 2rem auto;

      .gatsby-image-wrapper {
        width: auto;
        height: 100%;
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

    .img-wrapper {
      position: relative;
      width: 20%;
      height: 0;
      padding-bottom: 20%;

      ${mediaQueries(`md`)`
        width: 50%;
        padding-bottom: 50%;
      `}
    }

    img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    #react-modal-image-img {
      width: auto;
      height: auto;
    }
  }

  .jumbotron--banner {
    height: 60vh;
    overflow: hidden;
    position: relative;

    &.overlay {

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .5);
        z-index: 2;
      }
    }

    ${mediaQueries(`sm`)`
      height: 45vh;
    `}

    .jumbotron__header {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 5;
      color: white;
    }

    .gatsby-image-wrapper {
      height: 100%;
      z-index: 2;
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
    text-align: center;

    .description {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .form-wrapper {
    background: ${colors.light};
    margin: 3rem auto;
    font-size: 1.4rem;
    padding: 3rem;
    text-align: left;
  }

  .form-field {
    width: 100%;
    display: flex;
    flex-flow: column;
    margin-bottom: 2.4rem;

    input, select, textarea {
      margin: .5rem 0;
      padding: .5rem;
      border: none;
      outline: none;
      resize: none;
      line-height: 2.4rem;
    }
    
    input, select {
      height: 3rem;
    }

    label {
      font-weight: bold;
      text-transform: uppercase;
      font-size: 1.2rem;
    }

    .form-field__error {
      color: ${colors.red};
      font-weight: bold;
    }
  }

  .btn--submit {
    margin-left: auto;
    padding: 1rem;
    border-radius: 0;
    font-size: 1.6rem;
    background: ${colors.blue};
    color: white;

    &:hover {
      background: ${colors.black};
      filter: none;
    }
  }

  /* Carousel */
  .carousel .control-arrow, .carousel.carousel-slider .control-arrow {
    opacity: 1;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid ${colors.blue};
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid ${colors.blue};
  }

  .carousel .control-dots .dot {
    box-shadow: none;
    background: black;
  }

  .carousel-status {
    display: none;
  }

  .carousel .slide {
    background: none;
  }
`;