import React from 'react';
import Link from 'next/link';
import BlogFooter from 'components/blogFooter';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Tools and Calculator | GarbhaGudi</title>
        <meta
          name='title'
          content='Tools and Calculator | GarbhaGudi IVF Centre'
        />
        <meta
          name='description'
          content='Use these tools to know your fertility quotient, check for your next menstrual cycle, fertile window, pregnancy due date and more...'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Tools and Calculator | GarbhaGudi IVF Centre'
        />
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
        <meta
          name='twitter:title'
          content='Tools and Calculator | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='Use these tools to know your fertility quotient, check for your next menstrual cycle, fertile window, pregnancy due date and more...'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1654690156/SEO/5-min_xsyat3.jpg'
        />
      </Head>
      <h1 className='pt-12 mx-auto text-4xl font-semibold text-center max-w-7xl font-heading'>
        Tools and Calcualtors
      </h1>
      <p className='px-2 pt-6 mx-auto font-semibold text-center max-w-7xl font-content'></p>
      <div className='flex py-6 mx-auto max-w-7xl sm:py-12'>
        <div className='grid grid-cols-1 gap-10 mx-auto lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
          {Data.map((item) => (
            <Link
              href={`tools/${item.link}`}
              passHref
              key={item.id}
              className='group'
            >
              <div className='flex px-4 py-3 transition-colors duration-100 border-2 border-solid cursor-pointer border-gg-500 dark:border-gray-600 dark:hover:border-gg-500 w-96 rounded-2xl hover:bg-brandPink dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 hover:text-gray-200 hover:border-transparent '>
                <div className='w-1/3'>
                  <img
                    className='object-cover w-24 h-24 rounded-2xl dark:grayscale group-hover:grayscale-0 transition-all duration-150'
                    src={item.icon}
                    alt={item.name}
                  />
                </div>
                <div className='flex flex-col justify-center w-2/3 text-center'>
                  <p className='text-xl font-semibold font-qs'>{item.name}</p>
                  <p className='text-xs italic font-semibold font-content'>
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='flex flex-col mt-4 text-gray-800 dark:text-gray-200 '>
        <p className='text-xl font-bold text-center font-heading'>
          Other Useful Links
        </p>
        <ul className='mx-auto mt-4 space-y-4 font-semibold list-disc text-md font-content'>
          <li>
            <Link href='/blogs/page/1'>
              <div className='hover:underline underline-offset-2'>Blogs</div>
            </Link>
          </li>
          <li>
            <Link href='/resources/causes'>
              <div className='hover:underline underline-offset-2'>
                Causes of Infertility
              </div>
            </Link>
          </li>
          <li>
            <Link href='/resources/diagnosis'>
              <div className='hover:underline underline-offset-2'>
                Diagnosis Methods
              </div>
            </Link>
          </li>
          <li>
            <Link href='/resources/treatments'>
              <div className='hover:underline underline-offset-2'>
                Treatment Options
              </div>
            </Link>
          </li>
          <li>
            <Link href='/resources/myths-and-facts'>
              <div className='hover:underline underline-offset-2'>
                Myths and Facts
              </div>
            </Link>
          </li>
          <li>
            <Link href='https://consult.bestdocapp.com/home/GARBHAGUDI'>
              <div className='hover:underline underline-offset-2'>
                Book an Appointment
              </div>
            </Link>
          </li>
          <li>
            <Link href='tel:+919108910832'>
              <div className='hover:underline underline-offset-2'>
                Speak to our Executives
              </div>
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
