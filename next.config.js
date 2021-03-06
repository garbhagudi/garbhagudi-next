module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  rewrite: async () => [
    {
      source: "/public/contact.html",
      destination: "/src/pages/api/contact.tsx",
    },
    {
      source: "/public/contact.html",
      destination: "/src/pages/api/contact.tsx",
    },
  ],
};

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    register: true,
    skipWaiting: true,
  },
});
