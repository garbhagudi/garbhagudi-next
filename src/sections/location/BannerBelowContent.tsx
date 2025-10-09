import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigations from './Navigations';

const BannerBelowContent = ({ branchTitle }) => {
  const path = usePathname();
  return (
    <div>
      <div className='h-full w-full'>
        <Image
          src={bannerImage[branchTitle]}
          alt='GarbhaGudi IVF Centre - Bangalore'
          className='mx-auto h-full w-full'
          width={1920}
          height={1080}
          priority
        />
      </div>
      <Navigations />
      <div className='flex flex-col items-center pt-9'>
        <div className='mx-auto flex w-full flex-col items-center px-3 text-center text-base text-gray-800 dark:text-gray-200 md:max-w-lg md:text-left lg:max-w-3xl'>
          <span className='font-heading text-3xl font-bold leading-tight lg:text-4xl'>
            Welcome to GarbhaGudi{' '}
          </span>
          <h1 className='font-heading text-3xl font-bold leading-tight lg:text-4xl'>
            {' '}
            IVF Centre
            {branchTitle && <span className='text-brandPink'> in {branchTitle}</span>}
          </h1>
          <h3 className='mt-4 text-center font-content text-base font-semibold leading-7 text-gray-800 dark:text-gray-200 md:text-lg'>
            GarbhaGudi is the best IVF clinic in {branchTitle}, offering advanced fertility
            treatments to address the increasing problem of infertility.
          </h3>
        </div>
        <div className='text-center lg:px-3 lg:text-left'>
          <button className='mt-4 rounded-lg bg-gg-500 px-4 py-2 font-content font-semibold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-400'>
            <Link href={`/contact/enquiry?pageVisit=${path}`}>Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerBelowContent;
const bannerImage = {
  Davanagere: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cme8hljjb14v107pi7joizuya',
  Hosur: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cmes3oxn80ooz07oaof8li5ik',
};
