const { redirect } = require("next/dist/server/api-utils");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/public/contact.html",
        destination: "/src/pages/api/contact.tsx",
      },
      {
        source: "/public/contact.html",
        destination: "/src/pages/api/contact.tsx",
      },
      {
        source: "/src/pages/locations/south-end-circle.tsx",
        destination: "/src/pages/locations/jayanagar.tsx",
        permanent: "true",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/src/pages/locations/south-end-circle",
        destination: "/src/pages/locations/jayanagar",
        permanent: "true",
      },
    ];
  },
};

module.exports = nextConfig;

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/app",
  sw: "service-worker.js",
});

module.exports = withPWA({
  // next.js config
});
