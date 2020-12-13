// const path = require('path');
// const slash = require('slash');

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   return graphql(
//     `
//       {
//         allContentfulHome(sort: {fields: [createdAt]}) {
//           nodes {
//             gallery {
//               id
//               fluid(maxWidth: 1000) {
//                 ...GatsbyContentfulFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(res => {
//     if (res.error) {
//       console.log("There's an error getting data from Contentful: ", res.erro);
//     }

//     const photoTemplate = path.resolve("./src/templates/gallery.js");

//     res.data.allContentfulHome.nodes[0].gallery.forEach(photo => {
//       createPage({
//         path: `/gallery/${photo.id}/`,
//         component: slash(photoTemplate),
//         context: {
//           slug: photo.id
//         }
//       });
//     });
//   }).catch(err => {
//     console.log("Error with contentful data: ", err);
//   });
// };