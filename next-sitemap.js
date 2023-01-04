/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.garbhagudi.com",
  generateRobotsTxt: true,
  changefreq: daily,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  priority: "0.8",
};
