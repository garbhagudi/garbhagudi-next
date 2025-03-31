import Link from 'next/link';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
interface Article {
  articles: {
    articleType: string;
    icon: {
      url: string;
    };
    image: {
      url: string;
    };
    slug: string;
    id: string;
    title: string;
  }[];
}

const IndexPage = ({ articles }: Article) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Solutions</title>
        <meta name='title' content='Solutions | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content="Discover GarbhaGudi's range of advanced fertility solutions. From IVF and ICSI to genetic screening and fertility preservation, we offer cutting-edge treatments tailored to your unique needs."
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Solutions | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content="Discover GarbhaGudi's range of advanced fertility solutions. From IVF and ICSI to genetic screening and fertility preservation, we offer cutting-edge treatments tailored to your unique needs."
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Solutions | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content="Discover GarbhaGudi's range of advanced fertility solutions. From IVF and ICSI to genetic screening and fertility preservation, we offer cutting-edge treatments tailored to your unique needs."
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <h1 className='mx-auto max-w-7xl pt-12 text-center font-heading text-4xl font-semibold'>
        Solutions
      </h1>
      <p className='mx-auto max-w-7xl px-1 pt-6 text-center font-content font-semibold'>
        GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work
        to help you cherish the golden moment of holding your bundle of joy
      </p>
      <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
        <div className='mx-auto grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {articles?.map((item) => (
            <Link href={`fertility-center/${item?.slug}`} passHref key={item?.id} className='group'>
              <div className='mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-colors duration-100 hover:border-transparent hover:bg-brandPink hover:text-white dark:border-gray-600 dark:hover:bg-gray-600 md:w-96'>
                <div className='w-1/3'>
                  <Image
                    className='h-24 w-24 rounded-lg object-cover transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                    src={item?.icon?.url || item?.image?.url}
                    alt={item?.title}
                    width={100}
                    height={100}
                    loading='lazy'
                  />
                </div>
                <div className='flex w-2/3 flex-col justify-center text-center text-gray-800 dark:text-gray-200'>
                  <p className='line-clamp-2 font-lexend text-xl font-medium'>{item?.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        articles(where: { articleType: solutions }) {
          icon {
            url
          }
          image {
            url
          }
          slug
          id
          title
        }
      }
    `,
  });

  return {
    props: {
      articles: data.articles,
    },
    revalidate: 180,
  };
};
