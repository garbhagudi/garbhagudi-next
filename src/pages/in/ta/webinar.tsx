import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Noto_Sans_Tamil, Noto_Serif_Tamil, Inter } from 'next/font/google';
import { useAfterLoad } from 'lib/useAfterLoad';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import WebinarBanner from 'sections/hosur-home/WebinarBanner';
import HeroSection from 'sections/hosur-home/HeroSection';
import TrustStrip from 'sections/hosur-home/TrustStrip';
import WhySection from 'sections/hosur-home/WhySection';
import TreatmentsSection from 'sections/hosur-home/TreatmentsSection';
import ProcessSection from 'sections/hosur-home/ProcessSection';
import TestimonialsSection from 'sections/hosur-home/TestimonialsSection';
import FormSection from 'sections/hosur-home/FormSection';

// Fonts for the hosur-home sections, declared here (not in the shared layout) so
// only this page preloads them.
const notoSansTamil = Noto_Sans_Tamil({
  weight: ['400', '500', '600'],
  subsets: ['tamil'],
  display: 'swap',
  variable: '--font-noto-sans-tamil',
});

const notoSerifTamil = Noto_Serif_Tamil({
  weight: ['400', '600', '700'],
  subsets: ['tamil'],
  display: 'swap',
  variable: '--font-noto-serif-tamil',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const Faq = dynamic(() => import('sections/home/faq'), { ssr: false });
const DoctorList = dynamic(() => import('sections/home/doctorList'), { ssr: false });
// The in-flow bar is 68px tall on mobile (hidden from md up); reserving that space
// while it loads stops it pushing the banner down (layout shift).
const FloatPhone = dynamic(() => import('components/FloatPhone'), {
  ssr: false,
  loading: () => <div className='h-[68px] md:hidden' aria-hidden='true' />,
});

const TamilWebinar = ({ data }) => {
  const afterLoad = useAfterLoad();
  function addBreadcrumbJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.garbhagudi.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Webinar",
            "item": "https://www.garbhagudi.com/in/ta/webinar"
          }
        ]
      }`,
    };
  }

  return (
    <div
      className={`${notoSansTamil.variable} ${notoSerifTamil.variable} ${inter.variable} bg-white`}
    >
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>ஓசூரில் சிறந்த IVF மையம் | ஓசூரில் IVF மருத்துவமனை - கர்பகுடி</title>
        <meta
          name='title'
          content='ஓசூரில் சிறந்த IVF மையம் | ஓசூரில் IVF மருத்துவமனை - கர்பகுடி'
        />
        <meta
          name='description'
          content='கர்பகுடி (GarbhaGudi) என்பது பெங்களூருவில் உள்ள சிறந்த IVF மருத்துவமனைகளில் ஒன்றாகும். IVF / கருத்தரிக்கையின்மை சிகிச்சைகளில் மிக உயர்ந்த வெற்றிவிகிதத்துடன் சேவையை வழங்குகிறது. ஓசூரில் உள்ள சிறந்த கர்பகுடி IVF மருத்துவமனையில் இப்போது ஆலோசனையை பதிவு செய்யுங்கள்.'
        />
        <link rel='canonical' href='https://www.garbhagudi.com/in/ta/webinar' />
        {/* Ld+JSON Data */}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbJsonLd()}
          key='breadcrumb-jsonld'
        />
        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='ஓசூரில் சிறந்த IVF மையம் | ஓசூரில் IVF மருத்துவமனை - கர்பகுடி'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://www.garbhagudi.com/in/ta/webinar' />
        <meta
          property='og:description'
          content='கர்பகுடி (GarbhaGudi) என்பது பெங்களூருவில் உள்ள சிறந்த IVF மருத்துவமனைகளில் ஒன்றாகும். IVF / கருத்தரிக்கையின்மை சிகிச்சைகளில் மிக உயர்ந்த வெற்றிவிகிதத்துடன் சேவையை வழங்குகிறது. ஓசூரில் உள்ள சிறந்த கர்பகுடி IVF மருத்துவமனையில் இப்போது ஆலோசனையை பதிவு செய்யுங்கள்.'
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
          content='ஓசூரில் சிறந்த IVF மையம் | ஓசூரில் IVF மருத்துவமனை - கர்பகுடி'
        />
        <meta
          name='twitter:description'
          content='கர்பகுடி (GarbhaGudi) என்பது பெங்களூருவில் உள்ள சிறந்த IVF மருத்துவமனைகளில் ஒன்றாகும். IVF / கருத்தரிக்கையின்மை சிகிச்சைகளில் மிக உயர்ந்த வெற்றிவிகிதத்துடன் சேவையை வழங்குகிறது. ஓசூரில் உள்ள சிறந்த கர்பகுடி IVF மருத்துவமனையில் இப்போது ஆலோசனையை பதிவு செய்யுங்கள்.'
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />
      </Head>
      <FloatPhone presentation={false} />
      <WebinarBanner banners={data.banners} />
      {/* Tamil body font scoped to these sections so DoctorList/Faq keep the site font */}
      <div className='font-[family-name:var(--font-noto-sans-tamil)]'>
        <HeroSection />
        <TrustStrip />
        <WhySection />
        <TreatmentsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FormSection />
      </div>
      {afterLoad && <DoctorList doctors={data.doctors} />}
      {afterLoad && <Faq />}
    </div>
  );
};

/* Webinar LP keeps the global nav/footer. The banner already has the webinar form,
 * so the side "Request Call Back" tab is dropped. */
TamilWebinar.hideRequestCallBack = true;

export default TamilWebinar;

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
            width
            height
          }
          mobileImage {
            url
            width
            height
          }
          imageUrl
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
    revalidate: 180,
  };
};
