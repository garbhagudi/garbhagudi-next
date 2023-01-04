/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.SITE_URL,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  priority: "0.8",
};

export default config;
