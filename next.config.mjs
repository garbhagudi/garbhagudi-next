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
        destination: '/fertility-experts/:slug', 
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
        source: '/id/forgotpassword',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/account/login',
        destination: '/blogs/page/1',
        permanent: true,
      },
      {
        source: '/account/forgotpassword',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact5.html',
        destination: '/gg-care',
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
      {
        source: '/youve-been-diagnosed-with-unexplained-infertility-what-next/',
        destination: '/blogs/unexplained-infertility',
        permanent: true,
      },
      {
        source: '/womens-day-wishes-garbhagudi/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/what-is-iui-',
        destination: '/blogs/what-is-iui-intrauterine-insemination',
        permanent: true,
      },
      {
        source: '/video-male-infertility',
        destination: 'https://www.garbhagudi-ivf.com/male-infertility',
        permanent: true,
      },
      {
        source: '/treatments/ivf-treatment-in-bangalore/egg-freezing-quiz-form',
        destination: '/treatments/ivf-treatment-egg-freezing',
        permanent: true,
      },
      {
        source: '/treatments/ivf-treatment-in-bangalore/egg-freezing-quiz',
        destination: '/treatments/ivf-treatment-egg-freezing',
        permanent: true,
      },
      {
        source: '/topic-pelvic-infections-infertility-sub-topic-complications-treatment/',

        destination: '/blogs/common-infections-of-pelvis-leading-onto-infertility',
        permanent: true,
      },
      {
        source: '/tag/male-infertility/',
        destination: 'https://www.garbhagudi-ivf.com/male-infertility',
        permanent: true,
      },
      {
        source: '/tag/infertility',
        destination: '/treatments/infertility-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/tag/how-to-get-pregnant',
        destination: '/treatments/natural-pregnancy',
        permanent: true,
      },
      {
        source: '/tag/fertility-test',
        destination: '/blogs/fertility-tests-for-women',
        permanent: true,
      },
      {
        source: '/tag/best-infertility-clinic-in-bangalore/page/2',
        destination: '/fertility-center/best-infertility-clinic-bangalore',
        permanent: true,
      },
      {
        source: '/solutions/ivf-treatment-cost-in-bangalore',
        destination: '/treatments/ivf-treatment-cost-in-bangalore',
        permanent: true,
      },
      {
        source: '/solutions/cost-of-iui-in-bang',
        destination: '/solutions/cost-of-iui-in-bangalore',
        permanent: true,
      },
      {
        source: '/side-navigation/nutrition-weight',
        destination: '/blogs/fertility-and-nutrition',
        permanent: true,
      },
      {
        source: '/role-of-ultra-sound-in-infertility',
        destination:
          '/blogs/the-role-of-advanced-ultrasound-techniques-in-detecting-fertility-issues',
        permanent: true,
      },
      {
        source: '/resources/facts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/prolactin-hormonal-disorders-and-infertility',
        destination: '/blogs/prolactin-levels-in-women',
        permanent: true,
      },
      {
        source: '/prepare-yourself-mentally-physically-and-financially-for-a-fertility-treatment',
        destination: 'https://www.garbhagudi-ivf.com',
        permanent: true,
      },
      {
        source: '/poor-ovarian-reserve-por',
        destination: '/blogs/poor-ovarian-reserve-por',
        permanent: true,
      },
      {
        source: '/obesity-effects-fertility',
        destination: '/blogs/the-impact-of-obesity-on-fertility',
        permanent: true,
      },
      {
        source: '/ivf-precautions-post-embryo-transfer',
        destination: '/blogs/ivf-precautions-post-embryo-transfer',
        permanent: true,
      },
      {
        source: '/introduction-incidence-prevalence-male-infertility',
        destination: '/blogs/introduction-incidence-and-prevalence-of-male-infertility',
        permanent: true,
      },
      {
        source: '/introduction-incidence-prevalence-male-infertility',
        destination: '/blogs/introduction-incidence-and-prevalence-of-male-infertility',
        permanent: true,
      },
      {
        source: '/infertility-men-women-common-causes',
        destination: '/blogs/causes-of-male-and-female-infertility',
        permanent: true,
      },
      {
        source: '/infertility/departments-and-specialties',
        destination: '/blogs/what-is-infertility',
        permanent: true,
      },
      {
        source: '/infertility/departments',
        destination: '/blogs/what-is-infertility',
        permanent: true,
      },
      {
        source: '/how-to-choose-a-fertility-center',
        destination: '/blogs/how-to-choose-a-fertility-center',
        permanent: true,
      },
      {
        source: '/how-does-ivf-at-home-work',
        destination: '/blogs/how-does-ivf-from-home-work',
        permanent: true,
      },
      {
        source: '/garbhagudi-ivf-centre-article-in-profit-plus-kannada-magazine',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fertility-consultants/ivf-treatment-cost-in-bangalore',
        destination: '/treatments/ivf-treatment-cost-in-bangalore',
        permanent: true,
      },
      {
        source: '/fertility-center/cost-of-iui-in-bangalore ',
        destination: '/solutions/cost-of-iui-in-bangalore',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/resources/faq',
        permanent: true,
      },
      {
        source: '/facilities/ivf-treatment-cost-in-bangalore',
        destination: '/treatments/ivf-treatment-cost-in-bangalore',
        permanent: true,
      },
      {
        source: '/executive-team/:slug',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/even-sperm-and-eggs-come-with-an-expiration-date',
        destination: '/blogs/even-sperm-and-eggs-come-with-an-expiration-date',
        permanent: true,
      },
      {
        source: '/even-sperm-and-eggs-',
        destination: '/blogs/even-sperm-and-eggs-come-with-an-expiration-date',
        permanent: true,
      },
      {
        source: '/effect-endometriosis-fertility',
        destination: '/blogs/effect-of-endometriosis-on-fertility',
        permanent: true,
      },

      {
        source: '/dr-chinmayie-r',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/dr-chaitra-s-k',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-receives-the-rotary-rajyotsava-award-2019',
        destination: '/about/awards-and-accolades',
        permanent: true,
      },
      {
        source: '/dr-asha-s-vijay-program',
        destination: '/fertility-experts',
        permanent: true,
      },
      {
        source: '/does-hyperthyroidism-cause-infertility-in-women',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/diagnosis/ultrasound-scan',
        destination: '/resources/diagnosis/ultrasound-scan',
        permanent: true,
      },
      {
        source: '/diagnosis/semen-analysis',
        destination: '/resources/diagnosis/semen-analysis',
        permanent: true,
      },
      {
        source: '/diagnosis/pre-implantation-genetic-screening-pgs',
        destination: '/resources/diagnosis/pre-implantation-genetic-screening-pgs',
        permanent: true,
      },
      {
        source: '/diagnosis/pre-implantation-genetic-diagnosis-pgd',
        destination: '/resources/diagnosis/pre-implantation-genetic-diagnosis-pgd',
        permanent: true,
      },
      {
        source: '/diagnosis/ovarian-reserve-tests-ort',
        destination: '/resources/diagnosis/ovarian-reserve-tests-ort',
        permanent: true,
      },
      {
        source: '/diagnosis/hysterosalpingogram',
        destination: '/resources/diagnosis/hysterosalpingogram',
        permanent: true,
      },
      {
        source: '/diagnosis/endometrial-receptivity-array-era',
        destination: '/resources/diagnosis/endometrial-receptivity-array-era',
        permanent: true,
      },
      {
        source: '/diagnosis/blood-investigations',
        destination: '/resources/diagnosis/blood-investigations',
        permanent: true,
      },
      {
        source: '/causes-and-risk-factors-of-poor-ovarian-reserve',
        destination: '/blogs/causes-and-risk-factors-of-poor-ovarian-reserve',
        permanent: true,
      },
      {
        source: '/causes/surgical-complications',
        destination: '/resources/causes/surgical-complications',
        permanent: true,
      },
      {
        source: '/causes/polycystic-ovarian-syndrome-pcos',
        destination: '/resources/causes/polycystic-ovarian-syndrome-pcos',
        permanent: true,
      },
      {
        source: '/causes/pelvic-inflamatory-disease',
        destination: '/resources/causes/pelvic-inflamatory-disease',
        permanent: true,
      },
      {
        source: '/blogs/safe-parenthood-with-donor-insemination',
        destination: '/',
        permanent: true,
      },
      {
        source: '/causes/ovulation-disorders',
        destination: '/resources/causes/ovulation-disorders',
        permanent: true,
      },
      {
        source: '/causes/obesity-and-fertility',
        destination: '/blogs/the-impact-of-obesity-on-fertility',
        permanent: true,
      },
      {
        source: '/causes/hormonal-disorders',
        destination: '/resources/causes/hormonal-disorders',
        permanent: true,
      },
      {
        source: '/causes/blocked-fallopian-tubes',
        destination: '/blogs/blocked-fallopian-tubes-diagnosis-and-treatment-options',
        permanent: true,
      },
      {
        source: '/category/garbhagudi_ivf',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/what-made',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/understanding-how-endocannabinoid-receptors-influence-reproduction',
        destination: '/blogs/understanding-how-endocannabinoid-receptors-influence-reproduction1',
        permanent: true,
      },
      {
        source: '/blogs/sperm-bank-and-legal-aspects-all-you-need-to-know',
        destination: '/blogs/the-future-of-sperm-and-egg-banking-in-ivf-treatments',
        permanent: true,
      },

      {
        source: '/what-is-ivf',
        destination: '/blogs/what-is-ivf',
        permanent: true,
      },
      {
        source: '/sperms-male-infertility',
        destination: '/blogs/sperms-and-male-infertility',
        permanent: true,
      },
      {
        source: '/signs-of-infertility-in-young-women',
        destination: '/blogs/signs-of-infertility-in-young-women',
        permanent: true,
      },
      {
        source: '/pgs-testing',
        destination: '/blogs/what-are-pgd-and-pgs',
        permanent: true,
      },
      {
        source: '/ivf-clinic-in-hanumanth-nagar-bangalore',
        destination: '/locations/hanumanthanagar',
        permanent: true,
      },
      {
        source: '/iui-treatment-cost-in-india-2',
        destination: '/treatments/iui-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/is-infertility-a-womans-problem',
        destination: '/blogs/intracytoplasmic-sperm-injection-icsi-when-is-it-recommended',
        permanent: true,
      },
      {
        source: '/intracytoplasmic-sperm-injection',
        destination: '/blogs/intracytoplasmic-sperm-injection-icsi-when-is-it-recommended',
        permanent: true,
      },
      {
        source: '/how-to-select-the-best-ivf-center',
        destination: '/blogs/how-to-select-the-best-ivf-center',
        permanent: true,
      },

      {
        source: '/fertility-centre-in-jayanagar-bangalore',
        destination: '/locations/jayanagar',
        permanent: true,
      },
      {
        source: '/fallopian-tube-blockage-symptoms',
        destination: '/blogs/blocked-fallopian-tubes-and-infertility',
        permanent: true,
      },
      {
        source: '/en_US/profile/asha-s-vijay',
        destination: '/fertility-experts/dr-asha-s-vijay',
        permanent: true,
      },
      {
        source: '/en_US/male-infertility-work',
        destination: '/blogs/male-infertility-work-up',
        permanent: true,
      },

      {
        source: '/blogs/what-is-ivf-how-does-it-work',
        destination: '/blogs/what-is-ivf',
        permanent: true,
      },
      {
        source: '/blogs/icsi-treatment-in-bangalore',
        destination: '/treatments/icsi-treatment-in-bangalore',
        permanent: true,
      },
      {
        source: '/blogs/do-sexually-transmitted-diseases-affect-fertility',
        destination: '/blogs/can-sexually-transmit-diseases-affect-infertility',
        permanent: true,
      },
      {
        source: '/best-fertility-hospital-in-kalyan-nagar-bangalore',
        destination: '/locations/kalyan-nagar',
        permanent: true,
      },

      {
        source: '/blogs/know-about-gestational-surrogacy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/iui-infertility-treatment',
        destination: '/blogs/iui-infertility-treatment',
        permanent: true,
      },
      {
        source: '/blogs/infertility-in-india-',
        destination: '/blogs/infertility-in-india-statistics-and-challenges',
        permanent: true,
      },
      {
        source: '/blogs/fertility-and',
        destination: '/fertility-center',
        permanent: true,
      },
      {
        source: '/biological-clock-ticking-ladies-beware-aware',
        destination: '/blogs/your-biological-clock-is-ticking-ladies-be-aware',
        permanent: true,
      },
      {
        source:
          '/awards-and-accolades/national-excellency-award-2024-awarded-by-the-world-health-congress',
        destination: '/about/awards-and-accolades',
        permanent: true,
      },
      {
        source: '/awards-and-accolades/icon-of-the-year-ivf-south-dr-asha-s-vijay',
        destination: '/about/awards-and-accolades/icon-of-the-year-ivf-south-dr-asha-s-vijay',
        permanent: true,
      },
      {
        source:
          '/awards-and-accolades/garbhagudi-recognised-as-best-ivf-and-fertility-hospital-in-india',
        destination:
          '/about/awards-and-accolades/garbhagudi-recognised-as-best-ivf-and-fertility-hospital-in-india',
        permanent: true,
      },

      {
        source: '/awards-and-accolades/garbhagudi-certified-healthy-workplace',
        destination: '/about/awards-and-accolades/garbhagudi-certified-healthy-workplace',
        permanent: true,
      },
      {
        source: '/awards-and-accolades/fastest-growing-ivf-centre-in-bangalore',
        destination: '/about/awards-and-accolades/fastest-growing-ivf-centre-in-bangalore',
        permanent: true,
      },
      {
        source: '/awards-and-accolades/best-ivf-clinic-of-the-year-ethealth',
        destination: '/about/awards-and-accolades/best-ivf-clinic-of-the-year-ethealth',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
