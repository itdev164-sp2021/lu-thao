require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `ITDEV-164 Gatsby Blog`,
    author: `Lu Thao`,
    contact:{
      name:`Lu Thao`,
      company:`Blogs Inc`,
      address:`123 love box 321`
    }
  },
  plugins: [
    {
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId:'ur0okin1tkhh',
        accessToken:'7j72tVzkgJdQuyHylJnwgR0VspEiaAtC0zENyEtBpZc'
        //spaceId: `${process.env.SPACE_ID}`,
        //accessToken: `${process.env.ACCESS_TOKEN}`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
