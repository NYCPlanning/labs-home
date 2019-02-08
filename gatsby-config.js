module.exports = {
  siteMetadata: {
    title: `NYC Planning Labs`,
  },
  plugins: [
    {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: "UA-84250233-4",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ],
}
