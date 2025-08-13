import Link from 'next/link';

const Overview = () => {
  return (
    <div>
      <div>
        <h2 className='py-4 font-heading text-2xl font-bold text-gray-800 underline dark:text-gray-200'>
          Overview
        </h2>
        <p className='font-lexend text-gray-800 dark:text-gray-200'>
          Welcome to the{' '}
          <Link href='/' className='text-gg-500 underline'>
            GarbhaGudi IVF Centre
          </Link>{' '}
          Media Kit, a comprehensive resource designed to provide journalists, influencers, and
          stakeholders with detailed insights into our institution's mission, achievements, and
          offerings. This kit serves as a gateway to understanding the pioneering work we do in
          addressing infertility challenges and our commitment to providing world-class fertility
          solutions.
        </p>
        <h3 className='py-4 font-heading text-2xl font-bold text-gray-800 underline dark:text-gray-200'>
          Purpose
        </h3>
        <p className='font-lexend text-gray-800 dark:text-gray-200'>
          This media kit aims to provide a comprehensive understanding of GarbhaGudi IVF Centre,
          empowering media professionals to tell our story accurately and comprehensively. Whether
          you're a journalist seeking facts and statistics, an influencer exploring success stories,
          or a stakeholder interested in our core values, this media kit is your go-to resource for
          a deeper insight into GarbhaGudi's commitment to reproductive health.
        </p>
        <p className='pt-4 font-lexend text-gray-800 dark:text-gray-200'>
          We encourage you to explore each section, and we remain available for any additional
          information or media inquiries. Thank you for your interest in GarbhaGudi IVF Centre.
        </p>
      </div>
    </div>
  );
};

export default Overview;
