/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  priority: "0.8",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/?*" }],
  },
};
