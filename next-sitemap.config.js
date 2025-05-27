/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: false,
  exclude: ['/admin/*', '/api/*'],
};
