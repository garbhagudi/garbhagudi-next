import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const IndexPage = () => {
  return (
    <div>
      <div>
        <Head>
          {/* Primary Tags */}

          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>Resources | GarbhaGudi</title>
          <meta name='title' content='Resources | GarbhaGudi IVF Centre' />
          <meta
            name='description'
            content='Here are some of the most frequently asked questions about infertility and its treatment options.'
          />

          {/* Open Graph / Facebook */}

          <meta property='og:title' content='Resources | GarbhaGudi IVF Centre' />
          <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
          <meta property='og:url' content='https://garbhagudi.com' />
          <meta
            property='og:description'
            content='Here are some of the most frequently asked questions about infertility and its treatment options.'
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802155/SEO/OG_images_FAQs_k40phu.jpg'
          />

          {/* Twitter*/}

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@garbhagudiivf' />
          <meta name='twitter:title' content='Resources | GarbhaGudi IVF Centre' />
          <meta
            name='twitter:description'
            content='Here are some of the most frequently asked questions about infertility and its treatment options.'
          />
          <meta
            name='twitter:image'
            content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802155/SEO/OG_images_FAQs_k40phu.jpg'
          />
        </Head>
        <div className='mx-auto max-w-7xl'>
          <h1 className='pt-10 text-center font-heading text-4xl font-bold text-gray-800 dark:text-gray-200 lg:pt-24 lg:text-5xl'>
            Resources
          </h1>
          <p className='pb-10 pt-4 text-center font-content text-gray-800 dark:text-gray-200 lg:pb-16'>
            Learn more about causes, diagnosis and treatment options of infertility
          </p>
          <div className='mx-auto grid max-w-2xl grid-cols-2 gap-4'>
            {data.map((items) => (
              <Link key={items.id} href={items.link}>
                <div className='flex flex-col items-center justify-center rounded-xl py-3'>
                  <Image
                    src={items.icon}
                    alt={items.title}
                    className='h-20 w-20 transition-all duration-300 dark:grayscale dark:hover:grayscale-0'
                    width={80}
                    height={80}
                  />
                  <div className='pt-3 text-center font-content'>{items.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

const data = [
  {
    id: '1',
    title: 'Blogs',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839773/Icons/Resources/Blogs_duatrt.svg',
    desc: 'Blogs regarding infertility, treatment and parenthood',
    link: '/blogs/page/1',
  },
  {
    id: '2',
    title: 'Causes',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839775/Icons/Resources/Causes_cfivce.svg',
    desc: 'The major causes for infertility',
    link: '/resources/causes',
  },
  {
    id: '3',
    title: 'Diagnosis',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839791/Icons/Resources/Diagnosis_psjq8s.svg',
    desc: 'Tests for infertility diagnosis',
    link: '/resources/diagnosis',
  },
  {
    id: '4',
    title: 'Tools',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1654849032/Icons/Resources/Calculator_bxkdl9.svg',
    desc: 'Ovulation & fertility quotient calculators',
    link: '/resources/tools',
  },
  {
    id: '5',
    title: 'Video Resources',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1643442839/Icons/About/Media_nyook4.svg',
    desc: 'Informational videos from our social platforms',
    link: '/resources/video-resources',
  },
  {
    id: '6',
    title: 'Frequently Asked Questions',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264858/Icons/Resources/FAQs_x8rsvf.svg',
    desc: 'Frequently Asked Questions',
    link: '/resources/faq',
  },
  {
    id: '7',
    title: 'Myths and Facts',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1656676913/Icons/Resources/MYTH_FACT_wdure8.svg',
    desc: 'Common myths related to health and fertility',
    link: '/resources/myths-and-facts',
  },
];
