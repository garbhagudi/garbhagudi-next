import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BlogFooter = () => {
  const path = usePathname();

  return (
    <div className='relative bg-transparent py-16'>
      <div className='absolute inset-x-0 top-0 hidden h-1/2 lg:block' aria-hidden='true' />
      <div className='mx-auto max-w-7xl bg-transparent lg:bg-transparent lg:px-8'>
        <div className='lg:grid lg:grid-cols-12'>
          <div className='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
            <div className='absolute inset-x-0 h-1/2 lg:hidden' aria-hidden='true' />
            <div className='mx-auto hidden max-w-md px-8 sm:max-w-max lg:block lg:max-w-none lg:p-0'>
              <div className='overflow-hidden rounded-3xl border bg-white dark:border-gray-600 dark:bg-gray-800'>
                <Image
                  className='object-fit h-64 rounded-3xl object-center shadow-2xl dark:fill-white dark:brightness-0 dark:grayscale dark:invert lg:h-96'
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg'
                  alt='gg logo'
                  width={500}
                  height={500}
                  loading='lazy'
                />
              </div>
            </div>
          </div>

          <div className='relative rounded-3xl bg-brandPurpleDark dark:bg-gray-700 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center'>
            <div
              className='absolute inset-0 hidden overflow-hidden rounded-3xl lg:block'
              aria-hidden='true'
            >
              <svg
                className='absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-700'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
              </svg>
              <svg
                className='absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-100'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)' />
              </svg>
            </div>
            <div className='relative mx-auto max-w-md space-y-6 px-4 py-12 sm:max-w-3xl sm:px-6 sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
              <h2 className='font-heading text-3xl font-extrabold text-gray-100' id='join-heading'>
                About Us
              </h2>
              <p className='font-qs text-lg text-gray-100'>
                GarbhaGudi is a chain of New-Generation Infertility Treatment Hospitals equipped
                with state-of- art-infrastructure &amp; cutting-edge IVF Technology to address
                infertility issues &amp; their emotional &amp; mental effects on couples. We have a
                team of qualified &amp; experienced doctors; their in-depth knowledge &amp;
                expertise leaves no stone unturned to solve all your infertility issues. The
                Supportive &amp; caring staff is always by your side to motivate &amp; guide you
                throughout the journey. GarbhaGudi IVF, the best fertility treatment hospital in
                Bangalore, provides emotional support to couples facing infertility issues and
                sexual problems
              </p>
              <Link
                className='text-brandDark hover:bg-brandDark block w-full rounded-md bg-white px-5 py-3 text-center font-content text-base font-semibold hover:text-black sm:inline-block sm:w-auto'
                href={`/contact/enquiry?pageVisit=${path}`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;
