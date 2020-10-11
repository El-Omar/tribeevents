require("dotenv").config({ 
  path: ".env"
});

module.exports = {
  siteMetadata: {
    title: `Tribe Events`,
    description: `Tribe events for organizing events and supplying workers for your events!`,
    author: `elomar`,
    url: `https://www.elomar.be/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `src/assets/images/logo-icon.png`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tribe-Events`,
        short_name: `TribeEvents`,
        start_url: `/`,
        background_color: `#f8f8f8`,
        theme_color: `#f8f8f8`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ['Lato', 'Montserrat'],
          urls: ['/fonts/fonts.css']
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
