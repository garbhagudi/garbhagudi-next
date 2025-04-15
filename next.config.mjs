// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'media.graphassets.com',
      'avatars.dicebear.com',
      'app.unbounce.com',
      'https://yogachallenge.in/',
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
      {
        source: '/features/Holistic%20Approach',
        destination: '/features/holistic-approach',
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
        source: '/features/Success%20Rates%20of%20IVF',
        destination: '/features/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/features/Treatment%20Protocols',
        destination: '/features/treatment-protocols',
        permanent: true,
      },
      {
        source: '/features/World%20Class%20Fertility%20Care',
        destination: '/features/world-class-fertility-care',
        permanent: true,
      },
      {
        source: '/treatments/intracytoplasmic-sperm-injection-icsi',
        destination: '/treatments/icsi-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/treatments/intra-uterine-insemination-iui',
        destination: '/treatments/iui-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/treatments/infertility',
        destination: '/treatments/infertility-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/treatments/in-vitro-fertilization-ivf',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/blogs/page/0',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/treatments/laparoscopy',
        destination: '/treatments/laparoscopy-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/treatments/hysteroscopy',
        destination: '/treatments/hysteroscopy-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/features/paripoorna-2024.tsx',
        destination: '/features/paripoorna-2024',
        permanent: true,
      },
      {
        source: '/resources/diagnosi',
        destination: '/resources/diagnosis',
        permanent: true,
      },
      {
        source: '/features/Best%20in%20Class%20Facilities',
        destination: '/facilities',
        permanent: true,
      },
      {
        source: '/resources/diagno',
        destination: '/resources/diagnosis',
        permanent: true,
      },
      {
        source: '/contact/IVF%20from%20Home',
        destination: '/blogs/how-does-ivf-from-home-work',
        permanent: true,
      },
      {
        source: '/contact/Best%20in%20Class%20Facilities',
        destination: '/features/best-in-class-facilities',
        permanent: true,
      },
      {
        source: '/features/IVF%20from%20Home',
        destination: '/blogs/how-does-ivf-from-home-work',
        permanent: true,
      },
      {
        source: '/contact/Affordable%20Treatments',
        destination: '/features/affordable-treatments',
        permanent: true,
      },

      {
        source: '/contact/Success%20Rates%20of%20IVF',
        destination: '/features/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/contact/Holistic%20Approach',
        destination: '/features/holistic-approach',
        permanent: true,
      },
      {
        source: '/contact/World%20Class%20Fertility%20Care',
        destination: '/features/world-class-fertility-care',
        permanent: true,
      },
      {
        source: '/contact/Financing%20Options',
        destination: '/features/financing-options',
        permanent: true,
      },
      {
        source: '/contact/Treatment%20Protocols',
        destination: '/features/treatment-protocols',
        permanent: true,
      },
      {
        source: '/blogs/[slug]',
        destination: '/blogs/',
        permanent: true,
      },
      {
        source: '/fertility-experts/[slug]',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/fertility-experts/undefined',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/mothers-day',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact/enquiry 1',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/about-overview/',
        destination: '/about/overview',
        permanent: true,
      },
      {
        source: '/best-fertility-hospital-in-bangalore/',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/best-ivf-center-in-bangalore/',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/best-ivf-fertility-hospital-in-india/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/the-psychology-of-egg-donation-insights-from-donors-and-recipients',
        destination: '/treatments/ivf-treatment-egg-freezing',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-profile',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/fertility-tests-for-men/',
        destination: '/blogs/fertility-tests-for-men-2',
        permanent: true,
      },
      {
        source: '/fertility-tests-for-men-2/',
        destination: '/blogs/fertility-tests-for-men-2',
        permanent: true,
      },
      {
        source: '/frozen-embryo-transfer/',
        destination: '/treatments/frozen-embryo-transfer',
        permanent: true,
      },
      {
        source: '/heres-how-you-can-maximize-your-ivf-success-rate/',
        destination: '/blogs/how-to-make-ivf-successful-the-first-time',
        permanent: true,
      },
      {
        source: '/home/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/infertility-clinic-electronic-city-bangalore/',
        destination: '/locations/electronic-city',
        permanent: true,
      },
      {
        source: '/ivf-treatment-in-india/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/our-fertility-team',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/blogs/page/1008',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1017',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1023',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1025',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1053',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1062',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1070',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1104',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1108',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1112',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1125',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/113',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1140',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1145',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1156',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1164',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1171',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1200',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1209',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1216',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1224',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1234',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1245',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1277',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1295',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1311',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1328',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1338',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/134',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1354',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1375',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1415',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1417',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1419',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1422',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1426',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1429',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1441',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1447',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1458',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1473',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1475',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1477',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1509',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1524',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1528',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1570',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1573',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/158',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1580',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1592',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1599',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1609',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1621',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1624',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1640',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1641',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1646',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1648',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1728',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1733',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1734',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1757',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1772',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/178',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1790',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1811',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1819',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1822',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1836',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1852',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1854',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1880',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1938',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1943',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1949',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/197',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2004',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2030',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2073',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2114',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2163',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2192',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2213',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2255',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2261',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2319',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2326',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2330',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2363',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2422',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2463',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2468',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/258',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2586',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2640',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2647',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/269',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/272',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2807',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2825',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2836',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/284',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2840',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2841',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2842',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2844',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2846',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2847',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2914',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2935',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/296',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2970',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2973',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3003',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3011',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/341',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/383',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/385',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/389',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/409',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/442',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/443',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/446',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/466',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/472',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/476',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/496',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/501',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/516',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/525',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/531',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/537',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/546',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/562',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/579',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/596',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/604',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/611',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/661',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/706',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/753',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/758',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/771',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/774',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/775',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/781',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/831',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/847',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/856',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/859',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/867',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/879',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/893',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/898',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/906',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/908',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/961',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/978',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/98',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/981',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/985',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/989',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/category/blog/',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/contact/[slug]',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/contact/Affordable Treatments',
        destination: '/features/affordable-treatments',
        permanent: true,
      },
      {
        source: '/contact/Best in Class Facilities',
        destination: '/features/best-in-class-facilities',
        permanent: true,
      },
      {
        source: '/contact/Financing Options',
        destination: '/features/financing-options',
        permanent: true,
      },
      {
        source: '/contact/Holistic Approach',
        destination: '/features/holistic-approach',
        permanent: true,
      },
      {
        source: '/contact/IVF from Home',
        destination: '/features/ivf-from-home',
        permanent: true,
      },
      {
        source: '/contact/Treatment Protocols',
        destination: '/features/treatment-protocols',
        permanent: true,
      },
      {
        source: '/contact4.html',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/contact6.html',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/contact8.html',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/contact9.html',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/contact-itw.html',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/contact-nfd.html',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/diabetes-and-infertility/',
        destination: '/blogs/infertility-and-diabetes',
        permanent: true,
      },
      {
        source: '/diabetes-and-infertility-2/',
        destination: '/blogs/infertility-and-diabetes',
        permanent: true,
      },
      {
        source: '/diet-in-infertility/',
        destination: '/blogs/diet-in-infertility',
        permanent: true,
      },
      {
        source: '/difference-between-icsi-ivf/',
        destination: '/blogs/difference-between-icsi-and-ivf',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vij',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-next-iui-garbhagudi-ivf-centre-tv9-kannada/',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-opens-lifes-journey-avala-hejje/',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-profile/',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-priyanka-rani/',
        destination: '/fertility-experts/dr-priyanka-rani',
        permanent: true,
      },
      {
        source: '/dr-srinivas-b-v/',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/dt_doctors/asha-s-vijay/',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/embed/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/endometrial-rejuvenation/',
        destination: '/blogs/endometrial-rejuvenation',
        permanent: true,
      },
      {
        source: '/endometriosis/',
        destination: '/blogs/endometriosis-an-introduction',
        permanent: true,
      },
      {
        source: '/endometriosis-surgical-management/',
        destination: '/blogs/endometriosis-an-introduction',
        permanent: true,
      },
      {
        source: '/features/Best in Class Facilities',
        destination: '/features/best-in-class-facilities',
        permanent: true,
      },
      {
        source: '/features/paripoorna-2023',
        destination: '/features/paripoorna-2024',
        permanent: true,
      },
      {
        source: '/features/paripoorna-2024.tsx',
        destination: '/features/paripoorna-2024',
        permanent: true,
      },
      {
        source: '/fertility',
        destination: '/fertility-center',
        permanent: true,
      },
      {
        source: '/fertility-',
        destination: '/fertility-center',
        permanent: true,
      },
      {
        source: '/fertility-experts/dr-deepthi-venkatesh',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/fertility-tests-for-women/',
        destination: '/blogs/fertility-tests-for-women',
        permanent: true,
      },
      {
        source: '/garbhagudi-',
        destination: '/',
        permanent: true,
      },
      {
        source:
          '/garbhagudi-ivf-center-association-bmc-vanivilas-hospital-bengaluru-conducted-cme-infertility-17th-august-2017/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/garbhagudi-ivf-centre-article-in-profit-plus-kannada-magazine-3/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/garbhagudi-ivf-centre-article-profit-plus-kannada-magazine/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/garbhagudi-ranked-among-the-top-10-ivf-centres-in-india-by-times-of-india/',
        destination:
          '/about/awards-and-accolades/garbhagudi-ranked-among-top-10-ivf-centres-in-india-times-health-survey',
        permanent: true,
      },
      {
        source: '/genital-tuberculosis-infertilty/',
        destination: '/blogs/genital-tuberculosis-and-infertilty',
        permanent: true,
      },
      {
        source: '/how-to-conceive-if-you-have-pcos/',
        destination: '/blogs/getting-pregnant-with-pcos',
        permanent: true,
      },
      {
        source: '/how-to-improve-',
        destination: '/',
        permanent: true,
      },
      {
        source: '/improve-fertility-pcos-women/',
        destination: '/blogs/how-to-improve-fertility-in-pcos-women',
        permanent: true,
      },
      {
        source: '/infertility/diagnosis-and-treatment/',
        destination: '/blogs/female-infertility-explained-diagnosis-and-treatments',
        permanent: true,
      },
      {
        source: '/infertility/symptoms-',
        destination: '/blogs/an-overview-of-infertility-symptoms-and-causes',
        permanent: true,
      },
      {
        source: '/infertility/symptoms-and-causes/',
        destination: '/blogs/an-overview-of-infertility-symptoms-and-causes',
        permanent: true,
      },
      {
        source: '/in-vitro-fertilization/',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/ivf-success-rates/',
        destination: '/features/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/know-when-icsi-or-ivf-is-preferred-in-infertility-treatment/',
        destination: '/blogs/is-icsi-or-ivf-preferred-in-infertility-treatment',
        permanent: true,
      },
      {
        source: '/lifestyle-modifications-male-infertility-treatment/',
        destination:
          '/blogs/why-lifestyle-changes-are-crucial-for-couples-undergoing-fertility-treatments',
        permanent: true,
      },
      {
        source: '/male-infertility-azoospermia-case-study-by-dr-chaithra-s-k/',
        destination: '/blogs/what-is-azoospermia-what-are-the-treatment-options',
        permanent: true,
      },
      {
        source: '/male-infertility-work/',
        destination: '/blogs/male-infertility-work-up',
        permanent: true,
      },
      {
        source: '/obesity-and-infertility/',
        destination: '/blogs/the-impact-of-obesity-on-fertility',
        permanent: true,
      },
      {
        source: '/or',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ovulation-disorders-and-infertility/',
        destination: '/blogs/ovulation-disorders-and-infertility',
        permanent: true,
      },
      {
        source: '/paripoorna/',
        destination: '/features/paripoorna-2024',
        permanent: true,
      },
      {
        source: '/pcos-and-infertility/',
        destination: '/blogs/pcos-and-infertility',
        permanent: true,
      },
      {
        source: '/pcos-healthy-diet-tips/',
        destination: '/blogs/decoding-pcos-revealing-foods-to-avoid-for-better-health',
        permanent: true,
      },
      {
        source: '/pregnancy-male-infertility/',
        destination: '/blogs/pregnancy-and-male-infertility',
        permanent: true,
      },
      {
        source: '/six-major-causes-of-male-infertility/',
        destination: '/blogs/six-major-causes-of-male-infertility',
        permanent: true,
      },
      {
        source: '/solutions/cost-of-egg-donation-in-bangalore',
        destination: '/solutions/egg-freezing-in-bangalore',
        permanent: true,
      },
      {
        source: '/strict-covid-19-',
        destination: '/blogs/covid-19-and-its-impact-on-infertility-treatment',
        permanent: true,
      },
      {
        source: '/strict-covid-19-guidelines-followed-across-all-our-centres/',
        destination: '/blogs/covid-19-and-its-impact-on-infertility-treatment',
        permanent: true,
      },
      {
        source: '/suffering-from-infertility-pelvic-adhesions-could-be-the-culprit/',
        destination:
          '/blogs/are-you-suffering-from-infertility-pelvic-adhesions-could-be-the-culprit',
        permanent: true,
      },
      {
        source: '/surgical-management-endometriosis/',
        destination: '/blogs/laparoscopy-for-endometriosis-how-it-can-improve-fertility',
        permanent: true,
      },
      {
        source: '/tag/best-infertility-clinic-in-bangalore/page/1/',
        destination: '/fertility-center/best-infertility-clinic-bangalore',
        permanent: true,
      },
      {
        source: '/tag/diabetes-and-infertility/',
        destination: '/blogs/infertility-and-diabetes',
        permanent: true,
      },
      {
        source: '/tag/diet-plan/',
        destination: '/blogs/nutrition-for-ivf',
        permanent: true,
      },
      {
        source: '/tag/endometriosis/',
        destination: '/blogs/endometriosis',
        permanent: true,
      },
      {
        source: '/tag/ivf-treatment/',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/tag/ivf-treatment/g',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tag/ivf-treatment/page/1/',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/tag/non-obstructive-azoospermia/',
        destination: '/solutions/azoospermia-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/tag/pregnancy/',
        destination: '/blogs/pregnancies-and-miscarriages',
        permanent: true,
      },
      {
        source: '/talk-series-by-dr-asha-s-vijay-egg-freezing/',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/the-journey-of-divinity-from-an-idea-to-reality/',
        destination: '/blogs/the-journey-of-divinity-from-an-idea-to-reality',
        permanent: true,
      },
      {
        source: '/tubal-disease-and-infertility/',
        destination: '/blogs/tubal-disease-and-infertility',
        permanent: true,
      },
      {
        source: '/understanding-ivf-treatment-and-its-success-rate/',
        destination: '/blogs/ivf-and-success-rates',
        permanent: true,
      },
      {
        source: '/what-is-endometriosis-and-why-it-causes-infertility/',
        destination: '/blogs/what-is-endometriosis-and-why-it-causes-infertility',
        permanent: true,
      },
      {
        source: '/what-is-infertility/',
        destination: '/blogs/what-is-infertility',
        permanent: true,
      },
      {
        source: '/what-is-iui-intrauterine-',
        destination: '/blogs/what-is-iui-intrauterine-insemination',
        permanent: true,
      },
      {
        source: '/what-is-iui-intrauterine-insemination/',
        destination: '/blogs/what-is-iui-intrauterine-insemination',
        permanent: true,
      },
      {
        source: '/womens-fertility',
        destination: '/blogs/fertility-tests-for-women',
        permanent: true,
      },
      {
        source: '/womens-fertility-health',
        destination: '/blogs/fertility-tests-for-women',
        permanent: true,
      },
      {
        source: '/blogs/what-is-the-cost-of-ivf-treatment-in-india',
        destination: '/treatments/ivf-treatment-cost-in-bangalore',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
