import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const LiteYouTubeEmbed = dynamic(() => import('react-lite-youtube-embed'), { ssr: false });
interface PriceSlashProps {
  originalPrice: number;
  slashedPrice: number;
}

const PriceSlash: React.FC<PriceSlashProps> = ({ originalPrice, slashedPrice }) => {
  const calculateDiscountPercentage = () => {
    const discount = ((originalPrice - slashedPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  const formatNumberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className='flex flex-col items-start py-8'>
      <div className='flex items-center space-x-4'>
        <div className='font-lexend text-3xl text-gray-600 dark:text-gray-300'>
          <span className='font-heading font-bold line-through'>
            ₹{formatNumberWithCommas(originalPrice)}
          </span>{' '}
          IVF Package
        </div>
      </div>
      <div className='mt-5 flex items-center font-lexend text-3xl text-gg-500 dark:text-gg-400'>
        Now at &nbsp;
        <span className='font-heading font-bold'>₹{formatNumberWithCommas(slashedPrice)}</span>
        <div className='ml-2 text-sm text-green-600 dark:text-green-500'>
          ({calculateDiscountPercentage()}% off)
        </div>
      </div>
      <div className='mt-5 text-sm'>
        Includes*:
        <ul className='list-inside list-disc'>
          <li>Consultations and scans during stimulation</li>
          <li>Ovarian Stimulation Injections</li>
          <li>Limited Lab investigations during stimulation</li>
          <li>OT Consumables ({'<'} ₹ 5000)</li>
          <li>Pre & Post Op Medications</li>
          <li>Egg Retrieval (OPU)</li>
          <li>ICSI</li>
          <li>Embryo Blastocyst</li>
          <li>Embryo Freezing (3 - Months)</li>
          <li>ET / FET Procedure </li>
        </ul>
        <div className='mt-8 text-xs'>
          * Included particulars are applicable for 1 cycle only. Other terms and conditions apply
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl'>
        <div className='py-12 text-center font-heading text-4xl font-bold text-gg-600 lg:py-24 lg:text-5xl'>
          <h1 className='mx-auto max-w-lg rounded-md py-2 dark:bg-gray-200 dark:bg-opacity-80'>
            Paripoorna 2024
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col items-start justify-center px-3'>
            <div className='py-8 font-heading text-2xl font-bold text-gg-500 dark:text-gg-400'>
              &quot;Get a massive 1,00,000/-* off on your IVF Treatments&quot;
              <div className='block text-right text-xs text-gray-800 dark:text-gray-200'>
                *Terms and conditions apply
              </div>
            </div>

            <div className='font-lexend text-lg text-gray-800 dark:text-gray-200'>
              Our intention is to serve maximum number of couples who are missing out on
              experiencing the joy of parenthood. We know that many couples cannot afford IVF.
              Keeping this in mind, GarbhaGudi IVF Centre in association with GarbhaGnan Foundation,
              has initiated this program called{' '}
              <span className='font-bold underline'>PARIPOORNA-2024. </span>
              <PriceSlash originalPrice={260000} slashedPrice={160000} />
              This December, celebrate the season of parenthood, with Paripoorna. GarbhaGudi IVF
              Centre is offering a flat <span className='font-bold underline'>₹1,00,000/-</span> off
              on your IVF cycle cost. Visit the GarbhaGudi branch nearest to you to avail the offer
              and take the first steps in your journey towards completeness.
              <div className='mt-10 flex flex-col items-start justify-between space-y-3 md:items-center lg:flex-row lg:space-y-0'>
                <div className='rounded-xl bg-gg-500 px-3 py-2 font-lexend text-white dark:bg-gg-600'>
                  <WatchVideo />
                </div>
                <div className='rounded-xl bg-purple-700 px-3 py-2 font-lexend text-white dark:bg-purple-800'>
                  <Link href='/contact/enquiry'>
                    <div>Book an Appointment</div>
                  </Link>
                </div>
                <div className='rounded-xl bg-yellow-500 px-3 py-2 font-lexend text-white dark:bg-yellow-600'>
                  <Link href='/features/paripoorna-2024.tsx/#how-to'>
                    <div>Know More</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center lg:ml-10'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp'
              alt='pp logo'
              width={500}
              height={500}
              className='mx-auto aspect-square scale-90 lg:scale-105'
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const WatchVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type='button' onClick={openModal}>
          Watch Video
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <TransitionChild
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <DialogPanel className='w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <DialogTitle
                    as='h3'
                    className='text-center font-heading text-2xl font-bold leading-6 text-gray-900'
                  >
                    Paripoorna Launch
                  </DialogTitle>

                  <div>
                    <div className='mt-8 overflow-hidden rounded-xl border-2 border-brandPink'>
                      <LiteYouTubeEmbed
                        id={'NyQyAcUrrOY'}
                        title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                        poster='maxresdefault'
                        webp={true}
                      />
                    </div>
                  </div>

                  <div className='mt-4 text-center'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-lexend text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
