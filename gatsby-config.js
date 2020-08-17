/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'some random description',
    author: 'Guibrother32',
    data: ['item1', 'item2'],
    person: {
      name: 'Gui',
      age: 22
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/post/`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ],
}

//every time we add any kind of changes in gatsby-config.js we must reestart the server