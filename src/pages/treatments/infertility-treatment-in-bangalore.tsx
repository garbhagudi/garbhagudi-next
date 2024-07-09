import React, { useRef } from 'react';
import AshaSection from 'sections/LandingPages/Neutral/AshaSection';
import Banner from 'sections/infertility/banner';
import {
  InfertilityTreatmentOptions,
  WhatIsInfertilityTreatment,
  InfertilityTreatmentProcess,
  WhyGarbhaGudi,
  WhenDiagnose,
  Causes,
} from 'sections/infertility/content';
import CTA from 'sections/infertility/cta';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import DoctorLayout from 'components/doctorsLayout';
import Faq from 'sections/infertility/faq';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const InfertilityPage = ({ doctors }) => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Best Infertility Treatment In Bangalore</title>
        <meta
          name='title'
          content='Best Infertility Treatment In Bangalore | Expert Fertility Solutions'
        />
        <meta
          name='description'
          content='Your Journey to Parenthood Begins Here. Explore our comprehensive infertility treatment options in Bangalore, designed to fulfill your dreams of starting a family. Contact us '
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Best Infertility Treatment In Bangalore | Expert Fertility Solutions'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Your Journey to Parenthood Begins Here. Explore our comprehensive infertility treatment options in Bangalore, designed to fulfill your dreams of starting a family. Contact us '
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <Banner />
      <WhatIsInfertilityTreatment />
      <InfertilityTreatmentOptions />
      <CTA />
      <InfertilityTreatmentProcess />
      <Causes />
      <WhyGarbhaGudi />
      <WhenDiagnose />
      <AshaSection />
      <div className=''>
        <div className='mx-auto bg-transparent py-10 lg:py-16'>
          <h2 className='pb-10 text-center font-heading text-2xl font-bold lg:pb-16 lg:text-3xl'>
            Our Fertility Specialists
          </h2>
          <div className='relative mx-auto flex max-w-lg items-center justify-center'>
            <Carousel
              autoplay
              defaultControlsConfig={defaultControlsConfig}
              autoplayInterval={5000}
              className='max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl'
              wrapAround
              dragging
              enableKeyboardControls
              pauseOnHover
              renderCenterLeftControls={({ previousSlide }) => (
                <button
                  onClick={previousSlide}
                  className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
                >
                  <HiChevronLeft className='mr-1' />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  onClick={nextSlide}
                  className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
                >
                  <HiChevronRight className='ml-1' />
                </button>
              )}
            >
              {doctors.map((items) => (
                <DoctorLayout
                  index={items.id}
                  key={items.id}
                  imageComponent={
                    <ImageComponent
                      name={items.name}
                      image={items.image.url}
                      designation={items.designation}
                      imageAlt={items.imageAlt}
                    />
                  }
                  activeIndex={activeIndex}
                  docpic={items.image.url}
                  name={items.name}
                  bio={items.bio.raw.children}
                  setActiveIndex={setActiveIndex}
                ></DoctorLayout>
              ))}
            </Carousel>
          </div>
          <div className='mx-auto max-w-5xl pt-6 font-content'>
            If you're seeking the{' '}
            <span className='font-bold'>best infertility care</span>, look no
            further than GarbhaGudi IVF Centre in Bangalore. Our team boasts the
            finest <span className='font-bold'>infertility specialists</span>,
            dedicated to providing top-tier treatments and solutions. As the
            leading{' '}
            <span className='font-bold'>infertility doctor in Bangalore</span>,
            we take pride in being the go-to destination for those in search of
            effective and compassionate care. With a reputation as the{' '}
            <span className='font-bold'>
              best fertility doctor in Bangalore
            </span>
            , our experts at GarbhaGudi are committed to guiding your journey
            towards parenthood with expertise and unwavering support.
          </div>
        </div>
      </div>
      <Faq />
      <CTA />
    </div>
  );
};

export default InfertilityPage;

const ImageComponent = ({ name, image, designation, imageAlt }) => {
  return (
    <div className='flex flex-col items-center justify-center md:h-[21rem]'>
      <div className='relative h-44 w-44'>
        <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
        <Image
          className='rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
          src={image}
          alt={imageAlt || name}
          width={500}
          height={500}
          loading='lazy'
        />
      </div>
      <div className='text-center'>
        <div className='mt-4 font-heading text-xl font-bold'>{name}</div>
        <div className='text- mb-4 mt-2 font-content'>{designation}</div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors(orderBy: order_ASC) {
          id
          name
          designation
          qualification
          location
          image {
            url
          }
          imageAlt
          bio {
            raw
          }
        }
      }
    `,
  });

  return {
    props: {
      doctors: data.doctors,
      fallback: true,
    },
    revalidate: 180,
  };
};
