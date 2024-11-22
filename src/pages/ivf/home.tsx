import React from 'react';
import Video from 'sections/home/video';
import About from 'sections/LandingPages/Neutral/about';
import AshaSection from 'sections/LandingPages/Neutral/AshaSection';
import FeaturesBlocks from 'sections/LandingPages/Neutral/awards';
import Banner from 'sections/LandingPages/Neutral/banner';
import Branch from 'sections/LandingPages/Neutral/branches';
import DoctorLayout from 'components/doctorsLayout';
import Carousel from 'nuka-carousel';
import HeroHome from 'sections/LandingPages/Neutral/hero';
import Stage from 'sections/LandingPages/Neutral/stage';
import Treatments from 'sections/LandingPages/Neutral/treatments';
import FloatWhatsApp from 'components/FloatWhatsapp';
import Cta from 'sections/gg-care/cta';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

const IndexPage = ({ doctors, testimonials, branches }) => {
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
        <title>Bangalore's Best IVF Centres | GarbhaGudi IVF Centre</title>
        <meta name='title' content="Bangalore's Best IVF Centres | GarbhaGudi IVF Centre" />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content="Bangalore's Best IVF Centres | GarbhaGudi IVF Centre" />
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
        <meta name='twitter:title' content="Bangalore's Best IVF Centres | GarbhaGudi IVF Centre" />
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
        {/* <YACta /> */}
        <Treatments />
        <AshaSection />
        <div className=''>
          <div className='mx-auto bg-transparent py-10 lg:py-16'>
            <h1 className='pb-10 text-center font-heading text-2xl font-bold lg:pb-16 lg:text-3xl'>
              Meet Our Fertility Specialists
            </h1>
            <div className='relative mx-auto flex max-w-3xl items-center justify-center'>
              <Carousel
                autoplay
                defaultControlsConfig={defaultControlsConfig}
                autoplayInterval={5000}
                className='max-w-xs md:max-w-md lg:max-w-lg'
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

interface ImageComponentProps {
  name: string;
  image: string;
  designation: string;
  imageAlt: string;
}

const ImageComponent = ({ name, image, designation, imageAlt }: ImageComponentProps) => {
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
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
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
