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
        <title>
          Infertility Centre in Bangalore | Infertility Treatment in Bangalore
        </title>
        <meta
          name='title'
          content='Infertility Centre in Bangalore | Infertility Treatment in Bangalore'
        />
        <meta
          name='description'
          content='GarbhaGudi is one of the best Infertility Centre & hospital in Bangalore. Our experienced team of Infertility Specialist in Bangalore have a high success rate of fertility Treatment in Bangalore.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Infertility Centre in Bangalore | Infertility Treatment in Bangalore'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is one of the best Infertility Centre & hospital in Bangalore. Our experienced team of Infertility Specialist in Bangalore have a high success rate of fertility Treatment in Bangalore.'
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
        <div className='bg-transparent mx-auto py-10 lg:py-16'>
          <h2 className='text-2xl lg:text-3xl font-heading font-bold text-center pb-10 lg:pb-16'>
            Our Fertility Specialists
          </h2>
          <div className='relative max-w-lg mx-auto flex items-center justify-center'>
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
                  className='hidden w-11 h-11 text-4xl bg-brandPurpleDark text-white rounded-full md:flex items-center justify-center ml-3 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out'
                >
                  <HiChevronLeft className='mr-1' />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  onClick={nextSlide}
                  className='hidden w-11 h-11 text-4xl bg-brandPurpleDark text-white rounded-full md:flex items-center justify-center mr-3 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out'
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
          <div className='max-w-5xl  mx-auto pt-6 font-content'>
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
    <div className='flex items-center justify-center flex-col md:h-[21rem]'>
      <div className='relative w-44 h-44'>
        <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
        <Image
          className='rounded-full shadow-2xl drop-shadow-2xl bg-transparent'
          src={image}
          alt={imageAlt || name}
          width={500}
          height={500}
          loading='lazy'
        />
      </div>
      <div className='text-center'>
        <div className='text-xl font-heading font-bold mt-4'>{name}</div>
        <div className='text- font-content mt-2 mb-4'>{designation}</div>
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
