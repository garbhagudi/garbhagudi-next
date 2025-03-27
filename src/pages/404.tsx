import { HiChevronRight } from 'react-icons/hi';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const links = [
  {
    title: 'Our Fertility Experts',
    description: 'Meet our team of fertility experts.',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839012/Icons/About/Our_Fertility_Experts_bxsrrh.svg',
    path: '/fertility-experts',
  },
  {
    title: 'Resources & Knowledge Center',
    description: 'Learn more about causes, diagnosis and treatment options of infertility.',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264858/Icons/Resources/FAQs_x8rsvf.svg',
    path: '/resources',
  },
  {
    title: 'About Us',
    description: 'Learn more about GarbhaGudi.',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1642838895/Icons/About/About_Us_01_yz3h95.svg',
    path: '/about/overview',
  },
  {
    title: 'GG Care',
    description: 'Contact our executives for more information and appointments.',
    icon: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1643459544/Icons/Contact/GG_Care_e7e1pc.svg',
    path: '/gg-care',
  },
];

const FourOhFour = () => {
  return (
    <div>
      <Head>
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg'
          as='image'
        />
        <title>Four Oh! Four Error</title>
        <meta
          name='description'
          content="The page you are looking for doesn't exist or has been moved somewhere else. Apologies for the Inconvenience"
        />
      </Head>
      <div className='bg-white'>
        <main className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 pt-16'>
            <Image
              className='mx-auto h-16 w-auto'
              src='https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg'
              alt='Workflow'
              width={200}
              height={200}
              priority={true}
            />
          </div>
          <div className='mx-auto max-w-xl py-16 sm:py-24'>
            <div className='text-center'>
              <p className='font-content text-sm font-semibold uppercase tracking-wide text-brandPink'>
                404 error.
              </p>
              <h1 className='mt-4 font-heading text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                This page does not exist.
              </h1>
              <p className='mt-2 font-content text-lg text-gray-500'>
                The page you are looking for could not be found.
              </p>
            </div>
            <div className='mt-12'>
              <h2 className='font-heading text-sm font-semibold uppercase tracking-wide text-gray-500'>
                Popular pages
              </h2>
              <ul
                role='list'
                className='mt-4 divide-y divide-gray-200 border-b border-t border-gray-200 font-content'
              >
                {links.map((link, linkIdx) => (
                  <li key={linkIdx} className='relative flex items-start space-x-4 border-b py-6'>
                    <div className='flex-shrink-0'>
                      <span className='flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50'>
                        <Image
                          src={link.icon}
                          alt={link.title}
                          className=''
                          aria-hidden='true'
                          width={40}
                          height={40}
                          loading='lazy'
                        />
                      </span>
                    </div>
                    <div className='min-w-0 flex-1'>
                      <h3 className='text-base font-medium text-gray-900'>
                        <span className='rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2'>
                          <Link href={link.path} className='focus:outline-none'>
                            <span className='absolute inset-0' aria-hidden='true' />
                            {link.title}
                          </Link>
                        </span>
                      </h3>
                      <p className='text-base text-gray-500'>{link.description}</p>
                    </div>
                    <div className='flex-shrink-0 self-center'>
                      <HiChevronRight className='h-5 w-5 text-gray-400' aria-hidden='true' />
                    </div>
                  </li>
                ))}
              </ul>
              <div className='mt-8'>
                <Link
                  href='/'
                  className='font-content text-base font-medium text-brandPink4 hover:text-brandPink'
                >
                  Or go back home<span aria-hidden='true'> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FourOhFour;
