import React from 'react';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';

const VisionMission = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Vision &amp; Mission | GarbhaGudi</title>
        <meta name='title' content='Vision &amp; Mission | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='GarbhaGudi has served as a beacon of hope to thousands of infertile couples. Our experienced specialists, nurses, & embryologists work to cater for your needs'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Vision and Mission | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi has served as a beacon of hope to thousands of infertile couples. Our experienced specialists, nurses, & embryologists work to cater for your needs'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content=' | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='GarbhaGudi has served as a beacon of hope to thousands of infertile couples. Our experienced specialists, nurses, & embryologists work to cater for your needs'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <BreadCrumbs
        text1='About'
        link1='/about/overview'
        text2='Mission &amp; Vision'
        link2='#'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <section className='body-font text-gray-800 dark:text-gray-200'>
        <div className='container mx-auto px-5 py-24'>
          <h1 className='pb-16 text-center font-heading text-4xl font-bold underline lg:text-5xl'>
            Mission & Vision of GarbhaGudi
          </h1>
          <div className='-mx-4 -mb-10 flex flex-wrap text-center'>
            <div className='mb-10 px-4 sm:w-1/2'>
              <h2 className='title-font mb-3 mt-6 font-heading text-3xl font-semibold text-gray-800 dark:text-gray-200'>
                Vision
              </h2>
              <div className='h-64 overflow-hidden rounded-lg'>
                <Image
                  alt='content'
                  className='mb-2 h-full w-full object-cover object-center'
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643278927/About/1201x501_Vision_c6ds1h.webp'
                  width={500}
                  height={500}
                />
              </div>

              <p className='text-brandDark mt-2 text-left font-content text-lg leading-relaxed'>
                A mission followed by dedication and hard work turns into a vision. Enormous amount
                of hard work goes into reaching out to more and more people and create an awareness
                about infertility and{' '}
                <Link href='/treatments/best-female-infertility-treatment-in-bangalore'>
                  treatments for infertility
                </Link>
                . With a vision to help nurture the happiest moments of life, our vision is to reach
                far and wide, to have GarbhaGudi as a globally renowned health university with
                superlative success rate, strong scientific approach, ethical values, and humane
                touch.
              </p>
            </div>
            <div className='mb-10 px-4 sm:w-1/2'>
              <h2 className='title-font mb-3 mt-6 font-heading text-3xl font-semibold text-gray-800 dark:text-gray-200'>
                Mission
              </h2>
              <div className='h-64 overflow-hidden rounded-lg'>
                <Image
                  alt='content'
                  className='mb-2 h-full w-full object-cover object-center'
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643278945/About/1201x501_Mission_wcctgt.webp'
                  width={500}
                  height={500}
                />
              </div>

              <p className='text-brandDark mt-2 text-left font-content text-lg leading-relaxed'>
                <Link href='/fertility-experts/dr-asha-s-vijay'>Dr. Asha S. Vijay</Link>, a post
                graduate in Obstetrics &amp; Gynecology from the prestigious Bangalore Medical
                College, started her career with Kidwai Institute of Oncology, Bangalore and
                subsequently set up her own practice with Sannidhi Multi-Specialty Hospital. In
                years of her career, she saw the struggle of infertility patients. Her observation
                of people having{' '}
                <Link href='/resources/myths-and-facts'>misconceptions about infertility</Link> and
                infertility treatments, cost, and procedure, motivated her to help and guide people
                with reproductive disorders, who were clueless about the right approach. It was at
                that time that she started on a mission and the result of such a mission is what
                GarbhaGudi exists today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
