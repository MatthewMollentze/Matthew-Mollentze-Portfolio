module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: `https://matthewmollentze.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://matthewmollentze.com",
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
