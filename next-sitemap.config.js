/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: false,
  generateSitemaps: false,
  exclude: ['/admin/*', '/api/*'],
};
