import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import FAQs from 'components/FAQs';
const Cta = dynamic(() => import('sections/gg-care/cta'), {
  ssr: false,
  loading: () => null,
});

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        valueAddedService(where: { slug: $slug }) {
          title
          slug
          metaDescription
          image {
            url
          }
          imageUrl
          content {
            raw
            text
          }
          faq {
            id
            question
            answer {
              raw
              text
            }
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  if (data?.error || !data?.valueAddedService) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      valueAddedService: data.valueAddedService,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        valueAddedServices {
          slug
        }
      }
    `,
  });
  return {
    paths: data.valueAddedServices.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

const Vas = ({ valueAddedService }) => {
  const title = `${valueAddedService?.title} | GarbhaGudi IVF Centre}`;
  const desc = `${valueAddedService?.content.text.slice(0, 169)}`;
  const image = `${valueAddedService?.image?.url}`;
  function addBreadcrumbsJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": "1",
              "name": "HOME",
              "item": "https://www.garbhagudi.com/"
            },
            {
              "@type": "ListItem",
              "position": "2",
              "name": "Features",
              "item": "https://www.garbhagudi.com/features"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "${valueAddedService?.title}",
              "item": "https://www.garbhagudi.com/features/${valueAddedService?.slug}"
            }
          ]
        }`,
    };
  }
  return (
    <main className='bg-white py-16 dark:bg-gray-800'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={valueAddedService?.metaDescription} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={desc} />
        <meta property='og:image' content={image} />
        <meta property='og:type' content='article' />
        <meta name='twitter:card' content='summary_large_image' />

        {/* Ld+JSON Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
          key='breadcrumbs-jsonld'
        />
      </Head>
      <BreadCrumbs
        link1='/features'
        text1='Features'
        link2={valueAddedService?.slug}
        text2={valueAddedService.title}
      />

      <article className='mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8'>
        <h1 className='mt-4 block text-center font-heading text-2xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
          {valueAddedService?.title}
        </h1>
        <Image
          className='mb-5 mt-10 w-full rounded-lg'
          src={valueAddedService?.image?.url}
          alt={valueAddedService?.title}
          width={1200}
          height={500}
          priority={true}
        />
        <section className='text-justify text-gray-800 dark:text-gray-200'>
          <RichText
            content={valueAddedService?.content.raw.children}
            renderers={{
              p: ({ children }) => <p className='text-justify'>{children}</p>,
              a: ({ children, href }) => (
                <a href={href} className='text-gg-500 underline'>
                  {children}
                </a>
              ),
              iframe: ({ url, width }) => (
                <iframe
                  src={url || ''}
                  width={width || '100%'}
                  height={720}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='w-full rounded-md'
                />
              ),
            }}
          />
        </section>
        {valueAddedService?.faq?.length > 0 && (
          <div className='mt-6'>
            <FAQs data={valueAddedService?.faq} activeIndex={valueAddedService?.faq[0]?.id} />
          </div>
        )}
      </article>
      <Cta />
    </main>
  );
};
export default Vas;
