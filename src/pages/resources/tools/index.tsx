import React from 'react';
import Link from 'next/link';
import BlogFooter from 'components/blogFooter';
import Head from 'next/head';
import Image from 'next/image';

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Tools and Calculator | GarbhaGudi</title>
        <meta name='title' content='Tools and Calculator | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Use these tools to know your fertility quotient, check for your next menstrual cycle, fertile window, pregnancy due date and more...'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Tools and Calculator | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Use these tools to know your fertility quotient, check for your next menstrual cycle, fertile window, pregnancy due date and more...'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1654690156/SEO/5-min_xsyat3.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Tools and Calculator | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='Use these tools to know your fertility quotient, check for your next menstrual cycle, fertile window, pregnancy due date and more...'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1654690156/SEO/5-min_xsyat3.jpg'
        />
      </Head>
      <h1 className='mx-auto max-w-7xl pt-12 text-center font-heading text-4xl font-semibold'>
        Tools and Calcualtors
      </h1>
      <p className='mx-auto max-w-7xl px-2 pt-6 text-center font-content font-semibold'></p>
      <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
        <div className='mx-auto grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          {Data.map((item) => (
            <Link href={`tools/${item.link}`} passHref key={item.id} className='group'>
              <div className='flex w-96 cursor-pointer rounded-2xl border-2 border-solid border-gg-500 px-4 py-3 text-gray-800 transition-colors duration-100 hover:border-transparent hover:bg-brandPink hover:text-gray-200 dark:border-gray-600 dark:text-gray-200 dark:hover:border-gg-500 dark:hover:bg-gray-600'>
                <div className='w-1/3'>
                  <Image
                    className='h-24 w-24 rounded-2xl object-cover transition-all duration-150 group-hover:grayscale-0 dark:grayscale'
                    src={item.icon}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </div>
                <div className='flex w-2/3 flex-col justify-center text-center'>
                  <p className='font-qs text-xl font-semibold'>{item.name}</p>
                  <p className='font-content text-xs font-semibold italic'>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-4 flex flex-col text-gray-800 dark:text-gray-200'>
        <p className='text-center font-heading text-xl font-bold'>Other Useful Links</p>
        <ul className='text-md mx-auto mt-4 list-disc space-y-4 font-content font-semibold'>
          <li>
            <Link href='/blogs/page/1'>
              <div className='underline-offset-2 hover:underline'>Blogs</div>
            </Link>
          </li>
          <li>
            <Link href='/resources/causes'>
              <div className='underline-offset-2 hover:underline'>Causes of Infertility</div>
            </Link>
          </li>
          <li>
            <Link href='/resources/diagnosis'>
              <div className='underline-offset-2 hover:underline'>Diagnosis Methods</div>
            </Link>
          </li>
          <li>
            <Link href='/resources/treatments'>
              <div className='underline-offset-2 hover:underline'>Treatment Options</div>
            </Link>
          </li>
          <li>
            <Link href='/resources/myths-and-facts'>
              <div className='underline-offset-2 hover:underline'>Myths and Facts</div>
            </Link>
          </li>
          <li>
            <Link href='https://consult.bestdocapp.com/home/GARBHAGUDI'>
              <div className='underline-offset-2 hover:underline'>Book an Appointment</div>
            </Link>
          </li>
          <li>
            <Link href='tel:+919108910832'>
              <div className='underline-offset-2 hover:underline'>Speak to our Executives</div>
            </Link>
          </li>
        </ul>
      </div>
      <BlogFooter />
    </div>
  );
};

export default IndexPage;

const Data = [
  {
    id: 1,
    name: 'Ovulation Calculator',
    link: 'ovulation-calculator',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1654849032/Icons/Resources/Calendar_tvq9bm.svg',
    description: 'Know your next menstrual cycle and fertile window',
  },
  {
    id: 1,
    name: 'Fertility Quotient Calculator',
    link: 'fertility-quotient-calculator',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1654849032/Icons/Resources/Calculator_bxkdl9.svg',
    description: 'Calculate your Fertility Quotient',
  },
];
