//create pages dynamically

const path = require('path'); //because we're using node in this file and looking for a path

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`query GetProducts {
        products:allContentfulProduct {
          nodes {
            slug
          }
        }
      }
      `);

    result.data.products.nodes.forEach((prod) => {
        createPage({
            path: `/products/${prod.slug}`,
            component: path.resolve(`src/templates/product-template.js`),
            context: {
                slug: prod.slug,
                general: "This is the props which product-template.js will receive"
            }
        });
    });
}; 