/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: false,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.8,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/?*'],
      },
    ],
  },
};
