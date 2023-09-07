import React, { useRef } from 'react';
import Video from 'sections/home/video';
import About from 'sections/LandingPages/Neutral/about';
import AshaSection from 'sections/LandingPages/Neutral/AshaSection';
import FeaturesBlocks from 'sections/LandingPages/Neutral/awards';
import Banner from 'sections/LandingPages/Neutral/banner';
import Branch from 'sections/LandingPages/Neutral/branches';
import DoctorLayout from 'components/doctorsLayout';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HeroHome from 'sections/LandingPages/Neutral/hero';
import Stage from 'sections/LandingPages/Neutral/stage';
import Treatments from 'sections/LandingPages/Neutral/treatments';
import YACta from 'sections/LandingPages/Neutral/yetAnotherCTA';
import FloatWhatsApp from 'components/FloatWhatsapp';
import Cta from 'sections/gg-care/cta';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const IndexPage = ({ doctors, testimonials, branches }) => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India
        </title>
        <meta
          name='title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
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
      <div>
        <Banner />
        <About />
        <HeroHome />
        <Stage />
        <YACta />
        <Treatments />
        <AshaSection />
        <div className=''>
          <div className='bg-transparent mx-auto py-10 lg:py-16'>
            <h1 className='text-2xl lg:text-3xl font-heading font-bold text-center pb-10 lg:pb-16'>
              Meet Our Fertility Specialists
            </h1>
            <div className='relative max-w-lg mx-auto flex items-center justify-center'>
              <Carousel
                autoPlay
                infiniteLoop
                emulateTouch
                swipeable
                interval={5000}
                className='w-full h-full'
                stopOnHover
                showArrows
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => {
                  return (
                    <div
                      className={`${
                        hasPrev ? 'absolute' : 'hidden'
                      } top-0 bottom-0 left-0 md:flex justify-center items-center p-3 opacity-80 hover:opacity-100 cursor-pointer z-20 hidden`}
                      onClick={clickHandler}
                    >
                      <div className='w-11 h-11 bg-brandPurpleDark rounded-full flex items-center justify-center'>
                        <HiChevronLeft className='w-full h-full mr-1 text-white' />
                      </div>
                    </div>
                  );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                  return (
                    <div
                      className={`${
                        hasNext ? 'absolute' : 'hidden'
                      } top-0 bottom-0 right-0 hidden md:flex justify-center items-center p-3 opacity-80 hover:opacity-100 cursor-pointer z-20`}
                      onClick={clickHandler}
                    >
                      <div className='w-11 h-11 bg-brandPurpleDark rounded-full flex items-center justify-center'>
                        <HiChevronRight className='w-full h-full ml-1 text-white' />
                      </div>
                    </div>
                  );
                }}
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
          </div>
        </div>
        <FeaturesBlocks />
        <div className='pt-10'>
          <Video testimonials={testimonials} />
        </div>
        <Branch branches={branches} />
        <Cta />
        <FloatWhatsApp />
      </div>
    </div>
  );
};

export default IndexPage;

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
        doctors {
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
        branches {
          id
          title
          slug
          branchPicture {
            url
          }
        }
      }
    `,
  });

  const testimonialsData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  );

  const testimonials = await testimonialsData.json();

  return {
    props: {
      doctors: data.doctors,
      testimonials,
      branches: data.branches,
      fallback: true,
    },
    revalidate: 180,
  };
};
