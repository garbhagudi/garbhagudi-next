import Banner from 'sections/location/banner';
import TreatmentOptions from 'sections/location/treatments';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import('sections/location/mapSection'), { ssr: false });
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Faq = dynamic(() => import('sections/location/faq'), { ssr: false });
const VirtualTour = dynamic(() => import('sections/location/virtualTour'), { ssr: false });
const AccordionSection = dynamic(() => import('sections/accordianSection/accordionSection'), {
  ssr: false,
});
const ExtraSlot = dynamic(() => import('sections/fertility-experts/ExtraSlot'), {
  ssr: false,
});

const Branch = ({ branch, accordionSections }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  function addDocJsonLd() {
    if (!branch?.docJsonLd) return { __html: '' };
    const jsonLD =
      typeof branch.docJsonLd === 'string' ? JSON.parse(branch.docJsonLd) : branch.docJsonLd;
    return {
      __html: JSON.stringify(jsonLD, null, 2),
    };
  }

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
              "name": "Branches",
              "item": "https://www.garbhagudi.com/locations/"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "${branch?.title}",
              "item": "https://www.garbhagudi.com/locations/${branch?.slug}"
            }
          ]
        }`,
    };
  }

  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1770374577/Pregnant_Lady.jpg_zvlxr3.jpg'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{branch?.metaTitle}</title>
        <meta name='title' content={branch?.metaTitle} />
        <meta name='description' content={branch?.metaDescription} />

        <script
          type='application/ld+json'
          data-next-head=''
          dangerouslySetInnerHTML={addDocJsonLd()}
          key='org-jsonld'
        />
        <script
          id='breadcrumbs-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
        />
        {/* Open Graph / Facebook */}

        <meta property='og:title' content={branch?.metaTitle} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={branch?.metaDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={branch?.branchPicture?.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={branch?.metaTitle} />
        <meta name='twitter:description' content={branch?.metaDescription} />
        <meta name='twitter:image' content={branch?.branchPicture?.url} />
      </Head>
      <Banner branchTitle={branch?.title} />
      <TreatmentOptions branch={branch?.title} image={branch?.nabh?.url || ''} />
      <MapSection
        maplink={branch?.mapLink}
        address={branch?.address}
        description={branch?.about?.raw?.children}
        doctors={branch?.doctors}
        title={branch?.title}
        areasDescription={branch?.areasDescription?.raw?.children}
        areasServed={branch?.areasServed}
      />
      {branch?.slug == 'marathahalli' && (
        <ExtraSlot
          effectiveDate='Effective From 2nd March 2026. You may book your appointment at your convenience'
          timings={[
            { doctorName: 'Dr. P. V. Vasavi Devi', timing: '9AM to 12PM' },
            { doctorName: 'Dr. Vandana Ramanathan', timing: '12PM to 7PM' },
          ]}
        />
      )}
      {branch?.slug == 'kalyan-nagar' && (
        <ExtraSlot
          effectiveDate='Effective From 2nd March 2026. You may book your appointment at your convenience'
          timings={[
            { doctorName: 'Dr. Aparna N', timing: '8:00 am - 4:00 pm' },
            { doctorName: 'Dr. P. V. Vasavi Devi', timing: '4:00 pm - 7:00 pm' },
          ]}
        />
      )}
      <Cta />
      <Faq data={branch?.faq || []} />
      <AccordionSection sections={accordionSections} />
      <VirtualTour
        branch={branch?.title}
        link1={branch?.virtualTourLink1}
        link2={branch?.virtualTourLink2}
        link3={branch?.virtualTourLink3}
      />
    </div>
  );
};

export default Branch;

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        branch(where: { slug: $slug }) {
          branchPicture {
            url
          }
          title
          address
          about {
            raw
          }
          nabh {
            url
          }
          slug
          docJsonLd
          metaTitle
          metaDescription
          id
          mapLink
          branchPicture {
            url
          }
          virtualTourLink1
          virtualTourLink2
          virtualTourLink3
          areasDescription {
            raw
          }
          areasServed {
            raw
          }
          doctors(orderBy: order_ASC) {
            id
            name
            slug
            imageAlt
            designation
            qualification
            image {
              url
            }
            imageUrl
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
        accordionSections(orderBy: createdAt_ASC) {
          heading
          defaultOpen
          links {
            label
            url
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      branch: data.branch,
      accordionSections: data?.accordionSections || [],
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      {
        branches {
          slug
          title
        }
      }
    `,
  });

  return {
    paths: data.branches.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
