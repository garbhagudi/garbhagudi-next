import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import Link from 'next/link';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });
export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        career(where: { slug: $slug }) {
          position
          jobDescription {
            raw
          }
          image {
            url
          }
          qualification
          experience
          description
          location
          link
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  if (!data || !data?.career) {
    return {
      redirect: {
        destination: '/careers',
        permanent: true,
      },
    };
  }
  return {
    props: {
      career: data.career,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        careers {
          slug
        }
      }
    `,
  });

  return {
    paths: data.careers.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

const Career = ({ career }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  const title = `${career.position}`;

  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='dns-prefetch' href='https://res.cloudinary.com' />
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1657979955/Banner/Argoya_Silver_Award_Web_Bnr-min_bx7xeo.webp'
          as='image'
        />
        <link rel='preload' href={career?.image?.url} as='image' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content=' | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={`${career?.position}| GarbhaGudi IVF Centre`} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Careers_vpudat.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`${career?.position}| GarbhaGudi IVF Centre`} />
        <meta
          name='twitter:description'
          content='We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Careers_vpudat.webp'
        />
      </Head>
      <BreadCrumbs
        text1='Careers'
        link1={'/careers'}
        text2={career?.position}
        link2={'#'}
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <section className='body-font text-gray-800 dark:text-gray-200'>
        <div className='container mx-auto flex flex-col px-5 py-8'>
          <div className='mx-auto max-w-7xl'>
            <div>
              <h1 className='py-6 text-center font-heading text-2xl font-bold sm:text-4xl'>
                GarbhaGudi – Certified Healthy Workplace
              </h1>
              <Link href='/about/awards-and-accolades/garbhagudi-certified-healthy-workplace'>
                <div>
                  <Image
                    width={1200}
                    height={320}
                    src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1657979955/Banner/Argoya_Silver_Award_Web_Bnr-min_bx7xeo.webp'
                    alt='arogya world banner'
                    className='rounded-xl'
                    priority={true}
                  />
                </div>
              </Link>
            </div>
            <div className='mt-10 flex flex-col sm:flex-row'>
              <div className='text-center sm:w-1/3 sm:py-8 sm:pr-8'>
                <div className='inline-flex h-44 w-44 animate-shine items-center justify-center rounded-full bg-gradient-to-br from-brandPurple via-white to-brandPink4 bg-[length:400%] shadow-2xl drop-shadow-2xl lg:h-48 lg:w-48'>
                  <Image
                    src={career?.image?.url}
                    alt={career?.position}
                    className='h-44 w-44 rounded-full'
                    width={176}
                    height={176}
                    loading='lazy'
                  />
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                  <h2 className='title-font mt-4 font-heading text-2xl font-semibold text-gray-800 dark:text-gray-200'>
                    {career?.position}
                  </h2>
                  <div className='mb-4 mt-2 h-1 w-12 rounded bg-brandPink'></div>
                  <p className='font-qs text-base font-semibold'>
                    Qualification: {career?.qualification}
                  </p>
                  <p className='font-qs text-base font-semibold'>
                    Experience: {career?.experience}
                  </p>
                  <p className='font-qs text-base font-semibold'>Location: {career?.location}</p>
                  <div className='glow mt-4 px-4 py-2 font-content font-semibold text-white'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <Link href={career?.link} target='_blank' rel='noreferrer'>
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className='mt-4 border-t border-gray-200 pt-4 sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left'>
                <div className='mb-4 font-content text-xl'>Description</div>
                <div className='font-qs text-base'>{career?.description}</div>
                <div className='mt-8 font-content text-xl'>Job Responsibilities</div>
                <div className='text-md text-brandDark mb-4 font-qs leading-relaxed'>
                  <RichText
                    content={career?.jobDescription?.raw?.children}
                    renderers={{
                      p: ({ children }) => <p className='text-justify'>{children}</p>,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Share pinmedia='' />
        </div>
      </section>
      <Cta />
    </div>
  );
};

export default Career;
