import Link from 'next/link';

import LogoSvg from 'sections/campaigns-bangalore-en/LogoSvg';

/*
 * Tailwind port of dash-ivf-next's theme-ui footer. theme-ui's responsive
 * arrays use that theme's breakpoints (480/640/768/1024/1200/1367px), hence
 * the min-[…] variants alongside sm/md/lg.
 */
const about = [
  { url: 'tel:+919108910832', label: 'Give us a Call' },
  { url: 'mailto:dreams@garbhagudi.com', label: 'Write us an Email' },
];
const information = [
  { to: '/legal/refund-policy', label: 'Refund Policy ' },
  { to: '/legal/privacy-policy', label: 'Privacy Policy' },
  { to: '/legal/terms-and-conditions', label: 'Terms & Conditions' },
];

const widgetHeading = 'text-[18px] font-medium leading-[1.68] tracking-[-0.5px] text-[#0F2137]';
const widgetList = 'mt-[28px] list-none p-0 [&_a]:text-[#02073E] [&_a]:no-underline';

export default function Footer() {
  return (
    <div className='bg-white'>
      <footer className='py-[50px]'>
        <div className='mx-auto w-full px-[15px] min-[480px]:px-[30px] lg:max-w-[970px] min-[1200px]:max-w-[1140px] min-[1367px]:max-w-[1260px]'>
          <div className='grid grid-cols-2 gap-[30px] sm:gap-[50px] md:grid-cols-4 md:gap-x-[50px] md:gap-y-[20px] lg:gap-[17px] min-[1200px]:gap-[50px]'>
            <div className='items-center [grid-column:1/3] [grid-row:3/4] sm:[grid-column:1/2] sm:[grid-row:1/1] md:grid md:grid-cols-[205px_1fr_1fr] md:[grid-column:1/5] md:[grid-row:3/4] lg:block lg:[grid-column:unset] lg:[grid-row:unset]'>
              <div className='flex justify-center [grid-column:1/2] md:justify-normal'>
                <a
                  href='#'
                  aria-label='GarbhaGudi IVF Centre'
                  className='inline-flex cursor-pointer items-center fill-[#ea4b6a] [&_svg]:h-auto [&_svg]:w-[200px] sm:[&_svg]:w-full'
                >
                  <LogoSvg />
                </a>
              </div>
              <div className='mt-[20px] flex flex-row items-center justify-center [grid-column:3/4] sm:justify-start md:mt-0 md:justify-center lg:mt-[20px] lg:flex-col lg:items-start min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:justify-start [&_a]:text-[#0F2137]'>
                <Link href='/legal/terms-and-conditions'>Terms of use</Link>
                <span className='mx-[10px] inline-flex lg:hidden min-[1200px]:inline-flex'>|</span>
                <Link href='/legal/privacy-policy'>Privacy</Link>
              </div>
              <p className='mt-[15px] text-center text-[14px] text-[#0F2137] [grid-column:2/3] sm:text-left md:mr-auto md:mt-[-31px] md:text-center lg:mr-[unset] lg:mt-[15px] lg:text-left'>
                &copy; GarbhaGudi IVF Center - {new Date().getFullYear()}
              </p>
            </div>
            <div>
              <h4 className={widgetHeading}>About Us</h4>
              <ul className={widgetList}>
                {about.map(({ url, label }) => (
                  <li key={label} className='flex items-center'>
                    <a href={url}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={widgetHeading}>Our Information</h4>
              <ul className={widgetList}>
                {information.map(({ to, label }) => (
                  <li key={label} className='flex items-center'>
                    <Link href={to}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
