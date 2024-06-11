// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'media.graphassets.com',
      'avatars.dicebear.com',
    ],
  },

  headers: async () => {
    return [
      {
        source: '/(.*)',
        locale: false,
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/public/contact.html',
        destination: '/src/pages/api/contact.tsx',
      },
      {
        source: '/public/thank-you.html',
        destination: '/src/pages/api/thank-you.tsx',
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/doctors',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/doctors/:slug',
        destination: '/fertility-experts/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
      {
        source: '/infertility',
        destination: '/treatments/infertility-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about/overview',
        permanent: true,
      },
      {
        source: '/resources/treatments',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/resources/treatments/:slug',
        destination: '/treatments/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
