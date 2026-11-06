import Image from 'next/image';
import Link from 'next/link';
import { MdPhone } from 'react-icons/md';

const LOGO_URL =
  'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms76155yh1on07pnqpdnqyzk';

export default function Header() {
  return (
    <header className='sticky top-0 z-20 border-b-2 bg-white shadow-xl'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between border-gray-100 py-3 sm:py-5 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='https://wa.me/919108910832?text=Hi'>
              <span className='sr-only'>logo</span>
              <Image
                quality={85}
                className='aspect-[500/103] h-auto w-36 sm:h-14 sm:w-auto md:h-auto md:w-48 lg:w-64'
                src={LOGO_URL}
                alt='logo'
                width={500}
                height={103}
                // ~120KB SVG: fetch it gzipped straight from Hygraph (the optimizer
                // passes SVGs through untouched), and without `priority`'s
                // high-priority preload competing with the banner LCP.
                unoptimized
                loading='eager'
              />
            </Link>
          </div>

          <div className='flex items-center justify-end md:flex-1 lg:w-0'>
            <a
              href='tel:+919108910832'
              className='flex w-fit items-center gap-1 rounded-md bg-gray-300 pr-2 shadow-md md:gap-2'
            >
              <div className='flex h-6 w-6 items-center justify-center rounded-md bg-brandPink text-white md:h-10 md:w-10'>
                <MdPhone size='1.2em' />
              </div>
              <p className='text-sm font-semibold text-brandPink md:text-lg'>+91 9108 9108 32</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
