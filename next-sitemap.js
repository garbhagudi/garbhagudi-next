/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.garbhagudi.com",
  generateRobotsTxt: true, // (optional)
  autoLastmod: false,
  outDir: "public/sitemap.xml",
  // ...other options
};
