import React, { useRef } from 'react';
import Video from 'sections/home/video';
import About from 'sections/LandingPages/Neutral/about';
import AshaSection from 'sections/LandingPages/Neutral/AshaSection';
import FeaturesBlocks from 'sections/LandingPages/Neutral/awards';
import Banner from 'sections/LandingPages/Neutral/banner';
import Branch from 'sections/LandingPages/Neutral/branches';
import DoctorLayout from 'components/doctorsLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import HeroHome from 'sections/LandingPages/Neutral/hero';
import Stage from 'sections/LandingPages/Neutral/stage';
import Treatments from 'sections/LandingPages/Neutral/treatments';
import YACta from 'sections/LandingPages/Neutral/yetAnotherCTA';
import FloatWhatsApp from 'components/FloatWhatsapp';
import Cta from 'sections/gg-care/cta';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';

const IndexPage = ({ doctors }) => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const swiperRef = useRef<SwiperCore>();

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
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
              Our Fertility Experts
            </h1>
            <div className='relative max-w-7xl mx-auto flex items-center justify-center'>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className='bg-brandPink text-white rounded-full z-10 p-2 absolute left-0 ml-4'
              >
                <HiChevronLeft className='text-2xl' />
              </button>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                breakpoints={breakpoints}
                className='max-w-6xl'
              >
                {doctors.map((items) => (
                  <SwiperSlide key={items.id}>
                    <DoctorLayout
                      index={items.id}
                      imageComponent={
                        <ImageComponent
                          name={items.name}
                          image={items.image.url}
                          qualification={items.qualification}
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
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className='bg-brandPink text-white rounded-full p-2 z-10 absolute right-0 mr-4'
              >
                <HiChevronRight className='text-2xl' />
              </button>
            </div>
          </div>
        </div>
        <FeaturesBlocks />
        <div className='pt-10'>
          <Video />
        </div>
        <Branch />
        <Cta />
        <FloatWhatsApp />
      </div>
    </div>
  );
};

export default IndexPage;

const ImageComponent = ({
  name,
  image,
  qualification,
  designation,
  imageAlt,
}) => {
  return (
    <div className='flex items-center justify-center flex-col md:h-[21rem]'>
      <img
        src={image}
        alt={imageAlt}
        className='h-36 w-36 md:h-44 md:w-44 rounded-full'
      />
      <div className='text-center'>
        <div className='text-xl font-heading font-bold mt-4'>{name}</div>
        <div className='text-xs font-content mt-2 text-brandPurpleDark font-medium'>
          {qualification}
        </div>
        <div className='text-sm font-content mt-2 mb-4'>{designation}</div>
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
