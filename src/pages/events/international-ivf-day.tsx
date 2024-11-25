import Head from 'next/head';
import dynamic from 'next/dynamic';
import ParagraphSection from 'sections/misc/international-ivf-day/ParagraphSection';
import CallToAction from 'sections/misc/international-ivf-day/CallToAction';
import Image from 'next/image';
import banner from 'assets/Landing-Page-Banners.jpg';

const Yoga = dynamic(() => import('sections/misc/international-ivf-day/Yoga'));
const BranchEvent = dynamic(() => import('sections/misc/international-ivf-day/BranchEvent'));

const Page = () => {
  const title = `Celebrate International IVF Day with Garbhagudi | GarbhaGudi IVF Centre`;
  const desc = `Discover the confluence of science and Indic wisdom to enhance fertility.`;
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={desc} />
      </Head>
      <div className='relative overflow-hidden bg-white py-16 dark:bg-gray-800'>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <h1 className='mt-4 block text-center font-heading text-2xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
              Celebrate International IVF Day with Garbhagudi
            </h1>
            <p className='text-center text-gray-600 dark:text-gray-400'>
              Discover the confluence of science and Indic wisdom to enhance fertility.
            </p>
            <Image
              height={100}
              width={100}
              className='mb-5 mt-10 w-full rounded-lg'
              src={banner}
              alt='Section Image'
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
    </div>
  );
};

export default Page;
