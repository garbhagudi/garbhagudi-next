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
