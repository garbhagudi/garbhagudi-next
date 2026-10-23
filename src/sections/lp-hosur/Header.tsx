import Image from 'next/image';

/* tamil.garbhagudi.com's header (components/header/header.tsx in garbhagudi-next-tamil)
 * with every link stripped for this ads LP: the logo isn't clickable and there's no menu,
 * theme toggle or language switch. The only action left scrolls to the on-page form. */
export default function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white bg-opacity-70 shadow-xl backdrop-blur-2xl'>
      <nav className='px-2 py-2 lg:px-3'>
        <div className='mx-auto flex max-w-screen-xl items-center justify-between'>
          <div className='hidden items-center px-3 py-1 xl:flex'>
            <Image
              src='https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmt2illy438ya06phso2ktvyr'
              width={400}
              height={84}
              quality={85}
              className='h-full w-44 xl:w-56'
              alt='GarbhaGudi IVF Centre'
              priority
            />
          </div>
          <div className='flex items-center xl:hidden'>
            <Image
              src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6oz08vq08pk9nuarsth'
              width={50}
              height={50}
              quality={85}
              className='h-full w-16'
              alt='GarbhaGudi IVF Centre'
              priority
            />
          </div>
          <a
            href='#form'
            className='cursor-pointer rounded-lg bg-gg-500 px-3 py-2 font-lexend text-xs text-gray-200 transition-all duration-200 ease-in hover:bg-brandPink3 sm:text-sm'
          >
            முன்பதிவு நியமனம்
          </a>
        </div>
      </nav>
    </div>
  );
}
