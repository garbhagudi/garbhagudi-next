import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Form from 'sections/LandingPages/Performant/form';
import { Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
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
          <span className='font-lexend font-bold line-through'>
            ₹{formatNumberWithCommas(originalPrice)}
          </span>{' '}
          IVF Package
        </div>
      </div>
      <div className='mt-5 flex items-center font-lexend text-3xl text-gg-500 dark:text-gg-400'>
        Now at &nbsp;
        <span className='font-lexend font-bold'>₹{formatNumberWithCommas(slashedPrice)}</span>
        <div className='ml-2 text-sm text-green-600 dark:text-green-500'>
          ({calculateDiscountPercentage()}% off)
        </div>
      </div>
      <div className='mt-5 text-left'>
        What’s included*:
        <ul className='list-inside list-disc'>
          <li>An expert fertility specialist consults and scans during stimulation.</li>
          <li>Ovarian stimulation injections;</li>
          <li>
            Laboratory investigations (Twice Estradiol Tests, Luteinizing Hormone Tests, and once
            Progesterone Test);
          </li>
          <li>Egg Retrieval (OPU) with OT consumables;</li>
          <li>Intracytoplasmic Sperm Injection (ICSI) procedure;</li>
          <li>Frozen Embryo Transfer (FET) and Operation Theatre (OT) consumables;</li>
          <li>Blastocyst Culture;</li>
          <li>Embryo Freezing for 3 Months;</li>
          <li>Fresh Embryo Transfer (ET) / Frozen Embryo Transfer (FET);</li>
          <li>
            Complementary holistic therapy, including counseling, meditation, pranayama, breathing
            exercises, and yoga asanas, is thoughtfully designed to support eligible couples.
          </li>
          <li>No hidden costs.</li>
        </ul>
        <div className='mt-8 text-xs'>
          *Particulars included are applicable to a single self-cycle only. *Terms and conditions
          apply.
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <div className='mx-auto max-w-7xl'>
          <div className='py-12 text-center font-lexend text-4xl font-bold text-gg-600 lg:py-24 lg:text-5xl'>
            <h1 className='mx-auto max-w-lg rounded-md py-2 dark:bg-gray-200 dark:bg-opacity-80'>
              Paripoorna
            </h1>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col items-start justify-center px-3'>
              <div className='py-8 font-lexend text-2xl font-bold text-gg-500 dark:text-gg-400'>
                &quot;Big Savings, Get Flat{' '}
                <span className='text-purple-900 dark:text-purple-200'>₹1,11,111* OFF</span> on your
                IVF Treatments&quot;
              </div>

              <div className='font-lexend text-lg text-gray-800 dark:text-gray-200'>
                Our intention is to serve the maximum number of couples who are missing out on
                experiencing the joy of parenthood. We understand that many couples cannot afford
                IVF. Keeping this in mind, GarbhaGudi IVF Centre, in association with GarbhaGnan
                Foundation, has initiated this program called{' '}
                <span className='font-bold underline'>PARIPOORNA. </span>
                <PriceSlash originalPrice={291111} slashedPrice={180000} />
                This November and December 2025, celebrate the season of parenthood with{' '}
                <span className='font-bold'>PARIPOORNA. </span> GarbhaGudi IVF Centre is offering a
                flat <span className='font-bold underline'>₹1,11,111/-</span> off on your IVF cycle
                cost. Visit the nearest GarbhaGudi IVF Centre to avail the opportunity and take the
                first step in your journey towards completeness.
                <div className='mt-10 flex flex-col items-start space-x-0 space-y-3 md:items-center lg:flex-row lg:space-x-5 lg:space-y-0'>
                  <div
                    className='min-w-fit rounded-xl bg-purple-700 px-3 py-2 font-lexend text-white dark:bg-purple-800'
                    onClick={open}
                  >
                    <div>Book an Appointment</div>
                  </div>
                  <div className='min-w-fit cursor-pointer rounded-xl border border-gg-500 px-3 py-2 font-lexend text-gg-500 hover:border-gg-600 hover:bg-gg-500 hover:text-white dark:hover:bg-gg-600'>
                    <Link href='tel:+919108910832' className='flex items-center gap-2'>
                      <span>Call us: </span>
                      <span>9108 9108 32</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-5 lg:ml-10'>
              <Image
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp'
                alt='pp logo'
                width={500}
                height={500}
                className='mx-auto aspect-square scale-90 lg:scale-105'
                priority={true}
              />
              <div className='relative aspect-[9/16] w-full max-w-[400px] overflow-hidden rounded-lg'>
                <LiteYouTubeEmbed
                  id='TH68dBLfq2I'
                  title='YouTube Shorts | Example'
                  poster='maxresdefault'
                  webp={true}
                  wrapperClass='lty-playbtn yt-lite'
                />
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
          .lty-playbtn {
            --aspect-ratio: 200% !important;
          }
        `}
        </style>
      </div>
      <Dialog open={isOpen} as='div' className='relative z-10 focus:outline-none' onClose={close}>
        {/* Faded background */}
        <div
          className='fixed inset-0 bg-black/80 transition-opacity duration-300 ease-out'
          onClick={close}
        ></div>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center px-3 pt-8'>
            <DialogPanel
              transition
              className='data-[closed]:transform-[scale(95%)] max-w-md rounded-xl bg-gray-800 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)] data-[closed]:opacity-0'
            >
              <div className='px-0'>
                <div className='flex justify-center'>
                  <div className='mx-5 mt-5 w-fit self-center rounded-md bg-brandPink px-4 py-1 text-center text-[13px] font-semibold text-white shadow-sm'>
                    Get Flat ₹1,11,111* OFF on your IVF Treatments
                  </div>
                </div>
                <Form />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Home;
