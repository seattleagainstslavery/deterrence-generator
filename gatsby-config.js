const path = require(`path`)

require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    jail_time: process.env.JAIL_TIME,
    fine: process.env.FINE,
    sex_offender_registry: process.env.SEX_OFFENDER_REGISTRY,
    alternatives_website: process.env.ALTERNATIVES_WEBSITE,
    alternatives_url: process.env.ALTERNATIVES_URL,
    alternatives_phone: process.env.ALTERNATIVES_PHONE,
    law_link: process.env.LAW_LINK,
    zapier_webhook: process.env.ZAPIER_WEBHOOK,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_CODE,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: path.join(__dirname, `src`, `assets/images`),
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.PIXEL_CODE,
      },
    },
  ],
}
