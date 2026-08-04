import Link from 'next/link';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';

// Shape returned by the Hygraph query in getStaticProps.
interface CmsArticle {
  icon: {
    url: string;
  };
  logoUrl: string;
  slug: string;
  id: string;
  title: string;
}

interface Article {
  articles: {
    articleType: string;
    icon: {
      url: string;
    };
    logoUrl: string;
    slug: string;
    href: string;
    id: string;
    title: string;
  }[];
}

const IndexPage = ({ articles }: Article) => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Fertility Consultants', url: 'https://www.garbhagudi.com/fertility-consultants' },
  ]);
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Fertility Consultants</title>
        <meta name='title' content='Fertility Consultants | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Get expert guidance from top fertility-consultants at GarbhaGudi IVF. Personalized care for your parenthood journey. Book a consultation today! .'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Fertility Consultants | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Get expert guidance from top fertility-consultants at GarbhaGudi IVF. Personalized care for your parenthood journey. Book a consultation today! .'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Fertility Consultants | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='Get expert guidance from top fertility-consultants at GarbhaGudi IVF. Personalized care for your parenthood journey. Book a consultation today! .'
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
      </Head>
      <BreadCrumbs
        link1='/fertility-consultants'
        text1='Fertility Consultants'
        text2=''
        link2=''
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <h1 className='mx-auto max-w-7xl pt-12 text-center font-heading text-4xl font-semibold'>
        Fertility Consultants
      </h1>
      <p className='mx-auto max-w-7xl px-1 pt-6 text-center font-content font-semibold'>
        GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work
        to help you cherish the golden moment of holding your bundle of joy
      </p>
      <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
        <div className='mx-auto grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {articles?.map((item) => (
            <Link href={item.href} passHref key={item.id} className='group'>
              <div className='mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-colors duration-100 hover:border-transparent hover:bg-brandPink hover:text-white dark:border-gray-600 dark:hover:bg-gray-600 md:w-96'>
                <div className='w-1/3'>
                  <Image
                    className='h-24 w-24 rounded-lg object-cover transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                    src={
                      item?.logoUrl ||
                      'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vb8nw585l07plf4sf8qyo'
                    }
                    alt={item?.title}
                    width={100}
                    height={100}
                    loading='lazy'
                  />
                </div>
                <div className='flex w-2/3 flex-col justify-center text-center text-gray-800 dark:text-gray-200'>
                  <p className='font-lexend text-xl font-medium'>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

// Source of truth for which articles this page lists, and in what order.
// These articles are SEO-consolidated onto other routes via next.config.mjs
// redirects, so `prefix` points at the canonical URL to avoid a 308 hop.
const articleLinks = [
  { slug: 'best-male-fertility-doctor-in-bangalore', prefix: 'solutions' },
  { slug: 'best-andrologist-in-bangalore', prefix: 'solutions' },
  { slug: 'best-fertility-doctors-in-bangalore', prefix: 'facilities' },
  { slug: 'cost-of-male-fertility-test-in-bangalore', prefix: 'solutions' },
  { slug: 'best-fertility-specialist-in-bangalore', prefix: 'facilities' },
  { slug: 'best-ivf-doctor-in-bangalore', prefix: 'solutions' },
];

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query ArticlesBySlug($slugs: [String!]) {
        articles(where: { slug_in: $slugs }) {
          icon {
            url
          }
          logoUrl
          slug
          id
          title
        }
      }
    `,
    variables: { slugs: articleLinks.map((a) => a.slug) },
  });

  const bySlug = new Map<string, CmsArticle>(
    (data.articles as CmsArticle[]).map((a) => [a.slug, a])
  );

  // Restore the order declared in articleLinks — Hygraph does not honour slug_in order.
  // Entries with no matching article are dropped so we never render an empty card.
  const articles = articleLinks.flatMap(({ slug, prefix }) => {
    const article = bySlug.get(slug);
    return article ? [{ ...article, href: `/${prefix}/${slug}` }] : [];
  });

  return {
    props: {
      articles,
    },
    revalidate: 180,
  };
};
