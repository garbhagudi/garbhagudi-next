import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import GuideContent from 'sections/LandingPages/yoga/guide/GuideContent';

const YogaGuidePage = () => {
  return (
    <div>
      <Head>
        <title>Yoga Guide — Asanas, Pranayama &amp; Nutrition | GarbhaGudi IVF Centre</title>
        <meta
          name='description'
          content='A comprehensive yoga guide covering therapeutic asanas, pranayama techniques, and nutritional essentials for fertility, hormonal balance, and whole-body wellness.'
        />
        <meta
          name='title'
          content='Yoga Guide Asanas, Pranayama &amp; Nutrition | GarbhaGudi IVF Centre'
        />
        <meta
          property='og:title'
          content='Yoga Guide Asanas, Pranayama &amp; Nutrition | GarbhaGudi IVF Centre'
        />
        <meta
          property='og:description'
          content='A comprehensive yoga guide covering therapeutic asanas, pranayama techniques, and nutritional essentials for fertility, hormonal balance, and whole-body wellness.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1742984693/Yoga/Benefits-You-Will-Gain_Img01_oyo60c.webp'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.garbhagudi.com/yoga/guide' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Yoga Guide — Asanas, Pranayama &amp; Nutrition | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='A comprehensive yoga guide covering therapeutic asanas, pranayama techniques, and nutritional essentials for fertility, hormonal balance, and whole-body wellness.'
        />
      </Head>
      <BreadCrumbs text1='Yoga' link1='/yoga' text2='Yoga Guide' link2='' />
      <GuideContent />
    </div>
  );
};

export default YogaGuidePage;
