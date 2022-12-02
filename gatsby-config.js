module.exports = {
  pathPrefix: "/Matthew-Mollentze-Portfolio",
  siteMetadata: {
    siteUrl: `https://matthewmollentze.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/",
        manifestSettings: {
          favicon: "./content/images/favicon.png",
          siteName: "Matthew Mollentze - Portfolio",
          shortName: "Portfolio",
          startUrl: "/",
          backgroundColor: "#171717",
          themeColor: "#000000",
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog",
          usePathPrefixForArticles: false,
        },
        googleAnalytics: {
          trackingId: "G-9GDE5485SE",
          anonymize: true,
          environments: ["production", "development"]
        }
      },
    },
  ],
};
