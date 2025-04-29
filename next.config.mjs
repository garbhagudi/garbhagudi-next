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
        destination: '/blogs',
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
        source: '/about-overview',
        destination: '/about/overview',
        permanent: true,
      },
      {
        source: '/best-fertility-hospital-in-bangalore',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/best-ivf-center-in-bangalore',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/best-ivf-fertility-hospital-in-india',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
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
        source: '/fertility-tests-for-men',
        destination: '/blogs/fertility-tests-for-men-2',
        permanent: true,
      },
      {
        source: '/fertility-tests-for-men-2',
        destination: '/blogs/fertility-tests-for-men-2',
        permanent: true,
      },
      {
        source: '/frozen-embryo-transfer',
        destination: '/treatments/frozen-embryo-transfer',
        permanent: true,
      },
      {
        source: '/heres-how-you-can-maximize-your-ivf-success-rate',
        destination: '/blogs/how-to-make-ivf-successful-the-first-time',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/infertility-clinic-electronic-city-bangalore',
        destination: '/locations/electronic-city',
        permanent: true,
      },
      {
        source: '/ivf-treatment-in-india',
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
        source: '/category/blog',
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
        source: '/diabetes-and-infertility',
        destination: '/blogs/infertility-and-diabetes',
        permanent: true,
      },
      {
        source: '/diabetes-and-infertility-2',
        destination: '/blogs/infertility-and-diabetes',
        permanent: true,
      },
      {
        source: '/diet-in-infertility',
        destination: '/blogs/diet-in-infertility',
        permanent: true,
      },
      {
        source: '/difference-between-icsi-ivf',
        destination: '/blogs/difference-between-icsi-and-ivf',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vij',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-next-iui-garbhagudi-ivf-centre-tv9-kannada',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-opens-lifes-journey-avala-hejje',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-profile',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-priyanka-rani',
        destination: '/fertility-experts/dr-priyanka-rani',
        permanent: true,
      },
      {
        source: '/dr-srinivas-b-v',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/dt_doctors/asha-s-vijay',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/embed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/endometrial-rejuvenation',
        destination: '/blogs/endometrial-rejuvenation',
        permanent: true,
      },
      {
        source: '/endometriosis',
        destination: '/blogs/endometriosis-an-introduction',
        permanent: true,
      },
      {
        source: '/endometriosis-surgical-management',
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
        source: '/fertility-tests-for-women',
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
          '/garbhagudi-ivf-center-association-bmc-vanivilas-hospital-bengaluru-conducted-cme-infertility-17th-august-2017',
        destination: '/',
        permanent: true,
      },
      {
        source: '/garbhagudi-ivf-centre-article-in-profit-plus-kannada-magazine-3',
        destination: '/',
        permanent: true,
      },
      {
        source: '/garbhagudi-ivf-centre-article-profit-plus-kannada-magazine',
        destination: '/',
        permanent: true,
      },
      {
        source: '/garbhagudi-ranked-among-the-top-10-ivf-centres-in-india-by-times-of-india',
        destination:
          '/about/awards-and-accolades/garbhagudi-ranked-among-top-10-ivf-centres-in-india-times-health-survey',
        permanent: true,
      },
      {
        source: '/genital-tuberculosis-infertilty',
        destination: '/blogs/genital-tuberculosis-and-infertilty',
        permanent: true,
      },
      {
        source: '/how-to-conceive-if-you-have-pcos',
        destination: '/blogs/getting-pregnant-with-pcos',
        permanent: true,
      },
      {
        source: '/how-to-improve-',
        destination: '/',
        permanent: true,
      },
      {
        source: '/improve-fertility-pcos-women',
        destination: '/blogs/how-to-improve-fertility-in-pcos-women',
        permanent: true,
      },
      {
        source: '/infertility/diagnosis-and-treatment',
        destination: '/blogs/female-infertility-explained-diagnosis-and-treatments',
        permanent: true,
      },
      {
        source: '/infertility/symptoms-',
        destination: '/blogs/an-overview-of-infertility-symptoms-and-causes',
        permanent: true,
      },
      {
        source: '/infertility/symptoms-and-causes',
        destination: '/blogs/an-overview-of-infertility-symptoms-and-causes',
        permanent: true,
      },
      {
        source: '/in-vitro-fertilization',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/ivf-success-rates',
        destination: '/features/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/know-when-icsi-or-ivf-is-preferred-in-infertility-treatment',
        destination: '/blogs/is-icsi-or-ivf-preferred-in-infertility-treatment',
        permanent: true,
      },
      {
        source: '/lifestyle-modifications-male-infertility-treatment',
        destination:
          '/blogs/why-lifestyle-changes-are-crucial-for-couples-undergoing-fertility-treatments',
        permanent: true,
      },
      {
        source: '/male-infertility-azoospermia-case-study-by-dr-chaithra-s-k',
        destination: '/blogs/what-is-azoospermia-what-are-the-treatment-options',
        permanent: true,
      },
      {
        source: '/male-infertility-work',
        destination: '/blogs/male-infertility-work-up',
        permanent: true,
      },
      {
        source: '/obesity-and-infertility',
        destination: '/blogs/the-impact-of-obesity-on-fertility',
        permanent: true,
      },
      {
        source: '/or',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ovulation-disorders-and-infertility',
        destination: '/blogs/ovulation-disorders-and-infertility',
        permanent: true,
      },
      {
        source: '/paripoorna',
        destination: '/features/paripoorna-2024',
        permanent: true,
      },
      {
        source: '/pcos-and-infertility',
        destination: '/blogs/pcos-and-infertility',
        permanent: true,
      },
      {
        source: '/pcos-healthy-diet-tips',
        destination: '/blogs/decoding-pcos-revealing-foods-to-avoid-for-better-health',
        permanent: true,
      },
      {
        source: '/pregnancy-male-infertility',
        destination: '/blogs/pregnancy-and-male-infertility',
        permanent: true,
      },
      {
        source: '/six-major-causes-of-male-infertility',
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
        source: '/strict-covid-19-guidelines-followed-across-all-our-centres',
        destination: '/blogs/covid-19-and-its-impact-on-infertility-treatment',
        permanent: true,
      },
      {
        source: '/suffering-from-infertility-pelvic-adhesions-could-be-the-culprit',
        destination:
          '/blogs/are-you-suffering-from-infertility-pelvic-adhesions-could-be-the-culprit',
        permanent: true,
      },
      {
        source: '/surgical-management-endometriosis',
        destination: '/blogs/laparoscopy-for-endometriosis-how-it-can-improve-fertility',
        permanent: true,
      },
      {
        source: '/tag/best-infertility-clinic-in-bangalore/page/1',
        destination: '/fertility-center/best-infertility-clinic-bangalore',
        permanent: true,
      },
      {
        source: '/tag/diabetes-and-infertility',
        destination: '/blogs/infertility-and-diabetes',
        permanent: true,
      },
      {
        source: '/tag/diet-plan',
        destination: '/blogs/nutrition-for-ivf',
        permanent: true,
      },
      {
        source: '/tag/endometriosis',
        destination: '/blogs/endometriosis',
        permanent: true,
      },
      {
        source: '/tag/ivf-treatment',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/tag/ivf-treatment/g',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tag/ivf-treatment/page/1',
        destination: '/treatments/ivf-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/tag/non-obstructive-azoospermia',
        destination: '/solutions/azoospermia-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/tag/pregnancy',
        destination: '/blogs/pregnancies-and-miscarriages',
        permanent: true,
      },
      {
        source: '/talk-series-by-dr-asha-s-vijay-egg-freezing',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/the-journey-of-divinity-from-an-idea-to-reality',
        destination: '/blogs/the-journey-of-divinity-from-an-idea-to-reality',
        permanent: true,
      },
      {
        source: '/tubal-disease-and-infertility',
        destination: '/blogs/tubal-disease-and-infertility',
        permanent: true,
      },
      {
        source: '/understanding-ivf-treatment-and-its-success-rate',
        destination: '/blogs/ivf-and-success-rates',
        permanent: true,
      },
      {
        source: '/what-is-endometriosis-and-why-it-causes-infertility',
        destination: '/blogs/what-is-endometriosis-and-why-it-causes-infertility',
        permanent: true,
      },
      {
        source: '/what-is-infertility',
        destination: '/blogs/what-is-infertility',
        permanent: true,
      },
      {
        source: '/what-is-iui-intrauterine-',
        destination: '/blogs/what-is-iui-intrauterine-insemination',
        permanent: true,
      },
      {
        source: '/what-is-iui-intrauterine-insemination',
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
      {
        source: '/cost-of-ivf-in-india',
        destination: '/treatments/ivf-treatment-cost-in-bangalore',
        permanent: true,
      },
      {
        source: '/en_US/eshre-2018',
        destination: '/blogs/pcos-symptoms-and-treatment',
        permanent: true,
      },
      {
        source: '/executive-team',
        destination: '/about/overview',
        permanent: true,
      },
      {
        source: '/free-infertility-screening-evaluation-camps',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ivf-egg-donation',
        destination: '/treatments/egg-freezing',
        permanent: true,
      },
      {
        source: '/fertility-consultants/cost-of-embryo-donation-in-bangalore',
        destination: '/treatments/egg-freezing',
        permanent: true,
      },
      {
        source: '/packages',
        destination: '/treatments/ivf-treatment-cost-in-bangalore',
        permanent: true,
      },
      {
        source: '/solutions/cost-of-embryo-donation-in-bangalore',
        destination: '/treatments/egg-freezing',
        permanent: true,
      },
      {
        source: '/sperm-bank-and-legal-aspects-all-you-need-to-know',
        destination: '/treatments/semen-freezing',
        permanent: true,
      },
      {
        source: '/tv9',
        destination: '/',
        permanent: true,
      },
      {
        source: '/video-when-to-consult-fertility-specialist',
        destination: '/blogs/when-to-see-a-fertility-specialist',
        permanent: true,
      },
      {
        source: '/facilities/cost-of-egg-donation-in-bangalore',
        destination: '/treatments/egg-freezing',
        permanent: true,
      },
      {
        source: '/blogs/understanding-ivf-treatment-and-its-success-rate',
        destination: '/blogs/ivf-and-success-rates',
        permanent: true,
      },
      {
        source: '/blogs/understanding-menopause-a-natural-biological-process',
        destination: '/blogs/can-a-women-get-pregnant-after-menopause',
        permanent: true,
      },
      {
        source: '/careers/academic-coordinator',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/category/doctors',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/category/dr-sophia',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/category/news',
        destination: '/publications',
        permanent: true,
      },
      {
        source: '/partnership',
        destination: '/contact/partnership',
        permanent: true,
      },
      {
        source: '/pre-implantation-genetic-diagnosis',
        destination: '/resources/diagnosis/pre-implantation-genetic-diagnosis-pgd',
        permanent: true,
      },
      {
        source: '/services_iui',
        destination: '/treatments/iui-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/success-rate-demo',
        destination: '/contact/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/success-rates-of-ivf',
        destination: '/contact/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/tese-infertility-treatment',
        destination: '/treatments/pesa-and-tesa',
        permanent: true,
      },
      {
        source: '/treatments-for-male-infertility-best-ivf-centre-in-bangalore',
        destination: '/treatments/pesa-and-tesa',
        permanent: true,
      },
      {
        source: '/treatments-for-male-infertility-best-ivf-centre-in-bangalore',
        destination: '/treatments/pesa-and-tesa',
        permanent: true,
      },
      {
        source: '/ultrasound-scan-in-bangalore',
        destination: '/resources/diagnosis/ultrasound-scan',
        permanent: true,
      },
      {
        source: '/youve-been-diagnosed-',
        destination: '/resources/diagnosis/ultrasound-scan',
        permanent: true,
      },
      {
        source: '/3746-2',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/about/executive-',
        destination: '/about/overview',
        permanent: true,
      },
      {
        source: '/azoospermia-treatment-options',
        destination: '/fertility-center/azoospermia-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/blocked-fallopian-tubes-and-infertility',
        destination: '/resources/causes/blocked-fallopian-tubes',
        permanent: true,
      },
      {
        source: '/blogs/best-',
        destination: '/blogs/how-to-select-the-best-ivf-center',
        permanent: true,
      },
      {
        source: '/blogs/dos-and-donts-',
        destination: '/blogs/dos-and-donts-after-embryo-transfer',
        permanent: true,
      },
      {
        source: '/blogs/infertility-awareness-why-education-matters',
        destination: '/blogs/breaking-the-taboo-around-infertility-stories-of-strength',
        permanent: true,
      },
      {
        source:
          '/blogs/life-with-pcod-after-marriage-prioritising-health-and-nurturing-relationships',
        destination: '/blogs/pcod-problem-after-marriage',
        permanent: true,
      },
      {
        source: '/another-extraordinary-achievement-by-team-garbhagudi',
        destination: '/about/awards-and-accolades',
        permanent: true,
      },
      {
        source: '/treatments/egg-donation',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/fertility-experts/undefined',
        destination: '/fertility-experts',
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
        source: '/blog/',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/do-sexually-transmitted-diseases-affect-fertilit',
        destination: '/blogs/can-sexually-transmit-diseases-affect-infert',
        permanent: true,
      },
      {
        source: '/blogs/the-psychology-of-egg-donation-insights-from',
        destination: '/treatments/ivf-treatment-egg-freezing',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/en_US/-',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en_US/male-infertility-work',
        destination: '/blogs/male-infertility-work-up',
        permanent: true,
      },
      {
        source: '/en_US/profile/asha-s-vijay/',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/fallopian-tube-blockage-symptoms',
        destination: '/blogs/blocked-fallopian-tubes-diagnosis-and-trea',
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
        source: '/our-fertility-team',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/partnership/',
        destination: '/contact/partnership',
        permanent: true,
      },
      {
        source: '/sperms-male-infertility/',
        destination: '/blogs/sperms-and-male-infertility',
        permanent: true,
      },
      {
        source: '/tese-infertility-treatment',
        destination: '/treatments/pesa-and-tesa',
        permanent: true,
      },
      {
        source: '/treatments-for-male-infertility-best-ivf-centre-in-ban',
        destination: '/treatments/pesa-and-tesa',
        permanent: true,
      },
      {
        source: '/ultrasound-scan-in-bangalore',
        destination: '/resources/diagnosis/ultrasound-scan',
        permanent: true,
      },
      {
        source: '/what-is-ivf/',
        destination: '/blogs/what-is-ivf',
        permanent: true,
      },
      {
        source: '/youve-been-diagnosed-',
        destination: '/resources/diagnosis/ultrasound-scan',
        permanent: true,
      },
      {
        source: '/3746-2',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/about/executive-',
        destination: '/about/overview',
        permanent: true,
      },
      {
        source: '/akhila-karnataka-satsangha-bhajana-maha-ma',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/blogs/best-',
        destination: '/blogs/how-to-select-the-best-ivf-center',
        permanent: true,
      },
      {
        source: '/blogs/dos-and-donts-',
        destination: '/blogs/dos-and-donts-after-embryo-transfer',
        permanent: true,
      },
      {
        source: '/blogs/infertility-awareness-why-education-ma',
        destination: '/blogs/breaking-the-taboo-around-infertility-storie',
        permanent: true,
      },
      {
        source: '/blogs/life-with-pcod-after-marriage-prioritisin',
        destination: '/blogs/pcod-problem-after-marriage',
        permanent: true,
      },
      {
        source: '/blogs/page/100',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1000',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1003',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1006',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1007',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1008',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1010',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1011',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1017',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/102',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1024',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1025',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1028',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1034',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1040',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1044',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1047',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1050',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1053',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1054',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/106',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1061',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1062',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1066',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1068',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1069',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1070',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1072',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1076',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1077',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1079',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1080',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1099',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1102',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1103',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1108',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1121',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1122',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1125',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1128',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/113',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1136',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1140',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1141',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1144',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1145',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1146',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1149',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1151',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1153',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1156',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1159',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/116',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1163',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1168',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1169',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1170',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1172',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1176',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1180',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1183',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1185',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1188',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1189',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1192',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1195',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1199',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1200',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1203',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1209',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1210',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1211',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1212',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1216',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/123',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1234',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1236',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1242',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1245',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1248',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1252',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1256',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/127',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1270',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1280',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1286',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1288',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1289',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1295',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1309',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1311',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/132',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1322',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1328',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1334',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1336',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1337',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1338',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1339',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/134',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1344',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1349',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1354',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1359',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/136',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1363',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1365',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1366',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1371',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1372',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1376',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1378',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1383',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/139',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1397',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1398',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/140',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1400',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1407',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1409',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1412',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1416',
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
        source: '/blogs/page/1421',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1422',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1431',
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
        source: '/blogs/page/1449',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1453',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1458',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/146',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1460',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1462',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1463',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1464',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1468',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1469',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1472',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1473',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1477',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1484',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1495',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1498',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1503',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1505',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1507',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1520',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1521',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1523',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1524',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1527',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1528',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1536',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1538',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1547',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1548',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1551',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/156',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1560',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1562',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1564',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1569',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1570',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1572',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1573',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1574',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1575',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1578',
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
        source: '/blogs/page/1581',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1584',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1589',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1590',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1594',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1596',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1598',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1599',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1600',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1601',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1604',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1611',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1614',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1615',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/162',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1621',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1622',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1624',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1625',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1630',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1632',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1639',
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
        source: '/blogs/page/1642',
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
        source: '/blogs/page/1657',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1659',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1662',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1663',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1667',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1674',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1676',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1677',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1678',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1679',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/168',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1680',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1681',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1683',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1684',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1685',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1687',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1696',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1707',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1709',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1714',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1718',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1721',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1722',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1728',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1729',
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
        source: '/blogs/page/1739',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1740',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1744',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1745',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1751',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1752',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1757',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1764',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1765',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1772',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1773',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1776',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/178',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1780',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1781',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1784',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1785',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1786',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/179',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1790',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1791',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1793',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1796',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/180',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1800',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1803',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1805',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1807',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1810',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1813',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1815',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1816',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1818',
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
        source: '/blogs/page/1824',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1826',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1828',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1831',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1832',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1834',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1835',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1836',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1837',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/184',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1840',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1841',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1842',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1843',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1845',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1846',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1847',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1848',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1849',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1851',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1853',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1854',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1856',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1857',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1861',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1862',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1866',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1867',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/187',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1874',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1877',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/188',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1880',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1881',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1883',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1891',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1893',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1894',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1896',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1901',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1904',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1905',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1906',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/191',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1914',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1923',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1924',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1933',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1936',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1937',
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
        source: '/blogs/page/1944',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1949',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1951',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1953',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/196',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1961',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1962',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1964',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1966',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/197',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1970',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1974',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1977',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1982',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1983',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1984',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1985',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/199',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1990',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1993',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/1998',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2000',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2001',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2003',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2004',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2005',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2010',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2011',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2016',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2023',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2025',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2029',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2031',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2034',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2037',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2040',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2041',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2052',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2054',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2065',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2070',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2072',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2080',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2085',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2096',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2103',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2105',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2114',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2115',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2116',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2120',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2128',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2129',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/213',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2133',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2137',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/214',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2141',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2143',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2161',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2165',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2167',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2175',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2180',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2184',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2185',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2188',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2199',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/220',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2201',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2206',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/221',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2210',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2212',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2213',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2217',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2223',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2240',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2246',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2255',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2257',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/226',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2261',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2263',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2275',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2276',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/228',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2280',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2293',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2294',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2295',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2300',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2301',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2310',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2312',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2318',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/232',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2320',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2323',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2324',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2325',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2326',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2327',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2328',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2329',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2331',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2332',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2333',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2337',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2338',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2339',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2342',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2343',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2344',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2350',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2351',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2355',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2359',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2363',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/237',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2370',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2371',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2372',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2378',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2380',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2381',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2384',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2386',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2387',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2388',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2389',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2390',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2391',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2392',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2393',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2395',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2396',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2397',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2398',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2399',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/240',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2400',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2401',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2402',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2403',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2407',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2409',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2410',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2412',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2413',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2414',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2415',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2416',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2417',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2420',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2423',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2428',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2430',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2431',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2433',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2434',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2436',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2438',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2439',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2442',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2444',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2445',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2446',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2447',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2448',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2449',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2451',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2452',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2453',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2454',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2458',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2459',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2460',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2462',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2463',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2465',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2466',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2468',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2472',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2475',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2476',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2477',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2479',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/248',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2481',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2491',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/250',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2503',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2509',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2519',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2528',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2534',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2538',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/254',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2554',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2559',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/256',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2561',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2564',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2576',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/258',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2589',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/259',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2600',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2603',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2604',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2608',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2610',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2616',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2624',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2628',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/263',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2631',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2634',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2639',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2640',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2642',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2643',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2644',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2647',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2648',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2650',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2652',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2653',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2659',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/266',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2661',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2667',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2668',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2670',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2678',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2679',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/269',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2693',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2702',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2705',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2713',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2732',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2746',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2747',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2750',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2754',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2765',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2771',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2773',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2774',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2785',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2787',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/279',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2790',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2807',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/281',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2811',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2818',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2824',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2825',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2835',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2836',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2838',
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
        source: '/blogs/page/2851',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/286',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2860',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2863',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2866',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2867',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/287',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2875',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2876',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2879',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2884',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2888',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/289',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2892',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2910',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2911',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2913',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2914',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2917',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/292',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2920',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2924',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/293',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2931',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2935',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/294',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2949',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/295',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2951',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2952',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2958',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2962',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2965',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2969',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2971',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2975',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2976',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2978',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/298',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2981',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2982',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2983',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/299',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2990',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2992',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2996',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/2999',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3003',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/301',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3011',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3013',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3014',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3021',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3022',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3027',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3028',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3033',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3035',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3039',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3040',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3041',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3046',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3049',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3050',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3052',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3056',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3057',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/306',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3060',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3062',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3064',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3065',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3070',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3076',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/308',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3082',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3088',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3096',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/310',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3102',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3104',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3105',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3106',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3108',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3111',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3112',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3113',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3114',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3116',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3118',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3126',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3127',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3129',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3130',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3137',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/314',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3143',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/3145',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/315',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/318',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/321',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/326',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/327',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/328',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/330',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/335',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/338',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/341',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/344',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/346',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/347',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/349',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/354',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/358',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/363',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/368',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/374',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/378',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/379',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/380',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/382',
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
        source: '/blogs/page/391',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/392',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/393',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/394',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/396',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/397',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/403',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/405',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/406',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/409',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/416',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/419',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/420',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/426',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/434',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/436',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/443',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/457',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/458',
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
        source: '/blogs/page/481',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/482',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/483',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/489',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/491',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/492',
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
        source: '/blogs/page/509',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/514',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/517',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/518',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/524',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/525',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/528',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/529',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/531',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/532',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/533',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/537',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/539',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/546',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/547',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/553',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/556',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/562',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/566',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/570',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/571',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/574',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/575',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/577',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/578',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/579',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/583',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/585',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/591',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/596',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/597',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/603',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/604',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/606',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/607',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/609',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/610',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/611',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/613',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/617',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/619',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/623',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/625',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/636',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/641',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/645',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/646',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/650',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/652',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/653',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/661',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/666',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/669',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/677',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/678',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/681',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/685',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/686',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/689',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/690',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/697',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/698',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/700',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/701',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/702',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/703',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/709',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/710',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/718',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/723',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/724',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/725',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/728',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/737',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/738',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/742',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/745',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/747',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/748',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/749',
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
        source: '/blogs/page/759',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/760',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/766',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/767',
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
        source: '/blogs/page/776',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/777',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/781',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/783',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/788',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/792',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/803',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/805',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/814',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/818',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/823',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/825',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/827',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/834',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/845',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/847',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/852',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/856',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/858',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/864',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/866',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/867',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/868',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/879',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/880',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/883',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/887',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/891',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/892',
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
        source: '/blogs/page/909',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/912',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/913',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/915',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/916',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/92',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/920',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/923',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/926',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/930',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/934',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/941',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/942',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/946',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/957',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/961',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/963',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/968',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/974',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/975',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/976',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/98',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/982',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/985',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/987',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/989',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/99',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/page/999',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/blogs/the-amazing-race-how-tiny-swimmers-b',
        destination: '/blogs/what-is-spermatogenesis',
        permanent: true,
      },
      {
        source: '/blogs/understanding-ivf-treatment-and-its-suc',
        destination: '/blogs/ivf-and-success-rates',
        permanent: true,
      },
      {
        source: '/blogs/understanding-menopause-a-natural-bi',
        destination: '/blogs/can-a-women-get-pregnant-after-menopau',
        permanent: true,
      },
      {
        source: '/blogs/what-made',
        destination: '/blogs/what-made-you-get-out-of-shape',
        permanent: true,
      },
      {
        source: '/careers/academic-coordinator',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/careers/associate-lead-direct-sales',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/careers/electrician',
        destination: '/careers',
        permanent: true,
      },
      {
        source: '/category/blog',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/category/dr-sophia',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/common-infections-pelvis-leading-onto-inferti',
        destination: '/blogs/common-infections-of-pelvis-leading-onto-',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/contact/[slug]',
        destination: '/gg-care',
        permanent: true,
      },
      {
        source: '/contact2.html',
        destination: '/gg-care',
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
        source: '/contact7.html',
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
        source: '/diabetes-and-infertility-2',
        destination: '/blogs/diabetes-and-infertility',
        permanent: true,
      },
      {
        source: '/diet-in-infertility/',
        destination: '/blogs/diet-in-infertility',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-next-iui-garbhagudi-ivf-centre-t',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-opens-lifes-journey-avala-hejje',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-profile',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-program',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/dr-srinivas-b-v',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/dt_doctors/asha-s-vijay',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/effect-endometriosis-fertility',
        destination: '/blogs/effect-of-endometriosis-on-fertility',
        permanent: true,
      },
      {
        source: '/embed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/endometrial-rejuvenation',
        destination: '/treatments/endometrial-rejuvenation',
        permanent: true,
      },
      {
        source: '/endometriosis',
        destination: '/blogs/endometriosis',
        permanent: true,
      },
      {
        source: '/facilities/cost-of-egg-donation-in-bangalore',
        destination: '/solutions/egg-freezing-in-bangalore',
        permanent: true,
      },
      {
        source: '/features/paripoorna-2023',
        destination: '/features/paripoorna-2024',
        permanent: true,
      },
      {
        source: '/fertility-center/cost-of-egg-donation-in-bangal',
        destination: '/solutions/egg-freezing-in-bangalore',
        permanent: true,
      },
      {
        source: '/fertility-center/cost-of-iui-in-bangalore',
        destination: '/fertility-center/cost-of-iui-in-bangalore',
        permanent: true,
      },
      {
        source: '/fertility-center/ivf-treatment-cost-in-bangalore',
        destination: '/treatments/ivf-treatment-cost-in-bangalore',
        permanent: true,
      },
      {
        source: '/fertility-consultants/cost-of-egg-donation-in-b',
        destination: '/solutions/egg-freezing-in-bangalore',
        permanent: true,
      },
      {
        source: '/fertility-consultants/cost-of-embryo-donation-',
        destination: '/treatments/egg-freezing',
        permanent: true,
      },
      {
        source: '/fertility-experts/dr-deepthi-venkatesh',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/fertility-experts/dr-kavya-krishnappa',
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
        source: '/garbhagudi-ivf-center-association-bmc-vanivila',
        destination: '/',
        permanent: true,
      },
      {
        source: '/garbhagudi-ivf-centre-article-in-profit-plus-kan',
        destination: '/',
        permanent: true,
      },
      {
        source: '/genital-tuberculosis-infertilty',
        destination: '/blogs/genital-tuberculosis-and-infertilty',
        permanent: true,
      },
      {
        source: '/infertility/diagnosis-and-treatment',
        destination: '/blogs/female-infertility-explained-diagnosis-and-t',
        permanent: true,
      },
      {
        source: '/infertility/symptoms-and-causes',
        destination: '/blogs/an-overview-of-infertility-symptoms-and-ca',
        permanent: true,
      },
      {
        source: '/ivf-success-rates',
        destination: '/features/success-rates-of-ivf',
        permanent: true,
      },
      {
        source: '/lifestyle-modifications-male-infertility-treatme',
        destination: '/blogs/why-lifestyle-changes-are-crucial-for-coupl',
        permanent: true,
      },
      {
        source: '/male-infertility-azoospermia-case-study-by-dr-',
        destination: '/blogs/what-is-azoospermia-what-are-the-treatme',
        permanent: true,
      },
      {
        source: '/obesity-and-infertility',
        destination: '/blogs/the-impact-of-obesity-on-fertility',
        permanent: true,
      },
      {
        source: '/or',
        destination: '/',
        permanent: true,
      },
      {
        source: '/our-happy-couples',
        destination: '/',
        permanent: true,
      },
      {
        source: '/packages',
        destination: '/treatments/ivf-treatment-cost-in-bangalore',
        permanent: true,
      },
      {
        source: '/pcos-and-infertility/',
        destination: '/blogs/pcos-and-infertility',
        permanent: true,
      },
      {
        source: '/pregnancy-male-infertility/',
        destination: '/blogs/pregnancy-and-male-infertility',
        permanent: true,
      },
      {
        source: '/solutions/cost-of-embryo-donation-in-bangalo',
        destination: '/treatments/egg-freezing',
        permanent: true,
      },
      {
        source: '/sperm-bank-and-legal-aspects-all-you-need-to',
        destination: '/treatments/semen-freezing',
        permanent: true,
      },
      {
        source: '/surgical-management-endometriosis',
        destination: '/blogs/laparoscopy-for-endometriosis-how-it-can-i',
        permanent: true,
      },
      {
        source: '/tag/best-infertility-clinic-in-bangalore/page/1',
        destination: '/fertility-center/best-infertility-clinic-bangalore',
        permanent: true,
      },
      {
        source: '/tag/ivf-treatment',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/tag/ivf-treatment/g',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/tag/ivf-treatment/page/1',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/tag/pregnancy',
        destination: '/blogs/pregnancies-and-miscarriages',
        permanent: true,
      },
      {
        source: '/tag/rajyotsava',
        destination: '/',
        permanent: true,
      },
      {
        source: '/talk-series-by-dr-asha-s-vijay-egg-freezing/',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/the-journey-of-divinity-from-an-idea-to-reality',
        destination: '/blogs/the-journey-of-divinity-from-an-idea-to-rea',
        permanent: true,
      },
      {
        source: '/tv9',
        destination: '/',
        permanent: true,
      },
      {
        source: '/understanding-ivf-treatment-and-its-success-r',
        destination: '/blogs/ivf-and-success-rates',
        permanent: true,
      },
      {
        source: '/video-when-to-consult-fertility-specialist/',
        destination: '/blogs/when-to-see-a-fertility-specialist',
        permanent: true,
      },
      {
        source: '/what-is-infertility/',
        destination: '/blogs/what-is-infertility',
        permanent: true,
      },
      {
        source: '/what-is-iui-intrauterine-insemination/',
        destination: '/blogs/what-is-iui-intrauterine-insemination',
        permanent: true,
      },
      {
        source: '/womens-day-celebrations-govt-karnataka/',
        destination: '/',
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
    ];
  },
};

export default nextConfig;
