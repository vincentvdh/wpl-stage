module.exports = {
  siteMetadata: {
    title: "WPL-Stage",
    description: "WPL-stage is een website die gaat over mijn stage",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://vincent-wpl-stage.local/graphql",
      },
    },
  ],
};
