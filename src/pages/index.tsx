import Head from 'next/head';
import dynamic from 'next/dynamic';
import HomeComponent from 'sections/home';
import apolloClient from 'lib/apollo-graphcms';
import { filterExcludedVideos } from 'lib/excluded-videos';
import { gql } from '@apollo/client';
import BannerComponent from 'sections/home/bannerComponent';
import JsonLd from 'components/json-ld';
import { buildOrganization, buildWebSite, schemaGraph } from 'lib/schema';
const Faq = dynamic(() => import('sections/home/faq'), { ssr: false });
const DoctorList = dynamic(() => import('sections/home/doctorList'), { ssr: false });
const FloatPhone = dynamic(() => import('components/FloatPhone'), { ssr: false });

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

const Home = ({ data, testimonials }) => {
  // The two master entities for the whole site. Every other template references
  // these by @id rather than re-declaring them (guide section 4).
  const homeSchema = schemaGraph(
    buildWebSite(),
    buildOrganization({
      logoUrl:
        'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87q557nq07pls65nzuhg',
      description:
        'GarbhaGudi is one of the best IVF clinics in Bangalore, offering advanced fertility treatment and expertise to address the increasing problem of infertility.',
      telephone: '+919108910832',
      email: 'dreams@garbhagudi.com',
      sameAs: [
        'https://www.facebook.com/garbhagudiIVF/',
        'https://www.instagram.com/garbhagudiivfcentre/',
        'https://www.youtube.com/c/GarbhaGudiIVFCentre',
        'https://www.linkedin.com/company/garbagudi',
        'https://twitter.com/garbhagudiivf',
      ],
      availableLanguage: ['English', 'Kannada', 'Hindi', 'Malayalam', 'Telugu', 'Tamil'],
    })
  );

  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Best IVF Centre in Bangalore | IVF Hospital in Bangalore - GarbhaGudi</title>
        <meta
          name='title'
          content='Best IVF Centre in Bangalore | IVF Hospital in Bangalore - GarbhaGudi'
        />
        <meta
          name='description'
          content='GarbhaGudi is one of the best IVF Clinic in Bangalore with a high success rate for IVF / infertility treatment. Book a Consultation now with the best IVF hospital in Bangalore.'
        />
        <link rel='canonical' href='https://www.garbhagudi.com/' />
        {/* Ld+JSON Data */}

        <JsonLd id='home-jsonld' data={homeSchema} />
        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is one of the best IVF Centre in Bangalore with a high success rate for infertility treatment. Get excellent treatment at affordable cost for your fertility issues. Visit the best IVF hospital now!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
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
          content='GarbhaGudi is one of the best IVF Centre in Bangalore with a high success rate for infertility treatment. Get excellent treatment at affordable cost for your fertility issues. Visit the best IVF hospital now!'
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />

        {/* Google */}
        <meta
          name='google-site-verification'
          content='mzhcIRsJx6D4QkbJJp3Tepas8Lyv6sJLWmGb0DvKOrw'
        />
      </Head>
      <FloatPhone presentation={false} />
      <BannerComponent banners={data.banners} />
      <HomeComponent testimonialPassthrough={testimonials} blogsPassthrough={data.blogs} />
      <DoctorList doctors={data.doctors} />
      <Faq />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        doctors(orderBy: order_ASC) {
          order
          name
          qualification
          category
          slug
          image {
            url
          }
          imageUrl
          imageAlt
          medicalRegNo
          id
          designation
        }
        banners(orderBy: order_ASC) {
          title
          id
          url
          image {
            url
          }
          mobileImage {
            url
            width
            height
          }
          imageUrl
        }
        blogs(first: 3, orderBy: publishedOn_DESC) {
          id
          title
          publishedOn
          slug
          image {
            url
          }
        }
      }
    `,
  });

  const testimonialsData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const testimonials = filterExcludedVideos(await testimonialsData.json());

  return {
    props: {
      data,
      testimonials,
    },
    revalidate: 180,
  };
};
