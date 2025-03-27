import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Banner = dynamic(() => import('sections/LandingPages/Neutral/banner'), { ssr: true });
const Video = dynamic(() => import('sections/home/video'), {
  ssr: false,
});
const About = dynamic(() => import('sections/LandingPages/Neutral/about'), {
  ssr: false,
});
const AshaSection = dynamic(() => import('sections/LandingPages/Neutral/AshaSection'), {
  ssr: false,
});
const FeaturesBlocks = dynamic(() => import('sections/LandingPages/Neutral/awards'), {
  ssr: false,
});

const Branch = dynamic(() => import('sections/LandingPages/Neutral/branches'), {
  ssr: false,
});
const DoctorLayout = dynamic(() => import('components/doctorsLayout'), {
  ssr: false,
});
const Carousel = dynamic(() => import('nuka-carousel'), {
  ssr: false,
});
const HeroHome = dynamic(() => import('sections/LandingPages/Neutral/hero'), {
  ssr: false,
});
const Stage = dynamic(() => import('sections/LandingPages/Neutral/stage'), {
  ssr: false,
});
const Treatments = dynamic(() => import('sections/LandingPages/Neutral/treatments'), {
  ssr: false,
});
const FloatWhatsApp = dynamic(() => import('components/FloatWhatsapp'), {
  ssr: true,
});
const Cta = dynamic(() => import('sections/gg-care/cta'), {
  ssr: false,
});
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

const IndexPage = ({ doctors, testimonials, branches }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1742808594/paripoorna/IVF_Compressed_kmekqi_bewqzl.webp'
          as='image'
        />
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1742808594/paripoorna/IVF_Compressed_kmekqi_bewqzl.webp'
          as='image'
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
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=8&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
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
