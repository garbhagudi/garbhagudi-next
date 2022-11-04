const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
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
        source: "/public/thank-you.html",
        destination: "/src/pages/api/thank-you.tsx",
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/locations/south-end-circle/",
        destination: "/locations/jayanagar",
        permanent: true,
      },
      {
        source: "/resources/treatments/",
        destination: "/treatments",
        permanent: true,
      },
      {
        source: "/resources/treatments/:slug",
        destination: "/treatments/:slug",
        permanent: true,
      },
      {
        source: "/doctors/:slug/",
        destination: "/fertility-experts/:slug",
        permanent: true,
      },
      {
        source: "/kn/",
        destination: "https://kannada.garbhagudi.com",
        permanent: true,
      },
    ];
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/app",
  sw: "service-worker.js",
});

module.exports = withPWA(nextConfig);
