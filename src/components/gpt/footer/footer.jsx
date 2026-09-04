import Link from 'next/link';
import Logo from 'components/gpt/logo';
import { WidgetAbout, WidgetInfo } from './widget';
import { about, information } from './footer.data';

export default function Footer() {
  return (
    <div className='bg-white'>
      <footer className='pb-[50px] pt-[50px]'>
        <div className='mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-4 sm:px-6 md:grid-cols-4 lg:flex lg:items-start lg:justify-center lg:gap-24 lg:px-8'>
          {about.map(({ id, title, items }) => (
            <WidgetAbout key={id} title={title} items={items} />
          ))}
          {information.map(({ id, title, items }) => (
            <WidgetInfo key={id} title={title} items={items} />
          ))}

          <div className='col-span-2 flex flex-col items-center gap-4 text-center md:col-span-4 lg:order-first lg:items-start lg:text-left'>
            <Logo />
            <div className='flex items-center gap-[10px] font-dmSans [&_a]:text-[#0F2137]'>
              <Link href='/terms-and-conditions'>Terms of use</Link>
              <span>|</span>
              <Link href='/privacy-policy'>Privacy</Link>
            </div>
            <p className='font-dmSans text-[14px] text-[#0F2137]'>
              &copy; GarbhaGudi IVF Center - {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
