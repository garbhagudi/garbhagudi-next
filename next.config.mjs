// @ts-check
/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

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

  // async rewrites() {
  //   return [
  //     {
  //       source: '/public/contact.html',
  //       destination: '/src/pages/api/contact.tsx',
  //     },
  //     {
  //       source: '/public/thank-you.html',
  //       destination: '/src/pages/api/thank-you.tsx',
  //     },
  //   ];
  // },

  // redirects() {
  //   return [
  //     {
  //       source: '/locations/south-end-circle',
  //       destination: '/locations/jayanagar',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/treatments/sperm-donation',
  //       destination: '/',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/treatments/in-vitro-fertilization-ivf',
  //       destination: '/treatments/ivf-treatment-in-bangalore',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/infertility',
  //       destination: '/treatments/infertility-treatment-in-bangalore',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/treatments/intra-uterine-insemination-iui',
  //       destination: '/treatments/iui-treatment-in-bangalore',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/treatments/intracytoplasmic-sperm-injection-icsi',
  //       destination: '/treatments/icsi-treatment-in-bangalore',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/treatments/laparoscopy',
  //       destination: '/treatments/laparoscopy-treatment-in-bangalore',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/treatments/hysteroscopy',
  //       destination: '/treatments/hysteroscopy-treatment-in-bangalore',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/locations/fertility-experts',
  //       destination: '/fertility-experts',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/blogs',
  //       destination: '/blogs/page/1',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/resources/treatments',
  //       destination: '/treatments',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/resources/treatments/:slug',
  //       destination: '/treatments/:slug',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/doctors/:slug',
  //       destination: '/fertility-experts/:slug',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/kn',
  //       destination: 'https://kannada.garbhagudi.com',
  //       permanent: true,
  //       statusCode: 301,
  //     },
  //     {
  //       source: '/features/paripoorna',
  //       destination: '/features/paripoorna-2023',
  //       permanent: true,
  //       statusCode: 301,
  //     },

  //     //Legacy redirects
  //     //From previous wordpress site

  //     {
  //       source: '/feed',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/tag/ovarian-response',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/category/garbhagudi_ivf',
  //       destination: '/treatments/in-vitro-fertilization-ivf',
  //       permanent: true,
  //     },
  //     {
  //       source: '/profile/dr-asha-s-vijay',
  //       destination: '/fertility-experts/dr-asha-s-vijay',
  //       permanent: true,
  //     },
  //     {
  //       source: '/events/feed',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/endocrine-disruptors-and-fertility',
  //       destination: '/blogs/page/1',
  //       permanent: true,
  //     },
  //     {
  //       source: '/events/2016-05-24/:slug',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/what-is-iui-intrauterine-',
  //       destination: '/blogs/page/1',
  //       permanent: true,
  //     },
  //     {
  //       source: '/how-to-improve-',
  //       destination: '/blogs/page/1',
  //       permanent: true,
  //     },
  //     {
  //       source: '/page/6/:slug',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/events/2016-07-23/:slug',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/events/2016-05-29',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/events/2017-12',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/know-when-icsi-or-ivf-is-preferred-in-infertility-treatment',
  //       destination: '/blogs/page/1',
  //       permanent: true,
  //     },
  //     {
  //       source: '/contact-2',
  //       destination: '/gg-care',
  //       permanent: true,
  //     },
  //     {
  //       source: '/features/Success%20Rates%20of%20IVF',
  //       destination: '/features/success-rates-of-ivf',
  //       permanent: true,
  //     },
  //     {
  //       source: '/features/World%20Class%20Fertility%20Care',
  //       destination: '/features/world-class-fertility-care',
  //       permanent: true,
  //     },
  //     {
  //       source: '/features/Affordable%20Treatments',
  //       destination: '/features/affordable-treatments',
  //       permanent: true,
  //     },
  //     {
  //       source: '/features/Financing%20Options',
  //       destination: '/features/financing-options',
  //       permanent: true,
  //     },
  //     {
  //       source: '/features/Holistic%20Approach',
  //       destination: '/features/holistic-approach',
  //       permanent: true,
  //     },
  //     {
  //       source: '/features/Treatment%20Protocols',
  //       destination: '/features/treatment-protocols',
  //       permanent: true,
  //     },
  //     {
  //       source: '/features/Best%20in%20Class%20Facilities',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/about',
  //       destination: '/about/overview',
  //       permanent: true,
  //     },
  //   ];
  // },
};

const pwa = withPWA({
  dest: 'public',
  scope: '/pages',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default pwa({
  ...nextConfig,
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
  rewrites: async () => {
    return [
      {
        source: '/public/contact.html',
        destination: '/api/contact',
      },
      {
        source: '/public/thank-you.html',
        destination: '/api/thank-you',
      },
    ];
  },
});
