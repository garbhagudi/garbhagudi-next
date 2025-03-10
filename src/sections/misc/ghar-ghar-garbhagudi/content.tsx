import Link from 'next/link';
import Image from 'next/image';

export const ContentOne = () => {
  return (
    <div>
      <section className='my-10 flex flex-col items-center md:flex-row'>
        <div className='md:w-1/2'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1694509085/Misc/GGG_Logo_eng_thb8cv.webp'
            alt='Ghar Ghar GarbhaGudi Logo'
            className='h-auto w-full rounded-lg bg-brandPink p-3'
            width={500}
            height={500}
          />
        </div>
        <div className='mt-6 flex flex-col items-start justify-center text-gray-800 dark:text-gray-200 md:ml-6 md:mt-0 md:w-1/2'>
          <h2 className='mb-3 font-lexend text-3xl font-semibold'>Overview</h2>
          <div className='flex flex-col items-center justify-start space-y-3 font-content text-lg'>
            <p>
              Infertility is not a curse; modern medical treatments can fulfill every woman's dream
              of motherhood. To make this dream a reality, Garbhagudi IVF Centre offers cutting-edge
              IVF and IUI services, led by a team of skilled doctors dedicated to bringing happiness
              to families.
            </p>
            <p>
              Our mission is to eradicate infertility. We are partnering with{' '}
              <Link
                href={'https://garbhagnan.org'}
                className='font-semibold underline hover:text-brandPink'
              >
                Garbhagnan Foundation
              </Link>{' '}
              and{' '}
              <Link
                href={'https://suvarna-deepa-development-trust.business.site/'}
                className='font-semibold underline hover:text-brandPink'
              >
                Suvarna Deepa Developmental Trust for the Visually Impaired and Physically
                Challenged
              </Link>{' '}
              to raise awareness about the availability of modern treatments. Our aim is to ensure
              that no family in the state suffers due to childlessness. To achieve this, we are
              offering exclusive promotions throughout the month of September to assist childless
              couples in their journey to parenthood.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ContentTwo = () => {
  return (
    <div>
      <section className='my-10 flex flex-col items-center text-gray-800 dark:text-gray-200 md:flex-row'>
        <div className='mt-6 flex flex-col items-start justify-center px-2 py-6 font-content md:mr-6 md:mt-0 md:w-1/2'>
          <h2 className='mb-3 font-lexend text-3xl font-semibold'>Here's how you can Help!</h2>
          <ul className='list-outside list-disc space-y-2 text-lg'>
            <li>
              If you're aware of any childless couples in your neighborhood, family, or among your
              acquaintances who may benefit from the services of Garbhagudi IVF Centre, please let
              them know about us.
            </li>
            <li>
              You can become a part of our{' '}
              <span className='font-semibold'>
                'Ghar Ghar GarbhaGudi - Infertility Free Karnataka'
              </span>{' '}
              campaign by registering at our location and even choose to serve as a volunteer to
              help childless couples in your village.
            </li>
            <li>
              We encourage you to capture photos and videos of our campaign activities and share
              them on social media using hashtags #GharGharGarbhagudi and #GarbhagudiIVFCentre.
              Additionally, send your content to us via WhatsApp at{' '}
              <a
                href='https://wa.me/+919108910832'
                className='font-semibold hover:text-brandPink hover:underline'
              >
                +91 9108 9108 32
              </a>
              , and you may receive special rewards for selected posts.
            </li>
            <li>
              If you have information about childless couples, their contact numbers, or any
              questions they may have, kindly jot it down on the enclosed card along with this
              pamphlet. Send the card to Garbhagudi IVF Centre at the following address:{' '}
              <span className='font-semibold'>
                41, 2nd Floor, Shubhashree Pride, South End Road, next to Bharathi Nursing Home,
                Tata Silk Farm, Basavanagudi, Bangalore - 560004.
              </span>
            </li>
            <li>We appreciate your support in mailing the card to the address mentioned above.</li>
          </ul>
          <div className='mt-2 text-lg'>
            Thank you for helping us spread the message of hope and parenthood with Garbhagudi IVF
            Centre's 'Ghar Ghar Garbhagudi' campaign!
          </div>
        </div>
        <div className='flex items-center justify-center md:w-1/2'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1694513639/Misc/ss-min_mt1fic.webp'
            alt='How can you Help?'
            className='h-auto w-full rounded-lg object-cover object-center'
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
};
