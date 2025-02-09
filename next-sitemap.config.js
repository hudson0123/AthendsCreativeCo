/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://athenscreativeco", // Your website's domain
  generateRobotsTxt: true, // Automatically generate robots.txt
  sitemapSize: 5000, // Default size for large sitemaps
  generateIndexSitemap: true, // Sitemap index for scalability
  exclude: ["/api/*"], // Exclude API routes

  transform: async (config, path) => {
    return {
      loc: path, // The URL
      lastmod: new Date().toISOString(), // Automatically add the current date
      changefreq: "daily", // Daily updates for your pages
      priority: path === "/" ? 1.0 : 0.8, // Higher priority for the homepage
    };
  },
};

module.exports = config;
