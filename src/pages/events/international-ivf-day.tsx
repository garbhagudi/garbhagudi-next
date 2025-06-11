import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Cta = dynamic(() => import('sections/gg-care/cta'), {
  ssr: false,
});
const CallToAction = dynamic(() => import('sections/misc/international-ivf-day/CallToAction'), {
  ssr: false,
});
const ParagraphSection = dynamic(
  () => import('sections/misc/international-ivf-day/ParagraphSection'),
  { ssr: false }
);
const Yoga = dynamic(() => import('sections/misc/international-ivf-day/Yoga'), { ssr: false });
const BranchEvent = dynamic(() => import('sections/misc/international-ivf-day/BranchEvent'), {
  ssr: false,
});

const Page = () => {
  const title = `Celebrate International IVF Day with GarbhaGudi - Expert Care`;
  const desc = `Celebrate International IVF Day with GarbhaGudi! Explore our special events & advancements in IVF. Join us to empower fertility journeys. Visit now!`;
  return (
    <div>
      <Head>
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1742985537/Yoga/Landing-Page-Banners_gd388z.webp'
          as='image'
        />
        <link rel='dns-prefetch' href='https://res.cloudinary.com/' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='og:title' content='Celebrate International IVF Day with GarbhaGudi' />
        <meta name='description' content={desc} />
        <meta
          name='og:description'
          content='Join GarbhaGudi IVF Centre in celebrating International IVF Day with a 21-day yoga challenge designed to enhance reproductive health and support your fertility journey.'
        />
      </Head>
      <div className='relative overflow-hidden bg-white py-16 dark:bg-gray-800'>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <h1 className='mt-4 block text-center font-heading text-2xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
              Celebrate International IVF Day with GarbhaGudi
            </h1>
            <p className='text-center text-gray-600 dark:text-gray-400'>
              Discover the confluence of science and Indic wisdom to enhance fertility.
            </p>
            <Image
              height={100}
              width={100}
              className='mb-5 mt-10 w-full rounded-lg'
              src={
                'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742985537/Yoga/Landing-Page-Banners_gd388z.webp'
              }
              alt='Section Image'
              priority
            />
            <div className='my-8'>
              <ParagraphSection />
              <Yoga />
              <BranchEvent />
              <CallToAction />
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default Page;
