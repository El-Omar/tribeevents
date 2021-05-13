const path = require('path');
const slash = require('slash');
const slugify = require('slugify');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      query {
        allContentfulJobs {
          nodes {
            slogan
            title
            id
            flexDescription {
              json
            }
            flexOffer {
              json
            }
            flexSold {
              json
            }
            studentSold {
              json
            }
            studentOffer {
              json
            }
            studentDescription {
              json
            }
          }
        }
      }
    `
  ).then(res => {
    if (res.error) {
      console.log("There's an error getting data from Contentful: ", res.erro);
    }

    const template = path.resolve("./src/templates/job.js");

    res.data.allContentfulJobs.nodes.forEach(job => {
      createPage({
        path: `/jobs/${job.id}/`,
        component: slash(template),
        context: {
          id: job.id,
        }
      });
    });
  }).catch(err => {
    console.log("Error with contentful data: ", err);
  });
};