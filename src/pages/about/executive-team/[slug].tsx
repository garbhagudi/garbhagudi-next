import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import dynamic from 'next/dynamic';
const Share = dynamic(() => import('components/share'), { ssr: false });
const Loading = dynamic(() => import('components/Loading'), { ssr: false });
import { useRouter } from 'next/router';
import Image from 'next/image';

export const getStaticProps = async ({ params }) => {
  const { data } =
    (await apolloClient.query({
      query: gql`
        query ($slug: String!) {
          director(where: { slug: $slug }) {
            id
            name
            details
            link
            image {
              url
            }
            imageUrl
            bio {
              raw
              text
            }
          }
        }
      `,
      variables: {
        slug: params.slug,
      },
    })) || {};

  return {
    props: {
      director: data.director,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        directors {
          name
          slug
        }
      }
    `,
  });
  return {
    paths: data.directors.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

const ExecutiveTeam = ({ director }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const title = `${director.name} | GarbhaGudi IVF Centre`;

  function addBreadcrumbsJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": "1",
              "name": "About",
              "item": "https://www.garbhagudi.com/about/overview"
            },
            {
              "@type": "ListItem",
              "position": "2",
              "name": "Executive Team",
              "item": "https://www.garbhagudi.com/about/executive-team"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "${director?.name}",
              "item": "https://www.garbhagudi.com/about/executive-team/${director?.slug}"
            }
          ]
        }`,
    };
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={`${director.name} | GarbhaGudi IVF Centre`} />
        <meta name='description' content={director?.bio?.text.slice(0, 160)} />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={`${director.name} | GarbhaGudi IVF Centre`} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={director?.bio?.text.slice(0, 160)} />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Directors_jbvcep.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`${director.name} | GarbhaGudi IVF Centre`} />
        <meta name='twitter:description' content={director?.bio?.text.slice(0, 160)} />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Directors_jbvcep.webp'
        />
        {/* Ld+JSON Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
          key='breadcrumbs-jsonld'
        />
      </Head>
      <BreadCrumbs
        text1='About'
        link1='/about/overview'
        text2='Executive Team'
        link2='/about/overview'
        text3={director?.name}
        link3='#'
        link4={''}
        text4={''}
      />
      <section className='body-font text-gray-600'>
        <div className='mx-auto flex flex-col py-24 md:px-5'>
          <div className='mx-auto lg:w-4/6'>
            <div className='h-56 overflow-hidden rounded-lg md:h-96'>
              <Image
                alt='content'
                className='h-full w-full object-cover'
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643287945/Banner/1200x500_4Directors_nqn9eg.webp'
                width={1200}
                height={500}
              />
            </div>
            <div className='mt-10 flex flex-col sm:flex-row'>
              <div className='text-center sm:w-1/3 sm:py-8 sm:pr-8'>
                <div className='inline-flex w-72 items-center justify-center rounded-full md:w-64'>
                  <Image
                    src={director?.image?.url}
                    alt={director?.name}
                    className='rounded-full'
                    width={500}
                    height={500}
                  />
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                  <h1 className='title-font mt-4 font-heading text-2xl font-semibold text-gray-800 dark:text-gray-200'>
                    {director?.name}
                  </h1>
                  <div className='mb-4 mt-2 h-1 w-12 rounded bg-gg-500 dark:bg-gg-400'></div>
                  <div className='font-content text-base font-semibold dark:text-gray-300'>
                    {director?.details}
                  </div>
                  <button className='mt-6 rounded-md bg-brandPink2 px-4 py-2 font-content font-semibold text-white'>
                    <a href={director?.link} target='_blank' rel='noreferrer'>
                      Connect
                    </a>
                  </button>
                </div>
              </div>
              <div className='mt-4 border-t border-gray-200 px-5 pt-4 dark:border-gray-600 sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left'>
                <div className='mb-4 text-justify text-lg leading-relaxed text-gray-800 dark:text-gray-200'>
                  <RichText
                    content={director?.bio?.raw.children}
                    renderers={{
                      p: ({ children }) => <p className='text-justify'>{children}</p>,
                      a: ({ children, href }) => (
                        <a href={href} className='text-gg-500 underline'>
                          {children}
                        </a>
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Share pinmedia={director?.image?.url} />
        </div>
      </section>
    </div>
  );
};

export default ExecutiveTeam;
