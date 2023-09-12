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
  experimental: {
    optimizeFonts: true,
    scrollRestoration: true,
  },

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        locale: false,
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=9999999999, must-revalidate',
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
        source: '/locations/south-end-circle',
        destination: '/locations/jayanagar',
        permanent: true,
      },
      {
        source: '/locations/fertility-experts',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blogs/page/1',
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
      {
        source: '/doctors/:slug',
        destination: '/fertility-experts/:slug',
        permanent: true,
      },
      {
        source: '/kn',
        destination: 'https://kannada.garbhagudi.com',
        permanent: true,
      },
      {
        source: '/features/paripoorna',
        destination: '/features/paripoorna-2022',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tag/ovarian-response',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/garbhagudi_ivf',
        destination: '/treatments/in-vitro-fertilization-ivf',
        permanent: true,
      },
      {
        source: '/profile/dr-asha-s-vijay',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/events/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/endocrine-disruptors-and-fertility',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/events/2016-05-24/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/what-is-iui-intrauterine-',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/how-to-improve-',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/page/6/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/events/2016-07-23/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/events/2016-05-29',
        destination: '/',
        permanent: true,
      },
      {
        source: '/events/2017-12',
        destination: '/',
        permanent: true,
      },
      {
        source: '/know-when-icsi-or-ivf-is-preferred-in-infertility-treatment',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/contact-2',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/features/Success%20Rates%20of%20IVF',
        destination: '/features/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/features/World%20Class%20Fertility%20Care',
        destination: '/features/world-class-fertility-care',
        permanent: true,
      },
      {
        source: '/features/Affordable%20Treatments',
        destination: '/features/affordable-treatments',
        permanent: true,
      },
      {
        source: '/features/Financing%20Options',
        destination: '/features/financing-options',
        permanent: true,
      },
      {
        source: '/features/Holistic%20Approach',
        destination: '/features/holistic-approach',
        permanent: true,
      },
      {
        source: '/features/Treatment%20Protocols',
        destination: '/features/treatment-protocols',
        permanent: true,
      },
      {
        source: '/features/Best%20in%20Class%20Facilities',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about/overview',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
